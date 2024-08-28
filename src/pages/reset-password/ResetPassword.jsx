import React, { useState } from 'react'
import styles from "./ResetPassword.module.css"
import { Eye, EyeSlash } from 'react-bootstrap-icons'
import { FaXmark } from 'react-icons/fa6'
import { IoMdCheckmark } from 'react-icons/io'

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showConfirmEyeIcon, setShowConfirmEyeIcon] = useState(true);
  const [showEyeIcon, setShowEyeIcon] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setShowEyeIcon(!showEyeIcon);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    setShowConfirmEyeIcon(!showConfirmEyeIcon);
  };

  
  const handleResetPasswordSubmit =  (event) => {
    event.preventDefault();
    if (!password || !confirmPassword) return;
    
      setIsLoading(true);
      setIsLoading(false);
      navigate("/", { replace: true });
  };
  return (
    <form onSubmit={handleResetPasswordSubmit} className={styles["form-container"]}>

        <div className={styles["container"]}>
        <h1>Reset Your Password</h1>

        
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
            <button className={styles["submit-btn"]}>Submit</button>
            </div>
    </form>
  )
}

export default ResetPassword