import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FiCloud, FiCode, FiTrendingUp, FiShield, FiDatabase,
    FiUsers, FiArrowRight, FiStar, FiCheckCircle,
} from 'react-icons/fi';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { useReveal } from '../hooks/useReveal';
import './Home.css';

const SERVICES = [
    {
        icon: FiTrendingUp,
        title: 'Digital Transformation',
        description: 'Reimagine your business processes with end-to-end digital strategies that drive efficiency, agility, and measurable growth.',
        tags: ['Strategy', 'Automation', 'CX'],
        path: '/services#digital',
    },
    {
        icon: FiCloud,
        title: 'Cloud Solutions',
        description: 'Migrate, optimize, and scale with enterprise-grade cloud architectures built for reliability and performance.',
        tags: ['AWS', 'Azure', 'GCP'],
        path: '/services#cloud',
        featured: true,
    },
    {
        icon: FiCode,
        title: 'Product Development',
        description: 'From ideation to deployment — we engineer world-class software products that solve real problems at scale.',
        tags: ['React', 'Laravel', 'APIs'],
        path: '/services#product',
    },
    {
        icon: FiDatabase,
        title: 'Data & Analytics',
        description: 'Turn raw data into strategic insights with custom dashboards, BI tools, and AI/ML-powered intelligence.',
        tags: ['BI', 'ML', 'Analytics'],
        path: '/services#data',
    },
    {
        icon: FiShield,
        title: 'Cybersecurity',
        description: 'Protect your assets, reputation, and data with layered security frameworks and continuous compliance monitoring.',
        tags: ['SOC 2', 'ISO 27001', 'GDPR'],
        path: '/services#security',
    },
    {
        icon: FiUsers,
        title: 'IT Consulting',
        description: 'Access senior technology advisors who align your IT roadmap with business objectives for maximum ROI.',
        tags: ['Advisory', 'Roadmap', 'Audit'],
        path: '/services#consulting',
    },
];

const PROJECTS = [
    {
        title: 'FinTech Platform Relaunch',
        category: 'Product',
        description: 'End-to-end redesign and development of a multi-tenant financial platform serving 500k+ users.',
        year: '2024',
        tech: ['React', 'Laravel', 'AWS'],
        path: '/projects/fintech',
    },
    {
        title: 'Healthcare Data Hub',
        category: 'Data',
        description: 'HIPAA-compliant data lakehouse and real-time analytics dashboard for a national healthcare network.',
        year: '2024',
        tech: ['Python', 'Snowflake', 'Tableau'],
        path: '/projects/healthcare',
    },
    {
        title: 'E-Commerce Growth Engine',
        category: 'Digital',
        description: 'Full digital transformation for a retail brand — 3x conversion rate improvement in 6 months.',
        year: '2023',
        tech: ['Next.js', 'Node', 'Postgres'],
        path: '/projects/ecommerce',
    },
];

const TESTIMONIALS = [
    {
        name: 'Sarah Mitchell',
        role: 'CTO, ArcLight Corp',
        quote: 'OPMW delivered beyond expectations. Their cloud migration halved our infrastructure costs while doubling uptime. A truly world-class team.',
        rating: 5,
        avatar: 'SM',
    },
    {
        name: 'James Okonkwo',
        role: 'VP Engineering, Noven Health',
        quote: 'From strategy to execution, OPMW was the decisive partner we needed. The data platform they built now powers decisions for our entire organization.',
        rating: 5,
        avatar: 'JO',
    },
    {
        name: 'Priya Sharma',
        role: 'CEO, Luxe Retail Group',
        quote: 'Our digital transformation journey was a success because of OPMW. Their team understood our business inside out.',
        rating: 5,
        avatar: 'PS',
    },
];

const CLIENTS = ['ArcLight Corp', 'Noven Health', 'Luxe Retail', 'Apex Finance', 'GreenBuild', 'Vantage AI'];

const WHY_OPMW = [
    'Dedicated engagement model — your success is our KPI',
    'Senior-led delivery with transparent communication',
    '98% on-time delivery across 200+ projects',
    'Post-launch support and continuous improvement',
    'Security-first, compliance-aware development',
    'Proven ROI across healthcare, fintech, and enterprise',
];

