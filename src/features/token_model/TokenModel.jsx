import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./TokenModel.module.css";
import { generateToken } from "../../store/actions/auth";

export const TokenModel = ({ setIsTokenModalOpen }) => {
  const [associatedRole, setAssociatedRole] = useState("");
  const [associatedEmail, setAssociatedEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleGenerateTokenSubmit = async (event) => {
    event.preventDefault();
    if (!associatedEmail || !associatedRole) return;
    try {
      setIsLoading(true);
      await dispatch(generateToken(token, associatedEmail, associatedRole));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        className={styles["email_container"]}
        onSubmit={handleGenerateTokenSubmit}
      >
        <span className={styles["admin-header"]}>Generate new admin token</span>
        <div className={styles["email-field-container"]}>
          <label>Associated email</label>
          <input
            placeholder="Associated email"
            type="email"
            className={styles["email-field"]}
            value={associatedEmail}
            onChange={(e) => setAssociatedEmail(e.target.value)}
          />{" "}
        </div>

        <div className={styles["select-dropdown"]}>
          <label>Role</label>
          <select
            value={associatedRole}
            onChange={(event) => setAssociatedRole(event.target.value)}
            className={styles["select-container"]}
          >
            <option value="" disabled hidden>
              Choose user role
            </option>
            <option value="admin">Admin</option>
            <option value="superadmin">Super admin</option>
          </select>
        </div>
        <div className={styles["btn-main-container"]}>
          <div className={styles["btn-container"]}>
            <button
              className={styles["cancel-btn"]}
              disabled={isLoading}
              onClick={() => setIsTokenModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles["generate-btn"]}
              disabled={isLoading}
            >
              GET TOKEN
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
