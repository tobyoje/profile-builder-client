import { Link, useNavigate, useParams } from "react-router-dom";
import SettingsHeader from "../../components/SettingsHeader/SettingsHeader";
import "./EditProfileImage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import uploadIcon from "../../assets/icons/upload.svg";

const EditProfileImage = () => {
  const [basicData, setBasicData] = useState({});
  const [imageData, setImageData] = useState(null);
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

  const fileChange = (event) => {
    setImageData(event.target.files[0]);
  };

  const newBasic = {
    profile_image: basicData.heroPhoto,
    hero_image: basicData.heroPhoto,
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    setFormErrors({});

    let formIsValid = true;

    const errors = {};

    // if (!basicData.profilePhoto) {
    //   formIsValid = false;
    //   errors["error_profilePhoto"] = true;
    // }

    // if (!formIsValid) {
    //   return setFormErrors(errors);
    // }

    setTimeout(() => {
      navigate("/settings");
    }, 1000);

    const token = sessionStorage.getItem("token");

    axios
      .put(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/profileimage/${pageLink}`,
        newBasic,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SettingsHeader />

      <div className="basic">
        <h2 className="basic__title">Photo</h2>
        <p className="basic__subtitle">
          Add your profile image and a beautiful banner picture
        </p>

        <div className="basic__form">
          <form onSubmit={handleUpdate}>
            <div className="upload-area">
              <label htmlFor="inputfile">upload your spotlight picture</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile"
                name="profile_image"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) => fileChange(event)}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>
            {formErrors.error_pageTitle && (
              <p className="form-error">This field is required</p>
            )}

            <div className="choose-hero">
              <h2 className="basic__subtitle basic__subtitle--bold">
                Choose your hero photo or upload yours
              </h2>

              <div className="hero-samples">
                <div className="hero-samples__col">
                  <input
                    type="radio"
                    name="heroPhoto"
                    id="hero1"
                    value={`${process.env.REACT_APP_API_BASE_URL}/images/hero-1.jpg`}
                    onChange={(event) => handleChange(event)}
                  />
                  <label htmlFor="hero1"></label>

                  <input
                    type="radio"
                    name="heroPhoto"
                    id="hero2"
                    value={`${process.env.REACT_APP_API_BASE_URL}/images/hero-2.jpg`}
                    onChange={(event) => handleChange(event)}
                  />
                  <label htmlFor="hero2"></label>

                  <input
                    type="radio"
                    name="heroPhoto"
                    id="hero3"
                    value={`${process.env.REACT_APP_API_BASE_URL}/images/hero-3.jpg`}
                    onChange={(event) => handleChange(event)}
                  />
                  <label htmlFor="hero3"></label>
                </div>

                <div className="hero-samples__col">
                  <input
                    type="radio"
                    name="heroPhoto"
                    id="hero4"
                    value={`${process.env.REACT_APP_API_BASE_URL}/images/hero-4.jpg`}
                    onChange={(event) => handleChange(event)}
                  />
                  <label htmlFor="hero4"></label>
                  <input
                    type="radio"
                    name="heroPhoto"
                    id="hero5"
                    value={`${process.env.REACT_APP_API_BASE_URL}/images/hero-5.jpg`}
                    onChange={(event) => handleChange(event)}
                  />
                  <label htmlFor="hero5"></label>

                  <input
                    type="radio"
                    name="heroPhoto"
                    id="hero6"
                    value={`${process.env.REACT_APP_API_BASE_URL}/images/hero-6.jpg`}
                    onChange={(event) => handleChange(event)}
                  />
                  <label htmlFor="hero6"></label>
                </div>
              </div>
            </div>

            <button className="basic__button">NEXT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfileImage;
