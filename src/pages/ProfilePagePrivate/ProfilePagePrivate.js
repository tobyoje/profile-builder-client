import { useEffect, useState } from "react";
import Theme1 from "../../themes/Theme1/Theme1";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfilePagePrivate = () => {
  const [profileData, setProfileData] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);

  const { pageLink } = useParams();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    // Get the data from the API
    axios
      .get(`http://localhost:8080/api/user/edit/${pageLink}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        await setProfileData(response.data);
        setCurrentUserId(response.data.user_id);
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
      <Theme1 currentUserId={currentUserId} profileData={profileData} />
    </>
  );
};

export default ProfilePagePrivate;
