import "./Intro.scss";
import settingsICON from "../../../assets/icons/settings.svg";
import logoutICON from "../../../assets/icons/logout.svg";
import twitterICON from "../../../assets/icons/twitter-white.svg";
import instagramICON from "../../../assets/icons/instagram-white.svg";
import facebookICON from "../../../assets/icons/facebook-white.svg";
import linkedinICON from "../../../assets/icons/linkedin-white.svg";
import youtubeICON from "../../../assets/icons/youtube-white.svg";
import emailICON from "../../../assets/icons/email-white.svg";
import { Link, useNavigate, useParams } from "react-router-dom";

const Intro = ({ profileData, currentUserId }) => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("user_id");
  const navigate = useNavigate();
  const { pageLink } = useParams();


  console.log(currentUserId);

  console.log(profileData.user_id);

  const showButtons = token && profileData.user_id == userId;

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("page_link");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  console.log(profileData);

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(
                0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)
            ), url("${profileData.hero_image}")`,
        }}
        className="intro2"
      >
        <div className="intro2__icons">
          {showButtons && (
            <>
              <div className="intro2__icons-col">
              <Link to={`/settings/${pageLink}`}>
                  {" "}
                  <img
                    className="intro2__icon intro2__icon--first"
                    src={settingsICON}
                    alt="settings"
                  />
                </Link>
              </div>
              <div className="intro2__icons-col">
                <img
                  className="intro2__icon"
                  src={logoutICON}
                  alt="logout"
                  onClick={handleLogout}
                />
              </div>
            </>
          )}
        </div>

        <div className="intro2__details">
          <img
            style={{ borderColor: `${profileData.color}` }}
            className="intro2__profileimg"
            src={`${process.env.REACT_APP_API_BASE_URL}/public-images/${profileData.profile_image}`}
            alt="profile Picture"
          />

          <div className="intro2__info">
            <h2 className="intro2__name">{profileData.full_name}</h2>
            <p className="intro2__bio">{profileData.biography}</p>
          </div>

          <div className="intro2__socials">
            {profileData.twitter && (
              <Link to={profileData.twitter} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundColor: ` ${profileData.color}` }}
                  className="intro2__social-container"
                >
                  <img
                    className="intro2__social-icon"
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
                  className="intro2__social-container"
                >
                  <img
                    className="intro2__social-icon"
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
                  className="intro2__social-container"
                >
                  <img
                    className="intro2__social-icon--facebook"
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
                  className="intro2__social-container"
                >
                  <img
                    className="intro2__social-icon"
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
                  className="intro2__social-container"
                >
                  <img
                    className="intro2__social-icon"
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
                  className="intro2__social-container"
                >
                  <img
                    className="intro2__social-icon"
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
