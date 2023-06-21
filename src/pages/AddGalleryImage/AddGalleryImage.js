import { Link, useNavigate } from "react-router-dom";
import SetupHeader from "../../components/SetupHeader/SetupHeader";
import "./AddGalleryImage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import addICON from "../../assets/icons/plus.svg";
import uploadIcon from "../../assets/icons/upload.svg";

const AddGalleryImage = () => {
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

    if (!formIsValid) {
      return setFormErrors(errors);
    }

    setTimeout(() => {
      navigate("/styles");
    }, 1000);

    const newBasic = {
      g_image1: "../../assets/images/gallery-image-sample",
      g_image2: "../../assets/images/gallery-image-sample",
    };

    const token = sessionStorage.getItem("token");

    axios
      .post("http://localhost:8080/api/user/gallery", newBasic, {
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
        <h2 className="basic__title">Add Image to Gallery</h2>
        <p className="basic__subtitle">Add beautiful images to your gallery</p>

        <div className="basic__form">
          <form onSubmit={handleBasic}>
            <div className="upload-area1">
              <label htmlFor="inputfile">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile"
                name="image1"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) => handleChange(event)}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <div className="upload-area1">
              <label htmlFor="inputfile">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile"
                name="image2"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) => handleChange(event)}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            {formErrors.error_pageTitle && (
              <p className="form-error">This field is required</p>
            )}

            <div className="basic__formadd">
              <img className="basic__formadd--image" src={addICON} alt="" />
              <p> Add New</p>
            </div>

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

export default AddGalleryImage;
