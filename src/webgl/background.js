/**
 * Clinica Tiron — Neuform-style translucent bubble spheres
 * v2 — smaller spheres, more movement, device-responsive sizing
 */

import * as THREE from 'three';
import { gsap } from 'gsap';

// ─── Shaders ──────────────────────────────────────────────────────────────────

const BUBBLE_VERT = /* glsl */`
  uniform float uTime;
  uniform float uPhase;
  uniform vec2  uMouse;

  varying vec3  vNormal;
  varying vec3  vViewDir;

  void main() {
    vNormal = normalMatrix * normal;

    vec3 pos = position;

    // More pronounced breathing — was 0.028, now 0.045
    float breath = sin(uTime * 0.55 + uPhase) * 0.045;
    pos += normal * breath;

    // Stronger pointer warp — was 0.018/0.014, now 0.032/0.026
    pos.x += uMouse.x * 0.032;
    pos.y += uMouse.y * 0.026;

    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    vViewDir   = normalize(-mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const BUBBLE_FRAG = /* glsl */`
  uniform vec3  uColor;
  uniform float uTime;
  uniform float uPhase;
  uniform float uOpacity;

  varying vec3  vNormal;
  varying vec3  vViewDir;

  void main() {
    vec3  n       = normalize(vNormal);
    float facing  = max(dot(n, vViewDir), 0.0);
    float fresnel = pow(1.0 - facing, 3.2);

    float alpha  = mix(0.10, 0.90, fresnel);

    // Slightly warmer rim toward white
    vec3 rimCol  = mix(uColor, vec3(1.0), fresnel * 0.55);

    // Iridescent shimmer per bubble phase
    float shimmer = sin(uTime * 0.7 + uPhase + facing * 3.14) * 0.07;
    rimCol += shimmer;

    gl_FragColor = vec4(rimCol, alpha * uOpacity);
  }
