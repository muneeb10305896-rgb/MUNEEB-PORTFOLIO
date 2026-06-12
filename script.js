/* ============================================
   MUNEEB AHMED BUTT — PORTFOLIO JAVASCRIPT
   ============================================ */

/* —— CAPABILITY FLAGS —— */
const FINE_POINTER   = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* —— THEME (initial value is set by the inline head script to avoid FOUC) —— */
const themeMetaTag = document.querySelector('meta[name="theme-color"]');
let particleRGB = '124,109,250';

function syncThemeExtras() {
  const light = document.documentElement.dataset.theme === 'light';
  if (themeMetaTag) themeMetaTag.setAttribute('content', light ? '#f3f2fb' : '#07070f');
  particleRGB = getComputedStyle(document.documentElement).getPropertyValue('--particle-rgb').trim() || particleRGB;
}
syncThemeExtras();

/* —— TRANSLATIONS (EN / FI) —— */
const translations = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    'nav.hire-me': 'Hire Me',
    'hero.tag': 'Open to opportunities in Finland',
    'hero.hi': "Hi, I'm",
    'hero.view-exp': 'View Experience',
    'hero.get-in-touch': 'Get In Touch',
    'hero.dl-cv': 'Download CV',
    'hero.roles': 'Roles held',
    'hero.studying': 'Currently studying',
    'hero.erasmus': 'Erasmus Network',
    'hero.tag-nordash': 'Building NORDASH — Live',
    'hero.nordash-cta': 'Visit NORDASH',
    'hero.nordash-label': 'Full-Stack Developer & IT Manager',
    'about.label': 'About Me',
    'about.title': 'My Introduction',
    'about.sub': 'From Lahore to Kuopio — my journey in tech spans two continents and keeps growing.',
    'exp.label': 'Experience',
    'exp.title': 'My Career So Far',
    'exp.sub': 'Building digital products, contributing to open culture, and learning every day.',
    'projects.label': 'Startup &amp; Projects',
    'projects.title': "What I'm Building",
    'projects.sub': 'A startup platform and hands-on projects &mdash; designed, built, deployed and managed by me.',
    'skills.label': 'Skills',
    'skills.title': 'Tech Stack',
    'skills.sub': 'Tools and technologies I work with across the stack.',
    'skills.prof-label': 'Key Proficiencies',
    'skills.prof-sub': 'Skill levels based on real-world experience across roles.',
    'edu.label': 'Education',
    'edu.title': 'Academic Background',
    'edu.sub': 'Formal education that shaped my path.',
    'edu.certs': 'Certifications',
    'contact.label': 'Contact',
    'contact.title': 'Let\'s Connect',
    'contact.sub': 'Open to IT roles, freelance projects, and meaningful collaborations across Finland and beyond.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.location': 'Location',
    'form.name': 'Your Name',
    'form.email': 'Your Email',
    'form.subject': 'Subject',
    'form.message': 'Your Message',
    'form.send': 'Send Message',
    'form.ph-name': 'Your full name',
    'form.ph-email': 'your@email.com',
    'form.ph-subject': 'Job opportunity, collaboration, hello…',
    'form.ph-message': 'Tell me more about the opportunity or project…',
    'scroll': 'Scroll',
    'lanyard.hint': 'Drag me & let go',
    'cert.verify': 'Verify credential',
    'cert.view': 'View certificate',
    'cv.preview': 'Preview',
    'cv.download': 'Download',
    'footer.text': 'Designed & built by Muneeb Ahmed Butt',
    'hero.skip': 'Skip to content',
    'hero.id-org': 'Portfolio · UEF Kuopio',
    'hero.id-title': 'IT Student & Developer',
    'hero.id-status': '● Available',
    'about.p1': 'I\'m <strong>Muneeb Ahmed Butt</strong>, an IT student at the <strong>University of Eastern Finland</strong> (Kuopio), currently also working as an <strong>IT Developer at DEVSiNC</strong> remotely. My journey spans web development, network support, logistics, and community work across Pakistan and Finland.',
    'about.nordash': 'Since 2025 I build and manage <strong>NORDASH</strong>, a startup digital agency platform, working as its Full-Stack Developer &amp; IT Manager.',
    'about.p2': 'I completed the <strong>2024 Aspire Leaders Program at Harvard Business School</strong>, a global leadership program focused on critical thinking, communication, and social impact — 30 hours of coursework with an international community.',
    'about.p3': 'I\'m also an active member of the <strong>Erasmus Student Network (ESN Savo)</strong>, supporting international student communities in Finland.',
    'about.badge.it-dev': 'IT Developer',
    'about.badge.web': 'Web Projects',
    'about.badge.networking': 'Networking',
    'about.badge.data': 'Data Handling',
    'about.badge.esn': 'ESN Member',
    'about.badge.harvard': 'Harvard Aspire Alumni',
    'about.badge.license': 'Category B License',
    'about.info.studying': 'Currently Studying',
    'about.info.studying-desc': 'B.Sc. IT — University of Eastern Finland, Kuopio',
    'about.info.working': 'Currently Working',
    'about.info.working-desc': 'IT Developer at DEVSiNC (Remote) — July 2025–present',
    'about.info.location': 'Location',
    'about.info.location-desc': 'Kuopio, Finland',
    'about.info.languages': 'Languages',
    'about.info.languages-desc': 'English · Finnish (learning) · Urdu',
    'about.info.driving': 'Driver\'s License',
    'about.info.driving-desc': 'Category B (passenger car)',
    'exp1.role': 'IT Developer',
    'exp1.company': 'DEVSiNC · Remote, Lahore',
    'exp2.role': 'Network System Specialist (Intern)',
    'exp2.company': 'Hameed Latif Hospital · Lahore, Pakistan',
    'exp3.role': 'Executive Committee Member',
    'exp3.company': 'Chanan Development Association (CDA) · Lahore, Pakistan',
    'exp4.role': 'Truck Dispatcher',
    'exp4.company': 'Pioneer Enterprises · Remote, United States',
    'exp5.role': 'Data Entry Specialist',
    'exp5.company': 'Onestop Grocery Store · Lahore, Pakistan',
    'skills.prof.ms-office': 'Microsoft Office Suite',
    'skills.prof.data-entry': 'Data Entry & Management',
    'skills.prof.problem-solving': 'Problem Solving & Analysis',
    'skills.prof.it-support': 'IT Support & Networking',
    'skills.prof.web-dev': 'Web Development (HTML/CSS)',
    'skills.prof.react-java': 'React & Java Programming',
    'skills.prof.git': 'Git & Version Control',
    'skills.prof.python-r': 'Python & R Programming',
    'edu.degree1': 'Bachelor\'s Degree in Information Technology',
    'edu.school1': 'University of Eastern Finland (UEF)',
    'edu.meta1': 'September 2025 — Present · Kuopio, Finland',
    'edu.degree2': 'Bachelor of Technology in Computer Science',
    'edu.school2': 'Bahria University',
    'edu.meta2': '2023 — 2025 · Lahore, Pakistan',
    'edu.degree3': 'Intermediate — ICS (Computer Science)',
    'edu.school3': 'KIPS Education System',
    'edu.meta3': '2021 — 2023 · Lahore, Pakistan',
    'contact.instagram': 'Instagram',
    'contact.phone': 'Phone',
    'cv.meta.pdf': 'PDF',
    'cv.meta.size': '202 KB',
    'cv.meta.updated': 'Updated June 2026',
    'footer.copyright': '© 2026 Muneeb Ahmed Butt. All rights reserved.',
    'page.title': 'Muneeb Ahmed Butt — Portfolio',
    'hero.sr-text': 'IT Student at UEF Finland, IT Developer at DEVSiNC, Harvard Aspire 2024 Alumni, ESN Savo member, web developer and problem solver.',
    'form.sending': 'Sending…',
    'form.success': '✓ Message sent! I\'ll get back to you as soon as possible.',
    'form.error': '✗ Something went wrong. Please email me directly at muneeb10305896@gmail.com',
    'footer.text-full': 'Designed &amp; built by <span>Muneeb Ahmed Butt</span> &middot; University of Eastern Finland &middot; Kuopio <svg viewBox="0 0 18 11" width="18" height="11" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle"><rect width="18" height="11" fill="#fff"/><rect x="5" y="0" width="3" height="11" fill="#003580"/><rect x="0" y="4" width="18" height="3" fill="#003580"/></svg>',
    /* -- experience bullets -- */
    'exp1.b1': 'Managed and updated company websites, ensuring functionality and content accuracy',
    'exp1.b2': 'Assisted in developing customer-required websites based on specifications',
    'exp1.b3': 'Worked on multiple web projects, supporting design, updates, and maintenance',
    'exp1.b4': 'Collaborated with team members using development tools and version control',
    'exp2.b1': 'Assisted in IT and network system setup and maintenance',
    'exp2.b2': 'Provided technical support to hospital staff and doctors',
    'exp2.b3': 'Helped manage patient record systems and troubleshoot issues',
    'exp2.b4': 'Monitored system performance and ensured data security and uptime',
    'exp3.b1': 'Maintained and organized NGO records, reports, and documentation accurately',
    'exp3.b2': 'Managed data related to community projects, volunteers, and activities',
    'exp3.b3': 'Coordinated planning, communication, and execution of development initiatives',
    'exp3.b4': 'Worked with stakeholders to track progress and outcomes of programs',
    'exp4.b1': 'Managed dispatch operations using DAT Load Board and RingCentral',
    'exp4.b2': 'Updated digital records, load statuses, and documentation accurately',
    'exp4.b3': 'Coordinated with drivers and brokers via online systems',
    'exp4.b4': 'Resolved operational issues using digital tools',
    'exp5.b1': 'Managed sales and inventory data using IPOS system',
    'exp5.b2': 'Ensured data accuracy and maintained daily and monthly reports',
    'exp5.b3': 'Supported store operations through organized data management',
    /* -- experience tags -- */
    'exp1.tag1': 'Web Development',
    'exp1.tag2': 'Git',
    'exp1.tag3': 'Version Control',
    'exp1.tag4': 'IT Projects',
    'exp2.tag1': 'Network Support',
    'exp2.tag2': 'IT Troubleshooting',
    'exp2.tag3': 'Hardware',
    'exp2.tag4': 'Data Security',
    'exp3.tag1': 'Leadership',
    'exp3.tag2': 'Project Coordination',
    'exp3.tag3': 'Data Management',
    'exp3.tag4': 'NGO',
    'exp4.tag1': 'DAT Load Board',
    'exp4.tag2': 'RingCentral',
    'exp4.tag3': 'Dispatching',
    'exp4.tag4': 'Logistics',
    'exp5.tag1': 'IPOS',
    'exp5.tag2': 'Data Entry',
    'exp5.tag3': 'Inventory',
    'exp5.tag4': 'Reporting',
    /* -- skill card cats + names -- */
    'skills.card1.cat': 'IT &amp; Systems',
    'skills.card1.name': 'Core IT Skills',
    'skills.card2.cat': 'Development',
    'skills.card2.name': 'Web &amp; Tools',
    'skills.card3.cat': 'Data &amp; Office',
    'skills.card3.name': 'Productivity',
    'skills.card4.cat': 'Logistics',
    'skills.card4.name': 'Operations',
    'skills.card5.cat': 'Soft Skills',
    'skills.card5.name': 'Professional',
    'skills.card6.cat': 'Learning',
    'skills.card6.name': 'In Progress',
    'skills.card7.cat': 'Marketing',
    'skills.card7.name': 'Digital Marketing',
    'skills.card8.cat': 'IT Security',
    'skills.card8.name': 'Cybersecurity',
    /* -- skill pills -- */
    'skills.pill.it-operations': 'IT Operations',
    'skills.pill.it-support': 'IT Support',
    'skills.pill.troubleshooting': 'Troubleshooting',
    'skills.pill.networking': 'Networking',
    'skills.pill.hardware-software': 'Hardware &amp; Software',
    'skills.pill.web-dev': 'Web Development',
    'skills.pill.git-github': 'Git &amp; GitHub',
    'skills.pill.vscode': 'VS Code',
    'skills.pill.html-css': 'HTML/CSS',
    'skills.pill.word': 'Microsoft Word',
    'skills.pill.excel': 'Microsoft Excel',
    'skills.pill.data-entry': 'Data Entry',
    'skills.pill.ipos': 'IPOS',
    'skills.pill.reporting': 'Reporting',
    'skills.pill.dat-board': 'DAT Load Board',
    'skills.pill.ringcentral': 'RingCentral',
    'skills.pill.dispatching': 'Dispatching',
    'skills.pill.documentation': 'Documentation',
    'skills.pill.problem-solving': 'Problem Solving',
    'skills.pill.problem-analysis': 'Problem Analysis',
    'skills.pill.teamwork': 'Team Work',
    'skills.pill.communication': 'Communication',
    'skills.pill.python': 'Python',
    'skills.pill.r-prog': 'R Programming',
    'skills.pill.databases': 'Databases',
    'skills.pill.react': 'React',
    'skills.pill.social-media': 'Social Media',
    'skills.pill.content-creation': 'Content Creation',
    'skills.pill.seo': 'SEO Basics',
    'skills.pill.canva': 'Canva',
    'skills.pill.branding': 'Branding',
    'skills.pill.data-security': 'Data Security',
    'skills.pill.access-control': 'Access Control',
    'skills.pill.network-security': 'Network Security',
    'skills.pill.system-monitoring': 'System Monitoring',
    /* -- certification descriptions -- */
    'cert1.desc': 'Verified skills assessment covering Python fundamentals: scalar types, operators, control flow, strings, collections, iteration, modularity, classes, and exception handling.',
    'cert2.desc': 'Verified skills assessment covering JavaScript fundamentals: functions, currying, hoisting, scope, inheritance, events, and error handling.',
    'cert3.desc': 'Foundational AI literacy: core AI concepts, machine learning basics, AI ethics, and practical applications of artificial intelligence in business and society.',
    'cert4.desc': 'Global leadership and personal development program focused on critical thinking, communication, self-confidence, and social impact. Completed 30 hours of coursework within an international learning community. Mode: Online.',
  },
  fi: {
    'nav.about': 'Tietoja',
    'nav.experience': 'Kokemus',
    'nav.projects': 'Projektit',
    'nav.skills': 'Taidot',
    'nav.education': 'Koulutus',
    'nav.contact': 'Yhteys',
    'nav.cv': 'CV',
    'nav.hire-me': 'Ota yhteyttä',
    'hero.tag': 'Avoin työmahdollisuuksille Suomessa',
    'hero.hi': 'Hei, olen',
    'hero.view-exp': 'Katso kokemus',
    'hero.get-in-touch': 'Ota yhteyttä',
    'hero.dl-cv': 'Lataa CV',
    'hero.roles': 'Tehtävissä',
    'hero.studying': 'Opiskelee',
    'hero.erasmus': 'Erasmus-verkosto',
    'hero.tag-nordash': 'Rakennan NORDASHia — Live',
    'hero.nordash-cta': 'Vieraile NORDASHissa',
    'hero.nordash-label': 'Full-Stack-kehittäjä & IT-päällikkö',
    'about.label': 'Tietoja minusta',
    'about.title': 'Esittely',
    'about.sub': 'Lahdesta Kuopioon — matkani teknologian parissa ulottuu kahdelle mantereelle ja jatkuu edelleen.',
    'exp.label': 'Kokemus',
    'exp.title': 'Urani tähän asti',
    'exp.sub': 'Rakennan digitaalisia tuotteita, osallistun avoimeen kulttuuriin ja opin joka päivä.',
    'projects.label': 'Käynnistys &amp; Projektit',
    'projects.title': 'Mitä rakennan',
    'projects.sub': 'Alustaprojekti ja käytännön projektit &mdash; suunniteltu, rakennettu, julkaistu ja hallinnoitu minun toimestani.',
    'skills.label': 'Taidot',
    'skills.title': 'Teknologiapino',
    'skills.sub': 'Työkalut ja teknologiat, joita käytän eri osa-alueilla.',
    'skills.prof-label': 'Keskeiset taidot',
    'skills.prof-sub': 'Taitotasot perustuvat tosielämän kokemukseen eri tehtävistä.',
    'edu.label': 'Koulutus',
    'edu.title': 'Akateeminen tausta',
    'edu.sub': 'Muodollinen koulutus, joka on muovannut polkuani.',
    'edu.certs': 'Sertifikaatit',
    'contact.label': 'Yhteys',
    'contact.title': 'Otetaan yhteyttä',
    'contact.sub': 'Avoin IT-tehtäville, freelance-projekteille ja merkitykselliselle yhteistyölle Suomessa ja muualla.',
    'contact.email': 'Sähköposti',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.location': 'Sijainti',
    'form.name': 'Nimesi',
    'form.email': 'Sähköpostisi',
    'form.subject': 'Aihe',
    'form.message': 'Viestisi',
    'form.send': 'Lähetä viesti',
    'form.ph-name': 'Koko nimesi',
    'form.ph-email': 'sähköpostisi@osoite.fi',
    'form.ph-subject': 'Työtilaisuus, yhteistyö, tervehdys…',
    'form.ph-message': 'Kerro lisää mahdollisuudesta tai projektista…',
    'scroll': 'Selaa',
    'lanyard.hint': 'Vedä ja päästä',
    'cert.verify': 'Todista',
    'cert.view': 'Katso todistus',
    'cv.preview': 'Esikatsele',
    'cv.download': 'Lataa',
    'footer.text': 'Suunnitellut ja toteuttanut Muneeb Ahmed Butt',
    'hero.skip': 'Siirry sisältöön',
    'hero.id-org': 'Portfolio · UEF Kuopio',
    'hero.id-title': 'IT-opiskelija & -kehittäjä',
    'hero.id-status': '● Saatavilla',
    'about.p1': 'Olen <strong>Muneeb Ahmed Butt</strong>, IT-opiskelija <strong>Itä-Suomen yliopistossa</strong> (Kuopio), ja työskentelen tällä hetkellä etänä <strong>IT-kehittäjänä DEVSiNCillä</strong>. Matkani kattaa verkkokehitystä, verkko-tukea, logistiikkaa ja yhteisötyötä Pakistanissa ja Suomessa.',
    'about.nordash': 'Vuodesta 2025 olen rakentanut ja hallinnoinut <strong>NORDASHia</strong>, startup-digitaalitoimistoa, toimien sen Full-Stack-kehittäjänä &amp; IT-päällikkönä.',
    'about.p2': 'Suoritin <strong>vuoden 2024 Aspire Leaders -ohjelman Harvard Business Schoolissa</strong>, maailmanlaajuisen johtajuusohjelman, joka keskittyi kriittiseen ajatteluun, viestintään ja yhteiskunnalliseen vaikuttamiseen — 30 tuntia kurssityötä kansainvälisessä yhteisössä.',
    'about.p3': 'Olen myös aktiivinen jäsen <strong>Erasmus Student Networkissa (ESN Savo)</strong>, tukemassa kansainvälisiä opiskelijayhteisöjä Suomessa.',
    'about.badge.it-dev': 'IT-kehittäjä',
    'about.badge.web': 'Verkkoprojektit',
    'about.badge.networking': 'Verkkotekniikka',
    'about.badge.data': 'Datan käsittely',
    'about.badge.esn': 'ESN-jäsen',
    'about.badge.harvard': 'Harvard Aspire -alumni',
    'about.badge.license': 'B-luokan ajokortti',
    'about.info.studying': 'Opiskelee',
    'about.info.studying-desc': 'B.Sc. IT — Itä-Suomen yliopisto, Kuopio',
    'about.info.working': 'Työskentelee',
    'about.info.working-desc': 'IT-kehittäjä DEVSiNCillä (etä) — heinäkuu 2025–nykyhetki',
    'about.info.location': 'Sijainti',
    'about.info.location-desc': 'Kuopio, Suomi',
    'about.info.languages': 'Kielet',
    'about.info.languages-desc': 'Englanti · Suomi (opiskelu) · Urdu',
    'about.info.driving': 'Ajokortti',
    'about.info.driving-desc': 'B-luokka (henkilöauto)',
    'exp1.role': 'IT-kehittäjä',
    'exp1.company': 'DEVSiNC · Etä, Lahore',
    'exp2.role': 'Verkkojärjestelmäasiantuntija (harjoittelija)',
    'exp2.company': 'Hameed Latif -sairaala · Lahore, Pakistan',
    'exp3.role': 'Toimeenpanevan komitean jäsen',
    'exp3.company': 'Chanan Development Association (CDA) · Lahore, Pakistan',
    'exp4.role': 'Kuorma-auton lähettäjä',
    'exp4.company': 'Pioneer Enterprises · Etä, Yhdysvallat',
    'exp5.role': 'Tietojen syöttämisen asiantuntija',
    'exp5.company': 'Onestop Grocery Store · Lahore, Pakistan',
    'skills.prof.ms-office': 'Microsoft Office -paketti',
    'skills.prof.data-entry': 'Tietojen syöttö & -hallinta',
    'skills.prof.problem-solving': 'Ongelmanratkaisu & -analyysi',
    'skills.prof.it-support': 'IT-tuki & -verkot',
    'skills.prof.web-dev': 'Verkkokehitys (HTML/CSS)',
    'skills.prof.react-java': 'React & Java-ohjelmointi',
    'skills.prof.git': 'Git & versiohallinta',
    'skills.prof.python-r': 'Python & R-ohjelmointi',
    'edu.degree1': 'Tietotekniikan kandidaatin tutkinto',
    'edu.school1': 'Itä-Suomen yliopisto (UEF)',
    'edu.meta1': 'Syyskuu 2025 — Nykyhetki · Kuopio, Suomi',
    'edu.degree2': 'Tietotekniikan tekniikan kandidaatti',
    'edu.school2': 'Bahrian yliopisto',
    'edu.meta2': '2023 — 2025 · Lahore, Pakistan',
    'edu.degree3': 'Lukio — ICS (Tietojenkäsittelytiede)',
    'edu.school3': 'KIPS-koulutusjärjestelmä',
    'edu.meta3': '2021 — 2023 · Lahore, Pakistan',
    'contact.instagram': 'Instagram',
    'contact.phone': 'Puhelin',
    'cv.meta.pdf': 'PDF',
    'cv.meta.size': '202 kt',
    'cv.meta.updated': 'Päivitetty kesäkuu 2026',
    'footer.copyright': '© 2026 Muneeb Ahmed Butt. Kaikki oikeudet pidätetään.',
    'page.title': 'Muneeb Ahmed Butt — Portfoliosivu',
    'hero.sr-text': 'IT-opiskelija Itä-Suomen yliopistossa, IT-kehittäjä DEVSiNCillä, Harvard Aspire 2024 -alumni, ESN Savon jäsen, verkkokehittäjä ja ongelmanratkaisija.',
    'form.sending': 'Lähetetään…',
    'form.success': '✓ Viesti lähetetty! Palaan asiaan mahdollisimman pian.',
    'form.error': '✗ Jotain meni pieleen. Lähetä sähköpostia osoitteeseen muneeb10305896@gmail.com',
    'footer.text-full': 'Suunnitellut &amp; toteuttanut <span>Muneeb Ahmed Butt</span> &middot; Itä-Suomen yliopisto &middot; Kuopio <svg viewBox="0 0 18 11" width="18" height="11" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle"><rect width="18" height="11" fill="#fff"/><rect x="5" y="0" width="3" height="11" fill="#003580"/><rect x="0" y="4" width="18" height="3" fill="#003580"/></svg>',
    /* -- experience bullets -- */
    'exp1.b1': 'Hallinnoin ja päivitin yrityksen verkkosivuja varmistaen toimivuuden ja sisällön oikeellisuuden',
    'exp1.b2': 'Avustin asiakkaiden vaatimien verkkosivujen kehittämisessä määrittelyjen mukaisesti',
    'exp1.b3': 'Työskentelin useissa verkkoprojekteissa tukien suunnittelua, päivityksiä ja ylläpitoa',
    'exp1.b4': 'Tein yhteistyötä tiimin jäsenten kanssa käyttäen kehitystyökaluja ja versiohallintaa',
    'exp2.b1': 'Avustin IT- ja verkkoympäristöjen asennuksessa ja ylläpidossa',
    'exp2.b2': 'Tarjosin teknistä tukea sairaalan henkilökunnalle ja lääkäreille',
    'exp2.b3': 'Avustin potilastietojärjestelmien hallinnassa ja ongelmien ratkaisussa',
    'exp2.b4': 'Seurasin järjestelmän suorituskykyä ja varmistin tietoturvan ja käytettävyyden',
    'exp3.b1': 'Ylläpidin ja järjestelin kansalaisjärjestön asiakirjoja, raportteja ja dokumentaatiota',
    'exp3.b2': 'Hallinnoin yhteisöprojekteihin, vapaaehtoisiin ja toimintaan liittyvää tietoa',
    'exp3.b3': 'Koordinoin suunnittelua, viestintää ja kehityshankkeiden toteutusta',
    'exp3.b4': 'Työskentelin sidosryhmien kanssa seuraten ohjelmien edistymistä ja tuloksia',
    'exp4.b1': 'Hallinnoin lähetystoimintaa käyttäen DAT Load Board- ja RingCentral-järjestelmiä',
    'exp4.b2': 'Päivitin digitaalisia tietoja, kuormatilanteita ja dokumentaatiota tarkasti',
    'exp4.b3': 'Koordinoin kuljettajien ja välittäjien kanssa verkkopohjaisten järjestelmien avulla',
    'exp4.b4': 'Ratkaisin toiminnallisia ongelmia digitaalisia työkaluja käyttäen',
    'exp5.b1': 'Hallinnoin myynti- ja varastotietoja IPOS-järjestelmällä',
    'exp5.b2': 'Varmistin tietojen tarkkuuden ja ylläpidin päivittäisiä ja kuukausittaisia raportteja',
    'exp5.b3': 'Tuoin myymälän toimintaa järjestelmällisen tiedonhallinnan avulla',
    /* -- experience tags -- */
    'exp1.tag1': 'Verkkokehitys',
    'exp1.tag2': 'Git',
    'exp1.tag3': 'Versiohallinta',
    'exp1.tag4': 'IT-projektit',
    'exp2.tag1': 'Verkkotuki',
    'exp2.tag2': 'IT-ongelmanratkaisu',
    'exp2.tag3': 'Laitteisto',
    'exp2.tag4': 'Tietoturva',
    'exp3.tag1': 'Johtajuus',
    'exp3.tag2': 'Projektikoordinointi',
    'exp3.tag3': 'Tiedonhallinta',
    'exp3.tag4': 'Kansalaisjärjestö',
    'exp4.tag1': 'DAT Load Board',
    'exp4.tag2': 'RingCentral',
    'exp4.tag3': 'Lähetystoiminta',
    'exp4.tag4': 'Logistiikka',
    'exp5.tag1': 'IPOS',
    'exp5.tag2': 'Tietojen syöttö',
    'exp5.tag3': 'Varastonhallinta',
    'exp5.tag4': 'Raportointi',
    /* -- skill card cats + names -- */
    'skills.card1.cat': 'IT &amp; Järjestelmät',
    'skills.card1.name': 'Keskeiset IT-taidot',
    'skills.card2.cat': 'Kehitys',
    'skills.card2.name': 'Web &amp; Työkalut',
    'skills.card3.cat': 'Tieto &amp; Toimisto',
    'skills.card3.name': 'Tuottavuus',
    'skills.card4.cat': 'Logistiikka',
    'skills.card4.name': 'Toiminnot',
    'skills.card5.cat': 'Pehmeät taidot',
    'skills.card5.name': 'Ammattilainen',
    'skills.card6.cat': 'Oppiminen',
    'skills.card6.name': 'Kesken',
    'skills.card7.cat': 'Markkinointi',
    'skills.card7.name': 'Digitaalinen markkinointi',
    'skills.card8.cat': 'IT-turvallisuus',
    'skills.card8.name': 'Kyberturvallisuus',
    /* -- skill pills -- */
    'skills.pill.it-operations': 'IT-toiminnot',
    'skills.pill.it-support': 'IT-tuki',
    'skills.pill.troubleshooting': 'Vianmääritys',
    'skills.pill.networking': 'Verkkotekniikka',
    'skills.pill.hardware-software': 'Laitteisto &amp; Ohjelmisto',
    'skills.pill.web-dev': 'Verkkokehitys',
    'skills.pill.git-github': 'Git &amp; GitHub',
    'skills.pill.vscode': 'VS Code',
    'skills.pill.html-css': 'HTML/CSS',
    'skills.pill.word': 'Microsoft Word',
    'skills.pill.excel': 'Microsoft Excel',
    'skills.pill.data-entry': 'Tietojen syöttö',
    'skills.pill.ipos': 'IPOS',
    'skills.pill.reporting': 'Raportointi',
    'skills.pill.dat-board': 'DAT Load Board',
    'skills.pill.ringcentral': 'RingCentral',
    'skills.pill.dispatching': 'Lähetystoiminta',
    'skills.pill.documentation': 'Dokumentointi',
    'skills.pill.problem-solving': 'Ongelmanratkaisu',
    'skills.pill.problem-analysis': 'Ongelman analyysi',
    'skills.pill.teamwork': 'Tiimityö',
    'skills.pill.communication': 'Viestintä',
    'skills.pill.python': 'Python',
    'skills.pill.r-prog': 'R-ohjelmointi',
    'skills.pill.databases': 'Tietokannat',
    'skills.pill.react': 'React',
    'skills.pill.social-media': 'Sosiaalinen media',
    'skills.pill.content-creation': 'Sisällöntuotanto',
    'skills.pill.seo': 'SEO-perusteet',
    'skills.pill.canva': 'Canva',
    'skills.pill.branding': 'Brändäys',
    'skills.pill.data-security': 'Tietoturva',
    'skills.pill.access-control': 'Pääsynhallinta',
    'skills.pill.network-security': 'Verkkoturvallisuus',
    'skills.pill.system-monitoring': 'Järjestelmän valvonta',
    /* -- certification descriptions -- */
    'cert1.desc': 'Varmennettu taitojen arviointi, joka kattaa Pythonin perusteet: skalaarityypit, operaattorit, ohjausvuot, merkkijonot, kokoelmat, iterointi, modulaarisuus, luokat ja poikkeustenkäsittely.',
    'cert2.desc': 'Varmennettu taitojen arviointi, joka kattaa JavaScriptin perusteet: funktiot, currying, nosto, näkyvyysalueet, periytyminen, tapahtumat ja virheidenkäsittely.',
    'cert3.desc': 'Perustason tekoälylukutaito: keskeiset tekoälykonseptit, koneoppimisen perusteet, tekoälyn etiikka ja tekoälyn käytännön sovellukset liiketoiminnassa ja yhteiskunnassa.',
    'cert4.desc': 'Maailmanlaajuinen johtajuus- ja henkilökohtainen kehitysohjelma, joka keskittyi kriittiseen ajatteluun, viestintään, itseluottamukseen ja yhteiskunnalliseen vaikuttamiseen. Suoritit 30 tuntia kurssityötä kansainvälisessä oppimisyhteisössä. Tila: Verkossa.',
  }
};

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    } else {
      // fallback to English if key missing in target language
      const fallback = translations.en[key];
      if (fallback !== undefined) el.innerHTML = fallback;
    }
  });
  // translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    } else {
      const fallback = translations.en[key];
      if (fallback !== undefined) el.placeholder = fallback;
    }
  });
  // translate page title
  if (t['page.title']) document.title = t['page.title'];
  // translate sr-only text
  const srEl = document.querySelector('.sr-only');
  if (srEl && t['hero.sr-text']) srEl.textContent = t['hero.sr-text'];
  // update lang toggle button text
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = lang === 'fi' ? 'EN' : 'FI';
  document.documentElement.setAttribute('lang', lang === 'fi' ? 'fi' : 'en');
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

