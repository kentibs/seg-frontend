import ReactDom from "react-dom";
import styles from "./ReadMoreCommitteeModal.module.css";
import { useState } from "react";

// export default function ReadMoreCommittee({ open, children, onClose }) {
export default function ReadMoreCommittee({ openModalElement, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenHandler = () => setIsOpen(() => true);
  const onCloseHandler = () => setIsOpen(() => false);
  // if (!isOpen) {
  //   return <div onClick={() => onOpenHandler()}>{openModalElement}</div>;
  // }

  // const onModalClose = () => {
  //   props.onModalClose(true);
  // };
  // if (!open) return null;
  console.log("MODAL OPEN");
  console.log("IS MODAL OPEN", isOpen);

  return (
    <>
      <div onClick={() => onOpenHandler()} className={styles["open-element"]}>
        {openModalElement}
      </div>

      {isOpen &&
        ReactDom.createPortal(
          <>
            <div className={styles["modal_overlay"]} onClick={onCloseHandler} />
            <div className={styles["modal_content"]}>
              <div className={styles["children-container"]}>
                <span className={styles["close-icon"]} onClick={onCloseHandler}>
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
        )}
      {/* </div> */}
    </>
  );
}

{
  /* ,
          document.getElementById("portal") */
}
