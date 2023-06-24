import "../../components/Hero/Hero.scss";
import mainLOGO from "../../assets/images/logo.svg"

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__content">
          <img className="hero__logo" src={mainLOGO} alt="" />
          <h2 className="hero__heading">
            Create Personal Profile Pages Easily!
          </h2>
          <p className="hero__subheading">
            Make beautiful personal profile pages in no time and share the links
            across your network.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
