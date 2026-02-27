import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './ServiceCard.css';

export default function ServiceCard({ icon: Icon, title, description, tags = [], path, featured = false }) {
    return (
        <article className={`service-card card ${featured ? 'service-card--featured' : ''}`}>
            <div className="service-card__icon-wrap" aria-hidden="true">
                {Icon && <Icon className="service-card__icon" size={28} />}
            </div>
            <h3 className="service-card__title heading-4">{title}</h3>
            <p className="service-card__desc">{description}</p>
            {tags.length > 0 && (
                <div className="service-card__tags" aria-label="Service tags">
                    {tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            )}
            {path && (
                <Link to={path} className="service-card__link" aria-label={`Learn more about ${title}`}>
                    Learn more <FiArrowRight size={16} aria-hidden="true" />
                </Link>
            )}
        </article>
    );
}
