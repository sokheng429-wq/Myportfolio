import ProjectCard from "./ProjectCard"
import Header from "../SubComponents/Header"
import projects from "../../assets/data/projectInfo.js";

function Projects () {

    
    return (
        <>
            <section id="portfolio" className="off-white">

                <div id="proj1"></div>

                <div className="off-white about container col-xl-10 col-xxl-8 px-5 py-5 mt-5 ">
                    <div className="row flex-lg-row align-items-center g-lg-5 py-5">
                  
                  <Header 
                  activeTitle={"PROJECTS"} 
                  h2Title={"Each project is a unique piece of development 🧩"}/>

                {projects.map(project => (
                    <div key={project.id}>
                        <ProjectCard      
                            title={project.title}
                            description={project.description}
                            imgSrc={project.imgSrc}
                            navId={project.navId}
                            codeLink={project.codeLink}
                            demoLink={project.demoLink}
                            technologies={project.technologies}
                            className={project.id % 2 === 0 ? '' : 'flex-lg-row-reverse'} 
                        />
                    </div>
                ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects 