import { useEffect, useState } from "react";
import Theme1 from "../../themes/Theme1/Theme1";
import axios from "axios";
import { useParams } from "react-router-dom";

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

  console.log(profileData);

  return (
    <>
      <Theme1 profileData={profileData} />
    </>
  );
};

export default ProfilePage;
