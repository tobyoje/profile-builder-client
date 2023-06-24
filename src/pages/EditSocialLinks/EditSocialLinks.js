import { Link, useNavigate, useParams } from "react-router-dom";
import SettingsHeader from "../../components/SettingsHeader/SettingsHeader";
import "./EditSocialLinks.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const EditSocialLinks = () => {
  const [basicData, setBasicData] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { pageLink } = useParams();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return navigate("../login");
    }

    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/user/${pageLink}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setBasicData({ ...basicData, [event.target.name]: event.target.value });
  };

  const updatedSocials = {
    twitter: basicData.twitter || user.twitter,
    facebook: basicData.facebook || user.facebook,
    linkedin: basicData.linkedin || user.linkedin,
    instagram: basicData.instagram || user.instagram,
    youtube: basicData.youtube || user.youtube,
    github: basicData.github || user.github,
    email: basicData.email || user.email,
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    // setFormErrors({});

    // let formIsValid = true;

    // const errors = {};

    // if (!formIsValid) {
    //   return setFormErrors(errors);
    // }

    const token = sessionStorage.getItem("token");

    axios
      .put(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/socials/${pageLink}`,
        updatedSocials,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setTimeout(() => {
          navigate("/settings");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SettingsHeader />
      <div className="social">
        <h2 className="social__title">Edit Social Links</h2>
        <p className="social__subtitle">
          Edit or add more social links for your page
        </p>

        <div className="social__form">
          <form onSubmit={handleUpdate}>
            <div className="twitterfield">
              <input
                type="text"
                placeholder="https://twitter.com/username"
                name="twitter"
                defaultValue={user.twitter}
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            {formErrors.error_pageTitle && (
              <p className="form-error">This field is required</p>
            )}

            <div className="instagramfield">
              <input
                type="text"
                placeholder="https://instagram.com/username"
                name="instagram"
                defaultValue={user.instagram}
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>
            {formErrors.error_fullName && (
              <p className="form-error">This field is required</p>
            )}

            <div className="facebookfield">
              <input
                type="text"
                placeholder="https://facebook.com/username"
                name="facebook"
                defaultValue={user.facebook}
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <div className="linkedinfield">
              <input
                type="text"
                placeholder="https://linkedin.com/username"
                name="linkedin"
                defaultValue={user.linkedin}
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <div className="youtubefield">
              <input
                type="text"
                placeholder="https://youtube.com/username"
                name="youtube"
                defaultValue={user.youtube}
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <div className="githubfield">
              <input
                type="text"
                placeholder="https://github.com/username"
                name="github"
                defaultValue={user.github}
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <div className="emailfield">
              <input
                type="text"
                placeholder="example@email.com"
                name="email"
                defaultValue={user.email}
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <button className="social__button">NEXT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditSocialLinks;
