import { Link, useNavigate } from "react-router-dom";
import SetupHeader from "../../components/SetupHeader/SetupHeader";
import "./AddExternalLinks.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import addICON from "../../assets/icons/plus.svg";

const AddExternalLinks = () => {
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
      navigate("/image-cards");
    }, 1000);

    const newBasic = {
      ext_link1: basicData.link1,
      ext_title1: basicData.title1,
      ext_link2: basicData.link2,
      ext_title2: basicData.title2,
      ext_link3: basicData.link3,
      ext_title3: basicData.title3,
      ext_link4: basicData.link4,
      ext_titl4: basicData.title4,
    };

    const token = sessionStorage.getItem("token");

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/user/links`, newBasic, {
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
        <h2 className="basic__title">Add External Links</h2>
        <p className="basic__subtitle">Add some links to your page</p>

        <div className="basic__form">
          <form onSubmit={handleBasic}>
            <div className="linkfield">
              <input
                type="text"
                placeholder="Add your external url"
                name="link1"
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
              onChange={(event) => handleChange(event)}
              className={`input ${
                formErrors.error_pageTitle ? "input--error" : ""
              }`}
            />

            {/* <div className="basic__formadd">
              <img className="basic__formadd--image" src={addICON} alt="" />
              <p> Add New</p>
            </div> */}

            {formErrors.error_pageTitle && (
              <p className="form-error">This field is required</p>
            )}

            <button className="basic__button">NEXT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddExternalLinks;
