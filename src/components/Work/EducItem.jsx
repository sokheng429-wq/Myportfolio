function EducItem({ title, duration, link, subtitle }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="edu-card">
            <div className="edu-card-dot"></div>
            <div className="edu-card-content">
                <h5 className="edu-title">{title}</h5>
                {subtitle && <span className="edu-subtitle">{subtitle}</span>}
                {duration && <span className="edu-duration">{duration}</span>}
            </div>
        </a>
    );
}

export default EducItem;
