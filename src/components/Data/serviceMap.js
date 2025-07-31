import HealthcareImg from '../../resources/images/indsutries/Healthcare.svg';
import PublicServicesImg from '../../resources/images/indsutries/Public_Services.svg';
import ProfessionalImg from '../../resources/images/indsutries/professional.svg';
import FinancialImg from '../../resources/images/indsutries/Financial.svg';
import SmartOfficeImg from '../../resources/images/indsutries/Smart_Office.svg';
import RetailImg from '../../resources/images/indsutries/Retail.svg';


const aboutServiceMap =[
    {
        title: 'Software Development',
        text: 'Custom Software Development',
        text1: 'Software Consulting',
        text2: 'Software Product Development',
        text3: 'Legacy Software Modernization',
        bgColor:'#3692f2'
    },
    {
        title: 'eGovernment Solutions',
        text:  'Civil Status Certificates (G2C)',
        text1: 'Idendity Services (G2C)',
        text2: 'Licensing and Permit (G2B)',
        text3: 'Business Registration Portal (G2B)',
        bgColor:'#3692f2'
    },
   
    {
        title: 'UX/UI Design',
        text:  'User Interface (UI) Design',
        text1: 'User Experience (UX) Design',
        text2: 'Software as a Service (Saas) UI',
        text3: 'User Interface (UI) Redesign',
        bgColor:'#3692f2'
    },
    {
        title: 'Legacy Modernisation',
        text:  'Architectural Modernization',
        text1: 'Frontend Modernization',
        text2: 'Code Modernization',
        text3: 'Technology Migration',
        bgColor:'#3692f2'
    },
    {
        title: 'ConnectSphere Service',
        text:  'Website Development',
        text1: 'Website Maintenance',
        text2: 'Community Management',
        text3: 'Website Redesign',
        bgColor:'#3692f2'
    },
    {
        title: 'Digital Transformation',
        text:  'Customer Experience',
        text3: 'Corporate Finance',
        text1: 'Workforce',
        text2: 'Enterprise-wide Transformation',
        bgColor:'#3692f2'
    },
]

const solutionData = [ 'Enterprise application', 'Supply Chain Optimization', 'Employee Perf. Management', 'Web Portals',  'ERP', 'Internet Banking',  'Healthcare Portal', 'eCommerce', 'Mobile Apps']

const pricePolicy = [ 'FIXED PRICE MODEL', 'HOURLY ENGAGEMENT MODEL', 'RETAINER-BASED MODEL', 'SUBSCRIPTION-BASED MODEL', 'SUPPORT AND UPKEEP MODEL', 'ON-SITE DEDICATED MODEL']

const geoData =[
    {
        title: 'Kenya',
        text: 'Office locations: Nairobi'
        
    },
    {
        title: 'Rwanda',
        text: 'V. Office locations: Kigali'        
    },
    {
        title: 'Cameroon',
        text: 'V. Office locations: Douala'   
    }
]



const izIndustriesData = [
    {
     title: 'HealthCare',
     image: HealthcareImg
    },
    {
     title:'Public Services',
     image: PublicServicesImg
    },
    {
     title: 'Professional Services',
     image: ProfessionalImg
    },
    {
     title: 'Financial Services',
     image: FinancialImg
    },
    {
     title: 'Smart Office',
     image: SmartOfficeImg
    },
    {
     title: 'Retail',
     image: RetailImg
    }
 ]

