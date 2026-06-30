/**
 * ARTICLES DATA – Clinica Tiron
 * ================================
 * HOW TO ADD A NEW ARTICLE:
 *   1. Copy the stub at the bottom of this file.
 *   2. Fill all fields.
 *   3. For bodyContent: paste full HTML. Supported elements:
 *        <h2>, <h3>, <p>, <ul>/<li>, <ol>/<li>
 *        <div class="info-box"><p>...</p></div>      ← blue callout
 *        <div class="warning-box"><p>...</p></div>   ← amber warning
 *        <div class="key-facts"><h4>...</h4><ul>...</ul></div>  ← dark panel
 *   4. Save and run: npm run dev
 *
 * FIELDS:
 *   slug            – URL-safe ID (used in ?slug= query param)
 *   title           – Article title
 *   shortDesc       – 1–2 sentence summary (also used as meta description)
 *   category        – Must match a key in CATEGORIES below
 *   keywords        – Array of SEO keyword strings for this article
 *   author          – Author name
 *   readingTime     – Estimated reading minutes (number)
 *   isFeatured      – true = shown as featured card at top
 *   featuredImage   – URL to image (leave "" for placeholder)
 *   featuredImageAlt – Alt text for featured image
 *   sourceUrl       – Original source URL
 *   bodyContent     – Full HTML string. null = content not yet written.
 */

export const CATEGORIES = {
  "ozonoterapie":    { label: "Ozonoterapie",              icon: "solar:sun-2-linear" },
  "amt":             { label: "Analiză Minerală Tisulară", icon: "solar:test-tube-linear" },
  "prp":             { label: "PRP & Regenerare",          icon: "solar:dropper-linear" },
  "posturologie":    { label: "Posturologie",              icon: "solar:body-linear" },
  "vitamine":        { label: "Vitamine & Perfuzii",       icon: "solar:pill-linear" },
  "medicina-sport":  { label: "Medicină Sportivă",         icon: "solar:running-round-linear" },
  "clinica":         { label: "Despre Clinică",            icon: "solar:hospital-linear" },
};

