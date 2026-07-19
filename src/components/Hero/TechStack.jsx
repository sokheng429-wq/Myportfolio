import TechstackHeader from "./TechstackHeader";
import TechstackItems from "./TechstackItems";

function TechStack() {
    return (
        <div className="tech-stack-section py-5">
            <TechstackHeader />
            <div className="tech-stack-grid">
                <TechstackItems />
            </div>
        </div>
    );
}

export default TechStack;
