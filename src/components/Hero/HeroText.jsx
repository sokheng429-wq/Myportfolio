import SocialLinks from  "./SocialLinks"
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function HeroText () {
    return  (
        <div className=" h-icon col-md-7 mx-auto col-lg-7 col-12">
        <h1 className="h1 display-5 fw-bold text-body-emphasis lh-1 mb-3">Aspiring Full-Stack Developer<span id="wave">&#x1F44B;&#x1F3FB;</span></h1>
            <p className="fs-5">
            Hi, I'm THOEUN SOKHENG. A passionate Full-Stack Node.js Developer based in Phnom Penh, Cambodia. 📍
            Currently looking for an internship or junior developer role to grow my
            skills in real-world projects.
            </p>
            <div className="h-link d-flex justify-content-md-start">
                <SocialLinks />
            </div>
        </div>
    )

}

export default HeroText