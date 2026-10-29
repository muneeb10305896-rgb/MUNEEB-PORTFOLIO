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
    'hero.tag': 'Open to IT &amp; data traineeships in Finland',
    'hero.hi': "Hi, I'm",
    'hero.view-exp': 'View Experience',
    'hero.get-in-touch': 'Get In Touch',
    'hero.dl-cv': 'Download CV',
    'hero.roles': 'Roles held',
    'hero.studying': 'Currently studying',
    'hero.erasmus': 'Erasmus Network',
    'hero.tag-nordash': 'Building NORDASH &mdash; Live',
    'hero.nordash-cta': 'Visit NORDASH',
    'hero.nordash-label': 'Founder &amp; Full-Stack Developer',
    'about.label': 'About Me',
    'about.title': 'My Introduction',
    'about.sub': 'From Lahore to Helsinki &mdash; my journey in tech spans two continents and keeps growing.',
    'exp.label': 'Experience',
    'exp.title': 'My Career So Far',
    'exp.sub': 'Building digital products, contributing to open culture, and learning every day.',
    'projects.label': 'Startup &amp; Projects',
    'projects.title': "What I'm Building",
    'projects.sub': 'A startup platform and hands-on projects &mdash; designed, built, deployed and managed by me.',
    'projects.badge': 'STARTUP &middot; LIVE',
    'projects.role': 'Founder &amp; Full-Stack Developer &middot; 2026 &mdash; Present',
    'projects.nordash.title': 'NORDASH &mdash; Digital Agency',
    'projects.nordash.desc': 'NORDASH is a full-stack digital agency building modern, high-performance websites for small businesses and startups, with a Nordic-meets-South-Asian design identity. As its founder I wrote the PRD, designed and built the platform end-to-end, and handle everything from development and deployment to client communication.',
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
    'exp0.role': 'Founder &amp; Full-Stack Developer',
    'exp0.company': 'NORDASH (digital agency) &middot; Helsinki, Finland',
    'exp0.b1': 'Founded a full-stack digital agency building modern, high-performance websites for small businesses and startups',
    'exp0.b2': 'Designed and developed the agency website with Next.js, Tailwind CSS, Framer Motion and Three.js, deployed on Vercel',
    'exp0.b3': 'Wrote the product requirements document (PRD) defining services, structure and user flows',
    'exp0.tag5': 'Entrepreneurship',
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
    'contact.sub': 'Open to IT &amp; data traineeships, freelance projects and collaborations across Finland and beyond.',
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
    'hero.id-org': 'Portfolio &middot; Helsinki',
    'hero.id-title': 'IT Student & Developer',
    'hero.id-status': '&#9679; Available',
    'about.p1': 'I\'m <strong>Muneeb Ahmed Butt</strong>, an IT student at the <strong>University of Eastern Finland</strong> and a web developer based in <strong>Helsinki</strong>. I build fast, interactive websites with React, Next.js, Tailwind CSS and Three.js. Before moving to Finland I completed a B.Tech in Computer Science at Bahria University, worked remotely as an <strong>IT Developer at DEVSiNC</strong>, and supported network operations in the IT department of Hameed Latif Hospital.',
    'about.nordash': 'In June 2026 I founded <strong>NORDASH</strong>, a full-stack digital agency that builds modern, high-performance websites for small businesses and startups. In Finland I\'ve also worked in customer-facing roles in food service and fundraising, which sharpened my communication and teamwork.',
    'about.p2': 'I completed the <strong>Aspire Leaders Program 2024</strong> (Aspire Institute), a global leadership program focused on critical thinking, communication, and social impact &mdash; 30 hours of coursework with an international community.',
    'about.p3': 'I volunteer at <strong>Slush 2026</strong>, support <strong>ESN Savo</strong>, and served as Chairperson of the Chanan Development Association. I\'m especially interested in data and how technology can support better decisions in healthcare and public policy &mdash; and I\'m learning Finnish step by step. <em>Opiskelen suomea joka päivä!</em>',
    'about.badge.it-dev': 'NORDASH Founder',
    'about.badge.web': 'Web Projects',
    'about.badge.networking': 'Networking',
    'about.badge.data': 'Data Handling',
    'about.badge.esn': 'ESN Member',
    'about.badge.harvard': 'Aspire Leaders 2024',
    'about.badge.license': 'Category B License',
    'about.info.studying': 'Currently Studying',
    'about.info.studying-desc': 'B.Sc. IT &mdash; University of Eastern Finland (2025&ndash;2028)',
    'about.info.working': 'Currently Working',
    'about.info.working-desc': 'Founder of NORDASH &middot; Sandwich Artist at Subway, Aalto University campus',
    'about.info.location': 'Location',
    'about.info.location-desc': 'Helsinki, Finland',
    'about.info.languages': 'Languages',
    'about.info.languages-desc': 'English (full professional) &middot; Finnish (elementary) &middot; Urdu (native)',
    'about.info.driving': 'Driver\'s License',
    'about.info.driving-desc': 'Category B (passenger car)',
    'exp1.role': 'IT Developer',
    'exp1.company': 'DEVSiNC &middot; Remote, Lahore',
    'exp2.role': 'Network System Specialist (Intern)',
    'exp2.company': 'Hameed Latif Hospital &middot; Lahore, Pakistan',
    'exp3.role': 'Chairperson',
    'exp3.company': 'Chanan Development Association (CDA) &middot; Lahore, Pakistan',
    'exp4.role': 'Truck Dispatcher',
    'exp4.company': 'Pioneer Enterprises &amp; Acumen Enterprises &middot; Remote, United States',
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
    'edu.meta1': 'September 2025 &mdash; July 2028 (expected)',
    'edu.degree2': 'Bachelor of Technology in Computer Science',
    'edu.school2': 'Bahria University',
    'edu.meta2': '2023 &mdash; 2025 &middot; Lahore, Pakistan',
    'edu.degree3': 'Intermediate &mdash; ICS (Computer Science)',
    'edu.school3': 'KIPS Education System',
    'edu.meta3': '2021 &mdash; 2023 &middot; Lahore, Pakistan',
    'contact.instagram': 'Instagram',
    'contact.phone': 'Phone',
    'cv.meta.pdf': 'PDF',
    'cv.meta.size': '131 KB',
    'cv.meta.updated': 'Updated October 2026',
    'footer.copyright': '&copy; 2026 Muneeb Ahmed Butt. All rights reserved.',
    'page.title': 'Muneeb Ahmed Butt &mdash; IT Student &amp; Full-Stack Web Developer | Portfolio',
    'hero.sr-text': 'IT Student at UEF Finland, full-stack web developer based in Helsinki, Founder of NORDASH, Aspire Leaders 2024 alumnus, Slush 2026 volunteer and problem solver.',
    'form.sending': 'Sending…',
    'form.success': '✓ Message sent! I\'ll get back to you as soon as possible.',
    'form.error': '✗ Something went wrong. Please email me directly at muneeb10305896@gmail.com',
    'footer.text-full': 'Designed &amp; built by <span>Muneeb Ahmed Butt</span> &middot; University of Eastern Finland &middot; Helsinki <svg viewBox="0 0 18 11" width="18" height="11" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle"><rect width="18" height="11" fill="#fff"/><rect x="5" y="0" width="3" height="11" fill="#003580"/><rect x="0" y="4" width="18" height="3" fill="#003580"/></svg>',
    /* -- experience bullets -- */
    'exp1.b1': 'Managed and updated company websites, ensuring functionality and content accuracy',
    'exp1.b2': 'Assisted in developing customer-required websites based on specifications',
    'exp1.b3': 'Worked on multiple web projects, supporting design, updates, and maintenance',
    'exp1.b4': 'Collaborated with team members using development tools and version control',
    'exp2.b1': 'Helped manage and maintain the internal network doctors and staff use to access patient records and hospital systems',
    'exp2.b2': 'Supported network troubleshooting, system configuration and connectivity issues',
    'exp2.b3': 'Set up workstations and provided technical support to hospital staff',
    'exp2.b4': 'Helped ensure data availability, system reliability and smooth daily IT operations',
    'exp3.b1': 'Started as an Executive Committee member and was selected as Chairperson to lead the association',
    'exp3.b2': 'Led the team in organizing events, managing projects and coordinating volunteers',
    'exp3.b3': 'Oversaw development activities and ensured successful execution of community programs',
    'exp3.b4': 'Responsible for decision-making, team management and problem-solving',
    'exp4.b1': 'Managed daily U.S. freight operations using DAT Load Board and RingCentral',
    'exp4.b2': 'Planned routes, tracked driver locations in real time and handled rate confirmations',
    'exp4.b3': 'Coordinated with drivers, brokers and customers to ensure on-time pickups and deliveries',
    'exp4.b4': 'Resolved delays and route changes and maintained accurate dispatch records',
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
    'exp3.tag3': 'Volunteer Management',
    'exp3.tag4': 'NGO',
    'exp4.tag1': 'DAT Load Board',
    'exp4.tag2': 'RingCentral',
    'exp4.tag3': 'Dispatching',
    'exp4.tag4': 'Logistics',
    'exp5.tag1': 'IPOS',
    'exp5.tag2': 'Data Entry',
    'exp5.tag3': 'Inventory',
    'exp5.tag4': 'Reporting',
    'projects.studysync.title': 'StudySync &mdash; Study-Partner Web App',
    'projects.studysync.desc': 'Team project for UEF Software Engineering I (7 students). As frontend lead I built all 7 pages: sign-up and login, profiles, dashboard, study-partner matching by course, real-time group chat and campus events &mdash; on Firebase Auth and Firestore.',
    'projects.github-repo': 'View on GitHub &rarr;',
    'skills.pill.cyber-risk': 'Cyber Risk Management',
    'skills.prof.fullstack': 'Full-Stack Development (React/Next.js)',
    'exp0.date': 'June 2026 &mdash; Present',
    'exp1.date': 'July 2025 &mdash; April 2026',
    'exp2.date': 'March &mdash; June 2023',
    'exp6.date': 'Aug 2026 &mdash; Present',
    'exp7.date': 'May &mdash; Oct 2026',
    'exp8.date': 'July &mdash; Sept 2026',
    'exp3.date': 'Sept 2021 &mdash; Sept 2025',
    'exp4.date': 'June 2023 &mdash; Aug 2025',
    'exp5.date': 'June 2022 &mdash; Feb 2023',
    'hero.startup': 'Startup built &amp; live',
    'hero.nordash-muted': '&mdash; Digital Agency',
    'projects.mock-tagline': 'Digital Agency',
    'map.loading': 'Loading map&hellip;',
    'map.label': '&#128205; Helsinki, Finland',
    'cert1.title': 'Python (Basic)',
    'cert1.issuer': 'HackerRank &middot; 2026 &middot; Credential ID: d68eb9c153f7',
    'cert2.title': 'JavaScript (Basic)',
    'cert2.issuer': 'HackerRank &middot; 2026 &middot; Credential ID: 1b27c5657457',
    'cert3.title': 'Artificial Intelligence Literacy',
    'cert3.issuer': 'IBM SkillsBuild &middot; 2026 &middot; Credly verified badge',
    'cert4.title': '2024 Aspire Leaders Program',
    'cert4.issuer': 'Aspire Institute &middot; Online &middot; November 2024',
    'cert5.title': 'Hygieniapassi &mdash; Food Hygiene Proficiency',
    'cert5.issuer': 'Finnish Food Authority (Ruokavirasto) &middot; Finland',
    'vel.fullstack': 'Full-Stack Developer',
    'vel.itdev': 'IT Developer',
    'vel.webdev': 'Web Development',
    'vel.network': 'Network Support',
    'vel.data': 'Data Handling',
    'vel.problem': 'Problem Solving',
    'vel.networking': 'Networking',
    'kbd.title': 'Keyboard Shortcuts',
    'kbd.sub': 'Press <kbd>?</kbd> to toggle this overlay',
    'kbd.about': 'Scroll to About',
    'kbd.experience': 'Scroll to Experience',
    'kbd.projects': 'Scroll to Projects',
    'kbd.skills': 'Scroll to Skills',
    'kbd.education': 'Scroll to Education',
    'kbd.contact': 'Scroll to Contact',
    'kbd.resume': 'Open Resume',
    'kbd.theme': 'Toggle theme',
    'kbd.lang': 'Toggle language',
    'kbd.top': 'Back to top',
    'kbd.dismiss': 'Press <kbd>Esc</kbd> or <kbd>?</kbd> to close',
    'skills.pill.pos': 'POS Systems',
    'skills.pill.customer-service': 'Customer Service',
    'skills.pill.leadership': 'Leadership',
    'about.badge.slush': 'Slush 2026 Volunteer',
    'about.badge.hygiene': 'Hygieniapassi',
    'cert5.desc': 'Finnish food hygiene proficiency certificate (Finnish Food Authority) required for handling unpackaged, perishable food. Covers food safety, hygiene practices and legislation.',
    'exp8.role': 'Fundraising Representative',
    'exp8.company': 'World Vision Finland &amp; Save the Children Finland &middot; Helsinki',
    'exp8.b1': 'Represented World Vision&rsquo;s child sponsorship programme and Save the Children&rsquo;s work for children&rsquo;s rights',
    'exp8.b2': 'Built trust quickly and turned conversations into long-term monthly donations',
    'exp8.b3': 'Managed my own schedule and results independently in a target-driven team',
    'exp8.tag1': 'Face-to-Face Fundraising',
    'exp8.tag2': 'Public Engagement',
    'exp8.tag3': 'Communication',
    'exp8.tag4': 'Target-Driven',
    'exp7.role': 'Student Tutor',
    'exp7.company': 'University of Eastern Finland &middot; School of Computing, Kuopio',
    'exp7.b1': 'Tutored new international students in the Smart Start programme',
    'exp7.b2': 'Collected introductions and photos from 12 student tutors and compiled them into the Smart Start Guide',
    'exp7.b3': 'Set up and managed WhatsApp and Telegram groups for tutors and tutees',
    'exp7.b4': 'Supported students with housing, arrival logistics, studies and student life',
    'exp7.tag1': 'Mentoring',
    'exp7.tag2': 'Coordination',
    'exp7.tag3': 'Communication',
    'exp7.tag4': 'International Students',
    'exp6.role': 'Sandwich Artist',
    'exp6.company': 'Subway (Sodexo) &middot; Aalto University campus, Espoo',
    'exp6.b1': 'Operate the POS system and handle daily sales transactions accurately',
    'exp6.b2': 'Manage stock levels, inventory checks and sales data entry',
    'exp6.b3': 'Deliver fast, friendly customer service in a high-volume campus environment',
    'exp6.b4': 'Follow Finnish food safety standards (Hygieniapassi certified)',
    'exp6.tag1': 'POS Systems',
    'exp6.tag2': 'Inventory',
    'exp6.tag3': 'Customer Service',
    'exp6.tag4': 'Hygieniapassi',
    'exp0.b4': 'Handle the full process from design and development to deployment and client communication',
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
    'hero.tag': 'Avoin IT- ja data-alan harjoittelupaikoille Suomessa',
    'hero.hi': 'Hei, olen',
    'hero.view-exp': 'Katso kokemus',
    'hero.get-in-touch': 'Ota yhteytt&auml;',
    'hero.dl-cv': 'Lataa CV',
    'hero.roles': 'Teht&auml;viss&auml;',
    'hero.studying': 'Opiskelee',
    'hero.erasmus': 'Erasmus-verkosto',
    'hero.tag-nordash': 'Rakennan NORDASHia &mdash; Live',
    'hero.nordash-cta': 'Vieraile NORDASHissa',
    'hero.nordash-label': 'Perustaja &amp; Full-Stack-kehittäjä',
    'about.label': 'Tietoja minusta',
    'about.title': 'Esittely',
    'about.sub': 'Lahoresta Helsinkiin &mdash; matkani teknologian parissa ulottuu kahdelle mantereelle ja jatkuu edelleen.',
    'exp.label': 'Kokemus',
    'exp.title': 'Urani t&auml;h&auml;n asti',
    'exp.sub': 'Rakennan digitaalisia tuotteita, osallistun avoimeen kulttuuriin ja opin joka p&auml;iv&auml;.',
    'projects.label': 'K&auml;ynnistys &amp; Projektit',
    'projects.title': 'Mit&auml; rakennan',
    'projects.sub': 'Alustaprojekti ja k&auml;yt&auml;nn&ouml;n projektit &mdash; suunniteltu, rakennettu, julkaistu ja hallinnoitu minun toimestani.',
    'projects.badge': 'STARTUP &middot; LIVE',
    'projects.role': 'Perustaja &amp; Full-Stack-kehittäjä &middot; 2026 &mdash; nykyhetki',
    'projects.nordash.title': 'NORDASH &mdash; Digitaalinen toimisto',
    'projects.nordash.desc': 'NORDASH on full-stack-digitoimisto, joka rakentaa moderneja ja suorituskykyisiä verkkosivustoja pienyrityksille ja startupeille pohjoismaisen ja eteläaasialaisen designin yhdistelmällä. Perustajana kirjoitin PRD:n, suunnittelin ja rakensin alustan alusta loppuun ja vastaan kaikesta kehityksestä ja julkaisusta asiakasviestintään.',
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
    'exp0.role': 'Perustaja &amp; Full-Stack-kehittäjä',
    'exp0.company': 'NORDASH (digitoimisto) &middot; Helsinki, Suomi',
    'exp0.b1': 'Perustin full-stack-digitoimiston, joka rakentaa moderneja ja suorituskykyisiä verkkosivustoja pienyrityksille ja startupeille',
    'exp0.b2': 'Suunnittelin ja kehitin toimiston verkkosivuston Next.js:llä, Tailwind CSS:llä, Framer Motionilla ja Three.js:llä, julkaistu Vercelissä',
    'exp0.b3': 'Kirjoitin tuotevaatimusdokumentin (PRD), joka määrittelee palvelut, rakenteen ja käyttäjäpolut',
    'exp0.tag5': 'Yrittäjyys',
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
    'contact.sub': 'Avoin IT- ja data-alan harjoittelupaikoille, freelance-projekteille ja yhteistyölle Suomessa ja muualla.',
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
    'hero.id-org': 'Portfolio &middot; Helsinki',
    'hero.id-title': 'IT-opiskelija & -kehitt&auml;j&auml;',
    'hero.id-status': '&#9679; Saatavilla',
    'about.p1': 'Olen <strong>Muneeb Ahmed Butt</strong>, IT-opiskelija <strong>Itä-Suomen yliopistossa</strong> ja verkkokehittäjä <strong>Helsingissä</strong>. Rakennan nopeita ja interaktiivisia verkkosivustoja Reactilla, Next.js:llä, Tailwind CSS:llä ja Three.js:llä. Ennen Suomeen muuttoa suoritin tietojenkäsittelytieteen B.Tech-tutkinnon Bahria Universityssä, työskentelin etänä <strong>IT-kehittäjänä DEVSiNCillä</strong> ja tuin verkkotoimintoja Hameed Latif -sairaalan IT-osastolla.',
    'about.nordash': 'Kesäkuussa 2026 perustin <strong>NORDASHin</strong>, full-stack-digitoimiston, joka rakentaa moderneja ja suorituskykyisiä verkkosivustoja pienyrityksille ja startupeille. Suomessa olen työskennellyt myös asiakaspalvelutehtävissä ravintola-alalla ja varainhankinnassa, mikä on vahvistanut viestintä- ja tiimityötaitojani.',
    'about.p2': 'Suoritin <strong>Aspire Leaders -ohjelman 2024</strong> (Aspire Institute), maailmanlaajuisen johtajuusohjelman, joka keskittyi kriittiseen ajatteluun, viestint&auml;&auml;n ja yhteiskunnalliseen vaikuttamiseen &mdash; 30 tuntia kurssity&ouml;t&auml; kansainv&auml;lisess&auml; yhteis&ouml;ss&auml;.',
    'about.p3': 'Olen vapaaehtoisena <strong>Slush 2026</strong> -tapahtumassa, tuen <strong>ESN Savoa</strong> ja toimin Chanan Development Associationin puheenjohtajana. Olen erityisen kiinnostunut datasta ja siitä, miten teknologia voi tukea parempia päätöksiä terveydenhuollossa ja yhteiskuntapolitiikassa &mdash; ja opiskelen suomea askel kerrallaan. <em>Opiskelen suomea joka päivä!</em>',
    'about.badge.it-dev': 'NORDASHin perustaja',
    'about.badge.web': 'Verkkoprojektit',
    'about.badge.networking': 'Verkkotekniikka',
    'about.badge.data': 'Datan k&auml;sittely',
    'about.badge.esn': 'ESN-j&auml;sen',
    'about.badge.harvard': 'Aspire Leaders 2024',
    'about.badge.license': 'B-luokan ajokortti',
    'about.info.studying': 'Opiskelee',
    'about.info.studying-desc': 'B.Sc. IT &mdash; Itä-Suomen yliopisto (2025&ndash;2028)',
    'about.info.working': 'Ty&ouml;skentelee',
    'about.info.working-desc': 'NORDASHin perustaja &middot; Sandwich Artist, Subway, Aalto-yliopiston kampus',
    'about.info.location': 'Sijainti',
    'about.info.location-desc': 'Helsinki, Suomi',
    'about.info.languages': 'Kielet',
    'about.info.languages-desc': 'Englanti (sujuva) &middot; Suomi (perustaso) &middot; Urdu (äidinkieli)',
    'about.info.driving': 'Ajokortti',
    'about.info.driving-desc': 'B-luokka (henkil&ouml;auto)',
    'exp1.role': 'IT-kehitt&auml;j&auml;',
    'exp1.company': 'DEVSiNC &middot; Et&auml;, Lahore',
    'exp2.role': 'Verkkoj&auml;rjestelm&auml;asiantuntija (harjoittelija)',
    'exp2.company': 'Hameed Latif -sairaala &middot; Lahore, Pakistan',
    'exp3.role': 'Puheenjohtaja',
    'exp3.company': 'Chanan Development Association (CDA) &middot; Lahore, Pakistan',
    'exp4.role': 'Kuorma-auton l&auml;hett&auml;j&auml;',
    'exp4.company': 'Pioneer Enterprises &amp; Acumen Enterprises &middot; Etänä, Yhdysvallat',
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
    'edu.meta1': 'Syyskuu 2025 &mdash; heinäkuu 2028 (arvioitu)',
    'edu.degree2': 'Tietotekniikan tekniikan kandidaatti',
    'edu.school2': 'Bahrian yliopisto',
    'edu.meta2': '2023 &mdash; 2025 &middot; Lahore, Pakistan',
    'edu.degree3': 'Lukio &mdash; ICS (Tietojenk&auml;sittelytiede)',
    'edu.school3': 'KIPS-koulutusj&auml;rjestelm&auml;',
    'edu.meta3': '2021 &mdash; 2023 &middot; Lahore, Pakistan',
    'contact.instagram': 'Instagram',
    'contact.phone': 'Puhelin',
    'cv.meta.pdf': 'PDF',
    'cv.meta.size': '131 kt',
    'cv.meta.updated': 'Päivitetty lokakuu 2026',
    'footer.copyright': '&copy; 2026 Muneeb Ahmed Butt. Kaikki oikeudet pid&auml;tet&auml;&auml;n.',
    'page.title': 'Muneeb Ahmed Butt &mdash; IT-opiskelija &amp; Full-Stack-verkkokehittäjä | Portfolio',
    'hero.sr-text': 'IT-opiskelija Itä-Suomen yliopistossa, full-stack-verkkokehittäjä Helsingissä, NORDASHin perustaja, Aspire Leaders 2024 -alumni, Slush 2026 -vapaaehtoinen ja ongelmanratkaisija.',
    'form.sending': 'Lähetetään…',
    'form.success': '✓ Viesti lähetetty! Palaan asiaan mahdollisimman pian.',
    'form.error': '✗ Jotain meni pieleen. Lähetä sähköpostia osoitteeseen muneeb10305896@gmail.com',
    'footer.text-full': 'Suunnitellut &amp; toteuttanut <span>Muneeb Ahmed Butt</span> &middot; It&auml;-Suomen yliopisto &middot; Helsinki <svg viewBox="0 0 18 11" width="18" height="11" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle"><rect width="18" height="11" fill="#fff"/><rect x="5" y="0" width="3" height="11" fill="#003580"/><rect x="0" y="4" width="18" height="3" fill="#003580"/></svg>',
    /* -- experience bullets -- */
    'exp1.b1': 'Hallinnoin ja p&auml;ivitin yrityksen verkkosivuja varmistaen toimivuuden ja sis&auml;ll&ouml;n oikeellisuuden',
    'exp1.b2': 'Avustin asiakkaiden vaatimien verkkosivujen kehitt&auml;misess&auml; m&auml;&auml;rittelyjen mukaisesti',
    'exp1.b3': 'Ty&ouml;skentelin useissa verkkoprojekteissa tukien suunnittelua, p&auml;ivityksi&auml; ja yll&auml;pitoa',
    'exp1.b4': 'Tein yhteisty&ouml;t&auml; tiimin j&auml;senten kanssa k&auml;ytt&auml;en kehitysty&ouml;kaluja ja versiohallintaa',
    'exp2.b1': 'Avustin sisäverkon hallinnassa ja ylläpidossa, jonka kautta lääkärit ja henkilökunta käyttävät potilastietoja ja sairaalan järjestelmiä',
    'exp2.b2': 'Tuin verkon vianmääritystä, järjestelmien konfigurointia ja yhteysongelmien ratkaisua',
    'exp2.b3': 'Asensin työasemia ja tarjosin teknistä tukea sairaalan henkilökunnalle',
    'exp2.b4': 'Varmistin tietojen saatavuuden, järjestelmien luotettavuuden ja sujuvan päivittäisen IT-toiminnan',
    'exp3.b1': 'Aloitin toimeenpanevan komitean jäsenenä, ja minut valittiin puheenjohtajaksi johtamaan yhdistystä',
    'exp3.b2': 'Johdin tiimiä tapahtumien järjestämisessä, projektien hallinnassa ja vapaaehtoisten koordinoinnissa',
    'exp3.b3': 'Valvoin kehityshankkeita ja varmistin yhteisöohjelmien onnistuneen toteutuksen',
    'exp3.b4': 'Vastasin päätöksenteosta, tiimin johtamisesta ja ongelmanratkaisusta',
    'exp4.b1': 'Hallinnoin päivittäisiä yhdysvaltalaisia rahtioperaatioita DAT Load Boardin ja RingCentralin avulla',
    'exp4.b2': 'Suunnittelin reittejä, seurasin kuljettajien sijaintia reaaliajassa ja käsittelin hintavahvistuksia',
    'exp4.b3': 'Koordinoin kuljettajien, välittäjien ja asiakkaiden kanssa ajallaan tapahtuvat noudot ja toimitukset',
    'exp4.b4': 'Ratkaisin viivästyksiä ja reittimuutoksia sekä ylläpidin tarkkoja lähetysrekistereitä',
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
    'exp3.tag3': 'Vapaaehtoisten johtaminen',
    'exp3.tag4': 'Kansalaisjärjestö',
    'exp4.tag1': 'DAT Load Board',
    'exp4.tag2': 'RingCentral',
    'exp4.tag3': 'L&auml;hetystoiminta',
    'exp4.tag4': 'Logistiikka',
    'exp5.tag1': 'IPOS',
    'exp5.tag2': 'Tietojen sy&ouml;tt&ouml;',
    'exp5.tag3': 'Varastonhallinta',
    'exp5.tag4': 'Raportointi',
    'projects.studysync.title': 'StudySync &mdash; opiskelukaverisovellus',
    'projects.studysync.desc': 'UEF:n Software Engineering I -kurssin tiimiprojekti (7 opiskelijaa). Frontend-vastaavana rakensin kaikki 7 sivua: rekisteröityminen ja kirjautuminen, profiilit, hallintapaneeli, opiskelukaverien haku kurssien perusteella, reaaliaikainen ryhmächat ja kampustapahtumat &mdash; Firebase Authin ja Firestoren päälle.',
    'projects.github-repo': 'Katso GitHubissa &rarr;',
    'skills.pill.cyber-risk': 'Kyberriskien hallinta',
    'skills.prof.fullstack': 'Full-stack-kehitys (React/Next.js)',
    'exp0.date': 'Kesäkuu 2026 &mdash; nykyhetki',
    'exp1.date': 'Heinäkuu 2025 &mdash; huhtikuu 2026',
    'exp2.date': 'Maaliskuu &mdash; kesäkuu 2023',
    'exp6.date': 'Elokuu 2026 &mdash; nykyhetki',
    'exp7.date': 'Toukokuu &mdash; lokakuu 2026',
    'exp8.date': 'Heinäkuu &mdash; syyskuu 2026',
    'exp3.date': 'Syyskuu 2021 &mdash; syyskuu 2025',
    'exp4.date': 'Kesäkuu 2023 &mdash; elokuu 2025',
    'exp5.date': 'Kesäkuu 2022 &mdash; helmikuu 2023',
    'hero.startup': 'Startup rakennettu &amp; julkaistu',
    'hero.nordash-muted': '&mdash; digitoimisto',
    'projects.mock-tagline': 'Digitoimisto',
    'map.loading': 'Ladataan karttaa&hellip;',
    'map.label': '&#128205; Helsinki, Suomi',
    'cert1.title': 'Python (perustaso)',
    'cert1.issuer': 'HackerRank &middot; 2026 &middot; Tunniste: d68eb9c153f7',
    'cert2.title': 'JavaScript (perustaso)',
    'cert2.issuer': 'HackerRank &middot; 2026 &middot; Tunniste: 1b27c5657457',
    'cert3.title': 'Tekoälylukutaito',
    'cert3.issuer': 'IBM SkillsBuild &middot; 2026 &middot; Credlyn vahvistama merkki',
    'cert4.title': 'Aspire Leaders -ohjelma 2024',
    'cert4.issuer': 'Aspire Institute &middot; verkossa &middot; marraskuu 2024',
    'cert5.title': 'Hygieniapassi &mdash; hygieniaosaamistodistus',
    'cert5.issuer': 'Ruokavirasto &middot; Suomi',
    'vel.fullstack': 'Full-Stack-kehittäjä',
    'vel.itdev': 'IT-kehittäjä',
    'vel.webdev': 'Verkkokehitys',
    'vel.network': 'Verkkotuki',
    'vel.data': 'Datan käsittely',
    'vel.problem': 'Ongelmanratkaisu',
    'vel.networking': 'Verkkotekniikka',
    'kbd.title': 'Pikanäppäimet',
    'kbd.sub': 'Avaa tai sulje tämä näkymä painamalla <kbd>?</kbd>',
    'kbd.about': 'Siirry: Tietoja',
    'kbd.experience': 'Siirry: Kokemus',
    'kbd.projects': 'Siirry: Projektit',
    'kbd.skills': 'Siirry: Taidot',
    'kbd.education': 'Siirry: Koulutus',
    'kbd.contact': 'Siirry: Yhteys',
    'kbd.resume': 'Avaa ansioluettelo',
    'kbd.theme': 'Vaihda teema',
    'kbd.lang': 'Vaihda kieli',
    'kbd.top': 'Takaisin ylös',
    'kbd.dismiss': 'Sulje painamalla <kbd>Esc</kbd> tai <kbd>?</kbd>',
    'skills.pill.pos': 'Kassajärjestelmät',
    'skills.pill.customer-service': 'Asiakaspalvelu',
    'skills.pill.leadership': 'Johtajuus',
    'about.badge.slush': 'Slush 2026 -vapaaehtoinen',
    'about.badge.hygiene': 'Hygieniapassi',
    'cert5.desc': 'Ruokaviraston hygieniaosaamistodistus, jota vaaditaan pakkaamattomien helposti pilaantuvien elintarvikkeiden käsittelyssä. Kattaa elintarviketurvallisuuden, hygieniakäytännöt ja lainsäädännön.',
    'exp8.role': 'Varainhankkija',
    'exp8.company': 'World Vision Suomi &amp; Pelastakaa Lapset ry &middot; Helsinki',
    'exp8.b1': 'Edustin World Visionin kummilapsiohjelmaa ja Pelastakaa Lasten työtä lasten oikeuksien puolesta',
    'exp8.b2': 'Rakensin luottamusta nopeasti ja muutin keskustelut pitkäaikaisiksi kuukausilahjoituksiksi',
    'exp8.b3': 'Hallitsin aikatauluani ja tuloksiani itsenäisesti tavoitteellisessa tiimissä',
    'exp8.tag1': 'Kasvokkain varainhankinta',
    'exp8.tag2': 'Asiakaskohtaaminen',
    'exp8.tag3': 'Viestintä',
    'exp8.tag4': 'Tavoitteellisuus',
    'exp7.role': 'Opiskelijatuutori',
    'exp7.company': 'Itä-Suomen yliopisto &middot; Tietojenkäsittelytieteen laitos, Kuopio',
    'exp7.b1': 'Tuutoroin uusia kansainvälisiä opiskelijoita Smart Start -ohjelmassa',
    'exp7.b2': 'Kokosin 12 opiskelijatuutorin esittelyt ja kuvat Smart Start -oppaaseen',
    'exp7.b3': 'Perustin ja ylläpidin WhatsApp- ja Telegram-ryhmiä tuutoreille ja tuutoroitaville',
    'exp7.b4': 'Autoin opiskelijoita asumisessa, saapumisjärjestelyissä, opinnoissa ja opiskelijaelämässä',
    'exp7.tag1': 'Mentorointi',
    'exp7.tag2': 'Koordinointi',
    'exp7.tag3': 'Viestintä',
    'exp7.tag4': 'Kansainväliset opiskelijat',
    'exp6.role': 'Sandwich Artist',
    'exp6.company': 'Subway (Sodexo) &middot; Aalto-yliopiston kampus, Espoo',
    'exp6.b1': 'Käytän kassajärjestelmää ja käsittelen päivittäiset myyntitapahtumat tarkasti',
    'exp6.b2': 'Hallinnoin varastotasoja, inventaarioita ja myyntitietojen kirjaamista',
    'exp6.b3': 'Tarjoan nopeaa ja ystävällistä asiakaspalvelua vilkkaassa kampusympäristössä',
    'exp6.b4': 'Noudatan suomalaisia elintarviketurvallisuusmääräyksiä (hygieniapassi)',
    'exp6.tag1': 'Kassajärjestelmät',
    'exp6.tag2': 'Varastonhallinta',
    'exp6.tag3': 'Asiakaspalvelu',
    'exp6.tag4': 'Hygieniapassi',
    'exp0.b4': 'Vastaan koko prosessista suunnittelusta ja kehityksestä julkaisuun ja asiakasviestintään',
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

