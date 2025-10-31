import HealthcareImg from '../../resources/images/indsutries/Healthcare.svg';
import PublicServicesImg from '../../resources/images/indsutries/Public_Services.svg';
import ProfessionalImg from '../../resources/images/indsutries/professional.svg';
import FinancialImg from '../../resources/images/indsutries/Financial.svg';
import SmartOfficeImg from '../../resources/images/indsutries/Smart_Office.svg';
import RetailImg from '../../resources/images/indsutries/Retail.svg';
import PhpLogo from '../../resources/images/ServiceMap/php-logo.svg';
import JavaLogo from '../../resources/images/ServiceMap/java-logo.svg';
import PythonLogo from '../../resources/images/ServiceMap/python_1.svg';
import NodeLogo from '../../resources/images/ServiceMap/node-js-logo-small.svg';
import HTMLLogo from "../../assets/images/html.png";
import CSSLogo from "../../assets/images/css.png";
import JavaScriptLogo from "../../assets/images/javascript-logo.png"
import ReactLogo from "../../assets/images/react-js-logo.png"
import AngularLogo from "../../assets/images/angular-logo.png"
import VueLogo from "../../assets/images/vuejs-logo.png"
import NextLogo from "../../assets/images/nextjs.png"
import AndroidLogo from "../../assets/images/android-logo.png"
import IOSLogo from "../../assets/images/ios-logo.png"
import ProgressiveWebAppLogo from "../../assets/images/pwa-logo.png"
import PostgreSQLLogo from "../../assets/images/postgresql-vertical-logo.png"
import MySQLLogo from "../../assets/images/mysql.png"
import OracleLogo from "../../assets/images/oracle.png"
import MongoDBLogo from "../../assets/images/mongodb-logo.png"
import AWSLogo from "../../assets/images/aws.png"
import GoogleCloudLogo from "../../assets/images/mongodb-logo.png"
import DigitalOceanLogo from "../../assets/images/digital-ocean.png"
import AmazonS3Logo from "../../assets/images/amazon-s3.png"
import AmazonDynamoLogo from "../../assets/images/amazon-dynamodb-logo.png"
import AmazonDocumentDBLogo from "../../assets/images/amazon-documentdb.png"
import AmazonRDSLogo from "../../assets/images/amazon-rds-logo.png"
import AWSElasticacheLogo from "../../assets/images/aws-elasticache.png"
import Gitlab from "../../assets/images/gitlab.png"
import KubernetesLogo from "../../assets/images/kubernetes-logo.png"
import AwsDeveloperToolsLogo from "../../assets/images/aws-developer-tools.png"
import GoogleDeveloperToolsLogo  from "../../assets/images/google-developer-tools.png"
import JenkinsLogo  from "../../assets/images/gitlab.png"
import PrometheusLogo  from "../../assets/images/prometheus-logo.png"
import GrafanaLogo  from "../../assets/images/grafana-logo.png"
import ElasticSearchLogo  from "../../assets/images/elasticsearch.png"
import SeleniumLogo  from "../../assets/images/selenium.png"
import PostmanLogo  from "../../assets/images/postman.png"
import ApacheJmeterLogo  from "../../assets/images/apache-jmeter.png"
import FlutterLogo  from "../../assets/images/flutter-logo.png"


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
        image:JavaLogo,
        practice:'Practice',
        year:'10 years',
        project:'Projects',
        pnumber:'60+',
        workforce:'workforce',
        number:'60+'
    },
    {
        image: PhpLogo,
        practice:'Practice',
        year:'6 years',     
        project:'Projects',
        pnumber:'60+',
        workforce:'workforce',
        number:'80+'
    },
    {
        image: PythonLogo,
        practice:'Practice',
        year:'6 years',
        project:'Projects',
        pnumber:'60+',
        workforce:'workforce',
        number:'80+'
    },
    {
        image: NodeLogo,
        practice:'Practice',
        year:'6 years',     
        workforce:'workforce',
        number:'80+'
    }

]
const Frontend =[
    {
        image: HTMLLogo,
        
    },
    {
        image:CSSLogo,
       
    },
    {
        image:JavaScriptLogo,
    },
]
const Framework =[
    {
        image:ReactLogo,
     
        workforce:'workforce',
        number:'60+',
        text:'ScienceSoft achieves 20–50% faster React development and 50–90% fewer front-end performance issues due to smart implementation of reusable components and strict adherence to coding best practices.'
    },
    {
        image:AngularLogo,
        practice:'Practice',
        year:'10 years',
        workforce:'workforce',
        number:'60+',
        text:'ScienceSoft leverages code reusability Angular is notable for to create large-scale apps. We chose Angular for a banking app with 3M+ users.'
    },
    {
        image:VueLogo,
        text:"By using a lightweight Vue framework, ScienceSoft creates high-performant apps with real-time rendering."
    },
    {
        image:NextLogo,

        text:"By using a lightweight Vue framework, ScienceSoft creates high-performant apps with real-time rendering."
    }
  
]

const mobile =[
    {
        image:AndroidLogo,
    },
    {
        image:IOSLogo,
    },
    {
        image:ProgressiveWebAppLogo,
        practice:'Practice',
        year:'6 years',     
        project:'Projects',
        pnumber:'60+',
        workforce:'workforce',
        number:'80+',
        text:"ScienceSoft takes the best from native mobile and web apps and creates the ultimate user experience in PWA."
    },
    {
        image:FlutterLogo,
        practice:'Practice',
        year:'6 years',     
        text:"With Ionic, ScienceSoft creates a single app codebase for web and mobile platforms and thus expands the audience of created apps to billions of users at the best cost."
    }
]

const database =[
    {
        image:PostgreSQLLogo,
    },
    {
        image:MySQLLogo,

    },
    {
        image:OracleLogo,
    },
    {
        image:MongoDBLogo,
    },
   
]
const Aws =[
    {
        image:AmazonS3Logo,
      
    },
    {
        image:AmazonDynamoLogo,
    },
    {
        image:AmazonDocumentDBLogo,
        text:"By using a lightweight Vue framework, ScienceSoft creates high-performant apps with real-time rendering."
    },
    {
        image:AmazonRDSLogo,
    },
    {
        image:AWSElasticacheLogo,
    },
]
const cloud =[
    {
        image:AWSLogo,
      
    },
    {
        image:GoogleCloudLogo,
    },
    {
        image:DigitalOceanLogo
    }
]


const devops =[
    {
        image:JenkinsLogo,
      
    },
    {
        image:KubernetesLogo,
    }
]

const cicd =[
    {
        image:AwsDeveloperToolsLogo,
      
    },
    {
        image:GoogleDeveloperToolsLogo,
    },
    {
        image: Gitlab
    }
]

const monitoring =[
    {
        image:PrometheusLogo,
      
    },
    {
        image:GrafanaLogo,
    },
    {
        image:ElasticSearchLogo 
    }
]

const testAuto =[
    {
        image:SeleniumLogo,
      
    },
    {
        image:PostmanLogo,
    },
    {
        image:ApacheJmeterLogo
    }
]

export {cloud,Aws, devops, cicd, monitoring, testAuto, aboutServiceMap, solutionData, geoData, Backend, Frontend, Framework, pricePolicy,mobile,database, izIndustriesData}
