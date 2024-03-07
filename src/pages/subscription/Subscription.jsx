import { useDispatch } from "react-redux";
import styles from "./Subscription.module.css";
import { useState } from "react";
import { subscribeToNewsLetter } from "../../store/actions/auth";
import { PropagateLoader } from "react-spinners";

export const Subscription = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubscribeSubmit = async (event) => {
    event.preventDefault();
    if (!email) return;
    try {
      setIsLoading(true);
      await dispatch(subscribeToNewsLetter(email));
      setIsLoading(false);
      setEmail("");
    } catch (error) {
      setIsLoading(false);
    }
  };
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
              weekly bulletins and exclusive offers directly to your inbox.
            </p>
          </div>
          <form className={styles["form"]} onSubmit={handleSubscribeSubmit}>
            <input
              placeholder="Enter your email"
              type="email"
              className={styles["form-input"]}
              value={email}
              onChange={(e) => setEmail(() => e.target.value)}
              required
            />

            <button
              type="submit"
              className={styles["btn"]}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className={styles["loading_container"]}>
                  <PropagateLoader color="#007fff" />
                </span>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
