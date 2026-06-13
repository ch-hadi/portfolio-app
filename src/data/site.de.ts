/**
 * German (de-AT) translations.
 * Non-translatable fields (links, images, tech names, hrefs, periods) are
 * reused from the English source; only human-readable copy is translated.
 */
import {
  profile as p,
  brand as b,
  bio as bo,
  stats as st,
  skillGroups as sg,
  experience as ex,
  projects as pr,
  currentProject as cp,
  research as re,
  education as ed,
  languages as lg,
  workAuth as wa,
  services as sv,
} from "@/data/site";

const profile = {
  ...p,
  title: "Full-Stack-Engineer · AI-Application-Developer",
  shortTitle: "Full-Stack- & AI-Engineer",
  location: "Salzburg, Österreich",
};

const brand = {
  ...b,
  tagline: "Ich entwickle produktionsreife Web- & AI-Produkte, die wirklich live gehen.",
  heroHeadline: "Software, die schnell, zuverlässig und intelligent ist.",
  heroSub:
    "Full-Stack-Engineer mit über 5 Jahren Erfahrung in produktiven Web-Apps für Healthcare, EdTech und Real Estate. Heute entwickle ich von Salzburg aus moderne AI-Produkte mit OpenAI, RAG und LLM-Architektur.",
  valueProp:
    "Ich verwandle ambitionierte Ideen in Produkte, die täglich genutzt werden: mit messbarer Performance, sauberer Architektur und AI, die in Produktion wirklich funktioniert.",
  mission:
    "Software zu entwickeln, die schnell, zuverlässig und intelligent ist, und bewährte Full-Stack-Umsetzung mit angewandter AI-Forschung zu verbinden.",
  availability: "Verfügbar für Werkstudenten-, Teilzeit- und Remote-Tätigkeiten",
  audiences: {
    client:
      "Sie brauchen eine zuverlässige Entwicklung, die liefert? Ich baue produktionsreife Web- und AI-Produkte mit messbaren Performance-Gewinnen, termintreu, typsicher und getestet.",
    recruiter:
      "Arbeitsberechtigt in Österreich, über 5 Jahre Full-Stack-Erfahrung, MSc in Angewandter AI in Arbeit, mit nachweisbarer Wirkung: 20 % geringere Query-Latenz, über 90 % Testabdeckung, über 10 ausgelieferte Apps.",
    founder:
      "Sie suchen einen technischen Partner, der ein Produkt von null auf eins bringt? Ich habe ein AI-Produkt bereits auf über 1.000 tägliche Nutzer skaliert. Ich konzipiere, baue und liefere den gesamten Stack: Frontend, Backend und die AI-Schicht.",
  },
};

const bio = {
  ...bo,
  short:
    "Ich bin Full-Stack-Engineer in Salzburg mit über 5 Jahren Erfahrung im Aufbau produktiver Systeme für Healthcare-, EdTech- und Real-Estate-Unternehmen. Aktuell mache ich einen MSc in Applied Image & Signal Processing und entwickle parallel AI-Produkte mit OpenAI, RAG und LLM-Architektur.",
  paragraphs: [
    "Ich habe im Frontend begonnen, mit Fokus auf Render-Performance und pixelgenaue UIs, und mich zum Full-Stack-Engineer entwickelt, der Systeme end-to-end verantwortet: typsichere Nest.js-Services, optimierte PostgreSQL- und MongoDB-Schemata sowie CI/CD-Pipelines, die zuverlässig ausliefern.",
    "In über fünf Jahren habe ich mehr als 10 produktive Anwendungen geliefert: ein CRM für über 200 Vertriebsmitarbeiter, klinische Geräteoberflächen, Telehealth-Plattformen und mandantenfähige EdTech-Systeme. Dabei habe ich die Query-Latenz um 20 % gesenkt, die Deployment-Frequenz um 35 % erhöht, über 90 % Testabdeckung erreicht und vier Junior-Entwickler betreut.",
    "Heute erweitere ich meine AI-Expertise durch einen MSc an der FH Salzburg und baue retrieval-gestützte Assistenten auf Basis der OpenAI-APIs. Mein aktuelles Projekt, Shahada GPT, bedient über 1.000 tägliche Nutzer mit quellenbasierten Antworten auf Basis von RAG und strukturiertem Prompt-Engineering.",
  ],
  philosophy: [
    {
      title: "In Produktion liefern",
      body: "Prototypen sind einfach. Ich optimiere für das System, das echte Nutzer, echte Last und echte Edge-Cases übersteht.",
    },
    {
      title: "Alles messen",
      body: "Latenz, Testabdeckung, Deployment-Frequenz. Wenn ich die Wirkung nicht messen kann, ist die Arbeit nicht fertig.",
    },
    {
      title: "Typsicher von Grund auf",
      body: "TypeScript durchgängig. Weniger Laufzeit-Überraschungen, schnellere Refactorings, Code, der sich selbst dokumentiert.",
    },
    {
      title: "AI, die funktioniert",
      body: "Fundierte, quellenbasierte LLM-Systeme statt Demos. RAG, Evaluierungen und Prompt-Pipelines für Zuverlässigkeit gebaut.",
    },
  ],
};

