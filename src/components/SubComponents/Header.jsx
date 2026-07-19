function Header({ activeTitle, h2Title }) {
    return (
        <div className="section-header">
            <div className="section-header-top">
                <span className="section-header-accent"></span>
                <p className="fs-6 title section-header-label">
                    <b>{activeTitle}</b>
                </p>
            </div>
            <h2 className="h3 display-7 fw-bold text-body-emphasis lh-1 mb-4 zero-top">
                {h2Title}
            </h2>
        </div>
    );
}

export default Header;
