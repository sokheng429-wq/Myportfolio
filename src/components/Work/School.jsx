import EducItem from "./EducItem";

function School() {
  const educationData = [
    {
      title: "JAVA PISETH SCHOOL",
      duration:"Online School",
      link: "https://t.me/ingpiseth"
    },
    {
      title: "Norton University",
      duration: "2022 - 2024",
      link: "https://www.norton-u.com/"
    },
    {
      title: "Beltie University",
      duration: "2024 - Present",
      link: "https://www.beltei.edu.kh/biu/asaihl"
    }
  ];

  return (
    <div className="row my-5 flexed center-container">
      {educationData.map((item, index) => (
        <EducItem
          key={index}
          title={item.title}
          duration={item.duration}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default School;