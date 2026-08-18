import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PersonaHub from './components/PersonaHub';
import StatsDashboard from './components/StatsDashboard';
import FeaturesGrid from './components/FeaturesGrid';
import NewsTicker from './components/NewsTicker';
import PartnersMarquee from './components/PartnersMarquee';
import Footer from './components/Footer';
import Modals from './components/Modals';
import AboutUs from './pages/AboutUs';
import KnowNsr from './pages/KnowNsr';
import ContactUs from './pages/ContactUs';
import NsrInMedia from './pages/NsrInMedia';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'know-nsr' | 'contact' | 'media'
  const [knowNsrTab, setKnowNsrTab] = useState('context');
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null, // 'login' | 'register' | 'search' | 'verify' | 'grievance' | 'tour' | 'ebc' | 'amc' | 'eee' | 'cert'
    data: null
  });

  const openModal = (type, data = null) => {
    setModalState({ isOpen: true, type, data });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null, data: null });
  };

  const switchModal = (type, data = null) => {
    setModalState({ isOpen: true, type, data });
  };

  // Keyboard shortcut listener for Cmd + K (Search) and Konami Code Easter Egg
  useEffect(() => {
    const konamiSequence = [
      'arrowup', 'arrowup', 
      'arrowdown', 'arrowdown', 
      'arrowleft', 'arrowright', 
      'arrowleft', 'arrowright', 
      'b', 'a'
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      // Cmd + K or Ctrl + K for quick search
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('search');
        return;
      }

      // Konami Code sequence detection
      const key = e.key.toLowerCase();
      if (key === konamiSequence[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          konamiIndex = 0;
          openModal('easteregg', { trigger: 'Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)' });
          console.log(
            '%c🎁 NSR SECRET EASTER EGG UNLOCKED! 🚀%c\nKonami Code sequence detected: ↑ ↑ ↓ ↓ ← → ← → B A\nSecurity Clearance: Level-99 Certified NSR Auditor\nEnjoy the hidden developer matrix!',
            'background: linear-gradient(135deg, #1e3a8a, #06b6d4); color: #ffffff; font-size: 15px; font-weight: bold; padding: 6px 12px; border-radius: 6px; border: 1px solid #38bdf8;',
            'color: #f97316; font-size: 13px; font-weight: 600; line-height: 1.6;'
          );
        }
      } else {
        konamiIndex = (key === 'arrowup') ? 1 : 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateTo = (page, tabOrAnchor = null) => {
    setCurrentPage(page);
    if (page === 'know-nsr' && tabOrAnchor) {
      setKnowNsrTab(tabOrAnchor);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenLogin={(role = 'professional') => openModal('login', { role })}
        onOpenRegister={(mode = 'new') => openModal('register', { mode })}
        onOpenSearch={() => openModal('search')}
        onOpenGrievance={() => openModal('grievance')}
      />

      {/* Page Routing */}
      {currentPage === 'about' ? (
        <AboutUs 
          onOpenTour={(persona) => openModal('tour', { persona })}
          onOpenGrievance={() => openModal('grievance')}
          onOpenRegister={() => openModal('register')}
          onNavigateHome={() => navigateTo('home')}
        />
      ) : currentPage === 'know-nsr' ? (
        <KnowNsr 
          initialTab={knowNsrTab}
          onNavigateHome={() => navigateTo('home')}
          onOpenRegister={() => openModal('register')}
          onOpenTour={(persona) => openModal('tour', { persona })}
          onOpenGrievance={() => openModal('grievance')}
        />
      ) : currentPage === 'contact' ? (
        <ContactUs 
          onNavigateHome={() => navigateTo('home')}
          onNavigate={navigateTo}
          onOpenRegister={() => openModal('register')}
          onOpenTour={(persona) => openModal('tour', { persona })}
          onOpenGrievance={() => openModal('grievance')}
        />
      ) : currentPage === 'media' ? (
        <NsrInMedia 
          onNavigateHome={() => navigateTo('home')}
          onNavigate={navigateTo}
          onOpenRegister={() => openModal('register')}
          onOpenTour={(persona) => openModal('tour', { persona })}
          onOpenGrievance={() => openModal('grievance')}
        />
      ) : (
        <>
          {/* Hero Section */}
          <Hero 
            onOpenRegister={() => openModal('register')}
            onOpenLogin={(role) => openModal('login', { role })}
            onOpenVerifyModal={() => openModal('verify')}
            onOpenTour={() => openModal('tour')}
            onOpenEasterEgg={(trigger) => openModal('easteregg', { trigger })}
          />

          {/* Gateway Hub (Knowledge Professionals & Subscriber Companies) */}
          <PersonaHub 
            onOpenRegister={(mode) => openModal('register', { mode })}
            onOpenLogin={(role) => openModal('login', { role })}
            onOpenTour={(persona) => openModal('tour', { persona })}
            onOpenGrievance={() => openModal('grievance')}
            onOpenForgot={() => openModal('login', { role: 'professional' })}
            onOpenEbcModal={() => openModal('ebc')}
            onOpenAmcModal={() => openModal('amc')}
          />

          {/* Real-Time Registry Statistics */}
          <StatsDashboard />

          {/* Ecosystem Tools: Exit Employment Exchange, Tip of Day, Root Certificate, Video Tour */}
          <FeaturesGrid 
            onOpenTour={(persona) => openModal('tour', { persona })}
            onOpenCertModal={() => openModal('cert')}
            onOpenEeeModal={() => openModal('eee')}
          />

          {/* Live News & Industry Empanelment Feed */}
          <NewsTicker 
            onSelectNews={(newsItem) => alert(`Viewing Circular: ${newsItem.title}\n\n${newsItem.summary}`)}
          />

          {/* Trusted Enterprise Partners Marquee */}
          <PartnersMarquee />
        </>
      )}

      {/* Institutional Compliance Footer */}
      <Footer 
        onNavigate={navigateTo}
        onOpenGrievance={() => openModal('grievance')}
        onOpenRegister={() => openModal('register')}
        onOpenLogin={(role) => openModal('login', { role })}
      />

      {/* Dynamic Popups & Modals */}
      {modalState.isOpen && (
        <Modals 
          modalType={modalState.type}
          modalData={modalState.data}
          onClose={closeModal}
          onSwitchModal={switchModal}
        />
      )}
    </div>
  );
}
