function WorkExpItem({ icon, title, date, description }) {
    return (
        <div className="exp-card">
            {icon && (
                <div className="exp-card-icon">
                    {icon}
                </div>
            )}
            <div className="exp-card-body">
                <h5 className="exp-card-title">{title}</h5>
                <span className="exp-card-date">{date}</span>
                <p className="exp-card-desc">{description}</p>
            </div>
        </div>
    );
}

export default WorkExpItem;
