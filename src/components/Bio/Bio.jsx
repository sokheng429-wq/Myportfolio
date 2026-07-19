import Header from "../SubComponents/Header";

function Bio() {
    const bioData = [
        { label: "Birthday", value: "May 23, 2003", icon: "🎂" },
        { label: "Blood Type", value: "B", icon: "🩸" },
    ];

    return (
        <section id="bio">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <Header
                    activeTitle={"Bio"}
                    h2Title={"A little bit about me"}
                />

                <div className="bio-grid">
                    {bioData.map((item, index) => (
                        <div key={index} className="bio-card">
                            <span className="bio-icon">{item.icon}</span>
                            <div className="bio-info">
                                <span className="bio-label">{item.label}</span>
                                <span className="bio-value">{item.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Bio;