/* placeholders are plain text, so turn entities like &hellip; into characters */
function decodeEntities(str) {
  const ta = document.createElement('textarea');
  ta.innerHTML = str;
  return ta.value;
}

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
    const val = t[key] !== undefined ? t[key] : translations.en[key];
    if (val !== undefined) el.placeholder = decodeEntities(val);
  });
  // CV download links follow the page language
  document.querySelectorAll('a[data-cv]').forEach(a => {
    const file = lang === 'fi' ? 'Muneeb_Ahmed_Butt_CV_FI.pdf' : 'Muneeb_Ahmed_Butt_CV.pdf';
    a.href = 'assets/' + file + '?v=2026-10';
    a.setAttribute('download', file);
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
const twPhrasesByLang = {
  en: [
    'IT Student at UEF \uD83C\uDDEB\uD83C\uDDEE',
    'Founder of NORDASH',
    'Full-Stack Web Developer',
    'Aspire Leaders 2024 alumnus',
    'Slush 2026 Volunteer'
  ],
  fi: [
    'IT-opiskelija, UEF \uD83C\uDDEB\uD83C\uDDEE',
    'NORDASHin perustaja',
    'Full-stack-verkkokehitt\u00e4j\u00e4',
    'Aspire Leaders 2024 -alumni',
    'Slush 2026 -vapaaehtoinen'
  ]
};
/* phrases follow the active page language (set by applyLanguage) */
const twPhrases = () => twPhrasesByLang[document.documentElement.lang === 'fi' ? 'fi' : 'en'];
let twIdx = 0, twPos = 0, twDir = 1;
const twSpeed = 55, twPause = 1500;
const twEl = document.getElementById('typewriter');

if (twEl) {
  (function twTick() {
    /* split into code points so multi-unit chars (e.g. flag emoji) stay whole */
    const list = twPhrases();
    twIdx %= list.length;
    const chars = Array.from(list[twIdx]);
    twPos += twDir;

    if (twPos > chars.length) {
      twDir = -1; twPos = chars.length;
      twEl.textContent = chars.join('');
      setTimeout(twTick, twPause);
      return;
    } else if (twPos < 0) {
      twDir = 1; twPos = 0;
      twIdx = (twIdx + 1) % twPhrases().length;
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

/* &mdash;&mdash; DRAGGABLE LANYARD &mdash;&mdash;
   Verlet rope + weighted card with its own pendulum swing.
   Physics runs on a fixed 60 Hz step so it feels the same on 60/90/120 Hz screens.
   The card's clip ring is pinned to the rope end and the card rotates around it. */
let tickLanyard = () => {};
(function initLanyard() {
  const stage  = document.getElementById('lanyardStage');
  const canvas = document.getElementById('ropeCanvas');
  const card   = document.getElementById('idCard');
  if (!stage || !canvas || !card) return;

  const ctx  = canvas.getContext('2d');
  const holo = card.querySelector('.id-holo');
  const hint = stage.querySelector('.lanyard-hint');

  /* ---- ROPE LAYER: wrapper keeps canvas + card in the same stacking context ---- */
  const layer = document.createElement('div');
  layer.id = 'ropeLayer';
  document.body.appendChild(layer);
  layer.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:50;';

  layer.appendChild(canvas);
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';

  /* the clip ring centre (top:-4px + 28px/2) is where the rope ties on */
  const ATTACH_Y = 10;
  layer.appendChild(card);
  card.style.position        = 'absolute';
  card.style.left            = '0px';
  card.style.top             = '0px';
  card.style.willChange      = 'transform';
  card.style.pointerEvents   = 'auto';
  card.style.zIndex          = '1';
  card.style.transformOrigin = `50% ${ATTACH_Y}px`;   // rotate around the clip, not the card centre
  card.style.cursor          = 'grab';

  /* ---- physics constants (CSS px, per 1/60 s step) ---- */
  const STEP_MS    = 1000 / 60;
  const N          = 9;          // rope points (anchor + 8 links)
  const GRAVITY    = 0.55;
  const AIR        = 0.975;      // velocity kept per step
  const ITER       = 14;         // constraint iterations: higher = less stretchy rope
  const CARD_MASS  = 7;          // the card is much heavier than the rope
  const MAX_SPEED  = 38;         // px/step cap so flings never explode
  const MAX_PULL   = 300;        // how far the card can be dragged from the anchor

  const points = [];
  for (let i = 0; i < N; i++) points.push({ x: 0, y: 0, ox: 0, oy: 0, w: i === 0 ? 0 : (i === N - 1 ? 1 / CARD_MASS : 1) });
  const end = points[N - 1];

  let segLen = 11, anchorX = 0, anchorY = 0;

  /* card pendulum: angle (rad) + angular velocity */
  let theta = 0, omega = 0;

  /* ---- layout measurement (cached: no forced layout per frame) ---- */
  let stagePageTop = 0, stagePageCX = 0, stageH = 0, anchorOffset = 0;
  function measureStage() {
    const sr = stage.getBoundingClientRect();
    stagePageTop = sr.top + window.scrollY;
    stagePageCX  = sr.left + sr.width / 2;
    stageH       = sr.height;
    /* hang the rope just below the "Drag me" hint instead of on top of it */
    anchorOffset = hint && hint.offsetParent ? hint.offsetHeight + 14 : 6;
    /* rope length adapts so the card always fits inside the stage */
    const cardH   = card.offsetHeight || 360;
    const ropeLen = Math.max(50, Math.min(95, stageH - anchorOffset - cardH - 20));
    segLen = ropeLen / (N - 1);
    settled = false;
  }

  function resetToAnchor() {
    anchorX = stagePageCX;
    anchorY = stagePageTop - window.scrollY + anchorOffset;
    for (let i = 0; i < N; i++) {
      const p = points[i];
      p.x = p.ox = anchorX;
      p.y = p.oy = anchorY + i * segLen;
    }
    theta = omega = 0;
    settled = false;
  }

  /* canvas in device pixels so the rope is sharp, sized to the layer's real CSS box
     (window.innerWidth includes scrollbars/overflow and skewed the rope sideways) */
  let dpr = 1, ropeGrad = null;
  function sizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = layer.clientWidth, h = layer.clientHeight;
    canvas.width  = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ropeGrad = ctx.createLinearGradient(0, 0, 0, h);
    ropeGrad.addColorStop(0, '#7c6dfa');
    ropeGrad.addColorStop(1, '#4fc3f7');
    dirty = null;
    settled = false;
  }

  let settled = false, dirty = null;
  sizeCanvas();
  measureStage();
  resetToAnchor();
  placeCard();

  card.style.opacity = '0';
  requestAnimationFrame(() => {
    card.style.transition = 'opacity 0.7s ease 0.3s';
    card.style.opacity = '1';
  });

  window.addEventListener('load', () => { measureStage(); }, { once: true });
  setTimeout(measureStage, 1200); /* re-measure after fonts settle */
  window.addEventListener('resize', () => {
    sizeCanvas();
    measureStage();
    if (end.x < -300 || end.x > layer.clientWidth + 300 || end.y < -300 || end.y > layer.clientHeight + 300) resetToAnchor();
  }, { passive: true });

  /* ---- drag interaction ---- */
  let dragging = false, grabDX = 0, grabDY = 0, targetX = 0, targetY = 0;
  let lastPX = 0, lastPY = 0, lastPT = 0, velX = 0, velY = 0;   // pointer velocity (px per step)

  card.addEventListener('pointerdown', e => {
    if (e.button !== undefined && e.button !== 0) return;
    dragging = true; settled = false;
    card.setPointerCapture(e.pointerId);
    card.style.cursor = 'grabbing';
    /* keep the exact spot you grabbed under your finger */
    grabDX = e.clientX - end.x; grabDY = e.clientY - end.y;
    targetX = end.x; targetY = end.y;
    lastPX = e.clientX; lastPY = e.clientY; lastPT = performance.now();
    velX = velY = 0;
    e.preventDefault();
  });

  card.addEventListener('pointermove', e => {
    if (!dragging) return;
    const now = performance.now();
    const dt = Math.max(1, now - lastPT) / STEP_MS;
    /* smoothed pointer velocity, used for the throw on release */
    velX = velX * 0.6 + ((e.clientX - lastPX) / dt) * 0.4;
    velY = velY * 0.6 + ((e.clientY - lastPY) / dt) * 0.4;
    lastPX = e.clientX; lastPY = e.clientY; lastPT = now;

    let tx = e.clientX - grabDX, ty = e.clientY - grabDY;
    /* limit how far the lanyard stretches */
    const dx = tx - anchorX, dy = ty - anchorY, d = Math.hypot(dx, dy);
    if (d > MAX_PULL) { tx = anchorX + dx / d * MAX_PULL; ty = anchorY + dy / d * MAX_PULL; }
    targetX = Math.max(20, Math.min(layer.clientWidth - 20, tx));
    targetY = Math.max(10, Math.min(layer.clientHeight - 40, ty));
  });

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    card.style.cursor = 'grab';
    /* stale pointer (held still before letting go) => no throw */
    if (performance.now() - lastPT > 80) velX = velY = 0;
    const s = Math.hypot(velX, velY);
    if (s > MAX_SPEED) { velX *= MAX_SPEED / s; velY *= MAX_SPEED / s; }
    end.ox = end.x - velX; end.oy = end.y - velY;
    settled = false;
  }
  card.addEventListener('pointerup',     endDrag);
  card.addEventListener('pointercancel', endDrag);
  card.addEventListener('lostpointercapture', endDrag);
  window.addEventListener('blur', endDrag);

  card.addEventListener('dblclick', resetToAnchor);

  /* keyboard: arrow keys give the card a push, Home resets it */
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', 'Draggable ID card. Use arrow keys to swing it.');
  card.addEventListener('keydown', e => {
    const k = 9;
    const push = { ArrowLeft: [-k, 0], ArrowRight: [k, 0], ArrowUp: [0, -k], ArrowDown: [0, k] }[e.key];
    if (push) { e.preventDefault(); end.ox -= push[0]; end.oy -= push[1]; settled = false; }
    else if (e.key === 'Home') { e.preventDefault(); resetToAnchor(); }
  });

  /* ---- one fixed physics step ---- */
  function step() {
    /* integrate (Verlet) */
    for (let i = 1; i < N; i++) {
      const p = points[i];
      if (dragging && p === end) continue;
      let vx = (p.x - p.ox) * AIR, vy = (p.y - p.oy) * AIR;
      const s = Math.hypot(vx, vy);
      if (s > MAX_SPEED) { vx *= MAX_SPEED / s; vy *= MAX_SPEED / s; }
      p.ox = p.x; p.oy = p.y;
      p.x += vx; p.y += vy + GRAVITY;
    }
    if (dragging) {
      /* follow the finger with a little lag so the card has weight */
      end.ox = end.x; end.oy = end.y;
      end.x += (targetX - end.x) * 0.55;
      end.y += (targetY - end.y) * 0.55;
    }
    points[0].x = points[0].ox = anchorX;
    points[0].y = points[0].oy = anchorY;

    /* distance constraints, mass-weighted so the heavy card pulls the rope taut */
    for (let k = 0; k < ITER; k++) {
      for (let i = 0; i < N - 1; i++) {
        const a = points[i], b = points[i + 1];
        const wa = a.w, wb = (dragging && b === end) ? 0 : b.w;
        const wsum = wa + wb;
        if (wsum === 0) continue;
        let dx = b.x - a.x, dy = b.y - a.y;
        let d = Math.hypot(dx, dy);
        if (d < 1e-4) { dx = 0; dy = 1e-4; d = 1e-4; }
        if (d <= segLen) continue;          /* rope can go slack but never stretch */
        const diff = (d - segLen) / d / wsum;
        if (wa) { a.x += dx * diff * wa; a.y += dy * diff * wa; }
        if (wb) { b.x -= dx * diff * wb; b.y -= dy * diff * wb; }
      }
    }

    /* card pendulum: it wants to hang in line with the last rope link,
       and lags behind sideways acceleration like a real swinging card */
    const sl = points[N - 2];
    const ropeAngle = Math.atan2(end.y - sl.y, end.x - sl.x) - Math.PI / 2;
    const ax = (end.x - end.ox);
    let err = ropeAngle - theta;
    err = Math.atan2(Math.sin(err), Math.cos(err));
    omega += err * 0.09 - ax * 0.0015;
    omega *= 0.9;
    theta += omega;
    theta = Math.max(-0.95, Math.min(0.95, theta));
  }

  /* ---- render ---- */
  function placeCard() {
    card.style.transform =
      `translate3d(${end.x}px,${end.y}px,0) translate(-50%,-${ATTACH_Y}px) rotate(${theta}rad)`;
    if (holo) holo.style.transform = `rotate(${theta * 30}deg)`;
  }

  function drawRope() {
    let minX = anchorX, maxX = anchorX, minY = anchorY, maxY = anchorY;
    for (const p of points) {
      if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y;
    }
    const M = 14;
    if (dirty) ctx.clearRect(dirty[0], dirty[1], dirty[2], dirty[3]);
    dirty = [minX - M, minY - M, maxX - minX + M * 2, maxY - minY + M * 2];
    ctx.clearRect(dirty[0], dirty[1], dirty[2], dirty[3]);

    /* smooth curve through the points (midpoint quadratic) */
    const path = () => {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < N - 1; i++) {
        const mx = (points[i].x + points[i + 1].x) / 2, my = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, mx, my);
      }
      ctx.lineTo(end.x, end.y);
    };
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.strokeStyle = ropeGrad; ctx.lineWidth = 5; path(); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 1.5; path(); ctx.stroke();

    ctx.fillStyle = '#9b8df8';
    ctx.beginPath(); ctx.arc(anchorX, anchorY, 5, 0, Math.PI * 2); ctx.fill();
  }

  let layerHidden = false, acc = 0, lastT = performance.now(), prevAX = NaN, prevAY = NaN;

  tickLanyard = function() {
    const now = performance.now();
    let elapsed = now - lastT; lastT = now;
    if (elapsed > 100) elapsed = STEP_MS;    // tab was hidden: don't fast-forward

    let stageTop = stagePageTop - window.scrollY;
    if (stageTop + stageH < -600 || stageTop > window.innerHeight + 600) {
      if (!layerHidden) { layer.style.visibility = 'hidden'; layerHidden = true; }
      return;
    }
    /* near the viewport: read the live position. Content above the hero can
       change height after load (lazy sections, fonts), so a cached value drifts. */
    const sr = stage.getBoundingClientRect();
    stageTop = sr.top;
    stagePageTop = sr.top + window.scrollY;
    stagePageCX = sr.left + sr.width / 2;
    if (stageTop + stageH < -250 || stageTop > window.innerHeight + 250) {
      if (!layerHidden) { layer.style.visibility = 'hidden'; layerHidden = true; }
      return;
    }
    if (layerHidden) { layer.style.visibility = 'visible'; layerHidden = false; }

    anchorX = stagePageCX;
    anchorY = stageTop + anchorOffset;

    const anchorMoved = Math.abs(anchorX - prevAX) > 0.25 || Math.abs(anchorY - prevAY) > 0.25;
    if (settled && !dragging && !anchorMoved) return;
    prevAX = anchorX; prevAY = anchorY;

    /* scrolling moves the whole page: carry the rope with it so it doesn't whip around */
    if (anchorMoved && !dragging && points[0].y !== anchorY) {
      const sx = anchorX - points[0].x, sy = anchorY - points[0].y;
      if (Math.abs(sy) < 400) for (let i = 1; i < N; i++) {
        const p = points[i];
        p.x += sx; p.ox += sx; p.y += sy * 0.92; p.oy += sy * 0.92;
      }
    }

    acc += elapsed;
    let steps = 0;
    while (acc >= STEP_MS && steps < 5) { step(); acc -= STEP_MS; steps++; }
    if (steps === 5) acc = 0;

    drawRope();
    placeCard();

    /* only stop simulating once the card really hangs still and straight
       (low speed alone also happens at the top of every swing) */
    let energy = Math.abs(omega) * 20;
    for (const p of points) energy += Math.abs(p.x - p.ox) + Math.abs(p.y - p.oy);
    settled = !dragging && !anchorMoved && energy < 0.3 &&
              Math.abs(end.x - anchorX) < 1 && Math.abs(theta) < 0.02;
  };

  /* initial swing-in */
  if (!REDUCED_MOTION) {
    setTimeout(() => { end.ox -= 14; settled = false; }, 1600);
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
  const MAP_SRC = 'https://maps.google.com/maps?q=Helsinki,Finland&z=12&output=embed';
  const MAP_LINK = 'https://www.google.com/maps/place/Helsinki,+Finland';
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
    /* Clicking the map opens Helsinki in Google Maps */
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
initMap();

/* ============================================
   15. LIVE CLOCK — Helsinki, Finland
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
