import Maths from "../../assets/img/maths.png";
import Coding from "../../assets/img/coder.png";

function AboutImg() {
    return (
        <div className="col-lg-5 col-md-5 col-sm-12 col-12 text-center about-pic pt-3">
            <img src={Maths} alt="Math illustration" className="img-fluid about-maths-img" />
            <div className="main">
                <img src={Coding} alt="Coder" className="main-coder" />
                <svg className="main-ring" viewBox="0 0 200 200">
                    <defs>
                        <path
                            id="circle"
                            d="M 100, 100
                                m -75, 0
                                a 75, 75 0 1, 0 150, 0
                                a 75, 75 0 1, 0 -150, 0
                            "
                        ></path>
                    </defs>
                    <text width="400">
                        <textPath alignmentBaseline="top" xlinkHref="#circle" className="text">
                            FULL-STACK DEVELOPER FULL-STACK DEVELOPER
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
}

export default AboutImg;
