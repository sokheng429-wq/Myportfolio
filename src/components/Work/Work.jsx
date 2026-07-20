import { useState } from "react";
import School from "./School";
import WorkExp from "./WorkExp";
import Header from "../SubComponents/Header";
import useMediaQuery from "../../hooks/useMediaQuery";

function Work() {
    const isMobile = useMediaQuery("(max-width: 767px)");
    const [activeTab, setActiveTab] = useState("education");

    return (
        <section id="work">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <Header
                    activeTitle={"Education"}
                    h2Title={"My knowledge and experience so far..."}
                />

                {isMobile ? (
                    /* ── Mobile: tabbed layout ── */
                    <div className="work-mobile">
                        <div className="work-tabs">
                            <button
                                className={`work-tab ${activeTab === "education" ? "work-tab--active" : ""}`}
                                onClick={() => setActiveTab("education")}
                            >
                                <span className="work-tab-icon">&#127891;</span>
                                Education
                            </button>
                            <button
                                className={`work-tab ${activeTab === "experience" ? "work-tab--active" : ""}`}
                                onClick={() => setActiveTab("experience")}
                            >
                                <span className="work-tab-icon">&#128188;</span>
                                Experience
                            </button>
                        </div>

                        <div className="work-tab-content">
                            {activeTab === "education" ? <School /> : <WorkExp />}
                        </div>
                    </div>
                ) : (
                    /* ── Desktop: 2-column grid ── */
                    <div className="work-grid">
                        <div className="work-column">
                            <div className="work-column-header">
                                <span className="work-column-icon">&#127891;</span>
                                <h4 className="work-column-title">Education</h4>
                            </div>
                            <School />
                        </div>

                        <div className="work-column">
                            <div className="work-column-header">
                                <span className="work-column-icon">&#128188;</span>
                                <h4 className="work-column-title">Experience</h4>
                            </div>
                            <WorkExp />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Work;
