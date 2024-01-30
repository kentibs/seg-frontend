import { NewsList } from "../../features/news-list/NewsList";
import styles from "./NewsLetter.module.css";

export const NewsLetter = () => {
  return (
    <div className={styles["news-container"]}>
      <NewsList />
    </div>
  );
};
