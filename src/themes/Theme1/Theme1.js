import ExternalLinks from "./ExternalLinks/ExternalLinks";
import ImageCards from "./ImageCards/ImageCards";
import Intro from "./Intro/Intro";
import PhotoGallery from "./PhotoGallery/PhotoGallery";

const Theme1 = ({ profileData, currentUserId }) => {
  return (
    <div style={{ fontFamily: profileData.font }}>
      <Intro currentUserId={currentUserId} profileData={profileData} />
      <ExternalLinks profileData={profileData} />
      <ImageCards profileData={profileData} />
      <PhotoGallery profileData={profileData} />
    </div>
  );
};

export default Theme1;
