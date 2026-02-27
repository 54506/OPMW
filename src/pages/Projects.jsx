import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import ProjectCard from '../components/ProjectCard';
import { useReveal } from '../hooks/useReveal';
import './Services.css';
import './Projects.css';

const PROJECTS = [
    { title: 'FinTech Platform Relaunch', category: 'Product', description: 'End-to-end redesign and development of a multi-tenant financial platform serving 500k+ users. Reduced load time by 70%, boosted conversion by 35%.', year: '2024', tech: ['React', 'Laravel', 'AWS RDS', 'Stripe'], path: '/projects/fintech' },
    { title: 'Healthcare Data Hub', category: 'Data & Analytics', description: 'HIPAA-compliant data lakehouse and real-time analytics dashboard powering clinical decisions for a national healthcare network.', year: '2024', tech: ['Python', 'Snowflake', 'Tableau', 'dbt'], path: '/projects/healthcare' },
    { title: 'E-Commerce Growth Engine', category: 'Digital Transformation', description: 'Full digital transformation for a retail brand — 3x conversion rate improvement and 60% reduction in cart abandonment in 6 months.', year: '2023', tech: ['Next.js', 'Node', 'PostgreSQL', 'Stripe'], path: '/projects/ecommerce' },
    { title: 'Cloud Migration: 500-Server Estate', category: 'Cloud', description: 'Lift-and-shift + re-architecture of a 500-server on-prem estate to AWS, slashing infrastructure costs by 48%.', year: '2023', tech: ['AWS', 'Terraform', 'Docker', 'Kubernetes'], path: '/projects/cloud-migration' },
    { title: 'AI-Powered Talent Platform', category: 'Product', description: 'Built a smart talent matching engine using NLP and ML, reducing hiring time by 40% for an HR technology company.', year: '2022', tech: ['Python', 'FastAPI', 'React', 'OpenAI'], path: '/projects/talent-ai' },
    { title: 'InsurTech Policy Engine', category: 'Product', description: 'Microservices-based policy management system processing 50k+ policies daily with 99.99% uptime SLA.', year: '2022', tech: ['Java', 'Spring', 'Kafka', 'MongoDB'], path: '/projects/insurtech' },
];

const CLIENT_LOGOS = ['ArcLight Corp', 'Noven Health', 'Luxe Retail', 'Apex Finance', 'GreenBuild', 'Vantage AI', 'TerraLog', 'Solven Labs'];

export default function Projects() {
    const revealRef = useReveal();
    useEffect(() => { document.title = 'Projects — OPMW | Case Studies & Client Work'; }, []);

    return (
        <main id="main-content">
            <section className="page-hero" aria-labelledby="projects-page-heading">
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <nav aria-label="Breadcrumb">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li aria-current="page">Projects</li>
                        </ol>
                    </nav>
                    <div className="section-label">
                        <span className="section-label--dot" />
                        Our Work
                    </div>
                    <h1 id="projects-page-heading" className="page-hero__title">
                        Transformative Projects, <br />
                        <span className="text-gradient-gold">Measurable Results</span>
                    </h1>
                    <p className="page-hero__sub">
                        From enterprise platforms to AI-powered products — explore how we've helped leading organizations solve complex challenges.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section" ref={revealRef} aria-label="Project case studies">
                <div className="container">
                    <div className="projects-page-grid reveal">
                        {PROJECTS.map((p, i) => (
                            <ProjectCard key={p.title} {...p} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Logos */}
            <section className="section" style={{ background: 'var(--color-neutral-50)' }} aria-label="Our clients">
                <div className="container text-center">
                    <div className="section-label" style={{ justifyContent: 'center' }}>
                        <span className="section-label--dot" />
                        Trusted Partners
                    </div>
                    <h2 className="heading-2" style={{ marginBottom: 'var(--space-10)' }}>
                        Companies That Trust <span className="text-gradient-primary">OPMW</span>
                    </h2>
                    <div className="clients-logos-grid reveal">
                        {CLIENT_LOGOS.map(c => (
                            <div key={c} className="client-logo-box">
                                <span>{c}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-banner section" aria-labelledby="projects-cta">
                <div className="container cta-banner__inner">
                    <div className="cta-banner__text reveal-left">
                        <h2 id="projects-cta" className="heading-1" style={{ color: 'white' }}>Want to Be Our Next Success Story?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: 'var(--space-3)' }}>Let's build something that matters.</p>
                    </div>
                    <div className="cta-banner__actions reveal-right">
                        <Link to="/contact" className="btn btn--gold btn--lg">Get a Quote <FiArrowRight aria-hidden="true" /></Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
