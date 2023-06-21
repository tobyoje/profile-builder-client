import "./ImageCards.scss";
import extlinkICON from "../../../assets/icons/ext-link.svg";
import { Link } from "react-router-dom";

const ImageCards = ({ profileData }) => {
  return (
    <>
      <div className="imagecards">
        <h2 className="imagecards__heading">My Image Cards</h2>

        <Link to={profileData.ic_link1} target="_blank" rel="noreferrer">
          <div
            className="imagecards__container"
            style={{
              backgroundImage: `linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.893),
                rgba(0, 0, 0, 0.553)
              ), url("${profileData.ic_image1}")`,
            }}
          >
            <p className="imagecards__link-title">{profileData.ic_title1}</p>
            <img
              className="imagecards__link-icon"
              src={extlinkICON}
              alt="link"
            />
          </div>
        </Link>

        <Link to={profileData.ic_link2} target="_blank" rel="noreferrer">
          <div
            className="imagecards__container"
            style={{
              backgroundImage: `linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.893),
                rgba(0, 0, 0, 0.553)
              ), url("${profileData.ic_image2}")`,
            }}
          >
            <p className="imagecards__link-title">{profileData.ic_title2}</p>
            <img
              className="imagecards__link-icon"
              src={extlinkICON}
              alt="link"
            />
          </div>
        </Link>

        <Link to={profileData.ic_link3} target="_blank" rel="noreferrer">
          <div
            className="imagecards__container"
            style={{
              backgroundImage: `linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.893),
                rgba(0, 0, 0, 0.553)
              ), url("${profileData.ic_image3}")`,
            }}
          >
            <p className="imagecards__link-title">{profileData.ic_title3}</p>
            <img
              className="imagecards__link-icon"
              src={extlinkICON}
              alt="link"
            />
          </div>
        </Link>

        <Link to={profileData.ic_link4} target="_blank" rel="noreferrer">
          <div
            className="imagecards__container"
            style={{
              backgroundImage: `linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.893),
                rgba(0, 0, 0, 0.553)
              ), url("${profileData.ic_image4}")`,
            }}
          >
            <p className="imagecards__link-title">{profileData.ic_title4}</p>
            <img
              className="imagecards__link-icon"
              src={extlinkICON}
              alt="link"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ImageCards;
