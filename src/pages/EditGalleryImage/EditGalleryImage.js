import { Link, useNavigate, useParams } from "react-router-dom";
import SettingsHeader from "../../components/SettingsHeader/SettingsHeader";
import "./EditGalleryImage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import addICON from "../../assets/icons/plus.svg";
import uploadIcon from "../../assets/icons/upload.svg";

const EditGalleryImage = () => {
  const [image1URL, setImage1URL] = useState("");
  const [image2URL, setImage2URL] = useState("");
  const [image3URL, setImage3URL] = useState("");
  const [image4URL, setImage4URL] = useState("");
  const [image5URL, setImage5URL] = useState("");
  const [image6URL, setImage6URL] = useState("");
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

  // const handleChange = (event) => {
  //   setBasicData({ ...basicData, [event.target.name]: event.target.value });
  // };

  const handleFileSelect = (event, inputName) => {
    const file = event.target.files[0];
    const objectURL = URL.createObjectURL(file);

    if (inputName === "image1") {
      setImage1URL(objectURL);
    } else if (inputName === "image2") {
      setImage2URL(objectURL);
    }
  };

  const updatedGallery = {
    g_image1: image1URL,
    g_image2: image2URL,
    g_image3: image3URL,
    g_image4: image4URL,
    g_image5: image5URL,
    g_image6: image6URL,
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    setFormErrors({});

    console.log("Form submitted!");
    console.log("Image 1 URL:", image1URL);
    console.log("Image 2 URL:", image2URL);

    // let formIsValid = true;

    // const errors = {};

    // if (!basicData.pageTitle) {
    //   formIsValid = false;
    //   errors["error_pageTitle"] = true;
    // }

    // if (!basicData.fullName) {
    //   formIsValid = false;
    //   errors["error_fullName"] = true;
    // }

    // if (!formIsValid) {
    //   return setFormErrors(errors);
    // }

    // setTimeout(() => {
    //   navigate("/styles");
    // }, 1000);

    const token = sessionStorage.getItem("token");

    axios
      .put(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/gallery/${pageLink}`,
        updatedGallery,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
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
        <h2 className="basic__title">Edit Image to Gallery</h2>
        <p className="basic__subtitle">
          Edit and add new beautiful images to your gallery
        </p>

        <div className="basic__form">
          <form onSubmit={handleUpdate}>
            <div className="upload-area1">
              <label htmlFor="inputfile1">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile1"
                name="image1"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) => handleFileSelect(event, "image1")}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <div className="upload-area1">
              <label htmlFor="inputfile2">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile2"
                name="image2"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) => handleFileSelect(event, "image2")}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <div className="upload-area1">
              <label htmlFor="inputfile3">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile3"
                name="image3"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) => handleFileSelect(event, "image3")}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <div className="upload-area1">
              <label htmlFor="inputfile4">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile4"
                name="image4"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) => handleFileSelect(event, "image4")}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <div className="upload-area1">
              <label htmlFor="inputfile5">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile5"
                name="image5"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) => handleFileSelect(event, "image5")}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            <div className="upload-area1">
              <label htmlFor="inputfile6">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile6"
                name="image6"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) => handleFileSelect(event, "image6")}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>

            {formErrors.error_pageTitle && (
              <p className="form-error">This field is required</p>
            )}

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

export default EditGalleryImage;
