import { Link, useNavigate, useParams } from "react-router-dom";
import SettingsHeader from "../../components/SettingsHeader/SettingsHeader";
import "./EditBasicInfo.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const EditBasicInfo = () => {
  const [basicData, setBasicData] = useState({});
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setBasicData({ ...basicData, [event.target.name]: event.target.value });
  };


  const updatedLink = basicData.link || user.page_link;

  const newBasic = {
    page_title: basicData.page_title || user.page_title,
    full_name: basicData.full_name || user.full_name,
    page_link: updatedLink,
    biography: basicData.biography || user.biography,
  };


  const handleUpdate = (event) => {
    event.preventDefault();
    setFormErrors({});

    let formIsValid = true;

    const errors = {};

    if (!newBasic.page_title) {
      formIsValid = false;
      errors["error_pageTitle"] = true;
    }

    if (!newBasic.full_name) {
      formIsValid = false;
      errors["error_fullName"] = true;
    }

    if (!newBasic.page_link) {
      formIsValid = false;
      errors["error_link"] = true;
    }

    if (!newBasic.biography) {
      formIsValid = false;
      errors["error_biography"] = true;
    }

    if (!formIsValid) {
      return setFormErrors(errors);
    }


    const token = sessionStorage.getItem("token");

    axios
      .put(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/${pageLink}`,
        newBasic,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        sessionStorage.setItem("page_link", updatedLink);
        setTimeout(() => {
          navigate(`/settings/${pageLink}`);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SettingsHeader />

      <div className="basicinfo">
        <h2 className="basicinfo__title">Edit Basic Information</h2>
        <p className="basicinfo__subtitle">
          Add some information for your page
        </p>

        <div className="basicinfo__form">
          <form className="basicinfo__form-container" onSubmit={handleUpdate}>
            <div className="basicinfo__form-col">
              <input
                type="text"
                placeholder="Page title"
                name="page_title"
                defaultValue={user.page_title}
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
                name="full_name"
                defaultValue={user.full_name}
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
                defaultValue={user.page_link}
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
                defaultValue={user.biography}
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_biography ? "input--error" : ""
                }`}
              />
              {formErrors.error_biography && (
                <p className="form-error">This field is required</p>
              )}
              <button className="basicinfo__button">SAVE</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBasicInfo;
