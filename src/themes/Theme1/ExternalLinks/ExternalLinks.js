import "./ExternalLinks.scss";
import extlinkICON from "../../../assets/icons/ext-link.svg";
import { Link } from "react-router-dom";

const ExternalLinks = ({ profileData }) => {
  return (
    <>
      <div className="extlinks">
        {profileData.ext_link1 && profileData.ext_link1 && (
          <>
            <h2 className="extlinks__heading">My Quick Links</h2>

            <Link to={profileData.ext_link1} target="_blank" rel="noreferrer">
              <div
                style={{ backgroundColor: ` ${profileData.color}` }}
                className="extlinks__container"
              >
                <p className="extlinks__link-title">{profileData.ext_title1}</p>
                <img
                  className="extlinks__link-icon"
                  src={extlinkICON}
                  alt="link"
                />
              </div>
            </Link>
          </>
        )}

        {profileData.ext_link2 && profileData.ext_link2 && (
          <Link to={profileData.ext_link2} target="_blank" rel="noreferrer">
            <div
              style={{ backgroundColor: ` ${profileData.color}` }}
              className="extlinks__container"
            >
              <p className="extlinks__link-title">{profileData.ext_title2}</p>
              <img
                className="extlinks__link-icon"
                src={extlinkICON}
                alt="link"
              />
            </div>
          </Link>
        )}

        {profileData.ext_link3 && profileData.ext_link3 && (
          <Link to={profileData.ext_link3} target="_blank" rel="noreferrer">
            <div
              style={{ backgroundColor: ` ${profileData.color}` }}
              className="extlinks__container"
            >
              <p className="extlinks__link-title">{profileData.ext_title3}</p>
              <img
                className="extlinks__link-icon"
                src={extlinkICON}
                alt="link"
              />
            </div>
          </Link>
        )}

        {profileData.ext_link3 && profileData.ext_link3 && (
          <Link to={profileData.ext_link4} target="_blank" rel="noreferrer">
            <div
              style={{ backgroundColor: ` ${profileData.color}` }}
              className="extlinks__container"
            >
              <p className="extlinks__link-title">{profileData.ext_title4}</p>
              <img
                className="extlinks__link-icon"
                src={extlinkICON}
                alt="link"
              />
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default ExternalLinks;
