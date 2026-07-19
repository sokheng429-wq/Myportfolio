function ContactItem({ icon, title, detail, link, onClick }) {
    const content = (
        <div className="contact-card">
            <div className="contact-card-icon">
                {icon}
            </div>
            <div className="contact-card-body">
                <span className="contact-card-title">{title}</span>
                <span className="contact-card-detail">{detail}</span>
            </div>
        </div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="contact-card-link">
                {content}
            </a>
        );
    }

    if (onClick) {
        return (
            <span onClick={onClick} className="contact-card-link" style={{ cursor: "pointer" }}>
                {content}
            </span>
        );
    }

    return content;
}

export default ContactItem;
