import prof1 from "../../assets/img/prof1.png";

function HeroImg() {
  return (
    <div className="col-lg-5 mx-auto col-md-5 text-center align-items-center">
      <div className="center-container">
        <img
          src={prof1}
          alt="Profile"
          className="img-fluid"
          id="hero-img"
        />
      </div>
    </div>
  );
}

export default HeroImg;