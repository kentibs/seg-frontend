import { useState } from "react";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { setLoginContent } from "../../store/actions/loginContent";
import { login } from "../../store/actions/auth";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { Eye, EyeSlash } from "react-bootstrap-icons";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showEyeIcon, setShowEyeIcon] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setShowEyeIcon(!showEyeIcon);
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogInSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) return;
    try {
      setIsLoading(true);
      await dispatch(login(email, password));
      setIsLoading(false);
      navigate("/super-admin-home-page", { replace: true });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className={styles["header_container"]}>
        <p className={styles["welcome-container"]}>
          <strong className={styles["welcome"]}>Welcome Back</strong> <br />{" "}
          <span className={styles["log"]}>Log into your account </span>
        </p>
      </div>
      <form className={styles["form_container"]} onSubmit={handleLogInSubmit}>
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
        <div className={styles["password_container"]}>
          <span className={styles["password_label_container"]}>
            <label className={styles["label"]}>Password</label>
            <label className={styles["forgot_label"]}>Forgot password?</label>
          </span>
          <input
            value={password}
            placeholder="password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(() => e.target.value)}
            className={styles["input_field"]}
            required
          />
          <div
            className={styles["login-eye-icon"]}
            onClick={handleShowPassword}
          >
            {showEyeIcon ? <EyeSlash /> : <Eye />}
          </div>
        </div>
        <button
          type="submit"
          className={styles["login_btn"]}
          disabled={isLoading}
        >
          {/* {isLoading ? <PropagateLoader color="#36d7b7" /> : "LOGIN"} */}
          {isLoading ? (
            <span className={styles["loading_container"]}>
              <PropagateLoader color="#007fff" />
            </span>
          ) : (
            "LOGIN"
          )}
        </button>
      </form>
      <p className={styles["bottom-msg-container"]}>
        Don&apos;t have an account?{" "}
        <span
          className={styles["forgot_label"]}
          onClick={() => dispatch(setLoginContent("register"))}
        >
          Register
        </span>
      </p>
    </div>
  );
};
