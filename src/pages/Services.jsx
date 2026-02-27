import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCloud, FiCode, FiTrendingUp, FiShield, FiDatabase, FiUsers, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import ServiceCard from '../components/ServiceCard';
import { useReveal } from '../hooks/useReveal';
import './Services.css';

const ALL_SERVICES = [
    {
        id: 'digital',
        icon: FiTrendingUp,
        title: 'Digital Transformation',
        description: 'Reimagine your entire business model. We guide organizations through comprehensive digital transformation — from process automation and legacy modernization to customer experience reinvention.',
        tags: ['Strategy', 'Automation', 'CX', 'Change Management'],
        path: '/services#digital',
        deliverables: ['Digital Maturity Assessment', 'Transformation Roadmap', 'Agile Implementation', 'Change Management'],
    },
    {
        id: 'cloud',
        icon: FiCloud,
        title: 'Cloud Solutions',
        description: 'Migrate, optimize, and scale. Whether you\'re lifting-and-shifting, re-architecting, or building cloud-native, our certified engineers deliver resilient, cost-efficient cloud infrastructure.',
        tags: ['AWS', 'Azure', 'GCP', 'Multi-cloud', 'DevOps'],
        path: '/services#cloud',
        featured: true,
        deliverables: ['Cloud Assessment', 'Migration Planning', 'FinOps Optimization', 'Managed Services'],
    },
    {
        id: 'product',
        icon: FiCode,
        title: 'Product Development',
        description: 'From MVP to enterprise scale. Our polyglot engineering teams design, build, test, and ship high-performance software products that users love and businesses depend on.',
        tags: ['React', 'Laravel', 'Node.js', 'Mobile', 'APIs'],
        path: '/services#product',
        deliverables: ['Product Discovery', 'UX/UI Design', 'Agile Engineering', 'QA & DevOps'],
    },
    {
        id: 'data',
        icon: FiDatabase,
        title: 'Data & Analytics',
        description: 'Data is your competitive edge — we unlock it. From data warehousing and ETL pipelines to AI/ML models and executive dashboards, we create full-stack data solutions.',
        tags: ['BI', 'Machine Learning', 'Data Engineering', 'MLOps'],
        path: '/services#data',
        deliverables: ['Data Strategy', 'Lakehouse Architecture', 'ML Modelling', 'BI Dashboards'],
    },
    {
        id: 'security',
        icon: FiShield,
        title: 'Cybersecurity',
        description: 'Security is not a feature — it\'s a foundation. We embed security into every layer of your technology stack with proactive threat intelligence and compliance frameworks.',
        tags: ['SOC 2', 'ISO 27001', 'GDPR', 'Pen Testing', 'Zero Trust'],
        path: '/services#security',
        deliverables: ['Security Audit', 'Compliance Framework', 'Penetration Testing', 'SIEM Implementation'],
    },
    {
        id: 'consulting',
        icon: FiUsers,
        title: 'IT Consulting',
        description: 'Strategic technology advisors for critical decisions. Our principals work alongside your leadership to shape technology strategy, vendor selection, and organizational design.',
        tags: ['Advisory', 'CTO-as-a-Service', 'Vendor Management', 'Architecture'],
        path: '/services#consulting',
        deliverables: ['Technology Audit', 'IT Roadmap', 'Vendor Assessment', 'Architecture Review'],
    },
];

const FILTERS = ['All', 'Digital', 'Cloud', 'Product', 'Data', 'Security', 'Consulting'];

export default function Services() {
    const [activeFilter, setActiveFilter] = useState('All');
    const revealRef = useReveal();

    useEffect(() => {
        document.title = 'Services — OPMW | Technology & Business Solutions';
    }, []);

    const filtered = activeFilter === 'All'
        ? ALL_SERVICES
        : ALL_SERVICES.filter(s => s.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())) || s.title.toLowerCase().includes(activeFilter.toLowerCase()));

    return (
        <main id="main-content">
            {/* Page Hero */}
            <section className="page-hero" aria-labelledby="services-page-heading">
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <nav aria-label="Breadcrumb">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li aria-current="page">Services</li>
                        </ol>
                    </nav>
                    <div className="section-label">
                        <span className="section-label--dot" />
                        What We Offer
                    </div>
                    <h1 id="services-page-heading" className="page-hero__title">
                        End-to-End Technology <br />
                        <span className="text-gradient-gold">Services & Solutions</span>
                    </h1>
                    <p className="page-hero__sub">
                        Full-spectrum technology services designed to help enterprises innovate faster, operate smarter, and grow sustainably.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="services-filter-bar" aria-label="Filter services">
                <div className="container">
                    <div role="group" aria-label="Service category filters" className="filter-group">
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                className={`filter-btn ${activeFilter === f ? 'filter-btn--active' : ''}`}
                                onClick={() => setActiveFilter(f)}
                                aria-pressed={activeFilter === f}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section" ref={revealRef} aria-label="Services list">
                <div className="container">
                    <div className="services-grid-full reveal">
                        {filtered.map((s) => (
                            <article key={s.id} id={s.id} className={`service-detail card ${s.featured ? 'service-detail--featured' : ''}`}>
                                <div className="service-detail__header">
                                    <div className="service-detail__icon-wrap" aria-hidden="true">
                                        {s.icon && <s.icon size={28} />}
                                    </div>
                                    <div>
                                        <h2 className="heading-3 service-detail__title">{s.title}</h2>
                                        <div className="service-detail__tags">
                                            {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                        </div>
                                    </div>
                                </div>
                                <p className="service-detail__desc">{s.description}</p>
                                <div className="service-detail__deliverables">
                                    <h3 className="service-detail__del-title">Key Deliverables</h3>
                                    <ul className="service-detail__del-list">
                                        {s.deliverables.map(d => (
                                            <li key={d} className="service-detail__del-item">
                                                <FiCheckCircle size={16} aria-hidden="true" /> {d}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn--primary service-detail__cta">
                                    Get Started <FiArrowRight aria-hidden="true" />
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner section" aria-labelledby="services-cta-heading">
                <div className="container cta-banner__inner">
                    <div className="cta-banner__text reveal-left">
                        <h2 id="services-cta-heading" className="heading-1" style={{ color: 'white' }}>
                            Not Sure Where to Start?
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: 'var(--space-3)' }}>
                            Book a free 30-minute discovery call. We'll map your challenges to the right solutions.
                        </p>
                    </div>
                    <div className="cta-banner__actions reveal-right">
                        <Link to="/contact#demo" className="btn btn--gold btn--lg">
                            Book a Free Call <FiArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
