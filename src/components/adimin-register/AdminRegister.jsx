import { useState } from "react";
import styles from "./AdminRegister.module.css";
import { useDispatch } from "react-redux";
import { setLoginContent } from "../../store/actions/loginContent";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { signupAdmin } from "../../store/actions/auth";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

// import { useNavigate } from "react-router-dom";

export const AdminRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showConfirmEyeIcon, setShowConfirmEyeIcon] = useState(true);
  const [showEyeIcon, setShowEyeIcon] = useState(true);
  const [signupToken, setSignupToken] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log("selected gender", selectedGender);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setShowEyeIcon(!showEyeIcon);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    setShowConfirmEyeIcon(!showConfirmEyeIcon);
  };
  // const navigate = useNavigate();

  // const registerHandler = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   if (
  //     !userName ||
  //     !phoneNumber ||
  //     !nextOfKin ||
  //     !role ||
  //     !email ||
  //     !password
  //   )

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    if (
      !lastName ||
      !firstName ||
      !phoneNumber ||
      !email ||
      !password ||
      !confirmPassword ||
      !selectedGender
    )
      return;
    try {
      setIsLoading(true);
      await dispatch(
        signupAdmin(
          firstName,
          lastName,
          email,
          selectedGender,
          phoneNumber,
          password,
          signupToken
        )
      );
      setIsLoading(false);
      navigate("/admin-home-page", { replace: true });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles["register_container"]}>
      <div className={styles["header_container"]}>
        <p>
          <strong className={styles["welcome"]}>Welcome!</strong> <br />{" "}
          <span className={styles["log"]}>
            Let&apos;s create your Admin account{" "}
          </span>
        </p>
      </div>
      <form onSubmit={handleRegisterSubmit}>
        <div className={styles["form_container"]}>
          <div className={styles["container"]}>
            <span className={styles["label_container"]}>
              <label className={styles["label"]}>Sign up token</label>
            </span>
            <input
              value={signupToken}
              placeholder="Signup token"
              type="text"
              onChange={(e) => setSignupToken(() => e.target.value)}
              className={styles["input_field"]}
              required
            />
          </div>
          <div className={styles["container"]}>
            <span className={styles["label_container"]}>
              <label className={styles["label"]}>Last name</label>
            </span>
            <input
              value={lastName}
              placeholder="last name"
              type="text"
              onChange={(e) => setLastName(() => e.target.value)}
              className={styles["input_field"]}
              required
            />
          </div>
          <div className={styles["container"]}>
            <span className={styles["label_container"]}>
              <label className={styles["label"]}>First name</label>
            </span>
            <input
              value={firstName}
              placeholder="first name"
              type="text"
              onChange={(e) => setFirstName(() => e.target.value)}
              className={styles["input_field"]}
              required
            />
          </div>
          <div className={styles["container"]}>
            <span className={styles["label_container"]}>
              <label className={styles["label"]}>Phone number</label>
            </span>
            <input
              value={phoneNumber}
              placeholder="phone number"
              type="text"
              onChange={(e) => setPhoneNumber(() => e.target.value)}
              className={styles["input_field"]}
              required
            />
          </div>
          <div className={styles["container"]}>
            <span className={styles["label_container"]}>
              <label className={styles["label"]}>Gender</label>
            </span>

            <div className={styles["select-dropdown"]}>
              <select
                value={selectedGender}
                onChange={(event) => setSelectedGender(event.target.value)}
              >
                <option value="" disabled hidden>
                  Choose gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* <input
              value={gender}
              placeholder=""
              type="text"
              onChange={(e) => setGender(() => e.target.value)}
              className={styles["input_field"]}
            /> */}
          </div>
          <div className={styles["container"]}>
            <label>Your email</label>
            <input
              value={email}
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(() => e.target.value)}
              className={styles["input_field"]}
              required
            />
          </div>
          <div className={styles["container-password"]}>
            <span className={styles["label_container"]}>
              <label className={styles["label"]}>Password</label>
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
              {confirmPassword.length > 0 &&
              confirmPassword.length === password.length &&
              confirmPassword === password ? (
                <span className={styles["tick-mark"]}>
                  <IoMdCheckmark />
                </span>
              ) : confirmPassword.length > 0 &&
                confirmPassword.length === password.length ? (
                <span className={styles["cross-mark"]}>
                  <FaXmark />
                </span>
              ) : null}{" "}
              &nbsp;
              {showEyeIcon ? <EyeSlash /> : <Eye />}
            </div>
          </div>
          <div className={styles["container-confirm-password"]}>
            <span className={styles["label_container"]}>
              <label className={styles["label"]}>Confirm password</label>
            </span>
            <input
              value={confirmPassword}
              placeholder="confirm"
              type={showConfirmPassword ? "text" : "password"}
              onChange={(e) => setConfirmPassword(() => e.target.value)}
              className={styles["input_field"]}
              required
            />
            <div
              className={styles["login-confirm-eye-icon"]}
              onClick={handleShowConfirmPassword}
            >
              {confirmPassword.length > 0 &&
              confirmPassword.length === password.length &&
              confirmPassword === password ? (
                <span className={styles["tick-mark"]}>
                  <IoMdCheckmark />
                </span>
              ) : confirmPassword.length > 0 &&
                confirmPassword.length === password.length ? (
                <span className={styles["cross-mark"]}>
                  <FaXmark />
                </span>
              ) : null}{" "}
              &nbsp;
              {showConfirmEyeIcon ? <EyeSlash /> : <Eye />}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={styles["register_btn"]}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className={styles["loading_container"]}>
              <PropagateLoader color="#007fff" />
            </span>
          ) : (
            "REGISTER"
          )}
        </button>
      </form>
      <p className={styles["bottom-msg-container"]}>
        Already have an account?{" "}
        <span
          className={styles["forgot_label"]}
          onClick={() => dispatch(setLoginContent("login"))}
        >
          Login 
        </span>
      </p>
    </div>
  );
};
