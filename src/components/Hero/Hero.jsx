import HeroImg from "./HeroImg";
import HeroText from "./HeroText";
import TechStack from "./TechStack";
function Hero () {
    return ( 
        <>
        <section id="hero" className="off-white">
            <div className="container col-xl-10 col-xxl-8 px-5">
                <div className="row flex-lg-row-reverse align-items-center g-lg-5 py-5">
                <HeroImg />
                <HeroText />
            </div>
                <TechStack/>
            </div>
        </section>
        </>
    )
}

export default Hero;