import ReactDom from "react-dom";
import styles from "./SuperModal.module.css";

export default function SuperModal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {/* <div style={OVERLAY_STYLES}> */}
      <div className={styles["modal_overlay"]} onClick={onClose} />
      <div className={styles["modal_content"]}>
        {/* <div className={styles["image-container"]}>
          <img src="person-modified.png" className={styles["person-image"]} />
        </div> */}
        <div className={styles["children-container"]}>
          <span className={styles["close-icon"]} onClick={onClose}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              // className={styles["close-icon"]}
            >
              <path
                fill="currentColor"
                d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
              />
            </svg>
          </span>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
