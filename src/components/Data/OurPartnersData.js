import africaImage from '../../assets/images/africa.png';
import europeImage from '../../assets/images/europe.png';
import northAmericaImage from '../../assets/images/north-america.png';
import Financial from '../../assets/images/Financial.png';
import Healthcare from '../../assets/images/Healthcare.png';
import ProfessionalServices from '../../assets/images/professionalServices.png';
import PublicServices from '../../assets/images/Public_Services.png';
import Retail from '../../assets/images/Retail.png';
import SmartOffice from '../../assets/images/Smart_Office.png';
import MedicalBanner from '../../assets/images/medical-banner-with-doctor-wearing-goggles.jpg';
import ZerdHorizon from '../../assets/images/zerd-cinema-interface-main.webp';
import HealthcareIQ from '../../assets/images/Hero-Image-Analytics-Trends-2020.jpg';
import EatandMore from '../../assets/images/man-delivering-groceries-customers.jpg';
import Lalo from '../../assets/images/LaloImage.jpg';
import Pajec from '../../assets/images/people-office-work-day.jpg';
import Minerva from '../../assets/images/Data-Anonymization-Tool.webp';


export const industries = [
  {name: 'Financial Services', image: Financial},
  {name: 'Retail', image: Retail},
  {name: 'Professional Services', image: ProfessionalServices},
  {name: 'Healthcare', image: Healthcare},
  {name: 'Public Services', image: PublicServices},
  {name: 'Smart Office', image: SmartOffice},
];

export const regions = [
  {name: 'Africa', image: africaImage},
  {name: 'Europe', image: europeImage},
  {name: 'North America', image: northAmericaImage},
];

export const country = [
  {name: 'France'},
  {name: 'Germany'},
  {name: 'USA'},
  {name: 'Africa'},
  {name: 'UK'},
  {name: 'Cameroon'},
  {name: 'Slovakia'},
];

