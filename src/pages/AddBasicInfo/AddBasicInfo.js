import { Link, useNavigate, useParams } from "react-router-dom";
import SetupHeader from "../../components/SetupHeader/SetupHeader";
import "./AddBasicInfo.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const AddBasicInfo = () => {
  const [basicData, setBasicData] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { pageLink } = useParams();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const page_link = sessionStorage.getItem("page_link");

    if (!token && !page_link) {
      navigate("/login");
    } else if (page_link === "null" || page_link === "undefined") {
      navigate("/basic");
    } else if (page_link && token) {
      navigate(`/settings/${pageLink}`);
    }
  }, []);

  const handleChange = (event) => {
    setBasicData({ ...basicData, [event.target.name]: event.target.value });
  };

  const handleBasic = (event) => {
    event.preventDefault();
    setFormErrors({});

    let formIsValid = true;

    const errors = {};

    if (!basicData.pageTitle) {
      formIsValid = false;
      errors["error_pageTitle"] = true;
    }

    if (!basicData.fullName) {
      formIsValid = false;
      errors["error_fullName"] = true;
    }

    if (!basicData.link) {
      formIsValid = false;
      errors["error_link"] = true;
    }

    if (!basicData.biography) {
      formIsValid = false;
      errors["error_biography"] = true;
    }

    if (
      !basicData.pageTitle ||
      !basicData.fullName ||
      !basicData.link ||
      !basicData.biography
    ) {
      formIsValid = false;
      errors["error_noEntry"] = true;
    }

    if (!formIsValid) {
      return setFormErrors(errors);
    }

    setTimeout(() => {
      navigate("/profile-images");
    }, 1000);

    const newBasic = {
      page_title: basicData.pageTitle,
      full_name: basicData.fullName,
      page_link: basicData.link,
      biography: basicData.biography,
    };

    const token = sessionStorage.getItem("token");

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/user/setup`, newBasic, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        sessionStorage.setItem("page_link", basicData.link);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SetupHeader />
      <div className="basicinfo">
        <h2 className="basicinfo__title">Basic Information</h2>
        <p className="basicinfo__subtitle">
          Add some information for your page
        </p>

        <div className="basicinfo__form">
          <form className="basicinfo__form-container" onSubmit={handleBasic}>
            <div className="basicinfo__form-col">
              <input
                type="text"
                placeholder="Page title"
                name="pageTitle"
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
              {formErrors.error_pageTitle && (
                <p className="form-error">This field is required</p>
              )}
              <input
                type="text"
                placeholder="Your name"
                name="fullName"
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_fullName ? "input--error" : ""
                }`}
              />
              {formErrors.error_fullName && (
                <p className="form-error">This field is required</p>
              )}

              <input
                type="text"
                placeholder="Page link"
                name="link"
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_link ? "input--error" : ""
                }`}
              />
              {formErrors.error_link && (
                <p className="form-error">This field is required</p>
              )}
            </div>

            <div className="basicinfo__form-col">
              <textarea
                type=""
                placeholder="Biography or introtext ..."
                name="biography"
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_biography ? "input--error" : ""
                }`}
              />
              {formErrors.error_biography && (
                <p className="form-error">This field is required</p>
              )}
              <button className="basicinfo__button">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBasicInfo;
