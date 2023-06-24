import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Home from "../../components/Home/Home";
import "./StartPage.scss";

const StartPage = () => {
  return (
    <>
      <div className="startpage">
        <Hero />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default StartPage;
