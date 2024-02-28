import { useState } from "react";
import { Link } from "react-router-dom";
import { RxDoubleArrowRight } from "react-icons/rx";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import ReadMoreCommittee from "../../features/read-more-committee/ReadMoreCommittee";
import styles from "./Committee.module.css";
// import ReadMoreModal from "../../features/read-more-modal/ReadMoreModal";

export const Committee = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  // const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  // const closeReadMoreModalHandler = () => {
  //   setIsReadMoreOpen(false);
  // };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };
  const handleShowLess = () => {
    setVisibleItems(6);
  };

  // sentences.slice(0, maxSentences).join('. ') + (sentences.length > maxSentences ? '...' : '');

  // const sliceText = (sentences) => {
  //   const maxSentences = 1;
  //   return (
  //     sentences.slice(0, maxSentences).join(". ") +
  //     (sentences.length > maxSentences ? "..." : "")
  //   );
  // };

  const sliceText = (text) => {
    const maxCharacters = 100; // Adjust the maximum number of characters as needed
    return text.length > maxCharacters
      ? text.slice(0, maxCharacters) + "..."
      : text;
  };

  const committeeMembers = [
    {
      imgUrl: "Ruth.jpg",
      email: "ruthmurungi@gmail.com",
      name: "Murungi Ruth Namayanja",
      gender: "F",
      tel: "0777 580349",
      title: "President",
      period: "2023-2024",
      description:
        "She is the chief executive officer and spokesperson for the Association on all matters pertaining to the public; and serves as chair of the executive committee. She also appoints the members of all committees in accordance with these bylaws as well as delegates to cooperating organizations to represent the Association.",
    },
    {
      imgUrl: "vice.jpg",
      name: "Agum Edmond Akaki",
      gender: "M",
      email: "agumedmond@gmail.com",
      tel: "0758853882",
      title: "Vice President",
      period: "2023-2024",
      description:
        "He has been greatly resourceful in the rise and development of this organization, leaving behind a great foundation for other upcoming leaders.",
    },
    {
      imgUrl: "ninsiima.jpg",
      email: "ninsiima@gmail.com",
      name: "Ninsiima Agumisiriza",
      gender: "F",
      tel: "0782363882",
      title: "General Secretary",
      period: "2023-2024",
      description:
        "She is responsible for all the formal and legal documentation within the organization  as well as spending and saving strategies. ",
    },
    {
      imgUrl: "editor.jpg",
      name: "Nuwagaba Victor",
      email: "leakey@gmail.com",
      gender: "M",
      tel: "0742799882",
      title: "Chief Editor",
      period: "2023-2024",
      description:
        "He is responsible with the general supervision of and final authority in soliciting, accepting, and rejecting all material on technical subjects for publication, have policy oversight and responsibility for editorial content of all technical and peer-reviewed publications; submit an annual report of editorial activities to the executive committee; and, with the approval of the executive committee, appoint volunteer editors as deemed necessary.",
    },

    {
      imgUrl: "praise.jpg",
      name: "Naluzze Pamela Praise",
      email: "praise@gmail.com",
      gender: "F",
      tel: "0778952182",
      period: "2023-2024",
      title: "Treasurer",
      description:
        "She is responsible for all the organization transactions as well as spending and saving strategies. ",
    },
    {
      imgUrl: "winnie.jpg",
      name: "Kisakye Winnie Mutiibwa",
      email: "winnie@gmail.com",
      gender: "F",
      tel: "0700009182",
      period: "2023-2024",
      title: "Communications Chair",
      description:
        "She is responsible for mobilizing and organizing many of the Associations' big events as well as creating a link between the organization and other external organizations including upholding and mantaining a positive image of the Association. .",
    },

    {
      imgUrl: "deborah.jpg",
      email: "deborah@gmail.com",
      name: "Nabulumba Deborah",
      gender: "F",
      tel: "0782363882",
      title: "Asst. Communications Chair",
      period: "2023-2024",
      description:
        "She assists the Communications Chair in all activities and responsibilities regarding Communication within the Association as well as many other duties whenever need arises.",
    },

    {
      imgUrl: "tracy.jpg",
      name: "Nandawula Tracy Judith",
      email: "tracy@gmail.com",
      gender: "F",
      tel: "0742799882",
      title: "Asst. Communications Chair",
      period: "2023-2024",
      description:
        "She is greatly involved in the organization of social events as one responsible for the exhibitions and promoting innovations among students. ",
    },
    {
      imgUrl: "Pauline.jpg",
      name: "Nalubaale Pauline",
      email: "pauline@gmail.com",
      gender: "F",
      period: "2023-2024",
      title: "Innovations Chair",
      tel: "0700009182",
      description:
        "She is greatly involved in the organization of social events as one responsible for the exhibitions and promoting innovations among students. ",
    },
    {
      imgUrl: "kelvin.jpg",
      name: "Wandera Kelvin",
      gender: "M",
      email: "robertluwuge@gmail.com",
      tel: "0758853882",
      title: "Membership chair",
      period: "2023-2024",
      description:
        "He is responsible for all the formal and legal documentation within the organization  as well as membership involvement of students in the Association as well as the associated campaigns. ",
    },
    {
      imgUrl: "leakey.jpg",
      name: "Mbabazi Leakey",
      email: "leakey@gmail.com",
      gender: "M",
      tel: "0778952182",
      period: "2023-2024",
      title: "Programs Chair",
      description:
        "He is responsible for all the organization activities and programs as well as spending and saving strategies associated with these activities. ",
    },
    {
      imgUrl: "nakuya.jpg",
      name: "Nakuya Teddy Maria",
      email: "nakuya@gmail.com",
      gender: "F",
      tel: "0700009182",
      period: "2023-2024",
      title: "Female Year 1 Representative",
      description:
        "She is responsible for mobilizing and organizing Year ones regarding the activities and programs associated with the Association.",
    },
    {
      imgUrl: "gilbert.jpg",
      name: "Oketch Lazzarus Gilbert",
      email: "gilbert@gmail.com",
      gender: "M",
      period: "2023-2024",
      title: "Male Year 1 Representative",
      tel: "0700009182",
      description:
        "He is responsible for mobilizing and organizing Year ones regarding the activities and programs associated with the Association.",
    },
    {
      imgUrl: "year3-rep.jpg",
      name: "Oketch Lazzarus Gilbert",
      email: "kopio@gmail.com",
      gender: "F",
      period: "2023-2024",
      title: "Year 3 Representative",
      tel: "0700009182",
      description:
        "She is responsible for mobilizing and organizing Year 3s regarding the activities and programs associated with the Association.",
    },
    {
      imgUrl: "emma.jpg",
      name: "Munghatihe Emmanuel",
      email: "emmamunga@gmail.com",
      gender: "M",
      period: "2023-2024", 
      title: "Year 4 Representative",
      tel: "0700009182",
      description:
        "He is responsible for mobilizing and organizing Year 4s regarding the activities and programs associated with the Association.",
    },
  ];

  const itemsToShow = committeeMembers.slice(0, visibleItems);

  return (
    <>
      <section className={styles["committee-container"]} id="committee">
        <div className={styles["header"]}>
          <h3 className={styles["sub-heading"]}>Our Team</h3>
          <h1 className={styles["heading"]}>Committee Members 2024</h1>
        </div>
        <div className={styles["card-container"]}>
          {/* {committeeMembers.map((item, index) => ( */}

          {itemsToShow.map((item, index) => (
            <div className={styles["card"]} key={index}>
              <img src={item.imgUrl} alt="" className={styles["card-img"]} />
              <div className={styles["card-content"]}>
                <h3 className={styles["card-name"]}>{item.name}</h3>
                <h1 className={styles["card-title"]}>{item.title}</h1>
                <p>{sliceText(item.description)}</p>

                <div>
                  {/* <Link
                    to=""
                    className={styles["secondary-btn"]}
                    onClick={() => setIsReadMoreOpen(true)}
                  >
                    Read more &nbsp; <RxDoubleArrowRight />
                  </Link> */}
                  {/* 
                  <Modal
          openModalElement={
            <Button className="inline-block mr-4" type="button">
              Continue
            </Button>
          }
          onModalClose={() => {}}
          className="top-8"
        > */}
                  <ReadMoreCommittee
                    openModalElement={
                      <Link
                        to=""
                        className={styles["secondary-btn"]}
                        // onClick={() => setIsReadMoreOpen(true)}
                      >
                        Read more &nbsp; <RxDoubleArrowRight />
                      </Link>
                    }
                    // onModalClose={() => {}}

                    // open={isReadMoreOpen}
                    // onClose={() => closeReadMoreModalHandler()}
                  >
                    <div className={styles["card-desc"]}>
                      <>
                        <h3 className={styles["card-name"]}>{item.name}</h3>
                        <h1 className={styles["card-title"]}>{item.title}</h1>
                        <p>{item.description}</p>
                      </>
                    </div>
                  </ReadMoreCommittee>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleItems < committeeMembers.length ? (
          <span
            className={styles["load-more-container"]}
            onClick={handleLoadMore}
          >
            <Link
              to=""
              className={`${styles["secondary-btn"]} ${styles["load-more"]}`}
            >
              Load more &nbsp; <TiArrowSortedDown />
            </Link>
          </span>
        ) : (
          <span
            className={styles["load-more-container"]}
            onClick={handleShowLess}
          >
            <a
              href="#committee"
              className={`${styles["secondary-btn"]} ${styles["load-more"]}`}
            >
              Show less &nbsp; <TiArrowSortedUp />
            </a>
          </span>
        )}
      </section>
    </>
  );
};
