import React from "react";
import "./PhotoGallery.scss";

const PhotoGalleryComponent = ({ profileData }) => {
  const galleryImages = [
    profileData.g_image1,
    profileData.g_image2,
    profileData.g_image3,
    profileData.g_image4,
    profileData.g_image5,
    profileData.g_image6,
  ];

  return (
    <div className="photogallery">
      {galleryImages.length > 0 && (
        <>
          <h2 className="photogallery__heading">Photo Gallery</h2>
          <div className="photogallery__container">
            {galleryImages.map((galleryImage, index) => {
              if (!galleryImage) {
                // Skip rendering if link is empty
                return null;
              }

              return (
                // <div className="photogallery__container">
                <img
                  key={index}
                  className="photogallery__image"
                  src={galleryImage}
                  alt="photo"
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoGalleryComponent;
