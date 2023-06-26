import { useEffect, useState } from "react";
import Theme1 from "../../themes/Theme1/Theme1";
import axios from "axios";
import { useParams } from "react-router-dom";
import Theme2 from "../../themes/Theme2/Theme2";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);

  const { pageLink } = useParams();

  useEffect(() => {
    // Get the data from the API
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/user/${pageLink}`)
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!profileData) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <>
      {profileData.style == "style1" && <Theme1 profileData={profileData} />}
      {profileData.style == "style2" && <Theme2 profileData={profileData} />}
    </>
  );
};

export default ProfilePage;
