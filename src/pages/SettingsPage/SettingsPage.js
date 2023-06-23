import SettingsHeader from "../../components/SettingsHeader/SettingsHeader";
import "./SettingsPage.scss";
import rightArrow from "../../assets/icons/arrow-right.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const SettingsPage = () => {
  const navigate = useNavigate();
  const page_link = sessionStorage.getItem("page_link");

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return navigate("../login");
    }

    // Get the data from the API
    axios
      .get("http://localhost:8080/api/user/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="settings-header settings-header--onpage">
        <h2 className="hero__heading">Your Settings</h2>
      </div>
      <div className="settings">
        <h2 className="settings__title">
          Switch-up your page content and styles to suit your audience
        </h2>

        <div className="settings__basic">
          <Link to={`/private/${page_link}`}>
            <div className="settings__container">
              <p>My Page</p>
              <img src={rightArrow} />
            </div>
          </Link>

          <Link to={`/edit-basic/${page_link}`}>
            <div className="settings__container">
              <p>Basic Information</p>
              <img src={rightArrow} />
            </div>
          </Link>

          <Link to={`/edit-styles/${page_link}`}>
            <div className="settings__container">
              <p>Styles and Customization</p>
              <img src={rightArrow} />
            </div>
          </Link>

          <Link to={`/edit-profile-images/${page_link}`}>
            <div className="settings__container">
              <p>Spotlight and Hero Photo</p>
              <img src={rightArrow} />
            </div>
          </Link>
        </div>

        <h2 className="settings__title">Page Sections</h2>

        <div className="settings__basic">
          <Link to={`/edit-socials/${page_link}`}>
            <div className="settings__container">
              <div className="settings__container--left">
                <div className="settings__container--counter">5</div>
                <p>Social Links</p>
              </div>
              <img src={rightArrow} />
            </div>
          </Link>

          <Link to={`/edit-external/${page_link}`}>
            <div className="settings__container">
              <div className="settings__container--left">
                <div className="settings__container--counter">5</div>
                <p>External Links</p>
              </div>
              <img src={rightArrow} />
            </div>
          </Link>

          <Link to={`/edit-image-cards/${page_link}`}>
            <div className="settings__container">
              <div className="settings__container--left">
                <div className="settings__container--counter">6</div>
                <p>Image Cards</p>
              </div>
              <img src={rightArrow} />
            </div>
          </Link>

          <Link to={`/edit-gallery/${page_link}`}>
            <div className="settings__container">
              <div className="settings__container--left">
                <div className="settings__container--counter">10</div>
                <p>Gallery Images</p>
              </div>
              <img src={rightArrow} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
