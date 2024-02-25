import { useEffect, useState } from "react";
import styles from "./LifestyleModal.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// import PropTypes from "prop-types";

export const LifestyleModal = ({ selectedImgUrl, isOpen, setIsOpen }) => {
  const [currentImgUrl, setCurrentImgUrl] = useState(selectedImgUrl);

  const events = [
    {
      imgUrl: "ladiesCapacity.jpg",
      category: "training",
      title: "Ladies capacity",
      description:
        "AAPG ladies capacity and soft skills training organized in partnership with SLB Uganda",
    },
    {
      imgUrl: "ladies-soft-skills.jpg",
      category: "training",
      title: "Ladies Capacity",
      description:
        "AAPG ladies capacity and soft skills training organized in partnership with SLB Uganda",
    },
    {
      imgUrl: "ladies-group-photo.jpg",
      category: "training",
      title: "Ladies group photo",
      description:
        "Group photo taken on final day of training. AAPG ladies capacity and soft skills training organized in partnership with SLB Uganda",
    },
    {
      imgUrl: "membership.jpg",
      category: "other",
      title: "Membership",
      description:
        "Membership drive where our committee members put in the time and effort to help students attain AAPG membership.",
    },
    {
      imgUrl: "membership2.jpg",
      category: "other",
      title: "Membership",
      description:
        "Membership drive where our committee members put in the time and effort to help students attain AAPG membership.",
    },
    {
      imgUrl: "chilling.jpg",
      category: "other",
      title: "Chilling time",
      description: "",
    },
    {
      imgUrl: "exh1.jpg",
      category: "other",
      title: "Exhibition",
      description:
        "Membership drive where our committee members put in the time and effort to help students attain AAPG membership.",
    },
    {
      imgUrl: "exh2.jpg",
      category: "other",
      title: "Exhibition",
      description:
        "Membership drive where our committee members put in the time and effort to help students attain AAPG membership.",
    },
    {
      imgUrl: "software-training.jpg",
      category: "training",
      title: "Software training",
      description: "GIS software training at Math Building room 115",
    },
    {
      imgUrl: "women-in-energy.jpg",
      category: "other",
      title: "Women in energy",
      description: "Women in energy forum",
    },
    {
      imgUrl: "tilenga-visit.jpg",
      category: "training",
      title: "Tilenga visit",
      description: "Visit to Tilega project",
    },
    {
      imgUrl: "conference-visit.jpg",
      category: "other",
      title: "Conference",
      description:
        "Attending the 10th East African Petroleum Conference at Serena Hotel, Kampala",
    },
    {
      imgUrl: "sports3.jpg",
      category: "sports",
      title: "Year 3 team",
      description: "Year 3 sports team",
    },
    {
      imgUrl: "leadership-training.jpg",
      category: "other",
      title: "Leadership training",
      description: "Leadership training",
    },
    {
      imgUrl: "some-leaders.jpg",
      category: "other",
      title: "Some Leaders",
      description: "Some of the AAPG leaders",
    },
    {
      imgUrl: "gis-team.jpg",
      category: "training",
      title: "GIS training members",
      description: "GIS software training at Math Building room 115",
    },
    {
      imgUrl: "cosl1.jpg",
      category: "other",
      title: "Visit to COSL",
      description:
        "It was Tuesday morning when several of our members visited COSL following the Resevoir modelling challenge.",
    },
    {
      imgUrl: "sports-galla.jpg",
      category: "sports",
      title: "Sports galla",
      description: "",
    },
    {
      imgUrl: "group-photo.jpg",
      category: "other",
      title: "Group photo",
      description: "",
    },
    { imgUrl: "ev5.jpg", category: "conference", title: "Certificate Awards" },
    { imgUrl: "orientation.jpg", category: "other", title: "Orientation" },
  ];
  const handleNext = () => {
    const currentIndex = events.findIndex(
      (event) => event.imgUrl === currentImgUrl
    );

    const nextIndex = (currentIndex + 1) % events.length;

    setCurrentImgUrl(events[nextIndex].imgUrl);
  };

  const handlePrev = () => {
    const currentIndex = events.findIndex(
      (event) => event.imgUrl === currentImgUrl
    );

    const prevIndex = (currentIndex - 1 + events.length) % events.length;

    setCurrentImgUrl(events[prevIndex].imgUrl);
  };
  useEffect(() => {
    setCurrentImgUrl(selectedImgUrl);
  }, [selectedImgUrl]);
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className={styles["modal"]}>
        <div className={styles["slider-wrap"]}>
          <div className={styles["prev-btn"]} onClick={handlePrev}>
            <IoIosArrowBack />
          </div>
          <div className={styles["images"]}>
            {currentImgUrl && (
              <img
                src={currentImgUrl}
                alt=""
                className={`${isOpen && styles["show-image"]}`}
              />
            )}
          </div>
          <div className={styles["nxt-btn"]} onClick={handleNext}>
            <IoIosArrowForward />
          </div>
        </div>
        <div
          className={styles["modal-overlay"]}
          onClick={() => setIsOpen(false)}
        ></div>
      </div>
    </>
  );
};

// ImageModal.propTypes = {
//   selectedImgUrl: PropTypes.string.isRequired,
//   isOpen: PropTypes.bool.isRequired,
//   setIsOpen: PropTypes.func.isRequired,
// };
