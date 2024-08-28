// import { PropagateLoader } from "react-spinners";/
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./CommitteeList.module.css";
import { useState } from "react";
import ReadMoreCommittee from "../../features/read-more-committee/ReadMoreCommittee";
import { collection } from "firebase/firestore";
import { firestore } from "../../firebase";

export const CommitteeList = () => {
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [contact, setContact] = useState("");
  const [period, setPeriod] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const darkMode = useSelector((state) => state.darkMode.darkMode);


  
  const colletionRef = collection(firestore, "committee");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

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
  const committeeMembers = [
    {
      imgUrl: "Gift.jpg",
      email: "giftkopio@gmail.com",
      name: "Kopio Gift",
      gender: "F",
      tel: "0782363882",
      title: "President",
      period: "2023-2024",
      description:
        "She has been greatly resourceful in the rise and development of this organization, leaving behind a great foundation for other upcoming leaders. ",
    },
    {
      imgUrl: "emma.jpg",
      name: "Emmanuella Kaducu Lagen",
      email: "emmakaducu@gmail.com",
      gender: "F",
      tel: "0742799882",
      title: "Vice President",
      period: "2023-2024",
      description:
        "She has also done alot for the association and has been greatly resourceful in the rise and development of this organization. ",
    },
    {
      imgUrl: "Robert.jpg",
      name: "Luwuge Robert",
      gender: "M",
      email: "robertluwuge@gmail.com",
      tel: "0758853882",
      title: "Secretary",
      period: "2023-2024",
      description:
        "He is responsible for all the formal and legal documentation within the organization  as well as spending and saving strategies. ",
    },
    {
      imgUrl: "triza.jpg",
      name: "Namitala Theresa Natonda",
      email: "triza@gmail.com",
      gender: "F",
      tel: "0778952182",
      period: "2023-2024",
      title: "Treasurer",
      description:
        "She is responsible for all the organization transactions as well as spending and saving strategies. ",
    },
    {
      imgUrl: "wycliffe.jpg",
      name: "Atuhairwe Wycliffe",
      email: "wycliffe@gmail.com",
      gender: "M",
      tel: "0700009182",
      period: "2023-2024",
      title: "Year 4 representative",
      description:
        "He is responsible for mobilizing and organizing many of the organiztions' big events.",
    },
    {
      imgUrl: "ev1.jpg",
      name: "Kitiibwa Deo",
      email: "deokitiibwa@gmail.com",
      gender: "M",
      period: "2023-2024",
      title: "Mobilizer",
      tel: "0700009182",
      description:
        "He is greatly involved in the organization of social events ",
    },
  ];

  const searchedUsers =
    searchQuery.length > 0
      ? committeeMembers.filter((item) =>
          `${item.name} ${item.email} ${item.contact} ${item.period} ${item.title} ${item.tel} ${item.createdDate} ${item.description}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : committeeMembers;

  const searchHandler = (e) => {
    e.preventDefault();
    console.log("searched", searchQuery);
    try {
      //   setIsLoading(true);
      //   const docSnap = await getDocs(colletionRef);

      //   if (!docSnap.empty) {
      //   const data = await docSnap.docs.map((doc) => doc.data());

      const searchedUsers =
        searchQuery.length > 0
          ? committeeMembers.filter((item) =>
              `${item.name} ${item.email} ${item.contact} ${item.period} ${item.title} ${item.tel} ${item.createdDate} ${item.description}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
          : committeeMembers;
      return searchedUsers;
      // setMembers(searchedUsers);
      //   setIsLoading(false);
      //   }
    } catch (error) {
      console.log(error.message);
      //   setIsLoading(false);
    }
  };

 
  return (
    <div className={styles["manage-container"]}>
      <div className={styles["listContainer"]}>
        <div className={styles["admin-header-container"]}>
          <div className={styles["listTitle"]}>Committee</div>
          <form
            className={styles["search-icon-container"]}
            onSubmit={searchHandler}
          >
            <input
              type="text"
              placeholder="Search members"
              className={styles["search-input"]}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              type="submit"
              className={styles["search-icon"]}
            >
              <path d="M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </form>
        </div>
        <TableContainer
          component={Paper}
          className={`${styles["table"]} ${
            darkMode && styles["darkmode-table"]
          }`}
        >
          <Table
            style={{
              minWidth: 650,
              fontFamily: "Poppins, sans-serif",
              fontSize: "46px",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell className={styles["tableCell"]}>
                  <b className={styles["table-item"]}>Names</b>
                </TableCell>
                <TableCell className={styles["tableCell"]}>
                  <b className={styles["table-item"]}>Role</b>
                </TableCell>
                <TableCell className={styles["tableCell"]}>
                  <b className={styles["table-item"]}>Contact</b>
                </TableCell>

                <TableCell className={styles["tableCell"]}>
                  <b className={styles["table-item"]}>Serving period</b>
                </TableCell>
                <TableCell className={styles["tableCell"]}>
                  <b className={styles["table-item"]}>Actions</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(searchedUsers) &&
                searchedUsers.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["image-container"]}>
                        <img
                          src={row?.imgUrl}
                          alt=""
                          className={styles["img-item"]}
                        />

                        <span className={styles["table-item"]}>
                          <span> {row?.name}</span>
                          <span className={styles["email-item"]}>
                            {row?.email}
                          </span>
                        </span>
                      </span>
                    </TableCell>

                    <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["table-item"]}>{row?.title}</span>
                    </TableCell>

                    <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["table-item"]}>{row?.tel}</span>
                    </TableCell>

                    <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["table-item"]}>
                        {row?.period}
                      </span>
                    </TableCell>
                    {/* <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["table-item"]}>
                        {formatDate(row?.createdAt)}
                      </span>
                    </TableCell> */}
                    <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["actions-container"]}>
                        <span className={styles["action-icon"]}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1.4em"
                            width="1.4em"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15zm-3.847-8.699a2 2 0 102.646 2.646 4 4 0 11-2.646-2.646z" />
                          </svg>
                        </span>
                        <ReadMoreCommittee
                       openModalElement={
                      <span className={styles["action-icon"]}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1.4em"
                            width="1.4em"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414L7.243 18zM3 20h18v2H3v-2z" />
                          </svg>
                        </span>
                    }                
                  >
                    <form
        className={styles["email_container"]}
        onSubmit={handleCommitteeSubmit}
      >
        <span className={styles["admin-header"]}>Edit committee member details</span>
        <div className={styles["email-field-container"]}>
          <label>Email</label>
          <input
            placeholder={row?.email}
            type="email"
            className={styles["email-field"]}
            value={row?.email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>
        <div className={styles["email-field-container"]}>
          <label>Full Name</label>
          <input
            placeholder="Name"
            type="text"
            className={styles["email-field"]}
            value={row?.name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </div>
        <div className={styles["email-field-container"]}>
          <label>Contact number</label>
          <input
            placeholder="Telephone"
            type="text"
            className={styles["email-field"]}
            value={row?.tel}
            onChange={(e) => setContact(e.target.value)}
          />{" "}
        </div>
        <div className={styles["email-field-container"]}>
          <label>Role</label>
          <input
            placeholder={row?.title}
            type="text"
            className={styles["email-field"]}
            value={row?.title}
            onChange={(e) => setRole(e.target.value)}
          />{" "}
        </div>
        <div className={styles["email-field-container"]}>
          <label>Serving period</label>
          <input
            placeholder="Period eg 2026-2027"
            type="text"
            className={styles["email-field"]}
            value={row?.period}
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
              UPDATE
            </button>
          </div>
        </div>
      </form>
        </ReadMoreCommittee>
                        
          <ReadMoreCommittee
                    openModalElement={
                      <span className={styles["delete-icon"]}>
                          {" "}
                          <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1.4em"
                            width="1.4em"
                            className={styles["delete-actual-icon"]}
                          >
                            <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
                          </svg>
                        </span>
                    }                
                  >
                    <div className={styles["delete-warning"]}>
                      <> 
                        <p>Are you sure you want to delete <b>{row?.name}</b> from the system? </p>
                        <div className={styles["warning-btns-container"]}>
                          <button className={styles["cancel-btn"]}>Cancel</button>
                          <button className={styles["delete-btn"]}>Delete</button>
                        </div>
                      </>
                    </div>
                  </ReadMoreCommittee>
                        
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {/* {queryLoading && (
            <PropagateLoader color="#007fff" className={styles["beatloader"]} />
          )} */}
        </TableContainer>
      </div>
    </div>
  );
};
