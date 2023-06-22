import SettingsHeader from "../../components/SettingsHeader/SettingsHeader";
import "./SettingsPage.scss";
import rightArrow from "../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  return (
    <>
      <SettingsHeader />
      <div className="settings">
        <h2 className="settings__title">
          Switch-up your page content and styles to suit your audience
        </h2>

        <div className="settings__basic">
        <Link to="/:pageLink"><div className="settings__container">
            <p>My Page</p>
            <img src={rightArrow} />
          </div></Link>

          <div className="settings__container">
            <p>Basic Information</p>
            <img src={rightArrow} />
          </div>

          <div className="settings__container">
            <p>Styles and Customization</p>
            <img src={rightArrow} />
          </div>

          <div className="settings__container">
            <p>Spotlight and Hero Photo</p>
            <img src={rightArrow} />
          </div>
        </div>

        <h2 className="settings__title">Page Sections</h2>

        <div className="settings__basic">
          <div className="settings__container">
            <div className="settings__container--left">
              <div className="settings__container--counter">5</div>
              <p>Social Links</p>
            </div>
            <img src={rightArrow} />
          </div>

          <div className="settings__container">
            <div className="settings__container--left">
              <div className="settings__container--counter">5</div>
              <p>External Social Links</p>
            </div>
            <img src={rightArrow} />
          </div>

          <div className="settings__container">
            <div className="settings__container--left">
              <div className="settings__container--counter">6</div>
              <p>Image Cards</p>
            </div>
            <img src={rightArrow} />
          </div>

          <div className="settings__container">
            <div className="settings__container--left">
              <div className="settings__container--counter">10</div>
              <p>Gallery Images</p>
            </div>
            <img src={rightArrow} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
