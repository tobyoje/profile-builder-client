import SettingsHeader from "../../components/SettingsHeader/SettingsHeader";
import { useNavigate, useParams } from "react-router-dom";
import "./EditStyles.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const EditStyles = () => {
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

  const updateTheme = {
    style: basicData.styles || user.style,
    font: basicData.fonts || user.font,
    color: basicData.themeColor || user.color,
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    setFormErrors({});

    let formIsValid = true;

    const errors = {};

    if (!basicData.styles) {
      formIsValid = false;
      errors["error_styles"] = true;
    }

    if (!basicData.fonts) {
      formIsValid = false;
      errors["error_fonts"] = true;
    }

    if (!basicData.themeColor) {
      formIsValid = false;
      errors["error_themeColor"] = true;
    }

    if (!formIsValid) {
      return setFormErrors(errors);
    }

    const token = sessionStorage.getItem("token");

    axios
      .put(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/theme/${pageLink}`,
        updateTheme,
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
      <div className="setup-styles">
        <h2 className="setup-styles__title">Edit Styles and Customization</h2>

        <div className="setup-styles__form">
          <form
            className="setup-styles__form-container"
            onSubmit={handleUpdate}
          >
            <div className="setup-styles__form-col">
              <select
                id="styles"
                name="styles"
                onChange={(event) => handleChange(event)}
              >
                <option value="" disabled selected>
                  Choose your style
                </option>
                <option value="style1">Style 1</option>
                <option value="style2">Style 2</option>
              </select>
              {formErrors.error_styles && (
                <p className="form-error">You must select an option</p>
              )}

              <select
                id="fonts"
                name="fonts"
                onChange={(event) => handleChange(event)}
              >
                <option value="" disabled selected>
                  Choose your font
                </option>
                <option value="Poppins">Font Style 1</option>
                <option value="Lato">Font Style 2</option>
              </select>
              {formErrors.error_fonts && (
                <p className="form-error">You must select an option</p>
              )}
            </div>

            <div className="setup-styles__form-col">
              <div className="choose-color">
                <h2 className="setup-styles__subtitle setup-styles__subtitle--bold">
                  Choose your hero photo or upload yours
                </h2>

                <div className="color-samples">
                  <div className="color-samples__col">
                    <input
                      type="radio"
                      name="themeColor"
                      id="color1"
                      value="#150e09"
                      onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="color1"></label>

                    <input
                      type="radio"
                      name="themeColor"
                      id="color2"
                      value="#ae0e28"
                      onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="color2"></label>

                    <input
                      type="radio"
                      name="themeColor"
                      id="color3"
                      value="#338a4c"
                      onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="color3"></label>
                  </div>

                  <div className="color-samples__col">
                    <input
                      type="radio"
                      name="themeColor"
                      id="color4"
                      value="#3B4DF6"
                      onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="color4"></label>
                    <input
                      type="radio"
                      name="themeColor"
                      id="color5"
                      value="#aeae28"
                      onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="color5"></label>

                    <input
                      type="radio"
                      name="themeColor"
                      id="color6"
                      value="#590813"
                      onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="color6"></label>
                  </div>
                  {formErrors.error_themeColor && (
                    <p className="form-error">
                      <br></br>You must select an option
                    </p>
                  )}
                </div>
              </div>

              <button className="setup-styles__button">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditStyles;
