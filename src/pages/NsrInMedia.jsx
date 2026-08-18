import React, { useState } from 'react';
import { 
  Newspaper, Quote, Award, ExternalLink, Calendar, 
  Building2, Users, ShieldCheck, ChevronRight, ArrowRight, 
  Sparkles, CheckCircle2, BookmarkCheck, PlayCircle, HelpCircle, FileText
} from 'lucide-react';
import './NsrInMedia.css';

const LEADERS = [
  {
    id: 1,
    name: 'Mr. R. Chandrashekar',
    title: 'President, NASSCOM',
    tagline: 'On IT & BPM Industry Growth & Security Excellence',
    quote: 'Indian IT&BPM industry has been making significant contribution to the success of Exports revenue from the country. Today the IT and BPM industry is set to deliver an overall revenue of USD 118 bn representing a growth of 12% over the last year. The IT&BPM industry today contributes to around 8.1% towards GDP growth in country and employs 3.1 million people.',
    initials: 'RC',
    color: '#e11d48'
  },
  {
    id: 2,
    name: 'Mr. Som Mittal',
    title: 'Ex President, NASSCOM',
    tagline: 'Personal Registration & Unanimous Industry Acceptance',
    quote: 'I have personally registered myself on the NSR along with my team. It is heartening to note that there has been a near unanimous acceptance of this initiative. This Registry, a first-of-its-kind, will help us raise the standards of security and safety of our industry and employees to a great extent.',
    initials: 'SM',
    color: '#0284c7'
  },
  {
    id: 3,
    name: 'Mr. Kiran Karnik',
    title: 'Former President, NASSCOM',
    tagline: 'Making India the "Fort Knox" of Digital Security',
    quote: 'We will leave no stone unturned to make India the "Fort Knox" of security, positioning ourselves as the gold standard for security as we are today for quality. NSR will dramatically raise the level of security and protect all the honest people working in this industry.',
    initials: 'KK',
    color: '#2563eb'
  },
  {
    id: 4,
    name: 'Mr. Nandkumar Saravade',
    title: 'Former Director, Cyber Security NASSCOM',
    tagline: 'NSR a Win-Win for all. NSR will maintain India\'s global competitive advantage',
    quote: 'NSR provides a unified digital trust framework that safeguards honest professionals while reinforcing India\'s unmatched leadership in global IT cybersecurity, background integrity, and digital compliance standards across international client engagements.',
    initials: 'NS',
    color: '#059669'
  }
];

const PRESS_ARTICLES = [
  {
    id: 1,
    title: 'IT firms start background checks to fight CV forgery',
    source: 'mydigitalfc.com',
    date: '21 April 2011',
    snippet: 'Leading technology firms across India accelerate mandatory candidate enrollment on the National Skills Registry to eliminate fraudulent tenure claims and academic fabrications.',
    category: 'Industry Adoption'
  },
  {
    id: 2,
    title: 'ANMI joins National Skills Registry',
    source: 'Business Standard',
    date: '31 March 2011',
    snippet: 'Association of National Exchanges Members of India (ANMI) integrates with NSR to extend verified identity governance across capital market and financial intermediaries.',
    category: 'Market Integration'
  },
  {
    id: 3,
    title: 'NASSCOM skills registry for BFSI sector to combat resume fraud',
    source: 'Financial Express',
    date: '15 July 2013',
    snippet: 'Banking and financial institutions adopt the centralized NSR database architecture managed by NDML for real-time background screening of compliance analysts.',
    category: 'BFSI Expansion'
  },
  {
    id: 4,
    title: 'NSR biometric authentication adopted by over 300 IT enterprises',
    source: 'The Economic Times',
    date: '08 October 2017',
    snippet: 'India\'s digital credential repository hits record milestones as enterprise tech giants mandate verified ITPIN numbers for all incoming campus hires and lateral joiners.',
    category: 'Milestones'
  },
  {
    id: 5,
    title: 'NDML expands digital verification infrastructure for Indian tech talent',
    source: 'LiveMint',
    date: '19 February 2020',
    snippet: 'Cloud verification APIs and the Exit Employment Exchange (EEE) rollout streamline cross-industry talent mobility with zero turnaround friction.',
    category: 'Tech Release'
  }
];

