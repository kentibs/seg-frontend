import { NewsList } from "../../features/news-list/NewsList";
import styles from "./NewsLetter.module.css";

export const NewsLetter = () => {
  return (
    <div className={styles["news-container"]}>
      <div className={styles["admin-header-container"]}>
        <div className={styles["listTitle"]}>Newsletter subscriptions</div>
        <form className={styles["search-icon-container"]}>
          <input
            type="text"
            placeholder="Search "
            className={styles["search-input"]}
          />
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            type="submit"
            className={styles["search-icon"]}
          >
            <path d="M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </form>
      </div>
      <NewsList />
    </div>
  );
};
