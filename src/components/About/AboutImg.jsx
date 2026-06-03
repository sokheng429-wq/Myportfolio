import Maths from "../../assets/img/maths.png"
import MathsGIF from "../../assets/img/Maths_gif.gif"

import Coding from  "../../assets/img/coder.png"

function AboutImg () {
    return (
        <div className="col-lg-5 col-md-5  col-sm-12 col-12 text-center text-lg-start about-pic pt-3">
        <img src={Maths} height="auto" width="1440" className="img-fluid p-3 " />
            <div className="main" >

        
            <img src={Coding} width="170"  height="170"/> 
            <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
                <defs>
                <path id="circle" d="M 100, 100
                        m -75, 0
                        a 75, 75 0 1, 0 150, 0
                        a 75, 75 0 1, 0 -150, 0
                        ">
                </path>
                </defs>
                <text width="400">
                <textPath alignmentBaseline="top" xlinkHref="#circle" className="text">
                FULL-STACK DEVELOPER FULL-STACK DEVELOPER
                </textPath>
                </text>
            </svg>
            </div>
            
        
        </div>

    )
}

export default AboutImg;