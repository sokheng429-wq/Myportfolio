import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  PyIcon,
  ReactIcon,
  NodeIcon,
  DjangoIcon,
  FlaskIcon,
  PostgreIcon,
  SQLiteIcon,
  JavaIcon,
  SpringBootIcon,
  MaterialUIIcon,
  MySQLIcon
} from "../SubComponents/Icons";

import { FaJava } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMui } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

function TechstackItems() {
  const techStackItems = [
    { svg: <HtmlIcon size="tech-stack-item" />, bgColor: "#ff3700", alt: "HTML" },
    { svg: <CssIcon size="tech-stack-item" />, bgColor: "#0033ff", alt: "CSS" },
    { svg: <JsIcon size="tech-stack-item" />, bgColor: "#ffe100", alt: "JavaScript" },
    { svg: <PyIcon size="tech-stack-item" />, bgColor: "var(--tech-stack-bg)", alt: "Python" },
    { svg: <SiNextdotjs size={28} color="currentColor" />, bgColor: "var(--tech-stack-bg)", alt: "Next.js" },

    { svg: <NodeIcon size="tech-stack-item" />, bgColor: "#333333", alt: "Node.js" },
    { svg: <ReactIcon size="tech-stack-item" />, bgColor: "#333333", alt: "React" },
    { svg: <PostgreIcon size="tech-stack-item" />, bgColor: "#0764b0", alt: "PostgreSQL" },
    { svg: <SiMysql size={28} color="currentColor" />, bgColor: "var(--tech-stack-bg)", alt: "MySQL" },

    { svg: <FaJava size={28} color="#f89820" />, bgColor: "var(--tech-stack-bg)", alt: "Java" },
    { svg: <SiSpringboot size={28} color="#6db33f" />, bgColor: "var(--tech-stack-bg)", alt: "Spring Boot" },
    { svg: <SiMui size={28} color="#007fff" />, bgColor: "var(--tech-stack-bg)", alt: "Material UI" },
    ];

  return (
    <>
      {techStackItems.map((item, index) => (
        <div key={index} className="col-2 col-lg-1 col-md-2 col-sm-3 col-3 app-container">
          <div className="app tech-stack" style={{ backgroundColor: item.bgColor }}>
            {item.svg}
          </div>
        </div>
      ))}
    </>
  );
}

export default TechstackItems;