const stats = [
  { ...st[0], label: "Jahre in Produktion" },
  { ...st[1], label: "Ausgelieferte Apps" },
  { ...st[2], label: "Täglich betreute Nutzer plattformübergreifend" },
  { ...st[3], label: "Testabdeckung der Kern-Services" },
];

const categoryDe: Record<string, string> = {
  Frontend: "Frontend",
  Backend: "Backend",
  Databases: "Datenbanken",
  "AI & Machine Learning": "AI & Machine Learning",
  "Cloud & DevOps": "Cloud & DevOps",
  "Methods & Tools": "Methoden & Tools",
};

const skillGroups = sg.map((g) => ({ ...g, category: categoryDe[g.category] ?? g.category }));

const experience = [
  {
    ...ex[0],
    role: "Full-Stack-Engineer",
    summary:
      "Entwicklung von AI-gestützten Kundenprodukten und typsicheren Backend-Services bei gleichzeitiger Steigerung der Engineering-Qualität.",
    highlights: [
      "OpenAI-APIs (GPT-4 / GPT-4o) in Kundenprodukte integriert und Chat-Assistenten sowie Content-Generierung mit prompt-optimierten, typsicheren Pipelines gebaut.",
      "Nest.js-/TypeScript-Backend-Services entwickelt und PostgreSQL- & MongoDB-Queries optimiert, was die durchschnittliche DB-Query-Latenz um 20 % senkte.",
      "CI/CD mit GitHub Actions und Docker etabliert, Kern-Services auf über 90 % Testabdeckung gebracht und 4 Junior-Entwickler betreut, was die Code-Review-Zyklen um 25 % verkürzte.",
    ],
  },
  {
    ...ex[1],
    role: "MERN-Stack-Entwickler",
    summary: "Auslieferung einer Full-Stack-CRM-Plattform für den Vertrieb in Echtzeit.",
    highlights: [
      "Ein Full-Stack-CRM (React, Node.js, MySQL) für über 200 Vertriebsmitarbeiter gebaut und 15+ RESTful-API-Endpunkte für Echtzeit-Dashboards bereitgestellt.",
      "Normalisierte MySQL-Schemata für Kontakt- und Deal-Management konzipiert, was die durchschnittliche Antwortzeit der Queries um 30 % senkte.",
    ],
  },
  {
    ...ex[2],
    role: "Frontend-Engineer",
    summary: "Entwicklung performanter Oberflächen für klinische Geräte.",
    highlights: [
      "Über 30 modulare React-+-Redux-Komponenten für klinische Geräte-UIs gebaut und die Render-Performance auf schwächerer Hardware um 45 % verbessert.",
      "Pixelgenaue, responsive UIs über 6 Breakpoints mit React.js & Material-UI geliefert und das MongoDB-Indexing optimiert, was die Query-Zeiten um 35 % reduzierte.",
    ],
  },
  {
    ...ex[3],
    role: "Frontend-Engineer",
    summary: "Aufbau von Vertriebs-Dashboards und eines wiederverwendbaren Design-Systems.",
    highlights: [
      "React-/Redux-/Tailwind-Vertriebs-Dashboards entwickelt, die die Bearbeitungszeit der Nutzer um 20 % senkten, und eine wiederverwendbare Design-System-Komponentenbibliothek ausgeliefert.",
    ],
  },
];

