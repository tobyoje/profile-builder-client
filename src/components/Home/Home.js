import { Link } from "react-router-dom";
import SampleIMG from "../../assets/images/sample.png";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="main">
        <img className="main__image" src={SampleIMG} alt="Featured" />
      </div>
    </>
  );
};

export default Home;
