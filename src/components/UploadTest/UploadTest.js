import axios from "axios";
import { useState } from "react";

const UploadTest = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [imageName, setImageName] = useState("");

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description);

    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/upload`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setImageName(result.data.imageName);
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="App">

<img src={`${process.env.REACT_APP_API_BASE_URL}/public-images/dc97d5b6c832beb036b546afbb4546e0`}></img>

      <form onSubmit={submit}>
        <input
          onChange={handleFileChange}
          type="file"
          accept="image/*"
        />
        <input
          onChange={handleDescriptionChange}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
      {imageName && <img src={imageName} alt="Uploaded" />}
    </div>

    
  );
};

export default UploadTest;
