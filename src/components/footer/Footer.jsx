import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={styles["container"]}>
        <Link to="" className={styles["logo"]}>
          AAPG
        </Link>
        <p className={styles["text"]}>
          {" "}
          &copy; Copyright{" "}
          <a href="#home" className={styles["seg-logo"]}>
            AAPG MUK CHAPTER
          </a>{" "}
          2024. All rights reserved.
        </p>
        <ul className={styles["social-media"]}>
          {/* <li>
            <Link to="" className={styles["social-link"]}>
              <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                <path 
                  fill="currentColor"
                  d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
                />
              </svg>
            </Link>
          </li> */}
          <li>
            <Link to="" className={styles["social-link"]}>
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link to="" className={styles["social-link"]}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M7.170999999999999 5.009 A2.188 2.188 0 0 1 4.983 7.197000000000001 A2.188 2.188 0 0 1 2.7949999999999995 5.009 A2.188 2.188 0 0 1 7.170999999999999 5.009 z" />
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
