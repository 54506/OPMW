import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import './ProjectCard.css';

export default function ProjectCard({ title, category, description, year, tech = [], path, index = 0 }) {
    const colors = [
        'linear-gradient(135deg, #0A2463 0%, #3E92CC 100%)',
        'linear-gradient(135deg, #2176AE 0%, #0A2463 100%)',
        'linear-gradient(135deg, #0A2463 0%, #F7C948 100%)',
        'linear-gradient(135deg, #3E92CC 0%, #071a4a 100%)',
    ];
    const bg = colors[index % colors.length];

    return (
        <article className="project-card card">
            <div className="project-card__thumb" style={{ background: bg }} aria-hidden="true">
                <span className="project-card__initials">
                    {title.split(' ').map(w => w[0]).slice(0, 2).join('')}
                </span>
            </div>
            <div className="card-body project-card__body">
                <div className="project-card__meta">
                    <span className="tag">{category}</span>
                    <span className="project-card__year">
                        <FiCalendar size={12} aria-hidden="true" />
                        {year}
                    </span>
                </div>
                <h3 className="project-card__title heading-4">{title}</h3>
                <p className="project-card__desc">{description}</p>
                <div className="project-card__tech">
                    {tech.map((t) => (
                        <span key={t} className="project-card__tech-item">{t}</span>
                    ))}
                </div>
                {path && (
                    <Link to={path} className="project-card__link" aria-label={`View case study: ${title}`}>
                        View Case Study <FiArrowRight size={16} aria-hidden="true" />
                    </Link>
                )}
            </div>
        </article>
    );
}
