import { Card } from "../card/Card";
import { BsCheckCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { MdCancel, MdInfo, MdWarning } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import styles from "./Notifications.module.css";

export const Notifications = (props) => {
  const type = props.type;
  let bgColor;

  const icon = () => {
    if (type === "success") {
      bgColor = "bg-success";
      return <BsCheckCircleFill />;
    } else if (type === "error") {
      bgColor = "bg-error";
      return <MdCancel />;
    } else if (type === "info") {
      bgColor = "bg-info";
      return <MdInfo />;
    } else if (type === "warning") {
      bgColor = "bg-warning";
      return <MdWarning />;
    } else {
      bgColor = "bg-info";
      return <MdInfo />;
    }
  };
  icon();
  return (
    <Card styles={`${styles["card"]} ${styles[bgColor]}`}>
      <span className={styles["close"]} onClick={props.onClose}>
        <IconContext.Provider
          value={{ size: "1.5rem", color: "hsl(0, 0%, 100%)" }}
        >
          <FaWindowClose />
        </IconContext.Provider>
      </span>
      <div className={styles["icon__container"]}>
        <span className={styles["icon"]}>
          <IconContext.Provider
            value={{ size: "1.5rem", color: "hsl(0, 0%, 100%)" }}
          >
            {icon()}
          </IconContext.Provider>
        </span>
      </div>
      <div className={styles["content__container"]}>
        <span style={{ fontSize: "0.9rem" }}> {props.message}</span>
      </div>
    </Card>
  );
};
