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
    title: 'Zerd Horizon',
    industry: 'Smart Office',
    region: 'Europe',
    techStack: ['Java', 'JavaFX', 'Kotlin Mobile', 'Jetpack Compose'],
    country: 'France',
    image: ZerdHorizon,
    clientDescription: "Zerd Horizon provides the best ticketing software to manage your movie theaters. This simple and effective solution which optimizes the management of your cinema in France",
    challenge: "The client needed to modernize their legacy software systems while maintaining compliance with strict regulatory requirements. They required a solution that could handle complex clinical trial data, streamline research processes, and integrate with existing laboratory systems. The solution needed to be scalable to support their growing research operations.",
    description: "Over a 10-year partnership, we helped evolve their software ecosystem by:\n\n- Developing custom laboratory management systems\n- Creating automated compliance reporting tools\n- Building secure data sharing platforms\n- Implementing AI-driven research analytics\n\nKey achievements:\n- 40% reduction in research cycle time\n- 60% improvement in data accuracy\n- Full compliance with FDA and EMA regulations",
  },
  {
    id: 2,
    title: 'MultiBenchmark and MultiLevel Algorithm',
    industry: 'Healthcare',
    region: 'North America',
    techStack: ['Java', 'Spring Boot', 'Microservice', 'Api-Gateway', 'Docker',  'Grafana', 'Prometheus', 'JUnit5', 'Google Cloud'],
    image: HealthcareIQ,
     country: 'USA',
    clientDescription: "Healthcare IQ is an independent Data Management and Analytics Company with decades of experience transforming complex data into spend, clinical, and performance opportunities",
    challenge: "The client needed to modernize their legacy software systems while maintaining compliance with strict regulatory requirements. They required a solution that could handle complex clinical trial data, streamline research processes, and integrate with existing laboratory systems. The solution needed to be scalable to support their growing research operations.",
    description: "Over a 10-year partnership, we helped evolve their software ecosystem by:\n\n- Developing custom laboratory management systems\n- Creating automated compliance reporting tools\n- Building secure data sharing platforms\n- Implementing AI-driven research analytics\n\nKey achievements:\n- 40% reduction in research cycle time\n- 60% improvement in data accuracy\n- Full compliance with FDA and EMA regulations",
  },
  {
    id: 3,
    title: 'PAJEC',
    industry: 'Professional Services',
    region: 'Africa',
    techStack: ['WordPress', 'PHP', 'Marketing'],
    country: 'Cameroon',
    image: Pajec,
    clientDescription: "Patronat des Jeunes Entrepreneur du Cameroun (PAJEC), is an association of young entrepreneurs in Cameroon.",
    description: "Over a 10-year partnership, we helped evolve their software ecosystem by:\n\n- Developing custom laboratory management systems\n- Creating automated compliance reporting tools\n- Building secure data sharing platforms\n- Implementing AI-driven research analytics\n\nKey achievements:\n- 40% reduction in research cycle time\n- 60% improvement in data accuracy\n- Full compliance with FDA and EMA regulations",
  },
  {
    id: 4,
    title: 'Nucleus Biotech Labs',
    industry: 'Healthcare',
    region: 'Africa',
    techStack: ['Java', 'Kotlin', 'Microservice', 'Database Migration', 'PostgreSQL', 'MongoDB'],
    image: MedicalBanner,
    country: 'Africa',
    clientDescription: "Nucleus Biotech Labs provides a solution for hospitals that digitizes the entire doctor-patient interaction. This solution records all observations, recommendations, prescribed medications, and other relevant data during each consultation. By centralizing patient information, it ensures that, when a patient transfers to another hospital or visits a different region, the next doctor can seamlessly access the patient's medical history and data from previous consultations. This improves continuity of care and enhances patient treatment efficiency.",
    challenge: "The client needed to modernize their legacy software systems while maintaining compliance with strict regulatory requirements. They required a solution that could handle complex clinical trial data, streamline research processes, and integrate with existing laboratory systems. The solution needed to be scalable to support their growing research operations...",
    description: "Over a 10-year partnership, we helped evolve their software ecosystem by:\n\n- Developing custom laboratory management systems\n- Creating automated compliance reporting tools\n- Building secure data sharing platforms\n- Implementing AI-driven research analytics\n\nKey achievements:\n- 40% reduction in research cycle time\n- 60% improvement in data accuracy\n- Full compliance with FDA and EMA regulations",
  },
  {
    id: 5,
    title: 'Lalo',
    industry: 'Professional Services',
    region: 'North America',
    techStack: ['Java', 'Spring Boot', 'Flutter', 'Docker', 'AWS'],
     country: 'USA',
    image: Lalo,
    clientDescription: "Lalo is a social media that is a keepsake for all of life’s moments and the people we share them with. It stored memories both video and photo and also gave the ability to import them from Facebook or LinkedIn",
    challenge: "The client needed to modernize their legacy software systems while maintaining compliance with strict regulatory requirements. They required a solution that could handle complex clinical trial data, streamline research processes, and integrate with existing laboratory systems. The solution needed to be scalable to support their growing research operations.",
    description: "Over a 10-year partnership, we helped evolve their software ecosystem by:\n\n- Developing custom laboratory management systems\n- Creating automated compliance reporting tools\n- Building secure data sharing platforms\n- Implementing AI-driven research analytics\n\nKey achievements:\n- 40% reduction in research cycle time\n- 60% improvement in data accuracy\n- Full compliance with FDA and EMA regulations",
  },
  {
    id: 6,
    title: 'Eat & More',
    industry: 'Retail',
    region: 'Europe',
    techStack: ['Java', 'JavaScript', 'Flutter', 'AWS'],
    country: 'UK',
    image: EatandMore,
    clientDescription: "EatandMore is a one-stop order solution, that delivers your orders in 60 minutes using electric vehicles only. With the EatandMore mobile application, our clients can mix orders from local restaurants, local grocery shops, local farms, local high street shops, and local service shops. The UK First Multi Ordering App.",
    challenge: "The client needed to modernize their legacy software systems while maintaining compliance with strict regulatory requirements. They required a solution that could handle complex clinical trial data, streamline research processes, and integrate with existing laboratory systems. The solution needed to be scalable to support their growing research operations.",
    description: "Over a 10-year partnership, we helped evolve their software ecosystem by:\n\n- Developing custom laboratory management systems\n- Creating automated compliance reporting tools\n- Building secure data sharing platforms\n- Implementing AI-driven research analytics\n\nKey achievements:\n- 40% reduction in research cycle time\n- 60% improvement in data accuracy\n- Full compliance with FDA and EMA regulations",
  },
  {
    id: 7,
    title: 'Minerva',
    industry: 'Professional Services',
    region: 'Europe',
    techStack: ['Java', 'JavaFx', 'Algorithm', 'Data Shuffling', 'Oracle DB', 'MySQL DB', 'PostgreSQL DB'],
    image: Minerva,
    country: 'Slovakia',
    clientDescription: "Minerva is a solution with a specialized algorithm that securely connects to and updates tables across three different databases (Oracle, MySQL, PostgreSQL). This solution efficiently anonymizes production databases to ensure compliance with the GDPR (General Data Protection Regulation), which mandates the removal of client data after a certain period. It performs these updates quickly and securely, without causing any slowdowns in the main application, while maintaining data privacy and regulatory compliance.",
    challenge: "The client needed to modernize their legacy software systems while maintaining compliance with strict regulatory requirements. They required a solution that could handle complex clinical trial data, streamline research processes, and integrate with existing laboratory systems. The solution needed to be scalable to support their growing research operations.",
    description: "Over a 10-year partnership, we helped evolve their software ecosystem by:\n\n- Developing custom laboratory management systems\n- Creating automated compliance reporting tools\n- Building secure data sharing platforms\n- Implementing AI-driven research analytics\n\nKey achievements:\n- 40% reduction in research cycle time\n- 60% improvement in data accuracy\n- Full compliance with FDA and EMA regulations",
  },
];
