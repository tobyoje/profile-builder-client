import SetupHeader from "../../components/SetupHeader/SetupHeader";
import { Link, useNavigate } from "react-router-dom";
import "./AddStyles.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const AddStyles = () => {
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
      .get("http://localhost:8080/api/user/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setBasicData({ ...basicData, [event.target.name]: event.target.value });
  };

  const handleBasic = (event) => {
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
      navigate("/one");
    }, 1000);

    const newBasic = {
      style: basicData.styles,
      font: basicData.fonts,
      color: basicData.themeColor,
    };

    const token = sessionStorage.getItem("token");

    axios
      .post("http://localhost:8080/api/user/theme", newBasic, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SetupHeader />
      <div className="basic">
        <h2 className="basic__title">Styles and Customization</h2>

        <div className="basic__form">
          <form onSubmit={handleBasic}>
            <select
              id="styles"
              name="styles"
              onChange={(event) => handleChange(event)}
            >
              <option value="style1">Style 1</option>
              <option value="style2">Style 2</option>
            </select>

            <select
              id="fonts"
              name="fonts"
              onChange={(event) => handleChange(event)}
            >
              <option value="font1">Font Style 1</option>
              <option value="font2">Font Style 2</option>
            </select>

            <div className="choose-color">
              <h2 className="basic__subtitle basic__subtitle--bold">
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
              </div>
            </div>

            <button className="basic__button">NEXT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStyles;
