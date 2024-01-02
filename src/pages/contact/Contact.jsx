import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <section className={styles["contact"]}>
      <img src="triangle.png" alt="" className={styles["triangle"]} />
      <div className={styles["container"]}>
        <img src="square2.png" alt="" className={styles["square"]} />

        <div className={styles["contact-info"]}>
          <h3 className={styles["sub-heading"]}>Contact us</h3>
          <h1 className={styles["heading"]}>Contact form</h1>
          <p className={styles["text"]}>
            Communicate with the current SEG committee. <br /> Tell us
            what&apos;s on your mind.
          </p>
          <Link to="mailto:kopiogift@gmail.com" className={styles["mail"]}>
            <span>Contact President</span>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
              />
            </svg>
          </Link>
        </div>
        <form className={styles["contact-form"]}>
          <h3>Send us a message</h3>
          <input
            type="text"
            placeholder="Your name"
            className={styles["form-input"]}
            required
          />
          <input
            type="text"
            placeholder="Your email"
            className={styles["form-input"]}
            required
          />
          <textarea
            placeholder="Type your message"
            className={styles["form-input"]}
            required
          ></textarea>
          <button className={styles["btn"]} type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