const projects = [
  {
    ...pr[0],
    tag: "AI-Wissensassistent (Islam)",
    status: "Live · 1.000+ tägl. Nutzer",
    challenge:
      "Religiöse Fragen verlangen quellenbasierte, vertrauenswürdige Antworten. Generische LLMs halluzinieren und belegen nichts.",
    solution:
      "Ein dialogbasierter Assistent auf Basis der OpenAI-APIs mit Vektordatenbank, der per Retrieval-Augmented Generation und strukturiertem Prompt-Engineering jede Antwort in nachprüfbaren Quellen verankert.",
    features: [
      "Retrieval-Augmented Generation (RAG) über eine kuratierte Wissensbasis",
      "Quellenbasierte Antworten mit Zitaten",
      "Strukturierte Prompt-Engineering-Pipeline",
      "Skaliert auf über 1.000 tägliche Nutzer",
    ],
    results: ["Über 1.000 tägliche Nutzer", "Quellenbasierte Antworten", "Stabile LLM-Pipeline in Produktion"],
  },
  {
    ...pr[1],
    tag: "AI-Telehealth-Plattform",
    status: "Live · HealthTech",
    challenge:
      "Ärzt:innen mussten sichere Videosprechstunden durchführen und die Beweglichkeit (ROM) von Patient:innen aus der Ferne messen, ohne Abstriche bei Genauigkeit, Abrechnung oder Compliance.",
    solution:
      "Eine Telehealth-Plattform mit AI-gestützter ROM-Messung während Live-Videoanrufen, Echtzeit-Terminplanung, sicheren Patient:innen-Workflows und integrierter Abrechnung.",
    features: [
      "AI-gestützte ROM-Messung während Videoanrufen",
      "Sichere Videosprechstunden in Echtzeit",
      "Terminplanung & integrierte Abrechnung",
      "Typsichere Next.js-+-Nest.js-Architektur",
    ],
    results: ["AI-ROM-Messung im Anruf", "Sichere klinische Workflows", "Durchgängige Buchung & Abrechnung"],
  },
  {
    ...pr[2],
    tag: "AI-gestützte EdTech-Plattform",
    status: "Live · 128K+ Lernende",
    challenge:
      "Ein schnell wachsender Bildungsanbieter (zuvor Awfera) brauchte eine Plattform für über 100.000 Lernende in vielen Organisationen, jeweils mit isolierten Daten, Rollen und AI-gestützten Inhalten.",
    solution:
      "Eine mandantenfähige Lernplattform auf React, Nest.js und PostgreSQL mit rollenbasierter Zugriffskontrolle, AI-gestützten Lernpfaden und skalierbaren Content-Delivery-Pipelines.",
    features: [
      "Mandantenfähige Architektur mit Datenisolierung",
      "Rollenbasierte Zugriffskontrolle",
      "AI-gestütztes Lernen & Content-Pipelines",
      "Skaliert auf über 128.000 Lernende",
    ],
    results: ["128.000+ Lernende", "Mandantenfähigkeit & RBAC", "Skalierbare AI-Content-Auslieferung"],
  },
  {
    ...pr[3],
    tag: "AI-Plattform für medizinische Bildgebung",
    status: "Produktion · HealthTech",
    challenge:
      "Radiologie-Teams brauchten eine AI-gestützte Bildgebungs-Oberfläche zur Diagnose-Automatisierung, die auf jedem Gerät und jeder Bildschirmgröße schnell und reaktionsfreudig bleibt.",
    solution:
      "Ein performance-optimiertes Frontend mit modularem Komponentensystem und vollständig responsivem Layout, entwickelt für Klarheit in anspruchsvollen klinischen Workflows.",
    features: [
      "UI für AI-gestützte Bildgebung & Diagnose-Automatisierung",
      "Über 30 wiederverwendbare, barrierearme Komponenten",
      "Responsiv über 6 Breakpoints",
      "+45 % Render-Performance",
    ],
    results: ["+45 % Render-Performance", "30+ wiederverwendbare Komponenten", "Responsive UI über 6 Breakpoints"],
  },
  {
    ...pr[4],
    tag: "AI-CRM für Vertrieb & Lead-Conversion",
    status: "Live · SaaS",
    challenge:
      "Dienstleister verloren Umsatz durch langsame Lead-Reaktion. Anfragen verteilt über Instagram, WhatsApp und Facebook wurden kalt, bevor jemand antwortete.",
    solution:
      "Ein AI-gestütztes CRM, das Leads sofort erfasst, qualifiziert und konvertiert und Nachrichten aus mehreren Kanälen in einer Pipeline mit automatisiertem Follow-up bündelt.",
    features: [
      "Vereinheitlichte Lead-Erfassung über mehrere Kanäle (IG, WhatsApp, Facebook)",
      "AI-Lead-Qualifizierung & -Scoring",
      "Sofortiges automatisiertes Follow-up",
      "Echtzeit-Dashboard der Vertriebs-Pipeline",
    ],
    results: ["Schnellere Lead-Reaktion", "Höhere Conversion-Raten", "Ein vereinheitlichter Posteingang & Pipeline"],
  },
];

