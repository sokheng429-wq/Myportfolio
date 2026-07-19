import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  PyIcon,
  ReactIcon,
  NodeIcon,
} from "../SubComponents/Icons";

import { FaJava } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMui, SiFastapi, SiFlutter, SiLaravel, SiPostgresql } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

function TechstackItems() {
  const techStackItems = [
    { svg: <HtmlIcon size="tech-stack-item" />, bgColor: "#ff3700", alt: "HTML" },
    { svg: <CssIcon size="tech-stack-item" />, bgColor: "#0033ff", alt: "CSS" },
    { svg: <JsIcon size="tech-stack-item" />, bgColor: "#ffe100", alt: "JavaScript" },
    { svg: <PyIcon size="tech-stack-item" />, bgColor: "var(--tech-stack-bg)", alt: "Python" },
    { svg: <SiNextdotjs size={28} color="#000000" />, bgColor: "var(--tech-stack-bg)", alt: "Next.js" },

    { svg: <NodeIcon size="tech-stack-item" />, bgColor: "#333333", alt: "Node.js" },
    { svg: <ReactIcon size="tech-stack-item" />, bgColor: "#333333", alt: "React" },
    { svg: <SiPostgresql size={28} color="#336791" />, bgColor: "var(--tech-stack-bg)", alt: "PostgreSQL" },
    { svg: <SiMysql size={28} color="#4479A1" />, bgColor: "var(--tech-stack-bg)", alt: "MySQL" },

    { svg: <FaJava size={28} color="#f89820" />, bgColor: "var(--tech-stack-bg)", alt: "Java" },
    { svg: <SiSpringboot size={28} color="#6db33f" />, bgColor: "var(--tech-stack-bg)", alt: "Spring Boot" },
    { svg: <SiMui size={28} color="#007fff" />, bgColor: "var(--tech-stack-bg)", alt: "Material UI" },
    { svg: <SiFastapi size={28} color="#009688" />, bgColor: "var(--tech-stack-bg)", alt: "FastAPI" },
    { svg: <SiFlutter size={28} color="#02569B" />, bgColor: "var(--tech-stack-bg)", alt: "Flutter" },
    { svg: <SiLaravel size={28} color="#FF2D20" />, bgColor: "var(--tech-stack-bg)", alt: "Laravel" },
    ];

  return (
    <>
      {techStackItems.map((item, index) => (
        <div key={index} className="col-4 col-sm-3 col-md-2 col-lg-1 app-container">
          <div className="app tech-stack" style={{ backgroundColor: item.bgColor }}>
            {item.svg}
          </div>
        </div>
      ))}
    </>
  );
}

export default TechstackItems;