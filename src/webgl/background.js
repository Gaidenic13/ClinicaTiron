/**
 * Clinica Tiron — Neuform-style translucent bubble spheres
 *
 * Fixes applied:
 *  1. THREE.NormalBlending   — glass reads through to background, not additive glow
 *  2. Correct sphere scale   — radius 1.5–2.5, camera z=5 to match
 *  3. Canvas scoped to hero  — position:absolute inside .hero, not fixed page-wide
 *  4. Higher fresnel alpha   — rim 0.80, core 0.10 so glass edge is visible on light bg
 *  5. Lavender #8A86E5 color — matches Neuform palette
 */

import * as THREE from 'three';
import { gsap } from 'gsap';

// ─── Shaders ──────────────────────────────────────────────────────────────────

const BUBBLE_VERT = /* glsl */`
  uniform float uTime;
  uniform float uPhase;   // per-bubble phase offset
  uniform vec2  uMouse;

  varying vec3  vNormal;
  varying vec3  vViewDir;

  void main() {
    vNormal = normalMatrix * normal;

    vec3 pos = position;

    // Slow breathing pulse — each bubble breathes at its own phase
    float breath = sin(uTime * 0.45 + uPhase) * 0.028;
    pos += normal * breath;

    // Subtle pointer drift — shape warps very slightly toward mouse
    pos.x += uMouse.x * 0.018;
    pos.y += uMouse.y * 0.014;

    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);

    // View direction for fresnel
    vViewDir = normalize(-mvPos.xyz);

    gl_Position = projectionMatrix * mvPos;
  }
`;

const BUBBLE_FRAG = /* glsl */`
  uniform vec3  uColor;   // lavender base ~#8A86E5
  uniform float uTime;
  uniform float uOpacity; // master fade for entrance animation

  varying vec3  vNormal;
  varying vec3  vViewDir;

  void main() {
    vec3 n = normalize(vNormal);

    // Fresnel — bright rim, transparent core
    // dot(n, viewDir): 1 at centre facing camera, 0 at silhouette edge
    float facing  = max(dot(n, vViewDir), 0.0);
    float fresnel = pow(1.0 - facing, 3.2);

    // Glass: nearly transparent centre, strong glassy rim
    // Core: ~0.10 alpha — you see through the bubble but it's present
    // Rim:  ~0.90 alpha — reads as a solid glass edge
    float alpha = mix(0.10, 0.90, fresnel);

    // Rim slightly brightens toward white (specular highlight)
    vec3 rimCol  = mix(uColor, vec3(1.0), fresnel * 0.55);

    // Tiny inner iridescent shimmer — shifts hue slightly over time
    float shimmer = sin(uTime * 0.6 + facing * 3.14) * 0.06;
    rimCol += shimmer;

    gl_FragColor = vec4(rimCol, alpha * uOpacity);
  }
`;

// ─── Bubble config ────────────────────────────────────────────────────────────

const BUBBLES = [
  // { x, y, z, radius, phase, speed }
  { x: -1.8, y:  0.5, z:  0.0, radius: 2.2, phase: 0.0,  speed: 0.012 },
  { x:  2.2, y: -0.3, z: -0.8, radius: 1.6, phase: 2.1,  speed: 0.018 },
  { x:  0.4, y:  1.8, z: -1.2, radius: 1.2, phase: 4.4,  speed: 0.009 },
];

// ─── Init ─────────────────────────────────────────────────────────────────────