const currentProject = {
  ...cp,
  tag: "AI-Wissensassistent (Islam)",
  status: "In aktiver Entwicklung",
  blurb:
    "Ein quellenbasierter dialogbasierter AI-Assistent für über 1.000 tägliche Nutzer, gebaut auf den OpenAI-APIs mit Retrieval-Augmented Generation und einer strukturierten Prompt-Engineering-Pipeline.",
  goals: [
    "Antwortpräzision mit Evaluierungs-Harnischen verbessern",
    "Kuratierte Wissensbasis & Embeddings erweitern",
    "Mehrsprachigkeit hinzufügen (Englisch / Urdu / Arabisch)",
    "Vektor-Such-Latenz im Skalierungsfall optimieren",
  ],
  architecture: [
    { layer: "Client", value: "React-SPA" },
    { layer: "API", value: "Node.js-Services" },
    { layer: "AI", value: "OpenAI GPT-4o" },
    { layer: "Retrieval", value: "Vektor-DB + RAG" },
  ],
};

const education = [
  {
    ...ed[0],
    degree: "MSc Applied Image & Signal Processing",
    period: "Aktuell eingeschrieben",
    focus: ["AI", "Computer Vision", "Machine Learning", "Bildverarbeitung", "Signalverarbeitung", "Angewandte Statistik"],
  },
  {
    ...ed[1],
    degree: "BSc Software Engineering",
    period: "Abschluss 2019",
    focus: ["Software Engineering", "Algorithmen", "Systemdesign"],
  },
];

const achievements = [
  "Über 10 produktive Anwendungen in mehreren Branchen ausgeliefert",
  "Datenbank-Query-Latenz durch Schema- & Index-Optimierung um 20 % gesenkt",
  "Deployment-Frequenz durch CI/CD-Einführung um 35 % erhöht",
  "Über 90 % Testabdeckung der Kern-Services mit Jest erreicht",
  "4 Junior-Entwickler betreut und Code-Review-Zyklen um 25 % verkürzt",
];

