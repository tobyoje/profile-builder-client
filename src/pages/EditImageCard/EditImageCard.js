import { useNavigate, useParams } from "react-router-dom";
import SettingsHeader from "../../components/SettingsHeader/SettingsHeader";
import "./EditImageCard.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import addICON from "../../assets/icons/plus.svg";
import uploadIcon from "../../assets/icons/upload.svg";

const EditImageCard = () => {
  const [basicData, setBasicData] = useState([]);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
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
    newBasic.append("ic_link1", basicData.link1 || user.ic_link1 || "");
    newBasic.append("ic_title1", basicData.title1 || user.ic_title1 || "");
    newBasic.append("image2", file2);
    newBasic.append("ic_link2", basicData.link2 || user.ic_link2 || "");
    newBasic.append("ic_title2", basicData.title2 || user.ic_title2 || "");
    newBasic.append("image3", file3);
    newBasic.append("ic_link3", basicData.link3 || user.ic_link3 || "");
    newBasic.append("ic_title3", basicData.title3 || user.ic_title3 || "");
    newBasic.append("image4", file4);
    newBasic.append("ic_link4", basicData.link4 || user.ic_link4 || "");
    newBasic.append("ic_title4", basicData.title4 || user.ic_title4 || "");

    const token = sessionStorage.getItem("token");

    try {
      const result = await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/image-cards/${pageLink}`,
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

  const handleChange = (event) => {
    setBasicData({
      ...basicData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <SettingsHeader />
      <div className="imagecards">
        <h2 className="imagecards__title">Edit Image Cards</h2>
        <p className="imagecards__subtitle">
          Edit and add some link cards to your page
        </p>

        <div className="imagecards__form">
          <form className="imagecards__form-container" onSubmit={handleSubmit}>
            <div className="imagecards__form-col">
              <div className="imagecards__form-box">
                <div className="upload-area1">
                  <label htmlFor="inputfile">Add Image</label>
                  <img className="upload-icon" src={uploadIcon} alt="" />
                  <input
                    type="file"
                    id="image1"
                    name="image1"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileChange1}
                    // className={`inputfile ${
                    //   formErrors.error_pageTitle ? "input--error" : ""
                    // }`}
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
                    defaultValue={user.ic_link1}
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
                  defaultValue={user.ic_title1}
                  onChange={(event) => handleChange(event)}
                  className={`input ${
                    formErrors.error_pageTitle ? "input--error" : ""
                  }`}
                />
              </div>

              <div className="imagecards__form-box">
                <div className="upload-area1">
                  <label htmlFor="inputfile">Add Image</label>
                  <img className="upload-icon" src={uploadIcon} alt="" />
                  <input
                    type="file"
                    id="image2"
                    name="image2"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileChange2}
                    // className={`inputfile ${
                    //   formErrors.error_pageTitle ? "input--error" : ""
                    // }`}
                  />
                </div>
                <div className="linkfield">
                  <input
                    type="text"
                    placeholder="https://new-link.com"
                    name="link2"
                    defaultValue={user.ic_link2}
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
                  defaultValue={user.ic_title2}
                  onChange={(event) => handleChange(event)}
                  className={`input ${
                    formErrors.error_pageTitle ? "input--error" : ""
                  }`}
                />
              </div>
            </div>

            <div className="imagecards__form-col">
              <div className="imagecards__form-box">
                <div className="upload-area1">
                  <label htmlFor="inputfile">Add Image</label>
                  <img className="upload-icon" src={uploadIcon} alt="" />
                  <input
                    type="file"
                    id="image3"
                    name="image3"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileChange3}
                    // className={`inputfile ${
                    //   formErrors.error_pageTitle ? "input--error" : ""
                    // }`}
                  />
                </div>
                <div className="linkfield">
                  <input
                    type="text"
                    placeholder="https://new-link.com"
                    name="link3"
                    defaultValue={user.ic_link3}
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
                  defaultValue={user.ic_title3}
                  onChange={(event) => handleChange(event)}
                  className={`input ${
                    formErrors.error_pageTitle ? "input--error" : ""
                  }`}
                />
              </div>

              <div className="imagecards__form-box">
                <div className="upload-area1">
                  <label htmlFor="inputfile">Add Image</label>
                  <img className="upload-icon" src={uploadIcon} alt="" />
                  <input
                    type="file"
                    id="image4"
                    name="image4"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileChange4}
                    // className={`inputfile ${
                    //   formErrors.error_pageTitle ? "input--error" : ""
                    // }`}
                  />
                </div>
                <div className="linkfield">
                  <input
                    type="text"
                    placeholder="https://new-link.com"
                    name="link4"
                    defaultValue={user.ic_link4}
                    onChange={(event) => handleChange(event)}
                    className={`input ${
                      formErrors.error_pageTitle ? "input--error" : ""
                    }`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Link title"
                  name="title4"
                  defaultValue={user.ic_title4}
                  onChange={(event) => handleChange(event)}
                  className={`input ${
                    formErrors.error_pageTitle ? "input--error" : ""
                  }`}
                />
              </div>

              {/* <div className="imagecards__formadd">
              <img className="imagecards__formadd--image" src={addICON} alt="" />
              <p> Add New</p>
            </div> */}

              {formErrors.error_pageTitle && (
                <p className="form-error">This field is required</p>
              )}

              <button className="imagecards__button">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditImageCard;
