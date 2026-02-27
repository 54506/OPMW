import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import { useReveal } from '../hooks/useReveal';
import './Services.css';
import './Blog.css';

const POSTS = [
    { title: 'The Future of Enterprise Cloud Architecture in 2025', excerpt: 'Multi-cloud strategies, FinOps, and the rise of AI-native infrastructure — what enterprise leaders need to know now.', category: 'Cloud', author: 'Marcus Johnson', date: 'Jan 15, 2025', readTime: '7 min read', slug: 'enterprise-cloud-2025' },
    { title: 'Why Digital Transformation Projects Fail (And How to Fix It)', excerpt: 'After 200+ transformation engagements, we\'ve identified the 5 most common failure modes — and practical ways to avoid them.', category: 'Strategy', author: 'Alexandra Chen', date: 'Jan 8, 2025', readTime: '10 min read', slug: 'why-dt-fails' },
    { title: 'Building a Data Culture: From Dashboards to Decisions', excerpt: 'Data maturity goes beyond tooling. Discover how leading organizations build the culture, processes, and governance that make data work.', category: 'Data', author: 'Carlos Rivera', date: 'Dec 20, 2024', readTime: '8 min read', slug: 'data-culture' },
    { title: 'Designing for Accessibility: A Non-Negotiable in 2025', excerpt: 'WCAG compliance isn\'t just ethical — it\'s good business. Our head of design shares a practical accessibility checklist.', category: 'Design', author: 'Lena Schmidt', date: 'Dec 12, 2024', readTime: '6 min read', slug: 'accessibility-2025' },
    { title: 'LLMs in the Enterprise: What Actually Works', excerpt: 'Beyond the hype — real use cases where large language models are delivering measurable ROI in enterprise environments.', category: 'AI', author: 'Carlos Rivera', date: 'Dec 5, 2024', readTime: '12 min read', slug: 'llms-enterprise' },
    { title: 'From Zero to Production: A React + Laravel Architecture Guide', excerpt: 'Our go-to production architecture for full-stack web applications — with deployment pipelines, testing strategies, and security patterns.', category: 'Engineering', author: 'Priya Patel', date: 'Nov 28, 2024', readTime: '15 min read', slug: 'react-laravel-guide' },
];

const CATEGORIES = ['All', 'Cloud', 'Strategy', 'Data', 'Design', 'AI', 'Engineering'];
const COLORS = { Cloud: '#3E92CC', Strategy: '#0A2463', Data: '#8B5CF6', Design: '#EC4899', AI: '#F59E0B', Engineering: '#10B981' };

export default function Blog() {
    const [activeCategory, setActiveCategory] = [CATEGORIES[0], () => { }];
    const revealRef = useReveal();
    useEffect(() => { document.title = 'Blog & Resources — OPMW | Insights & Ideas'; }, []);

    const featured = POSTS[0];
    const rest = POSTS.slice(1);

    return (
        <main id="main-content">
            <section className="page-hero" aria-labelledby="blog-heading">
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <nav aria-label="Breadcrumb">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li aria-current="page">Blog</li>
                        </ol>
                    </nav>
                    <div className="section-label">
                        <span className="section-label--dot" />
                        Insights & Ideas
                    </div>
                    <h1 id="blog-heading" className="page-hero__title">
                        The OPMW Blog — <br />
                        <span className="text-gradient-gold">Technology Perspectives</span>
                    </h1>
                    <p className="page-hero__sub">
                        In-depth articles, practical guides, and strategic insights from our team of senior technologists and consultants.
                    </p>
                </div>
            </section>

            <section className="section" ref={revealRef} aria-label="Blog articles">
                <div className="container">
                    {/* Featured */}
                    <article className="blog-featured card reveal" aria-label="Featured article">
                        <div className="blog-featured__thumb" aria-hidden="true">
                            <span className="blog-featured__initials">
                                {featured.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
                            </span>
                        </div>
                        <div className="blog-featured__content">
                            <div className="blog-featured__meta">
                                <span className="tag blog-cat" style={{ '--cat-color': COLORS[featured.category] || 'var(--color-primary-800)' }}>
                                    {featured.category}
                                </span>
                                <span className="blog-meta-item"><FiCalendar size={12} aria-hidden="true" />{featured.date}</span>
                                <span className="blog-meta-item"><FiClock size={12} aria-hidden="true" />{featured.readTime}</span>
                            </div>
                            <h2 className="heading-2 blog-featured__title">{featured.title}</h2>
                            <p className="blog-featured__excerpt">{featured.excerpt}</p>
                            <div className="blog-featured__footer">
                                <span className="blog-author"><FiUser size={14} aria-hidden="true" />{featured.author}</span>
                                <Link to={`/blog/${featured.slug}`} className="btn btn--primary">
                                    Read Article <FiArrowRight aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Posts Grid */}
                    <div className="blog-grid reveal">
                        {rest.map(post => (
                            <article key={post.slug} className="blog-card card">
                                <div className="blog-card__thumb" aria-hidden="true">
                                    <span className="blog-card__cat" style={{ background: COLORS[post.category] || 'var(--color-primary-800)' }}>
                                        {post.category}
                                    </span>
                                </div>
                                <div className="card-body blog-card__body">
                                    <div className="blog-card__meta">
                                        <span className="blog-meta-item"><FiCalendar size={12} aria-hidden="true" />{post.date}</span>
                                        <span className="blog-meta-item"><FiClock size={12} aria-hidden="true" />{post.readTime}</span>
                                    </div>
                                    <h3 className="heading-4 blog-card__title">{post.title}</h3>
                                    <p className="blog-card__excerpt">{post.excerpt}</p>
                                    <div className="blog-card__footer">
                                        <span className="blog-author"><FiUser size={14} aria-hidden="true" />{post.author}</span>
                                        <Link to={`/blog/${post.slug}`} className="btn btn--ghost blog-card__read">
                                            Read more <FiArrowRight size={14} aria-hidden="true" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
