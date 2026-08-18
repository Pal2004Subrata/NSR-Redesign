import React, { useState, useEffect } from 'react';
import { 
  Building2, ShieldCheck, Database, Landmark, FileText, 
  Layers, ExternalLink, CheckCircle2, ChevronRight, 
  HelpCircle, Compass, PlayCircle, Users, ArrowRight, 
  FileCode2, Sparkles, Award, Globe, PieChart, Lock, Activity
} from 'lucide-react';
import './AboutUs.css';

export default function AboutUs({ onOpenTour, onOpenGrievance, onOpenRegister, onNavigateHome }) {
  const [activeSection, setActiveSection] = useState('ndml');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['ndml', 'nsdl', 'tin', 'cra', 'nasscom'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="about-page-wrapper">
      
      {/* About Us Hero Header */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-breadcrumbs">
            <button onClick={onNavigateHome} className="breadcrumb-link">Home</button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">About Us</span>
          </div>

          <div className="about-hero-content">
            <span className="badge badge-cyan">Institutional Heritage & Governance</span>
            <h1 className="about-hero-title">About National Skills Registry (NSR)</h1>
            <p className="about-hero-subtitle">
              A collaborative initiative by <strong>NASSCOM</strong> and <strong>NSDL Database Management Limited (NDML)</strong> to establish India's unified, secure, and credible digital identity infrastructure for knowledge professionals.
            </p>
          </div>

          {/* Quick Pillar Highlights */}
          <div className="about-hero-metrics">
            <div className="metric-box">
              <Building2 size={20} className="text-blue" />
              <div>
                <strong>NASSCOM Initiative</strong>
                <span>Apex trade body representing India's IT & BPO sector</span>
              </div>
            </div>
            <div className="metric-box">
              <Database size={20} className="text-cyan" />
              <div>
                <strong>NDML Managed</strong>
                <span>Technology hub powered by NSDL data systems</span>
              </div>
            </div>
            <div className="metric-box">
              <ShieldCheck size={20} className="text-emerald" />
              <div>
                <strong>TrustedSourcing</strong>
                <span>Standardized fact sheets & verified background checks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <section className="about-body-section">
        <div className="container about-layout-grid">
          
          {/* Left Sticky Sidebar */}
          <aside className="about-sidebar">
            <div className="sidebar-sticky-panel glass-panel">
              <h3 className="sidebar-title">On This Page</h3>
              
              <nav className="sidebar-nav-list">
                <button 
                  className={`sidebar-nav-btn ${activeSection === 'ndml' ? 'is-active' : ''}`}
                  onClick={() => scrollToSection('ndml')}
                >
                  <Database size={15} />
                  <span>NSDL Database Mgmt (NDML)</span>
                </button>

                <button 
                  className={`sidebar-nav-btn ${activeSection === 'nsdl' ? 'is-active' : ''}`}
                  onClick={() => scrollToSection('nsdl')}
                >
                  <Landmark size={15} />
                  <span>National Securities Depository (NSDL)</span>
                </button>

                <button 
                  className={`sidebar-nav-btn sub-nav ${activeSection === 'tin' ? 'is-active' : ''}`}
                  onClick={() => scrollToSection('tin')}
                >
                  <FileText size={14} />
                  <span>Tax Information Network (TIN)</span>
                </button>

                <button 
                  className={`sidebar-nav-btn sub-nav ${activeSection === 'cra' ? 'is-active' : ''}`}
                  onClick={() => scrollToSection('cra')}
                >
                  <PieChart size={14} />
                  <span>Central Recordkeeping (CRA/NPS)</span>
                </button>

                <button 
                  className={`sidebar-nav-btn ${activeSection === 'nasscom' ? 'is-active' : ''}`}
                  onClick={() => scrollToSection('nasscom')}
                >
                  <Award size={15} />
                  <span>NASSCOM Vision & Mandate</span>
                </button>
              </nav>

              {/* Quick Actions in Sidebar */}
              <div className="sidebar-quick-tools">
                <span className="sidebar-tools-label">Explore Resources</span>
                
                <button className="sidebar-tool-link" onClick={() => onOpenTour('professionals')}>
                  <PlayCircle size={14} className="text-cyan" />
                  <span>NSR Interactive Tour</span>
                </button>

                <a href="#faqs" className="sidebar-tool-link">
                  <HelpCircle size={14} className="text-blue" />
                  <span>Frequently Asked Questions</span>
                </a>

                <button className="sidebar-tool-link" onClick={() => onOpenRegister()}>
                  <Users size={14} className="text-emerald" />
                  <span>Join NSR (Registration)</span>
                </button>

                <button className="sidebar-tool-link" onClick={onOpenGrievance}>
                  <FileCode2 size={14} className="text-amber" />
                  <span>Submit Query / Grievance</span>
                </button>
              </div>

            </div>
          </aside>

          {/* Right Main Text Content */}
          <main className="about-main-content">
            
            {/* ===================================================================
                SECTION 1: NSDL DATABASE MANAGEMENT LIMITED (NDML)
                =================================================================== */}
            <article className="about-article-card" id="ndml">
              <div className="article-header">
                <div className="article-header-icon bg-blue-subtle">
                  <Database size={24} />
                </div>
                <div>
                  <span className="article-eyebrow">Operating & Technology Partner</span>
                  <h2 className="article-title">NSDL Database Management Limited (NDML)</h2>
                </div>
              </div>

              <div className="article-body">
                <p>
                  <strong>NDML is a fully owned subsidiary of National Securities Depository Limited (NSDL)</strong> which is the largest securities depository in India and also runs various other critical applications. One of the major proven competences of NSDL is its ability to conceive, design, implement, manage and maintain large databases that can bring in transactional efficiency for common good.
                </p>
                <p>
                  NSDL has also successfully set-up technology hub for managing these databases as well as a nation-wide foot-print of service centers where users of the system can be serviced. NDML will strive to provide the benefits of technological expertise, physical network and management experience of NSDL.
                </p>

                {/* NSR Mission Callout */}
                <div className="callout-box callout-blue">
                  <div className="callout-top">
                    <Sparkles size={18} className="text-blue" />
                    <strong>National Skills Registry (NSR) Genesis & Objectives</strong>
                  </div>
                  <p>
                    <strong>National Skills Registry (NSR) is set-up and managed by NDML on behalf of NASSCOM (<a href="https://www.nasscom.in" target="_blank" rel="noreferrer" className="inline-link">www.nasscom.in</a>).</strong> National Skills Registry is a NASSCOM initiative to have a robust and credible information repository about all persons working in the Industry. This develops trusted and permanent fact sheet of information about each professional along-with background check reports.
                  </p>
                  <p>
                    This is a security best practice for the Industry and assures identity security, industry acceptance to honest professionals. NSR is a web-based system hosting a fact sheet of information about existing and prospective employees of Indian IT & ITeS / BPO Industry.
                  </p>
                  <p>
                    This can be used by the IT & ITeS / BPO Industry and its clients as a credible source of information about the registered professionals who are being employed or put on client assignments. The system will also enhance the image of Indian IT & ITeS / BPO industry as one that has raised the bars on security standards in pursuit of excellence and client satisfaction. This will promote industry's claim for bigger share of global business on one hand and will reduce the cost of repetitive background checks on professionals, on the other hand.
                  </p>
                </div>

                <div className="callout-box callout-emerald">
                  <div className="callout-top">
                    <CheckCircle2 size={18} className="text-emerald" />
                    <strong>Expansion to Banking & Finance Industry</strong>
                  </div>
                  <p>
                    Considering that NSR is positioned well to serve a process and interest that is common and applicable to all organized, security conscious businesses, NASSCOM and NDML have agreed to extend the benefits of NSR initiative to <strong>Banking & Finance industry</strong> also.
                  </p>
                </div>

                <div className="article-link-footer">
                  <a href="http://www.ndml.in" target="_blank" rel="noreferrer" className="external-portal-btn">
                    <span>Visit NSDL Database Management Limited (NDML)</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>


            {/* ===================================================================
                SECTION 2: NATIONAL SECURITIES DEPOSITORY LIMITED (NSDL)
                =================================================================== */}
            <article className="about-article-card" id="nsdl">
              <div className="article-header">
                <div className="article-header-icon bg-cyan-subtle">
                  <Landmark size={24} />
                </div>
                <div>
                  <span className="article-eyebrow">Parent Institutional Foundation</span>
                  <h2 className="article-title">National Securities Depository Limited (NSDL)</h2>
                </div>
              </div>

              <div className="article-body">
                <p>
                  <strong>National Securities Depository Limited (NSDL)</strong> is a company promoted by financial institutions of national stature which are responsible for economic development of the country. NSDL is promoted by:
                </p>

                <div className="promoters-grid">
                  <div className="promoter-card">
                    <Building2 size={20} className="text-blue" />
                    <strong>Industrial Development Bank of India Limited (IDBI)</strong>
                    <span>The largest development bank of India</span>
                  </div>

                  <div className="promoter-card">
                    <Landmark size={20} className="text-cyan" />
                    <strong>Unit Trust of India (UTI)</strong>
                    <span>The largest mutual fund in India</span>
                  </div>

                  <div className="promoter-card">
                    <Activity size={20} className="text-emerald" />
                    <strong>National Stock Exchange of India Limited (NSE)</strong>
                    <span>The largest stock exchange in India</span>
                  </div>
                </div>

                <p>
                  Some of the prominent banks in the country have taken a stake in NSDL. Some of the important systems managed by NSDL include:
                </p>

                {/* Subsection: NSDL Depository System */}
                <div className="system-feature-block">
                  <div className="system-feature-header">
                    <h3 className="system-title">1. NSDL - Depository System</h3>
                    <a href="https://nsdl.co.in" target="_blank" rel="noreferrer" className="system-link">
                      <span>https://nsdl.co.in</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <p>
                    NSDL pioneered the concept of holding and settlement of securities (shares, debentures, bonds) in electronic form in India. NSDL has established a national infrastructure of international standards that handles most of the settlement of securities in dematerialised form in Indian capital market. This system provides for a safe and efficient form of holding the securities to millions of individual and corporate investors. Holding and settlement of securities in electronic form has considerably reduced the risk and time involved in dealing with paper form of securities.
                  </p>
                  <p>
                    NSDL aims at ensuring the safety and soundness of Indian market place by developing settlement solutions that increase efficiency, minimise risk and reduce costs. In the depository system, securities are held in depository accounts, which is more or less similar to holding funds in bank accounts. Transfer of ownership of securities is done through simple account transfers. This method does away with all the risks and hassles normally associated with paperwork. Consequently, the cost of transacting in a depository environment is considerably lower, as compared to transacting in paper certificates.
                  </p>

                  <div className="stats-highlight-pill">
                    <div className="stat-pill-item">
                      <strong>10.1M+</strong>
                      <span>Investor Accounts</span>
                    </div>
                    <div className="pill-divider"></div>
                    <div className="stat-pill-item">
                      <strong>11,545+</strong>
                      <span>Service Offices Across 1,328 Cities</span>
                    </div>
                    <div className="pill-divider"></div>
                    <div className="stat-pill-item">
                      <strong>$1,211 Billion</strong>
                      <span>Securities in Custody</span>
                    </div>
                  </div>
                </div>

              </div>
            </article>


            {/* ===================================================================
                SECTION 3: TAX INFORMATION NETWORK (TIN)
                =================================================================== */}
            <article className="about-article-card" id="tin">
              <div className="article-header">
                <div className="article-header-icon bg-amber-subtle">
                  <FileText size={24} />
                </div>
                <div>
                  <span className="article-eyebrow">National Tax Infrastructure</span>
                  <h2 className="article-title">2. NSDL - Tax Information Network (TIN)</h2>
                </div>
              </div>

              <div className="article-body">
                <p>
                  NSDL has established <strong>Tax Information Network (TIN)</strong> as a repository of tax related information on behalf of Income Tax Department (ITD). TIN is designed to make tax administration more effective, furnishing of returns convenient, reduce compliance cost and bring greater transparency.
                </p>
                <p>
                  TIN system connects nationwide users through its connected service centers called <strong>TIN Facilitation Centers (TIN FC)</strong> and web-based central system.
                </p>

                {/* Interactive Modern TIN Architecture Flow Diagram */}
                <div className="tin-architecture-diagram glass-panel">
                  <div className="diagram-title-tag">
                    <Sparkles size={14} className="text-cyan" />
                    <span>TIN Network Architecture & Transaction Flow</span>
                  </div>

                  <div className="tin-nodes-grid">
                    <div className="tin-node-card">
                      <div className="node-icon bg-blue-subtle"><Building2 size={18} /></div>
                      <strong>Income Tax Dept (ITD)</strong>
                      <span>Regulatory Authority</span>
                    </div>

                    <div className="tin-node-card">
                      <div className="node-icon bg-cyan-subtle"><Landmark size={18} /></div>
                      <strong>Collecting Banks</strong>
                      <span>TDS Tax Deposits</span>
                    </div>

                    <div className="tin-node-card">
                      <div className="node-icon bg-emerald-subtle"><Users size={18} /></div>
                      <strong>Tax Payers & Deductees</strong>
                      <span>Individual & Corporate</span>
                    </div>

                    <div className="tin-node-card">
                      <div className="node-icon bg-rose-subtle"><FileText size={18} /></div>
                      <strong>Tax Deductors</strong>
                      <span>Employers & Entities</span>
                    </div>
                  </div>

                  <div className="tin-core-hub">
                    <div className="hub-center-badge">
                      <Database size={24} className="text-blue" />
                      <div>
                        <strong>TIN Central System & TIN Website</strong>
                        <span>Repository of nationwide Tax & TDS Data (<a href="https://www.tin-nsdl.com" target="_blank" rel="noreferrer">www.tin-nsdl.com</a>)</span>
                      </div>
                    </div>
                    <div className="hub-sub-branches">
                      <span className="branch-tag">TIN Facilitation Centers (TIN FC)</span>
                      <span className="branch-tag">PAN / TAN Processing</span>
                      <span className="branch-tag">e-TDS Returns</span>
                      <span className="branch-tag">OLTAS Payment Data</span>
                    </div>
                  </div>
                </div>

                <p>
                  TIN system collects information about Tax Deducted at Source i.e. TDS from the tax deductors, the banks collecting the TDS on behalf of the Income Tax Department (ITD) and presents information to ITD and to the persons for whom the tax has been deducted.
                </p>

                <h4 className="functions-subheading">Various functions of TIN are:</h4>
                <ul className="modern-bullet-list">
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Receiving and storing of TDS returns in electronic format (e-TDS).</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Receiving and storing of Tax Payment Information (OLTAS).</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Registration of e-Return Intermediaries.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Processing of applications for issuance of Tax Deduction Account Numbers (TAN).</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Processing of applications for issuance of Permanent Account Number (PAN).</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Collection and processing of Annual Information Return (AIR) from specified persons for specified transactions on behalf of ITD.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Assessees can view the details of taxes paid and TDS deducted for them (based on PAN) on the Internet.</span>
                  </li>
                </ul>

                <div className="article-link-footer">
                  <a href="https://www.tin-nsdl.com" target="_blank" rel="noreferrer" className="external-portal-btn">
                    <span>Visit Tax Information Network (TIN) Website</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>


            {/* ===================================================================
                SECTION 4: CENTRAL RECORDKEEPING AGENCY (CRA - NPS)
                =================================================================== */}
            <article className="about-article-card" id="cra">
              <div className="article-header">
                <div className="article-header-icon bg-rose-subtle">
                  <PieChart size={24} />
                </div>
                <div>
                  <span className="article-eyebrow">Pension Modernization</span>
                  <h2 className="article-title">3. NSDL - Central Recordkeeping Agency (CRA)</h2>
                </div>
              </div>

              <div className="article-body">
                <p>
                  NSDL has established a <strong>Central Recordkeeping Agency (CRA) for the New Pension System (NPS)</strong> on behalf of the Pension Fund Regulatory and Development Authority (PFRDA).
                </p>
                <p>
                  NPS was introduced by Government of India for its new employees (except the Armed Forces) w.e.f. January 1, 2004. NPS is an important pension reform for the old age financial security. The CRA is a first of its kind venture in India and is critical to the successful operationalization of the NPS.
                </p>
                <p>
                  Under the NPS, each new government employee will open an account with CRA which will be identified through unique <strong>Permanent Retirement Account Number (PRAN)</strong>. In this system, deductions will be made from employee's salary on monthly basis and equal amount of contribution will be made by the Government. The amount will get invested through PFRDA appointed Pension Fund Managers (PFMs). The accumulated amount will be reflected in employee's Permanent Retirement Account while employee is working and shall use the accumulations at retirement to procure a pension for the rest of the life. Subscribers in this system shall enjoy certain facilities and rights including portability across jobs and locations, choices of selection of Pension Funds and investment schemes, freedom to switch between service providers and nationwide access.
                </p>

                <h4 className="functions-subheading">Main functions and responsibilities of the CRA include:</h4>
                <ul className="modern-bullet-list">
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Recordkeeping, administration and customer service functions for all subscribers of the NPS.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Issue of unique PRAN to each subscriber, maintaining a database of all PRANs issued and recording transactions relating to each subscriber's PRAN.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Acting as an operational interface between PFRDA and other NPS intermediaries such as Pension Funds, Trustee Bank, Annuity Service Providers etc.</span>
                  </li>
                </ul>

                <p>
                  CRA will monitor Subscriber contributions and instructions and transmit the information to the relevant Pension Funds and schemes as per the guidelines laid down by PFRDA. CRA will provide annual consolidated Statement of Transactions to each Subscriber and discharge such other duties and functions as may be determined by the guidelines, directions and regulations issued by the PFRDA from time to time.
                </p>
                <p>
                  CRA is also providing electronic interconnectivity to PFRDA, other linked entities like Trustee Bank, Pension Funds and Annuity Providers.
                </p>

                <div className="callout-box callout-blue">
                  <div className="callout-top">
                    <Globe size={18} className="text-blue" />
                    <strong>Universal NPS Access to All Citizens</strong>
                  </div>
                  <p>
                    From May 2009, PFRDA has opened the participation in NPS scheme to all citizens of the country so that every person (age group 18 - 55) whether employed or in business or otherwise can open a pension account with NSDL CRA and accumulate his/her savings to provide for old age security.
                  </p>
                </div>

                <div className="article-link-footer">
                  <a href="http://www.npscra.nsdl.co.in" target="_blank" rel="noreferrer" className="external-portal-btn">
                    <span>Visit Central Recordkeeping Agency (CRA) Portal</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>


            {/* ===================================================================
                SECTION 5: NASSCOM
                =================================================================== */}
            <article className="about-article-card" id="nasscom">
              <div className="article-header">
                <div className="article-header-icon bg-rose-subtle">
                  <Award size={24} />
                </div>
                <div>
                  <span className="article-eyebrow">Industry Apex Trade Body</span>
                  <h2 className="article-title">NASSCOM (www.nasscom.in)</h2>
                </div>
              </div>

              <div className="article-body">
                <div className="nasscom-brand-badge-row">
                  <span className="nasscom-bold-title">nasscom</span>
                  <span className="nasscom-tagline-text">National Association of Software and Service Companies</span>
                </div>

                <p>
                  <strong>NASSCOM is India's National Association of Software and Service Companies</strong>, the premier trade body and the chamber of commerce of the IT software and services industry in India. NASSCOM is a global trade body with over 1200 members. NASSCOM's member companies are in the business of software development, software services, software products, IT-enabled / BPO services and e-commerce.
                </p>
                <p>
                  NASSCOM was set up to facilitate business and trade in software and services and to encourage advancement of research in software technology. NASSCOM is committed to work proactively to encourage its members to adopt world class management practices, build and uphold highest quality standards and become globally competitive.
                </p>

                <div className="vision-box glass-panel">
                  <span className="vision-eyebrow">NASSCOM's Core Vision</span>
                  <p className="vision-quote">
                    "NASSCOM's vision is to establish India as the 21st century's software powerhouse and position the country as the global sourcing hub for software and services."
                  </p>
                </div>

                <p>
                  The primary objective of NASSCOM is to act as a catalyst for the growth of the software driven IT industry in India. Other goals include facilitation of trade and business in software and services, encouragement and advancement of research, propagation of education and employment, enabling the growth of the Indian economy and provide compelling business benefits to global economies by global sourcing.
                </p>

                <div className="callout-box callout-rose">
                  <div className="callout-top">
                    <ShieldCheck size={18} className="text-rose" />
                    <strong>The "Trusted Sourcing" Initiative</strong>
                  </div>
                  <p>
                    Under its ambit of <strong>"Trusted Sourcing"</strong>, NASSCOM has taken up the industry initiative of developing a national database of registered and verified workforce for its member companies as <strong>'National Skills Registry (NSR)'</strong>. NASSCOM has engaged NDML for implementing NSR initiative.
                  </p>
                </div>

                <div className="article-link-footer">
                  <a href="https://www.nasscom.in" target="_blank" rel="noreferrer" className="external-portal-btn">
                    <span>Visit Official NASSCOM Website</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>

          </main>

        </div>
      </section>

    </div>
  );
}
