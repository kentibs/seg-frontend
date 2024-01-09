import styles from "./Subscription.module.css";

export const Subscription = () => {
  return (
    <section className={styles["subscription"]}>
      <div className={styles["container"]}>
        <div className={styles["sub-box"]}>
          <img src="square2.png" alt="" className={styles["square"]} />
          <div className={styles["sub-info"]}>
            <h3 className={styles["sub-heading"]}>News letter</h3>
            <h1 className={styles["heading"]}>Get our latest updates</h1>
            <p className={styles["text"]}>
              Subscribe to our newsletter and receive the latest updates, news,
              and exclusive offers directly to your inbox.
            </p>
          </div>
          <form className={styles["form"]}>
            <input
              placeholder="Enter your email"
              type="email"
              className={styles["form-input"]}
              required
            />
            <input type="submit" value="Subscribe" className={styles["btn"]} />
            {/* Subscribe */}
            {/* </input> */}
          </form>
        </div>
      </div>
    </section>
  );
};
 