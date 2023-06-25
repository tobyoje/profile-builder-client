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
    <div className="extlinks2">
      {profileData.ext_link1 && profileData.ext_title1 && (
        <div>
          <h2 className="extlinks2__heading">My Quick Links</h2>

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
                  style={{
                    borderColor: profileData.color,
                  }}
                  className="extlinks2__container"
                >
                  <p
                    style={{
                      color: profileData.color,
                    }}
                    className="extlinks2__link-title"
                  >
                    {linkData.title}
                  </p>

                  <svg
                    className="extlinks2__link-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99984 4.16666C6.77818 4.16666 4.1665 6.77834 4.1665 10C4.1665 13.2217 6.77818 15.8333 9.99984 15.8333C13.2215 15.8333 15.8332 13.2217 15.8332 10"
                      stroke={profileData.color}
                      stroke-width="2.16667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.833 9.16667L16.6663 3.33334"
                      stroke={profileData.color}
                      stroke-width="2.16667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 2.5H17.5V7.5"
                      stroke={profileData.color}
                      stroke-width="2.16667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
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
