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

    // // Get the data from the API
    // axios
    //   .get("http://localhost:8080/api/user/current", {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    axios
      .get(`http://localhost:8080/api/user/${pageLink}`, {
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

  //   console.log(basicData);

  const updatedLink = basicData.link || user.page_link;

  const newBasic = {
    page_title: basicData.page_title || user.page_title,
    full_name: basicData.full_name || user.full_name,
    page_link: updatedLink,
    biography: basicData.biography || user.biography,
  };

  console.log(newBasic);

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

    console.log(user);

    const token = sessionStorage.getItem("token");

    axios
      .put(`http://localhost:8080/api/user/${pageLink}`, newBasic, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        sessionStorage.setItem("page_link", updatedLink);
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

      <div className="basic">
        <h2 className="basic__title">Edit Basic Information</h2>
        <p className="basic__subtitle">Add some information for your page</p>

        <div className="basic__form">
          <form onSubmit={handleUpdate}>
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
              className={`input ${formErrors.error_link ? "input--error" : ""}`}
            />
            {formErrors.error_link && (
              <p className="form-error">This field is required</p>
            )}
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

            <button className="basic__button">SAVE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBasicInfo;
