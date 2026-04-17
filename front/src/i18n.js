import { createI18n } from "vue-i18n";

const messages = {
	en: {
		home: "HOME",
		feature: "FEATURES",
		skills: "SKILLS",
		resume: "RESUME",
		hello: "Hello, I'm",
		frontend: "Fullstack Developer & UI/UX Designer",
		intro:
			"I am a young developer whose point lies in the development of fluid and modern interface, but also comfortable on the back-end side. Serious, dynamic and autonomous, I am committed to providing intuitive solutions while constantly staying up to date with the latest technological trends.",
		downloadCv: "Download CV",
		tailorMade: "Tailor-made solutions for your digital needs",
		mockupDesign: "Mockup design",
		creationOfMockup:
			"Creation of intuitive and aesthetic user interfaces by implementing UI/UX design best practices",
		appDevelopment: "Website/App Development",
		creationOfApp:
			"Creation of high-performance and secure web sites/applications, following best development practices",
		maintenanceTxt:
			"Maintenance service, troubleshooting and performance monitoring to ensure your application is running smoothly",
		mySkills: "MY SKILLS",
		uiuxdesign: "UI/UX Design",
		webapp: "Website",
		talkovaBrief: "AI-powered job interview simulation platform",
		talkovaDesc: "Talkova is an AI-powered simulation platform designed to help candidates better prepare for job interviews",
		talkovaOralSimulation: "Real-time oral interview simulation",
		talkovaContextGeneration: "Job context generated based on profile",
		talkovaFeedback: "Analysis of responses & feedback",
		premedicaBrief:
			"AI-powered web application for managing medical appointments for healthcare facilities",
		premedicaDesc:
			"Premedica is a web application that allows healthcare facilities to better manage doctor-patient appointments through preliminary questionnaires and reports:",
		premedicaEntityFeature:
			"Entities working within the establishment management",
		premedicaAppointmenFeature: "Doctor-patient appointments management",
		premedicaReportFeature:
			"Pre-consultation questionnaires, responses and reports management",
		mptimeBrief:
			"Web application for job tracking for employees and supervisors",
		mptimeDesc:
			"Mp-Time is a web-based work tracking application using timesheets that govern each defined company entity",
		mptimeTimesheetFeature: "Timesheet management",
		mptimeTrackingFeature: "Work tracking management",
		mptimeCompanyFeature: "Company management",
		infiswapBrief: "Coordination platform for home nurses in Belgium",
		infiswapDesc:
			"Infiswap is a platform for coordinating home nurses in Belgium, based on replacements and the search for pairs between nurses",
		infiswapReplacementFeature: "Replacement management",
		infiswapPartnershipFeature: "Binomial management",
		infiswapNurseFeature: "Nurse user management",
		infiswapResponseFeature:
			"Response management related to the replacement request",
		instageBrief:
			"Web application for managing and tracking internships within the company",
		instageDesc:
			"Instage is a web application for tracking and managing internships in companies, allowing students and supervisors to coordinate assignments and monitor project progress",
		instageInternshipFeature: "Internship management",
		instageTrackingProject: "Monitoring of projects related to the internship",
		instageAiAssistant: "AI assistance for the intern",
		circusBrief: "Regional travel booking platform for bus in Madagascar",
		circusDesc:
			"Circus is a platform that allows passengers to book their regional trips online and related transport entities to manage their operations.",
		circusBookingFeature: "Online travel booking",
		circusTrackingFeature: "Activity monitoring for transport entities",
		eventureBrief: "Web application for event management",
		eventureDesc:
			"Eventure is a web application for event management and listing, allowing organizers to centralize their events and the public to easily discover upcoming activities",
		eventureEventOrganization: "Publishing events",
		eventureEventParticipate: "Participation in an event",
		eventureEventTracking: "Organization tracking",
		omegaBrief: "BPO service website around data, customer and digital",
		omegaDesc:
			"Omega Connect is a BPO services website, offering business process outsourcing solutions such as data processing, customer service relationship management and digital services",
		omegaExternService: "Outsourcing service",
		omegaAiAssistance: "AI assistance tool",
		famcashBrief: "Mobile app for managing household budgets",
		espritBrief: "Music equipment reseller website",
		espritDesc:
			"Esprit Audio is a reseller website for cables and equipment used in the field of music and sound amplification, offering several ranges of cables, each with a specific function, presented in the form of a blog.",
		espritCableSale: "Sale of audiophile cables",
		espritEnhanceExp: "Enhanced acoustic experience",
		skinovaBrief: "Cosmetic brand website",
		skinovaDesc:
			"Skinova is a website dedicated to a cosmetics brand, showcasing a diverse range of skincare and beauty products, each with a specific formulation and function",
		skinovaCatalog: "Product catalog",
		skinovaCustomOrder: "Custom order",
		famcashBrief: "Mobile app for managing household budgets",
		famcashDesc:
			"Famcash is a mobile household budget management application that allows users to track their daily expenses, organize their cost categories, and visualize their financial habits",
		famcashExpenseFeature: "Expenses management",
		famcashBudgetFeature: "Periodic budget management",
		aftripBrief: "Tourist directory platform in Madagascar",
		aftripDesc:
			"Aftrip is a tourism directory platform dedicated in Madagascar, featuring a comprehensive directory of hotels, local artisans, and tour operators. It highlights the country's cultural diversity and tourism services",
		aftripDirectory: "Directory of tourist services",
		aftripHotelBooking: "Hotel booking",
		aftripEcommerce: "E-commerce for handcrafts",
		aftripTravel: "Travel booking",
		visitWebsite: "Go to website",
		visitGithub: "View source code",
		experience: "Experience",
		internship: "Internship",
		education: "Training",
		projects: "Project(s)",
		esmia: "ESMIA University - Antanimena",
		bachelorDegree: "Bachelor's Degree in Computer Science",
		esmiaDesc:
			"3rd year graduate from ESMIA University - Department: Computer Science",
		bacc: "Baccalaureate",
		baccDesc: "Obtain the baccalaureate diploma in series C",
		frontDeveloper: "Front-End Developer",
		frontDeveloperDesigner: "Front-End Developer & UI/UX Designer",
		missionFrontDeveloper1:
			"Participation in the development of an intuitive interface for a web platform",
		periodFrontDeveloper1: "December 2024 - March 2025",
		missionWebmaster:
			"Maintenance of five websites in PHP and PrestaShop, including the customization of the back office of one of the sites under PrestaShop.",
		periodWebmaster: "April - June 2024",
		projectOfficer: "IT Project officer",
		periodProjectOfficer: "April - July 2023",
		missionProjectOfficer:
			"Design of a web radio project in Madagascar, accompanied by technical support for the internal team.",
		webFullstack: "Full-stack Web Developer",
		periodWebFullstack: "January 2025 - January 2026",
		missionWebFullstack:
			"Development and maintenance of three complete web applications (front-end and back-end) using Vue.js and Laravel, in collaboration with the team for the functional design of the projects. Mentoring of web development interns.",
		freelanceAgency: "Freelance agency",
		periodFrontDeveloper2: "March - August 2024",
		missionFrontDeveloper2:
			"Design of interfaces and mockups with Figma for a website to be developed, followed by their web integration with Bootstrap.",
		happyToDiscuss:
			"I would be happy to discuss potential projects, collaborations or any other opportunities with you.",
		fullname: "Name",
		subject: "Subject",
		yourMessage: "Your message",
		findMe: "FIND ME WITH",
		send: "Send",
		allRightsReserved: "All rights reserved",
	},
	fr: {
		home: "ACCUEIL",
		feature: "SERVICES",
		skills: "COMPÉTENCES",
		resume: "PARCOURS",
		hello: "Bonjour, je suis",
		frontend: "Développeur Fullstack & UI/UX Designer",
		intro:
			"Je suis un jeune développeur dont mon point réside dans le développement d'interface fluide et moderne, mais également à l'aise du côté back-end. Sérieux, dynamique et autonome, je m'engage à fournir des solutions intuitives tout en restant constamment à jour avec les dernières tendances technologiques.",
		downloadCv: "Télécharger mon CV",
		tailorMade: "Des solutions sur mesure pour vos besoins numériques",
		mockupDesign: "Conception de maquette",
		creationOfMockup:
			"Création d'interfaces utilisateurs intuitives et esthétiques en mettant en œuvre les meilleures pratiques de design UI/UX",
		appDevelopment: "Développement de sites/application",
		creationOfApp:
			"Création de sites/applications web performants et sécurisés, suivant les meilleures pratiques de développement",
		maintenanceTxt:
			"Service de maintenance, résolution de problème et suivi de performance pour garantir le fonctionnement de votre application",
		mySkills: "MES COMPÉTENCES",
		uiuxdesign: "UI/UX Design",
		webapp: "Site web",
		talkovaBrief: "Plateforme de simulation d'entretien professionnel assisté par IA",
		talkovaDesc: "Talkova est une plateforme de simulation assisté par IA en vue d'aider les candidats à se mieux préparer aux entretiens professionnels",
		talkovaOralSimulation: "Simulation d'entretien en oral en temps réel",
		talkovaContextGeneration: "Contexte d'emploi généré selon profil",
		talkovaFeedback: "Analyse des réponses & feedback",
		premedicaBrief:
			"Application web intelligente de gestion de rendez-vous médical pour les établissements de santé",
		premedicaDesc:
			"Premedica est une application web permettant aux établissements de santé de mieux gérer les rendez-vous entre docteur et patient grâce à des questionnaires préalables et rapports",
		premedicaEntityFeature:
			"Gestion des entités travaillant dans l'établissement",
		premedicaAppointmenFeature: "Gestion des rendez-vous entre docteur-patient",
		premedicaReportFeature:
			"Gestion de questionnaire, de réponse et rapport préconsultatifs",
		mptimeBrief:
			"Application web de suivi de travail pour les employés et superviseurs",
		mptimeDesc:
			"Mp-Time est une application web de suivi de travail basé sur les feuilles de temps régissant chaque entité de compagnie définie",
		mptimeTimesheetFeature: "Gestion de feuille de temps",
		mptimeTrackingFeature: "Gestion de suivi de travail",
		mptimeCompanyFeature: "Gestion de compagnie",
		infiswapBrief:
			"Plateforme de coordination des infirmiers à domicile en Belgique",
		infiswapDesc:
			"Infiswap est une plateforme de coordination des infirmiers à domicile en Belgique, basé sur les remplacements et recherche de binomes entre infirmiers",
		infiswapReplacementFeature: "Gestion de remplacement",
		infiswapPartnershipFeature: "Gestion de partenariat",
		infiswapNurseFeature: "Gestion d'utilisateur infirmier",
		infiswapResponseFeature:
			"Gestion de réponse liée à la demande de remplacement",
		instageBrief:
			"Application web de gestion et suivi de stage dans l'entreprise",
		instageDesc:
			"Instage est une application web de suivi et de gestion des stages en entreprise, permettant aux étudiants et aux responsables de coordonner les missions et de suivre l’avancement des projets",
		instageInternshipFeature: "Gestion de stage",
		instageTrackingProject: "Suivi de projets relatifs au stage",
		instageAiAssistant: "Assistance intelligente pour le stagiaire",
		circusBrief:
			"Plateforme de réservation de voyage régional en taxi-brousse à Madagascar",
		circusDesc:
			"Circus est une plateforme permettant aux passagers de réserver leurs voyages en région en ligne et aux entités de transport relatives de gérer leurs activités",
		circusBookingFeature: "Réservation de voyages en ligne",
		circusTrackingFeature: "Suivi des activités pour les entités de transport",
		eventureBrief: "Application web de gestion & référencement événementiel",
		eventureDesc:
			"Eventure est une application web de gestion et de référencement événementiel, permettant aux organisateurs de centraliser leurs événements et au public de découvrir facilement les activités à venir",
		eventureEventOrganization: "Publication d'événements",
		eventureEventParticipate: "Participation à un événement",
		eventureEventTracking: "Suivi d'organisation",
		omegaBrief: "Site web de service BPO autour de data, client et digital",
		omegaDesc:
			"Omega Connect est un site web offrant des services BPO, proposant des solutions d'externalisation de processus métier comme le traitement des données, la gestion de relation de service client et de services digitaux",
		omegaExternService: "Service d'externalisation",
		omegaAiAssistance: "Outil d'assistance IA",
		espritBrief:
			"Site web de revendeur de matériels dans le domaine de la musique",
		espritDesc:
			"Esprit Audio est un site web de revendeur de câbles et de matériels utilisés dans le domaine de la musique et de l'amplification sonore, proposant plusieurs gammes de câbles ayant tous une fonction spécifique, les présentant sous forme de blog",
		espritCableSale: "Vente de câbles audiophiles",
		espritEnhanceExp: "Amélioration d'expérience acoustique",
		skinovaBrief: "Site web de marque cosmétique",
		skinovaDesc:
			"Skinova est un site web dédié à une marque cosmétique, présentant une gamme variée de produits de soin et de beauté, chacun ayant une formulation et une fonction spécifique",
		skinovaCatalog: "Catalogue de produits",
		skinovaCustomOrder: "Commande personnalisée",
		famcashBrief: "Application mobile de gestion de budget domestique",
		famcashDesc:
			"Famcash est une application mobile de gestion de budget domestique, permettant aux utilisateurs de suivre leurs dépenses quotidiennes, d’organiser leurs catégories de coûts et de visualiser leurs habitudes financières",
		famcashExpenseFeature: "Gestion des dépenses",
		famcashBudgetFeature: "Gestion périodique de budget",
		aftripBrief: "Plateforme de référencement touristique à Madagascar",
		aftripDesc:
			"Aftrip est une plateforme de référencement touristique dédiée à Madagascar, regroupant un annuaire complet d’hôtels, d’artisans locaux et de tours opérateurs. Elle met en avant la diversité culturelle et les services touristiques du pays",
		aftripDirectory: "Annuaire des services touristiques",
		aftripHotelBooking: "Réservation d'hôtels",
		aftripEcommerce: "E-commerce d'artisanat",
		aftripTravel: "Réservation de voyages",
		visitWebsite: "Visiter le site",
		visitGithub: "Visiter le code source",
		experience: "Expérience",
		internship: "Stage",
		education: "Formation",
		projects: "Projet(s)",
		esmia: "Université ESMIA - Antanimena",
		bachelorDegree: "Licence en Informatique",
		esmiaDesc:
			"Sortant en 3ème année au sein de l'Université ESMIA - Filière : Informatique",
		bacc: "Baccalauréat",
		baccDesc: "Obtention du diplome de baccalauréat en série C",
		frontDeveloperDesigner: "Développeur Front-End & Designer UI/UX",
		missionWebmaster:
			"Maintenance de cinq sites web en PHP et PrestaShop, incluant la personnalisation du back-office d’un des sites sous PrestaShop.",
		periodWebmaster: "Avril - Juin 2024",
		projectOfficer: "Officier de projet IT",
		periodProjectOfficer: "Avril - Juillet 2023",
		missionProjectOfficer:
			"Conception d’un projet de webradio à Madagascar, accompagnée d’un support technique auprès de l’équipe interne.",
		webFullstack: "Développeur Web Full-stack",
		periodWebFullstack: "Janvier 2025 - Janvier 2026",
		missionWebFullstack:
			"Développement et maintenance de trois applications web complètes (front-end et back-end) avec Vue.js et Laravel, en collaboration avec l’équipe pour la conception fonctionnelle des projets. Accompagnement de stagiaires en développement web.",
		freelanceAgency: "Agence freelance",
		periodFrontDeveloper2: "Mars - Aout 2024",
		missionFrontDeveloper2:
			"Conception d’interfaces et de maquettes avec Figma pour un site à développer, suivie de leur intégration web avec Bootstrap.",
		happyToDiscuss:
			"Je serais ravi de discuter avec vous de projets potentiels, de collaborations ou de toute autre opportunité",
		fullname: "Nom",
		subject: "Sujet",
		yourMessage: "Votre message",
		findMe: "TROUVEZ-MOI SUR",
		send: "Envoyer",
		allRightsReserved: "Tous droits réservés",
	},
};

const i18n = createI18n({
	legacy: false,
	locale: "fr",
	fallbackLocale: "en",
	messages,
});

export default i18n;
