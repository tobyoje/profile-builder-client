import { Link, useNavigate, useParams } from "react-router-dom";
import SettingsHeader from "../../components/SettingsHeader/SettingsHeader";
import "./EditExternalLinks.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import addICON from "../../assets/icons/plus.svg";

const EditExternalLinks = () => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setBasicData({ ...basicData, [event.target.name]: event.target.value });
  };

  const updatedLinks = {
    ext_link1: basicData.link1 || user.ext_link1,
    ext_title1: basicData.title1 || user.ext_title1,
    ext_link2: basicData.link2 || user.ext_link2,
    ext_title2: basicData.title2 || user.ext_title2,
    ext_link3: basicData.link3 || user.ext_link3,
    ext_title3: basicData.title3 || user.ext_title3,
    ext_link4: basicData.link4 || user.ext_link4,
    ext_titl4: basicData.title4 || user.ext_title4,
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

    // if (!formIsValid) {
    //   return setFormErrors(errors);
    // }

    const token = sessionStorage.getItem("token");

    axios
      .put(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/external-links/${pageLink}`,
        updatedLinks,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
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
      <div className="extlink">
        <h2 className="extlink__title">Edit External Links</h2>
        <p className="extlink__subtitle">Edit and add links to your page</p>

        <div className="extlink__form">
          <form className="extlink__form-container " onSubmit={handleUpdate}>
            <div className="extlink__form-col">
              <div className="linkfield">
                <input
                  type="text"
                  placeholder="Add your external url"
                  name="link1"
                  defaultValue={user.ext_link1}
                  onChange={(event) => handleChange(event)}
                  className={`input ${
                    formErrors.error_pageTitle ? "input--error" : ""
                  }`}
                />
              </div>
              <input
                type="text"
                placeholder="Link title"
                name="title1"
                defaultValue={user.ext_title1}
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />

              <div className="linkfield">
                <input
                  type="text"
                  placeholder="Add your external url"
                  name="link2"
                  defaultValue={user.ext_link2}
                  onChange={(event) => handleChange(event)}
                  className={`input ${
                    formErrors.error_pageTitle ? "input--error" : ""
                  }`}
                />
              </div>
              <input
                type="text"
                placeholder="Link title"
                name="title2"
                defaultValue={user.ext_title2}
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <div className="extlink__form-col">
              <div className="linkfield">
                <input
                  type="text"
                  placeholder="Add your external url"
                  name="link3"
                  defaultValue={user.ext_link3}
                  onChange={(event) => handleChange(event)}
                  className={`input ${
                    formErrors.error_pageTitle ? "input--error" : ""
                  }`}
                />
              </div>
              <input
                type="text"
                placeholder="Link title"
                name="title3"
                defaultValue={user.ext_title3}
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />

              <div className="linkfield">
                <input
                  type="text"
                  placeholder="Add your external url"
                  name="link4"
                  defaultValue={user.ext_link4}
                  onChange={(event) => handleChange(event)}
                  className={`input ${
                    formErrors.error_pageTitle ? "input--error" : ""
                  }`}
                />
              </div>
              <input
                type="text"
                placeholder="Link title"
                name="title2"
                defaultValue={user.ext_title4}
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />

              {/* <div className="extlink__formadd">
              <img className="extlink__formadd--image" src={addICON} alt="" />
              <p> Add New</p>
            </div> */}

              {formErrors.error_pageTitle && (
                <p className="form-error">This field is required</p>
              )}

              <button className="extlink__button">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditExternalLinks;
