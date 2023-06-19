import { Link } from "react-router-dom";
import SampleIMG from "../../assets/images/sample.png";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="main">
        <img className="main__image" src={SampleIMG} alt="Featured" />
        <div className="main__buttons">
         <Link to="/join"><button className="primary-button">TRY BETA</button></Link>
          <button className="secondary-button">VIEW DEMOS</button>
        </div>
      </div>
    </>
  );
};

export default Home;
