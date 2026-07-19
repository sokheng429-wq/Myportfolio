function EducItem({ title, duration, link }) {
  return (
    <div className="col-12 mb-3 edu-card">
      <a href={link} target="_blank" rel="noopener noreferrer" className="edu-link">
        <h5 className="edu-title">{title}</h5>

        {duration && <p className="edu-duration">{duration}</p>}
      </a>
    </div>
  );
}

export default EducItem;