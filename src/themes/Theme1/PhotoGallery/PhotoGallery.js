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
          {galleryImages.map((galleryImage, index) => {
            if (!galleryImage) {
              // Skip rendering if link is empty
              return null;
            }

            if (index % 2 === 0) {
              // Render two images in a row
              return (
                <div className="photogallery__container" key={index}>
                  <img
                    className="photogallery__image"
                    src={galleryImage}
                    alt="photo"
                  />
                  {galleryImages[index + 1] && (
                    <img
                      className="photogallery__image"
                      src={galleryImages[index + 1]}
                      alt="photo"
                    />
                  )}
                </div>
              );
            }

            // Skip rendering odd-indexed images (already rendered with even-indexed image)
            return null;
          })}
        </>
      )}
    </div>
  );
};

export default PhotoGalleryComponent;
