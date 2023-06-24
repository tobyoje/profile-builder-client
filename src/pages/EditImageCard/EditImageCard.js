import { Link, useNavigate, useParams } from "react-router-dom";
import SettingsHeader from "../../components/SettingsHeader/SettingsHeader";
import "./EditImageCard.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import addICON from "../../assets/icons/plus.svg";
import uploadIcon from "../../assets/icons/upload.svg";

const EditImageCard = () => {
  const [basicData, setBasicData] = useState([]);
  const [file, setFile] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { pageLink } = useParams();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return navigate("../login");
    }

    // Get the data from the API
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
    newBasic.append("image1", file);
    newBasic.append("ic_link1", basicData.link1);
    newBasic.append("ic_title1", basicData.title1);
    newBasic.append("image2", file);
    newBasic.append("ic_link2", basicData.link2);
    newBasic.append("ic_title2", basicData.title2);
    newBasic.append("image3", file);
    newBasic.append("ic_link3", basicData.link3);
    newBasic.append("ic_title3", basicData.title3);
    newBasic.append("image4", file);
    newBasic.append("ic_link4", basicData.link4);
    newBasic.append("ic_title4", basicData.title4);

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
        navigate("/settings");
      }, 1000);
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
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
      <div className="basic">
        <h2 className="basic__title">Edit Image Cards</h2>
        <p className="basic__subtitle">
          Edit and add some link cards to your page
        </p>

        <div className="basic__form">
          <form onSubmit={handleSubmit}>
            <div className="upload-area1">
              <label htmlFor="inputfile">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile"
                name="image1"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
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

            <div className="upload-area1">
              <label htmlFor="inputfile">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile"
                name="image2"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
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

            <div className="upload-area1">
              <label htmlFor="inputfile">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile"
                name="image3"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
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

            <div className="upload-area1">
              <label htmlFor="inputfile">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile"
                name="image4"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
                className={`inputfile ${
                  formErrors.error_pageTitle ? "input--error" : ""
                }`}
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

export default EditImageCard;
