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
import HTMLLogo from "../../resources/images/ServiceMap/html.svg";
import CSSLogo from "../../resources/images/ServiceMap/css.svg";
import JavaScriptLogo from "../../assets/images/javascript-logo.png"
import ReactLogo from "../../assets/images/react-js-logo.png"
import AngularLogo from "../../resources/images/ServiceMap/angular-logo.svg"
import VueLogo from "../../assets/images/vuejs-logo.png"
import NextLogo from "../../assets/images/nextjs.png"
import AndroidLogo from "../../assets/images/android-logo.png"
import IOSLogo from "../../assets/images/ios-logo.png"
import ProgressiveWebAppLogo from "../../assets/images/pwa-logo.png"
import PostgreSQLLogo from "../../assets/images/postgresql-vertical-logo.png"
import MySQLLogo from "../../assets/images/mysql.png"
import OracleLogo from "../../resources/images/ServiceMap/oracle.svg";
import MongoDBLogo from "../../resources/images/ServiceMap/mongodb-logo.svg"
import AWSLogo from "../../assets/images/aws.png"
import GoogleCloudLogo from "../../resources/images/ServiceMap/google-cloud-logo.svg"
import DigitalOceanLogo from "../../assets/images/digital-ocean.png"
import AmazonS3Logo from "../../resources/images/ServiceMap/amazon-s3.svg"
import AmazonDynamoLogo from  "../../resources/images/ServiceMap/amazon-dynamodb-logo.svg"
import AmazonDocumentDBLogo from  "../../resources/images/ServiceMap/amazon-dynamodb-logo.svg"
import AmazonRDSLogo from  "../../resources/images/ServiceMap/amazon-rds-logo.svg"
import AWSElasticacheLogo from  "../../resources/images/ServiceMap/aws-elasticache.svg"
import Gitlab from "../../resources/images/ServiceMap/jenkins (1).svg"
import KubernetesLogo from "../../assets/images/kubernetes-logo.png"
import AwsDeveloperToolsLogo from "../../assets/images/aws-developer-tools.png"
import GoogleDeveloperToolsLogo from "../../resources/images/ServiceMap/google-developer-tools.svg"
import DockerLogo  from "../../resources/images/ServiceMap/jenkins.svg"
import PrometheusLogo  from "../../assets/images/prometheus-logo.png"
import GrafanaLogo  from "../../assets/images/grafana-logo.png"
import ElasticSearchLogo  from "../../assets/images/elasticsearch.png"
import SeleniumLogo  from "../../resources/images/ServiceMap/selenium.svg"
import PostmanLogo  from "../../resources/images/ServiceMap/postman.svg"
import ApacheJmeterLogo  from "../../resources/images/ServiceMap/apache-jmeter.svg"
import FlutterLogo  from "../../resources/images/ServiceMap/flutter-logo.svg"


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
        title: 'ConnectSphere',
        text:  'Cloud Migration Support',
        text1: 'Cloud Security Service',
        text2: 'Cloud Pricing and Usage Optimisation',
        text3: 'Cloud Consulting',
        bgColor:'#3692f2'
    },
    {
        title: 'CyberSecurity',
        text:  'CyberSecurity Consulting',
        text1: 'Managed Security Services',
        text2: 'SIEM Services',
        text3: 'Compliance Service',
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
        text:'IZSoftwares achieves 20–50% faster React development and 50–90% fewer front-end performance issues due to smart implementation of reusable components and strict adherence to coding best practices.'
    },
    {
        image:AngularLogo,
        practice:'Practice',
        year:'10 years',
        workforce:'workforce',
        number:'60+',
        text:'IZSoftwares leverages code reusability Angular is notable for to create large-scale apps. We chose Angular for a banking app with 3M+ users.'
    },
    {
        image:VueLogo,
        text:"By using a lightweight Vue framework, IZSoftwares creates high-performant apps with real-time rendering."
    },
    {
        image:NextLogo,

        text:"By using a lightweight Vue framework, IZSoftwares creates high-performant apps with real-time rendering."
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
        text:"IZSoftwares takes the best from native mobile and web apps and creates the ultimate user experience in PWA."
    },
    {
        image:FlutterLogo,
        practice:'Practice',
        year:'6 years',     
        text:"With Ionic, IZSoftwares creates a single app codebase for web and mobile platforms and thus expands the audience of created apps to billions of users at the best cost."
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
        text:"By using a lightweight Vue framework, IZSoftwares creates high-performant apps with real-time rendering."
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
        image:DockerLogo,
      
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
