import "./Intro.scss";
import settingsICON from "../../../assets/icons/settings.svg";
import editICON from "../../../assets/icons/edit.svg";
import logoutICON from "../../../assets/icons/logout.svg";
import defaultIMG from "../../../assets/images/profile-image.jpg";
import twitterICON from "../../../assets/icons/twitter-white.svg";
import instagramICON from "../../../assets/icons/instagram-white.svg";
import facebookICON from "../../../assets/icons/facebook-white.svg";
import linkedinICON from "../../../assets/icons/linkedin-white.svg";
import youtubeICON from "../../../assets/icons/youtube-white.svg";
import emailICON from "../../../assets/icons/email-white.svg";
import { Link, useNavigate } from "react-router-dom";

const Intro = ({ profileData, currentUserId }) => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("user_id");
  const navigate = useNavigate();

  console.log(currentUserId);

  console.log(profileData.user_id);

  const showButtons = token && profileData.user_id == userId;

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user_id");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  console.log(profileData);

  return (
    <>
      <div className="intro">
        <div
          style={{
            backgroundImage: `linear-gradient(
                0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)
            ), url("${profileData.hero_image}")`,
          }}
          className="intro__icons"
        >
          {showButtons && (
            <>
              <div className="intro__icons-col">
                <img
                  className="intro__icon--first"
                  src={settingsICON}
                  alt="settings"
                />
              </div>
              <div className="intro__icons-col">
                <img
                  className="intro__icon"
                  src={logoutICON}
                  alt="logout"
                  onClick={handleLogout}
                />
              </div>
            </>
          )}
        </div>

        <div className="intro__details">
          <img
            style={{ border: `6px solid ${profileData.color}` }}
            className="intro__profileimg"
            src={profileData.profile_image}
            alt="profile Picture"
          />
          <h2 className="intro__name">{profileData.page_title}</h2>
          <p className="intro__bio">{profileData.biography}</p>

          <div className="intro__socials">
            {profileData.twitter && (
              <Link to={profileData.twitter} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundColor: ` ${profileData.color}` }}
                  className="intro__social-container"
                >
                  <img
                    className="intro__social-icon"
                    src={twitterICON}
                    alt="twitter"
                  />
                </div>
              </Link>
            )}

            {profileData.instagram && (
              <Link to={profileData.instagram} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundColor: ` ${profileData.color}` }}
                  className="intro__social-container"
                >
                  <img
                    className="intro__social-icon"
                    src={instagramICON}
                    alt="instagram"
                  />
                </div>
              </Link>
            )}

            {profileData.facebook && (
              <Link to={profileData.facebook} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundColor: ` ${profileData.color}` }}
                  className="intro__social-container"
                >
                  <img
                    className="intro__social-icon--facebook"
                    src={facebookICON}
                    alt="facebook"
                  />
                </div>
              </Link>
            )}

            {profileData.linkedin && (
              <Link to={profileData.linkedin} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundColor: ` ${profileData.color}` }}
                  className="intro__social-container"
                >
                  <img
                    className="intro__social-icon"
                    src={linkedinICON}
                    alt="linkedin"
                  />
                </div>
              </Link>
            )}

            {profileData.youtube && (
              <Link to={profileData.youtube} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundColor: ` ${profileData.color}` }}
                  className="intro__social-container"
                >
                  <img
                    className="intro__social-icon"
                    src={youtubeICON}
                    alt="youtube"
                  />
                </div>
              </Link>
            )}

            {profileData.email && (
              <Link to={profileData.email} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundColor: ` ${profileData.color}` }}
                  className="intro__social-container"
                >
                  <img
                    className="intro__social-icon"
                    src={emailICON}
                    alt="email"
                  />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
