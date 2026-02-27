import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiUsers, FiTarget, FiHeart } from 'react-icons/fi';
import { useReveal } from '../hooks/useReveal';
import './Services.css';
import './About.css';

const TEAM = [
    { name: 'Alexandra Chen', role: 'CEO & Co-founder', initials: 'AC', bio: '15+ years leading enterprise digital transformations across APAC, EMEA, and North America.' },
    { name: 'Marcus Johnson', role: 'CTO & Co-founder', initials: 'MJ', bio: 'Cloud architect and open-source contributor. Former principal engineer at a Fortune 500 tech firm.' },
    { name: 'Priya Patel', role: 'VP of Engineering', initials: 'PP', bio: '10+ years building scalable platforms. Passionate about developer experience and engineering culture.' },
    { name: 'David Osei', role: 'VP of Client Success', initials: 'DO', bio: 'Relationship-first approach to client partnership with a 98% retention track record.' },
    { name: 'Lena Schmidt', role: 'Head of Design', initials: 'LS', bio: 'Award-winning UX designer who brings human-centered thinking to every product decision.' },
    { name: 'Carlos Rivera', role: 'Head of Data Practice', initials: 'CR', bio: 'Machine learning expert and former academic researcher specialized in applied AI for enterprise.' },
];

const VALUES = [
    { icon: FiTarget, title: 'Outcome-obsessed', desc: 'We measure success by the real business impact we create — not hours billed.' },
    { icon: FiUsers, title: 'People-first', desc: 'Great work comes from great relationships. We invest deeply in our clients and our team.' },
    { icon: FiHeart, title: 'Integrity always', desc: 'Transparent communication, honest pricing, and commitments we actually keep.' },
    { icon: FiAward, title: 'Excellence by design', desc: 'We hold ourselves to the highest standards — in code quality, design, and every interaction.' },
];

const AWARDS = [
    { name: 'Clutch Top 100 Tech Companies', year: '2024' },
    { name: 'Deloitte Technology Fast 500', year: '2023' },
    { name: 'Forbes Cloud 100 Honorable Mention', year: '2023' },
    { name: 'ISO 27001 Certified', year: '2022' },
];

export default function About() {
    const revealRef = useReveal();
    useEffect(() => { document.title = 'About Us — OPMW | Our Story, Team & Values'; }, []);

    return (
        <main id="main-content">
            <section className="page-hero" aria-labelledby="about-heading">
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <nav aria-label="Breadcrumb">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li aria-current="page">About</li>
                        </ol>
                    </nav>
                    <div className="section-label">
                        <span className="section-label--dot" />
                        Our Story
                    </div>
                    <h1 id="about-heading" className="page-hero__title">
                        Built to Deliver,<br />
                        <span className="text-gradient-gold">Driven by Impact</span>
                    </h1>
                    <p className="page-hero__sub">
                        OPMW was founded on a simple belief: technology should create measurable value for the organizations and people it serves. Twelve years later, that belief drives everything we do.
                    </p>
                </div>
            </section>

            {/* Mission / Vision */}
            <section className="section" ref={revealRef} aria-labelledby="mission-heading">
                <div className="container about-mission reveal">
                    <div>
                        <div className="section-label">
                            <span className="section-label--dot" />
                            Our Mission
                        </div>
                        <h2 id="mission-heading" className="heading-2">One Place for All<br />Your Technology Needs</h2>
                        <p className="text-lead" style={{ marginTop: 'var(--space-4)' }}>
                            We exist to be the single destination where ambitious organizations find the talent, tools, and expertise to transform their technology and accelerate growth. No matter the challenge — we have a solution.
                        </p>
                    </div>
                    <div>
                        <div className="section-label section-label--gold">
                            <span className="section-label--dot" />
                            Our Vision
                        </div>
                        <h2 className="heading-2">A World Where<br />Technology Works for People</h2>
                        <p className="text-lead" style={{ marginTop: 'var(--space-4)' }}>
                            We envision a future where every organization — regardless of size or industry — has access to world-class technology partners who understand their business and champion their growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section id="culture" className="section" style={{ background: 'var(--color-neutral-50)' }} ref={revealRef} aria-labelledby="values-heading">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <div className="section-label" style={{ justifyContent: 'center' }}>
                            <span className="section-label--dot" />
                            Our Values
                        </div>
                        <h2 id="values-heading" className="heading-1">
                            What We <span className="text-gradient-primary">Stand For</span>
                        </h2>
                    </div>
                    <div className="values-grid reveal">
                        {VALUES.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="value-card card card-body">
                                <div className="value-card__icon" aria-hidden="true">
                                    <Icon size={26} />
                                </div>
                                <h3 className="heading-4 value-card__title">{title}</h3>
                                <p className="value-card__desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="section" ref={revealRef} aria-labelledby="team-heading">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <div className="section-label" style={{ justifyContent: 'center' }}>
                            <span className="section-label--dot" />
                            Our Leadership
                        </div>
                        <h2 id="team-heading" className="heading-1">
                            The Minds Behind <span className="text-gradient-primary">OPMW</span>
                        </h2>
                    </div>
                    <div className="team-grid reveal">
                        {TEAM.map((m) => (
                            <article key={m.name} className="team-card card">
                                <div className="team-card__avatar" aria-hidden="true">{m.initials}</div>
                                <div className="card-body">
                                    <h3 className="team-card__name heading-4">{m.name}</h3>
                                    <span className="team-card__role">{m.role}</span>
                                    <p className="team-card__bio">{m.bio}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section id="awards" className="section" style={{ background: 'var(--color-neutral-50)' }} aria-labelledby="awards-heading">
                <div className="container" ref={revealRef}>
                    <div className="section-header text-center reveal">
                        <div className="section-label" style={{ justifyContent: 'center' }}>
                            <span className="section-label--dot" />
                            Recognition
                        </div>
                        <h2 id="awards-heading" className="heading-1">
                            Awards & <span className="text-gradient-primary">Certifications</span>
                        </h2>
                    </div>
                    <div className="awards-grid reveal">
                        {AWARDS.map(({ name, year }) => (
                            <div key={name} className="award-card card card-body">
                                <FiAward className="award-card__icon" aria-hidden="true" />
                                <h3 className="award-card__name">{name}</h3>
                                <span className="award-card__year">{year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-banner section" aria-labelledby="about-cta">
                <div className="container cta-banner__inner">
                    <div className="cta-banner__text reveal-left">
                        <h2 id="about-cta" className="heading-1" style={{ color: 'white' }}>Join Our Growing Team</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: 'var(--space-3)' }}>Shape the future of technology alongside brilliant minds.</p>
                    </div>
                    <div className="cta-banner__actions reveal-right">
                        <Link to="/careers" className="btn btn--gold btn--lg">View Open Roles <FiArrowRight aria-hidden="true" /></Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
