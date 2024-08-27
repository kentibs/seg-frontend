import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./CommitteeModal.module.css";
// import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
// import firebase from "firebase/app";
import { firestore } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc, serverTimestamp, collection } from "firebase/firestore";

export const CommitteeModal = ({ setIsCommitteeModalOpen }) => {
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [contact, setContact] = useState("");
  const [period, setPeriod] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // const dispatch = useDispatch();

  const colletionRef = collection(firestore, "committee");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // const handleUpload = async() => {
  //   setIsLoading(true);

  //   const storageRef = firebase.storage().ref(`images/${image.name}`);
  //   const uploadTask = storageRef.put(image);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       console.log(snapshot);
  //       // progress function
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //    async () => {
  //       // complete function
  //       storageRef.getDownloadURL().then((url) => {
  //         setImageUrl(url);
  //         const newCommitteeData = {
  //           email,
  //           gender,
  //           role,
  //           contact,
  //           period,
  //           name,
  //           imageUrl: url,
  //           id: uuidv4(),
  //           createdAt: serverTimestamp(),
  //           lastUpdate: serverTimestamp(),
  //         };
  //         // store the image URL in Firestore or wherever you want
  //         const committeeDataRef = doc(colletionRef, newCommitteeData.id);
  //     await setDoc(committeeDataRef, newCommitteeData);
  //         firebase.firestore().collection("committee").add({ imageUrl: url });
  //     setIsLoading(false);

  //       });
  //     }
  //   );
  // };

  const handleUpload = async () => {
    // setIsLoading(true);

    const storageRef = firebase.storage().ref(`images/${image.name}`);
    const uploadTask = storageRef.put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
        // progress function
      },
      (error) => {
        console.log(error);
      },
      async () => {
        try {
          // complete function
          const url = await storageRef.getDownloadURL();
          setImageUrl(url);
          const newCommitteeData = {
            email,
            gender,
            role,
            contact,
            period,
            name,
            imageUrl: url,
            id: uuidv4(),
            createdAt: serverTimestamp(),
            lastUpdate: serverTimestamp(),
          };
          // store the image URL in Firestore or wherever you want
          // const colletionRef = collection(firestore, "committee");

          const committeeDataRef = doc(
            collection(firestore, "committee"),
            newCommitteeData.id
          );
          await setDoc(committeeDataRef, newCommitteeData);
          // await firebase
          //   .firestore()
          //   .collection("committee")
          //   .add({ imageUrl: url });
          // setIsLoading(false);
        } catch (error) {
          console.error("Error occurred:", error);
          setIsLoading(false);
        }
      }
    );
  };

  // const handleSubmit = async () => {
  //   const newCommitteeData = {
  //     email,
  //     gender,
  //     role,
  //     contact,
  //     period,
  //     name,
  //     imageUrl: "",
  //     id: uuidv4(),
  //     createdAt: serverTimestamp(),
  //     lastUpdate: serverTimestamp(),
  //   };

  //   try {
  //     setIsLoading(true);
  //     const committeeDataRef = doc(colletionRef, newCommitteeData.id);
  //     await setDoc(committeeDataRef, newCommitteeData);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setIsLoading(false);

  //     console.log(err);
  //   }
  // };
  const handleCommitteeSubmit = async (event) => {
    event.preventDefault();
    if (!email || !gender || !role || !contact || !period || !name) return;
    try {
      setIsLoading(true);
      handleUpload();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        className={styles["email_container"]}
        onSubmit={handleCommitteeSubmit}
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

        <div>
          <label>Upload Image</label>
          <input type="file" onChange={handleChange} />
          {/* <button onClick={handleUpload}>Upload</button> */}
          {imageUrl && <img src={imageUrl} alt="Uploaded" />}
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

// import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/firestore';

// const ImageUploader = () => {
//   const [image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState("");

//   const handleChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleUpload = () => {
//     const storageRef = firebase.storage().ref(`images/${image.name}`);
//     const uploadTask = storageRef.put(image);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         // progress function
//       },
//       (error) => {
//         console.log(error);
//       },
//       () => {
//         // complete function
//         storageRef.getDownloadURL().then((url) => {
//           setImageUrl(url);
//           // store the image URL in Firestore or wherever you want
//           firebase.firestore().collection('images').add({ imageUrl: url });
//         });
//       }
//     );
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {imageUrl && <img src={imageUrl} alt="Uploaded" />}
//     </div>
//   );
// };

// export default ImageUploader;