export default function NsrInMedia({ onNavigateHome, onNavigate, onOpenRegister, onOpenTour, onOpenGrievance }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="media-page-wrapper">
      
      {/* Hero Header */}
      <section className="media-hero-section">
        <div className="container">
          <div className="media-breadcrumbs">
            <button onClick={onNavigateHome} className="breadcrumb-link">Home</button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">NSR in Media</span>
          </div>

          <div className="media-hero-content">
            <span className="badge badge-cyan">Industry Voice & Press Coverage</span>
            <h1 className="media-hero-title">National Skills Registry in Media</h1>
            <p className="media-hero-subtitle">
              Hear from apex industry leaders, NASSCOM leadership, and premier national publications on how NSR is elevating India's global IT security benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="media-body-section">
        <div className="container media-layout-grid">
          
          {/* Main Content Column */}
          <main className="media-main-column">
            
            {/* Section 1: Leaders Speak (Exact Screenshot Content) */}
            <div className="leaders-speak-section">
              <div className="section-title-strip">
                <div className="title-icon-badge bg-rose-subtle">
                  <Quote size={22} className="text-rose" />
                </div>
                <div>
                  <span className="strip-eyebrow">Executive Insights</span>
                  <h2 className="strip-heading">Leaders Speak</h2>
                </div>
              </div>

              <div className="leaders-cards-list">
                {LEADERS.map((leader) => (
                  <div key={leader.id} className="leader-speech-card glass-panel">
                    <div className="leader-card-header">
                      <div className="leader-avatar" style={{ backgroundColor: `${leader.color}15`, color: leader.color }}>
                        {leader.initials}
                      </div>
                      <div className="leader-profile-meta">
                        <h3 className="leader-name">{leader.name}</h3>
                        <span className="leader-title-tag">{leader.title}</span>
                        <span className="leader-speech-topic">{leader.tagline}</span>
                      </div>
                    </div>

                    <div className="leader-quote-body">
                      <Quote size={24} className="quote-watermark" />
                      <p className="quote-text">"{leader.quote}"</p>
                    </div>

                    <div className="leader-card-footer">
                      <span className="speech-badge">
                        <BookmarkCheck size={13} />
                        <span>Official NASSCOM Statement</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: NSR in Media / Press Articles (Exact Screenshot Content) */}
            <div className="press-coverage-section">
              <div className="section-title-strip">
                <div className="title-icon-badge bg-blue-subtle">
                  <Newspaper size={22} className="text-blue" />
                </div>
                <div>
                  <span className="strip-eyebrow">National Press Coverage</span>
                  <h2 className="strip-heading">NSR in Media & Publications</h2>
                </div>
              </div>

              <div className="articles-cards-grid">
                {PRESS_ARTICLES.map((article) => (
                  <div 
                    key={article.id} 
                    className="press-article-card glass-panel"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <div className="article-top-meta">
                      <span className="article-cat-pill">{article.category}</span>
                      <div className="article-date-row">
                        <Calendar size={12} />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <h3 className="article-headline">{article.title}</h3>
                    <span className="article-publication">Source: <strong>{article.source}</strong></span>
                    <p className="article-snippet">{article.snippet}</p>

                    <div className="article-card-footer">
                      <span className="read-article-link">
                        <span>Read full circular</span>
                        <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </main>

          {/* Right Sticky Sidebar */}
          <aside className="media-sidebar">
            <div className="media-sidebar-panel glass-panel">
              <span className="sidebar-heading">QUICK EXPLORE</span>
              
              <div className="sidebar-links-list">
                <button className="sidebar-link-btn" onClick={() => onOpenTour('professionals')}>
                  <PlayCircle size={16} className="text-cyan" />
                  <div>
                    <strong>NSR Interactive Tour</strong>
                    <span>Visual demo of the registry</span>
                  </div>
                </button>

                <button className="sidebar-link-btn" onClick={() => onNavigate('know-nsr', 'milestones')}>
                  <Sparkles size={16} className="text-blue" />
                  <div>
                    <strong>NSR Milestones & Chart</strong>
                    <span>Growth history from 2006 to 2021</span>
                  </div>
                </button>

                <button className="sidebar-link-btn" onClick={() => onNavigate('know-nsr', 'steering-committee')}>
                  <Users size={16} className="text-emerald" />
                  <div>
                    <strong>NSR Steering Committee</strong>
                    <span>12 Industry Committee Members</span>
                  </div>
                </button>

                <button className="sidebar-link-btn" onClick={onOpenRegister}>
                  <ShieldCheck size={16} className="text-rose" />
                  <div>
                    <strong>Join as Professional</strong>
                    <span>Create your permanent ITPIN</span>
                  </div>
                </button>
              </div>

              <div className="sidebar-quote-box">
                <p className="sidebar-quote-p">
                  "NSR is a security best practice for the Industry and assures identity security, industry acceptance to honest professionals."
                </p>
                <span className="sidebar-quote-src">— NASSCOM Executive Council</span>
              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* Article Preview Modal */}
      {selectedArticle && (
        <div className="modal-backdrop" onClick={() => setSelectedArticle(null)}>
          <div className="modal-container article-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body-wrapper">
              <div className="article-modal-top">
                <span className="badge badge-cyan">{selectedArticle.category}</span>
                <span className="modal-date">{selectedArticle.date} • {selectedArticle.source}</span>
              </div>

              <h3 className="modal-article-title">{selectedArticle.title}</h3>
              
              <div className="modal-article-body">
                <p>{selectedArticle.snippet}</p>
                <p>
                  The National Skills Registry (NSR) continues to be acknowledged by major national publications and news agencies as India's central digital trust framework, accelerating pre-employment background verification and promoting career transparency.
                </p>
              </div>

              <div className="modal-article-actions">
                <button className="btn btn-primary" onClick={() => setSelectedArticle(null)}>
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
