import { useEffect, useState } from "react";
import styles from "./ImageModal.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// import PropTypes from "prop-types";

export const ImageModal = ({ selectedImgUrl, isOpen, setIsOpen }) => {
  const [currentImgUrl, setCurrentImgUrl] = useState(selectedImgUrl);

  const events = [
    { imgUrl: "ev1.jpg", category: "diner", title: "Certificate Awards" },
    { imgUrl: "ev2.jpg", category: "conference", title: "Reception" },
    { imgUrl: "ev3.jpg", category: "dinner", title: "Group photo" },
    { imgUrl: "ev4.jpg", category: "dinner", title: "Conference" },
    { imgUrl: "ev5.jpg", category: "conference", title: "Certificate Awards" },
    { imgUrl: "ev6.jpg", category: "dinner", title: "Members after session" },
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
 