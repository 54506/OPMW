import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { useReveal } from '../hooks/useReveal';
import './Services.css';
import './Contact.css';

const CONTACT_INFO = [
    { icon: FiMail, label: 'Email us at', value: 'hello@opmw.com', href: 'mailto:hello@opmw.com' },
    { icon: FiPhone, label: 'Call us at', value: '+1 (123) 456-7890', href: 'tel:+11234567890' },
    { icon: FiMapPin, label: 'Visit us at', value: '123 Innovation Drive, Suite 400\nTech City, CA 90210', href: '#map' },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
    const revealRef = useReveal();

    useEffect(() => { document.title = 'Contact Us — OPMW | Get in Touch'; }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <main id="main-content">
            <section className="page-hero" aria-labelledby="contact-heading">
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <nav aria-label="Breadcrumb">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li aria-current="page">Contact</li>
                        </ol>
                    </nav>
                    <div className="section-label">
                        <span className="section-label--dot" />
                        Let's Talk
                    </div>
                    <h1 id="contact-heading" className="page-hero__title">
                        Start Your <span className="text-gradient-gold">Transformation</span> <br />Journey Today
                    </h1>
                    <p className="page-hero__sub">
                        Whether you have a project in mind or just want to explore possibilities — we'd love to hear from you. No pressure, just a conversation.
                    </p>
                </div>
            </section>

            {/* Contact Layout */}
            <section id="demo" className="section" ref={revealRef} aria-labelledby="form-heading">
                <div className="container contact-grid">
                    {/* Info column */}
                    <aside className="contact-info reveal-left">
                        <h2 id="info-heading" className="heading-2" style={{ marginBottom: 'var(--space-6)' }}>
                            Get in <span className="text-gradient-primary">Touch</span>
                        </h2>
                        {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                            <div key={label} className="contact-info-card">
                                <div className="contact-info-card__icon" aria-hidden="true">
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <p className="contact-info-card__label">{label}</p>
                                    <a href={href} className="contact-info-card__value">
                                        {value.split('\n').map((line, i) => (
                                            <span key={i}>{line}{i < value.split('\n').length - 1 && <br />}</span>
                                        ))}
                                    </a>
                                </div>
                            </div>
                        ))}

                        {/* Map Placeholder */}
                        <div
                            id="map"
                            className="contact-map-placeholder"
                            role="img"
                            aria-label="Office location map placeholder"
                        >
                            <div className="contact-map-placeholder__inner">
                                <FiMapPin size={32} aria-hidden="true" />
                                <span>123 Innovation Drive<br />Tech City, CA 90210</span>
                            </div>
                        </div>
                    </aside>

                    {/* Form */}
                    <div className="contact-form-wrap reveal-right">
                        {submitted ? (
                            <div className="contact-success" role="alert" aria-live="polite">
                                <FiCheckCircle className="contact-success__icon" aria-hidden="true" />
                                <h2 className="heading-3">Message Sent!</h2>
                                <p>Thank you for reaching out. Our team will be in touch within 1 business day.</p>
                                <button className="btn btn--primary" onClick={() => setSubmitted(false)}>
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="contact-form card card-body"
                                aria-labelledby="form-heading"
                                noValidate
                            >
                                <h2 id="form-heading" className="heading-3 contact-form__title">
                                    Tell Us About Your Project
                                </h2>
                                <p className="contact-form__sub">
                                    Fill in the form below and we'll get back to you within 1 business day.
                                </p>

                                <div className="contact-form__grid">
                                    <div className="form-group">
                                        <label htmlFor="contact-name" className="form-label">Full Name <span aria-hidden="true">*</span></label>
                                        <input id="contact-name" name="name" type="text" className="form-input" placeholder="Jane Smith" required aria-required="true" value={form.name} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-email" className="form-label">Work Email <span aria-hidden="true">*</span></label>
                                        <input id="contact-email" name="email" type="email" className="form-input" placeholder="jane@company.com" required aria-required="true" value={form.email} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-company" className="form-label">Company</label>
                                        <input id="contact-company" name="company" type="text" className="form-input" placeholder="Your Company" value={form.company} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-service" className="form-label">Service of Interest</label>
                                        <select id="contact-service" name="service" className="form-select" value={form.service} onChange={handleChange}>
                                            <option value="">Select a service...</option>
                                            <option>Digital Transformation</option>
                                            <option>Cloud Solutions</option>
                                            <option>Product Development</option>
                                            <option>Data & Analytics</option>
                                            <option>Cybersecurity</option>
                                            <option>IT Consulting</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-message" className="form-label">Your Message <span aria-hidden="true">*</span></label>
                                    <textarea id="contact-message" name="message" className="form-textarea" placeholder="Tell us about your project, challenges, or goals..." required aria-required="true" value={form.message} onChange={handleChange} rows={5} />
                                </div>

                                <button type="submit" className="btn btn--primary btn--lg contact-form__submit">
                                    <FiSend aria-hidden="true" />
                                    Send Message
                                </button>

                                <p className="contact-form__privacy">
                                    By submitting, you agree to our <Link to="/privacy">Privacy Policy</Link>. We never share your data.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