const Backend =[
    {
        image:'https://www.scnsoft.com/technologies-logos/back-end/java-logo.svg',
        practice:'Practice',
        year:'10 years',
        project:'Projects',
        pnumber:'60+',
        workforce:'workforce',
        number:'60+'
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/back-end/php-logo.svg',
        practice:'Practice',
        year:'6 years',     
        project:'Projects',
        pnumber:'60+',
        workforce:'workforce',
        number:'80+'
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/back-end/python_1.svg',
        practice:'Practice',
        year:'6 years',
        project:'Projects',
        pnumber:'60+',
        workforce:'workforce',
        number:'80+'
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/back-end/node-js-logo-small.svg',
        practice:'Practice',
        year:'6 years',     
        workforce:'workforce',
        number:'80+'
    }

]
const Frontend =[
    {
        image:'	https://www.scnsoft.com/technologies-logos/front-end/html.svg',
        
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/front-end/css.svg',
       
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/front-end/javascript-logo.svg',
    },
]
const Framework =[
    {
        image:'https://www.scnsoft.com/technologies-logos/front-end/react-js-logo.svg',
     
        workforce:'workforce',
        number:'60+',
        text:'ScienceSoft achieves 20–50% faster React development and 50–90% fewer front-end performance issues due to smart implementation of reusable components and strict adherence to coding best practices.'
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/front-end/angular-logo.svg',
        practice:'Practice',
        year:'10 years',
        workforce:'workforce',
        number:'60+',
        text:'ScienceSoft leverages code reusability Angular is notable for to create large-scale apps. We chose Angular for a banking app with 3M+ users.'
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/front-end/vuejs-logo.svg',
        text:"By using a lightweight Vue framework, ScienceSoft creates high-performant apps with real-time rendering."
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/frameworks/nextjs.svg',
        
        text:"By using a lightweight Vue framework, ScienceSoft creates high-performant apps with real-time rendering."
    }
  
]

const mobile =[
    {
        image:'https://www.scnsoft.com/technologies-logos/mobile/android-logo.svg',
    },
    {
        image:'	https://www.scnsoft.com/technologies-logos/mobile/ios-logo.svg  ',
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/mobile/pwa-logo.svg ',
        practice:'Practice',
        year:'6 years',     
        project:'Projects',
        pnumber:'60+',
        workforce:'workforce',
        number:'80+',
        text:"ScienceSoft takes the best from native mobile and web apps and creates the ultimate user experience in PWA."
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/mobile/flutter-logo.svg',
        practice:'Practice',
        year:'6 years',     
        text:"With Ionic, ScienceSoft creates a single app codebase for web and mobile platforms and thus expands the audience of created apps to billions of users at the best cost."
    }
]

const database =[
    {
        image:'https://www.scnsoft.com/technologies-logos/databases/postgresql-vertical-logo.svg',
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/databases/mysql.svg',
            
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/databases/oracle.svg   ',
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/databases/mongodb-logo.svg',
    },
   
]
const Aws =[
    {
        image:'https://www.scnsoft.com/technologies-logos/big-data/amazon-s3.svg',
      
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/big-data/amazon-dynamodb-logo.svg',        
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/cloud/amazon-documentdb.svg',
        text:"By using a lightweight Vue framework, ScienceSoft creates high-performant apps with real-time rendering."
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/databases/amazon-rds-logo.svg',        
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/cloud/aws-elasticache.svg      ', 
    },
]
const cloud =[
    {
        image:'https://www.scnsoft.com/technologies-logos/cloud/aws.svg',
      
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/cloud/google-cloud-logo.svg',
    },
    {
        image: 'https://www.scnsoft.com/technologies-logos/cloud/digital-ocean.svg'
    }
]


const devops =[
    {
        image:'https://www.scnsoft.com/technologies-logos/devops/jenkins.svg',
      
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/devops/kubernetes-logo.svg',
    }
]

const cicd =[
    {
        image:'https://www.scnsoft.com/technologies-logos/devops/aws-developer-tools.svg',
      
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/devops/google-developer-tools.svg',
    },
    {
        image: 'https://www.scnsoft.com/technologies-logos/devops/gitlab.svg'
    }
]

const monitoring =[
    {
        image:'https://www.scnsoft.com/technologies-logos/devops/prometheus-logo.svg',
      
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/devops/grafana-logo.svg',
    },
    {
        image: 'https://www.scnsoft.com/technologies-logos/devops/elasticsearch.svg'
    }
]

const testAuto =[
    {
        image:'https://www.scnsoft.com/technologies-logos/test-automation/selenium.svg',
      
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/test-automation/postman.svg',
    },
    {
        image: 'https://www.scnsoft.com/technologies-logos/test-automation/apache-jmeter.svg'
    }
]

export {cloud,Aws, devops, cicd, monitoring, testAuto, aboutServiceMap, solutionData, geoData, Backend, Frontend, Framework, pricePolicy,mobile,database, izIndustriesData}