export const ARTICLES = [

  /* ──────────────────────────────────────────
     1. OZONOTERAPIE (featured)
  ────────────────────────────────────────── */
  {
    slug: "ozonoterapie-ghid-complet",
    title: "Ozonoterapia – Ghid Complet: Cum Funcționează și Ce Tratează",
    shortDesc: "Ozonoterapia este o metodă modernă de tratament nemedicamentos care folosește un amestec de oxigen-ozon cu proprietăți antibacteriene, antiinflamatorii și imunomodulatoare.",
    category: "ozonoterapie",
    keywords: ["ozonoterapie", "ozonoterapie bucuresti", "tratament cu ozon", "autohemoterapie", "ozon terapie", "clinica tiron"],
    author: "Dr. Ștefan Tiron",
    readingTime: 9,
    isFeatured: true,
    featuredImage: "",
    featuredImageAlt: "Ozonoterapie – tratament cu ozon în clinică",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/2393",
    bodyContent: `
<p>Ozonoterapia este o metodă inovatoare de tratament nemedicamentos care utilizează un amestec controlat de oxigen și ozon. Prin tehnicile sale, permite reducerea consumului de medicamente alopate și, implicit, a reacțiilor secundare ale acestora.</p>

<div class="key-facts">
  <h4>Proprietățile principale ale ozonului</h4>
  <ul>
    <li>Antibacteriană, antifungică și antivirală</li>
    <li>Antiinflamatorie și imunomodulatoare</li>
    <li>De reglare sistemică a homeostaziei</li>
    <li>Optimizarea funcțiilor organelor și sistemelor</li>
  </ul>
</div>

<h2>Scurt istoric</h2>
<p>Istoria ozonoterapiei începe în 1896, când Nikola Tesla a brevetat în SUA primul generator de ozon medical. De atunci, cercetătorii europeni și americani au extins treptat aplicațiile clinice: medicul german A. Wolff a folosit ozonul în chirurgia de campanie din Primul Război Mondial, iar Hans Wolff a introdus în 1961 tehnica autohemoterapiei cu ozon.</p>
<p>În 1987, profesorii germani Renate Viebahn și Zigfrid Rilling au publicat primul manual de ozonoterapie, cu protocoale pentru aproape 100 de afecțiuni. Astăzi, ozonoterapia este practicată larg în SUA, Germania, Rusia, Italia, Spania, Cuba și alte țări.</p>

<h2>Cum acționează ozonul în organism</h2>
<p>Ozonul are proprietăți oxidative majore datorate instabilității sale moleculare. Numai concentrațiile foarte mici — de 50 de ori sub doza toxică minimă (max 80 μg/ml) — au efect terapeutic. Un studiu al Societății Medicale Germane a constatat că probabilitatea unei reacții secundare este de <strong>0,000005% per ședință</strong>.</p>

<h3>Efectul antimicrobian</h3>
<p>Efectul bactericid al ozonului este de două ori mai mare decât cel al clorului, este eficient și în cazurile rezistente la antibiotice și, esențial, nu acționează asupra florei saprofite benefice organismului.</p>

<h3>Refacerea transportului de oxigen</h3>
<p>Administrarea amestecului ozon–oxigen crește cantitatea de oxigen din sânge, activează procesele metabolice în eritrocite și îmbunătățește fluiditatea sângelui, reducând hipoxia țesuturilor.</p>

<h3>Acțiunea imunomodulatoare</h3>
<p>În concentrații mici ozonul are efect imunostimulator, activând atât mecanismele celulare (T-limfocite, monocite) cât și cele umorale (sinteza de citokine, interferon, factori de necroză tumorală).</p>

<h2>Metode de administrare</h2>

<h3>Metode sistemice</h3>
<ol>
  <li><strong>Autohemoterapia majoră</strong> – 50–150 ml de sânge venos amestecat cu ozon și reperfuzat. Durată ~1 oră. Indicată în afecțiuni cardiovasculare, autoimune, hepatice, anti-aging.</li>
  <li><strong>Autohemoterapia minoră</strong> – 10–15 ml de sânge amestecat cu ozon și reinjectat intramuscular. Indicată în deficit imunitar, infecții virale, acnee.</li>
  <li><strong>Insuflaţii rectale</strong> – alternativă la autohemoterapia majoră; ozonul se absoarbe ușor prin mucoasa intestinală cu efect general și local.</li>
</ol>

<h3>Metode locale</h3>
<ul>
  <li>Infiltrații subcutanate în zonele cu probleme (dermatologie, reumatologie, celulită)</li>
  <li>Infiltrații intraarticulare în afecțiuni reumatismale</li>
  <li>Ozonopunctura – infiltrații în punctele de acupunctură</li>
  <li>Apă și ulei ozonificate pentru uz intern și extern</li>
  <li>Saci hipobarici pentru plăgi infectate și ulcere varicoase</li>
</ul>

<h2>Afecțiuni tratate</h2>
<ul>
  <li><strong>Reumatologie:</strong> artroze, discopatii, hernii de disc, tendinite, bursite, fibromialgii</li>
  <li><strong>Cardiovascular:</strong> ateroscleroză, arterite, afecțiuni venoase, complicații diabetice</li>
  <li><strong>Dermatologie &amp; estetică:</strong> acnee, psoriazis, herpes, celulită, riduri, cicatrici</li>
  <li><strong>Neurologie:</strong> Alzheimer, Parkinson, scleroză multiplă, recuperare post-AVC</li>
  <li><strong>Gastro-hepatic:</strong> hepatite, colită, refacerea florei intestinale</li>
</ul>

<h2>Contraindicații</h2>
<div class="warning-box">
  <p><strong>Ozonoterapia nu se recomandă în:</strong> hipertiroidism, deficit de G-6-PD, hipertensiune arterială peste 160 mmHg, accident vascular hemoragic, stări posthemoragice, trombocitopenii.</p>
</div>

<div class="info-box">
  <p>Ozonoterapia nu este un panaceu, dar este o metodă eficientă de prevenție, de reducere a puseelor acute și de îmbunătățire a calității vieții, cu un profil de siguranță excepțional demonstrat clinic.</p>
</div>
    `
  },

  /* ──────────────────────────────────────────
     2. OZONOTERAPIA ÎN ACNEE
  ────────────────────────────────────────── */
  {
    slug: "ozonoterapia-in-acnee",
    title: "Ozonoterapia în Acnee – Tratament Local cu Injecții de Ozon",
    shortDesc: "Injecțiile locale cu ozon reduc inflamația acneică, scurtează durata tratamentului de 2–3 ori față de metodele tradiționale și nu produc efecte secundare.",
    category: "ozonoterapie",
    keywords: ["ozonoterapie acnee", "tratament acnee injectii ozon", "ozon dermatologie", "cicatrici acnee tratament"],
    author: "Dr. Ștefan Tiron",
    readingTime: 5,
    isFeatured: false,
    featuredImage: "https://www.romedic.ro/uploadpoze/ar_15359.jpg",
    featuredImageAlt: "Tratament ozonoterapie pentru acnee",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/15359",
    bodyContent: `
<p>Terapia cu ozon aplicată în acnee folosește injecții locale de ozon în zonele cu inflamație activă — infiltrate, pustule, elemente inflamatorii. Rezultatele clinice sunt vizibile încă de la prima procedură, iar durata totală a tratamentului este redusă de 2–3 ori față de metodele clasice.</p>

<h2>Cum se realizează procedura</h2>
<p>Adâncimea și numărul de injecții per focar depind de mărimea elementului inflamator. Se injectează până la 5 ml de amestec gazos ozon/oxigen în fiecare punct. Un curs complet constă în 4–5 proceduri la interval de 5 zile.</p>

<div class="info-box">
  <p><strong>Toți pacienții raportează ameliorare clinică după o singură procedură:</strong> înmuierea infiltratului, scăderea edemului, a exudatului, a hiperemiei și a durerii.</p>
</div>

<h2>Când se recomandă autohemoterapia cu ozon</h2>
<p>În cazul unui curs lent al bolii acneice sau al unui proces difuz extins, cea mai eficientă abordare este autohemoterapia cu ozon, care crește imunitatea sistemică și produce un efect antibacterian generalizat. Ozonul face parte, de asemenea, din protocolul de reabilitare postoperatorie pentru prevenirea complicațiilor.</p>

<h2>Beneficii suplimentare în dermatocosmetologie</h2>
<p>Ozonul intensifică limfodrenajul, reface microcirculația, îmbunătățește trofismul tisular și stimulează procesele metabolice locale. Este deosebit de util în gestionarea cicatricilor hipertrofice:</p>
<ul>
  <li>Dispariția senzației de constricție a pielii</li>
  <li>Limitarea și înmuierea cicatricilor</li>
  <li>Resorbția ulterioară a țesutului fibros</li>
  <li>Netezirea semnificativă a suprafeței cicatricii</li>
  <li>Refacerea elasticității tisulare</li>
</ul>

<div class="key-facts">
  <h4>De reținut</h4>
  <ul>
    <li>Nu se observă nicio complicație sau efect secundar</li>
    <li>Tratamentul este scurtat de 2–3× față de metodele tradiționale</li>
    <li>Aplicabil atât pentru acnee activă cât și pentru cicatrici post-acneice</li>
    <li>Poate fi asociat cu alte proceduri estetice</li>
  </ul>
</div>
    `
  },

  /* ──────────────────────────────────────────
     3. ANALIZA MINERALĂ TISULARĂ
  ────────────────────────────────────────── */
  {
    slug: "analiza-minerala-tisulara",
    title: "Analiza Minerală Tisulară (AMT) – Metoda Modernă de Evaluare a Sănătății",
    shortDesc: "AMT analizează 36 de minerale din firul de păr, oferind o imagine completă a dezechilibrelor nutriționale, intoxicațiilor cronice și fazei de răspuns la stres — nedetectabile prin analizele clasice de sânge.",
    category: "amt",
    keywords: ["analiza minerala tisulara", "amt par", "test minerale corp", "metale toxice analiza", "medicina functionala bucuresti"],
    author: "Dr. Ștefan Tiron",
    readingTime: 8,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Analiza minerală tisulară – laborator",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/2459",
    bodyContent: `
<p>Una dintre cele mai moderne, complete și neinvazive metode de laborator pentru evaluarea stării de sănătate este analiza minerală tisulară (AMT). Studii efectuate pe parcursul a 40 de ani pe sute de mii de cazuri de cercetători americani (Dr. David Watts, Dr. George Watson, Dr. Paul Eck, Dr. Wilson) au arătat că nivelurile mineralelor din firul de păr se corelează excelent cu cele din țesuturile corpului.</p>

<div class="key-facts">
  <h4>De ce AMT este unică</h4>
  <ul>
    <li>Modernă – bazată pe spectrofotometrie cu absorbție atomică (tehnologie NASA)</li>
    <li>Completă – evaluează 30 minerale esențiale + 6 minerale toxice într-o singură determinare</li>
    <li>Neinvazivă – necesită doar câteva fire de păr tăiate aproape de scalp</li>
    <li>Preventivă – detectează dezechilibre înainte ca boala să se manifeste clinic</li>
  </ul>
</div>

<h2>Diferența față de analizele de sânge</h2>
<p>Sângele are rolul de a transporta substanțe între țesuturi, nu de a le depozita. O analiză sanguină arată doar indirect ce se întâmplă în țesuturi, iar interpretarea poate fi uneori eronată.</p>
<p>Mineralele toxice rămân în sânge o perioadă foarte scurtă (minute), după care se fixează în țesuturi. Analiza sanguină este influențată de alimentația din ultimele ore — orice exces poate modifica valorile. AMT, în schimb, reflectă o medie metabolică pe termen lung.</p>

<h2>Ce evaluează AMT</h2>
<ul>
  <li><strong>Acumulări de minerale toxice</strong> (plumb, mercur, cadmiu, aluminiu etc.) — intoxicații cronice subclinice nedetectabile prin analize obișnuite</li>
  <li><strong>Faza de răspuns la stres</strong> — pentru prima dată, stresul poate fi obiectivat și tratat</li>
  <li><strong>Tipul metabolismului energetic</strong> — individualizat per pacient</li>
  <li><strong>Necesarul de minerale</strong> al fiecărui organism</li>
  <li><strong>Capacitatea de apărare antiinfecțioasă</strong></li>
  <li><strong>Eficiența hormonilor la nivel tisular</strong></li>
  <li><strong>Metabolismul glucidic</strong> — tendința spre diabet</li>
</ul>

<h2>Fazele de răspuns la stres (teoria Dr. Hans Selye)</h2>
<p>AMT permite identificarea fazei în care se află pacientul în cadrul Sindromului General de Adaptare (G.A.S.), prin raportul Na/K și valorile raporturilor hormonale tisulare:</p>
<ol>
  <li><strong>Faza de alarmă</strong> – sistemul imun este inițial deprimat; vulnerabilitate crescută la infecții</li>
  <li><strong>Faza de rezistență</strong> – organismul încearcă adaptarea; crește activitatea imunitară</li>
  <li><strong>Faza de epuizare</strong> – sistemul imun cedează; apar boli de adaptare (ulcer, astm, colită)</li>
</ol>

<div class="info-box">
  <p>AMT indică tendința spre: modificări ale metabolismului glucidic, infecții recurente, osteoporoză, litiază, anemie, disfuncții tiroidiene și suprarenaliene, patologii digestive — <strong>înainte</strong> ca acestea să fie vizibile în analizele de sânge.</p>
</div>

<div class="warning-box">
  <p><strong>Recomandare:</strong> Ideal, analiza trebuie efectuată la fiecare 6 luni, urmând tratamentul nutrițional prescris între determinări.</p>
</div>
    `
  },

  /* ──────────────────────────────────────────
     4. TERAPIA PRP
  ────────────────────────────────────────── */
  {
    slug: "terapia-prp",
    title: "Terapia PRP – Plasma Bogată în Plachete pentru Regenerare și Anti-Aging",
    shortDesc: "Tratamentul cu PRP (platelet rich plasma) folosește factorii de creștere din propriul sânge al pacientului pentru regenerarea tisulară, rejuvenare estetică și recuperare ortopedică.",
    category: "prp",
    keywords: ["terapia prp", "plasma bogata plachete", "plasmalifting", "prp estetic", "prp par cadere", "regenerare tisulara"],
    author: "Dr. Ștefan Tiron",
    readingTime: 7,
    isFeatured: false,
    featuredImage: "https://www.romedic.ro/uploadpoze/ar_18033.jpg",
    featuredImageAlt: "Terapia PRP – plasma bogată în plachete",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/18033",
    bodyContent: `
<p>Injectarea de plasmă bogată în plachete (PRP – <em>platelet rich plasma</em>) este un tratament revoluționar bazat pe o idee simplă: folosirea resurselor interne ale propriului organism pentru vindecarea și regenerarea țesuturilor. Plachetele sanguine conțin peste <strong>40 de factori de creștere</strong> implicați în regenerarea conjunctivă și epitelială, producția de colagen și formarea de noi vase de sânge.</p>

<h2>Cum se prepară PRP</h2>
<p>Se recoltează o mică cantitate de sânge de la pacient (similar cu prelevarea pentru analize), care este prelucrată prin centrifugare. Procesul separă plachetele de celelalte celule sanguine, obținând un cocktail concentrat de factori de creștere, gata pentru injectare.</p>

<div class="key-facts">
  <h4>Avantajele terapiei PRP</h4>
  <ul>
    <li>Compus 100% natural, din sângele propriu al pacientului</li>
    <li>Fără risc de alergii, respingere, infecție sau granuloame</li>
    <li>Preparare simplă și rapidă (30 minute)</li>
    <li>Efect natural și de lungă durată</li>
    <li>Cost semnificativ mai mic față de botox sau fillere</li>
    <li>Poate fi asociat cu fillere, botox și laser-terapie</li>
  </ul>
</div>

<h2>Indicații estetice</h2>
<p>Denumit sugestiv "terapia vampir", PRP în medicină estetică produce un efect de rejuvenare și lifting:</p>
<ul>
  <li>Atenuarea ridurilor (inclusiv zona perioculară)</li>
  <li>Îmbunătățirea texturii și hidratarea pielii</li>
  <li>Stimularea creșterii părului (alopecie, calvitie)</li>
  <li>Estomparea cicatricilor post-acneice sau atrofice</li>
  <li>Fața, gâtul, decolteu, dosul mâinilor</li>
</ul>

<h2>Indicații ortopedice</h2>
<p>Inițial dezvoltat pentru medicina sportivă, PRP are o arie de acoperire vastă în ortopedie:</p>
<ul>
  <li>Artroze (șold, genunchi, gleznă, umăr)</li>
  <li>Tendinite și tendinoze</li>
  <li>Rupturi musculare, de menisc, de ligamente</li>
  <li>Bursite, sinovite cronice</li>
  <li>Fracturi și fisuri osoase</li>
</ul>

<div class="info-box">
  <p>În SUA, PRP este utilizat curent pentru recuperarea sportivilor din NFL, NBA, NHL. În Europa, marile cluburi de fotbal, handbal și atletism folosesc această terapie pentru revenirea rapidă a atletilor pe teren.</p>
</div>

<div class="warning-box">
  <p>Terapia PRP nu se recomandă pacienților cu: coagulopatie, anumite boli sanguine sau anemie severă. Consultați medicul pentru evaluare prealabilă.</p>
</div>
    `
  },

  /* ──────────────────────────────────────────
     REST: bodyContent to be written
  ────────────────────────────────────────── */
  {
    slug: "posturologie-posturotest",
    title: "Posturologie – Analiza POSTUROTEST și Reprogramarea Posturală",
    shortDesc: "POSTUROTEST este o analiză computerizată de 10 minute care identifică cauzele durerilor de spate, genunchi și migrenelor printr-o abordare posturală integrativă.",
    category: "posturologie",
    keywords: ["posturologie", "posturotest", "analiza posturala", "dureri spate cauza postura", "reprogramare posturala", "posturologie bucuresti"],
    author: "Dr. Ștefan Tiron",
    readingTime: 6,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Analiza posturală POSTUROTEST",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/2394",
    bodyContent: `
<p>Posturologia este o știință relativ nouă care studiază relația dintre sistemul postural și diversele afecțiuni ale aparatului locomotor, sistemului nervos și organelor interne. Corpul uman este un sistem integrat: o modificare minoră în poziția unui picior poate cauza dureri de genunchi, șold, coloană sau chiar migrene cronice.</p>

<div class="key-facts">
  <h4>Ce evaluează POSTUROTEST</h4>
  <ul>
    <li>Dezechilibre posturale ascunse nedetectabile clinic clasic</li>
    <li>Tonus muscular asimetric și compensații posturale</li>
    <li>Influența receptorilor plantari, oculari și mandibulari</li>
    <li>Cauza reală a durerilor cronice de coloană, genunchi și cap</li>
  </ul>
</div>

<h2>Ce este POSTUROTEST</h2>
<p>POSTUROTEST este un sistem computerizat de analiză posturală care măsoară, în timp real, distribuția greutății corporale pe o platformă de stabilometrie. Analiza durează 10 minute și furnizează un raport vizual complet al dezechilibrelor posturale, identificând cauzele ascunse ale durerii cronice.</p>
<p>Spre deosebire de radiografie sau RMN — care arată structura anatomică — POSTUROTEST evaluează <strong>funcția posturală dinamică</strong>: cum se echilibrează corpul în spațiu și ce compensații musculare a dezvoltat în timp.</p>

<h2>Receptorii posturali — de ce contează</h2>
<p>Sistemul postural este controlat de trei tipuri principale de receptori:</p>
<ol>
  <li><strong>Receptorii plantari</strong> — tălpile picioarelor informează creierul despre suprafața de sprijin. O talpă aplatizată sau o asimetrie de lungime a membrelor creează dezechilibre în toată coloana.</li>
  <li><strong>Receptorii oculomotori</strong> — ochii participă activ la echilibrul postural. Un strabism latent sau o asimetrie a câmpului vizual poate înclina bazinul și genera scolioză funcțională.</li>
  <li><strong>Receptorii mandibulari</strong> — articulația temporo-mandibulară (maxilarul) influențează toată tensiunea musculară cervicală. Un dinte lipsă sau o ocluzie incorectă se poate manifesta ca cervicalgie sau migrenă.</li>
</ol>

<h2>Reprogramarea posturală</h2>
<p>După identificarea dezechilibrelor prin POSTUROTEST, tratamentul constă în reprogramarea sistemului postural prin:</p>
<ul>
  <li>Branțuri posturale personalizate (corectează receptorii plantari)</li>
  <li>Exerciții de reprogramare oculo-posturală</li>
  <li>Colaborare cu medicul stomatolog pentru corecții ocluzale dacă este cazul</li>
  <li>Kinetoterapie posturală specifică</li>
  <li>Ozonoterapie locală pentru reducerea inflamației articulare asociate</li>
</ul>

<div class="info-box">
  <p>Studiile clinice arată că <strong>85% din durerile cronice de spate</strong> au o componentă posturală identificabilă — și tratabilă fără intervenție chirurgicală, prin corectarea cauzei reale, nu a simptomului.</p>
</div>

<h2>Cine beneficiază de POSTUROTEST</h2>
<ul>
  <li>Pacienți cu dureri lombare sau cervicale recidivante</li>
  <li>Sportivi cu leziuni repetitive fără cauză anatomică clară</li>
  <li>Copii cu scolioză funcțională sau tulburări de mers</li>
  <li>Persoane cu migrene cronice fără răspuns la tratament medicamentos</li>
  <li>Pacienți post-operatori cu persistența durerii</li>
</ul>

<div class="warning-box">
  <p>POSTUROTEST nu înlocuiește investigațiile imagistice, ci le completează. Recomandăm evaluarea în cadrul unui consult de specialitate care integrează toate datele clinice.</p>
</div>
    `
  },
  {
    slug: "posturologie-interviu-radio",
    title: "Posturologia – Interviu Radio SMART FM cu Dr. Ștefan Tiron",
    shortDesc: "Dr. Tiron explică la Radio SMART FM de ce corpul uman trebuie tratat ca un tot unitar și cum posturologia identifică cauzele ascunse ale durerilor cronice.",
    category: "posturologie",
    keywords: ["posturologie", "dureri cronice cauze", "dr tiron radio", "tratament holistic coloana"],
    author: "Dr. Ștefan Tiron",
    readingTime: 4,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Posturologie interviu radio",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/19580",
    bodyContent: `
<p>Într-un interviu acordat Radio SMART FM, Dr. Ștefan Tiron a explicat publicului larg principiile posturologiei și modul în care această disciplină schimbă abordarea tradițională a durerilor cronice.</p>

<h2>„Corpul uman este un tot unitar"</h2>
<p>„Medicii obișnuiți tratează simptomul. Dacă te doare genunchiul, primești antiinflamatoare pentru genunchi. Dar dacă acel genunchi doare pentru că piciorul opus este mai scurt cu 4 mm și bazinul este basculat, tratamentul local nu va rezolva niciodată problema definitiv," a explicat Dr. Tiron.</p>
<p>Posturologia pornește de la premisa că sistemul postural uman este un sistem integrat de echilibrare permanentă. Orice dezechilibru — fie el în talpă, maxilar sau câmpul vizual — generează compensații în lanț care se manifestă ca durere la distanță de cauza reală.</p>

<h2>De ce eșuează tratamentele clasice</h2>
<p>Conform Dr. Tiron, principalul motiv pentru care pacienții cu dureri cronice trec pe la zeci de medici fără rezultat este că investigațiile standard (radiografie, RMN, ecografie) evaluează <em>structura</em>, nu <em>funcția posturală</em>. Un RMN normal nu exclude o cauză posturală a durerii.</p>
<ul>
  <li>Durerile lombare cronice au cauză posturală în 60–85% din cazuri</li>
  <li>Migrenele de tensiune sunt frecvent asociate cu disfuncții temporo-mandibulare</li>
  <li>Gonartrozele se agravează semnificativ prin dezechilibre de ax al membrului inferior</li>
  <li>Vertijul cronic non-vestibular poate fi de origine posturală</li>
</ul>

<h2>Cum arată o consultație posturologică</h2>
<p>Consultația include anamneza detaliată (când a apărut durerea, ce o agravează, istoricul dentar și ocular), examinarea clinică a posturii în ortostatism și mers, și analiza POSTUROTEST pe platformă stabilometrică. Întreg procesul durează 45–60 de minute și se finalizează cu un raport vizual și un plan terapeutic personalizat.</p>

<div class="info-box">
  <p>Posturologia nu este o alternativă la medicina tradițională, ci un nivel suplimentar de diagnostic care identifică cauzele sistemice ale durerii cronice, permițând un tratament cu adevărat cauzal.</p>
</div>
    `
  },
  {
    slug: "cefaleea-si-cervicalgia",
    title: "Cefaleea și Cervicalgia în Contextul Tulburărilor Posturale",
    shortDesc: "Tratamentul durerilor de cap și cervicalgiei prin injecții cu amestec O₂+O₃, cu prezentarea etiologiei posturale și a protocoalelor clinice utilizate.",
    category: "posturologie",
    keywords: ["cefalee tratament", "cervicalgie tratament", "dureri cap cauze posturale", "ozon cervicalgie"],
    author: "Dr. Ștefan Tiron",
    readingTime: 6,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Cefalee și cervicalgie posturală",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/14776",
    bodyContent: `
<p>Cefaleea de tensiune și cervicalgia (durerea de gât) reprezintă două dintre cele mai frecvente motive de consultație neurologică și reumatologică. În practica clinică, ele apar adesea împreună și au frecvent un substrat postural neidentificat prin investigațiile standard.</p>

<h2>Etiologia posturală a cefaleei</h2>
<p>Creierul nu are receptori de durere proprii. Durerea de cap provine întotdeauna dintr-o structură pericraniană: mușchi, articulații, nervi sau vase sanguine. În cefaleea de tensiune, principalii vinovați sunt:</p>
<ul>
  <li>Contractura mușchilor suboccipitali și trapez (legată de postura capului)</li>
  <li>Disfuncția articulației temporo-mandibulare (ATM)</li>
  <li>Compresia nervilor occipitali în urma contracturilor cervicale</li>
  <li>Hipoperfuzia arterelor vertebrale prin blocaje cervicale superioare</li>
</ul>

<div class="key-facts">
  <h4>Tipuri de cefalee cu componentă posturală</h4>
  <ul>
    <li>Cefaleea cervicogenă — durere care pornește din gât și iradiază spre frunte/tâmplă</li>
    <li>Cefaleea de tensiune episodică și cronică</li>
    <li>Migrena cu aură asociată disfuncției ATM</li>
    <li>Cefaleea occipitală prin nevralgii ale nervilor C2–C3</li>
  </ul>
</div>

<h2>Rolul ozonoterapiei în tratament</h2>
<p>Injecțiile paravertebrale cervicale cu amestec O₂+O₃ reprezintă una dintre cele mai eficiente intervenții în cervicalgia cu componentă inflamatorie sau compresivă. Mecanismele de acțiune sunt multiple:</p>
<ol>
  <li><strong>Efect antiinflamator local</strong> — ozonul inhibă sinteza prostaglandinelor și citokinelor proinflamatorii la nivelul fasetelor articulare cervicale</li>
  <li><strong>Analgezie prin modulare nervoasă</strong> — reduces sensibilizarea centrală a fibrelor C și Aδ implicate în transmiterea durerii</li>
  <li><strong>Îmbunătățirea microcirculației</strong> — crește oxigenarea mușchilor și discurilor intervertebrale cervicale, reducând ischemia locală</li>
  <li><strong>Relaxare musculară</strong> — scade tonusul hiperalgic al musculaturii paravertebrale</li>
</ol>

<h2>Protocolul clinic</h2>
<p>Tratamentul combinat posturo-ozonoterapic include:</p>
<ul>
  <li>4–6 infiltrații paravertebrale cervicale cu O₂+O₃ (concentrație 15–20 μg/ml), la interval de 3–5 zile</li>
  <li>Evaluare posturologică POSTUROTEST pentru identificarea cauzei sistemice</li>
  <li>Branțuri posturale personalizate dacă se identifică asimetrie de ax</li>
  <li>Exerciții cervicale de stabilizare și stretching suboccipital</li>
  <li>Colaborare cu stomatolog pentru corecția ocluziei dacă ATM este implicată</li>
</ul>

<div class="info-box">
  <p>În experiența noastră clinică, <strong>peste 70% din pacienții cu cefalee cronică</strong> tratați prin combinarea ozonoterapiei cervicale cu reprogramarea posturală raportează o reducere semnificativă a frecvenței și intensității episoadelor dureroase după primele 3 săptămâni de tratament.</p>
</div>

<div class="warning-box">
  <p>Cefaleea care apare brusc, este „cea mai puternică din viață", este însoțită de febră, redoare de ceafă, tulburări de vedere sau confuzie necesită evaluare medicală de urgență — acestea nu sunt simptome posturale.</p>
</div>
    `
  },
  {
    slug: "durerile-de-spate",
    title: "Tratament pentru Durerile de Spate – Abordare Integrativă",
    shortDesc: "Prezentare a metodelor moderne de tratament pentru durerile de spate, combinând ozonoterapia, posturologia și recuperarea medicală.",
    category: "posturologie",
    keywords: ["dureri de spate tratament", "hernie de disc tratament", "dureri lombare", "tratament non-chirurgical coloana"],
    author: "Dr. Ștefan Tiron",
    readingTime: 3,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Dureri de spate tratament",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/15455",
    bodyContent: `
<p>Durerile de spate reprezintă a doua cauză de incapacitate de muncă la nivel global. În România, peste 80% dintre adulți vor experimenta cel puțin un episod semnificativ de lombalgie. Abordarea integrativă — care combină posturologia cu ozonoterapia — oferă rezultate superioare față de tratamentele izolate.</p>

<h2>Cauzele sistemice ale durerii lombare</h2>
<p>Medicina clasică tratează frecvent simptomul (durerea) fără a identifica cauza sistemică. O hernie de disc apare rareori izolat — ea este, de cele mai multe ori, consecința unui dezechilibru postural cronic care a suprasolicitat un segment vertebral. Principalele cauze sistemice:</p>
<ul>
  <li><strong>Hiperlordoză sau hipercifoză</strong> — curbe vertebrale accentuate care redistribuie forțele compresive</li>
  <li><strong>Asimetrie pelviană</strong> — diferența de lungime funcțională a membrelor inferioare creează scolioză funcțională</li>
  <li><strong>Disfuncții ale podului plantar</strong> — piciorul plat modifică transmisia forțelor prin genunchi și șold</li>
  <li><strong>Insuficiența musculaturii core</strong> — mușchii transvers abdominal și multifizi slabi nu mai stabilizează vertebrele</li>
</ul>

<div class="key-facts">
  <h4>Condiții tratate prin abordare integrativă</h4>
  <ul>
    <li>Lombalgie acută și cronică</li>
    <li>Hernie de disc L4-L5, L5-S1</li>
    <li>Lombosciatică</li>
    <li>Sindrom al fasetelor articulare</li>
    <li>Spondilolisteză de gradul I–II</li>
    <li>Durere lombară post-chirurgicală</li>
  </ul>
</div>

<h2>Rolul ozonoterapiei în durerea lombară</h2>
<p>Infiltrațiile paravertebrale cu O₂+O₃ acționează la mai multe niveluri simultan:</p>
<ol>
  <li><strong>Nucleoliză chimică</strong> — ozonul oxidează proteoglicanii din nucleul pulpos herniat, reducând volumul herniei</li>
  <li><strong>Antiinflamator</strong> — inhibă fosfolipaza A2 și COX-2 la nivelul discului și al fasciculului radicular</li>
  <li><strong>Analgezic</strong> — stimulează eliberarea de endorfine la nivel spinal</li>
  <li><strong>Trofic discal</strong> — îmbunătățește oxigenarea avasculară a discului intervertebral</li>
</ol>

<h2>Protocolul terapeutic</h2>
<ul>
  <li>Evaluare posturologică POSTUROTEST și RMN coloană lombară</li>
  <li>6–10 infiltrații paravertebrale cu O₂+O₃ (15–25 μg/ml), bisăptămânal</li>
  <li>Branțuri posturale personalizate pentru corectarea asimetriei de ax</li>
  <li>Program de kinetoterapie pentru întărirea musculaturii core</li>
  <li>Reeducare posturală și ergonomică</li>
</ul>

<div class="info-box">
  <p>Studiile clinice arată că <strong>ozonoterapia discală reduce nevoia de intervenție chirurgicală</strong> la 70–80% dintre pacienții cu hernie de disc, cu remisie completă a durerii în medie după 4–6 săptămâni de tratament.</p>
</div>

<div class="warning-box">
  <p>Durerea lombară însoțită de incontinență urinară sau fecală, parezie sau anestezie „în șa" reprezintă o urgență neurochirurgicală — prezentați-vă imediat la spital.</p>
</div>
    `
  },
  {
    slug: "ozonoterapia-celulita",
    title: "Ozonoterapia în Celulită – Injecții Subcutanate și Sauna cu Ozon",
    shortDesc: "Combinarea injecțiilor subcutanate de ozon cu sauna cu ozon și apa ozonizată reduce nodulii adipoși și îmbunătățește microcirculația în tratamentul celulitei.",
    category: "ozonoterapie",
    keywords: ["ozonoterapie celulita", "injectii ozon celulita", "tratament celulita ozon"],
    author: "Dr. Ștefan Tiron",
    readingTime: 4,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Ozonoterapie pentru celulită",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/15347",
    bodyContent: `
<p>Celulita afectează peste 85% dintre femeile adulte, indiferent de greutate sau vârstă. Nu este o simplă problemă estetică — în stadiile avansate implică disfuncție a microcirculației, fibroză și durere. Ozonoterapia oferă o soluție non-invazivă cu rezultate clinice documentate.</p>

<h2>Ce este celulita și de ce apare</h2>
<p>Celulita (lipodistrofia ginoïdă) este o modificare structurală a țesutului adipos subcutanat caracterizată prin:</p>
<ul>
  <li>Grupuri de celule adipoase (adipocite) mărite și reorganizate în lobuli</li>
  <li>Fibre de colagen rigide care trag pielea în jos, creând aspectul „cu gropiță"</li>
  <li>Microcirculație deficitară cu stagnare limfatică</li>
  <li>Inflamație cronică de grad scăzut la nivelul dermului profund</li>
</ul>

<h2>Mecanismele ozonoterapiei în celulită</h2>
<p>Tratamentul combină trei metode complementare:</p>
<ol>
  <li><strong>Injecții subcutanate cu O₂+O₃</strong> — amestecul gazos infiltrat direct în depozitele adipoase lipoliziază adipocitele și stimulează neocolageneza locală</li>
  <li><strong>Sauna cu ozon HOCATT™</strong> — ozonul transdermal acționează pe suprafețe mari, activând circulația și drenajul limfatic</li>
  <li><strong>Apă ozonizată pentru uz local</strong> — aplicată topic, crește oxigenarea și reduce inflamația dermică</li>
</ol>

<div class="key-facts">
  <h4>Protocol standard Clinica Tiron</h4>
  <ul>
    <li>10–15 ședințe de injecții subcutanate (concentrație 5–10 μg/ml)</li>
    <li>6–8 ședințe HOCATT™ combinate</li>
    <li>Hidratare optimă și dietă antiinflamatorie pe durata tratamentului</li>
    <li>Rezultate vizibile după ședința 4–5</li>
  </ul>
</div>

<div class="info-box">
  <p>Spre deosebire de tratamentele topice cu crème, ozonoterapia acționează la <strong>nivelul cauzal</strong> — îmbunătățește microcirculația și remodelează fibrele de colagen fibroase, nu doar mascheaza aspectul tegumentului.</p>
</div>
    `
  },
  {
    slug: "ozonoterapia-anti-aging",
    title: "Ozonoterapia în Anti-Aging – Regenerare Celulară și Longevitate",
    shortDesc: "Terapia cu ozon încetinește îmbătrânirea celulară, îmbunătățește oxigenarea tisulară și produce efecte anti-aging de lungă durată fără intervenții chirurgicale.",
    category: "ozonoterapie",
    keywords: ["ozonoterapie anti-aging", "regenerare celulara ozon", "longevitate tratament", "anti-aging bucuresti"],
    author: "Dr. Ștefan Tiron",
    readingTime: 5,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Ozonoterapie anti-aging",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/15606",
    bodyContent: `
<p>Îmbătrânirea celulară nu este inevitabilă în ritmul cu care o cunoaștem. Cercetările în medicina anti-aging arată că stresul oxidativ este principalul mecanism accelerator al senescenței celulare — iar ozonoterapia este una dintre cele mai eficiente intervenții pentru combaterea sa.</p>

<h2>Legătura dintre ozon și îmbătrânire</h2>
<p>La doze terapeutice controlate, ozonul acționează paradoxal: un stres oxidativ minor, bine dozat, activează mecanismele antioxidante endogene ale celulei. Efectul se numește precondiționare oxidativă și produce:</p>
<ul>
  <li>Creșterea sintezei de superoxid dismutază (SOD) și glutation peroxidază</li>
  <li>Activarea Nrf2 — factorul de transcripție care coordonează răspunsul antioxidant celular</li>
  <li>Stimularea autofagiei — „curățenia" celulară de proteine și organite deteriorate</li>
  <li>Elongarea telomerelor prin reducerea inflamației cronice sistemice</li>
</ul>

<h2>Beneficii anti-aging documentate</h2>
<ul>
  <li><strong>Piele</strong> — crește producția de colagen și elastină, reduce ridurile fine, uniformizează tonul</li>
  <li><strong>Energie</strong> — optimizează funcția mitocondrială și producția de ATP</li>
  <li><strong>Memorie</strong> — îmbunătățește oxigenarea cerebrală și reduce ceața mentală</li>
  <li><strong>Imunitate</strong> — modulează echilibrul citokinelor pro- și antiinflamatorii</li>
  <li><strong>Circulație</strong> — crește flexibilitatea eritrocitelor, optimizând livrarea de O₂ în țesuturi</li>
</ul>

<div class="key-facts">
  <h4>Protocol anti-aging Clinica Tiron</h4>
  <ul>
    <li>Autohemoterapie mare: 10 ședințe, săptămânal</li>
    <li>Sauna HOCATT™: 6–8 ședințe, de 2x/săptămână</li>
    <li>Perfuzii cu vitamina C, glutathion și vitamina B complex</li>
    <li>Evaluare AMT pentru identificarea deficiențelor minerale</li>
    <li>Cură de întreținere: 1x/lună după protocolul inițial</li>
  </ul>
</div>

<div class="info-box">
  <p>Ozonoterapia anti-aging nu este cosmetică — este o intervenție metabolică sistemică. Pacienții raportează nu doar îmbunătățiri vizuale, ci și <strong>energie mai bună, somn îmbunătățit și claritate mentală</strong> după primele 3–4 ședințe.</p>
</div>
    `
  },
  {
    slug: "ozonoterapia-boli-reumatice",
    title: "Ozonoterapia în Bolile Reumatice – Protocol și Rezultate Clinice",
    shortDesc: "Proprietățile antiinflamatorii, analgezice și condroprotectoare ale ozonului îl fac un tratament de elecție în artroze, artrite, tendinite și fibromialgie.",
    category: "ozonoterapie",
    keywords: ["ozonoterapie reumatism", "artrita tratament ozon", "artroze tratament", "fibromialgie ozon"],
    author: "Dr. Ștefan Tiron",
    readingTime: 6,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Ozonoterapie boli reumatice",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/12053",
    bodyContent: `
<p>Bolile reumatice afectează articulațiile, oasele, mușchii și țesuturile conjunctive. Sunt în general cronice și degenerative, iar tratamentele convenționale controlează simptomele fără a opri progresia. Ozonoterapia adaugă o dimensiune nouă: acțiune antiinflamatoare, analgezică și condroprotectoare simultane.</p>

<h2>Mecanismele ozonului în reumatologie</h2>
<ul>
  <li><strong>Antiinflamator</strong> — inhibă sinteza de IL-1β, TNF-α și prostaglandine — exact citokinele responsabile de sinovita reumatoidă</li>
  <li><strong>Analgezic</strong> — stimulează eliberarea de endorfine endogene și reduce sensibilizarea centrală a durerii</li>
  <li><strong>Condroprotector</strong> — stimulează condrocitele să producă matrice extracelulară, încetinind pierderea cartilajului</li>
  <li><strong>Antioxidant</strong> — neutralizează radicalii liberi care deteriorează cartilajul și sinovialele</li>
  <li><strong>Circulator</strong> — îmbunătățește microcirculația sinovialei, aducând nutrienți și eliminând cataboliți</li>
</ul>

<div class="key-facts">
  <h4>Afecțiuni reumatice tratate</h4>
  <ul>
    <li>Artroză (gonartroza, coxartroza, artroza mâinilor)</li>
    <li>Poliartrită reumatoidă (stadii II–III)</li>
    <li>Spondilită anchilozantă</li>
    <li>Fibromialgie</li>
    <li>Tendinite și bursita</li>
    <li>Sindrom de tunel carpian</li>
  </ul>
</div>

<h2>Protocoale terapeutice</h2>
<p>În funcție de afecțiune, se folosesc diferite căi de administrare:</p>
<ul>
  <li><strong>Injecții intraarticulare</strong> — direct în spațiul articular (genunchi, șold, umăr) — 4–6 ședințe</li>
  <li><strong>Infiltrații periarticulare</strong> — în bursele inflamate și joncțiunile tendino-osoase</li>
  <li><strong>Autohemoterapie mare</strong> — acțiune sistemică antiinflamatorie — 8–10 ședințe</li>
  <li><strong>Injecții paravertebrale</strong> — pentru spondilita anchilozantă și durerea axială</li>
</ul>

<div class="info-box">
  <p>Studiile clinice italiene și spaniole arată că <strong>infiltrațiile intraarticulare cu ozon sunt comparabile sau superioare coticosteroizilor</strong> în gonartroză, fără efectele adverse ale imunosupresiei sistemice.</p>
</div>
    `
  },
  {
    slug: "ozonoterapia-ulcer-varicos",
    title: "Ozonoterapia în Ulcerul Varicos – Vindecare și Prevenție",
    shortDesc: "Ozonul rezolvă staza venoasă, elimină infecția și cicatrizează ulcerele varicoase, cu rezultate excepționale inclusiv la pacienții inoperabili.",
    category: "ozonoterapie",
    keywords: ["ulcer varicos tratament", "ozonoterapie ulcer", "afectiuni venoase tratament ozon"],
    author: "Dr. Ștefan Tiron",
    readingTime: 5,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Ozonoterapie ulcer varicos",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/7867",
    bodyContent: `
<p>Ulcerul varicos reprezintă una dintre cele mai severe complicații ale insuficienței venoase cronice, afectând 1–2% din populația adultă. Staza venoasă, hipoxia tisulară locală și infecțiile bacteriene cronice fac vindecare dificilă prin mijloace convenționale. Ozonoterapia abordează toate aceste mecanisme simultan.</p>

<h2>De ce ulcerele varicoase nu se vindecă singure</h2>
<p>Ulcerul varicos trăiește într-un cerc vicios: staza sanguină → hipoxie tisulară → moartea celulelor → infecție → inflamație → mai multă stază. Tratamentele convenționale (pansamente, antibiotice, compresie) nu rezolvă decât parțial fiecare verigă. Ozonul intervine la toate nivelurile:</p>
<ul>
  <li><strong>Antibacterian puternic</strong> — ozonul elimină biofilmele bacteriene rezistente la antibiotice (Pseudomonas, MRSA, Streptococ) din plaga cronică</li>
  <li><strong>Pro-oxigenator</strong> — crește livrarea de O₂ în țesuturile hipoxice periulceroase</li>
  <li><strong>Stimulant al granulației</strong> — activează fibroblastele și producția de colagen, accelerând etapele de vindecare</li>
  <li><strong>Antiinflamator</strong> — reduce edemul și inflamația cronică care blochează cicatrizarea</li>
</ul>

<h2>Metode de aplicare</h2>
<ol>
  <li><strong>Baie locală cu ozon</strong> — membrul afectat este introdus într-un sac impermeabil în care se insuflă ozon gazos timp de 20–30 minute; metodă sigură și eficientă pentru ulcere întinse</li>
  <li><strong>Apă ozonizată</strong> — lavaj al plăgii cu apă la concentrație de 2–4 mg/L ozon, eliminating microorganismele fără a traumatiza țesuturile sănătoase</li>
  <li><strong>Autohemoterapie sistemică</strong> — îmbunătățește circulația generală și capacitatea de transport al oxigenului</li>
</ol>

<div class="key-facts">
  <h4>Rezultate clinice tipice</h4>
  <ul>
    <li>Reducerea suprafeței ulcerului cu 50% după 4–6 săptămâni</li>
    <li>Eliminarea durerii locale în primele 2–3 ședințe</li>
    <li>Vindecare completă în 8–16 săptămâni pentru ulcere medii</li>
    <li>Rezultate pozitive inclusiv la pacienții cu diabet și arteriopatie periferică</li>
  </ul>
</div>

<div class="warning-box">
  <p>Ozonoterapia pentru ulcerul varicos se aplică <strong>exclusiv local</strong> — ozonul nu se inhalează niciodată. Gazul este introdus în saci izolanți sau aplicat transdermal prin HOCATT™, nu administrat sistemic în cazul plăgilor active.</p>
</div>
    `
  },
  {
    slug: "ozonoterapia-patologii-autoimune",
    title: "Ozonoterapia în Patologiile Autoimune",
    shortDesc: "Istoricul și mecanismele prin care ozonoterapia modulează răspunsul imun în boli autoimune, reducând inflamația sistemică și frecvența puseelor.",
    category: "ozonoterapie",
    keywords: ["ozonoterapie autoimune", "imunomodulare ozon", "boli autoimune tratament natural"],
    author: "Dr. Ștefan Tiron",
    readingTime: 6,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Ozonoterapie boli autoimune",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/4912",
    bodyContent: `
<p>Bolile autoimune reprezintă o categorie în creștere alarmantă — sistemul imun atacă propriile țesuturi. De la scleroza multiplă la lupus, de la boala Crohn la tiroidita Hashimoto, aceste afecțiuni au în comun o disfuncție a toleranței imunologice. Ozonoterapia oferă un instrument unic: modularea — nu suprimarea — răspunsului imun.</p>

<h2>Scurt istoric</h2>
<p>Primele utilizări sistematice ale ozonului în boli autoimune datează din anii 1980, în Germania și Italia. Dr. Velio Bocci (Universitatea Siena) a documentat mecanismele prin care ozonul reechilibrează raportul Th1/Th2 al limfocitelor, reducând hipereactivitatea imunologică fără imunosupresie.</p>

<h2>Mecanisme imunomodulatoare</h2>
<ul>
  <li><strong>Reglarea citokinelor</strong> — scade IL-17 și IFN-γ (proinflamatorii) și crește IL-10 (antiinflamatorie)</li>
  <li><strong>Activarea Tregs</strong> — stimulează limfocitele T reglatoare care suprimă autoreactivitatea</li>
  <li><strong>Reducerea stresului oxidativ sistemic</strong> — elimină peroxizii care activează căile NF-κB implicate în inflamația autoimună</li>
  <li><strong>Îmbunătățirea funcției intestinale</strong> — reduce disbioza, care este implicată în declanșarea multor boli autoimune</li>
</ul>

<div class="key-facts">
  <h4>Afecțiuni autoimune tratate adjuvant</h4>
  <ul>
    <li>Scleroză multiplă (stadii timpurii)</li>
    <li>Lupus eritematos sistemic</li>
    <li>Tiroidita Hashimoto</li>
    <li>Boala Crohn și colita ulcerativă</li>
    <li>Psoriazis</li>
    <li>Artrita reumatoidă</li>
  </ul>
</div>

<h2>Protocolul clinic</h2>
<p>Tratamentul autoimun cu ozon se bazează pe autohemoterapia mare, realizată în serii de 10–15 ședințe, cu evaluare periodică a markerilor inflamatori (CRP, VSH, complement). Pacienții aflați pe imunosupresoare convenționale pot beneficia de ozonoterapie adjuvantă, cu posibilitatea reducerii dozelor de medicamente sub supraveghere medicală.</p>

<div class="info-box">
  <p>Ozonoterapia în bolile autoimune nu vindecă boala, dar poate reduce semnificativ <strong>frecvența și severitatea puseelor</strong>, îmbunătăți calitatea vieții și reduce dependența de medicația imunosupresoare convențională.</p>
</div>
    `
  },
  {
    slug: "ozonoterapia-tulburari-sexuale",
    title: "Ozonoterapia în Tulburările de Dinamică Sexuală",
    shortDesc: "Abordarea medicală a ejaculării precoce și impotentei prin ozonoterapie, cu îmbunătățirea circulației și a funcției nervoase.",
    category: "ozonoterapie",
    keywords: ["ozonoterapie disfunctie erectila", "ozon tulburari sexuale", "impotenta tratament natural"],
    author: "Dr. Ștefan Tiron",
    readingTime: 5,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Ozonoterapie tulburări sexuale",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/16399",
    bodyContent: `
<p>Tulburările de dinamică sexuală — ejacularea precoce, disfuncția erectilă, vaginismul, dispareuneia — au adesea o componentă vasculară și nervoasă semnificativă, pe lângă factorul psihologic. Ozonoterapia abordează tocmai aceste substraturi organice, oferind rezultate acolo unde psihologia singură nu este suficientă.</p>

<h2>Disfuncția erectilă — o boală vasculară</h2>
<p>În 70–80% din cazuri, disfuncția erectilă are o cauză organică — nu psihologică. Principalele mecanisme implicate sunt:</p>
<ul>
  <li>Ateroscleroza arterelor pudende și helicine (flux sanguin insuficient)</li>
  <li>Disfuncție endotelială cu producție scăzută de NO (oxid nitric)</li>
  <li>Neuropatia periferică (frecventă în diabet)</li>
  <li>Dezechilibre hormonale (testosteron scăzut, prolactina crescută)</li>
</ul>

<h2>Cum acționează ozonoterapia</h2>
<ol>
  <li><strong>Vasodilatație și oxigenare</strong> — ozonul crește flexibilitatea eritrocitelor și stimulează producția endogenă de NO, îmbunătățind fluxul sanguin local</li>
  <li><strong>Reparare vasculară</strong> — stimulează neovascularizarea și repararea endoteliului arterial</li>
  <li><strong>Efect neuroprotector</strong> — reduce inflamația nervoasă la nivelul nervilor pudend și cavernos</li>
  <li><strong>Echilibrare hormonală</strong> — îmbunătățirea circulației testiculare poate normaliza producția de testosteron</li>
</ol>

<div class="key-facts">
  <h4>Protocol terapeutic</h4>
  <ul>
    <li>10 ședințe de autohemoterapie mare cu O₂+O₃</li>
    <li>Infiltrații paravertebrale lombo-sacrate (S2–S4) — centrul erogenetic spinal</li>
    <li>Sauna HOCATT™ pentru circulație sistemică</li>
    <li>Evaluare AMT pentru zinc și seleniu (oligoelemente critice pentru funcția reproductivă)</li>
  </ul>
</div>

<div class="info-box">
  <p>Ozonoterapia este un <strong>tratament complementar</strong> — nu înlocuiește evaluarea psihologică sau endocrinologică, dar adaugă dimensiunea vasculară și nervoasă adesea ignorată în abordările convenționale ale tulburărilor sexuale masculine.</p>
</div>
    `
  },
  {
    slug: "ozonul-stomatologie",
    title: "Ozonul în Stomatologie – Dezinfecție și Tratamente OMF",
    shortDesc: "Aplicațiile ozonului în stomatologie: dezinfecția canalelor radiculare, tratamentul parodontal, prevenirea cariilor și dezinfecția câmpului protetic.",
    category: "ozonoterapie",
    keywords: ["ozon stomatologie", "tratament parodontal ozon", "dezinfectie canale radiculare ozon"],
    author: "Dr. Ștefan Tiron",
    readingTime: 4,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Ozon stomatologie",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/14777",
    bodyContent: `
<p>Stomatologia modernă caută tot mai mult alternativele non-chimice la antibiotice și dezinfectanți agresivi. Ozonul reprezintă o soluție elegantă: putere antimicrobiană extremă, toxicitate zero pentru organism și stimularea vindecării tisulare.</p>

<h2>Proprietățile antimicrobiene ale ozonului în cavitatea bucală</h2>
<p>Ozonul este cel mai puternic agent dezinfectant disponibil în medicină — de 50 de ori mai eficient decât clorul și activ la concentrații de 1000 de ori mai mici. Elimină:</p>
<ul>
  <li>Bacterii gram-pozitive și gram-negative (inclusiv Streptococcus mutans, Lactobacillus)</li>
  <li>Fungi (Candida albicans)</li>
  <li>Virusuri (herpes simplex, HPV oral)</li>
  <li>Biofilme bacteriene rezistente la antibiotice</li>
</ul>

<h2>Aplicații clinice</h2>
<ol>
  <li><strong>Tratamentul cariilor</strong> — ozonul gazos aplicat pe caria incipientă elimină Streptococcus mutans și remineralizează emailul, fără frezare în stadiile timpurii</li>
  <li><strong>Tratament parodontal</strong> — irigarea pungilor parodontale cu apă ozonizată și insuflarea de ozon gazos elimină bacteriile anaerobe din biofilm</li>
  <li><strong>Dezinfecția canalelor radiculare</strong> — ozonul completează instrumentarea mecanică, eliminând bacteriile reziduale din canaliculele laterale inaccesibile</li>
  <li><strong>Tratamentul aftelor și herpesului oral</strong> — aplică ozonul direct pe leziune, reducând durata episodului de la 7–10 zile la 2–3 zile</li>
  <li><strong>Dezinfecția câmpului protetic</strong> — irigare pre-amprenta pentru eliminarea microorganismelor din șantul gingival</li>
</ol>

<div class="key-facts">
  <h4>Avantaje față de dezinfectanții clasici</h4>
  <ul>
    <li>Fără rezistență bacteriană (imposibil de apărut împotriva O₃)</li>
    <li>Fără toxicitate sistemică — ozonul se descompune rapid în O₂</li>
    <li>Fără efecte adverse pentru țesuturile sănătoase la doze terapeutice</li>
    <li>Stimulează vindecarea tisulară, nu o inhibă (spre deosebire de alcool)</li>
  </ul>
</div>
    `
  },
  {
    slug: "ozonul-coronavirus",
    title: "Ozonul și Efectele Sale Antipatogene asupra Coronavirusului",
    shortDesc: "Studii internaționale privind proprietățile ozonului împotriva virusurilor din familia Coronavirus și protocoalele de utilizare în prevenție și tratament.",
    category: "ozonoterapie",
    keywords: ["ozon coronavirus", "ozonoterapie covid", "ozon antiviral", "prevenire infectii ozon"],
    author: "Dr. Ștefan Tiron",
    readingTime: 5,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Ozon coronavirus COVID-19",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/22655",
    bodyContent: `
<p>Pandemia COVID-19 a readus în atenție o proprietate fundamentală a ozonului: capacitatea de a inactiva virusurile lipid-învelite, inclusiv coronavirusurile. Cercetătorii din Italia, Spania, Cuba și China au documentat rezultate clinice și mecanisme precise prin care O₃ combate SARS-CoV-2.</p>

<h2>Mecanismele antivirale ale ozonului</h2>
<p>Ozonul atacă virusurile prin multiple mecanisme simultane, fără posibilitate de adaptare virală:</p>
<ul>
  <li><strong>Distrugerea învelișului lipidic</strong> — ozonul oxidează lipidele din membrana virală, inactivând particulele virale extracelulare</li>
  <li><strong>Oxidarea proteinei Spike</strong> — studii in vitro arată că O₃ oxidează resturile de cisteină din proteina S, blocând legarea de receptorul ACE2</li>
  <li><strong>Distrugerea ARN viral</strong> — ozonul fragmentează genomul ARN al virusului, împiedicând replicarea</li>
  <li><strong>Modularea imunologică</strong> — reduce furtuna de citokine (IL-6, TNF-α) responsabilă de formele severe de COVID-19</li>
</ul>

<h2>Studii clinice relevante</h2>
<p>Echipe de cercetători din Siena (Italia), Madrid (Spania) și Havana (Cuba) au publicat în 2020–2021 serii de cazuri și studii clinice arătând că ozonoterapia sistemică (autohemoterapie mare) la pacienții cu COVID-19 moderat-sever a redus:</p>
<ul>
  <li>Necesarul de O₂ suplimentar cu 40–60%</li>
  <li>Durata internării cu 3–5 zile</li>
  <li>Markerii inflamatori (CRP, feritina, D-dimeri)</li>
  <li>Rata de transfer la terapie intensivă</li>
</ul>

<div class="key-facts">
  <h4>Dezinfecție ambientală cu ozon</h4>
  <ul>
    <li>Generatoarele de ozon pot dezinfecta camerele goale (5–10 ppm, 30 minute)</li>
    <li>Inactivează SARS-CoV-2 pe suprafețe cu eficiență &gt;99.9%</li>
    <li>Atenție: ozonul ambiental NU se utilizează cu persoane prezente în cameră</li>
    <li>Ventilare obligatorie 30 minute după dezinfecție</li>
  </ul>
</div>

<div class="info-box">
  <p>Clinica Tiron a utilizat ozonoterapia sistemică atât în <strong>prevenția</strong> infecției COVID (pentru personalul medical și pacienți cu risc crescut), cât și în <strong>tratamentul adjuvant</strong> al formelor moderate și în recuperarea post-COVID.</p>
</div>
    `
  },
  {
    slug: "autohemoterapia-virus",
    title: "Autohemoterapia cu Ozon – Cel Mai Eficient Tratament pentru Imunitate",
    shortDesc: "Autohemoterapia cu ozon implică prelevarea sângelui, amestecarea cu ozon și reinjectarea intramusculară, stimulând puternic sistemul imun.",
    category: "ozonoterapie",
    keywords: ["autohemoterapie ozon", "autohemoterapie imunitate", "tratament imunitate ozon", "ozonoterapie sistemica"],
    author: "Dr. Ștefan Tiron",
    readingTime: 4,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Autohemoterapie ozon imunitate",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/21716",
    bodyContent: `
<p>Sistemul imun este primul și cel mai sofisticat medicament al corpului. Autohemoterapia cu ozon reprezintă una dintre cele mai eficiente metode de stimulare și reechilibrare a imunității, cu decenii de practică clinică în Germania, Italia, Cuba și România.</p>

<h2>Ce este autohemoterapia cu ozon</h2>
<p>Procedura implică trei etape simple:</p>
<ol>
  <li><strong>Prelevare</strong> — se extrag 100–200 ml de sânge venos al pacientului (același principiu ca la o donare de sânge obișnuită)</li>
  <li><strong>Ozonizare</strong> — sângele prelevat este amestecat cu amestecul O₂+O₃ într-o pungă sterilă; ozonul oxigenează eritrocitele și activează leucocitele</li>
  <li><strong>Reinfuzie</strong> — sângele ozonizat este reintrodus intravenos în organism, similar unei perfuzii normale</li>
</ol>

<h2>Efecte imunologice documentate</h2>
<ul>
  <li><strong>Activarea neutrofilelor și macrofagelor</strong> — prima linie de apărare împotriva bacteriilor și virusurilor</li>
  <li><strong>Stimularea producției de interferoni</strong> — proteine antivirale naturale</li>
  <li><strong>Creșterea activității celulelor NK</strong> (Natural Killer) — celule specializate în distrugerea celulelor infectate viral și a celulelor tumorale</li>
  <li><strong>Reechilibrarea raportului Th1/Th2</strong> — prevenind atât imunodeficiența cât și autoimunitatea</li>
  <li><strong>Stimularea producției de eritropoietina</strong> — crește capacitatea de transport al O₂</li>
</ul>

<div class="key-facts">
  <h4>Indicații principale</h4>
  <ul>
    <li>Infecții virale recurente (herpes, HPV, EBV)</li>
    <li>Imunodeficiențe secundare (post-chimioterapie, post-COVID)</li>
    <li>Oboseală cronică și sindrom de burnout imunologic</li>
    <li>Prevenție (cure sezoniere de toamnă/primăvară)</li>
    <li>Adjuvant în oncologie (cu avizul oncologului)</li>
  </ul>
</div>

<div class="info-box">
  <p>O cură standard constă în <strong>8–10 ședințe de autohemoterapie mare</strong>, realizate de 2–3 ori pe săptămână. Efectele imunologice se manifestă încă din primele 3–4 ședințe și persistă 2–4 luni după finalizarea curei.</p>
</div>
    `
  },
  {
    slug: "recuperare-post-covid",
    title: "Tratament cu Oxigen-Ozon pentru Recuperarea Post-COVID",
    shortDesc: "Protocol de ozonoterapie pentru tratarea sechelelor post-COVID: probleme respiratorii, neurologice, oboseală cronică și ceață mentală.",
    category: "ozonoterapie",
    keywords: ["recuperare post covid", "ozonoterapie post covid", "oboseala cronica tratament", "sechele covid tratament"],
    author: "Dr. Ștefan Tiron",
    readingTime: 5,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Recuperare post COVID ozonoterapie",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/22657",
    bodyContent: `
<p>Sindromul post-COVID (Long COVID) afectează 10–30% din persoanele care au trecut prin infecție, indiferent de severitatea episodului acut. Simptomele — oboseală persistentă, dispnee, ceață mentală, dureri articulare, tulburări de somn — pot dura luni sau ani. Ozonoterapia cu oxigen adresează mecanismele biologice care mențin aceste simptome.</p>

<h2>Mecanismele post-COVID</h2>
<p>Cercetările arată că sindromul post-COVID este menținut de:</p>
<ul>
  <li><strong>Inflamație cronică de grad scăzut</strong> — persistența citokinelor proinflamatorii (IL-6, TNF-α) după eliminarea virusului</li>
  <li><strong>Disfuncție mitochondrială</strong> — celulele nu mai produc ATP eficient, explicând oboseala cronică profundă</li>
  <li><strong>Microcoagulare</strong> — microtrombii în capilare reduc oxigenarea organelor (creier, mușchi, cord)</li>
  <li><strong>Disbioza intestinală</strong> — perturbarea microbiomului cu efect sistemic imun și neurologic</li>
  <li><strong>Reactivarea virusurilor latente</strong> — EBV, CMV reactivate pe fond de imunodepresie</li>
</ul>

<h2>Cum adresează ozonoterapia aceste mecanisme</h2>
<ol>
  <li><strong>Oxigenare tisulară</strong> — crește capacitatea eritrocitelor de a livra O₂ în capilare, combatând hipoxia cronică</li>
  <li><strong>Activare mitocondrială</strong> — stimulează enzimele lanțului respirator mitocondrial</li>
  <li><strong>Anticoagulant ușor</strong> — reduce agregarea plachetară și vâscozitatea sanguină</li>
  <li><strong>Imunomodulator</strong> — reechilibrează răspunsul imun și suprimă inflamația reziduală</li>
  <li><strong>Antiviral</strong> — poate reduce încărcătura virală reziduală</li>
</ol>

<div class="key-facts">
  <h4>Protocolul post-COVID la Clinica Tiron</h4>
  <ul>
    <li>12–15 ședințe de autohemoterapie mare cu O₂+O₃</li>
    <li>6–8 ședințe HOCATT™ pentru oxigenare transdermală și detoxifiere</li>
    <li>Perfuzii cu vitamina C (10–25g/ședință) și vitamina B complex</li>
    <li>AMT pentru identificarea deficiențelor de zinc, seleniu, magneziu</li>
    <li>Durată totală: 6–8 săptămâni</li>
  </ul>
</div>

<div class="info-box">
  <p>Pacienții cu post-COVID tratați la Clinica Tiron raportează o <strong>îmbunătățire semnificativă a energiei și clarității mentale</strong> după primele 4–5 ședințe, cu remisie progresivă a tuturor simptomelor pe parcursul curei complete.</p>
</div>
    `
  },
  {
    slug: "sauna-cu-ozon",
    title: "HOCATT™ – Sauna cu Ozon: Terapie Transdermală Hipertermică",
    shortDesc: "Camera HOCATT™ combină ozonul cu hipertermia și acidul carbonic într-un tratament transdermal unic, activând detoxifierea și regenerarea celulară.",
    category: "ozonoterapie",
    keywords: ["sauna ozon hocatt", "ozonoterapie transdermala", "detoxifiere ozon", "hocatt bucuresti"],
    author: "Dr. Ștefan Tiron",
    readingTime: 6,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "HOCATT sauna ozon",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/12054",
    bodyContent: `
<p>HOCATT™ (Hyperthermic Ozone and Carbonic Acid Transdermal Technology) reprezintă cel mai avansat sistem de ozonoterapie transdermală disponibil astăzi. Camera combină simultan 10 terapii diferite, oferind un efect sinergic imposibil de obținut cu tratamentele individuale.</p>

<h2>Cele 10 terapii combinate în HOCATT™</h2>
<ol>
  <li><strong>Ozon transdermal</strong> — ozonul penetrează pielea și ajunge în circulația subcutanată</li>
  <li><strong>Acid carbonic (CO₂)</strong> — vasodilatator puternic, crește circulația periferică și transferul de O₂ (efectul Bohr)</li>
  <li><strong>Hipertermie</strong> — temperatura de 38–42°C activează proteina de șoc termic (HSP), crește metabolismul și detoxifierea</li>
  <li><strong>Lumina infra-roșie</strong> — penetrare în profunzimea mușchilor, efect antiinflamator și de relaxare</li>
  <li><strong>Câmpuri electromagnetice de joasă frecvență (PEMF)</strong> — regenerare celulară și anti-inflamator</li>
  <li><strong>Ultrasunete</strong> — masaj profund al țesuturilor și limfodrenaj</li>
  <li><strong>Fotoni (LED terapeutic)</strong> — stimularea sintezei de ATP mitocondrial</li>
  <li><strong>Aromaterapie cu uleiuri esențiale</strong> — efect relaxant și respirator</li>
  <li><strong>Inhalare de O₂ pur</strong> — oxigenare pulmonară suplimentară prin mască</li>
  <li><strong>Exerciții de respirație</strong> — coordonate cu ciclurile de presiune din cameră</li>
</ol>

<div class="key-facts">
  <h4>Indicații principale HOCATT™</h4>
  <ul>
    <li>Detoxifiere și eliminarea metalelor grele</li>
    <li>Anti-aging și regenerare celulară</li>
    <li>Celulită și modelare corporală</li>
    <li>Recuperare sportivă accelerată</li>
    <li>Imunostimulare și prevenție</li>
    <li>Stres cronic și epuizare (burnout)</li>
    <li>Post-COVID și sindrom de oboseală cronică</li>
  </ul>
</div>

<h2>O ședință HOCATT™ — cum decurge</h2>
<p>Pacientul stă așezat în cameră timp de 30 de minute, cu capul în afara dispozitivului (nu inhalează ozon). Se insuflă succesiv CO₂ (3 minute) urmat de amestecul O₂+O₃ (27 de minute). Temperatura crește progresiv. Pacientul transpira, detoxifică și se oxigenează simultan. Ședința este confortabilă și nu necesită recuperare.</p>

<div class="info-box">
  <p>HOCATT™ este singurul dispozitiv medical aprobat care combină ozonoterapia transdermală cu hipertermia și acidul carbonic. Clinica Tiron este <strong>unul dintre centrele cu experiența cea mai îndelungată cu HOCATT™ din România</strong>.</p>
</div>
    `
  },
  {
    slug: "plasmalifting-prp",
    title: "Plasmalifting (PRP) – Atenuarea Ridurilor și Cicatricilor cu Propria Plasmă",
    shortDesc: "Tehnica Plasmalifting folosește plasma proprie pentru umplerea ridurilor nazogeniene, a ridurilor periorbitale și a cicatricilor post-acneice.",
    category: "prp",
    keywords: ["plasmalifting prp", "prp riduri", "prp estetic fata", "plasma proprie tratament estetic"],
    author: "Dr. Ștefan Tiron",
    readingTime: 5,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Plasmalifting PRP riduri",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/17745",
    bodyContent: `
<p>Plasmaliftingul (PRP — Platelet Rich Plasma) este o tehnică estetică și regenerativă revoluționară: folosim propria plasmă a pacientului, îmbogățită în factori de creștere, pentru a umple ridurile, a atenua cicatricile și a regenera tegumentul. Zero alergii, zero materiale sintetice.</p>

<h2>Ce este plasma bogată în trombocite (PRP)</h2>
<p>Sângele conține 93% eritrocite, 6% leucocite și 1% trombocite. Trombocitele sunt celule minuscule care eliberează factori de creștere (PDGF, TGF-β, VEGF, IGF) — molecule care stimulează repararea și regenerarea tisulară. Prin centrifugare, separăm această fracție valoroasă și o concentrăm de 4–8 ori față de valorile normale din sânge.</p>

<h2>Mecanisme de acțiune</h2>
<ul>
  <li><strong>Neocolageneză</strong> — factorii de creștere stimulează fibroblastele să producă colagen I și III nou</li>
  <li><strong>Neoangiogeneză</strong> — formarea de vase sanguine noi care revascularizează și hrănesc pielea îmbătrânită</li>
  <li><strong>Proliferare celulară</strong> — stimularea keratinocitelor și a celulelor stem locale</li>
  <li><strong>Reducerea inflamației</strong> — TGF-β reglează răspunsul inflamator și remodelarea matricei extracelulare</li>
</ul>

<h2>Indicații estetice și medicale</h2>
<ul>
  <li>Riduri nazo-labiale (linii de zâmbet)</li>
  <li>Riduri periorbitale (coada ochiului, pungi)</li>
  <li>Riduri frontale fine</li>
  <li>Cicatrici post-acneice și post-traumatice</li>
  <li>Alopecia androgenică (PRP scalp)</li>
  <li>Rejuvenare mâini și decolteu</li>
  <li>Tendinite și leziuni ligamentare (PRP ortopedic)</li>
</ul>

<div class="key-facts">
  <h4>Procedura pas cu pas</h4>
  <ul>
    <li>Recoltare 10–30 ml sânge venos (ca o analiză normală)</li>
    <li>Centrifugare dublă (10 minute) pentru concentrarea trombocitelor</li>
    <li>Activarea plasmei cu clorură de calciu</li>
    <li>Microinjectare sau microneedling cu PRP pe zona tratată</li>
    <li>Rezultate vizibile după 2–4 săptămâni; maxim la 3 luni</li>
    <li>Protocol standard: 3 ședințe la 4–6 săptămâni interval</li>
  </ul>
</div>

<div class="info-box">
  <p>PRP nu este un filler — nu umple mecanic ridurile, ci <strong>regenerează tisular</strong>. Rezultatele sunt progresive și naturale, fără aspectul „umflat" al acidului hialuronic sau al implanturilor.</p>
</div>
    `
  },
  {
    slug: "amt-patologie-respiratorie",
    title: "Analiza Minerală Tisulară și Patologia Respiratorie",
    shortDesc: "Dezechilibrele minerale și acumulările de toxice depistabile prin AMT pot cauza fibroză pulmonară, astm bronșic, BPOC și alte afecțiuni respiratorii.",
    category: "amt",
    keywords: ["analiza minerala tisulara respiratie", "amt astm", "dezechilibre minerale plamani", "fibroza pulmonara cauze"],
    author: "Dr. Ștefan Tiron",
    readingTime: 6,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "AMT patologie respiratorie",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/7918",
    bodyContent: `
<p>Patologia respiratorie cronică — astmul bronșic, BPOC, bronșitele recurente, fibroza pulmonară — este în creștere globală. Medicina funcțională a identificat o legătură clară între dezechilibrele minerale, acumulările de metale toxice și vulnerabilitatea aparatului respirator.</p>

<h2>Minerale și funcție pulmonară</h2>
<p>Analiza Minerală Tisulară (AMT) relevă frecvent la pacienții cu afecțiuni respiratorii cronice:</p>
<ul>
  <li><strong>Magneziu scăzut</strong> — magneziul este bronhodilatator natural; deficiența agravează bronhospasmul și crize de astm</li>
  <li><strong>Seleniu scăzut</strong> — antioxidant esențial pentru epiteliul pulmonar; deficiența crește susceptibilitatea la infecții și fibroză</li>
  <li><strong>Zinc scăzut</strong> — esențial pentru integritatea mucoaselor și funcția imunologică locală</li>
  <li><strong>Cadmiu crescut</strong> — metal toxic acumulat prin fumat (inclusiv pasiv) care produce leziuni oxidative severe la nivelul alveolelor</li>
  <li><strong>Plumb crescut</strong> — interferează cu funcția enzimelor antioxidante pulmonare</li>
</ul>

<h2>Afecțiuni respiratorii cu substrat mineral</h2>
<ul>
  <li><strong>Astm bronșic</strong> — corelat cu deficiența de magneziu, seleniu și vitamina D</li>
  <li><strong>BPOC</strong> — agravat de cadmiu și particule metalice din fumul de țigară</li>
  <li><strong>Fibroză pulmonară idiopatică</strong> — asociată cu deficit de antioxidanți (seleniu, vitamina E, C)</li>
  <li><strong>Infecții respiratorii recurente</strong> — imunodeficiența determinată de deficiența de zinc și seleniu</li>
  <li><strong>Sarcoidoza</strong> — implicată dezechilibre ale calciului și magneziului</li>
</ul>

<div class="key-facts">
  <h4>Ce arată AMT la un pacient respirator tipic</h4>
  <ul>
    <li>Magneziu sub limitele normale (sub 6,0 mg/100g)</li>
    <li>Seleniu scăzut (&lt;0,09 mg/100g)</li>
    <li>Cadmiu prezent (&gt;0,02 mg/100g la nefumători)</li>
    <li>Raport Ca/Mg crescut (tendința spre bronhospasm)</li>
    <li>Zinc &lt;15 mg/100g (vulnerabilitate imunologică)</li>
  </ul>
</div>

<div class="info-box">
  <p>Tratamentul mineral țintit bazat pe AMT — suplimentare cu magneziu, seleniu, zinc și protocoale de chelație pentru metale toxice — poate <strong>reduce semnificativ frecvența crizelor de astm și a exacerbărilor BPOC</strong> fără a modifica tratamentul convențional.</p>
</div>
    `
  },
  {
    slug: "neurologie-si-amt",
    title: "Neurologie și Analiza Minerală Tisulară – Metale Toxice și Creier",
    shortDesc: "Testarea prin AMT devine esențială în neurologie, deoarece dezechilibrele și metalele toxice sunt implicate în tot mai multe afecțiuni neurologice moderne.",
    category: "amt",
    keywords: ["metale toxice creier", "amt neurologie", "alzheimer metale toxice", "parkinson minerale"],
    author: "Dr. Ștefan Tiron",
    readingTime: 5,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Neurologie metale toxice AMT",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/14364",
    bodyContent: `
<p>Creierul este cel mai vulnerabil organ la toxicitatea metalelor grele și la dezechilibrele minerale. Cu bariera hemato-encefalică parțial permeabilă, mercurul, plumbul, aluminiul și arsenul se acumulează în neuroni cu consecințe grave — de la ceața mentală la boli neurodegenerative severe.</p>

<h2>Metale toxice și afecțiuni neurologice</h2>
<p>Datele AMT din zeci de mii de analize corelate cu diagnostice neurologice au evidențiat asocieri consistente:</p>
<ul>
  <li><strong>Mercur → autism, Alzheimer, scleroză multiplă</strong> — mercurul se acumulează preferențial în celulele Purkinje și în cortexul prefrontal, afectând transmisia glutamatergică</li>
  <li><strong>Plumb → ADHD, scăderea QI, neuropatie periferică</strong> — chiar și expunere subclinică la plumb reduce viteza de conducere nervoasă</li>
  <li><strong>Aluminiu → Alzheimer</strong> — identificat în plăcile amiloide; sursele includ antiacide, deodorante, vase de gătit</li>
  <li><strong>Arsenic → neuropatie periferică, encefalopatie</strong> — surse: apa potabilă, pesticidele, produsele marine</li>
  <li><strong>Mangan crescut → Parkinson-like</strong> — acumularea manganului mimează sindromul parkinsonian</li>
</ul>

<h2>Dezechilibre minerale esențiale și neurologie</h2>
<ul>
  <li><strong>Magneziu scăzut</strong> — asociat cu migrene, anxietate, depresie și convulsii</li>
  <li><strong>Zinc scăzut</strong> — critic pentru formarea sinapselor și funcția receptorilor NMDA</li>
  <li><strong>Cupru crescut (raportat la zinc)</strong> — asociat cu schizofrenie, bipolaritate și anxietate cronică</li>
  <li><strong>Calciu/Magneziu dezechilibrat</strong> — hiperexcitabilitate neuronală, insomnie, hipertensiune</li>
</ul>

<div class="key-facts">
  <h4>Protocoale de detoxifiere neurologică</h4>
  <ul>
    <li>Chelație cu DMSA (acid dimercaptosuccinic) pentru plumb și mercur</li>
    <li>Suplimentare cu siliciu coloidal pentru aluminiu</li>
    <li>Coriandru + clorelă pentru mercur și metilmercur organic</li>
    <li>Ozonoterapie pentru oxigenare cerebrală și reducerea inflamației neurale</li>
    <li>Re-mineralizare cu magneziu, zinc și seleniu</li>
  </ul>
</div>

<div class="warning-box">
  <p>Detoxifierea metalelor toxice cu impact neurologic trebuie realizată <strong>sub supraveghere medicală</strong> și cu viteză controlată — mobilizarea rapidă a metalelor poate produce exacerbări tranzitorii ale simptomelor neurologice.</p>
</div>
    `
  },
  {
    slug: "metale-toxice-medicina-functionala",
    title: "Metalele Toxice și Soluțiile Medicinei Funcționale",
    shortDesc: "Medicina funcțională abordează intoxicarea cu metale toxice cu metodologii diagnostice precise și protocoale terapeutice de detoxifiere.",
    category: "amt",
    keywords: ["medicina functionala bucuresti", "metale toxice detoxifiere", "intoxicare metale grele tratament"],
    author: "Dr. Ștefan Tiron",
    readingTime: 6,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Metale toxice medicina functionala",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/14470",
    bodyContent: `
<p>Medicina funcțională se diferențiază de medicina convențională printr-o întrebare esențială: nu „ce boală are pacientul?", ci „de ce are această boală?". În cazul metalelor toxice, răspunsul la această întrebare deschide o cale terapeutică complet diferită și mult mai eficientă.</p>

<h2>Limitele medicinei convenționale în fața metalelor toxice</h2>
<p>Medicina tradițională recunoaște intoxicațiile acute cu metale (arsenicoza, saturnismul sever), dar ignoră adesea intoxicațiile cronice subclinice — acelea în care valorile sunt „prea mici pentru a conta" conform analizelor de sânge standard. Problemele sunt multiple:</p>
<ul>
  <li>Analizele de sânge reflectă expunerea recentă, nu depunerea tisulară cronică din oase, țesuturi și organe</li>
  <li>Nu există valori de referință pentru expunerea cumulată în timp</li>
  <li>Simptomele sunt nespecifice (oboseală, cefalee, dureri articulare) și duc la diagnostic greșit</li>
  <li>Tratamentul convențional nu include niciun protocol de detoxifiere</li>
</ul>

<h2>Soluțiile medicinei funcționale</h2>
<ol>
  <li><strong>Analiza Minerală Tisulară (AMT)</strong> — analiza firului de păr oferă o imagine a expunerii cronice pe ultimele 3–6 luni, reflectând depunerea tisulară</li>
  <li><strong>Chelație</strong> — administrare de agenți chelanți (EDTA, DMSA, DMPS) care leagă metalele și le elimină renal sau biliar</li>
  <li><strong>Ozonoterapie</strong> — crește capacitatea antioxidantă endogenă și mobilizează metalele din depozite</li>
  <li><strong>Suport hepatic</strong> — ficatul este principalul organ de detoxifiere; glutathion, NAC și fosfolipide esențiale susțin fazele de detoxifiere I și II</li>
  <li><strong>Drenaj limfatic și intestinal</strong> — previne reabsorbția metalelor mobilizate</li>
</ol>

<div class="key-facts">
  <h4>Cele mai frecvente metale toxice identificate prin AMT</h4>
  <ul>
    <li>Plumb — benzen din combustibili, vopseluri vechi, țevi de apă</li>
    <li>Mercur — amalgam dentar, pești mari (ton, rechin), vaccinuri cu thiomersal</li>
    <li>Cadmiu — fumat, alimente cultivate pe sol contaminat</li>
    <li>Aluminiu — antiacide, deodorante, ambalaje, vase de gătit</li>
    <li>Arsenic — apă de fântână, orez, produse marine</li>
  </ul>
</div>
    `
  },
  {
    slug: "intoxicatii-cotidiene",
    title: "Cum Ne Intoxicăm în Fiecare Zi – Surse Nesuspectate de Toxine",
    shortDesc: "Cutiile de aluminiu, fumul de țigară, gazele de eșapament și vesela din materiale toxice — surse zilnice de intoxicare cronică și metodele de detecție.",
    category: "amt",
    keywords: ["intoxicare zilnica toxine", "aluminiu toxicitate", "surse toxine cotidiene", "detoxifiere metale"],
    author: "Dr. Ștefan Tiron",
    readingTime: 5,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Intoxicatii cotidiene metale toxice",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/4914",
    bodyContent: `
<p>Ne gândim la intoxicații ca la accidente dramatice — cineva ingerează o substanță periculoasă. Realitatea modernă este mult mai insidioasă: ne intoxicăm zilnic, puțin câte puțin, prin surse pe care le considerăm complet inofensive.</p>

<h2>Surse nesuspectate de toxine cotidiene</h2>

<h3>Ambalaje și recipiente alimentare</h3>
<ul>
  <li><strong>Cutii de aluminiu</strong> (băuturi răcoritoare, conserve) — aluminiul migrează în conținut, mai ales în contact cu lichide acide</li>
  <li><strong>Plastice cu BPA</strong> (sticle PET, recipiente pentru microunde) — bisfenol A, perturbator endocrin care mimează estrogenul</li>
  <li><strong>Vase din aluminiu neanodat</strong> — gătitul acid (roșii, citrice) accelerează migrarea aluminiului în aliment</li>
  <li><strong>Teflon degradat</strong> — la temperaturi mari, PFOA se eliberează în aliment și în aer</li>
</ul>

<h3>Mediul casnic</h3>
<ul>
  <li><strong>Vopsele și lacuri</strong> — compuși organici volatili (COV), plumb în vopselele vechi</li>
  <li><strong>Produse de curățare</strong> — clor, formaldehidă, amoniac în concentrații acumulate în spații închise</li>
  <li><strong>Deodorante cu aluminiu</strong> — absorbție transdermală directă, cu acumulare în ganglionii limfatici axilari</li>
  <li><strong>Antiacide cu aluminiu</strong> — hidroxid de aluminiu absorbit intestinal, acumulare cerebrală</li>
</ul>

<h3>Mediul extern</h3>
<ul>
  <li><strong>Gaze de eșapament</strong> — plumb (din benzina cu plumb, mai ales în mașinile vechi), particule fine de cadmiu</li>
  <li><strong>Țigara și fumul pasiv</strong> — cadmiu, plumb, arsenic, poloniu radioactiv</li>
  <li><strong>Apa de fântână</strong> — arsenic geogen, nitrați, pesticide</li>
</ul>

<div class="key-facts">
  <h4>Cum depistăm intoxicația cronică</h4>
  <ul>
    <li>Analiza Minerală Tisulară (AMT) pe fir de păr — reflectă expunerea cronică pe 3–6 luni</li>
    <li>Analize sanguine specializate (nu profilul standard)</li>
    <li>Testare urinară post-chelație (provocation test) pentru depozite tisulare profunde</li>
  </ul>
</div>

<div class="info-box">
  <p>Intoxicarea cronică cu metale nu produce simptome „de intoxicație" — produce simptome vagi, confundate cu alte boli: oboseală, cefalee, tulburări de memorie, dureri articulare, probleme digestive. <strong>AMT este singura metodă care dezvăluie tiparele de acumulare cronică</strong> înainte ca organele să fie afectate semnificativ.</p>
</div>
    `
  },
  {
    slug: "autism-dezechilibre-minerale",
    title: "Autismul și Dezechilibrele Minerale – Conexiunea Neurologică",
    shortDesc: "Cercetările arată o legătură clară între expunerea la minerale toxice, dezechilibrele nutriționale și tulburările de comportament și învățare la copii.",
    category: "amt",
    keywords: ["autism minerale toxice", "dezechilibre minerale copii", "amt autism", "comportament copii minerale"],
    author: "Dr. Ștefan Tiron",
    readingTime: 7,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Autism dezechilibre minerale",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/2460",
    bodyContent: `
<p>Autismul (Tulburarea din Spectrul Autist — TSA) este o condiție complexă cu o componentă neurologică clară. Cercetările din ultimele două decenii arată în mod consistent că un subset semnificativ de copii cu autism prezintă dezechilibre minerale specifice și expunere la metale toxice, cu efecte directe asupra dezvoltării neurologice.</p>

<h2>Date din literatura de specialitate</h2>
<p>Studii publicate în Journal of Autism and Developmental Disorders, Biological Trace Element Research și alte reviste de referință au identificat la copiii cu TSA, comparativ cu grupuri de control:</p>
<ul>
  <li>Mercur mai crescut (în 70–80% din studii)</li>
  <li>Plumb mai crescut</li>
  <li>Zinc semnificativ mai scăzut</li>
  <li>Magneziu scăzut</li>
  <li>Raport Cu/Zn crescut (cupru în exces față de zinc)</li>
  <li>Calciu mai scăzut</li>
</ul>

<h2>Mecanisme neurologice</h2>
<p>Dezechilibrele identificate produc efecte neurologice concrete:</p>
<ul>
  <li><strong>Mercurul</strong> — afectează mielinizarea axonilor, transmisia GABA și funcția mitocondrială; studii post-mortem pe creier autist arată niveluri mai ridicate de mercur decât în controale sănătoase</li>
  <li><strong>Plumbul</strong> — interferează cu maturarea sinaptică, reduce plasticitatea neuronală</li>
  <li><strong>Deficiența de zinc</strong> — zinc-ul este cofactor pentru peste 300 de enzime implicate în sinteza neuromediatorilor; deficiența produce hiperexcitabilitate și reducerea proceselor inhibitorii</li>
  <li><strong>Raport Cu/Zn crescut</strong> — asociat cu agresivitate, hipersenzitivitate senzorială și tulburări de limbaj</li>
</ul>

<div class="key-facts">
  <h4>Protocol AMT la copilul cu TSA</h4>
  <ul>
    <li>AMT completă pe fir de păr (sau unghii la copii mici)</li>
    <li>Evaluare neuropsihologică și comportamentală</li>
    <li>Detoxifiere blândă adaptată vârstei (nu chelație agresivă)</li>
    <li>Suplimentare minerală personalizată (zinc, magneziu, seleniu)</li>
    <li>Dietă fără gluten și cazeină (în cazurile cu permeabilitate intestinală)</li>
    <li>Reevaluare la 3–6 luni</li>
  </ul>
</div>

<div class="warning-box">
  <p>Dezechilibrele minerale nu sunt cauza unică a autismului — TSA este o condiție multifactorială. Tratamentul mineral este adjuvant și complementar, nu un substitut al terapiei comportamentale ABA, logopediei și kinetoterapiei. Deciziile terapeutice la copii se iau <strong>obligatoriu în echipă multidisciplinară</strong>.</p>
</div>
    `
  },
  {
    slug: "mineralele-toxice",
    title: "Mineralele Toxice – Simptome, Depistare și Detoxifiere",
    shortDesc: "Expunerea la minerale toxice industriale a crescut dramatic în ultimii 50 de ani. AMT relevă etiologia și permite un tratament țintit de detoxifiere.",
    category: "amt",
    keywords: ["minerale toxice simptome", "depistare metale grele", "detoxifiere minerale toxice", "plumb mercur cadmiu"],
    author: "Dr. Ștefan Tiron",
    readingTime: 6,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Minerale toxice depistare tratament",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/4915",
    bodyContent: `
<p>Termenul „mineral toxic" poate părea o contradicție — mineralele sunt, la urma urmei, substanțe naturale. Realitatea este că unele minerale prezente în mediu, în concentrații mai mari decât cele la care fiziologia noastră s-a adaptat evolutiv, produc efecte toxice importante.</p>

<h2>Principalele minerale toxice și sursele lor</h2>

<h3>Plumb (Pb)</h3>
<ul>
  <li><strong>Surse:</strong> vopsele vechi (pre-1978), benzina cu plumb, apă prin țevi de plumb, baterii auto reciclate</li>
  <li><strong>Simptome:</strong> oboseală, iritabilitate, cefalee, tulburări de memorie, dureri abdominale, anemie</li>
  <li><strong>Organe-țintă:</strong> sistem nervos, rinichi, măduvă osoasă</li>
</ul>

<h3>Mercur (Hg)</h3>
<ul>
  <li><strong>Surse:</strong> amalgam dentar (mercur anorganic), pești predatori mari (ton, rechin, pălămidă — mercur organic), vaccinuri cu thiomersal</li>
  <li><strong>Simptome:</strong> tremor, tulburări de memorie, depresie, gust metalic, parestezii</li>
  <li><strong>Organe-țintă:</strong> creier, rinichi, intestin</li>
</ul>

<h3>Cadmiu (Cd)</h3>
<ul>
  <li><strong>Surse:</strong> fumul de țigară (prima cauză), alimente cultivate pe sol contaminat (grâu, orez, cartofi), baterii Ni-Cd</li>
  <li><strong>Simptome:</strong> disfuncție renală, osteoporoză, anemie, afecțiuni pulmonare</li>
  <li><strong>Organe-țintă:</strong> rinichi (se acumulează toată viața!), oase, plămâni</li>
</ul>

<h3>Arsenic (As)</h3>
<ul>
  <li><strong>Surse:</strong> apă de fântână, orez (absorb arsenic din sol), fructe de mare, insecticide</li>
  <li><strong>Simptome:</strong> neuropatie periferică, pigmentare anormală a pielii, cancere (piele, vezică, plămâni)</li>
</ul>

<h2>Depistarea prin AMT</h2>
<p>Analiza Minerală Tisulară pe fir de păr este metoda ideală pentru detectarea expunerii cronice, deoarece:</p>
<ul>
  <li>Părul concentrează mineralele de 10 ori față de valorile sanguine</li>
  <li>Reflectă expunerea pe ultimele 3–6 luni (nu doar ultimele zile, ca sângele)</li>
  <li>Nu necesită „provocare" cu chelatori</li>
  <li>Acoperă simultan 35+ minerale esențiale și toxice</li>
</ul>

<div class="key-facts">
  <h4>Metodele de detoxifiere</h4>
  <ul>
    <li>DMSA (oral) — pentru plumb, mercur, arsenic, cadmiu</li>
    <li>EDTA (IV) — pentru plumb, cadmiu, calciu aterosclerotic</li>
    <li>Coriandru + clorelă — adjuvant natural pentru mercur</li>
    <li>Siliciu coloidal — pentru aluminiu</li>
    <li>Ozonoterapie — suport antioxidant și hepatic pe durata detoxifierii</li>
  </ul>
</div>
    `
  },
  {
    slug: "stres-oxidativ-autism",
    title: "Stresul Oxidativ și Autismul – Studiu Clinic",
    shortDesc: "Studiu italian privind prezența stresului oxidativ în tulburările mentale, cu accent pe autism, boala Alzheimer și schizofrenie.",
    category: "amt",
    keywords: ["stres oxidativ autism", "antioxidanti tulburari mentale", "studiu clinic autism"],
    author: "Dr. S. Aloisi",
    readingTime: 7,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Stres oxidativ autism",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/2461",
    bodyContent: `
<p>Un studiu italian publicat în Neuroendocrinology Letters a investigat prezența markerilor de stres oxidativ la pacienți cu autism, boala Alzheimer și schizofrenie. Concluzia: stresul oxidativ nu este un efect secundar al acestor boli — este un mecanism patogenic central.</p>

<h2>Stresul oxidativ — mecanism comun în tulburările mentale</h2>
<p>Stresul oxidativ apare când producția de radicali liberi (ROS — Reactive Oxygen Species) depășește capacitatea antioxidantă a celulei. Creierul este deosebit de vulnerabil deoarece:</p>
<ul>
  <li>Consumă 20% din O₂ total al corpului (la doar 2% din greutatea corporală)</li>
  <li>Membranele neuronale sunt bogate în acizi grași polinesaturați, ușor oxidabili</li>
  <li>Conținut relativ scăzut de enzime antioxidante (comparativ cu alte organe)</li>
  <li>Metalele de tranziție (fier, cupru) catalizează reacții Fenton, producând radicali •OH extrem de reactivi</li>
</ul>

<h2>Rezultatele studiului</h2>
<p>La toate cele trei grupe de pacienți s-au identificat:</p>
<ul>
  <li>Malondialdehidă (MDA) crescută — marker al peroxidării lipidice membranar-neuronale</li>
  <li>Glutation redus (GSH) scăzut — principalul antioxidant intracelular</li>
  <li>Activitate scăzută a superoxid dismutazei (SOD) și catalazei</li>
  <li>Nitrotyrozin crescut — marker al nitrozării oxidative (stres nitrozativ)</li>
</ul>

<h2>Implicații terapeutice</h2>
<p>Identificarea stresului oxidativ ca mecanism central deschide căi terapeutice concrete:</p>
<ul>
  <li>Suplimentare cu glutation, N-acetilcisteină (NAC), seleniu, vitamina E și C</li>
  <li>Ozonoterapie — activează endogen producția de SOD, catalază și glutation peroxidază</li>
  <li>Detoxifiere de metale toxice pro-oxidante (mercur, plumb)</li>
  <li>Dietă bogată în antioxidanți naturali (polifenoli, carotenoizi)</li>
</ul>

<div class="info-box">
  <p>Ozonoterapia este singura intervenție disponibilă clinic care <strong>activează simultan toate cele trei sisteme antioxidante enzimatice majore</strong> (SOD, catalaza, glutation peroxidaza), prin mecanismul de precondiționare oxidativă descris de Prof. Velio Bocci.</p>
</div>
    `
  },
  {
    slug: "alergii-si-intolerante",
    title: "Alergii și Intoleranțe – Diagnosticare prin Medicină Funcțională",
    shortDesc: "Alergiile alimentare și ambientale sunt implicate într-o gamă largă de patologii. Medicina funcțională oferă metode avansate de depistare și tratament.",
    category: "amt",
    keywords: ["alergii alimentare diagnostic", "intolerante alimentare teste", "medicina functionala alergii"],
    author: "Dr. Ștefan Tiron",
    readingTime: 5,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Alergii intolerante diagnosticare",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/4916",
    bodyContent: `
<p>Alergiile și intoleranțele alimentare sunt în creștere epidemică. Medicina funcțională le abordează diferit față de medicina clasică: nu doar suprimă simptomele — identifică și tratează mecanismele subiacente care le declanșează și le perpetuează.</p>

<h2>Diferența dintre alergie și intoleranță</h2>
<ul>
  <li><strong>Alergia</strong> — reacție imunologică IgE-mediată, cu instalare rapidă (minute–2 ore). Poate fi severă (anafilaxie). Diagnosticat prin prick test sau IgE specific seric.</li>
  <li><strong>Intoleranța alimentară</strong> — reacție non-IgE (IgG, IgA mediată sau enzimatică), cu instalare lentă (4–72 ore). Simptome vagi, dificil de conectat la alimentul cauzal. Nu pune viața în pericol, dar afectează semnificativ calitatea vieții.</li>
</ul>

<h2>Afecțiuni asociate cu alergii/intoleranțe nediagnosticate</h2>
<ul>
  <li>Migrene și cefalee recurentă (frecvent gluten, produse lactate)</li>
  <li>Sindrom de colon iritabil (SCI)</li>
  <li>Eczeme și dermatite cronice</li>
  <li>Sinuzite recurente și rinoree cronică</li>
  <li>Artrite și dureri articulare difuze</li>
  <li>Oboseală cronică și ceață mentală</li>
  <li>Tulburări de somn</li>
</ul>

<h2>Diagnosticarea prin medicină funcțională</h2>
<ol>
  <li><strong>Testare IgG alimentar extinsă</strong> — panouri de 90–200+ alimente, identificând reacțiile întârziate invizibile pe testele clasice</li>
  <li><strong>AMT (Analiza Minerală Tisulară)</strong> — dezechilibrele de zinc și calciu sunt asociate cu hiperpermeabilitate intestinală (leaky gut), baza majorității intoleranțelor</li>
  <li><strong>Testare microbiom intestinal</strong> — disbioza intestinală este adesea cauza, nu consecința intoleranțelor alimentare</li>
  <li><strong>Dieta de eliminare</strong> — protocolul de aur; eliminarea suspectelor timp de 4–6 săptămâni urmată de reintroducere controlată</li>
</ol>

<div class="key-facts">
  <h4>Alergeni alimentari frecvenți în România</h4>
  <ul>
    <li>Gluten (grâu, orz, secară) — frecvent intoleranță non-celiacă la gluten</li>
    <li>Lactate (cazeina &gt; lactoza)</li>
    <li>Ouă (albumina)</li>
    <li>Nuci și alune</li>
    <li>Soia</li>
    <li>Aditivi alimentari (tartrazina E102, benzoat de sodiu E211)</li>
  </ul>
</div>
    `
  },
  {
    slug: "perfuzii-vitamine",
    title: "Perfuzii cu Vitamine – Terapie Intravenoasă Corect Indicată",
    shortDesc: "Cocktailul de perfuzii cu vitamine a devenit popular, dar este esențial să fie recomandat medical, nu la modă. Ghid complet al indicațiilor și beneficiilor reale.",
    category: "vitamine",
    keywords: ["perfuzii vitamine", "cocktail vitamine perfuzie", "terapie intravenoasa vitamine", "vitamina c perfuzabila"],
    author: "Dr. Ștefan Tiron",
    readingTime: 6,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Perfuzii cu vitamine terapie intravenoasa",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/24300",
    bodyContent: `
<p>Perfuziile cu vitamine au câștigat popularitate considerabilă în ultimii ani, de la clinici de wellness până la săli de sport. Există o diferență fundamentală între „vitamina IV la modă" și terapia intravenoasă cu vitamine corect indicată medical — iar această diferență contează pentru siguranța și eficiența tratamentului.</p>

<h2>De ce calea intravenoasă face diferența</h2>
<p>Vitamina C orală, oricât de mult s-ar consuma, nu depășește o biodisponibilitate de 20–30% — intestinul reglează absorbția și elimină excesul. Administrată intravenos, vitamina C atinge concentrații plasmatice de 50–100 de ori mai mari, cu efecte farmacologice imposibil de obținut oral.</p>
<p>Același principiu se aplică pentru:</p>
<ul>
  <li>Vitamina B12 (malabsorbție frecventă la vârstnici și în bolile gastrice)</li>
  <li>Vitamina B complex (absorbție redusă în stres și alcoolism)</li>
  <li>Magneziu (biodisponibilitate orală 30–40%, formele chelatate puțin mai bune)</li>
  <li>Glutation (distrus complet în tractul digestiv — DOAR IV este eficient)</li>
</ul>

<h2>Cocktailuri terapeutice validate clinic</h2>

<h3>Meyer's Cocktail</h3>
<p>Combinația clasică: vitamina C, vitamina B complex, vitamina B12, magneziu și calciu. Indicații: oboseală cronică, fibromialgie, astm acut, migrene, depresie.</p>

<h3>High-dose Vitamin C</h3>
<p>10–75g vitamina C administrată pe parcursul a 1–3 ore. Indicații: imunosupresie, oncologie suportivă, infecții severe, post-COVID.</p>

<h3>NAD⁺ (Nicotinamid adenin dinucleotid)</h3>
<p>Cofactor mitocondrial esențial, cu efecte anti-aging și de recuperare neurologică. Indicații: burnout, adicții, neurodegenerare.</p>

<div class="key-facts">
  <h4>Indicații medicale clare pentru perfuzii cu vitamine</h4>
  <ul>
    <li>Deficiențe demonstrate prin analize (nu „preventiv" fără teste)</li>
    <li>Sindrom de malabsorbție (boala Crohn, rezecții intestinale)</li>
    <li>Recuperare post-chimioterapie</li>
    <li>Infecții virale severe sau recurente</li>
    <li>Burnout sever cu epuizare mitochondrială</li>
    <li>Post-COVID cu oboseală cronică</li>
  </ul>
</div>

<div class="warning-box">
  <p>Perfuziile cu vitamine sunt sigure când sunt corect indicate și administrate, dar nu sunt lipsite de riscuri. Vitamina C IV în doze mari este contraindicată în <strong>deficiența de G6PD</strong> (poate produce hemoliză gravă), insuficiență renală și hemocromatoză. Evaluarea medicală prealabilă este obligatorie.</p>
</div>
    `
  },
  {
    slug: "vitamina-c-perfuzabila",
    title: "Vitamina C Perfuzabilă – Terapie cu Infuzie Intravenoasă",
    shortDesc: "Vitamina C administrată intravenos atinge concentrații plasmatice imposibil de obținut oral, cu efecte demonstrate în imunitate, anti-aging și oncologie suportivă.",
    category: "vitamine",
    keywords: ["vitamina c perfuzabila", "vitamina c intravenos", "infuzie vitamina c", "imunitate vitamina c perfuzie"],
    author: "Dr. Ștefan Tiron",
    readingTime: 5,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Vitamina C perfuzabila intravenoasa",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/18528",
    bodyContent: `
<p>Vitamina C este cea mai studiată vitamină din istoria medicinei. Dar există o diferență fundamentală între vitamina C pe care o consumăm din portocale sau comprimate și vitamina C perfuzabilă administrată intravenos — o diferență care schimbă complet profilul de efecte terapeutice.</p>

<h2>Concentrații plasmatice și efecte farmacologice</h2>
<p>Consumul oral de vitamina C, indiferent de doză, nu depășește 200–250 μmol/L în plasmă — intestinul reglează activ absorbția prin transportori saturabili și elimină excesul prin urină. Administrarea intravenoasă poate atinge <strong>20–30 mmol/L</strong> — de 100 de ori mai mult.</p>
<p>La aceste concentrații înalte, vitamina C nu mai acționează ca antioxidant, ci ca <strong>pro-oxidant selectiv</strong>: generează peroxid de hidrogen (H₂O₂) în țesuturi. Celulele normale au catalaza care neutralizează H₂O₂; celulele tumorale au activitate catalazică scăzută și sunt deteriorate selectiv.</p>

<h2>Indicații terapeutice validate</h2>
<ul>
  <li><strong>Oncologie suportivă</strong> — reduce toxicitatea chimioterapiei, ameliorează calitatea vieții, poate potența efectul citostaticelor (în unele studii)</li>
  <li><strong>Infecții virale severe</strong> — sepsis viral, COVID-19, herpes zoster — doze de 15–50g/zi reduc markerii inflamatori</li>
  <li><strong>Post-COVID și oboseală cronică</strong> — refacerea glutationului și a funcției mitocondriale</li>
  <li><strong>Anti-aging</strong> — sinteza de colagen, protecția telomerelor, reducerea markerilor de îmbătrânire celulară</li>
  <li><strong>Arsuri și plăgi cronice</strong> — vindecarea tisulară accelerată prin sinteza de colagen</li>
</ul>

<div class="key-facts">
  <h4>Protocoale standard la Clinica Tiron</h4>
  <ul>
    <li>Doze mici (5–10g): imunostimulare generală, prevenție — 1–2h perfuzie</li>
    <li>Doze medii (15–25g): infecții recurente, post-COVID — 2–3h perfuzie</li>
    <li>Doze mari (25–75g): oncologie suportivă — 3–4h perfuzie, cu monitorizare</li>
    <li>Obligatoriu test G6PD înainte de doze &gt;10g</li>
    <li>Hidratare orală abundentă post-perfuzie</li>
  </ul>
</div>

<div class="info-box">
  <p>Vitamina C perfuzabilă combinate cu ozonoterapia (autohemoterapie mare) produc un efect sinergic puternic: ozonul activează sistemele antioxidante endogene, iar vitamina C IV furnizează substrat exogen direct — <strong>combinația ideală pentru recuperarea imunologică și anti-aging</strong>.</p>
</div>
    `
  },
  {
    slug: "studiu-120-sportivi",
    title: "Studiu pe 126 de Sportivi de Performanță – AMT și Ozonoterapie",
    shortDesc: "Studiu prospectiv pe 1 an (2004–2005) realizat la Centrul Medical Dr. Tiron pe un lot de 126 sportivi de înaltă performanță.",
    category: "medicina-sport",
    keywords: ["medicina sportiva bucuresti", "ozonoterapie sportivi", "amt sportivi performanta", "recuperare sportiva"],
    author: "Dr. Ștefan Tiron, Dr. Lăcătuș Mirela",
    readingTime: 6,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Studiu sportivi performanta AMT",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/2462",
    bodyContent: `
<p>Între 2004 și 2005, Centrul Medical Dr. Tiron a realizat un studiu prospectiv pe un lot de 126 de sportivi de înaltă performanță, investigând profilul mineral al acestora și efectele ozonoterapiei asupra performanței și recuperării. Rezultatele au fost prezentate la congrese internaționale de medicină sportivă și ozonoterapie.</p>

<h2>Lotul și metodologia</h2>
<ul>
  <li>126 sportivi de performanță (atletism, lupte, haltere, baschet, fotbal)</li>
  <li>Vârstă medie: 22,4 ani; 89 bărbați, 37 femei</li>
  <li>Evaluare AMT la intrarea în studiu și la 6, 12 luni</li>
  <li>Protocol de ozonoterapie: autohemoterapie mare, 10 ședințe, la început de sezon</li>
  <li>Parametri urmăriți: VO₂max, timp de recuperare, frecvența accidentărilor, markeri biochimici</li>
</ul>

<h2>Rezultatele AMT</h2>
<p>La evaluarea inițială, profilul mineral al sportivilor a relevat surprize importante:</p>
<ul>
  <li><strong>78% prezentau deficiență de magneziu</strong> — mineral critic pentru contracția musculară și producția de ATP</li>
  <li><strong>65% aveau zinc scăzut</strong> — cofactor esențial pentru repararea musculară post-efort</li>
  <li><strong>52% aveau calciu/magneziu dezechilibrat</strong> — risc crescut de crampe și leziuni musculare</li>
  <li><strong>43% prezentau cadmiu detectabil</strong> — corelat cu fumatul pasiv și poluarea urbană</li>
  <li>Seleniu scăzut la 71% — antioxidant esențial pentru protecția musculară la efort</li>
</ul>

<h2>Efectele ozonoterapiei</h2>
<p>După protocolul de autohemoterapie mare:</p>
<ul>
  <li>Reducerea timpului de recuperare post-antrenament cu <strong>28%</strong> în medie</li>
  <li>Scăderea frecvenței accidentărilor musculare cu <strong>34%</strong> față de sezonul anterior</li>
  <li>Îmbunătățirea VO₂max cu 4–7% față de valorile de start</li>
  <li>Reducerea markerilor de stres oxidativ (MDA, 8-OHdG) cu 40–55%</li>
  <li>Raportare subiectivă de energie mai bună și somn mai odihnitor la 89% din sportivi</li>
</ul>

<div class="key-facts">
  <h4>Protocolul sportiv Clinica Tiron</h4>
  <ul>
    <li>AMT la începutul sezonului competițional</li>
    <li>10 ședințe autohemoterapie mare (concentrate în 3 săptămâni)</li>
    <li>Suplimentare minerală personalizată bazată pe AMT</li>
    <li>Cură de întreținere: 5 ședințe la mijlocul sezonului</li>
    <li>HOCATT™ pentru recuperare post-competiție</li>
  </ul>
</div>
    `
  },
  {
    slug: "dr-tiron-presedinte-wfot",
    title: "Dr. Ștefan Tiron – Noul Președinte al World Federation of Ozone Therapy",
    shortDesc: "La Adunarea Generală WFOT de la Guangzhou, China (10.11.2018), Dr. Ștefan Tiron a fost ales președinte al federației mondiale de ozonoterapie.",
    category: "clinica",
    keywords: ["dr stefan tiron", "wfot presedinte", "federatia mondiala ozonoterapie", "clinica tiron recunoastere internationala"],
    author: "Centrul Medical Dr. Tiron",
    readingTime: 2,
    isFeatured: false,
    featuredImage: "",
    featuredImageAlt: "Dr Tiron presedinte WFOT",
    sourceUrl: "https://www.romedic.ro/dr-tiron/articol/20823",
    bodyContent: `
<p>La data de 10 noiembrie 2018, în cadrul Adunării Generale a World Federation of Ozone Therapy (WFOT) organizate la Guangzhou, China, Dr. Ștefan Tiron a fost ales în unanimitate noul Președinte al federației mondiale de ozonoterapie. Această alegere a marcat o recunoaștere internațională a contribuției României la dezvoltarea ozonoterapiei.</p>

<h2>Ce este WFOT</h2>
<p>World Federation of Ozone Therapy (WFOT) este organizația internațională umbrelă care reunește societățile naționale de ozonoterapie din întreaga lume. Fondată în 2010 la Bologna, Italia, WFOT coordonează:</p>
<ul>
  <li>Standardele internaționale pentru practica ozonoterapiei</li>
  <li>Protocoalele de siguranță și dozimetrie</li>
  <li>Formarea medicilor și cercetătorilor în ozonoterapie</li>
  <li>Congresele mondiale bienale</li>
  <li>Publicarea ghidurilor de bune practici</li>
</ul>

<h2>Dr. Tiron și ozonoterapia română</h2>
<p>Dr. Ștefan Tiron a introdus ozonoterapia modernă în România în anii 1990, după formarea sa în Germania și Italia. În decursul a trei decenii, a construit:</p>
<ul>
  <li>Primul centru specializat de ozonoterapie din România</li>
  <li>Un corp de cercetare clinică local (studiul pe 126 sportivi, protocoale pentru boli autoimune)</li>
  <li>Relații de colaborare cu școli italiene, germane și spaniole de ozonoterapie</li>
  <li>Formarea a zeci de medici români în tehnicile ozonoterapeutice</li>
</ul>

<div class="key-facts">
  <h4>Date despre WFOT</h4>
  <ul>
    <li>Fondată: 2010, Bologna, Italia</li>
    <li>Membri: societăți naționale din 35+ țări</li>
    <li>Congres mondial bienal (alternând între Europa, Asia și America)</li>
    <li>Publicații: ghiduri de bune practici, consensuri internaționale</li>
    <li>Misiune: standardizarea și promovarea ozonoterapiei bazate pe dovezi</li>
  </ul>
</div>

<div class="info-box">
  <p>Alegerea unui medic român în fruntea WFOT confirmă că <strong>România are o tradiție solidă și recunoscută internațional în ozonoterapie</strong>. Clinica Tiron rămâne centrul de referință pentru această disciplină în țara noastră, continuând să ofere tratamente la standardele celor mai avansate centre europene.</p>
</div>
    `
  }
];

/* ── Helpers ── */
export function getArticle(slug) {
  return ARTICLES.find(a => a.slug === slug) || null;
}

export function getArticlesByCategory(category) {
  if (!category || category === 'all') return ARTICLES;
  return ARTICLES.filter(a => a.category === category);
}

export function getCategoryLabel(key) {
  return CATEGORIES[key] ? CATEGORIES[key].label : key;
}

export function getCategoryIcon(key) {
  return CATEGORIES[key] ? CATEGORIES[key].icon : 'solar:document-linear';
}
