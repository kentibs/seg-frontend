import { useState } from "react";
import styles from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../store/actions/auth";
import { PropagateLoader } from "react-spinners";
import { setLoginContent } from "../../store/actions/loginContent";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleForgotPasswordSubmit = async (event) => {
    event.preventDefault();
    if (!email) return;
    try {
      setIsLoading(true);
      await dispatch(forgotPassword(email));
      setIsLoading(false);
      navigate("/", { replace: true });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles["forgot-password-container"]}>
      <div className={styles["header_container"]}>
        <span className={styles["welcome-container"]}>
          <strong className={styles["welcome"]}>Forgot Password?</strong> <br />{" "}
          <span className={styles["log"]}>
            Submit your email so we can solve your issue.{" "}
          </span>
        </span>
      </div>
      <form
        className={styles["form_container"]}
        onSubmit={handleForgotPasswordSubmit}
      >
        <div className={styles["email_container"]}>
          <label>Your Email</label>
          <input
            value={email}
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(() => e.target.value)}
            className={styles["input_field"]}
            required
          />
        </div>

        <button
          type="submit"
          className={styles["forgot_btn"]}
          disabled={isLoading}
        >
          {/* {isLoading ? <PropagateLoader color="#36d7b7" /> : "LOGIN"} */}
          {isLoading ? (
            <span className={styles["loading_container"]}>
              <PropagateLoader color="#007fff" />
            </span>
          ) : (
            "SUBMIT"
          )}
        </button>
      </form>
      <span className={styles["bottom-msg-container"]}>
        Don&apos;t have an account?{" "}
        <span
          className={styles["forgot_label"]}
          onClick={() => dispatch(setLoginContent("register"))}
        >
          Register
        </span>
      </span>
    </div>
  );
};
