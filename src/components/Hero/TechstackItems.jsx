import {
    HtmlIcon,
    CssIcon,
    JsIcon,
    PyIcon,
    ReactIcon,
    NodeIcon,
} from "../SubComponents/Icons";

import { FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMui, SiFastapi, SiFlutter, SiLaravel, SiPostgresql } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

function TechstackItems() {
    const techStackItems = [
        { svg: <HtmlIcon size="tech-stack-item" />, bgColor: "#ff3700", label: "HTML" },
        { svg: <CssIcon size="tech-stack-item" />, bgColor: "#0033ff", label: "CSS" },
        { svg: <JsIcon size="tech-stack-item" />, bgColor: "#ffe100", label: "JavaScript" },
        { svg: <PyIcon size="tech-stack-item" />, bgColor: "var(--tech-stack-bg)", label: "Python" },
        { svg: <SiNextdotjs size={28} color="#000000" />, bgColor: "var(--tech-stack-bg)", label: "Next.js" },
        { svg: <NodeIcon size="tech-stack-item" />, bgColor: "#333333", label: "Node.js" },
        { svg: <ReactIcon size="tech-stack-item" />, bgColor: "#333333", label: "React" },
        { svg: <FaReact size={28} color="#61DAFB" />, bgColor: "var(--tech-stack-bg)", label: "React Native" },
        { svg: <SiPostgresql size={28} color="#336791" />, bgColor: "var(--tech-stack-bg)", label: "PostgreSQL" },
        { svg: <SiMysql size={28} color="#4479A1" />, bgColor: "var(--tech-stack-bg)", label: "MySQL" },
        { svg: <FaJava size={28} color="#f89820" />, bgColor: "var(--tech-stack-bg)", label: "Java" },
        { svg: <SiSpringboot size={28} color="#6db33f" />, bgColor: "var(--tech-stack-bg)", label: "Spring Boot" },
        { svg: <SiMui size={28} color="#007fff" />, bgColor: "var(--tech-stack-bg)", label: "Material UI" },
        { svg: <SiFastapi size={28} color="#009688" />, bgColor: "var(--tech-stack-bg)", label: "FastAPI" },
        { svg: <SiFlutter size={28} color="#02569B" />, bgColor: "var(--tech-stack-bg)", label: "Flutter" },
        { svg: <SiLaravel size={28} color="#FF2D20" />, bgColor: "var(--tech-stack-bg)", label: "Laravel" },
    ];

    return (
        <>
            {techStackItems.map((item, index) => (
                <div
                    key={index}
                    className="app tech-stack"
                    style={{ backgroundColor: item.bgColor }}
                    data-label={item.label}
                    title={item.label}
                >
                    {item.svg}
                </div>
            ))}
        </>
    );
}

export default TechstackItems;
