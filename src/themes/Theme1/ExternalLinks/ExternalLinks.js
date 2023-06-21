import "./ExternalLinks.scss";
import extlinkICON from "../../../assets/icons/ext-link.svg";
import { Link } from "react-router-dom";

const ExternalLinks = ({ profileData }) => {
  const linkDatas = [
    { link: profileData.ext_link1, title: profileData.ext_title1 },
    { link: profileData.ext_link2, title: profileData.ext_title2 },
    { link: profileData.ext_link3, title: profileData.ext_title3 },
    { link: profileData.ext_link4, title: profileData.ext_title4 },
  ];

  return (
    <div className="extlinks">
      {profileData.ext_link1 && profileData.ext_title1 && (
        <div>
          <h2 className="extlinks__heading">My Quick Links</h2>

          {linkDatas.map((linkData) => {
            if (!linkData.link && !linkData.title) {
              // Skip rendering if link is empty
              return null;
            }

            return (
              <Link
                to={linkData.link}
                target="_blank"
                rel="noreferrer"
                key={linkData.link}
              >
                <div
                  style={{ backgroundColor: profileData.color }}
                  className="extlinks__container"
                >
                  <p className="extlinks__link-title">{linkData.title}</p>
                  <img
                    className="extlinks__link-icon"
                    src={extlinkICON}
                    alt="link"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExternalLinks;
