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
    <div className="imagecards">
      {profileData.ic_link1 && profileData.ic_title1 && (
        <>
          <h2 className="imagecards__heading">My Image Cards</h2>
          {imageDatas.map((imageData, index) => {
            if (!imageData.link || !imageData.title) {
              // Skip rendering if link or title is empty
              return null;
            }

            return (
              <Link
                to={imageData.link}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <div
                  className="imagecards__container"
                  style={{
                    backgroundImage: `linear-gradient(
                      0deg,
                      rgba(0, 0, 0, 0.893),
                      rgba(0, 0, 0, 0.553)
                    ), url("${imageData.image}")`,
                  }}
                >
                  <p className="imagecards__link-title">{imageData.title}</p>
                  <img
                    className="imagecards__link-icon"
                    src={extlinkICON}
                    alt="link"
                  />
                </div>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ImageCards;
