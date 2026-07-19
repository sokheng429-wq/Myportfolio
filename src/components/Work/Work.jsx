import School from "./School";
import WorkExp from "./WorkExp";
import Header from "../SubComponents/Header";

function Work() {
    return (
        <section id="work">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <Header
                    activeTitle={"Education"}
                    h2Title={"My knowledge and experience so far..."}
                />

                <div className="work-grid">
                    <div className="work-column">
                        <div className="work-column-header">
                            <span className="work-column-icon">🎓</span>
                            <h4 className="work-column-title">Education</h4>
                        </div>
                        <School />
                    </div>

                    <div className="work-column">
                        <div className="work-column-header">
                            <span className="work-column-icon">💼</span>
                            <h4 className="work-column-title">Experience</h4>
                        </div>
                        <WorkExp />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;
