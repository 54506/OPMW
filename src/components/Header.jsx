import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Logo from './Logo';
import './Header.css';

const NAV_ITEMS = [
    { label: 'Home', path: '/' },
    {
        label: 'Services',
        path: '/services',
        children: [
            { label: 'Digital Transformation', path: '/services#digital' },
            { label: 'Cloud Solutions', path: '/services#cloud' },
            { label: 'IT Consulting', path: '/services#consulting' },
            { label: 'Product Development', path: '/services#product' },
        ],
    },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [dropdownTimer, setDropdownTimer] = useState(null);
    const headerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setDropdownOpen(null);
    }, [location]);

    const openDropdown = (label) => {
        if (dropdownTimer) clearTimeout(dropdownTimer);
        setDropdownOpen(label);
    };

    const closeDropdown = () => {
        const timer = setTimeout(() => setDropdownOpen(null), 150);
        setDropdownTimer(timer);
    };

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const isHome = location.pathname === '/';

    return (
        <header
            ref={headerRef}
            className={`header ${scrolled ? 'header--scrolled' : ''} ${isHome && !scrolled ? 'header--transparent' : ''}`}
            role="banner"
        >
            <div className="container header__inner">
                {/* Logo */}
                <Link to="/" className="header__logo" aria-label="OPMW — Go to homepage">
                    <Logo />
                    <span className="header__brand">
                        <span className="header__brand-main">OPMW</span>
                        <span className="header__brand-sub">One Place Multi-Work</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="header__nav" aria-label="Main navigation">
                    <ul className="header__nav-list" role="list">
                        {NAV_ITEMS.map((item) => (
                            <li
                                key={item.label}
                                className={`header__nav-item ${item.children ? 'header__nav-item--dropdown' : ''}`}
                                onMouseEnter={() => item.children && openDropdown(item.label)}
                                onMouseLeave={() => item.children && closeDropdown()}
                            >
                                {item.children ? (
                                    <>
                                        <button
                                            className="header__nav-link header__nav-trigger"
                                            aria-haspopup="true"
                                            aria-expanded={dropdownOpen === item.label}
                                        >
                                            {item.label}
                                            <FiChevronDown
                                                className={`header__chevron ${dropdownOpen === item.label ? 'header__chevron--open' : ''}`}
                                                aria-hidden="true"
                                            />
                                        </button>
                                        {dropdownOpen === item.label && (
                                            <ul className="header__dropdown" role="list">
                                                {item.children.map((child) => (
                                                    <li key={child.label}>
                                                        <Link
                                                            to={child.path}
                                                            className="header__dropdown-link"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                                        }
                                        end={item.path === '/'}
                                    >
                                        {item.label}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTA Buttons */}
                <div className="header__actions">
                    <Link to="/contact" className="btn btn--outline-primary header__cta-secondary">
                        Contact Us
                    </Link>
                    <Link to="/contact#demo" className="btn btn--primary header__cta-primary">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="header__hamburger"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                >
                    {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <nav
                    id="mobile-menu"
                    className="header__mobile-menu"
                    aria-label="Mobile navigation"
                >
                    <ul role="list">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.label} className="header__mobile-item">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `header__mobile-link ${isActive ? 'header__mobile-link--active' : ''}`
                                    }
                                    end={item.path === '/'}
                                >
                                    {item.label}
                                </NavLink>
                                {item.children && (
                                    <ul className="header__mobile-sub" role="list">
                                        {item.children.map((child) => (
                                            <li key={child.label}>
                                                <Link to={child.path} className="header__mobile-sub-link">
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                        <li className="header__mobile-actions">
                            <Link to="/contact#demo" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center' }}>
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
