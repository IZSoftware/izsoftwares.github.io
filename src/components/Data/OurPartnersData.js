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
import PortfolioInvestment from '../../assets/images/cyber-security.jpg';

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
  {name: 'Kenya'},
  {name: 'Cameroon'},
  {name: 'Slovakia'},
];

export const projectData = [
  {
    id: 1,
    title: "Black Box, Phishing, and Vishing Testing for an Investment Institution",
    industry: "Financial Services",
    region: "Africa",
    techStack: [
      "Acunetix",
      "Metasploit",
      "Nessus",
      "Hydra",
      "SSLScan",
      "Nikto",
      "Burp Suite",
      "Nmap",
      "DirB",
      "Python",
      "C"
    ],
    country: "Kenya",
    image: PortfolioInvestment,
    clientDescription: "The customer is a financial investment advisor firm offering retirement account services. Its web application helps invest and manage retirement savings plans.",
    challenge: "To ensure the maximum security of its clients’ data, the Customer was looking for a Cybersecurity vendor with a hands-on background in investment software. The Customer found the required competence with Evolv IZSoftwares Group and turned to us to examine its retirement planning solution and evaluate its employee’s cybersecurity awareness.",
    description:
      "IZSoftwares experts performed black box pentesting of the Customer’s retirement planning solution according to the **PTES** and **OWASP Web Security Testing Guide** methodology. The testing area included a customer-facing web application, API, and a public network comprising 3 IP addresses.\n\n" +
      "Our pentesters scanned the targets for known vulnerabilities and validated the findings to eliminate false positives. To evaluate the potential impact of the identified security gaps, IZSoftwares team attempted to exploit the vulnerabilities by simulating a real-life cyber-attack.\n\n" +
      "During the pentesting, IZSoftwares revealed three medium-severity and seven low-severity vulnerabilities, classified based on **OWASP API TOP 10**, and **NIST CVSS**. The detected weaknesses could be exploited by an attacker to steal sensitive data, distribute malware, and affect web server performance.\n\n" +
      "IZSoftwares team ran several social engineering scenarios against 15 employee emails and 2 corporate phone numbers. During the **phishing attack simulation**, most of the employees followed safety precautions and ignored emails with unknown links. However, 2 of 15 employees submitted their personal data in the Google form that was controlled by IZSoftwares pentesters.\n\n" +
      "**Key Achievements**\n" +
"To seal the gaps, our pentesters suggested pragmatic corrective measures, such as:\n" +
"• **Implementing strict input validation and sanitization** to prevent injection attacks.\n" +
"• **Replacing FTP with a more secure file transfer protocol like SSH** to take advantage of built-in encryption.\n" +
"• **Introducing brute force protection**: using SSH keys and disabling password authentication where possible, configuring the firewall to allow connections to the remote hosts only from selected IPs, adding CAPTCHA, enforcing a limit on failed login attempts, and blocking an account or IP when the limit is reached.\n" +
"• Preventing malicious cross-domain requests by **properly configuring Access-Control-Allow-Origin header** and **setting up server-side protection of sensitive data** (e.g., authentication and session management).\n" +
"• Based on the social engineering testing results, IZSoftwares recommended organizing **security awareness training** for the Customer’s employees.\n" +
"• In two weeks, IZSoftwares conducted the black box pentesting and simulated phishing and vishing attacks.\n" +
"• The customer received a report detailing the **detected vulnerabilities** and associated risks to its IT infrastructure and client data."
  },
  {
    id: 2,
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
      "• **Hardware Integration:** Implemented Bluetooth communication between mobile app and ticket printers.\n\n" +
      "**Key Achievements:**\n" +
      "• **22% Increase** in user efficiency via UI modernization.\n" +
      "• **100% Uptime** in remote locations using offline-first architecture.\n" +
      "• **42% Faster** transaction-to-print speed through Bluetooth automation."
  },
  {
    id: 3,
    title: "MultiBenchmark and MultiLevel Algorithm",
    industry: "Healthcare",
    region: "North America",
    techStack: ["Java", "Spring Boot", "Microservice", "PostgreSQL", "Api-Gateway", "Docker", "Grafana", "Prometheus", "Mockito", "Google Cloud"],
    image: HealthcareIQ,
    country: "USA",
    clientDescription: "Healthcare IQ is an independent **Data Management and Analytics Company** with decades of experience transforming complex data into spend, clinical, and performance opportunities. More: https://www.hciq.com",
    challenge: "HealthcareIQ's primary challenge was the operational risk and inaccuracy caused by a manual Excel-based workflow that struggled to scale across complex procurement data. Their legacy system could not reliably handle multi-level packaging conversions or validate the statistical integrity of benchmarks, leading to inconsistent confidence levels in equipment pricing.",
    description:
      "A 10-months partnership, we helped evolve their manual excel calculation by:\n" +
      "• **Automation of Multi-Level Packaging Logic:** Developed a conversion engine that automatically scales base prices across various units of measure (Single, Box, Case).\n" +
      "• **Implementation of a 5-Point Weighted Benchmark Model:** Built a sophisticated scoring system that evaluates prices against five distinct benchmarks (*Low, 75th, 90th, Average, and High*).\n" +
      "• **Statistical Data Validation (Quality Guardrails):** Integrated a standard deviation analysis to automatically flag *\"Low Quality\"* or *\"Flat\"* benchmarks.\n" +
      "• **Weighted Factor Distance Algorithm:** Engineered a mathematical *\"Distance\"* calculation that returns a correct confidence level.\n" +
      "• **Microservice-Based Architecture Migration:** Decoupled the calculation logic into a scalable Java/Spring Boot service.\n\n" +
      "**Key Achievements:**\n" +
      "• **Eliminated 100%** of manual calculation errors by replacing legacy Excel workflows.\n" +
      "• **Achieved a 32% increase** in data reliability through a custom statistical validation engine.\n" +
      "• **Boosted procurement audit accuracy by 25%** by engineering a weighted *\"Factor Distance\"* algorithm."
  },
  {
    id: 4,
    title: "PAJEC",
    industry: "Professional Services",
    region: "Africa",
    techStack: ["WordPress", "PHP", "Marketing"],
    country: "Cameroon",
    image: Pajec,
    clientDescription: "*Patronat des Jeunes Entrepreneur du Cameroun (PAJEC)* is an association of young entrepreneurs in Cameroon.",
    challenge: "PAJEC challenge was to have an **operational website** for their members. More: https://pajec.cm",
    description:
      "3-Months partnership, we helped them by:\n" +
      "• **Developed a new Website**\n" +
      "• **Creating automated** new member registration\n" +
      "• **Provided them** with Newsletter Design Structure"
  },
  {
    id: 5,
    title: "Nucleus Biotech Labs",
    industry: "Healthcare",
    region: "Africa",
    techStack: ["Java", "Kotlin", "Microservice", "API-Gateway", "Jenkins", "Cloudinary", "Database Migration", "Code Migration", "PostgreSQL", "MongoDB"],
    image: MedicalBanner,
    country: "Cameroon",
    clientDescription: "Nucleus Biotech Labs provides a solution for hospitals that **digitizes the entire doctor-patient interaction**. It centralizes patient information to ensure doctors can seamlessly access medical history across different regions.",
    challenge: "The hospital's existing system was hindered by **microservice sprawl**, with 11 disparate services creating high maintenance overhead. Additionally, the legacy **Kotlin codebase** required alignment with a standardized **Java enterprise environment**.",
    description:
      "Over 2-years partnership, we helped evolve their healthcare ecosystem by:\n" +
      "• **Strategic Microservice Consolidation:** Re-architected the backend by merging **11 microservices into 5** high-cohesion microservices.\n" +
      "• **Language Migration & Standardization:** Spearheaded a full-scale migration from **Kotlin to Java**.\n" +
      "• **Infrastructure Hardening:** Configured a secure Oracle DB environment and established a **Docker-Jenkins CI/CD pipeline**.\n\n" +
      "**Key Achievements:**\n" +
      "• **55% reduction** in infrastructure complexity, lowering operational costs.\n" +
      "• **100% data portability** for patients achieved by centralizing medical histories.\n" +
      "• **Enhanced system security and uptime** through the implementation of automated pipelines."
  },
  {
    id: 6,
    title: "Lalo (Share Memories Social Media App)",
    industry: "Professional Services",
    region: "North America",
    techStack: ["Java", "Python", "Typescript", "Spring Boot", "Flutter", "Docker", "AWS"],
    country: "USA",
    image: Lalo,
    clientDescription: "Lalo was a social media that keepsake for all of life’s moments. More: [Tech Crunch Lalo](https://techcrunch.com/2022/05/25/lalo-launches-app-memorialize-loved-ones)",
    challenge: "Lalo needed a frictionless way for users to **migrate years of memories** from mainstream platforms. They needed immediate **Staff Augmentation** to bridge the technical gap between external Social Media APIs and their own backend.",
    description:
      "A 6-months partnership, we helped evolve their Backend & Mobile ecosystem by:\n" +
      "• **Social Media API Orchestration:** Engineered secure **OAuth2** authentication flows for Facebook and Instagram.\n" +
      "• **Asynchronous Media Ingestion:** Developed a backend pipeline to handle high-bandwidth transfer of photos and videos.\n" +
      "• **Mobile Feature Scaling:** Operated as a dedicated Staff Augmentation unit to accelerate the mobile roadmap.\n\n" +
      "**Key Achievements:**\n" +
      "• **16% increase** in user content adoption via one-click *\"legacy data\"* imports.\n" +
      "• **Accelerated feature time-to-market by 50%** by providing expert Staff Augmentation."
  },
  {
    id: 7,
    title: "Eat & More",
    industry: "Retail",
    region: "Europe",
    techStack: ["Java", "JavaScript", "ReactJs", "Flutter", "AWS Elastic Beanstalk", "AWS S3"],
    country: "UK",
    image: EatandMore,
    clientDescription: "*EatandMore* is a one-stop order solution that delivers mixed orders from local shops in 60 minutes using electric vehicles only. The **UK First Multi Ordering App**. More: https://eatandmore.co.uk",
    challenge: "The client faced a high risk of service disruption due to **manual deployment workflows**. Furthermore, restaurant managers lacked **real-time visibility** into incoming orders before pickup.",
    description:
      "Over a 2-years partnership, we helped evolve their Multi Ordering ecosystem by:\n" +
      "• **CI/CD Pipeline Integration:** Replaced manual uploads with an **automated deployment pipeline** to AWS.\n" +
      "• **Full-Stack Optimization:** Conducted a comprehensive audit and debugging of the Java backend.\n" +
      "• **Manager-Specific Mobile Portal:** Developed a dedicated app for partners featuring **real-time push notifications**.\n\n" +
      "**Key Achievements:**\n" +
      "• **80% reduction** in deployment downtime by automating the CI/CD pipeline.\n" +
      "• **100% improvement** in restaurant response time through the Manager Notification App.\n" +
      "• **40% decrease** in mobile app crash rates by resolving legacy backend bugs."
  },
  {
    id: 8,
    title: "Minerva",
    industry: "Professional Services",
    region: "Europe",
    techStack: ["Java", "JavaFx", "AES", "GDPR Data Masking", "Data Shuffling Algorithm", "Oracle DB", "MySQL DB", "PostgreSQL DB"],
    image: Minerva,
    country: "Slovakia",
    clientDescription: "Minerva is a solution that efficiently **anonymizes production databases** to ensure compliance with the **GDPR**, maintaining data privacy without causing slowdowns in the main application.",
    challenge: "The client faced a significant regulatory risk due to the presence of **PII** across fragmented environments. Manually scrubbing client data to meet *\"Right to be Forgotten\"* mandates was slow and prone to error.",
    description:
      "Over 1-year partnership, we developed a desktop software by:\n" +
      "• **Developing Cross-Database Connectivity:** A unified secure bridge for *Oracle, MySQL, and PostgreSQL*.\n" +
      "• **Asynchronous Processing:** Logic designed to run *\"out-of-band\"* to ensure no impact on application speed.\n" +
      "• **Specialized Anonymization Algorithm:** A secure script that replaces sensitive data while maintaining schema integrity.\n\n" +
      "**Key Achievements:**\n" +
      "• **100% GDPR Compliance** achieved by automating the identification and removal of sensitive client data.\n" +
      "• **Zero-Downtime Data Scrubbing** implemented via an asynchronous algorithm.\n" +
      "• **60% Reduction** in Data Privacy Overhead by replacing manual database maintenance."
  }
];