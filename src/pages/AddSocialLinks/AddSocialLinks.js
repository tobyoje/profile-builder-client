import { Link, useNavigate } from "react-router-dom";
import SetupHeader from "../../components/SetupHeader/SetupHeader";
import "./AddSocialLinks.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const AddSocialLinks = () => {
  const [basicData, setBasicData] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return navigate("../login");
    }

    // Get the data from the API
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/user/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setBasicData({ ...basicData, [event.target.name]: event.target.value });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    setFormErrors({});

    let formIsValid = true;

    const errors = {};

    // if (!basicData.pageTitle) {
    //   formIsValid = false;
    //   errors["error_pageTitle"] = true;
    // }

    // if (!basicData.fullName) {
    //   formIsValid = false;
    //   errors["error_fullName"] = true;
    // }

    // if (!basicData.link) {
    //   formIsValid = false;
    //   errors["error_link"] = true;
    // }

    // if (!basicData.biography) {
    //   formIsValid = false;
    //   errors["error_biography"] = true;
    // }

    // if (
    //   !basicData.pageTitle ||
    //   !basicData.fullName ||
    //   !basicData.link ||
    //   !basicData.biography
    // ) {
    //   formIsValid = false;
    //   errors["error_noEntry"] = true;
    // }

    if (!formIsValid) {
      return setFormErrors(errors);
    }

    setTimeout(() => {
      navigate("/external-links");
    }, 1000);

    const newBasic = {
      twitter: basicData.twitter,
      facebook: basicData.facebook,
      linkedin: basicData.linkedin,
      instagram: basicData.instagram,
      youtube: basicData.youtube,
      github: basicData.github,
      email: basicData.email,
    };

    const token = sessionStorage.getItem("token");

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/user/socials`, newBasic, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SetupHeader />
      <div className="social">
        <h2 className="social__title">Add Social Links</h2>
        <p className="social__subtitle">Add some information for your page</p>

        <div className="social__form">
          <form className="social__form-container" onSubmit={handleUpdate}>
          <div className="social__form-col">

            <div className="twitterfield">
              <input
                type="text"
                placeholder="https://twitter.com/username"
                name="twitter"
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
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>
            </div>


          <div className="social__form-col">

            <div className="youtubefield">
              <input
                type="text"
                placeholder="https://youtube.com/username"
                name="youtube"
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
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <button className="social__button">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSocialLinks;