/* —— LANGUAGE TOGGLE —— */
const langToggleBtn = document.getElementById('langToggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const cur = (document.documentElement.getAttribute('lang') || 'en').slice(0,2);
    const next = cur === 'fi' ? 'en' : 'fi';
    applyLanguage(next);
  });
}
// apply saved language on load, default English
(function initLang() {
  const saved = (() => { try { return localStorage.getItem('lang'); } catch (e) { return null; } })() || 'en';
  applyLanguage(saved);
})();

/* —— THEME TOGGLE —— */
const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    // View Transitions wipe — capture toggle button position for clip-path origin
    const rect = themeToggleBtn.getBoundingClientRect();
    const x = Math.round(rect.left + rect.width  / 2);
    const y = Math.round(rect.top  + rect.height / 2);
    document.documentElement.style.setProperty('--wipe-x', x + 'px');
    document.documentElement.style.setProperty('--wipe-y', y + 'px');

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        document.documentElement.dataset.theme = next;
        syncThemeExtras();
      });
    } else {
      // fallback for Firefox/Safari that don't support VT yet
      document.documentElement.classList.add('theme-switching');
      document.documentElement.dataset.theme = next;
      syncThemeExtras();
      setTimeout(() => document.documentElement.classList.remove('theme-switching'), 500);
    }
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
}