`;

// ─── Bubble base config (desktop 1440px baseline) ────────────────────────────
// Radii are 20% smaller than previous version (was 2.2 / 1.6 / 1.2)
const BASE_BUBBLES = [
  { x: -1.6, y:  0.5, z:  0.0, radius: 1.76, phase: 0.0,  speed: 0.016 },
  { x:  2.0, y: -0.2, z: -0.8, radius: 1.28, phase: 2.1,  speed: 0.022 },
  { x:  0.3, y:  1.6, z: -1.2, radius: 0.96, phase: 4.4,  speed: 0.012 },
];

// ─── Responsive scale factor based on viewport width ─────────────────────────
function getResponsiveScale(width) {
  if (width <= 375)  return 0.52;   // small mobile (SE, mini)
  if (width <= 480)  return 0.58;   // mobile portrait
  if (width <= 768)  return 0.68;   // tablet portrait / large mobile landscape
  if (width <= 1024) return 0.80;   // tablet landscape / small laptop
  if (width <= 1280) return 0.90;   // laptop
  if (width <= 1440) return 1.00;   // desktop baseline
  if (width <= 1920) return 1.12;   // large desktop
  return 1.20;                       // 4K / ultrawide
}

// ─── Init ─────────────────────────────────────────────────────────────────────

const initWebGL = () => {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  canvas.style.background = 'transparent';

  // ── Renderer ─────────────────────────────────────────────────────────────
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha:     true,
      antialias: true,
      powerPreference: 'default',
    });
  } catch {
    canvas.style.display = 'none';
    return;
  }

  const hero = canvas.closest('.hero') || canvas.parentElement;
  const getSize = () => ({
    w: hero ? hero.clientWidth  : window.innerWidth,
    h: hero ? hero.clientHeight : window.innerHeight,
  });

  let { w, h } = getSize();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  renderer.setClearColor(0x000000, 0);

  // ── Scene + Camera ────────────────────────────────────────────────────────
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
  camera.position.z = 5;

  // ── Shared geometry ───────────────────────────────────────────────────────
  const sharedGeo = new THREE.SphereGeometry(1, 128, 128);

  // ── Build bubbles ─────────────────────────────────────────────────────────
  const scale = getResponsiveScale(w);

  const bubbleMeshes = BASE_BUBBLES.map((cfg) => {
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:    { value: 0 },
        uPhase:   { value: cfg.phase },
        uMouse:   { value: new THREE.Vector2(0, 0) },
        uColor:   { value: new THREE.Color(0x8A86E5) },
        uOpacity: { value: 0 },
      },
      vertexShader:   BUBBLE_VERT,
      fragmentShader: BUBBLE_FRAG,
      transparent:    true,
      depthWrite:     false,
      depthTest:      false,
      blending:       THREE.NormalBlending,
      side:           THREE.FrontSide,
    });

    const mesh = new THREE.Mesh(sharedGeo, mat);
    mesh.scale.setScalar(cfg.radius * scale);
    mesh.position.set(cfg.x * scale, cfg.y * scale, cfg.z);
    mesh.userData = {
      baseX:  cfg.x,
      baseY:  cfg.y,
      radius: cfg.radius,
      speed:  cfg.speed,
      phase:  cfg.phase,
    };
    scene.add(mesh);
    return mesh;
  });

  // ── Entrance — staggered fade-in ─────────────────────────────────────────
  bubbleMeshes.forEach((mesh, i) => {
    gsap.to(mesh.material.uniforms.uOpacity, {
      value:    1,
      duration: 1.6,
      delay:    0.3 + i * 0.35,
      ease:     'power2.inOut',
    });
  });

  // ── Pointer ───────────────────────────────────────────────────────────────
  const mouse  = new THREE.Vector2(0, 0);
  const target = new THREE.Vector2(0, 0);

  const updateMouse = (cx, cy) => {
    const rect = (hero || canvas).getBoundingClientRect();
    mouse.x =  ((cx - rect.left)  / rect.width  - 0.5) * 2;
    mouse.y = -((cy - rect.top)   / rect.height - 0.5) * 2;
  };
  window.addEventListener('mousemove', (e) => updateMouse(e.clientX, e.clientY));
  window.addEventListener('touchmove', (e) => {
    updateMouse(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  // ── Resize — re-scale spheres to new viewport ─────────────────────────────
  const ro = new ResizeObserver(() => {
    const { w: nw, h: nh } = getSize();
    renderer.setSize(nw, nh);
    camera.aspect = nw / nh;
    camera.updateProjectionMatrix();

    const newScale = getResponsiveScale(nw);
    bubbleMeshes.forEach((mesh) => {
      const { radius, baseX, baseY } = mesh.userData;
      mesh.scale.setScalar(radius * newScale);
      mesh.userData.currentScale = newScale;
      // Reposition so bubbles stay in frame on narrow screens
      mesh.position.x = mesh.userData.baseX * newScale;
      mesh.position.y = mesh.userData.baseY * newScale;
    });
  });
  ro.observe(hero || document.body);

  // ── Render loop ───────────────────────────────────────────────────────────
  const clock = new THREE.Clock();

  const tick = () => {
    requestAnimationFrame(tick);
    const t = clock.getElapsedTime();

    // Smoother, stronger drift — was 0.04/0.03
    target.x += (mouse.x - target.x) * 0.055;
    target.y += (mouse.y - target.y) * 0.045;

    bubbleMeshes.forEach((mesh) => {
      const { baseX, baseY, speed, phase } = mesh.userData;
      const s = mesh.userData.currentScale ?? getResponsiveScale(getSize().w);

      mesh.material.uniforms.uTime.value  = t;
      mesh.material.uniforms.uMouse.value.copy(target);

      // More movement — float amplitude was 0.18/0.14, now 0.30/0.22
      mesh.position.x = baseX * s + Math.sin(t * speed + phase)       * 0.30 + target.x * 0.18;
      mesh.position.y = baseY * s + Math.sin(t * speed * 0.65 + phase) * 0.22 + target.y * 0.14;

      // More rotation — was speed*0.5, now speed*1.2
      mesh.rotation.y = t * speed * 1.2;
      mesh.rotation.z = t * speed * 0.8;
    });

    renderer.render(scene, camera);
  };

  tick();

  return () => {
    ro.disconnect();
    sharedGeo.dispose();
    bubbleMeshes.forEach((m) => m.material.dispose());
    renderer.dispose();
  };
};

export default initWebGL;
