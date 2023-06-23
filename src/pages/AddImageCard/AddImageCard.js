import { Link, useNavigate } from "react-router-dom";
import SetupHeader from "../../components/SetupHeader/SetupHeader";
import "./AddImageCard.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import addICON from "../../assets/icons/plus.svg";
import uploadIcon from "../../assets/icons/upload.svg";

const AddImageCards = () => {
  const [basicData, setBasicData] = useState([]);
  const [image1URL, setImage1URL] = useState("");
  const [image2URL, setImage2URL] = useState("");
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

  const handleFileSelect = (event, inputName) => {
    const file = event.target.files[0];
    const objectURL = URL.createObjectURL(file);

    if (inputName === "image1") {
      setImage1URL(objectURL);
    } else if (inputName === "image2") {
      setImage2URL(objectURL);
    }
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
      navigate("/gallery");
    }, 1000);

    const newBasic = {
      ic_link1: basicData.link1,
      ic_title1: basicData.title1,
      ic_image1: image1URL,
      ic_link2: basicData.link2,
      ic_title2: basicData.title2,
      ic_image2: image2URL,
      // ic_link3: basicData.link3,
      // ic_title3: basicData.title3,
      // ic_image3: "../../assets/images/image-card-sample.jpg",
      // ic_link4: basicData.link4,
      // ic_title4: basicData.title4,
      // ic_image4: "../../assets/images/image-card-sample.jpg",
      // ic_link5: basicData.link5,
      // ic_title5: basicData.title5,
      // ic_image5: "../../assets/images/image-card-sample.jpg",
      // ic_link6: basicData.link6,
      // ic_title6: basicData.title6,
      // ic_image6: "../../assets/images/image-card-sample.jpg",
    };

    const token = sessionStorage.getItem("token");

    axios
      .post("http://localhost:8080/api/user/imagecards", newBasic, {
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
        <h2 className="basic__title">Add Image Cards</h2>
        <p className="basic__subtitle">Add some link cards to your page</p>

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
                onChange={(event) => handleFileSelect(event, "image1")}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>
            {formErrors.error_pageTitle && (
              <p className="form-error">This field is required</p>
            )}
            <div className="linkfield">
              <input
                type="text"
                placeholder="https://new-link.com"
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

            <div className="upload-area1">
              <label htmlFor="inputfile">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile"
                name="image2"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) => handleFileSelect(event, "image2")}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
              />
            </div>
            {formErrors.error_pageTitle && (
              <p className="form-error">This field is required</p>
            )}
            <div className="linkfield">
              <input
                type="text"
                placeholder="https://new-link.com"
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

export default AddImageCards;
