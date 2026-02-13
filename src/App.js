import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import IZNavBar from './components/Header/IZNavBar'
import StatusNavbar from './components/SystemStatus/StatusNavbar';
import Footer from './components/Footer/Footer'
import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';
import Careers from './pages/Careers/Careers';
import SystemStatus from './pages/SystemStatus/SystemStatus';
import UpcomingMaintenance from './components/SystemStatus/UpcomingMaintenance';
import More from './pages/Careers/More';
import InitContent from './components/Main/MainContactUs/InitContent';
import Events from './pages/Event/Events';
import AffiliateAgent from './pages/AffiliateAgent/AffiliateAgent';
import TermsUse from './pages/Policy/TermsUse';
import PrivacyPolicy from './pages/Policy/PrivacyPolicy';
import Construction from './pages/Coming/Construction';
import ConstructionZetScore from './pages/Coming/ConstructionZetScore';
import PaymentServicePolicy from './pages/Policy/PaymentServicePolicy';
import ClientOnboard from './pages/ClientWorkflow/ClientOnboard';
import AdministrativeFeesPage from './components/Main/MainPolicy/AdministrativeFees';
import Gateways from './pages/Partners/Gateways';
import './resources/style/scss/main.scss';
import Portfolio from './pages/Portfolio/Portfolio'
import FAQPage from './components/Faq/FAQPage';
import Technologies from './components/Technology/Technologies';
import SoftwareDevelopment from './components/SoftwareDevelopment/SoftwareDevelopment';
import Egovernment from './pages/eGovernment/Egovernment';
import UIDesignServices from './pages/UiUxDesign/UIDesignServices';
import Modernization from './pages/Modernization/Modernization';
import ConnectSphere from './pages/ConnectSphere/ConnectSphere';
import CyberSecurity from './pages/CyberSecurity/CyberSecurity';

// Main App Content with conditional navbar
const AppContent = () => {
  const location = useLocation();
  
  // Use StatusNavbar for status page and upcoming maintenance page
  const isStatusNavbar = location.pathname === '/status' || 
                        location.pathname === '/upcoming-maintainance';

  return (
    <>
      {/* Conditional Navbar */}
      {isStatusNavbar ? <StatusNavbar /> : <IZNavBar />}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services/software-consulting' element={<Construction/>}/>
        <Route path='/services/software-development' element={<SoftwareDevelopment/>}/>
        <Route path='/healthcare/services' element={<Construction/>}/>
        <Route path='/professiona-services' element={<Construction/>}/>
        <Route path='/professiona-services-extra' element={<Construction/>}/>
        <Route path='/portfolio' element={<Construction/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/status' element={<SystemStatus />}/>
        <Route path='/upcoming-maintainance' element={<UpcomingMaintenance />}/>
        <Route path='/about/careers-more' element={<More/>}/>
        <Route path="/case-studies" element={<Portfolio />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/client-support" element={<Construction />} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path="/blog/:blogUrl" element={<BlogPost />} />
        <Route path="/contact-us" element={<InitContent />} />
        <Route path="/events" element={<Events/>} />
        <Route path='/zetscore' element={<ConstructionZetScore/>}/>
        <Route path="/about/client-onboard" element={<ClientOnboard/>} />
        <Route path="/about/development-process" element={<Construction/>} />
        <Route path="/about/payment-gateway-providers" element={<Gateways/>} />
        <Route path="/about/technology-used" element={<Technologies/>} />
        <Route path="/services/egovernment-solutions" element={<Egovernment/>} />
        <Route path="/services/web-design" element={<UIDesignServices />} />
        <Route path="/services/legacy-modernisation" element={<Modernization/>} />
        <Route path="/services/connect-sphere" element={<ConnectSphere/>} />
        <Route path="/services/cybersecurity" element={<CyberSecurity/>} />
        <Route path="/industries/healthcare" element={<Construction/>} />
        <Route path="/industries/public-services" element={<Construction/>} />
        <Route path="/industries/professional-services" element={<Construction/>} />
        <Route path="/industries/financial-services" element={<Construction/>} />
        <Route path="/industries/smart-office" element={<Construction/>} />
        <Route path="/industries/retail" element={<Construction/>} />
        <Route path="/about/affiliate-agent" element={<AffiliateAgent />} />
        <Route path="/about/terms-use" element={<TermsUse />} />
        <Route path="/about/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about/payment-services-policy" element={<PaymentServicePolicy />} />
        <Route path="/about/payment-services-policy/fees" element={<AdministrativeFeesPage />} />
      </Routes>
      
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;