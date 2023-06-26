import "./SettingsPage.scss";
import rightArrow from "../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";
import copyICON from "../../assets/icons/copy.svg";

const SettingsPage = () => {
  const page_link = sessionStorage.getItem("page_link");

  const handleCopy = () => {
    navigator.clipboard
      .writeText(`https://quickprofile.me/${page_link}`)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <>
      <div className="settings-container">
        <h2 className="settings-heading">Your Settings</h2>
      </div>
      <div className="settings-publink">
        <input
          type="text"
          value={`https://quickprofile.me/${page_link}`}
          id="myInput"
          className="settings__clipboard"
        ></input>
        <div className="settings__clip-button" onClick={handleCopy}>
          <img className="settings__clip-icon" src={copyICON} alt="icon" /> Copy
          Link
        </div>
      </div>

      <div className="settings">
        <div className="settings__basic">
          <h2 className="settings__title">Basic information and styles</h2>
          <Link to={`/private/${page_link}`}>
            <div className="settings__container">
              <p>My Page</p>
              <img src={rightArrow} alt="icon" />
            </div>
          </Link>

          <Link to={`/edit-basic/${page_link}`}>
            <div className="settings__container">
              <p>Basic Information</p>
              <img src={rightArrow} alt="icon" />
            </div>
          </Link>

          <Link to={`/edit-styles/${page_link}`}>
            <div className="settings__container">
              <p>Styles and Customization</p>
              <img src={rightArrow} alt="icon" />
            </div>
          </Link>

          <Link to={`/edit-profile-images/${page_link}`}>
            <div className="settings__container">
              <p>Spotlight and Hero Photo</p>
              <img src={rightArrow} alt="icon" />
            </div>
          </Link>
        </div>

        <div className="settings__basic">
          <h2 className="settings__title">Page Sections</h2>

          <Link to={`/edit-socials/${page_link}`}>
            <div className="settings__container">
              <div className="settings__container--left">
                <div className="settings__container--counter">5</div>
                <p>Social Links</p>
              </div>
              <img src={rightArrow} alt="icon" />
            </div>
          </Link>

          <Link to={`/edit-external/${page_link}`}>
            <div className="settings__container">
              <div className="settings__container--left">
                <div className="settings__container--counter">5</div>
                <p>External Links</p>
              </div>
              <img src={rightArrow} alt="icon" />
            </div>
          </Link>

          <Link to={`/edit-image-cards/${page_link}`}>
            <div className="settings__container">
              <div className="settings__container--left">
                <div className="settings__container--counter">6</div>
                <p>Image Cards</p>
              </div>
              <img src={rightArrow} alt="icon" />
            </div>
          </Link>

          <Link to={`/edit-gallery/${page_link}`}>
            <div className="settings__container">
              <div className="settings__container--left">
                <div className="settings__container--counter">10</div>
                <p>Gallery Images</p>
              </div>
              <img src={rightArrow} alt="icon" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
