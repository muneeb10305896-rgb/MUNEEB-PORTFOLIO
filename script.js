/* ============================================
   MUNEEB AHMED BUTT &mdash; PORTFOLIO JAVASCRIPT
   ============================================ */

/* &mdash;&mdash; CAPABILITY FLAGS &mdash;&mdash; */
const FINE_POINTER   = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const HOVER_POINTER  = window.matchMedia('(hover: hover)').matches;
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* &mdash;&mdash; THEME (initial value is set by the inline head script to avoid FOUC) &mdash;&mdash; */
const themeMetaTag = document.querySelector('meta[name="theme-color"]');
let particleRGB = '124,109,250';

function syncThemeExtras() {
  const light = document.documentElement.dataset.theme === 'light';
  if (themeMetaTag) themeMetaTag.setAttribute('content', light ? '#f3f2fb' : '#07070f');
  particleRGB = getComputedStyle(document.documentElement).getPropertyValue('--particle-rgb').trim() || particleRGB;
}
syncThemeExtras();

/* &mdash;&mdash; TRANSLATIONS (EN / FI) &mdash;&mdash; */
const translations = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    'nav.resume': 'Resume',
    'cv.resume': 'Web Resume',
    'nav.hire-me': 'Hire Me',
    'hero.tag': 'Open to opportunities in Finland',
    'hero.hi': "Hi, I'm",
    'hero.view-exp': 'View Experience',
    'hero.get-in-touch': 'Get In Touch',
    'hero.dl-cv': 'Download CV',
    'hero.roles': 'Roles held',
    'hero.studying': 'Currently studying',
    'hero.erasmus': 'Erasmus Network',
    'hero.tag-nordash': 'Building NORDASH &mdash; Live',
    'hero.nordash-cta': 'Visit NORDASH',
    'hero.nordash-label': 'Full-Stack Developer & IT Manager',
    'about.label': 'About Me',
    'about.title': 'My Introduction',
    'about.sub': 'From Lahore to Kuopio &mdash; my journey in tech spans two continents and keeps growing.',
    'exp.label': 'Experience',
    'exp.title': 'My Career So Far',
    'exp.sub': 'Building digital products, contributing to open culture, and learning every day.',
    'projects.label': 'Startup &amp; Projects',
    'projects.title': "What I'm Building",
    'projects.sub': 'A startup platform and hands-on projects &mdash; designed, built, deployed and managed by me.',
    'projects.badge': 'STARTUP &middot; LIVE',
    'projects.role': 'Full-Stack Developer &amp; IT Manager &middot; 2025 &mdash; Present',
    'projects.nordash.title': 'NORDASH &mdash; Digital Agency',
    'projects.nordash.desc': 'NORDASH is a startup digital agency offering modern web development and digital services with a Nordic-meets-South-Asian design identity. I built the entire platform end-to-end and manage it daily as Full-Stack Developer &amp; IT Manager &mdash; architecture, code, deployment, content and client communication.',
    'projects.nordash.b1': 'CRM dashboard for client &amp; lead management',
    'projects.nordash.b2': 'Job application system',
    'projects.nordash.b3': 'Portfolio gallery',
    'projects.nordash.b4': 'Authentication &amp; email integration (Resend)',
    'projects.nordash.b5': 'Auto-deploy pipeline on Vercel',
    'projects.visit': 'Visit NORDASH &rarr;',
    'projects.bubba.title': 'BubbaCoin (BUBBA) &mdash; ERC-20 Blockchain Token',
    'projects.bubba.desc': 'Custom ERC-20 token designed and deployed from scratch on the Ethereum Sepolia Testnet. 1,000,000 BUBBA minted at deployment &mdash; publicly verifiable on Etherscan. Course project for IBC2026 at UEF.',
    'projects.etherscan': 'View on Etherscan &rarr;',
    'projects.site.title': 'This Portfolio Website',
    'projects.site.desc': 'The site you&rsquo;re looking at &mdash; designed and hand-coded by me with interactive 3D elements and motion design.',
    'projects.github': 'View GitHub &rarr;',
    'exp0.role': 'Full-Stack Developer &amp; IT Manager',
    'exp0.company': 'NORDASH (startup) &middot; Kuopio, Finland / Remote',
    'exp0.b1': 'Built the full NORDASH platform end-to-end: Next.js 16 + React 19 frontend, MongoDB backend, CRM dashboard, lead management and job application system',
    'exp0.b2': 'Manage all IT operations: deployment pipeline, hosting, performance, security and integrations',
    'exp0.b3': 'Drive the agency&rsquo;s web presence, branding, content and client communication',
    'exp0.tag5': 'IT Management',
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
    'form.ph-subject': 'Job opportunity, collaboration, hello&hellip;',
    'form.ph-message': 'Tell me more about the opportunity or project&hellip;',
    'scroll': 'Scroll',
    'lanyard.hint': 'Drag me & let go',
    'cert.verify': 'Verify credential',
    'cert.view': 'View certificate',
    'cv.preview': 'Preview',
    'cv.download': 'Download',
    'footer.text': 'Designed & built by Muneeb Ahmed Butt',
    'hero.skip': 'Skip to content',
    'hero.id-org': 'Portfolio &middot; UEF Kuopio',
    'hero.id-title': 'IT Student & Developer',
    'hero.id-status': '&#9679; Available',
    'about.p1': 'I\'m <strong>Muneeb Ahmed Butt</strong>, an IT student at the <strong>University of Eastern Finland</strong> (Kuopio), currently also working as an <strong>IT Developer at DEVSiNC</strong> remotely. My journey spans web development, network support, logistics, and community work across Pakistan and Finland.',
    'about.nordash': 'Since 2025 I build and manage <strong>NORDASH</strong>, a startup digital agency platform, working as its Full-Stack Developer &amp; IT Manager.',
    'about.p2': 'I completed the <strong>2024 Aspire Leaders Program at Harvard Business School</strong>, a global leadership program focused on critical thinking, communication, and social impact &mdash; 30 hours of coursework with an international community.',
    'about.p3': 'I\'m also an active member of the <strong>Erasmus Student Network (ESN Savo)</strong>, supporting international student communities in Finland.',
    'about.badge.it-dev': 'IT Developer',
    'about.badge.web': 'Web Projects',
    'about.badge.networking': 'Networking',
    'about.badge.data': 'Data Handling',
    'about.badge.esn': 'ESN Member',
    'about.badge.harvard': 'Harvard Aspire Alumni',
    'about.badge.license': 'Category B License',
    'about.info.studying': 'Currently Studying',
    'about.info.studying-desc': 'B.Sc. IT &mdash; University of Eastern Finland, Kuopio',
    'about.info.working': 'Currently Working',
    'about.info.working-desc': 'Full-Stack Developer &amp; IT Manager at NORDASH &middot; IT Developer at DEVSiNC (Remote)',
    'about.info.location': 'Location',
    'about.info.location-desc': 'Kuopio, Finland',
    'about.info.languages': 'Languages',
    'about.info.languages-desc': 'English &middot; Finnish (learning) &middot; Urdu',
    'about.info.driving': 'Driver\'s License',
    'about.info.driving-desc': 'Category B (passenger car)',
    'exp1.role': 'IT Developer',
    'exp1.company': 'DEVSiNC &middot; Remote, Lahore',
    'exp2.role': 'Network System Specialist (Intern)',
    'exp2.company': 'Hameed Latif Hospital &middot; Lahore, Pakistan',
    'exp3.role': 'Executive Committee Member',
    'exp3.company': 'Chanan Development Association (CDA) &middot; Lahore, Pakistan',
    'exp4.role': 'Truck Dispatcher',
    'exp4.company': 'Pioneer Enterprises &middot; Remote, United States',
    'exp5.role': 'Data Entry Specialist',
    'exp5.company': 'Onestop Grocery Store &middot; Lahore, Pakistan',
    'skills.prof.ms-office': 'Microsoft Office Suite',
    'skills.prof.data-entry': 'Data Entry & Management',
    'skills.prof.problem-solving': 'Problem Solving & Analysis',
    'skills.prof.it-support': 'IT Support & Networking',
    'skills.prof.web-dev': 'Web Development (HTML/CSS)',
    'skills.prof.git': 'Git & Version Control',
    'skills.prof.python-r': 'Python & R Programming',
    'edu.degree1': 'Bachelor\'s Degree in Information Technology',
    'edu.school1': 'University of Eastern Finland (UEF)',
    'edu.meta1': 'September 2025 &mdash; Present &middot; Kuopio, Finland',
    'edu.degree2': 'Bachelor of Technology in Computer Science',
    'edu.school2': 'Bahria University',
    'edu.meta2': '2023 &mdash; 2025 &middot; Lahore, Pakistan',
    'edu.degree3': 'Intermediate &mdash; ICS (Computer Science)',
    'edu.school3': 'KIPS Education System',
    'edu.meta3': '2021 &mdash; 2023 &middot; Lahore, Pakistan',
    'contact.instagram': 'Instagram',
    'contact.phone': 'Phone',
    'cv.meta.pdf': 'PDF',
    'cv.meta.size': '100 KB',
    'cv.meta.updated': 'Updated June 2026',
    'footer.copyright': '&copy; 2026 Muneeb Ahmed Butt. All rights reserved.',
    'page.title': 'Muneeb Ahmed Butt &mdash; Portfolio',
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
    'nav.resume': 'Ansioluettelo',
    'cv.resume': 'Web-ansioluettelo',
    'nav.hire-me': 'Ota yhteytt&auml;',
    'hero.tag': 'Avoin ty&ouml;mahdollisuuksille Suomessa',
    'hero.hi': 'Hei, olen',
    'hero.view-exp': 'Katso kokemus',
    'hero.get-in-touch': 'Ota yhteytt&auml;',
    'hero.dl-cv': 'Lataa CV',
    'hero.roles': 'Teht&auml;viss&auml;',
    'hero.studying': 'Opiskelee',
    'hero.erasmus': 'Erasmus-verkosto',
    'hero.tag-nordash': 'Rakennan NORDASHia &mdash; Live',
    'hero.nordash-cta': 'Vieraile NORDASHissa',
    'hero.nordash-label': 'Full-Stack-kehitt&auml;j&auml; & IT-p&auml;&auml;llikk&ouml;',
    'about.label': 'Tietoja minusta',
    'about.title': 'Esittely',
    'about.sub': 'Lahdesta Kuopioon &mdash; matkani teknologian parissa ulottuu kahdelle mantereelle ja jatkuu edelleen.',
    'exp.label': 'Kokemus',
    'exp.title': 'Urani t&auml;h&auml;n asti',
    'exp.sub': 'Rakennan digitaalisia tuotteita, osallistun avoimeen kulttuuriin ja opin joka p&auml;iv&auml;.',
    'projects.label': 'K&auml;ynnistys &amp; Projektit',
    'projects.title': 'Mit&auml; rakennan',
    'projects.sub': 'Alustaprojekti ja k&auml;yt&auml;nn&ouml;n projektit &mdash; suunniteltu, rakennettu, julkaistu ja hallinnoitu minun toimestani.',
    'projects.badge': 'STARTUP &middot; LIVE',
    'projects.role': 'Full-Stack-kehitt&auml;j&auml; &amp; IT-p&auml;&auml;llikk&ouml; &middot; 2025 &mdash; nykyhetki',
    'projects.nordash.title': 'NORDASH &mdash; Digitaalinen toimisto',
    'projects.nordash.desc': 'NORDASH on startup-digitoimisto, joka tarjoaa modernia web-kehityst&auml; ja digitaalisia palveluita pohjoismaisen ja etel&auml;aasialaisen designin yhdistelm&auml;ll&auml;. Rakensin koko alustan alusta loppuun ja hallinnoin sit&auml; p&auml;ivitt&auml;in Full-Stack-kehitt&auml;j&auml;n&auml; ja IT-p&auml;&auml;llikk&ouml;n&auml; &mdash; arkkitehtuuri, koodi, julkaisut, sis&auml;lt&ouml; ja asiakasviestint&auml;.',
    'projects.nordash.b1': 'CRM-hallintapaneeli asiakkaiden ja liidien hallintaan',
    'projects.nordash.b2': 'Ty&ouml;nhakuj&auml;rjestelm&auml;',
    'projects.nordash.b3': 'Portfoliogalleria',
    'projects.nordash.b4': 'Autentikointi ja s&auml;hk&ouml;posti-integraatio (Resend)',
    'projects.nordash.b5': 'Automaattinen julkaisuputki Verceliss&auml;',
    'projects.visit': 'Vieraile NORDASHissa &rarr;',
    'projects.bubba.title': 'BubbaCoin (BUBBA) &mdash; ERC-20-lohkoketjutoken',
    'projects.bubba.desc': 'R&auml;&auml;t&auml;l&ouml;ity ERC-20-token, suunniteltu ja julkaistu alusta asti Ethereum Sepolia -testiverkkoon. 1 000 000 BUBBAa ly&ouml;ty julkaisussa &mdash; julkisesti todennettavissa Etherscanissa. Kurssiprojekti (IBC2026) UEF:ssa.',
    'projects.etherscan': 'Katso Etherscanissa &rarr;',
    'projects.site.title': 'T&auml;m&auml; portfoliosivusto',
    'projects.site.desc': 'Sivusto, jota katselet &mdash; itse suunniteltu ja k&auml;sin koodattu, interaktiivisilla 3D-elementeill&auml; ja liikesuunnittelulla.',
    'projects.github': 'Katso GitHub &rarr;',
    'exp0.role': 'Full-Stack-kehitt&auml;j&auml; &amp; IT-p&auml;&auml;llikk&ouml;',
    'exp0.company': 'NORDASH (startup) &middot; Kuopio, Suomi / Et&auml;n&auml;',
    'exp0.b1': 'Rakensin koko NORDASH-alustan alusta loppuun: Next.js 16 + React 19 -frontend, MongoDB-backend, CRM-hallintapaneeli, liidien hallinta ja ty&ouml;nhakuj&auml;rjestelm&auml;',
    'exp0.b2': 'Hallinnoin kaikkia IT-toimintoja: julkaisuputki, hosting, suorituskyky, tietoturva ja integraatiot',
    'exp0.b3': 'Vastaan toimiston verkkon&auml;kyvyydest&auml;, br&auml;ndist&auml;, sis&auml;ll&ouml;st&auml; ja asiakasviestinn&auml;st&auml;',
    'exp0.tag5': 'IT-hallinta',
    'skills.label': 'Taidot',
    'skills.title': 'Teknologiapino',
    'skills.sub': 'Ty&ouml;kalut ja teknologiat, joita k&auml;yt&auml;n eri osa-alueilla.',
    'skills.prof-label': 'Keskeiset taidot',
    'skills.prof-sub': 'Taitotasot perustuvat tosiel&auml;m&auml;n kokemukseen eri teht&auml;vist&auml;.',
    'edu.label': 'Koulutus',
    'edu.title': 'Akateeminen tausta',
    'edu.sub': 'Muodollinen koulutus, joka on muovannut polkuani.',
    'edu.certs': 'Sertifikaatit',
    'contact.label': 'Yhteys',
    'contact.title': 'Otetaan yhteytt&auml;',
    'contact.sub': 'Avoin IT-teht&auml;ville, freelance-projekteille ja merkitykselliselle yhteisty&ouml;lle Suomessa ja muualla.',
    'contact.email': 'S&auml;hk&ouml;posti',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.location': 'Sijainti',
    'form.name': 'Nimesi',
    'form.email': 'S&auml;hk&ouml;postisi',
    'form.subject': 'Aihe',
    'form.message': 'Viestisi',
    'form.send': 'Lähetä viesti',
    'form.ph-name': 'Koko nimesi',
    'form.ph-email': 's&auml;hk&ouml;postisi@osoite.fi',
    'form.ph-subject': 'Ty&ouml;tilaisuus, yhteisty&ouml;, tervehdys&hellip;',
    'form.ph-message': 'Kerro lis&auml;&auml; mahdollisuudesta tai projektista&hellip;',
    'scroll': 'Selaa',
    'lanyard.hint': 'Ved&auml; ja p&auml;&auml;st&auml;',
    'cert.verify': 'Todista',
    'cert.view': 'Katso todistus',
    'cv.preview': 'Esikatsele',
    'cv.download': 'Lataa',
    'footer.text': 'Suunnitellut ja toteuttanut Muneeb Ahmed Butt',
    'hero.skip': 'Siirry sis&auml;lt&ouml;&ouml;n',
    'hero.id-org': 'Portfolio &middot; UEF Kuopio',
    'hero.id-title': 'IT-opiskelija & -kehitt&auml;j&auml;',
    'hero.id-status': '&#9679; Saatavilla',
    'about.p1': 'Olen <strong>Muneeb Ahmed Butt</strong>, IT-opiskelija <strong>It&auml;-Suomen yliopistossa</strong> (Kuopio), ja ty&ouml;skentelen t&auml;ll&auml; hetkell&auml; et&auml;n&auml; <strong>IT-kehitt&auml;j&auml;n&auml; DEVSiNCill&auml;</strong>. Matkani kattaa verkkokehityst&auml;, verkko-tukea, logistiikkaa ja yhteis&ouml;ty&ouml;t&auml; Pakistanissa ja Suomessa.',
    'about.nordash': 'Vuodesta 2025 olen rakentanut ja hallinnoinut <strong>NORDASHia</strong>, startup-digitaalitoimistoa, toimien sen Full-Stack-kehitt&auml;j&auml;n&auml; &amp; IT-p&auml;&auml;llikk&ouml;n&auml;.',
    'about.p2': 'Suoritin <strong>vuoden 2024 Aspire Leaders -ohjelman Harvard Business Schoolissa</strong>, maailmanlaajuisen johtajuusohjelman, joka keskittyi kriittiseen ajatteluun, viestint&auml;&auml;n ja yhteiskunnalliseen vaikuttamiseen &mdash; 30 tuntia kurssity&ouml;t&auml; kansainv&auml;lisess&auml; yhteis&ouml;ss&auml;.',
    'about.p3': 'Olen my&ouml;s aktiivinen j&auml;sen <strong>Erasmus Student Networkissa (ESN Savo)</strong>, tukemassa kansainv&auml;lisi&auml; opiskelijayhteis&ouml;j&auml; Suomessa.',
    'about.badge.it-dev': 'IT-kehitt&auml;j&auml;',
    'about.badge.web': 'Verkkoprojektit',
    'about.badge.networking': 'Verkkotekniikka',
    'about.badge.data': 'Datan k&auml;sittely',
    'about.badge.esn': 'ESN-j&auml;sen',
    'about.badge.harvard': 'Harvard Aspire -alumni',
    'about.badge.license': 'B-luokan ajokortti',
    'about.info.studying': 'Opiskelee',
    'about.info.studying-desc': 'B.Sc. IT &mdash; It&auml;-Suomen yliopisto, Kuopio',
    'about.info.working': 'Ty&ouml;skentelee',
    'about.info.working-desc': 'Full-Stack-kehitt&auml;j&auml; &amp; IT-p&auml;&auml;llikk&ouml; NORDASHissa &middot; IT-kehitt&auml;j&auml; DEVSiNCill&auml; (et&auml;)',
    'about.info.location': 'Sijainti',
    'about.info.location-desc': 'Kuopio, Suomi',
    'about.info.languages': 'Kielet',
    'about.info.languages-desc': 'Englanti &middot; Suomi (opiskelu) &middot; Urdu',
    'about.info.driving': 'Ajokortti',
    'about.info.driving-desc': 'B-luokka (henkil&ouml;auto)',
    'exp1.role': 'IT-kehitt&auml;j&auml;',
    'exp1.company': 'DEVSiNC &middot; Et&auml;, Lahore',
    'exp2.role': 'Verkkoj&auml;rjestelm&auml;asiantuntija (harjoittelija)',
    'exp2.company': 'Hameed Latif -sairaala &middot; Lahore, Pakistan',
    'exp3.role': 'Toimeenpanevan komitean j&auml;sen',
    'exp3.company': 'Chanan Development Association (CDA) &middot; Lahore, Pakistan',
    'exp4.role': 'Kuorma-auton l&auml;hett&auml;j&auml;',
    'exp4.company': 'Pioneer Enterprises &middot; Et&auml;, Yhdysvallat',
    'exp5.role': 'Tietojen sy&ouml;tt&auml;misen asiantuntija',
    'exp5.company': 'Onestop Grocery Store &middot; Lahore, Pakistan',
    'skills.prof.ms-office': 'Microsoft Office -paketti',
    'skills.prof.data-entry': 'Tietojen sy&ouml;tt&ouml; & -hallinta',
    'skills.prof.problem-solving': 'Ongelmanratkaisu & -analyysi',
    'skills.prof.it-support': 'IT-tuki & -verkot',
    'skills.prof.web-dev': 'Verkkokehitys (HTML/CSS)',
    'skills.prof.git': 'Git & versiohallinta',
    'skills.prof.python-r': 'Python & R-ohjelmointi',
    'edu.degree1': 'Tietotekniikan kandidaatin tutkinto',
    'edu.school1': 'It&auml;-Suomen yliopisto (UEF)',
    'edu.meta1': 'Syyskuu 2025 &mdash; Nykyhetki &middot; Kuopio, Suomi',
    'edu.degree2': 'Tietotekniikan tekniikan kandidaatti',
    'edu.school2': 'Bahrian yliopisto',
    'edu.meta2': '2023 &mdash; 2025 &middot; Lahore, Pakistan',
    'edu.degree3': 'Lukio &mdash; ICS (Tietojenk&auml;sittelytiede)',
    'edu.school3': 'KIPS-koulutusj&auml;rjestelm&auml;',
    'edu.meta3': '2021 &mdash; 2023 &middot; Lahore, Pakistan',
    'contact.instagram': 'Instagram',
    'contact.phone': 'Puhelin',
    'cv.meta.pdf': 'PDF',
    'cv.meta.size': '202 kt',
    'cv.meta.updated': 'P&auml;ivitetty kes&auml;kuu 2026',
    'footer.copyright': '&copy; 2026 Muneeb Ahmed Butt. Kaikki oikeudet pid&auml;tet&auml;&auml;n.',
    'page.title': 'Muneeb Ahmed Butt &mdash; Portfoliosivu',
    'hero.sr-text': 'IT-opiskelija Itä-Suomen yliopistossa, IT-kehittäjä DEVSiNCillä, Harvard Aspire 2024 -alumni, ESN Savon jäsen, verkkokehittäjä ja ongelmanratkaisija.',
    'form.sending': 'Lähetetään…',
    'form.success': '✓ Viesti lähetetty! Palaan asiaan mahdollisimman pian.',
    'form.error': '✗ Jotain meni pieleen. Lähetä sähköpostia osoitteeseen muneeb10305896@gmail.com',
    'footer.text-full': 'Suunnitellut &amp; toteuttanut <span>Muneeb Ahmed Butt</span> &middot; It&auml;-Suomen yliopisto &middot; Kuopio <svg viewBox="0 0 18 11" width="18" height="11" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle"><rect width="18" height="11" fill="#fff"/><rect x="5" y="0" width="3" height="11" fill="#003580"/><rect x="0" y="4" width="18" height="3" fill="#003580"/></svg>',
    /* -- experience bullets -- */
    'exp1.b1': 'Hallinnoin ja p&auml;ivitin yrityksen verkkosivuja varmistaen toimivuuden ja sis&auml;ll&ouml;n oikeellisuuden',
    'exp1.b2': 'Avustin asiakkaiden vaatimien verkkosivujen kehitt&auml;misess&auml; m&auml;&auml;rittelyjen mukaisesti',
    'exp1.b3': 'Ty&ouml;skentelin useissa verkkoprojekteissa tukien suunnittelua, p&auml;ivityksi&auml; ja yll&auml;pitoa',
    'exp1.b4': 'Tein yhteisty&ouml;t&auml; tiimin j&auml;senten kanssa k&auml;ytt&auml;en kehitysty&ouml;kaluja ja versiohallintaa',
    'exp2.b1': 'Avustin IT- ja verkkoymp&auml;rist&ouml;jen asennuksessa ja yll&auml;pidossa',
    'exp2.b2': 'Tarjosin teknist&auml; tukea sairaalan henkil&ouml;kunnalle ja l&auml;&auml;k&auml;reille',
    'exp2.b3': 'Avustin potilastietoj&auml;rjestelmien hallinnassa ja ongelmien ratkaisussa',
    'exp2.b4': 'Seurasin j&auml;rjestelm&auml;n suorituskyky&auml; ja varmistin tietoturvan ja k&auml;ytett&auml;vyyden',
    'exp3.b1': 'Yll&auml;pidin ja j&auml;rjestelin kansalaisj&auml;rjest&ouml;n asiakirjoja, raportteja ja dokumentaatiota',
    'exp3.b2': 'Hallinnoin yhteis&ouml;projekteihin, vapaaehtoisiin ja toimintaan liittyv&auml;&auml; tietoa',
    'exp3.b3': 'Koordinoin suunnittelua, viestint&auml;&auml; ja kehityshankkeiden toteutusta',
    'exp3.b4': 'Ty&ouml;skentelin sidosryhmien kanssa seuraten ohjelmien edistymist&auml; ja tuloksia',
    'exp4.b1': 'Hallinnoin l&auml;hetystoimintaa k&auml;ytt&auml;en DAT Load Board- ja RingCentral-j&auml;rjestelmi&auml;',
    'exp4.b2': 'P&auml;ivitin digitaalisia tietoja, kuormatilanteita ja dokumentaatiota tarkasti',
    'exp4.b3': 'Koordinoin kuljettajien ja v&auml;litt&auml;jien kanssa verkkopohjaisten j&auml;rjestelmien avulla',
    'exp4.b4': 'Ratkaisin toiminnallisia ongelmia digitaalisia ty&ouml;kaluja k&auml;ytt&auml;en',
    'exp5.b1': 'Hallinnoin myynti- ja varastotietoja IPOS-j&auml;rjestelm&auml;ll&auml;',
    'exp5.b2': 'Varmistin tietojen tarkkuuden ja yll&auml;pidin p&auml;ivitt&auml;isi&auml; ja kuukausittaisia raportteja',
    'exp5.b3': 'Tuoin myym&auml;l&auml;n toimintaa j&auml;rjestelm&auml;llisen tiedonhallinnan avulla',
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
    'exp3.tag4': 'Kansalaisj&auml;rjest&ouml;',
    'exp4.tag1': 'DAT Load Board',
    'exp4.tag2': 'RingCentral',
    'exp4.tag3': 'L&auml;hetystoiminta',
    'exp4.tag4': 'Logistiikka',
    'exp5.tag1': 'IPOS',
    'exp5.tag2': 'Tietojen sy&ouml;tt&ouml;',
    'exp5.tag3': 'Varastonhallinta',
    'exp5.tag4': 'Raportointi',
    /* -- skill card cats + names -- */
    'skills.card1.cat': 'IT &amp; J&auml;rjestelm&auml;t',
    'skills.card1.name': 'Keskeiset IT-taidot',
    'skills.card2.cat': 'Kehitys',
    'skills.card2.name': 'Web &amp; Ty&ouml;kalut',
    'skills.card3.cat': 'Tieto &amp; Toimisto',
    'skills.card3.name': 'Tuottavuus',
    'skills.card4.cat': 'Logistiikka',
    'skills.card4.name': 'Toiminnot',
    'skills.card5.cat': 'Pehme&auml;t taidot',
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
    'skills.pill.troubleshooting': 'Vianm&auml;&auml;ritys',
    'skills.pill.networking': 'Verkkotekniikka',
    'skills.pill.hardware-software': 'Laitteisto &amp; Ohjelmisto',
    'skills.pill.web-dev': 'Verkkokehitys',
    'skills.pill.git-github': 'Git &amp; GitHub',
    'skills.pill.vscode': 'VS Code',
    'skills.pill.html-css': 'HTML/CSS',
    'skills.pill.word': 'Microsoft Word',
    'skills.pill.excel': 'Microsoft Excel',
    'skills.pill.data-entry': 'Tietojen sy&ouml;tt&ouml;',
    'skills.pill.ipos': 'IPOS',
    'skills.pill.reporting': 'Raportointi',
    'skills.pill.dat-board': 'DAT Load Board',
    'skills.pill.ringcentral': 'RingCentral',
    'skills.pill.dispatching': 'L&auml;hetystoiminta',
    'skills.pill.documentation': 'Dokumentointi',
    'skills.pill.problem-solving': 'Ongelmanratkaisu',
    'skills.pill.problem-analysis': 'Ongelman analyysi',
    'skills.pill.teamwork': 'Tiimity&ouml;',
    'skills.pill.communication': 'Viestint&auml;',
    'skills.pill.python': 'Python',
    'skills.pill.r-prog': 'R-ohjelmointi',
    'skills.pill.databases': 'Tietokannat',
    'skills.pill.react': 'React',
    'skills.pill.social-media': 'Sosiaalinen media',
    'skills.pill.content-creation': 'Sis&auml;ll&ouml;ntuotanto',
    'skills.pill.seo': 'SEO-perusteet',
    'skills.pill.canva': 'Canva',
    'skills.pill.branding': 'Br&auml;nd&auml;ys',
    'skills.pill.data-security': 'Tietoturva',
    'skills.pill.access-control': 'P&auml;&auml;synhallinta',
    'skills.pill.network-security': 'Verkkoturvallisuus',
    'skills.pill.system-monitoring': 'J&auml;rjestelm&auml;n valvonta',
    /* -- certification descriptions -- */
    'cert1.desc': 'Varmennettu taitojen arviointi, joka kattaa Pythonin perusteet: skalaarityypit, operaattorit, ohjausvuot, merkkijonot, kokoelmat, iterointi, modulaarisuus, luokat ja poikkeustenk&auml;sittely.',
    'cert2.desc': 'Varmennettu taitojen arviointi, joka kattaa JavaScriptin perusteet: funktiot, currying, nosto, n&auml;kyvyysalueet, periytyminen, tapahtumat ja virheidenk&auml;sittely.',
    'cert3.desc': 'Perustason teko&auml;lylukutaito: keskeiset teko&auml;lykonseptit, koneoppimisen perusteet, teko&auml;lyn etiikka ja teko&auml;lyn k&auml;yt&auml;nn&ouml;n sovellukset liiketoiminnassa ja yhteiskunnassa.',
    'cert4.desc': 'Maailmanlaajuinen johtajuus- ja henkil&ouml;kohtainen kehitysohjelma, joka keskittyi kriittiseen ajatteluun, viestint&auml;&auml;n, itseluottamukseen ja yhteiskunnalliseen vaikuttamiseen. Suoritit 30 tuntia kurssity&ouml;t&auml; kansainv&auml;lisess&auml; oppimisyhteis&ouml;ss&auml;. Tila: Verkossa.',
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

