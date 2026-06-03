import WorkExpItem from "./WorkExpItem";
import { PHPIcon, PythonIcon } from "../SubComponents/Icons";


function WorkExp() {
    const workExperiences = [
        {
          icon: <PHPIcon />,
          title: "Freelance PHP Developer",
          date: "7/23 - 8/23",
          description: "Created PHP and MySQL-based CRUD applications with user authentication for classmates, including alumni list management and guidance report systems."
        },
        {
          icon: <PythonIcon />,
          title: "Tkinter Developer",
          date: "2/24 - 3/24",
          description: "Designed and implemented a desktop application for a local gym using Tkinter, SQLite, and Figma, featuring secure authentication, gym log management, and membership tracking for a friend."
        }
      ];
    
      return (
        <div className="row pt-5">
          {workExperiences.map((experience, index) => (
            <WorkExpItem
              key={index}
              icon={experience.icon}
              title={experience.title}
              date={experience.date}
              description={experience.description}
            />
          ))}
        </div>
      );
}

export default WorkExp;