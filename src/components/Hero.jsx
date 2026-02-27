import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Hero.css';

const SLIDES = [
    {
        id: 1,
        tag: 'Digital Transformation',
        headline: 'One Place,\nEndless Possibilities',
        subheading: 'Empower your business with cutting-edge technology solutions, expert consulting, and transformative digital strategies.',
        bullets: ['Cloud-first Architecture', 'AI-powered Insights', 'Enterprise-grade Security'],
        ctaPrimary: { label: 'Request a Demo', path: '/contact#demo' },
        ctaSecondary: { label: 'Explore Services', path: '/services' },
        bg: 'linear-gradient(135deg, #0A2463 0%, #1a3e96 40%, #2176AE 80%, #3E92CC 100%)',
        accent: '#F7C948',
    },
    {
        id: 2,
        tag: 'Innovation Leaders',
        headline: 'Building Tomorrow\'s\nSolutions Today',
        subheading: 'From concept to deployment, we deliver scalable products that drive real business value and competitive advantage.',
        bullets: ['Agile Development', 'World-class Engineering', 'Proven Methodologies'],
        ctaPrimary: { label: 'View Our Projects', path: '/projects' },
        ctaSecondary: { label: 'Meet the Team', path: '/about' },
        bg: 'linear-gradient(135deg, #071a4a 0%, #0A2463 30%, #3E92CC 70%, #2176AE 100%)',
        accent: '#3E92CC',
    },
    {
        id: 3,
        tag: 'Talent & Growth',
        headline: 'Grow Your Career\nWith Purpose',
        subheading: 'Join a culture where ambitious minds thrive. We invest in people, champion ideas, and celebrate exceptional work.',
        bullets: ['Remote-friendly Culture', 'Continuous Learning', 'Competitive Benefits'],
        ctaPrimary: { label: 'View Open Roles', path: '/careers' },
        ctaSecondary: { label: 'Our Culture', path: '/about#culture' },
        bg: 'linear-gradient(135deg, #0A2463 0%, #2176AE 50%, #F7C948 100%)',
        accent: '#F7C948',
    },
];

// Decorative floating shapes
function FloatingShapes({ accent }) {
    return (
        <div className="hero__shapes" aria-hidden="true">
            <div className="hero__shape hero__shape--1" style={{ background: accent }} />
            <div className="hero__shape hero__shape--2" />
            <div className="hero__shape hero__shape--3" />
            <div className="hero__shape hero__shape--4" style={{ borderColor: accent }} />
        </div>
    );
}

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [videoError, setVideoError] = useState(true); // default to carousel
    const TOTAL = SLIDES.length;

    const goTo = useCallback(
        (idx) => {
            if (animating) return;
            setAnimating(true);
            setCurrent(idx);
            setTimeout(() => setAnimating(false), 600);
        },
        [animating]
    );

    const next = useCallback(() => goTo((current + 1) % TOTAL), [current, TOTAL, goTo]);
    const prev = useCallback(() => goTo((current - 1 + TOTAL) % TOTAL), [current, TOTAL, goTo]);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, [next]);

    // Keyboard navigation
    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [next, prev]);

    const slide = SLIDES[current];

    return (
        <section
            className="hero"
            aria-label="Hero carousel"
            role="region"
            style={{ background: slide.bg }}
        >
            {/* Decorative grid overlay */}
            <div className="hero__grid-overlay" aria-hidden="true" />

            {/* Floating shapes */}
            <FloatingShapes accent={slide.accent} />

            {/* Content */}
            <div className="container hero__content" key={current}>
                {/* Left: text */}
                <div className="hero__text">
                    <div className="hero__tag animate-fade-in">
                        <span className="hero__tag-dot" style={{ background: slide.accent }} />
                        {slide.tag}
                    </div>

                    <h1 className="hero__headline">
                        {slide.headline.split('\n').map((line, i) => (
                            <span key={i} className="hero__headline-line">
                                {line}
                                {i < slide.headline.split('\n').length - 1 && <br />}
                            </span>
                        ))}
                    </h1>

                    <p className="hero__sub">{slide.subheading}</p>

                    <ul className="hero__bullets" aria-label="Key benefits">
                        {slide.bullets.map((b) => (
                            <li key={b} className="hero__bullet">
                                <span className="hero__bullet-dot" style={{ background: slide.accent }} aria-hidden="true" />
                                {b}
                            </li>
                        ))}
                    </ul>

                    <div className="hero__ctas">
                        <Link to={slide.ctaPrimary.path} className="btn btn--gold btn--lg hero__cta-main">
                            {slide.ctaPrimary.label}
                            <FiArrowRight aria-hidden="true" />
                        </Link>
                        <Link to={slide.ctaSecondary.path} className="btn btn--outline btn--lg">
                            {slide.ctaSecondary.label}
                        </Link>
                    </div>

                    {/* Metrics */}
                    <div className="hero__metrics">
                        {[
                            { value: '200+', label: 'Projects Delivered' },
                            { value: '50+', label: 'Enterprise Clients' },
                            { value: '12+', label: 'Years of Excellence' },
                        ].map(({ value, label }) => (
                            <div key={label} className="hero__metric">
                                <span className="hero__metric-value" style={{ color: slide.accent }}>{value}</span>
                                <span className="hero__metric-label">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: visual card */}
                <div className="hero__visual">
                    <div className="hero__card hero__card--main">
                        <div className="hero__card-icon" style={{ background: `${slide.accent}22` }}>
                            <span style={{ color: slide.accent }} aria-hidden="true">✦</span>
                        </div>
                        <h3 className="hero__card-title">
                            {slide.tag}
                        </h3>
                        <p className="hero__card-desc">
                            Leading{' '}
                            {current === 0
                                ? 'digital transformation across industries'
                                : current === 1
                                    ? 'product innovation and engineering excellence'
                                    : 'careers and talent development programs'}
                        </p>
                        <div className="hero__card-tags">
                            {slide.bullets.map((b) => (
                                <span key={b} className="hero__card-tag">{b}</span>
                            ))}
                        </div>
                    </div>

                    <div className="hero__card hero__card--secondary">
                        <div className="hero__card-stat">
                            <span className="hero__stat-val" style={{ color: slide.accent }}>4.9★</span>
                            <span className="hero__stat-lbl">Client Satisfaction</span>
                        </div>
                        <div className="hero__card-stat">
                            <span className="hero__stat-val" style={{ color: slide.accent }}>98%</span>
                            <span className="hero__stat-lbl">On-time Delivery</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="hero__controls">
                <button
                    className="hero__arrow"
                    onClick={prev}
                    aria-label="Previous slide"
                >
                    <FiChevronLeft size={20} aria-hidden="true" />
                </button>

                <div className="hero__dots" role="tablist" aria-label="Slide indicators">
                    {SLIDES.map((s, i) => (
                        <button
                            key={s.id}
                            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
                            onClick={() => goTo(i)}
                            role="tab"
                            aria-selected={i === current}
                            aria-label={`Slide ${i + 1}: ${s.tag}`}
                            style={i === current ? { background: slide.accent } : {}}
                        />
                    ))}
                </div>

                <button
                    className="hero__arrow"
                    onClick={next}
                    aria-label="Next slide"
                >
                    <FiChevronRight size={20} aria-hidden="true" />
                </button>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll" aria-hidden="true">
                <span className="hero__scroll-label">Scroll to explore</span>
                <div className="hero__scroll-bar">
                    <div className="hero__scroll-thumb" />
                </div>
            </div>
        </section>
    );
}