const languages = [
  { ...lg[0], name: "Englisch", level: "Verhandlungssicher", badge: "C1" },
  { ...lg[1], name: "Urdu", level: "Muttersprache", badge: "Native" },
  { ...lg[2], name: "Deutsch", level: "Grundkenntnisse, auf dem Weg zu A2", badge: "A1 zu A2" },
];

const workAuth = {
  ...wa,
  status: "Arbeitsberechtigt in Österreich",
  detail: "Arbeitsberechtigung für 20 Std./Woche",
  location: "Wohnhaft in Salzburg, Österreich",
  remote: "Verfügbar für Remote-Arbeit in der gesamten EU & DACH-Region",
  points: [
    { label: "Arbeitsberechtigung", value: "Österreich, 20 Std./Woche" },
    { label: "Standort", value: "Salzburg, Österreich 🇦🇹" },
    { label: "Markt", value: "Österreich & DACH-Region" },
    { label: "Remote", value: "EU-weit & weltweit" },
  ],
};

const services = [
  { ...sv[0], title: "Full-Stack-Entwicklung", desc: "End-to-end-Web-Apps mit React, Next.js, Nest.js und TypeScript, typsicher von der Datenbank bis zur UI." },
  { ...sv[1], title: "Web-Anwendungen", desc: "Schnelle, barrierearme, SEO-fähige Web-Produkte, mobile-first mit moderner Architektur gebaut." },
  { ...sv[2], title: "Mobile Anwendungen", desc: "Plattformübergreifende Mobile-Erlebnisse mit React Native, die Logik mit Ihrem Web-Stack teilen." },
  { ...sv[3], title: "API-Entwicklung", desc: "REST-, GraphQL- und WebSocket-APIs mit sauberen Verträgen, Auth und über 90 % Testabdeckung." },
  { ...sv[4], title: "SaaS-Entwicklung", desc: "Mandantenfähiges SaaS mit RBAC, Stripe-Billing und CI/CD, von Tag eins auf Skalierung ausgelegt." },
  { ...sv[5], title: "AI-Integration & Beratung", desc: "OpenAI-, RAG- und LLM-Systeme, die in Produktion gehen: fundiert, evaluiert, zuverlässig." },
];

const research = {
  ...re,
  status: "Laufende MSc-Forschung",
  enrolled: "Aktuell eingeschrieben",
  location: "Salzburg, Österreich",
  intro:
    "Neben meiner Engineering-Arbeit absolviere ich ein MSc-Studium in Applied Image & Signal Processing in Österreich. Dort wende ich Computer Vision, Deep Learning und Signalverarbeitung auf echte biomedizinische Bildgebungsprobleme an, nicht nur auf Kursaufgaben.",
  project: {
    ...re.project,
    title: "Kompressionsbewusste AI für biomedizinische Bildgebung",
    questionLabel: "Forschungsfrage",
    question:
      "Wie stark lassen sich Mikroskopiebilder komprimieren, bevor die AI-gestützte Zellsegmentierung an Genauigkeit verliert?",
    summary:
      "Ich habe eine reproduzierbare Pipeline gebaut, die Zell-Mikroskopie-Datensätze mit H.265/HEVC in verschiedenen Qualitätsstufen komprimiert, sie rekonstruiert und auf jeder Variante eine CellPose-Deep-Learning-Segmentierung ausführt, um die Auswirkungen auf Bildqualität, Speichereffizienz und Segmentierungsleistung zu messen.",
  },
  interests: [
    { ...re.interests[0], label: "Computer Vision" },
    { ...re.interests[1], label: "Medizinische Bildgebung" },
    { ...re.interests[2], label: "Bildkompression" },
    { ...re.interests[3], label: "Signalverarbeitung" },
    { ...re.interests[4], label: "Machine Learning" },
    { ...re.interests[5], label: "Deep Learning" },
    { ...re.interests[6], label: "Zellsegmentierung" },
    { ...re.interests[7], label: "Biomedizinische Bildanalyse" },
  ],
  metrics: [
    { ...re.metrics[0], label: "Mikroskopie-Bild-/Masken-Paare" },
    { ...re.metrics[1], label: "Bewertete Kompressionsvarianten" },
    { ...re.metrics[2], label: "Kleiner bei ~33 dB PSNR (Sweet Spot)" },
    { ...re.metrics[3], label: "Maximal untersuchte Kompression" },
  ],
  timeline: [
    { ...re.timeline[0], title: "Datensatz & Vorverarbeitung", desc: "Standardisierte CellPose-Mikroskopie-Paare unter Erhalt der exakten Zell-ID-Masken." },
    { ...re.timeline[1], title: "H.265-Kompressions-Sweep", desc: "Bildsequenzen via FFmpeg über 4 Qualitätsstufen und 3 Frame-Reihenfolgen kodiert." },
    { ...re.timeline[2], title: "AI-Zellsegmentierung", desc: "CellPose (cyto3) auf jeder komprimierten Variante und der Referenz ausgeführt." },
    { ...re.timeline[3], title: "Qualitäts- & Speicheranalyse", desc: "Trade-off mit PSNR, Bitrate und Rate-Distortion-Kurven quantifiziert." },
    { ...re.timeline[4], title: "Segmentierungs-Genauigkeit (IoU / Dice)", desc: "Misst die echte Auswirkung der Kompression auf die Zellerkennung, nicht nur die Pixeltreue." },
  ],
};

