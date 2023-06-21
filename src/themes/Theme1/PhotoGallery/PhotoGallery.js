import "./PhotoGallery.scss";

const PhotoGallery = ({profileData}) => {
  return (
    <>
      <div className="photogallery">
        <h2 className="photogallery__heading">Photo Gallery</h2>

        <div className="photogallery__container">
          <img className="photogallery__image" src={profileData.g_image1} alt="photo" />
          <img className="photogallery__image" src={profileData.g_image2} alt="photo" />
        </div>

        <div className="photogallery__container">
          <img className="photogallery__image" src={profileData.g_image3} alt="photo" />
          <img className="photogallery__image" src={profileData.g_image4} alt="photo" />
        </div>

        <div className="photogallery__container">
          <img className="photogallery__image" src={profileData.g_image5} alt="photo" />
          <img className="photogallery__image" src={profileData.g_image6} alt="photo" />
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
