import { useNavigate } from "react-router-dom";
import SetupHeader from "../../components/SetupHeader/SetupHeader";
import "./AddProfileImage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import uploadIcon from "../../assets/icons/upload.svg";

const AddProfileImage = () => {
  const [heroPhotoData, setHeroPhotoData] = useState("");
  const [file, setFile] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [imageName, setImageName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return navigate("../login");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBasic = new FormData();
    newBasic.append("image", file);
    newBasic.append("hero_image", heroPhotoData);



    const token = sessionStorage.getItem("token");

    try {
      const result = await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/setup`,
        newBasic,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImageName(result.data.imageName);
      setTimeout(() => {
        navigate("/social-links");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setHeroPhotoData(event.target.value);
  };

  return (
    <>
      <SetupHeader />

      <div className="profileimage">
        <h2 className="profileimage__title">Photo</h2>
        <p className="profileimage__subtitle">
          Add your profile image and a beautiful banner picture
        </p>

        <div className="profileimage__form">
          <form className="profileimage__form-container" onSubmit={handleSubmit}>
          <div className="profileimage__form-col">

            <div className="profileimage__upload-area ">
              <label htmlFor="inputfile">
                upload your spotlight picture
                <img className="upload-icon" src={uploadIcon} alt="icon"/>
              </label>
              <input
                type="file"
                id="inputfile"
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
              />
            </div>
            </div>
            <div className="profileimage__form-col">

            <div className="choose-hero">
              <h2 className="profileimage__subtitle profileimage__subtitle--bold">
                Choose your hero photo
              </h2>

              <div className="hero-samples">
                <div className="hero-samples__col">
                  <input
                    type="radio"
                    name="heroPhoto"
                    id="hero1"
                    value={`${process.env.REACT_APP_API_BASE_URL}/images/hero-1.jpg`}
                    onChange={(event) => handleChange(event)}
                  />
                  <label htmlFor="hero1"></label>

                  <input
                    type="radio"
                    name="heroPhoto"
                    id="hero2"
                    value={`${process.env.REACT_APP_API_BASE_URL}/images/hero-2.jpg`}
                    onChange={(event) => handleChange(event)}
                  />
                  <label htmlFor="hero2"></label>

                  <input
                    type="radio"
                    name="heroPhoto"
                    id="hero3"
                    value={`${process.env.REACT_APP_API_BASE_URL}/images/hero-3.jpg`}
                    onChange={(event) => handleChange(event)}
                  />
                  <label htmlFor="hero3"></label>
                </div>

                <div className="hero-samples__col">
                  <input
                    type="radio"
                    name="heroPhoto"
                    id="hero4"
                    value={`${process.env.REACT_APP_API_BASE_URL}/images/hero-4.jpg`}
                    onChange={(event) => handleChange(event)}
                  />
                  <label htmlFor="hero4"></label>
                  <input
                    type="radio"
                    name="heroPhoto"
                    id="hero5"
                    value={`${process.env.REACT_APP_API_BASE_URL}/images/hero-5.jpg`}
                    onChange={(event) => handleChange(event)}
                  />
                  <label htmlFor="hero5"></label>

                  <input
                    type="radio"
                    name="heroPhoto"
                    id="hero6"
                    value={`${process.env.REACT_APP_API_BASE_URL}/images/hero-6.jpg`}
                    onChange={(event) => handleChange(event)}
                  />
                  <label htmlFor="hero6"></label>
                </div>
              </div>
            </div>

            <button className="profileimage__button">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProfileImage;