const navLinks = [
  { label: "Über mich", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Erfahrung", href: "#experience" },
  { label: "Projekte", href: "#projects" },
  { label: "Forschung", href: "#research" },
  { label: "Leistungen", href: "#services" },
  { label: "Kontakt", href: "#contact" },
];

const ui = {
  nav: { hireMe: "Kontakt aufnehmen", toggleMenu: "Menü umschalten", home: "Start" },
  hero: {
    available: "Verfügbar für Jobs",
    headline: ["Ich entwickle produktionsreife ", "Web- & AI-Produkte", ", die live gehen."],
    roles: ["Full-Stack-Engineer", "AI-Application-Developer"],
    seeking:
      "MSc-Studium in Salzburg, offen für Werkstudenten- & Teilzeit-Engineering-Rollen (20 Std./Woche).",
    hireMe: "Kontakt aufnehmen",
    viewProjects: "Projekte ansehen",
    resume: "Lebenslauf",
    chipYears: "In Produktion",
    chipUsers: "Tägliche AI-Nutzer",
  },
  about: {
    kicker: "Über mich",
    title: ["Der Engineer hinter den ", "Produkten", "."],
    whyHire: "Warum Kunden mich beauftragen",
    whyHireSub: "Nachweisbare, messbare Lieferung, keine Versprechen.",
  },
  skills: {
    kicker: "Fähigkeiten",
    title: ["Ein Full-Stack-Toolkit, ", "AI-ready", "."],
    description:
      "Von pixelgenauen Frontends über typsichere Backends bis zu produktiven LLM-Systemen. Das ist der Stack, mit dem ich ausliefere.",
    levels: { 5: "Experte", 4: "Fortgeschritten", 3: "Solide", 2: "Im Aufbau" } as Record<number, string>,
  },
  experience: {
    kicker: "Erfahrung",
    title: ["Fünf Jahre ", "Auslieferung", "."],
    description:
      "Ein Track-Record in Healthcare, EdTech, Real Estate und AI, mit messbarer Wirkung an jeder Station.",
    current: "Aktuell",
  },
  projects: {
    kicker: "Ausgewählte Arbeiten",
    title: ["Case Studies, nicht nur ", "Screenshots", "."],
    description:
      "Jedes davon ging in Produktion. Hier sind Herausforderung, Lösung und Ergebnis, präsentiert wie ein echtes Produkt.",
    challenge: "Herausforderung: ",
    solution: "Lösung: ",
    results: "Ergebnisse: ",
    visit: "Live-Website ansehen",
  },
  current: {
    buildingPre: "Aktuell in Arbeit: ",
    buildProgress: "Fortschritt",
    currentFocus: "Aktueller Fokus",
    architecture: "Architektur",
  },
  research: {
    kicker: "Forschung & Wissenschaftlicher Fokus",
    title: ["Angewandte Forschung in ", "Computer Vision & Medizinischer Bildgebung", "."],
    description:
      "Ich baue nicht nur Produkte, ich untersuche, wie AI mit echten Daten umgeht. Meine aktuelle MSc-Forschung wendet Computer Vision und Deep Learning auf die biomedizinische Bildgebung an.",
    focusAreas: "Forschungsschwerpunkte",
    approach: "Forschungsansatz",
    models: "Modelle & Methoden",
    tools: "Tools & Bibliotheken",
    inProgress: "In Arbeit",
    done: "Abgeschlossen",
  },
  education: {
    kicker: "Ausbildung & Sprachen",
    title: ["Fundiert in ", "Informatik & AI", "."],
    description:
      "Ein Software-Engineering-Fundament, geschärft durch Forschung im Masterstudium zu angewandter AI und Computer Vision.",
    enrolled: "Eingeschrieben",
    languages: "Sprachen",
  },
  visa: {
    kicker: "Arbeitsberechtigung",
    title: ["EU-berechtigt, ", "startklar", "."],
    description:
      "Wohnhaft in Salzburg mit legaler Arbeitsberechtigung in Österreich, also kein Umzugsaufwand und keine Visa-Wartezeit. Verfügbar vor Ort in der DACH-Region und vollständig remote weltweit.",
  },
  services: {
    kicker: "Leistungen",
    title: ["Wie ich Sie beim ", "Bauen", " unterstütze."],
    description:
      "Von einem einzelnen Feature bis zum kompletten Produkt, mit flexiblen Modellen für Freelance-Kunden, Start-ups und Teams.",
  },
  contact: {
    kicker: "Sprechen wir",
    title: ["Ein Projekt im Kopf? ", "Bauen wir es."],
    description:
      "Verfügbar für Werkstudenten- und Teilzeit-Rollen, Remote-Positionen, Freelance-Projekte und technische Beratung. Ich antworte in der Regel innerhalb von 24 Stunden.",
    channelEmail: "E-Mail",
    channelLinkedin: "Vernetzen Sie sich",
    channelGithub: "Code ansehen",
    channelWhatsapp: "Kurzer Chat",
    labelEmail: "E-Mail",
    labelLinkedin: "LinkedIn",
    labelGithub: "GitHub",
    labelWhatsapp: "WhatsApp",
    bookCall: "30-min Kennenlern-Call buchen",
    formName: "Name",
    formEmail: "E-Mail",
    formMessage: "Projektdetails",
    phName: "Max Mustermann",
    phEmail: "max@firma.com",
    phMessage: "Erzählen Sie mir von Ihrem Projekt, Zeitrahmen und Zielen…",
    submit: "Nachricht senden",
    success: "Ihr E-Mail-Programm wird geöffnet, danke für Ihre Nachricht!",
    preferEmail: "Lieber per E-Mail? Schreiben Sie an",
    subject: "Neue Projektanfrage von",
    fallbackName: "Ihrer Website",
  },
  footer: {
    tagline:
      "Full-Stack-Engineer & AI-Application-Developer, der produktionsreife Web- und AI-Produkte aus Salzburg, Österreich, baut.",
    navigate: "Navigation",
    connect: "Kontakt",
    email: "E-Mail",
    resume: "Lebenslauf / CV",
    rights: "Alle Rechte vorbehalten.",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
  },
  cookie: {
    title: "Deine Privatsphäre",
    message:
      "Diese Website nutzt ausschließlich technisch notwendigen lokalen Speicher, um dein Design und deine Sprache zu merken. Es werden keine Tracking- oder Werbe-Cookies verwendet.",
    accept: "Akzeptieren",
    decline: "Nur notwendige",
    learnMore: "Datenschutz",
  },
  legal: {
    backHome: "Zurück zur Startseite",
    lastUpdated: "Zuletzt aktualisiert",
    imprint: {
      title: "Impressum",
      subtitle: "Angaben gemäß §5 ECG und §25 MedienG (Österreich)",
      responsibleHeading: "Für den Inhalt verantwortlich",
      contactHeading: "Kontakt",
      disclaimerHeading: "Haftungsausschluss",
      disclaimer:
        "Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen übernommen. Für die Inhalte verlinkter externer Websites sind ausschließlich deren Betreiber verantwortlich.",
      copyrightHeading: "Urheberrecht",
      copyright:
        "Alle Inhalte, das Design und der Quellcode dieser Website sind urheberrechtlich geschützt. Eine Vervielfältigung oder Verwendung ohne vorherige schriftliche Zustimmung ist nicht gestattet.",
    },
    privacy: {
      title: "Datenschutzerklärung",
      subtitle: "Wie deine Daten auf dieser Website behandelt werden – im Einklang mit der DSGVO.",
      intro:
        "Deine Privatsphäre ist wichtig. Diese Website ist ein persönliches Portfolio und so gebaut, dass so wenige personenbezogene Daten wie möglich erhoben werden. Diese Erklärung beschreibt, was verarbeitet wird, und deine Rechte gemäß der EU-Datenschutz-Grundverordnung (DSGVO).",
      sections: [
        {
          heading: "Verantwortlicher",
          body: "Verantwortlicher für die Datenverarbeitung auf dieser Website ist Hammad Ahmad Riaz, Salzburg, Österreich. Du erreichst den Verantwortlichen unter der im Kontaktbereich genannten E-Mail-Adresse.",
        },
        {
          heading: "Welche Daten verarbeitet werden",
          body: "Diese Website verwendet keine Analyse-, Werbe- oder Tracking-Cookies von Drittanbietern. Die einzigen im Browser gespeicherten Daten sind dein Design (hell/dunkel), deine Sprachauswahl und deine Cookie-Einwilligung, die im lokalen Speicher deines eigenen Geräts abgelegt werden. Beim Surfen werden keine personenbezogenen Daten an einen Server übermittelt.",
        },
        {
          heading: "Kontaktformular",
          body: "Das Kontaktformular speichert keine Daten auf einem Server. Beim Absenden öffnet sich dein eigenes E-Mail-Programm mit vorausgefüllter Nachricht; die von dir gesendeten Angaben werden direkt über deinen E-Mail-Anbieter übermittelt. Deine Nachricht und E-Mail-Adresse werden ausschließlich zur Beantwortung deiner Anfrage verwendet.",
        },
        {
          heading: "Hosting & Server-Logs",
          body: "Die Website wird von einem Hosting-Anbieter bereitgestellt, der automatisch technische Zugriffsdaten (wie IP-Adresse, Browsertyp und Zeitpunkt der Anfrage) verarbeiten kann, um die Website auszuliefern und abzusichern. Grundlage ist das berechtigte Interesse am Betrieb einer sicheren Website (Art. 6 Abs. 1 lit. f DSGVO).",
        },
        {
          heading: "Deine Rechte",
          body: "Nach der DSGVO hast du das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Übertragbarkeit deiner personenbezogenen Daten sowie das Recht, der Verarbeitung zu widersprechen. Außerdem kannst du dich bei der österreichischen Datenschutzbehörde beschweren.",
        },
        {
          heading: "Kontakt",
          body: "Für Datenschutzanfragen kontaktiere den Verantwortlichen per E-Mail unter der unten angegebenen Adresse.",
        },
      ],
    },
  },
};

export const de = {
  profile,
  brand,
  bio,
  stats,
  skillGroups,
  experience,
  projects,
  currentProject,
  research,
  education,
  achievements,
  languages,
  workAuth,
  services,
  navLinks,
  ui,
};
