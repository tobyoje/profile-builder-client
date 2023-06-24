import { Link } from "react-router-dom";
import SampleIMG from "../../assets/images/sample.png";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="main">
        <img className="main__image" src={SampleIMG} alt="Featured" />
        <div className="main__buttons">
         <Link to="/login"><button className="primary-button main__buttons--left">TRY BETA</button></Link>
          <button className="secondary-button main__buttons--right">VIEW DEMOS</button>
        </div>
      </div>
    </>
  );
};

export default Home;
