import React, { useState } from 'react';
import { 
  Newspaper, Building2, BellRing, ArrowRight, 
  ExternalLink, CheckCircle, Clock, ChevronRight 
} from 'lucide-react';
import './NewsTicker.css';

const NEWS_ITEMS = [
  {
    id: 1,
    type: 'company',
    title: 'ILT Digilawyer Private Limited Empanelled with NSR',
    date: 'Aug 14, 2026',
    tag: 'New Subscriber',
    summary: 'Legal tech enterprise joins NSR ecosystem to automate background credentials for compliance teams.'
  },
  {
    id: 2,
    type: 'company',
    title: 'IAAXIN TECH LABS INDIA PRIVATE LIMITED Joins Network',
    date: 'Aug 10, 2026',
    tag: 'New Subscriber',
    summary: 'AI analytics enterprise adopts NSR Exit Employment Exchange for talent transition.'
  },
  {
    id: 3,
    type: 'company',
    title: 'WebBee eSolutions Private Limited Joins as Subscriber',
    date: 'Aug 04, 2026',
    tag: 'New Subscriber',
    summary: 'E-commerce software giant completes NSR integration across India offices.'
  },
  {
    id: 4,
    type: 'regulatory',
    title: 'NASSCOM Guidance on Tamper-Proof Digital Verification',
    date: 'Jul 28, 2026',
    tag: 'Advisory',
    summary: 'Updated guidelines for candidate Aadhaar verification and ISO 27001 data governance.'
  },
  {
    id: 5,
    type: 'regulatory',
    title: 'NSDL Database Management Announces Enhanced API v3',
    date: 'Jul 15, 2026',
    tag: 'Tech Release',
    summary: 'Instant background status webhooks now available for enterprise Workday and SAP integrations.'
  }
];

export default function NewsTicker({ onSelectNews }) {
  const [filter, setFilter] = useState('all');

  const filteredNews = filter === 'all' 
    ? NEWS_ITEMS 
    : NEWS_ITEMS.filter(item => item.type === filter);

  return (
    <section className="news-section" id="news">
      <div className="container">
        
        <div className="news-container-card glass-panel">
          {/* Header Row */}
          <div className="news-header">
            <div className="news-header-left">
              <div className="news-icon-badge">
                <Newspaper size={20} />
              </div>
              <div>
                <h3 className="news-main-title">NSR Media & Registry Updates</h3>
                <span className="news-sub-text">Empanelled companies & official NASSCOM announcements</span>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="news-filter-tabs">
              <button 
                className={`news-tab-btn ${filter === 'all' ? 'is-active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Updates
              </button>
              <button 
                className={`news-tab-btn ${filter === 'company' ? 'is-active' : ''}`}
                onClick={() => setFilter('company')}
              >
                New Companies
              </button>
              <button 
                className={`news-tab-btn ${filter === 'regulatory' ? 'is-active' : ''}`}
                onClick={() => setFilter('regulatory')}
              >
                Advisories
              </button>
            </div>
          </div>

          {/* News Grid */}
          <div className="news-cards-grid">
            {filteredNews.map(item => (
              <div key={item.id} className="news-item-card" onClick={() => onSelectNews && onSelectNews(item)}>
                <div className="news-item-top">
                  <span className={`news-type-pill ${item.type === 'company' ? 'pill-blue' : 'pill-amber'}`}>
                    {item.tag}
                  </span>
                  <div className="news-date">
                    <Clock size={12} />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h4 className="news-item-title">{item.title}</h4>
                <p className="news-item-summary">{item.summary}</p>

                <div className="news-item-footer">
                  <span className="news-read-more">
                    Read circular <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <div className="news-footer-strip">
            <div className="news-footer-left">
              <BellRing size={16} className="text-cyan" />
              <span>Are you a company looking to verify credentials?</span>
            </div>
            <a href="#companies" className="btn btn-outline-primary btn-sm">
              <span>Empanel Your Organization</span>
              <ArrowRight size={14} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
