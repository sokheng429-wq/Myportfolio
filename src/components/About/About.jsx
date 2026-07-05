import AboutImg from "./AboutImg"
import AboutText from "./AboutText"

function About() {

    return (
        <>
           <section id="about">

            <div className="about container col-xl-10 col-xxl-8 px-5 pt-5 center-container">
            <div className="row flex-lg-row align-items-center g-lg-5 py-5 ">
                <AboutImg />
                <AboutText />
            </div>
            </div>
            </section>
        </>
    )
}

export default About