/* —— PRELOADER —— */
function hidePreloader() {
  const pre = document.getElementById('preloader');
  if (pre) pre.classList.add('done');
}
window.addEventListener('load', () => setTimeout(hidePreloader, REDUCED_MOTION ? 0 : 1400));
// failsafe: never trap the user behind the preloader if a resource hangs
setTimeout(hidePreloader, 4000);

/* —— CUSTOM CURSOR (transform-based — no layout reflow on mousemove) —— */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
let cHalf = 6, rHalf = 18; // half-sizes for centring each element

if (FINE_POINTER && cursor && ring) {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX - cHalf}px,${mouseY - cHalf}px)`;
  }, { passive: true });

  const hoverables = 'a, button, .badge, .skill-pill, .exp-tag, .contact-link, .id-card';
  document.querySelectorAll(hoverables).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px'; cursor.style.height = '20px'; cHalf = 10;
      cursor.style.transform = `translate(${mouseX - cHalf}px,${mouseY - cHalf}px)`;
      ring.style.width = '50px'; ring.style.height = '50px'; rHalf = 25;
      ring.style.borderColor = 'rgba(124,109,250,.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px'; cursor.style.height = '12px'; cHalf = 6;
      cursor.style.transform = `translate(${mouseX - cHalf}px,${mouseY - cHalf}px)`;
      ring.style.width = '36px'; ring.style.height = '36px'; rHalf = 18;
      ring.style.borderColor = 'rgba(124,109,250,.5)';
    });
  });
}

/* —— SCROLL PROGRESS + NAV + BACK TO TOP + ACTIVE LINKS —— */
const scrollProgress = document.getElementById('scroll-progress');
const nav            = document.getElementById('main-nav');
const backToTop      = document.getElementById('backToTop');
const sections       = document.querySelectorAll('section[id]');
const navLinks       = document.querySelectorAll('.nav-link');
const sectionDots    = document.querySelectorAll('.section-dot');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  scrollProgress.style.width = (scrollTop / docHeight * 100) + '%';
  nav.classList.toggle('scrolled', scrollTop > 60);
  backToTop.classList.toggle('show', scrollTop > 600);

  let current = '';
  sections.forEach(sec => {
    if (scrollTop >= sec.offsetTop - 180) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
  sectionDots.forEach(dot => dot.classList.toggle('active', dot.dataset.section === current));
}, { passive: true });

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* —— MOBILE MENU —— */
const hamburger  = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});
function closeMobileMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMobileMenu();
});
document.addEventListener('click', e => {
  if (mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMobileMenu();
  }
});

/* —— PARTICLE CANVAS —— */
const pCanvas  = document.getElementById('particle-canvas');
const pCtx     = pCanvas ? pCanvas.getContext('2d') : null;
const mobileMQ = window.matchMedia('(max-width: 700px)');
let CONNECT_DIST = mobileMQ.matches ? 0 : 130; // skip O(n²) connection lines on mobile

function makeParticle() {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.5 + 0.3,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    o: Math.random() * 0.5 + 0.1
  };
}
const particles = Array.from({ length: mobileMQ.matches ? 40 : 90 }, makeParticle);

function resizeParticles() {
  if (!pCanvas) return;
  pCanvas.width = window.innerWidth; pCanvas.height = window.innerHeight;
  // adapt density + line cost when crossing the mobile breakpoint (rotation, window resize)
  const small = mobileMQ.matches;
  CONNECT_DIST = small ? 0 : 130;
  const target = small ? 40 : 90;
  while (particles.length > target) particles.pop();
  while (particles.length < target) particles.push(makeParticle());
}
resizeParticles();
window.addEventListener('resize', resizeParticles, { passive: true });

function tickParticles() {
  if (!pCtx || !pCanvas) return;
  pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
  for (const p of particles) {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = pCanvas.width;  else if (p.x > pCanvas.width)  p.x = 0;
    if (p.y < 0) p.y = pCanvas.height; else if (p.y > pCanvas.height) p.y = 0;
    pCtx.beginPath();
    pCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    pCtx.fillStyle = `rgba(${particleRGB},${p.o})`;
    pCtx.fill();
  }
  if (CONNECT_DIST > 0) {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          pCtx.beginPath();
          pCtx.moveTo(particles[i].x, particles[i].y);
          pCtx.lineTo(particles[j].x, particles[j].y);
          pCtx.strokeStyle = `rgba(${particleRGB},${0.09 * (1 - dist / CONNECT_DIST)})`;
          pCtx.lineWidth = 0.5;
          pCtx.stroke();
        }
      }
    }
  }
}

/* —— TYPEWRITER (setTimeout-based — reliable across all browsers) —— */
const twPhrases = [
  'IT Student at UEF, Finland',
  'Full-Stack Developer & IT Manager at NORDASH',
  'Harvard Aspire 2024 Alumni',
  'ESN Savo Board Member',
  'Web Developer & Problem Solver'
];
let twIdx = 0, twPos = 0, twDir = 1;
const twSpeed = 55, twPause = 1500;
const twEl = document.getElementById('typewriter');

if (!REDUCED_MOTION && twEl) {
  (function twTick() {
    const p = twPhrases[twIdx];
    twPos += twDir;

    if (twPos > p.length) {
      twDir = -1; twPos = p.length;
      twEl.textContent = p;
      setTimeout(twTick, twPause);
      return;
    } else if (twPos < 0) {
      twDir = 1; twPos = 0;
      twIdx = (twIdx + 1) % twPhrases.length;
      twEl.textContent = '';
      setTimeout(twTick, 250);
      return;
    }

    twEl.textContent = p.slice(0, twPos);
    setTimeout(twTick, twSpeed);
  })();
} else if (twEl) {
  twEl.textContent = twPhrases[0];
}

/* —— VELOCITY SCROLL —— */
let scrollVel = 0, lastScrollY = 0;
window.addEventListener('scroll', () => {
  scrollVel = window.scrollY - lastScrollY;
  lastScrollY = window.scrollY;
}, { passive: true });

const track1 = document.getElementById('track1');
const track2 = document.getElementById('track2');
let t1pos = 0, t2pos = 0, half1 = 0, half2 = 0;
function measureTracks() {
  if (track1) half1 = track1.scrollWidth / 2;
  if (track2) { half2 = track2.scrollWidth / 2; if (t2pos === 0 || t2pos < -half2) t2pos = -half2; }
}
setTimeout(measureTracks, 100);
window.addEventListener('load', measureTracks);
window.addEventListener('resize', measureTracks, { passive: true });

function tickVelocity() {
  const speed = 3.0 + Math.abs(scrollVel) * 0.18;
  if (half1 > 0 && track1) {
    t1pos -= speed;
    if (t1pos <= -half1) t1pos += half1;
    track1.style.transform = `translateX(${t1pos}px)`;
  }
  if (half2 > 0 && track2) {
    t2pos += speed;
    if (t2pos >= 0) t2pos -= half2;
    track2.style.transform = `translateX(${t2pos}px)`;
  }
  scrollVel *= 0.92;
}

/* —— SCROLL REVEAL + COUNTER —— */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.classList.remove('from-top', 'from-bottom');
      e.target.querySelectorAll('[data-count]').forEach(animateCounter);
      if (e.target.hasAttribute('data-count')) animateCounter(e.target);
    } else {
      e.target.classList.remove('visible');
      const aboveViewport = e.boundingClientRect.top < 0;
      e.target.classList.toggle('from-top', aboveViewport);
      e.target.classList.toggle('from-bottom', !aboveViewport);
    }
  });
}, { threshold: 0.12, rootMargin: '-5% 0px -5% 0px' });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => revealObserver.observe(el));

function animateCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  let cur = 0;
  const step = Math.max(1, Math.floor(target / 30));
  const timer = setInterval(() => {
    cur += step;
    if (cur >= target) { cur = target; clearInterval(timer); }
    el.textContent = cur + suffix;
  }, 30);
}
document.querySelectorAll('.hero-stats [data-count]').forEach(el => {
  const heroObs = new IntersectionObserver(ents => {
    ents.forEach(en => { if (en.isIntersecting) animateCounter(el); });
  }, { threshold: 0.5 });
  heroObs.observe(el);
});
// Force-fire counters on load in case the observer doesn't trigger immediately
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.hero-stats [data-count]').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        animateCounter(el);
      }
    });
  }, 300);
});

/* —— DRAGGABLE LANYARD —— */
let tickLanyard = () => {};
(function initLanyard() {
  const stage  = document.getElementById('lanyardStage');
  const canvas = document.getElementById('ropeCanvas');
  const card   = document.getElementById('idCard');
  if (!stage || !canvas || !card) return;

  const ctx  = canvas.getContext('2d');
  const holo = card.querySelector('.id-holo');

  /* ---- ROPE LAYER: wrapper keeps canvas + card in the same stacking context ---- */
  const layer = document.createElement('div');
  layer.id = 'ropeLayer';
  document.body.appendChild(layer);
  layer.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:50;';

  // move both canvas and card into the layer
  layer.appendChild(canvas);
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';

  layer.appendChild(card);
  card.style.position      = 'absolute';  // same positioning context as canvas
  card.style.pointerEvents = 'auto';
  card.style.touchAction   = 'none';
  card.style.zIndex        = '1';         // above canvas (default 0) within the layer

  /* ---- physics constants ---- */
  const SEGMENTS = 18, SEG_LEN = 9, GRAVITY = 0.75, FRICTION = 0.96, STIFFNESS = 40;
  let anchorX = 0, anchorY = 0;
  const points = [];
  for (let i = 0; i < SEGMENTS; i++) points.push({ x: 0, y: 0, ox: 0, oy: 0, pinned: i === 0 });
  const last = points[SEGMENTS - 1];

  /* ---- position helpers ---- */
  function resetToAnchor() {
    const sr = stage.getBoundingClientRect();
    anchorX = sr.left + sr.width / 2;
    anchorY = sr.top;
    for (let i = 0; i < SEGMENTS; i++) {
      const y = anchorY + i * SEG_LEN;
      points[i].x = anchorX; points[i].y = y;
      points[i].ox = anchorX; points[i].oy = y;
    }
  }
  resetToAnchor();
  card.style.left = last.x + 'px';
  card.style.top  = last.y + 'px';
  // subtle fade-in so the card doesn't flash in (it's no longer inside the animated stage)
  card.style.opacity = '0';
  requestAnimationFrame(() => {
    card.style.transition = 'opacity 0.7s ease 0.3s';
    card.style.opacity = '1';
  });

  function sizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function buildGradient() {
    const g = ctx.createLinearGradient(0, 0, 0, canvas.height);
    g.addColorStop(0, '#7c6dfa');
    g.addColorStop(1, '#4fc3f7');
    return g;
  }
  let ropeGrad = buildGradient();
  sizeCanvas();

  window.addEventListener('resize', () => {
    sizeCanvas();
    ropeGrad = buildGradient();
    const sr = stage.getBoundingClientRect();
    anchorX = sr.left + sr.width / 2;
    anchorY = sr.top;
    points[0].x = anchorX; points[0].y = anchorY;
    points[0].ox = anchorX; points[0].oy = anchorY;
    // if card is way off-screen after resize, reset it
    if (last.x < -300 || last.x > window.innerWidth + 300 ||
        last.y < -300 || last.y > window.innerHeight + 300) {
      resetToAnchor();
      card.style.left = last.x + 'px';
      card.style.top  = last.y + 'px';
    }
  }, { passive: true });

  /* ---- drag interaction ---- */
  let dragging = false, dragX = 0, dragY = 0;
  function pointerXY(e) {
    return e.touches ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY };
  }

  card.addEventListener('pointerdown', e => {
    dragging = true; last.pinned = true;
    const p = pointerXY(e); dragX = p.x; dragY = p.y;
    e.preventDefault();
  });

  window.addEventListener('pointermove', e => {
    if (!dragging) return;
    const p = pointerXY(e);
    dragX = Math.max(60, Math.min(window.innerWidth  - 60, p.x));
    dragY = Math.max(30, Math.min(window.innerHeight - 30, p.y));
  });

  function endDrag() {
    if (dragging) { dragging = false; last.pinned = false; }
  }
  window.addEventListener('pointerup',     endDrag);
  window.addEventListener('pointercancel', endDrag);
  window.addEventListener('blur',          endDrag);   // window loses focus → end drag

  card.addEventListener('dblclick', () => {
    resetToAnchor();
    card.style.left = last.x + 'px';
    card.style.top  = last.y + 'px';
  });

  /* ---- physics tick ---- */
  let layerHidden = false;
  tickLanyard = function() {
    const sr = stage.getBoundingClientRect();

    // skip all physics + rendering once the hero stage is well offscreen
    if (sr.bottom < -250 || sr.top > window.innerHeight + 250) {
      if (!layerHidden) { layer.style.visibility = 'hidden'; layerHidden = true; }
      return;
    }
    if (layerHidden) { layer.style.visibility = 'visible'; layerHidden = false; }

    anchorX = sr.left + sr.width / 2;
    anchorY = sr.top;

    // Verlet integration
    for (const p of points) {
      if (p.pinned) continue;
      const vx = (p.x - p.ox) * FRICTION;
      const vy = (p.y - p.oy) * FRICTION;
      p.ox = p.x; p.oy = p.y;
      p.x += vx; p.y += vy + GRAVITY;
    }
    if (dragging) { last.x = dragX; last.y = dragY; last.ox = dragX; last.oy = dragY; }

    // constraint solving
    for (let k = 0; k < STIFFNESS; k++) {
      for (let i = 0; i < SEGMENTS - 1; i++) {
        const a = points[i], b = points[i + 1];
        let dx = b.x - a.x, dy = b.y - a.y;
        let d = Math.hypot(dx, dy);
        if (d < 0.001) { dx = 0.01; dy = -0.01; d = Math.hypot(dx, dy); }
        const diff = (SEG_LEN - d) / d;
        const ox = dx * diff * 0.5, oy = dy * diff * 0.5;
        if (!a.pinned) { a.x -= ox; a.y -= oy; }
        if (!b.pinned) { b.x += ox; b.y += oy; }
      }
      points[0].x = anchorX; points[0].y = anchorY;
      if (dragging) { last.x = dragX; last.y = dragY; }
    }

    // render rope
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';

    ctx.strokeStyle = ropeGrad; ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < SEGMENTS; i++) ctx.lineTo(points[i].x, points[i].y);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < SEGMENTS; i++) ctx.lineTo(points[i].x, points[i].y);
    ctx.stroke();

    ctx.fillStyle = '#9b8df8';
    ctx.beginPath(); ctx.arc(anchorX, anchorY + 2, 5, 0, Math.PI * 2); ctx.fill();

    // position card — viewport coords because the layer is position:fixed inset:0
    const sl = points[SEGMENTS - 2];
    const angle = Math.atan2(last.y - sl.y, last.x - sl.x) - Math.PI / 2;
    card.style.left      = last.x + 'px';
    card.style.top       = last.y + 'px';
    card.style.transform = `translate(-50%,0) rotate(${angle}rad)`;
    if (holo) holo.style.transform = `rotate(${angle * 30}deg)`;
  };

  // initial swing-in
  if (!REDUCED_MOTION) {
    setTimeout(() => {
      if (Math.abs(last.x - anchorX) < 10) last.x += 80;
    }, 1600);
  }
})();

/* —— EXP CARD MOUSE GLOW —— */
document.querySelectorAll('.exp-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r    = card.getBoundingClientRect();
    const glow = card.querySelector('.exp-glow');
    if (glow) {
      glow.style.setProperty('--mx', ((e.clientX - r.left) / r.width  * 100) + '%');
      glow.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%');
    }
  });
});

/* —— MAGNETIC + 3D SPRING CARDS —— */
let mouseGX = -99999, mouseGY = -99999;
window.addEventListener('mousemove', e => { mouseGX = e.clientX; mouseGY = e.clientY; }, { passive: true });
window.addEventListener('mouseout',  e => { if (!e.relatedTarget) { mouseGX = -99999; mouseGY = -99999; } });

const springCards = [];
function registerCards(selector, cfg) {
  if (!FINE_POINTER) return;
  document.querySelectorAll(selector).forEach(el => {
    el.style.transformStyle = 'preserve-3d';
    el.style.willChange     = 'transform, box-shadow';
    springCards.push({
      el, cfg,
      mx:0, my:0, rx:0, ry:0, sc:1, gz:0,
      vmx:0, vmy:0, vrx:0, vry:0, vsc:0, vgz:0,
      tmx:0, tmy:0, trx:0, try_:0, tsc:1, tgz:0,
      glow:0, vglow:0, tglow:0
    });
  });
}
registerCards('.skill-card',   { radius:230, pull:.32, maxPull:30, tilt:24, lift:1.07,  depth:48 });
registerCards('.exp-card',     { radius:280, pull:.26, maxPull:34, tilt:9,  lift:1.025, depth:0  });
registerCards('.edu-card',     { radius:250, pull:.30, maxPull:30, tilt:13, lift:1.035, depth:30 });
registerCards('.cert-card',    { radius:250, pull:.30, maxPull:30, tilt:13, lift:1.035, depth:30 });
registerCards('.info-card',    { radius:210, pull:.30, maxPull:26, tilt:11, lift:1.04,  depth:0  });
registerCards('.contact-link', { radius:210, pull:.42, maxPull:28, tilt:8,  lift:1.04,  depth:0  });

const clampV = (v, m) => Math.max(-m, Math.min(m, v));
const STIFF = 0.11, DAMP = 0.76;
function stepSpring(pos, vel, target) {
  vel = (vel + (target - pos) * STIFF) * DAMP;
  return [pos + vel, vel];
}

function tickSpring() {
  if (!FINE_POINTER) return; // no mouse → no magnetic effect, save the work
  const vh = window.innerHeight;
  for (const c of springCards) {
    const r = c.el.getBoundingClientRect();
    if (r.bottom < -120 || r.top > vh + 120) {
      c.tmx = c.tmy = c.trx = c.try_ = c.tgz = c.tglow = 0; c.tsc = 1;
    } else {
      const cx = r.left + r.width  / 2 - c.mx;
      const cy = r.top  + r.height / 2 - c.my;
      const dx = mouseGX - cx, dy = mouseGY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < c.cfg.radius) {
        const f    = 1 - dist / c.cfg.radius;
        const ease = f * f * (3 - 2 * f);
        c.tmx  = clampV(dx * c.cfg.pull, c.cfg.maxPull) * ease;
        c.tmy  = clampV(dy * c.cfg.pull, c.cfg.maxPull) * ease;
        c.try_ = (dx  / (r.width  / 2)) * c.cfg.tilt * ease;
        c.trx  = (-dy / (r.height / 2)) * c.cfg.tilt * ease;
        c.tsc  = 1 + (c.cfg.lift - 1) * ease;
        c.tgz  = c.cfg.depth * ease;
        c.tglow = ease;
      } else {
        c.tmx = c.tmy = c.trx = c.try_ = c.tgz = c.tglow = 0; c.tsc = 1;
      }
    }
    [c.mx,   c.vmx]   = stepSpring(c.mx,   c.vmx,   c.tmx);
    [c.my,   c.vmy]   = stepSpring(c.my,   c.vmy,   c.tmy);
    [c.rx,   c.vrx]   = stepSpring(c.rx,   c.vrx,   c.trx);
    [c.ry,   c.vry]   = stepSpring(c.ry,   c.vry,   c.try_);
    [c.sc,   c.vsc]   = stepSpring(c.sc,   c.vsc,   c.tsc);
    [c.gz,   c.vgz]   = stepSpring(c.gz,   c.vgz,   c.tgz);
    [c.glow, c.vglow] = stepSpring(c.glow, c.vglow, c.tglow);

    // idle detection: once a card has settled, stop touching the DOM for it
    const settled =
      Math.abs(c.mx) < .02 && Math.abs(c.my) < .02 &&
      Math.abs(c.rx) < .02 && Math.abs(c.ry) < .02 &&
      Math.abs(c.sc - 1) < .002 && Math.abs(c.gz) < .05 && c.glow < .003 &&
      c.tmx === 0 && c.tmy === 0;
    if (settled) {
      if (!c.idle) {
        c.idle = true;
        c.el.style.transform = '';
        c.el.style.boxShadow = '';
      }
      continue;
    }
    c.idle = false;

    c.el.style.transform =
      `perspective(820px) translate3d(${c.mx.toFixed(2)}px,${c.my.toFixed(2)}px,${c.gz.toFixed(2)}px) ` +
      `rotateX(${c.rx.toFixed(2)}deg) rotateY(${c.ry.toFixed(2)}deg) scale(${c.sc.toFixed(3)})`;
    if (c.glow > 0.003) {
      const g = c.glow;
      c.el.style.boxShadow =
        `${(-c.ry * 1.6).toFixed(1)}px ${(c.rx * 1.6 + 14 * g).toFixed(1)}px ${(40 * g).toFixed(0)}px rgba(124,109,250,${(0.38 * g).toFixed(3)}),` +
        `0 0 0 1px rgba(124,109,250,${(0.4 * g).toFixed(3)})`;
    } else {
      c.el.style.boxShadow = '';
    }
  }
}

/* —— PARALLAX FLOATING SHAPES ON SCROLL —— */
const floatShapes = document.querySelectorAll('.floating-shape');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  floatShapes.forEach((s, i) => {
    const depth = (i % 3 + 1) * 0.12;
    s.style.transform = `translateY(${y * depth}px) rotate(${y * 0.04 * (i + 1)}deg)`;
  });
}, { passive: true });

/* —— SKILL BARS —— */
const sbarObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.sbar-fill').forEach(bar => { bar.style.width = bar.dataset.width + '%'; });
      sbarObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.25 });
document.querySelectorAll('.skills-bars').forEach(el => sbarObserver.observe(el));

/* —— CONTACT FORM (Formspree) —— */
const contactForm = document.getElementById('contactForm');
const cfStatus    = document.getElementById('cfStatus');
const cfSubmit    = document.getElementById('cfSubmit');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    // novalidate is set for custom styling — run native validation manually
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    const btnText = cfSubmit.querySelector('.cf-btn-text');
    const curLang = (document.documentElement.getAttribute('lang') || 'en').slice(0,2);
    const t = translations[curLang] || translations.en;
    cfSubmit.disabled = true; cfSubmit.classList.add('loading');
    btnText.textContent = t['form.sending'] || 'Sending…';
    cfStatus.className = 'cf-status'; cfStatus.textContent = '';
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        contactForm.reset();
        cfStatus.className = 'cf-status success';
        cfStatus.textContent = t['form.success'] || '✓ Message sent! I\'ll get back to you as soon as possible.';
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Server error');
      }
    } catch {
      cfStatus.className = 'cf-status error';
      cfStatus.textContent = t['form.error'] || '✗ Something went wrong. Please email me directly at muneeb10305896@gmail.com';
    }
    cfSubmit.disabled = false; cfSubmit.classList.remove('loading');
    btnText.textContent = t['form.send'] || 'Send Message';
  });
}

/* ============================================
   MASTER ANIMATION LOOP — single rAF instead
   of 5 separate loops fighting each other
   ============================================ */
function tickCursorRing() {
  if (!ring) return;
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  ring.style.transform = `translate(${ringX - rHalf}px,${ringY - rHalf}px)`;
}

let rafPaused = false;
document.addEventListener('visibilitychange', () => {
  rafPaused = document.hidden;
  if (!rafPaused) requestAnimationFrame(masterTick);
});

function masterTick() {
  if (rafPaused) return;
  if (FINE_POINTER) tickCursorRing();
  if (!REDUCED_MOTION) {
    tickParticles();
  }
  tickVelocity();   // always run — CSS display:none handles reduced-motion users
  tickLanyard();
  tickSpring();
  requestAnimationFrame(masterTick);
}
requestAnimationFrame(masterTick);
