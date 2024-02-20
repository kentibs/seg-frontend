import styles from "./Tokens.module.css";
import { useState } from "react";
import SuperModal from "../../features/super_modal/SuperModal";
import { TokenModel } from "../../features/token_model/TokenModel";
import { TokensList } from "../../features/tokens-list/TokensList";

export const Tokens = () => {
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);

  const closeSuperModalHandler = () => {
    setIsTokenModalOpen(false);
  };

  // if (error) dispatch(showCardNotification("error", error.message));

  // useEffect(() => {
  //   console.log("LOADING TOKENS");
  //   const getAllTokens = async () => {
  //     console.log("CHECK FOR TOKEN STATE", token);
  //     // return async (dispatch) => {
  //     const response = await fetch(`${baseUrl}/api/v1/tokens/get-all-tokens`, {
  //       method: "GET",
  //       headers: {
  //         "Content-type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       const error = await response.json();
  //       throw new Error(error.message);
  //     }

  //     const res = await response.json();

  //     console.log("ALL TOKENS FROM BACKEND", res.data.tokens);
  //     setTokenData(res.data.tokens);
  //   };

  //   getAllTokens();
  //   console.log("tokens fetched successfully");
  // }, [tokenData, token]);
  return (
    <div className={styles["tokens-container"]}>
      {" "}
      {/* <h1 className={styles["generate"]}>GENERATE ADMIN TOKENS</h1> */}
      <div className={styles["tokens-header-container"]}>
        <span className={styles["tokens-header"]}>
          <span>Tokens</span>
          <span className={styles["tokens-desc"]}>
            These expire in exactly 24 hours
          </span>
        </span>
        <button
          className={styles["generate-btn"]}
          onClick={() => setIsTokenModalOpen(true)}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            className={styles["plus-icon"]}
          >
            <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
            <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z" />
          </svg>
          <span>Generate</span>
        </button>
        <SuperModal
          open={isTokenModalOpen}
          onClose={() => closeSuperModalHandler()}
        >
          <TokenModel setIsTokenModalOpen={setIsTokenModalOpen} />
        </SuperModal>
      </div>
      {/* <form
        className={styles["email_container"]}
        onSubmit={handleGenerateTokenSubmit}
      >
        <div>
          <input
            placeholder="Associated email"
            type="email"
            className={styles["email-field"]}
            value={associatedEmail}
            onChange={(e) => setAssociatedEmail(e.target.value)}
          />{" "}
        </div>

        <div className={styles["select-dropdown"]}>
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

        <button
          type="submit"
          className={styles["generate-token"]}
          disabled={isLoading}
        >
          GET TOKEN
        </button>
      </form> */}
      <TokensList />
    </div>
  );
};

// import React from 'react';
// import { parse, format } from 'date-fns';

// const MyDateComponent = () => {
//   // Example ISO string
//   const isoString = "2022-01-21T12:30:00.000Z";

//   // Parse ISO string to a Date object
//   const parsedDate = parse(isoString, 'yyyy-MM-dd\'T\'HH:mm:ss.SSSX', new Date());

//   // Format the Date object to extract time and date separately
//   const formattedTime = format(parsedDate, 'hh:mm a');
//   const formattedDate = format(parsedDate, 'MMMM dd, yyyy');

//   return (
//     <div>
//       <p>Original ISO String: {isoString}</p>
//       <p>Extracted Time: {formattedTime}</p>
//       <p>Extracted Date: {formattedDate}</p>
//     </div>
//   );
// };

// export default MyDateComponent;
