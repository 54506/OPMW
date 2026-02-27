import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiSearch } from 'react-icons/fi';
import CareerCard from '../components/CareerCard';
import { useReveal } from '../hooks/useReveal';
import './Services.css';
import './Careers.css';

const JOBS = [
    { title: 'Senior Full-Stack Engineer', department: 'Engineering', location: 'Remote / New York', type: 'Full-time', description: 'Build and scale high-performance web applications using React and Laravel. Lead technical discussions and mentor junior engineers.', path: '/careers/senior-fullstack' },
    { title: 'Cloud Architect', department: 'Cloud', location: 'Remote / London', type: 'Full-time', description: 'Design and implement enterprise-scale cloud architectures on AWS and Azure. Drive migration strategies and FinOps practices.', path: '/careers/cloud-architect' },
    { title: 'Data Engineer', department: 'Data', location: 'Hybrid / Singapore', type: 'Full-time', description: 'Build robust data pipelines and lakehouse architectures. Experience with dbt, Snowflake, and Spark required.', path: '/careers/data-engineer' },
    { title: 'UX/Product Designer', department: 'Design', location: 'Remote', type: 'Full-time', description: 'Create intuitive, beautiful digital experiences. Lead design sprints and collaborate closely with engineering and product teams.', path: '/careers/ux-designer' },
    { title: 'ML / AI Engineer', department: 'Data', location: 'Remote / San Francisco', type: 'Full-time', description: 'Build and deploy production machine learning models. Experience with LLMs, NLP, and MLOps pipelines strongly preferred.', path: '/careers/ml-engineer' },
    { title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'Contract', description: 'Manage CI/CD pipelines, Kubernetes clusters, and infrastructure-as-code. Champion a culture of automation and reliability.', path: '/careers/devops' },
];

const DEPARTMENTS = ['All', 'Engineering', 'Cloud', 'Data', 'Design'];
const PERKS = [
    { emoji: '🌍', title: 'Remote-first', desc: 'Work from anywhere with flexible hours.' },
    { emoji: '📚', title: 'Learning Budget', desc: '$2,000/year for courses, conferences, and books.' },
    { emoji: '🏥', title: 'Health Coverage', desc: 'Comprehensive medical, dental, and vision.' },
    { emoji: '🌱', title: 'Growth Paths', desc: 'Clear career ladders and promotion cycles.' },
    { emoji: '🎉', title: 'Team Retreats', desc: 'Annual global team retreats in amazing destinations.' },
    { emoji: '💰', title: 'Equity', desc: 'Competitive salary with meaningful equity participation.' },
];

export default function Careers() {
    const [dept, setDept] = useState('All');
    const [search, setSearch] = useState('');
    const revealRef = useReveal();
    useEffect(() => { document.title = 'Careers — OPMW | Join Our Team'; }, []);

    const filtered = JOBS.filter(j => {
        const matchDept = dept === 'All' || j.department === dept;
        const matchSearch = !search || j.title.toLowerCase().includes(search.toLowerCase()) || j.department.toLowerCase().includes(search.toLowerCase());
        return matchDept && matchSearch;
    });

    return (
        <main id="main-content">
            <section className="page-hero" aria-labelledby="careers-heading">
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <nav aria-label="Breadcrumb">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li aria-current="page">Careers</li>
                        </ol>
                    </nav>
                    <div className="section-label">
                        <span className="section-label--dot" />
                        We're Hiring
                    </div>
                    <h1 id="careers-heading" className="page-hero__title">
                        Build Your Career <br />
                        <span className="text-gradient-gold">At the Frontier</span>
                    </h1>
                    <p className="page-hero__sub">
                        Join a team of passionate technologists solving real problems for real businesses. Remote-friendly, growth-oriented, and relentlessly ambitious.
                    </p>
                </div>
            </section>

            {/* Perks */}
            <section className="section" style={{ background: 'var(--color-neutral-50)' }} ref={revealRef} aria-labelledby="perks-heading">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <div className="section-label" style={{ justifyContent: 'center' }}>
                            <span className="section-label--dot" />
                            Life at OPMW
                        </div>
                        <h2 id="perks-heading" className="heading-1">
                            Why You'll <span className="text-gradient-primary">Love It Here</span>
                        </h2>
                    </div>
                    <div className="perks-grid reveal">
                        {PERKS.map(({ emoji, title, desc }) => (
                            <div key={title} className="perk-card card card-body">
                                <span className="perk-card__emoji" role="img" aria-hidden="true">{emoji}</span>
                                <h3 className="perk-card__title heading-4">{title}</h3>
                                <p className="perk-card__desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jobs */}
            <section id="jobs" className="section" ref={revealRef} aria-labelledby="jobs-heading">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <div className="section-label" style={{ justifyContent: 'center' }}>
                            <span className="section-label--dot" />
                            Open Positions
                        </div>
                        <h2 id="jobs-heading" className="heading-1">
                            Find Your <span className="text-gradient-primary">Role</span>
                        </h2>
                    </div>

                    {/* Filters */}
                    <div className="jobs-filters reveal">
                        <div className="jobs-search">
                            <FiSearch className="jobs-search__icon" aria-hidden="true" />
                            <label htmlFor="job-search" className="visually-hidden">Search jobs</label>
                            <input
                                id="job-search"
                                type="search"
                                className="form-input jobs-search__input"
                                placeholder="Search roles..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                aria-label="Search job listings"
                            />
                        </div>
                        <div role="group" aria-label="Department filters" className="filter-group">
                            {DEPARTMENTS.map(d => (
                                <button
                                    key={d}
                                    className={`filter-btn ${dept === d ? 'filter-btn--active' : ''}`}
                                    onClick={() => setDept(d)}
                                    aria-pressed={dept === d}
                                >
                                    {d}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="jobs-list reveal">
                        {filtered.length > 0
                            ? filtered.map(j => <CareerCard key={j.title} {...j} />)
                            : (
                                <div className="jobs-empty">
                                    <p>No positions match your search. <button className="btn btn--ghost" onClick={() => { setSearch(''); setDept('All'); }}>Clear filters</button></p>
                                </div>
                            )}
                    </div>
                </div>
            </section>

            <section className="cta-banner section" aria-labelledby="careers-cta">
                <div className="container cta-banner__inner">
                    <div className="cta-banner__text reveal-left">
                        <h2 id="careers-cta" className="heading-1" style={{ color: 'white' }}>Don't See the Right Fit?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: 'var(--space-3)' }}>We're always looking for exceptional talent. Send us your portfolio.</p>
                    </div>
                    <div className="cta-banner__actions reveal-right">
                        <a href="mailto:careers@opmw.com" className="btn btn--gold btn--lg">Send Your Resume <FiArrowRight aria-hidden="true" /></a>
                    </div>
                </div>
            </section>
        </main>
    );
}
