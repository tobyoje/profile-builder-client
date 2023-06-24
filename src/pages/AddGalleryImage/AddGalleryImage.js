import { Link, useNavigate } from "react-router-dom";
import SetupHeader from "../../components/SetupHeader/SetupHeader";
import "./AddGalleryImage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import addICON from "../../assets/icons/plus.svg";
import uploadIcon from "../../assets/icons/upload.svg";

const AddGalleryImage = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file6, setFile6] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [user, setUser] = useState(null);
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
    newBasic.append("image1", file1 || "");
    newBasic.append("image2", file2 || "");
    newBasic.append("image3", file3 || "");
    newBasic.append("image4", file4 || "");

    const token = sessionStorage.getItem("token");

    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/gallery`,
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
        navigate("/styles");
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

  const handleFileChange5 = (event) => {
    setFile5(event.target.files[0]);
  };
  const handleFileChange6 = (event) => {
    setFile6(event.target.files[0]);
  };





  return (
    <>
      <SetupHeader />
      <div className="basic">
        <h2 className="basic__title">Add Image to Gallery</h2>
        <p className="basic__subtitle">Add beautiful images to your gallery</p>

        <div className="basic__form">
          <form onSubmit={handleSubmit}>
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
