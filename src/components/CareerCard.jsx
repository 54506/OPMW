import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';
import './CareerCard.css';

export default function CareerCard({ title, department, location, type, description, path }) {
    return (
        <article className="career-card card">
            <div className="card-body career-card__body">
                <div className="career-card__header">
                    <div>
                        <span className="tag career-card__dept">{department}</span>
                        <h3 className="career-card__title heading-4">{title}</h3>
                    </div>
                    <span className={`career-card__type career-card__type--${type.toLowerCase().replace(' ', '-')}`}>
                        {type}
                    </span>
                </div>
                <div className="career-card__meta">
                    <span className="career-card__meta-item">
                        <FiMapPin size={14} aria-hidden="true" />
                        {location}
                    </span>
                    <span className="career-card__meta-item">
                        <FiClock size={14} aria-hidden="true" />
                        {type}
                    </span>
                </div>
                <p className="career-card__desc">{description}</p>
                {path && (
                    <Link to={path} className="btn btn--outline-primary career-card__apply" aria-label={`Apply for ${title}`}>
                        Apply Now <FiArrowRight size={16} aria-hidden="true" />
                    </Link>
                )}
            </div>
        </article>
    );
}
