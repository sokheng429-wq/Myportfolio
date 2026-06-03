import TechstackHeader from "./TechstackHeader"
import TechstackItems from "./TechstackItems"
function TechStack () {
    return (
        <div className="tech row flex-lg-row align-items-center py-5">
        <TechstackHeader />

        <div className="col-md-10 mx-auto col-lg-10">
            <div className="row justify-content-center ">
                <TechstackItems />
            </div>
        </div>
    </div>
    )
}

export default TechStack 