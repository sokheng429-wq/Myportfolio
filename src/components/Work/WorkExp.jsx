import WorkExpItem from "./WorkExpItem";

function WorkExp() {
    const workExperiences = [
        {
            title: "IT Support",
            date: "2 Years",
            description:
                "Provided IT support including troubleshooting hardware and software issues, maintaining computer systems, and assisting with network setup and configuration.",
        },
    ];

    return (
        <div className="exp-list">
            {workExperiences.map((experience, index) => (
                <WorkExpItem
                    key={index}
                    title={experience.title}
                    date={experience.date}
                    description={experience.description}
                />
            ))}
        </div>
    );
}

export default WorkExp;
