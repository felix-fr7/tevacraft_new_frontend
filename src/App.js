// App.jsx (சரியான அமைப்பு)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbarup from './commen/Navbarup';
import Pagefile from './commen/Pagefile';



import Landingpage from './pages/Landingpage';
import ServicesPage from './pages/Service';
import Industries from './pages/Industries';
import TechnologyStack from './pages/TechnologyStack';
import AboutUs from './pages/AboutUs';
import CaseStudies from './pages/CaseStudies';
import KnowledgeCenter from './pages/KnowledgeCenter';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import LocalizationServices from './pages/LocalizationServices';
import HealthcareSolutionsPage from './pages/healthcare';

function App() {
  return (
    <BrowserRouter>
      {/* 1. Navbar-ஐ இங்கு, Routes-க்கு மேலே வைக்கவும் */}
      <Navbarup />
      
      <main>
        <Routes>
          {/* 2. Routes உள்ளே வெறும் பக்கங்களின் Content மட்டுமே இருக்கும் */}
          <Route path="/" element={<Landingpage/>} /> 
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/industries" element={<Industries/>} />
          <Route path="/technology" element={<TechnologyStack/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/case-studies" element={<CaseStudies/>} />
          <Route path="/knowledge-center" element={<KnowledgeCenter/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/localization-services" element={<LocalizationServices/>} />
          <Route path="/register" element={<Pagefile/>} />
          <Route path="/healthcare" element={<HealthcareSolutionsPage/>} />


        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
// HomePage.jsx அல்லது ServicesPage.jsx உள்ளே:
// function HomePage() { return ( <Content /> ) } // Navbar இல்லை