export default function Home() {
    const revealRef = useReveal();

    useEffect(() => {
        document.title = 'OPMW — One Place Multi-Work | Technology & Business Consulting';
    }, []);

    return (
        <main id="main-content">
            {/* Hero */}
            <Hero />

            {/* Client Logos */}
            <section className="clients section--sm" aria-label="Our clients">
                <div className="container">
                    <p className="clients__label">Trusted by innovative companies worldwide</p>
                    <div className="clients__logos">
                        {CLIENTS.map((c) => (
                            <div key={c} className="clients__logo-item" aria-label={c}>
                                {c}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="section" ref={revealRef} aria-labelledby="services-heading">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <div className="section-label">
                            <span className="section-label--dot" />
                            What We Do
                        </div>
                        <h2 id="services-heading" className="heading-1">
                            Comprehensive <span className="text-gradient-primary">Technology</span> Services
                        </h2>
                        <p className="text-lead" style={{ maxWidth: 620, margin: '0 auto' }}>
                            From strategy to execution, we offer the full spectrum of services your organization needs to thrive in the digital era.
                        </p>
                    </div>
                    <div className="services-grid reveal">
                        {SERVICES.map((s) => (
                            <ServiceCard key={s.title} {...s} />
                        ))}
                    </div>
                    <div className="text-center reveal" style={{ marginTop: 'var(--space-10)' }}>
                        <Link to="/services" className="btn btn--primary btn--lg">
                            View All Services <FiArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why OPMW */}
            <section className="why-opmw section" aria-labelledby="why-heading">
                <div className="container why-opmw__inner">
                    <div className="why-opmw__text reveal-left">
                        <div className="section-label section-label--gold">
                            <span className="section-label--dot" />
                            Why OPMW
                        </div>
                        <h2 id="why-heading" className="heading-1">
                            The Partner That <span className="text-gradient-primary">Delivers</span>
                        </h2>
                        <p className="text-lead" style={{ marginBottom: 'var(--space-8)' }}>
                            We don't just write code — we architect futures. Our senior-led teams bring deep domain expertise and a commitment to outcomes that last.
                        </p>
                        <ul className="why-opmw__list" aria-label="OPMW advantages">
                            {WHY_OPMW.map((item) => (
                                <li key={item} className="why-opmw__item">
                                    <FiCheckCircle className="why-opmw__check" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/about" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-8)' }}>
                            Our Story <FiArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="why-opmw__visual reveal-right">
                        <div className="why-opmw__stat-grid">
                            {[
                                { v: '200+', l: 'Projects', d: 'Delivered' },
                                { v: '50+', l: 'Enterprise', d: 'Clients' },
                                { v: '12+', l: 'Years of', d: 'Excellence' },
                                { v: '98%', l: 'On-time', d: 'Delivery' },
                            ].map(({ v, l, d }) => (
                                <div key={v} className="why-opmw__stat-box">
                                    <span className="why-opmw__stat-val">{v}</span>
                                    <span className="why-opmw__stat-label">{l}<br />{d}</span>
                                </div>
                            ))}
                        </div>
                        <div className="why-opmw__badge">
                            <FiStar className="why-opmw__badge-icon" aria-hidden="true" />
                            <div>
                                <span className="why-opmw__badge-val">4.9 / 5.0</span>
                                <span className="why-opmw__badge-sub">Average client satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="section" ref={revealRef} aria-labelledby="projects-heading">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <div className="section-label">
                            <span className="section-label--dot" />
                            Case Studies
                        </div>
                        <h2 id="projects-heading" className="heading-1">
                            Work That <span className="text-gradient-primary">Speaks</span>
                        </h2>
                        <p className="text-lead" style={{ maxWidth: 560, margin: '0 auto' }}>
                            Real results for real businesses. Explore how we've helped organizations transform, scale, and lead.
                        </p>
                    </div>
                    <div className="projects-grid reveal">
                        {PROJECTS.map((p, i) => (
                            <ProjectCard key={p.title} {...p} index={i} />
                        ))}
                    </div>
                    <div className="text-center reveal" style={{ marginTop: 'var(--space-10)' }}>
                        <Link to="/projects" className="btn btn--outline-primary btn--lg">
                            All Projects <FiArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials section" aria-labelledby="testimonials-heading">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <div className="section-label">
                            <span className="section-label--dot" />
                            Client Stories
                        </div>
                        <h2 id="testimonials-heading" className="heading-1">
                            What Our Clients <span className="text-gradient-primary">Say</span>
                        </h2>
                    </div>
                    <div className="testimonials-grid reveal">
                        {TESTIMONIALS.map((t) => (
                            <blockquote key={t.name} className="testimonial-card card card-body">
                                <div className="testimonial-card__stars" aria-label={`${t.rating} stars`}>
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <FiStar key={i} className="testimonial-star" aria-hidden="true" />
                                    ))}
                                </div>
                                <p className="testimonial-card__quote">"{t.quote}"</p>
                                <footer className="testimonial-card__author">
                                    <div className="testimonial-card__avatar" aria-hidden="true">{t.avatar}</div>
                                    <div>
                                        <cite className="testimonial-card__name">{t.name}</cite>
                                        <span className="testimonial-card__role">{t.role}</span>
                                    </div>
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner section" aria-labelledby="cta-heading">
                <div className="container cta-banner__inner">
                    <div className="cta-banner__text reveal-left">
                        <h2 id="cta-heading" className="heading-1" style={{ color: 'white' }}>
                            Ready to Build <br />Something <span className="text-gradient-gold">Extraordinary?</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'var(--text-lg)', marginTop: 'var(--space-4)' }}>
                            Let's talk about how OPMW can accelerate your digital roadmap. No pressure — just possibilities.
                        </p>
                    </div>
                    <div className="cta-banner__actions reveal-right">
                        <Link to="/contact#demo" className="btn btn--gold btn--lg">
                            Request a Demo <FiArrowRight aria-hidden="true" />
                        </Link>
                        <Link to="/contact" className="btn btn--outline btn--lg">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
