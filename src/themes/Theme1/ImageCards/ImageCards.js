import React from "react";
import "./ImageCards.scss";
import extlinkICON from "../../../assets/icons/ext-link.svg";
import { Link } from "react-router-dom";

const ImageCards = ({ profileData }) => {
  const imageDatas = [
    {
      link: profileData.ic_link1,
      title: profileData.ic_title1,
      image: profileData.ic_image1,
    },
    {
      link: profileData.ic_link2,
      title: profileData.ic_title2,
      image: profileData.ic_image2,
    },
    {
      link: profileData.ic_link3,
      title: profileData.ic_title3,
      image: profileData.ic_image3,
    },
    {
      link: profileData.ic_link4,
      title: profileData.ic_title4,
      image: profileData.ic_image4,
    },
  ];

  return (
    <div className="image-cards">
      {profileData.ic_link1 && profileData.ic_title1 && (
        <>
          <h2 className="image-cards__heading">My Image Cards</h2>

          <div className="image-cards__list">
            {imageDatas.map((imageData, index) => {
              if (!imageData.link || !imageData.title) {
                // Skip rendering if link or title is empty
                return null;
              }
              return (
                <div className="image-cards__box">
                  <Link
                    to={imageData.link}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    <div
                      className="image-cards__container"
                      style={{
                        backgroundImage: `linear-gradient(
                      0deg,
                      rgba(0, 0, 0, 0.893),
                      rgba(0, 0, 0, 0.553)
                    ), url("${process.env.REACT_APP_API_BASE_URL}/public-images/${imageData.image}")`,
                      }}
                    >
                      <p className="image-cards__link-title">
                        {imageData.title}
                      </p>
                      <img
                        className="image-cards__link-icon"
                        src={extlinkICON}
                        alt="link"
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCards;