/* &mdash;&mdash; LANGUAGE TOGGLE &mdash;&mdash; */
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

/* &mdash;&mdash; THEME TOGGLE &mdash;&mdash; */
const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    // View Transitions wipe &mdash; capture toggle button position for clip-path origin
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

/* &mdash;&mdash; PRELOADER &mdash;&mdash; */
function hidePreloader() {
  const pre = document.getElementById('preloader');
  if (pre) pre.classList.add('done');
}
window.addEventListener('load', () => setTimeout(hidePreloader, REDUCED_MOTION ? 0 : 900));
// failsafe: never trap the user behind the preloader if a resource hangs
setTimeout(hidePreloader, 4000);

/* &mdash;&mdash; CUSTOM CURSOR (transform-based &mdash; no layout reflow on mousemove) &mdash;&mdash; */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
let cHalf = 7, rHalf = 20; // half-sizes for centring each element (cursor: 14px, ring: 40px)

if (cursor && ring) {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX - cHalf}px,${mouseY - cHalf}px)`;
  }, { passive: true });

  const hoverables = 'a, button, .badge, .skill-pill, .exp-tag, .contact-link, .id-card';
  document.querySelectorAll(hoverables).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '22px'; cursor.style.height = '22px'; cHalf = 11;
      cursor.style.transform = `translate(${mouseX - cHalf}px,${mouseY - cHalf}px)`;
      ring.style.width = '54px'; ring.style.height = '54px'; rHalf = 27;
      ring.style.borderColor = 'rgba(124,109,250,.8)';
      ring.style.background = 'rgba(124,109,250,.12)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '14px'; cursor.style.height = '14px'; cHalf = 7;
      cursor.style.transform = `translate(${mouseX - cHalf}px,${mouseY - cHalf}px)`;
      ring.style.width = '40px'; ring.style.height = '40px'; rHalf = 20;
      ring.style.borderColor = 'rgba(124,109,250,.45)';
      ring.style.background = '';
    });
  });
}

/* &mdash;&mdash; SCROLL PROGRESS + NAV + BACK TO TOP + ACTIVE LINKS &mdash;&mdash; */
const scrollProgress = document.getElementById('scroll-progress');
const nav            = document.getElementById('main-nav');
const backToTop      = document.getElementById('backToTop');
const sections       = document.querySelectorAll('section[id]');
const navLinks       = document.querySelectorAll('.nav-link');
const sectionDots    = document.querySelectorAll('.section-dot');

/* cache section offsets — force-real layout so content-visibility:auto
   sections report their REAL offsetTop, not the browser's estimate */
let sectionOffsets = [];
function buildSectionOffsets() {
  /* SCROLL_OFFSET = nav height (~56px) + comfortable trigger (~34px) */
  const SCROLL_OFFSET = 90;
  sectionOffsets = Array.from(sections).map(sec => {
    /* Use getBoundingClientRect() for accurate position. Temporarily switch
       content-visibility to 'visible' for an accurate reading. */
    const savedCV = sec.style.contentVisibility;
    const needsToggle = savedCV !== 'visible' && savedCV !== '';
    if (needsToggle) sec.style.contentVisibility = 'visible';
    const top = sec.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    if (needsToggle) sec.style.contentVisibility = savedCV;
    return { id: sec.getAttribute('id'), top };
  });
}
buildSectionOffsets();
window.addEventListener('resize', () => requestAnimationFrame(buildSectionOffsets), { passive: true });
window.addEventListener('load', () => { buildSectionOffsets(); requestAnimationFrame(() => onScrollFrame && onScrollFrame()); }, { passive: true });
setTimeout(() => { buildSectionOffsets(); onScrollFrame && onScrollFrame(); }, 1500);

/* rAF-throttled: scroll can fire several times per frame &mdash; do the DOM
   work at most once per frame, and cache docHeight (reading scrollHeight
   inside the handler forced a layout every event) */
let docHeight = 1, scrollRafPending = false;
function measureDocHeight() {
  docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
}
window.addEventListener('load', measureDocHeight);
window.addEventListener('resize', measureDocHeight, { passive: true });
setTimeout(measureDocHeight, 1500); /* after fonts/images settle */
/* ResizeObserver catches dynamic content (map iframe, images) expanding the page */
if ('ResizeObserver' in window) {
  new ResizeObserver(measureDocHeight).observe(document.documentElement);
}

function onScrollFrame() {
  scrollRafPending = false;
  const scrollTop = window.scrollY;
  scrollProgress.style.transform = 'scaleX(' + Math.min(1, scrollTop / docHeight) + ')';
  nav.classList.toggle('scrolled', scrollTop > 60);
  backToTop.classList.toggle('show', scrollTop > 600);

  let current = '';
  for (let i = 0; i < sectionOffsets.length; i++) {
    if (scrollTop >= sectionOffsets[i].top) current = sectionOffsets[i].id;
  }
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
  sectionDots.forEach(dot => dot.classList.toggle('active', dot.dataset.section === current));
}
window.addEventListener('scroll', () => {
  if (!scrollRafPending) {
    scrollRafPending = true;
    requestAnimationFrame(onScrollFrame);
  }
}, { passive: true });
onScrollFrame(); /* set correct initial state */

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* &mdash;&mdash; SECTION DOT CLICK HANDLER (JS scroll with proper offset) &mdash;&mdash;
   Native anchor scroll (#href) uses approximate scroll-padding and can land
   in the wrong spot when content-visibility:auto sections haven't rendered yet.
   This handler resolves the actual position before scrolling. */
document.querySelectorAll('.section-dot').forEach(dot => {
  dot.addEventListener('click', e => {
    const targetId = dot.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();

    /* Immediately update active visual state (no waiting for scroll event) */
    sectionDots.forEach(d => d.classList.toggle('active', d === dot));
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + targetId));
    /* Update the URL hash so sharing / back-button work correctly */
    if (history.replaceState) history.replaceState(null, '', '#' + targetId);

    /* Force the browser to resolve the real layout position even when the
       section has content-visibility:auto and hasn't been painted yet.
       Setting visible, reading a layout property, then restoring triggers
       a synchronous layout that resolves all approximate sizes. */
    const savedCV = target.style.contentVisibility;
    target.style.contentVisibility = 'visible';
    const top = target.getBoundingClientRect().top + window.scrollY;
    target.style.contentVisibility = savedCV;

    /* Don't scroll if the section is already at the top of the viewport —
       clicking its dot would bounce the page up by the nav offset for no reason */
    const scrolledToTop = Math.abs(window.scrollY - (top - 90)) < 10;
    if (!scrolledToTop) {
      window.scrollTo({ top: top - 90, behavior: 'smooth' });
    }
  });
});

/* &mdash;&mdash; FIX MOBILE MENU ANCHOR SCROLL &mdash;&mdash;
   Same content-visibility position fix as section dots above. The inline
   onclick="closeMobileMenu()" fires first (our listener runs after it).
   We prevent the native anchor scroll and use the same JS approach. */
document.querySelectorAll('.mobile-menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();

    const savedCV = target.style.contentVisibility;
    target.style.contentVisibility = 'visible';
    const top = target.getBoundingClientRect().top + window.scrollY;
    target.style.contentVisibility = savedCV;

    window.scrollTo({ top: top - 90, behavior: 'smooth' });
  });
});

/* &mdash;&mdash; MOBILE MENU &mdash;&mdash; */
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

/* &mdash;&mdash; PARTICLE CANVAS &mdash;&mdash; */
const pCanvas  = document.getElementById('particle-canvas');
const pCtx     = pCanvas ? pCanvas.getContext('2d') : null;
const mobileMQ = window.matchMedia('(max-width: 700px)');
let CONNECT_DIST = mobileMQ.matches ? 0 : 35; // skip O(n&sup2;) connection lines on mobile

function makeParticle() {
  return {
    x: Math.random() * (pCanvas ? pCanvas.width  : window.innerWidth),
    y: Math.random() * (pCanvas ? pCanvas.height : window.innerHeight),
    r: Math.random() * 0.8 + 0.2,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,
    o: Math.random() * 0.5 + 0.1
  };
}
const particles = Array.from({ length: mobileMQ.matches ? 5 : 8 }, makeParticle);

/* PERF: render the particle layer at 2/3 resolution and let the GPU stretch
   it &mdash; soft dots/lines look identical, the iGPU fills ~55% fewer pixels */
const P_SCALE = 0.66;
function resizeParticles() {
  if (!pCanvas) return;
  pCanvas.width  = Math.ceil(window.innerWidth  * P_SCALE);
  pCanvas.height = Math.ceil(window.innerHeight * P_SCALE);
  pCanvas.style.width  = '100%';
  pCanvas.style.height = '100%';
  // adapt density + line cost when crossing the mobile breakpoint (rotation, window resize)
  const small = mobileMQ.matches;
  CONNECT_DIST = small ? 0 : 35 * P_SCALE;
  const target = small ? 5 : 8;
  while (particles.length > target) particles.pop();
  while (particles.length < target) particles.push(makeParticle());
}
resizeParticles();
window.addEventListener('resize', resizeParticles, { passive: true });

/* Adaptive frame-skip: skip expensive O(n&sup2;) particle connections when idle */
let lastInteraction = Date.now();
const bumpActivity = () => { lastInteraction = Date.now(); };
window.addEventListener('scroll',      bumpActivity, { passive: true });
window.addEventListener('pointermove', bumpActivity, { passive: true });
window.addEventListener('pointerdown', bumpActivity, { passive: true });
window.addEventListener('touchstart',  bumpActivity, { passive: true });
window.addEventListener('keydown',     bumpActivity, { passive: true });
window.addEventListener('wheel',       bumpActivity, { passive: true });

let skipConnections = false;
function tickParticles() {
  if (!pCtx || !pCanvas) return;
  /* Skip O(n&sup2;) connection lines when idle for 2s &mdash; particles still drift */
  skipConnections = Date.now() - lastInteraction > 2000;
  pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
  /* Batch all particles into one Path2D &mdash; much fewer GPU draw calls */
  const dotPath = new Path2D();
  const sorted = particles;
  for (let i = 0; i < sorted.length; i++) {
    const p = sorted[i];
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = pCanvas.width;  else if (p.x > pCanvas.width)  p.x = 0;
    if (p.y < 0) p.y = pCanvas.height; else if (p.y > pCanvas.height) p.y = 0;
    dotPath.moveTo(p.x + p.r, p.y);
    dotPath.arc(p.x, p.y, p.r, 0, Math.PI * 2);
  }
  pCtx.fillStyle = `rgba(${particleRGB},0.35)`;
  pCtx.fill(dotPath);
  if (CONNECT_DIST > 0 && !skipConnections) {
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

/* &mdash;&mdash; TYPEWRITER (setTimeout-based &mdash; reliable across all browsers) &mdash;&mdash; */
const twPhrases = [
  'IT Student at UEF \uD83C\uDDEB\uD83C\uDDEE',
  'Full-Stack Developer & IT Manager at NORDASH',
  'Harvard Aspire 2024 Alumni',
  'ESN Savo Board Member',
  'Web Developer & Problem Solver'
];
let twIdx = 0, twPos = 0, twDir = 1;
const twSpeed = 55, twPause = 1500;
const twEl = document.getElementById('typewriter');

if (twEl) {
  (function twTick() {
    /* split into code points so multi-unit chars (e.g. flag emoji) stay whole */
    const chars = Array.from(twPhrases[twIdx]);
    twPos += twDir;

    if (twPos > chars.length) {
      twDir = -1; twPos = chars.length;
      twEl.textContent = chars.join('');
      setTimeout(twTick, twPause);
      return;
    } else if (twPos < 0) {
      twDir = 1; twPos = 0;
      twIdx = (twIdx + 1) % twPhrases.length;
      twEl.textContent = '';
      setTimeout(twTick, 250);
      return;
    }

    twEl.textContent = chars.slice(0, twPos).join('');
    setTimeout(twTick, twSpeed);
  })();
}

/* &mdash;&mdash; VELOCITY SCROLL &mdash;&mdash; */
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

let velIdleFrames = 0;
function tickVelocity() {
  const speed = 3.0 + Math.abs(scrollVel) * 0.18;
  /* When scroll has settled for 30 frames, use a minimal idle speed once/sec to save CPU */
  if (Math.abs(scrollVel) < 0.05) {
    velIdleFrames++;
    if (velIdleFrames > 15) { scrollVel = 0; return; }
  } else {
    velIdleFrames = 0;
  }
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

/* &mdash;&mdash; SCROLL REVEAL + COUNTER &mdash;&mdash; */
const REVEAL_SEL = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
const revealEls = document.querySelectorAll(REVEAL_SEL);

function fireReveal(el) {
  el.classList.add('visible');
  el.classList.remove('from-top', 'from-bottom');
  el.querySelectorAll('[data-count]').forEach(animateCounter);
  if (el.hasAttribute('data-count')) animateCounter(el);
}

/* Reduced motion, or no IntersectionObserver support: reveal everything
   immediately so no element can ever be stranded in its blurred start state. */
if (REDUCED_MOTION || !('IntersectionObserver' in window)) {
  revealEls.forEach(fireReveal);
} else {
  /* Reveal ONCE, then stop observing. Two reasons:
     1. Fixes the stranded-blur bug — elements that start pre-transformed
        (reveal-right = translateX(70px), reveal-scale = scale(.82)) used to
        sit below the old 0.12 ratio threshold and never received `.visible`,
        so they stayed blurred forever. threshold:0 fires on any sliver of
        overlap, so a shifted/shrunk box always reveals.
     2. Fixes the lag — the old code RE-blurred elements on every scroll-out,
        re-animating filter:blur() + 3D transforms continuously. Animating
        filter:blur() is extremely GPU-heavy; doing it once per element
        removes the main source of jank. */
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      fireReveal(e.target);
      obs.unobserve(e.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* Belt-and-suspenders: after load, force-reveal anything already in or near
     the viewport in case the observer's first callback is delayed by layout. */
  window.addEventListener('load', () => setTimeout(() => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    revealEls.forEach(el => {
      if (el.classList.contains('visible')) return;
      const r = el.getBoundingClientRect();
      if (r.top < vh + 120 && r.bottom > -120) { fireReveal(el); revealObserver.unobserve(el); }
    });
  }, 250), { once: true });
}

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

/* &mdash;&mdash; DRAGGABLE LANYARD &mdash;&mdash; */
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
  card.style.left          = '0px';       // pinned &mdash; moved via transform only
  card.style.top           = '0px';
  card.style.willChange    = 'transform';
  card.style.pointerEvents = 'auto';
  card.style.zIndex        = '1';         // above canvas (default 0) within the layer

  /* place the card with a composited transform (never left/top = layout) */
  function placeCard(rot = 0) {
    card.style.transform = `translate3d(${last.x}px,${last.y}px,0) translate(-50%,0) rotate(${rot}rad)`;
  }

  /* ---- physics constants ---- */
  const SEGMENTS = 5, SEG_LEN = 18, GRAVITY = 0.65, FRICTION = 0.94, STIFFNESS = 3;
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
  placeCard();
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
      placeCard();
    }
  }, { passive: true });

  /* ---- drag interaction ---- */
  let dragging = false, dragX = 0, dragY = 0;
  function pointerXY(e) {
    return e.touches ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY };
  }

  card.addEventListener('pointerdown', e => {
    dragging = true; last.pinned = true;
    card.setPointerCapture(e.pointerId);
    const p = pointerXY(e); dragX = p.x; dragY = p.y;
  });

  card.addEventListener('pointermove', e => {
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
  window.addEventListener('blur',          endDrag);   // window loses focus &rarr; end drag

  card.addEventListener('dblclick', () => {
    resetToAnchor();
    placeCard();
    lanyardSettled = false;
  });

  /* &mdash;&mdash; KEYBOARD ALTERNATIVE for lanyard card &mdash;&mdash;
     Arrow keys nudge the card so keyboard users can interact. */
  let kbdNudgeX = 0, kbdNudgeY = 0;
  function updateCardKeyboardNudge() {
    if (kbdNudgeX === 0 && kbdNudgeY === 0) return;
    dragX = Math.max(60, Math.min(window.innerWidth  - 60, anchorX + kbdNudgeX));
    dragY = Math.max(60, Math.min(window.innerHeight - 30, anchorY + 80 + kbdNudgeY));
    last.pinned = true;
    // release after one tick so physics takes over (pull-back effect)
    setTimeout(() => { if (!dragging) last.pinned = false; }, 200);
  }
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', 'Draggable ID card. Use arrow keys to nudge it.');
  card.addEventListener('keydown', e => {
    const step = 30;
    if      (e.key === 'ArrowLeft')  { e.preventDefault(); kbdNudgeX -= step; updateCardKeyboardNudge(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); kbdNudgeX += step; updateCardKeyboardNudge(); }
    else if (e.key === 'ArrowUp')    { e.preventDefault(); kbdNudgeY -= step; updateCardKeyboardNudge(); }
    else if (e.key === 'ArrowDown')  { e.preventDefault(); kbdNudgeY += step; updateCardKeyboardNudge(); }
    else if (e.key === 'Home')       { e.preventDefault(); kbdNudgeX = 0; kbdNudgeY = 0; resetToAnchor(); placeCard(); lanyardSettled = false; }
  });

  /* ---- physics tick ---- */
  let layerHidden = false;
  let lanyardSettled = false, prevAX = -1, prevAY = -1;

  /* PERF: cache the stage's page position once instead of calling
     getBoundingClientRect() (a forced layout read) every single frame */
  let stagePageTop = 0, stagePageCX = 0, stageH = 0;
  function measureStage() {
    const sr = stage.getBoundingClientRect();
    stagePageTop = sr.top + window.scrollY;
    stagePageCX  = sr.left + sr.width / 2;
    stageH       = sr.height;
    lanyardSettled = false;
  }
  measureStage();
  window.addEventListener('load', measureStage);
  window.addEventListener('resize', measureStage, { passive: true });
  setTimeout(measureStage, 1200); /* re-measure after fonts settle */

  /* PERF: only clear the small rectangle the rope actually occupies,
     not the entire fullscreen canvas, and only repaint when moving */
  let dirtyX = 0, dirtyY = 0, dirtyW = 0, dirtyH = 0;

  tickLanyard = function() {
    const stageTop    = stagePageTop - window.scrollY;
    const stageBottom = stageTop + stageH;

    // skip all physics + rendering once the hero stage is well offscreen
    if (stageBottom < -250 || stageTop > window.innerHeight + 250) {
      if (!layerHidden) { layer.style.visibility = 'hidden'; layerHidden = true; }
      return;
    }
    if (layerHidden) { layer.style.visibility = 'visible'; layerHidden = false; }

    anchorX = stagePageCX;
    anchorY = stageTop;

    /* rope at rest + anchor unchanged &rarr; nothing to simulate or repaint */
    if (lanyardSettled && !dragging &&
        Math.abs(anchorX - prevAX) < 0.5 && Math.abs(anchorY - prevAY) < 0.5) return;
    prevAX = anchorX; prevAY = anchorY;

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

    /* measure remaining motion &mdash; below threshold means visually static */
    let energy = 0;
    for (const p of points) energy += Math.abs(p.x - p.ox) + Math.abs(p.y - p.oy);
    lanyardSettled = !dragging && energy < 1.2;

    // render rope &mdash; clear only last frame's dirty region, then this frame's
    let minX = anchorX, maxX = anchorX, minY = anchorY, maxY = anchorY;
    for (const p of points) {
      if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y;
    }
    const M = 26; /* line width + anchor dot + AA margin */
    if (dirtyW) ctx.clearRect(dirtyX, dirtyY, dirtyW, dirtyH);
    dirtyX = minX - M; dirtyY = minY - M;
    dirtyW = (maxX - minX) + M * 2; dirtyH = (maxY - minY) + M * 2;
    ctx.clearRect(dirtyX, dirtyY, dirtyW, dirtyH);
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';

    ctx.strokeStyle = ropeGrad; ctx.lineWidth = 5;
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

    // position card &mdash; transform ONLY (left/top would force layout every frame)
    const sl = points[SEGMENTS - 2];
    const angle = Math.atan2(last.y - sl.y, last.x - sl.x) - Math.PI / 2;
    card.style.transform = `translate3d(${last.x}px,${last.y}px,0) translate(-50%,0) rotate(${angle}rad)`;
    if (holo) holo.style.transform = `rotate(${angle * 30}deg)`;
  };

  // initial swing-in
  if (!REDUCED_MOTION) {
    setTimeout(() => {
      if (Math.abs(last.x - anchorX) < 10) { last.x += 80; lanyardSettled = false; }
    }, 1600);
  }
})();

/* &mdash;&mdash; EXP CARD MOUSE GLOW — centered, no per-frame getBoundingClientRect &mdash;&mdash; */

/* &mdash;&mdash; MAGNETIC + 3D SPRING CARDS &mdash;&mdash; */
let mouseGX = -99999, mouseGY = -99999;
window.addEventListener('mousemove', e => { mouseGX = e.clientX; mouseGY = e.clientY; }, { passive: true });
window.addEventListener('mouseout',  e => { if (!e.relatedTarget) { mouseGX = -99999; mouseGY = -99999; } });

const springCards = [];
/* Track visibility for spring cards to skip off-screen getBoundingClientRect */
const springCardVisibility = new WeakMap();
const springVisibilityObserver = new IntersectionObserver(entries => {
  for (const e of entries) springCardVisibility.set(e.target, e.isIntersecting);
}, { rootMargin: '200px 0px' });

function registerCards(selector, cfg) {
  if (!FINE_POINTER) return;
  document.querySelectorAll(selector).forEach(el => {
    el.style.transformStyle = 'preserve-3d';
    springCardVisibility.set(el, false);
    springVisibilityObserver.observe(el);
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

let springAllIdle = false;
function tickSpring() {
  if (!FINE_POINTER) return; // no mouse &rarr; no magnetic effect, save the work
  /* mouse hasn't moved & every card is at rest &rarr; skip everything */
  if (springAllIdle && Date.now() - lastInteraction > 2500) return;
  let anyActive = false;
  const vh = window.innerHeight;
  for (const c of springCards) {
    /* skip off-screen cards &mdash; no getBoundingClientRect call needed */
    if (!springCardVisibility.get(c.el)) {
      if (!c.idle) { c.idle = true; c.el.style.transform = ''; c.el.style.boxShadow = ''; }
      c.mx=c.my=c.rx=c.ry=c.gz=c.glow=c.vmx=c.vmy=c.vrx=c.vry=c.vgz=c.vglow=c.tmx=c.tmy=c.trx=c.try_=c.tgz=c.tglow=0;c.sc=c.tsc=1;c.vsc=0;
      continue;
    }
    const r = c.el.getBoundingClientRect();
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
        c.sKey = '';
      }
      continue;
    }
    c.idle = false;

    /* converged onto a steady hover pose &rarr; the transform we'd write is
       identical to last frame's; skip both DOM writes entirely */
    const converged =
      Math.abs(c.mx - c.tmx) < .05 && Math.abs(c.my - c.tmy) < .05 &&
      Math.abs(c.rx - c.trx) < .05 && Math.abs(c.ry - c.try_) < .05 &&
      (Math.abs(c.vmx) + Math.abs(c.vmy) + Math.abs(c.vrx) + Math.abs(c.vry)) < .03;
    if (converged) continue;
    anyActive = true;

    c.el.style.transform =
      `perspective(820px) translate3d(${c.mx.toFixed(2)}px,${c.my.toFixed(2)}px,${c.gz.toFixed(2)}px) ` +
      `rotateX(${c.rx.toFixed(2)}deg) rotateY(${c.ry.toFixed(2)}deg) scale(${c.sc.toFixed(3)})`;

    /* box-shadow is a PAINT (expensive) &mdash; never animate it in lite mode,
       and elsewhere only rewrite it when the quantized value actually changed */
    if (PERF_LITE) {
      if (c.sKey !== 'off') { c.sKey = 'off'; c.el.style.boxShadow = ''; }
    } else if (c.glow > 0.003) {
      const g = c.glow;
      const sKey = ((g * 40) | 0) + ',' + ((c.rx * 3) | 0) + ',' + ((c.ry * 3) | 0);
      if (sKey !== c.sKey) {
        c.sKey = sKey;
        c.el.style.boxShadow =
          `${(-c.ry * 1.6).toFixed(1)}px ${(c.rx * 1.6 + 14 * g).toFixed(1)}px ${(40 * g).toFixed(0)}px rgba(124,109,250,${(0.38 * g).toFixed(3)}),` +
          `0 0 0 1px rgba(124,109,250,${(0.4 * g).toFixed(3)})`;
      }
    } else if (c.sKey !== '') {
      c.sKey = '';
      c.el.style.boxShadow = '';
    }
  }
  springAllIdle = !anyActive;
}

/* &mdash;&mdash; PARALLAX FLOATING SHAPES ON SCROLL &mdash;&mdash; */
const floatShapes = document.querySelectorAll('.floating-shape');
let floatPending = false, floatY = 0;
window.addEventListener('scroll', () => {
  floatY = window.scrollY;
  if (!floatPending) {
    floatPending = true;
    requestAnimationFrame(() => {
      floatPending = false;
      if (PERF_LITE) return; /* shapes are static in lite mode */
      floatShapes.forEach((s, i) => {
        const depth = (i % 3 + 1) * 0.12;
        s.style.transform = `translateY(${floatY * depth}px) rotate(${floatY * 0.04 * (i + 1)}deg)`;
      });
    });
  }
}, { passive: true });

/* &mdash;&mdash; SKILL BARS &mdash;&mdash; */
const sbarObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.sbar-fill').forEach(bar => { bar.style.width = bar.dataset.width + '%'; });
      sbarObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.25 });
document.querySelectorAll('.skills-bars').forEach(el => sbarObserver.observe(el));

/* &mdash;&mdash; CONTACT FORM (Formspree) &mdash;&mdash; */
const contactForm = document.getElementById('contactForm');
const cfStatus    = document.getElementById('cfStatus');
const cfSubmit    = document.getElementById('cfSubmit');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    // novalidate is set for custom styling &mdash; run native validation manually
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    const btnText = cfSubmit.querySelector('.cf-btn-text');
    const curLang = (document.documentElement.getAttribute('lang') || 'en').slice(0,2);
    const t = translations[curLang] || translations.en;
    cfSubmit.disabled = true; cfSubmit.classList.add('loading');
    btnText.textContent = t['form.sending'] || 'Sending&hellip;';
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
        cfStatus.textContent = t['form.success'] || '&#10003; Message sent! I\'ll get back to you as soon as possible.';
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Server error');
      }
    } catch {
      cfStatus.className = 'cf-status error';
      cfStatus.textContent = t['form.error'] || '&#10007; Something went wrong. Please email me directly at muneeb10305896@gmail.com';
    }
    cfSubmit.disabled = false; cfSubmit.classList.remove('loading');
    btnText.textContent = t['form.send'] || 'Send Message';
  });
}

function initMap() {
  const wrap = document.getElementById('mapWrap');
  if (!wrap) return;
  const iframe = wrap.querySelector('iframe');
  const ph     = document.getElementById('mapPlaceholder');
  const phText = document.getElementById('mapPlaceholderText');
  const MAP_SRC = 'https://maps.google.com/maps?q=Kuopio,Finland&z=13&output=embed';
  const MAP_LINK = 'https://www.google.com/maps/place/Kuopio,+Finland';
  let started = false;
  function loadMap() {
    if (started || !iframe) return;
    started = true;
    iframe.src = MAP_SRC;
    /* Show iframe immediately &mdash; don't wait for the load event,
       since loading="lazy" + display:none can prevent it from firing.
       Once the iframe actually loads, hide the placeholder for polish. */
    iframe.style.display = 'block';
    if (ph) ph.style.display = 'none';
    iframe.addEventListener('load', () => {
      if (phText) phText.textContent = '';
      /* Re-measure page height now that iframe has rendered &mdash; keeps
         the scroll-progress bar accurate on desktop */
      measureDocHeight();
    }, { once: true });
    /* Clicking the map opens Kuopio in Google Maps */
    iframe.style.cursor = 'pointer';
    iframe.addEventListener('click', () => {
      window.open(MAP_LINK, '_blank', 'noopener,noreferrer');
    });
  }
  if (ph) {
    ph.addEventListener('click', loadMap);
    ph.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') loadMap(); });
  }
  if ('IntersectionObserver' in window) {
    const mapObs = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { loadMap(); mapObs.disconnect(); } });
    }, { rootMargin: '1200px 0px' }); /* start fetching ~1 screen+ before arrival */
    mapObs.observe(wrap);
  } else {
    window.addEventListener('load', () => setTimeout(loadMap, 2500), { once: true });
  }
}

/* ============================================
   15. LIVE CLOCK — Kuopio, Finland
   ============================================ */
(function initClock() {
  const display = document.getElementById('clockDisplay');
  if (!display) return;
  function tickClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    display.textContent = h + ':' + m;
  }
  tickClock();
  setInterval(tickClock, 30000);
})();

/* ============================================
   16. COLOR THEME SWITCHER
   ============================================ */
(function initColorThemes() {
  const saved = (function() { try { return localStorage.getItem('accent'); } catch(e) { return null; } })();
  if (saved) document.documentElement.setAttribute('data-accent', saved);
  const btns = document.querySelectorAll('.color-theme-btn');
  btns.forEach(function(btn) {
    const accent = btn.dataset.accent;
    if (saved === accent) {
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
    }
    btn.addEventListener('click', function() {
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      document.documentElement.setAttribute('data-accent', accent);
      try { localStorage.setItem('accent', accent); } catch(e) {}
    });
  });
})();

/* 2. SHINY HOVER GLOW — removed per-card mousemove listeners (too expensive).
       Glow now centers on card via CSS ::after with left:50%/top:50%. */

/* ============================================
   17. KEYBOARD SHORTCUTS
   ============================================ */
(function initKbd() {
  var overlay = document.getElementById('kbdOverlay');
  if (!overlay) return;
  var sectionKeys = {
    'a': 'about', 'e': 'experience', 'p': 'projects',
    's': 'skills', 'c': 'contact'
  };
  document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    var key = e.key.toLowerCase();
    if ((e.shiftKey && key === '/') || key === '?' || key === 'escape') {
      e.preventDefault();
      overlay.classList.toggle('open');
      return;
    }
    if (overlay.classList.contains('open')) return;
    if (sectionKeys[key]) {
      e.preventDefault();
      var target = document.getElementById(sectionKeys[key]);
      if (target) {
        var savedCV = target.style.contentVisibility;
        target.style.contentVisibility = 'visible';
        var top = target.getBoundingClientRect().top + window.scrollY;
        target.style.contentVisibility = savedCV;
        window.scrollTo({ top: top - 80, behavior: 'smooth' });
      }
      return;
    }
    if (key === 'r') { e.preventDefault(); window.open('resume.html', '_blank'); return; }
    if (key === 't') { e.preventDefault(); themeToggleBtn && themeToggleBtn.click(); return; }
    if (key === 'l') { e.preventDefault(); langToggleBtn && langToggleBtn.click(); return; }
    if (key === '0' || key === 'home') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (key === 'e' && e.shiftKey) {
      e.preventDefault();
      var eduTarget = document.getElementById('education');
      if (eduTarget) {
        eduTarget.style.contentVisibility = 'visible';
        var eduTop = eduTarget.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: eduTop - 80, behavior: 'smooth' });
      }
    }
  });
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.classList.remove('open'); });
})();

/* ============================================
   18. CONTACT FORM ENHANCEMENTS
   ============================================ */
(function initFormEnhancements() {
  var textarea = document.getElementById('cf-message');
  var charCount = document.getElementById('cfCharCountVal');
  if (textarea && charCount) {
    textarea.addEventListener('input', function() {
      var len = textarea.value.length;
      charCount.textContent = len;
      charCount.parentElement.classList.toggle('warn', len > 1800);
    });
  }
  var statusEl2 = document.getElementById('cfStatus');
  if (statusEl2) {
    var confettiObs = new MutationObserver(function() {
      if (statusEl2.classList.contains('success')) {
        burstConfetti(statusEl2);
      }
    });
    confettiObs.observe(statusEl2, { attributes: true, attributeFilter: ['class'] });
  }
  function burstConfetti(container) {
    var colors = ['#7c6dfa', '#4fc3f7', '#ff6b9d', '#22c55e', '#fbbf24'];
    for (var i = 0; i < 24; i++) {
      var piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = (Math.random() * 80 + 10) + '%';
      piece.style.top = '0';
      piece.style.background = colors[i % colors.length];
      piece.style.animationDelay = (Math.random() * 0.5) + 's';
      piece.style.animationDuration = (0.8 + Math.random() * 0.6) + 's';
      container.appendChild(piece);
      (function(p) { setTimeout(function() { p.remove(); }, 2000); })(piece);
    }
  }
})();

/* ============================================
   MASTER ANIMATION LOOP &mdash; single rAF instead
   of 5 separate loops fighting each other
   ============================================ */
function tickCursorRing() {
  if (!ring) return;
  const dx = mouseX - ringX, dy = mouseY - ringY;
  /* converged &rarr; no DOM write needed this frame */
  if (dx * dx + dy * dy < 0.09) return;
  ringX += dx * 0.15;
  ringY += dy * 0.15;
  ring.style.transform = `translate(${ringX - rHalf}px,${ringY - rHalf}px)`;
}

let rafPaused = false;
document.addEventListener('visibilitychange', () => {
  rafPaused = document.hidden;
  if (!rafPaused) requestAnimationFrame(masterTick);
});

/* ============================================
   ADAPTIVE PERF-LITE &mdash; measure real frame times
   for ~1.5s after load; if this machine can't
   hold a decent framerate, strip decorative
   animations automatically (CSS .perf-lite)
   ============================================ */
let PERF_LITE = false;
/* lite mode persists: if this machine struggled before, start light immediately.
   But clear it on devices with hover (laptops/desktops) — the cursor should always
   show on those even if a prior frame-time test was pessimistic. */
try {
  if (localStorage.getItem('perfLite') === '1') {
    if (HOVER_POINTER) {
      localStorage.removeItem('perfLite');
    } else {
      PERF_LITE = true;
      document.documentElement.classList.add('perf-lite');
    }
  }
} catch (e) {}
(function probePerformance() {
  if (REDUCED_MOTION || PERF_LITE) return;
  let frames = 0, start = 0;
  function probe(ts) {
    if (!start) start = ts;
    frames++;
    if (ts - start < 1500) { requestAnimationFrame(probe); return; }
    const avg = (ts - start) / frames;
    /* > ~24ms/frame means the machine is dropping well below 60fps under load */
    if (avg > 24 || (navigator.deviceMemory && navigator.deviceMemory <= 4)) {
      enableLite();
    }
  }
  if (document.readyState === 'complete') requestAnimationFrame(probe);
  else window.addEventListener('load', () => requestAnimationFrame(probe), { once: true });
})();

function enableLite() {
  if (PERF_LITE) return;
  PERF_LITE = true;
  document.documentElement.classList.add('perf-lite');
  try { localStorage.setItem('perfLite', '1'); } catch (e) {}
}

let frameCount = 0;
/* rolling frame-time watchdog &mdash; if frames get slow at ANY point, go lite */
let ftLast = 0, ftAcc = 0, ftN = 0;

function masterTick() {
  if (rafPaused) return;
  frameCount++;

  /* PAGE IDLE &rarr; drop the whole loop to a ~5fps heartbeat.
     CPU/GPU go to near-zero; first scroll/mouse-move snaps it back to 60. */
  if (Date.now() - lastInteraction > 3500) {
    ftLast = 0;
    setTimeout(() => { if (!rafPaused) requestAnimationFrame(masterTick); }, 200);
    return;
  }

  /* watchdog: 90-frame rolling average above ~24ms &rarr; machine is struggling */
  if (!PERF_LITE) {
    const t = performance.now();
    if (ftLast) {
      const d = t - ftLast;
      if (d < 200) {
        ftAcc += d; ftN++;
        if (ftN >= 90) {
          if (ftAcc / ftN > 24) enableLite();
          ftAcc = 0; ftN = 0;
        }
      }
    }
    ftLast = t;
  }

  tickCursorRing();
  if (!REDUCED_MOTION && !PERF_LITE) {
    if (frameCount % 3 === 0) tickParticles(); /* drift needs only ~20fps */
  }
  tickVelocity();
  tickLanyard();   /* EVERY frame &mdash; half-rate made dragging feel choppy */
  if (frameCount % 2 === 0) tickSpring();  /* 30fps indistinguishable from 60fps for magnetic hover */
  requestAnimationFrame(masterTick);
}
requestAnimationFrame(masterTick);
