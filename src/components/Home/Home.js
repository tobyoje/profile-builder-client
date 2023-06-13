import SampleIMG from "../../assets/images/sample.png";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="main">
        <img className="main__image" src={SampleIMG} alt="Featured" />
        <div className="main__buttons">
          <button className="primary-button">TRY BETA</button>
          <button className="secondary-button">VIEW DEMOS</button>
        </div>
      </div>
    </>
  );
};

export default Home;