const initWebGL = () => {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  // ── Renderer ─────────────────────────────────────────────────────────────
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha:     true,    // transparent bg — hero background shows through
      antialias: true,    // clean silhouette edges for glass spheres
      powerPreference: 'default',
    });
  } catch {
    canvas.style.display = 'none';
    return;
  }

  // Size renderer to hero container, not full window
  const hero = canvas.closest('.hero') || canvas.parentElement;
  const W = hero ? hero.clientWidth  : window.innerWidth;
  const H = hero ? hero.clientHeight : window.innerHeight;

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0); // fully transparent clear

  // ── Scene + Camera ────────────────────────────────────────────────────────
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
  camera.position.z = 5; // correct distance for radius 1.5–2.5 spheres

  // ── Shared geometry ───────────────────────────────────────────────────────
  // High-poly for smooth silhouette — glass edges need clean curves
  const sharedGeo = new THREE.SphereGeometry(1, 128, 128);

  // ── Build bubbles ─────────────────────────────────────────────────────────
  const bubbleMeshes = BUBBLES.map((cfg) => {
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:    { value: 0 },
        uPhase:   { value: cfg.phase },
        uMouse:   { value: new THREE.Vector2(0, 0) },
        uColor:   { value: new THREE.Color(0x8A86E5) }, // lavender #8A86E5
        uOpacity: { value: 0 },                         // starts invisible — GSAP fades in
      },
      vertexShader:   BUBBLE_VERT,
      fragmentShader: BUBBLE_FRAG,
      transparent:    true,
      depthWrite:     false,
      depthTest:      false,  // prevents bubbles clipping each other
      blending:       THREE.NormalBlending, // ← glass, not additive glow
      side:           THREE.FrontSide,
    });

    const mesh = new THREE.Mesh(sharedGeo, mat);
    mesh.scale.setScalar(cfg.radius);
    mesh.position.set(cfg.x, cfg.y, cfg.z);
    mesh.userData = { baseX: cfg.x, baseY: cfg.y, speed: cfg.speed, phase: cfg.phase };
    scene.add(mesh);
    return mesh;
  });

  // ── GSAP entrance — staggered fade-in ────────────────────────────────────
  bubbleMeshes.forEach((mesh, i) => {
    gsap.to(mesh.material.uniforms.uOpacity, {
      value:    1,
      duration: 1.6,
      delay:    0.3 + i * 0.4,
      ease:     'power2.inOut',
    });
  });

  // ── Pointer ───────────────────────────────────────────────────────────────
  const mouse  = new THREE.Vector2(0, 0);
  const target = new THREE.Vector2(0, 0);

  window.addEventListener('mousemove', (e) => {
    // Normalize to -1…1 relative to the hero container
    const rect = (hero || canvas).getBoundingClientRect();
    mouse.x =  ((e.clientX - rect.left)  / rect.width  - 0.5) * 2;
    mouse.y = -((e.clientY - rect.top)   / rect.height - 0.5) * 2;
  });

  window.addEventListener('touchmove', (e) => {
    const t    = e.touches[0];
    const rect = (hero || canvas).getBoundingClientRect();
    mouse.x =  ((t.clientX - rect.left)  / rect.width  - 0.5) * 2;
    mouse.y = -((t.clientY - rect.top)   / rect.height - 0.5) * 2;
  }, { passive: true });

  // ── Resize ────────────────────────────────────────────────────────────────
  const ro = new ResizeObserver(() => {
    const w = hero ? hero.clientWidth  : window.innerWidth;
    const h = hero ? hero.clientHeight : window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
  ro.observe(hero || document.body);

  // ── Render loop ───────────────────────────────────────────────────────────
  const clock = new THREE.Clock();

  const tick = () => {
    requestAnimationFrame(tick);
    const t = clock.getElapsedTime();

    // Smooth mouse drift
    target.x += (mouse.x - target.x) * 0.04;
    target.y += (mouse.y - target.y) * 0.03;

    bubbleMeshes.forEach((mesh) => {
      const { baseX, baseY, speed, phase } = mesh.userData;

      // Update per-bubble time uniform
      mesh.material.uniforms.uTime.value  = t;
      mesh.material.uniforms.uMouse.value.copy(target);

      // Slow float: each bubble drifts independently
      mesh.position.x = baseX + Math.sin(t * speed + phase)        * 0.18 + target.x * 0.12;
      mesh.position.y = baseY + Math.sin(t * speed * 0.7 + phase)  * 0.14 + target.y * 0.10;

      // Very slow rotation for iridescent shimmer variation
      mesh.rotation.y = t * speed * 0.5;
      mesh.rotation.z = t * speed * 0.3;
    });

    renderer.render(scene, camera);
  };

  tick();

  // ── Cleanup (for SPA hot-reload) ──────────────────────────────────────────
  return () => {
    ro.disconnect();
    sharedGeo.dispose();
    bubbleMeshes.forEach((m) => m.material.dispose());
    renderer.dispose();
  };
};

export default initWebGL;
