import { Link, useNavigate, useParams } from "react-router-dom";
import SettingsHeader from "../../components/SettingsHeader/SettingsHeader";
import "./EditGalleryImage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import addICON from "../../assets/icons/plus.svg";
import uploadIcon from "../../assets/icons/upload.svg";

const EditGalleryImage = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file6, setFile6] = useState(null);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBasic = new FormData();
    newBasic.append("image1", file1);
    newBasic.append("image2", file2);
    newBasic.append("image3", file3);
    newBasic.append("image4", file4);
    newBasic.append("image5", file5);
    newBasic.append("image6", file6);

    const token = sessionStorage.getItem("token");

    try {
      const result = await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/gallery/${pageLink}`,
        newBasic,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setTimeout(() => {
        navigate(`/settings/${pageLink}`);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange1 = (event) => {
    setFile1(event.target.files[0]);
  };

  const handleFileChange2 = (event) => {
    setFile2(event.target.files[0]);
  };

  const handleFileChange3 = (event) => {
    setFile3(event.target.files[0]);
  };

  const handleFileChange4 = (event) => {
    setFile4(event.target.files[0]);
  };

  const handleFileChange5 = (event) => {
    setFile5(event.target.files[0]);
  };
  const handleFileChange6 = (event) => {
    setFile6(event.target.files[0]);
  };

  return (
    <>
      <SettingsHeader />
      <div className="gallerycreate">
        <h2 className="gallerycreate__title">Edit Image to Gallery</h2>
        <p className="gallerycreate__subtitle">
          Edit and add new beautiful images to your gallery
        </p>

        <div className="gallerycreate__form">
          <form
            className="gallerycreate__form-container"
            onSubmit={handleSubmit}
          >
            <div className="imagecards__form-col">
              <div className="upload-area1">
                <label htmlFor="inputfile1">Add Image</label>
                <img className="upload-icon" src={uploadIcon} alt="" />
                <input
                  type="file"
                  id="inputfile1"
                  name="image1"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleFileChange1}
                  // className={`inputfile ${
                  //   formErrors.error_pageTitle ? "input--error" : ""
                  // }`}
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
                  onChange={handleFileChange2}
                  // className={`inputfile ${
                  //   formErrors.error_pageTitle ? "input--error" : ""
                  // }`}
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
                  onChange={handleFileChange3}
                  // className={`inputfile ${
                  //   formErrors.error_pageTitle ? "input--error" : ""
                  // }`}
                />
              </div>
            </div>

            <div className="imagecards__form-col">
              <div className="upload-area1">
                <label htmlFor="inputfile2">Add Image</label>
                <img className="upload-icon" src={uploadIcon} alt="" />
                <input
                  type="file"
                  id="inputfile2"
                  name="image2"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleFileChange4}
                  // className={`inputfile ${
                  //   formErrors.error_pageTitle ? "input--error" : ""
                  // }`}
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
                  onChange={handleFileChange5}
                  // className={`inputfile ${
                  //   formErrors.error_pageTitle ? "input--error" : ""
                  // }`}
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
                  onChange={handleFileChange6}
                  // className={`inputfile ${
                  //   formErrors.error_pageTitle ? "input--error" : ""
                  // }`}
                />
              </div>

              {formErrors.error_pageTitle && (
                <p className="form-error">This field is required</p>
              )}

              {/* <div className="gallerycreate__formadd">
              <img className="gallerycreate__formadd--image" src={addICON} alt="" />
              <p> Add New</p>
            </div> */}

              {formErrors.error_pageTitle && (
                <p className="form-error">This field is required</p>
              )}

              <button className="gallerycreate__button">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditGalleryImage;
