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

  console.log(imageDatas);

  return (
    <div className="imagecards2">
      {profileData.ic_link1 && profileData.ic_title1 && (
        <>
          <h2 className="imagecards2__heading">My Image Cards</h2>

          <div className="imagecards2__list">
            {imageDatas.map((imageData, index) => {
              if (!imageData.link || !imageData.title) {
                return null;
              }
              console.log(imageData);
              return (
                <div className="imagecards2__box">
                  <Link
                    to={imageData.link}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    <div
                      className="imagecards2__container"
                      style={{
                        backgroundImage: `linear-gradient(
                      0deg,
                      rgba(0, 0, 0, 0.893),
                      rgba(0, 0, 0, 0.553)
                    ), url("${process.env.REACT_APP_API_BASE_URL}/public-images/${imageData.image}")`,
                      }}
                    >
                      <div
                        style={{
                          borderColor: profileData.color,
                        }}
                        className="imagecards2__container-info"
                      >
                        <p
                          style={{
                            color: profileData.color,
                          }}
                          className="imagecards2__link-title"
                        >
                          {imageData.title}
                        </p>
                        <svg
                          className="extlinks2__link-icon"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.99984 4.16666C6.77818 4.16666 4.1665 6.77834 4.1665 10C4.1665 13.2217 6.77818 15.8333 9.99984 15.8333C13.2215 15.8333 15.8332 13.2217 15.8332 10"
                            stroke={profileData.color}
                            stroke-width="2.16667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.833 9.16667L16.6663 3.33334"
                            stroke={profileData.color}
                            stroke-width="2.16667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 2.5H17.5V7.5"
                            stroke={profileData.color}
                            stroke-width="2.16667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
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