export const projectData = [
  {
    id: 1,
    title: "Zerd Horizon",
    industry: "Smart Office",
    region: "Europe",
    techStack: ["Java", "JavaFX", "Figma Design", "Kotlin Mobile", "Jetpack Compose"],
    country: "France",
    image: ZerdHorizon,
    clientDescription: "Zerd Horizon among the best ticketing system to manage your movie theaters, **“CNC Approved”**. Zerd Cinema is a full cinema solution from **“POS Software (CNC Approved)”**, **“Online Ticketing”**, **“Cinema Management System”** and **“Zerd Mobile (CNC Approved)”**. More: https://zerdcine.fr",
    challenge: "The client needed to modernize their **Legacy Desktop Software** and to launch a **Mobile version** to ease booking on their system. The Mobile version had the ability to work **Offline** in areas in France where there was no Internet connection.",   
    description: 
      "A 2-year partnership focused on evolving a cinema ecosystem through:\n" +
      "• **Desktop App Modernization:** Complete modernization of their desktop ticketing systems (UI Improvement and new features added).\n" +
      "• **New Mobile App:** Developed a robust ticketing mobile app which also worked with low-connectivity zones.\n" +
      "• **Hardware Integration:** Implemented Bluetooth communication between mobile app and ticket printers.\n\n\n" +
      "**Key Achievements:**\n" +
      "• **22% Increase** in user efficiency via UI modernization.\n" +
      "• **100% Uptime** in remote locations using offline-first architecture.\n" +
      "• **42% Faster** transaction-to-print speed through Bluetooth automation."
  },
  {
    id: 2,
    title: "MultiBenchmark and MultiLevel Algorithm",
    industry: "Healthcare",
    region: "North America",
    techStack: ["Java", "Spring Boot", "Microservice", "PostgreSQL", "Api-Gateway", "Docker", "Grafana", "Prometheus", "Mockito", "Google Cloud"],
    image: HealthcareIQ,
    country: "USA",
    clientDescription: "Healthcare IQ is an independent **Data Management and Analytics Company** with decades of experience transforming complex data into spend, clinical, and performance opportunities. More: https://www.hciq.com",
    challenge: "HealthcareIQ's primary challenge was the operational risk and inaccuracy caused by a manual Excel-based workflow that struggled to scale across complex procurement data. Their legacy system could not reliably handle multi-level packaging conversions or validate the statistical integrity of benchmarks, leading to inconsistent confidence levels in equipment pricing",
    description: "A 10-months partnership, we helped evolve their manual excel calculation by:\n" +
      "• **Automation of Multi-Level Packaging Logic:** Developed a conversion engine that automatically scales base prices across various units of measure (Single, Box, Case).\n" +
      "• **Implementation of a 5-Point Weighted Benchmark Model:** Built a sophisticated scoring system that evaluates prices against five distinct benchmarks (*Low, 75th, 90th, Average, and High*).\n" +
      "• **Statistical Data Validation (Quality Guardrails):** Integrated a standard deviation analysis to automatically flag *\"Low Quality\"* or *\"Flat\"* benchmarks.\n" +
      "• **Weighted Factor Distance Algorithm:** Engineered a mathematical *\"Distance\"* calculation that returns a correct confidence level.\n" +
      "• **Microservice-Based Architecture Migration:** Decoupled the calculation logic into a scalable Java/Spring Boot service.\n\n" +
      "**Key achievements:**\n" +
      "• **Eliminated 100%** of manual calculation errors by replacing legacy Excel workflows.\n" +
      "• **Achieved a 32% increase** in data reliability through a custom statistical validation engine.\n" +
      "• **Boosted procurement audit accuracy by 25%** by engineering a weighted *\"Factor Distance\"* algorithm."
  },
  {
    id: 3,
    title: "PAJEC",
    industry: "Professional Services",
    region: "Africa",
    techStack: ["WordPress", "PHP", "Marketing"],
    country: "Cameroon",
    image: Pajec,
    clientDescription: "*Patronat des Jeunes Entrepreneur du Cameroun (PAJEC)*, is an association of young entrepreneurs in Cameroon.",
    challenge: "PAJEC challenge was to have an **operational website** for their members. More: https://pajec.cm",
    description: "3-Months partnership, we helped them by:\n" +
      "• **Developed a new Website**\n" +
      "• **Creating automated** new member registration\n" +
      "• **Provided them** with Newsletter Design Structure"
  },
  {
    id: 4,
    title: "Nucleus Biotech Labs",
    industry: "Healthcare",
    region: "Africa",
    techStack: ["Java", "Kotlin", "Microservice", "API-Gateway", "Jenkins", "Cloudinary", "Database Migration", "Code Migration", "PostgreSQL", "MongoDB"],
    image: MedicalBanner,
    country: "Cameroon",
    clientDescription: "Nucleus Biotech Labs provides a solution for hospitals that **digitizes the entire doctor-patient interaction**. It centralizes patient information to ensure doctors can seamlessly access medical history across different regions.",
    challenge: "The hospital's existing system was hindered by **microservice sprawl**, with 11 disparate services creating high maintenance overhead. Additionally, the legacy **Kotlin codebase** required alignment with a standardized **Java enterprise environment**.",
    description: "Over 2-years partnership, we helped evolve their healthcare ecosystem by:\n" +
      "• **Strategic Microservice Consolidation:** Re-architected the backend by merging **11 microservices into 5** high-cohesion microservices.\n" +
      "• **Language Migration & Standardization:** Spearheaded a full-scale migration from **Kotlin to Java**.\n" +
      "• **Infrastructure Hardening:** Configured a secure Oracle DB environment and established a **Docker-Jenkins CI/CD pipeline**.\n\n" +
      "**Key achievements:**\n" +
      "• **55% reduction** in infrastructure complexity, lowering operational costs.\n" +
      "• **100% data portability** for patients achieved by centralizing medical histories.\n" +
      "• **Enhanced system security and uptime** through the implementation of automated pipelines."
  },
  {
    id: 5,
    title: "Lalo (Share Memories Social Media App)",
    industry: "Professional Services",
    region: "North America",
    techStack: ["Java", "Python", "Typescript", "Spring Boot", "Flutter", "Docker", "AWS"],
    country: "USA",
    image: Lalo,
    clientDescription: "Lalo was a social media that keepsake for all of life’s moments. More: [Tech Crunch Lalo](https://techcrunch.com/2022/05/25/lalo-launches-app-memorialize-loved-ones)",
    challenge: "Lalo needed a frictionless way for users to **migrate years of memories** from mainstream platforms. They needed immediate **Staff Augmentation** to bridge the technical gap between external Social Media APIs and their own backend.",
    description: "A 6-months partnership, we helped evolve their Backend & Mobile ecosystem by:\n" +
      "• **Social Media API Orchestration:** Engineered secure **OAuth2** authentication flows for Facebook and Instagram.\n" +
      "• **Asynchronous Media Ingestion:** Developed a backend pipeline to handle high-bandwidth transfer of photos and videos.\n" +
      "• **Mobile Feature Scaling:** Operated as a dedicated Staff Augmentation unit to accelerate the mobile roadmap.\n\n" +
      "**Key achievements:**\n" +
      "• **16% increase** in user content adoption via one-click *\"legacy data\"* imports.\n" +
      "• **Accelerated feature time-to-market by 50%** by providing expert Staff Augmentation."
  },
  {
    id: 6,
    title: "Eat & More",
    industry: "Retail",
    region: "Europe",
    techStack: ["Java", "JavaScript", "ReactJs", "Flutter", "AWS Elastic Beanstalk", "AWS S3"],
    country: "UK",
    image: EatandMore,
    clientDescription: "*EatandMore* is a one-stop order solution that delivers mixed orders from local shops in 60 minutes using electric vehicles only. The **UK First Multi Ordering App**. More: https://eatandmore.co.uk",
    challenge: "The client faced a high risk of service disruption due to **manual deployment workflows**. Furthermore, restaurant managers lacked **real-time visibility** into incoming orders before pickup.",
    description: "Over a 2-years partnership, we helped evolve their Multi Ordering ecosystem by:\n" +
      "• **CI/CD Pipeline Integration:** Replaced manual uploads with an **automated deployment pipeline** to AWS.\n" +
      "• **Full-Stack Optimization:** Conducted a comprehensive audit and debugging of the Java backend.\n" +
      "• **Manager-Specific Mobile Portal:** Developed a dedicated app for partners featuring **real-time push notifications**.\n\n" +
      "**Key achievements:**\n" +
      "• **80% reduction** in deployment downtime by automating the CI/CD pipeline.\n" +
      "• **100% improvement** in restaurant response time through the Manager Notification App.\n" +
      "• **40% decrease** in mobile app crash rates by resolving legacy backend bugs."
  },
  {
    id: 7,
    title: "Minerva",
    industry: "Professional Services",
    region: "Europe",
    techStack: ["Java", "JavaFx", "AES", "GDPR Data Masking", "Data Shuffling Algorithm", "Oracle DB", "MySQL DB", "PostgreSQL DB"],
    image: Minerva,
    country: "Slovakia",
    clientDescription: "Minerva is a solution that efficiently **anonymizes production databases** to ensure compliance with the **GDPR**, maintaining data privacy without causing slowdowns in the main application.",
    challenge: "The client faced a significant regulatory risk due to the presence of **PII** across fragmented environments. Manually scrubbing client data to meet *\"Right to be Forgotten\"* mandates was slow and prone to error.",
    description: "Over 1-year partnership, we developed a desktop software by:\n" +
      "• **Developing Cross-Database Connectivity:** A unified secure bridge for *Oracle, MySQL, and PostgreSQL*.\n" +
      "• **Asynchronous Processing:** Logic designed to run *\"out-of-band\"* to ensure no impact on application speed.\n" +
      "• **Specialized Anonymization Algorithm:** A secure script that replaces sensitive data while maintaining schema integrity.\n\n" +
      "**Key achievements:**\n" +
      "• **100% GDPR Compliance** achieved by automating the identification and removal of sensitive client data.\n" +
      "• **Zero-Downtime Data Scrubbing** implemented via an asynchronous algorithm.\n" +
      "• **60% Reduction** in Data Privacy Overhead by replacing manual database maintenance."
  }
];
