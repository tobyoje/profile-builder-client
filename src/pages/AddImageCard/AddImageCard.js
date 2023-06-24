import { Link, useNavigate } from "react-router-dom";
import SetupHeader from "../../components/SetupHeader/SetupHeader";
import "./AddImageCard.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import addICON from "../../assets/icons/plus.svg";
import uploadIcon from "../../assets/icons/upload.svg";

const AddImageCards = () => {
  const [basicData, setBasicData] = useState([]);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);

  const [formErrors, setFormErrors] = useState({});
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
    newBasic.append("image1", file1);
    newBasic.append("ic_link1", basicData.link1);
    newBasic.append("ic_title1", basicData.title1);
    newBasic.append("image2", file2);
    newBasic.append("ic_link2", basicData.link2);
    newBasic.append("ic_title2", basicData.title2);
    newBasic.append("image3", file3);
    newBasic.append("ic_link3", basicData.link3);
    newBasic.append("ic_title3", basicData.title3);
    newBasic.append("image4", file4);
    newBasic.append("ic_link4", basicData.link4);
    newBasic.append("ic_title4", basicData.title4);


    const token = sessionStorage.getItem("token");

    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/imagecards`,
        newBasic,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(newBasic);
      setTimeout(() => {
        navigate("/gallery");
      }, 1000);
      console.log(result.data);
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
      <SetupHeader />
      <div className="basic">
        <h2 className="basic__title">Add Image Cards</h2>
        <p className="basic__subtitle">Add some link cards to your page</p>

        <div className="basic__form">
          <form onSubmit={handleSubmit}>
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

            <div className="upload-area1">
              <label htmlFor="inputfile">Add Image</label>
              <img className="upload-icon" src={uploadIcon} alt="" />
              <input
                type="file"
                id="inputfile"
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
