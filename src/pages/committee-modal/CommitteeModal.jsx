// import React from "react";

// export const CommitteeModal = () => {
//   return <div>CommitteeModal</div>;
// };

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./CommitteeModal.module.css";
import { generateToken } from "../../store/actions/auth";

export const CommitteeModal = ({ setIsCommitteeModalOpen }) => {
  const [associatedRole, setAssociatedRole] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [contact, setContact] = useState("");
  const [period, setPeriod] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleGenerateTokenSubmit = async (event) => {
    event.preventDefault();
    if (!email || !gender || !role || !contact || !period || !name || !email)
      return;
    try {
      setIsLoading(true);
      await dispatch(generateToken(token, email, associatedRole));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        className={styles["email_container"]}
        // onSubmit={handleGenerateTokenSubmit}
      >
        <span className={styles["admin-header"]}>Add new committee member</span>
        <div className={styles["email-field-container"]}>
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            className={styles["email-field"]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>

        <div className={styles["email-field-container"]}>
          <label>Full Name</label>
          <input
            placeholder="Name"
            type="text"
            className={styles["email-field"]}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </div>

        <div className={styles["email-field-container"]}>
          <label>Contact number</label>
          <input
            placeholder="Telephone"
            type="text"
            className={styles["email-field"]}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />{" "}
        </div>

        <div className={styles["email-field-container"]}>
          <label>Role</label>
          <input
            placeholder="Role"
            type="text"
            className={styles["email-field"]}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />{" "}
        </div>

        <div className={styles["email-field-container"]}>
          <label>Serving period</label>
          <input
            placeholder="Period eg 2026-2027"
            type="text"
            className={styles["email-field"]}
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />{" "}
        </div>

        <div className={styles["select-dropdown"]}>
          <label>Role</label>
          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            className={styles["select-container"]}
          >
            <option value="" disabled hidden>
              Choose gender
            </option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className={styles["btn-main-container"]}>
          <div className={styles["btn-container"]}>
            <button
              className={styles["cancel-btn"]}
              disabled={isLoading}
              onClick={() => setIsCommitteeModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles["generate-btn"]}
              disabled={isLoading}
            >
              ADD
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
