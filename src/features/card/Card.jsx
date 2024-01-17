import styles from "./Card.module.css";

export const Card = (props) => {
  return (
    <div className={`${styles["card"]} ${props.styles}`}>{props.children}</div>
  );
};
