import School from "./School"
import WorkExp from "./WorkExp"
import Header from "../SubComponents/Header"

function Work() {
    return (
        <section  id="work">
          <div className="about container col-xl-10 col-xxl-8 px-5">
            <div className="row flex-lg-row align-items-start">
              <Header 
              activeTitle={"Education"}
              h2Title={"My knowledge and experience so far..... 💻"}/>
              <School />

            </div>      
          </div>
        </section>
    
    )
}

export default Work