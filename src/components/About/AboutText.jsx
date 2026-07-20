function AboutText() {
    const skillGroups = [
        {
            label: "Languages",
            items: ["Java", "C#", "Python", "JavaScript", "HTML", "CSS", "Dart"],
        },
        {
            label: "Frameworks",
            items: ["React", "React Native", "Next.js", "Spring Boot", "Node.js", "Express", "FastAPI", "Flutter", "Laravel"],
        },
        {
            label: "UI / Styling",
            items: ["Material UI", "Tailwind CSS", "Bootstrap"],
        },
        {
            label: "Databases",
            items: ["MySQL", "PostgreSQL", "SQL Server"],
        },
        {
            label: "Deploy",
            items: ["Cloudflare", "Render"],
        },
        {
            label: "Version Control",
            items: ["Git", "GitHub"],
        },
    ];

    const bioStats = [
        { label: "Birthday", value: "May 23, 2003", icon: "🎂" },
        { label: "Blood Type", value: "B", icon: "🩸" },
    ];

    return (
        <div className="col-md-7 col-lg-7 about-text">
            <div className="section-header">
                <div className="section-header-top">
                    <span className="section-header-accent"></span>
                    <p className="fs-6 title section-header-label">
                        <b>ABOUT ME</b>
                    </p>
                </div>
            </div>

            <h2 className="h3 fw-bold text-body-emphasis lh-1 mb-4">
                Full-Stack Developer
                <br />
                based in Phnom Penh, Cambodia
            </h2>

            <p className="fs-5 about-intro">
                Hey, I&apos;m <b>Thoeun SokHeng</b> — a passionate full-stack developer who loves crafting clean,
                functional web & mobile apps. I focus on writing maintainable code and
                delivering great user experiences. Currently seeking an internship or
                junior role to grow and ship real-world products.
            </p>

            {/* Bio stats */}
            <div className="about-bio-row">
                {bioStats.map((item, i) => (
                    <div key={i} className="about-bio-stat">
                        <span className="about-bio-icon">{item.icon}</span>
                        <div>
                            <span className="about-bio-label">{item.label}</span>
                            <span className="about-bio-value">{item.value}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="about-skills">
                <p className="about-skills-title">Technical Skills</p>
                <div className="skills-grid">
                    {skillGroups.map((group, i) => (
                        <div key={i} className="skill-group">
                            <span className="skill-group-label">{group.label}</span>
                            <div className="skill-group-tags">
                                {group.items.map((skill, j) => (
                                    <span key={j} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutText;
