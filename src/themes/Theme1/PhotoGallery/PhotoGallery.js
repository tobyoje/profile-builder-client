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

  const imageChunks = [];
  for (let i = 0; i < galleryImages.length; i += 2) {
    imageChunks.push(galleryImages.slice(i, i + 2));
  }

  return (
    <div className="photogallery">
      {galleryImages.length > 0 && (
        <>
          <h2 className="photogallery__heading">Photo Gallery</h2>
          {imageChunks.map((chunk, index) => (
            <div key={index} className="photogallery__container">
              {chunk.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  className="photogallery__image"
                  src={image}
                  alt="photo"
                />
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PhotoGalleryComponent;
