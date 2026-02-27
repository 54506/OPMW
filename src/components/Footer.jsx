import { Link } from 'react-router-dom';
import {
    FiLinkedin, FiTwitter, FiGithub, FiFacebook, FiInstagram,
    FiMail, FiPhone, FiMapPin, FiArrowRight,
} from 'react-icons/fi';
import Logo from './Logo';
import './Footer.css';

const FOOTER_LINKS = {
    Company: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/about#team' },
        { label: 'Awards', path: '/about#awards' },
        { label: 'Partners', path: '/about#partners' },
        { label: 'Press', path: '/about#press' },
    ],
    Services: [
        { label: 'Digital Transformation', path: '/services#digital' },
        { label: 'Cloud Solutions', path: '/services#cloud' },
        { label: 'IT Consulting', path: '/services#consulting' },
        { label: 'Product Development', path: '/services#product' },
        { label: 'Data & Analytics', path: '/services#data' },
    ],
    Resources: [
        { label: 'Projects', path: '/projects' },
        { label: 'Blog', path: '/blog' },
        { label: 'Careers', path: '/careers' },
        { label: 'Contact', path: '/contact' },
        { label: 'Privacy Policy', path: '/privacy' },
    ],
};

const SOCIALS = [
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/opmw' },
    { icon: FiTwitter, label: 'Twitter', href: 'https://twitter.com/opmw' },
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/opmw' },
    { icon: FiFacebook, label: 'Facebook', href: 'https://facebook.com/opmw' },
    { icon: FiInstagram, label: 'Instagram', href: 'https://instagram.com/opmw' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" role="contentinfo">
            {/* Newsletter Banner */}
            <div className="footer__newsletter">
                <div className="container footer__newsletter-inner">
                    <div className="footer__newsletter-text">
                        <h2 className="footer__newsletter-title">Stay Ahead of Innovation</h2>
                        <p>Get the latest insights, case studies, and industry trends delivered to your inbox.</p>
                    </div>
                    <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
                        <label htmlFor="newsletter-email" className="visually-hidden">Email address</label>
                        <input
                            id="newsletter-email"
                            type="email"
                            className="footer__newsletter-input"
                            placeholder="Enter your work email"
                            required
                            aria-required="true"
                        />
                        <button type="submit" className="btn btn--gold footer__newsletter-btn">
                            Subscribe <FiArrowRight aria-hidden="true" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer__main">
                <div className="container">
                    <div className="footer__grid">
                        {/* Brand Column */}
                        <div className="footer__brand">
                            <Link to="/" className="footer__logo-link" aria-label="OPMW Home">
                                <Logo size={44} />
                                <div>
                                    <div className="footer__brand-name">OPMW</div>
                                    <div className="footer__brand-tagline">One Place Multi-Work</div>
                                </div>
                            </Link>
                            <p className="footer__about-text">
                                Empowering businesses through innovative technology solutions, expert consulting,
                                and transformative digital experiences. Your single destination for growth.
                            </p>
                            <div className="footer__contact-list">
                                <a href="mailto:hello@opmw.com" className="footer__contact-item" aria-label="Email OPMW">
                                    <FiMail aria-hidden="true" />
                                    hello@opmw.com
                                </a>
                                <a href="tel:+11234567890" className="footer__contact-item" aria-label="Call OPMW">
                                    <FiPhone aria-hidden="true" />
                                    +1 (123) 456-7890
                                </a>
                                <span className="footer__contact-item">
                                    <FiMapPin aria-hidden="true" />
                                    123 Innovation Drive, Tech City
                                </span>
                            </div>
                            <div className="footer__socials">
                                {SOCIALS.map(({ icon: Icon, label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className="footer__social-btn"
                                        aria-label={`OPMW on ${label}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon size={18} aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Link Columns */}
                        {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                            <nav key={category} aria-label={`${category} links`}>
                                <h3 className="footer__col-title">{category}</h3>
                                <ul className="footer__link-list" role="list">
                                    {links.map(({ label, path }) => (
                                        <li key={label}>
                                            <Link to={path} className="footer__link">
                                                <FiArrowRight className="footer__link-icon" aria-hidden="true" />
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <p className="footer__copy">
                        © {currentYear} OPMW — One Place Multi-Work. All rights reserved.
                    </p>
                    <div className="footer__legal-links">
                        <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
                        <Link to="/terms" className="footer__legal-link">Terms of Service</Link>
                        <Link to="/cookies" className="footer__legal-link">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
