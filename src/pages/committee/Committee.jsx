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
        "The Executive Officer and Official Representative for the Association on all matters pertaining to the public. Serves as the Chair of the executive committee and provides stewardship for the team. Also assigns/delegates duties to members of the executive in accordance with the bylaws of the Chapter and ensures the mission and vision of the Association are upheld.",
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
        "Second in command to the President. Oversees the activities of the Association and provides counsel in upholding the by laws. Also in the absence of the president acts as the president and presides over meetings of any committees on behalf of the president such as academics and sports affairs committee, Research and Innovations Committee, IT Committee, accounts committee or any other committee formed by the executive.",
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
        "Performs all clerical tasks on behalf of the Association. Responsible for tracking progress on all Chapter activities across the academic year as well as keeping all records and proceedings and General Assembly and Executive Committee. Also assumes responsibilities of the president in absence of both the President and the Vice President and Keeps the register of paid-up members.",
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
        "Prepares routine financial accounts/statements and has the responsibility of advising the executive committee of AAPG on financial affairs as well as initiating financial policies and proposing avenues of realizing resources to run AAPG and introduces them to the executive for approval. Is also  in charge of all records of all subscription fees, donations and grants of AAPG and presents records of accounts to the general assembly and the executive committee of AAPG.",
    },

    {
      imgUrl: "leakey.jpg",
      name: "Mbabazi Leakey",
      email: "leakey@gmail.com",
      gender: "M",
      tel: "0778952182",
      period: "2023-2024",
      title: "Programs Chair",
      description:
        "Has the power to call off any pre-arranged function provided it is in the preparatory stage. Also suggests and advises the executive on matters regarding projects the association is undertaking.",
    },

    {
      imgUrl: "winnie.jpg",
      name: "Kisakye Winnie Mutiibwa",
      email: "winnie@gmail.com",
      gender: "F",
      tel: "0700009182",
      period: "2023-2024",
      title: "Communications Chair",
      description:
        "Responsible for the official publication of AAPG including collection and dissemination of information on behalf of and for the benefit of the AAPG. Is also responsible for the proper running of the society and is the chief-whip of the general Assembly with the duty to keep peace provided it is reasonably exercised and also acts as the master of ceremonies at any function and related accessions and ensures that all executive members are aware of any information regarding activities of the society.",
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
        "Responsible for all the formal and legal documentation within the organization  as well as membership involvement of students in the Association as well as the associated campaigns. ",
    },

    {
      imgUrl: "Pauline.jpg",
      name: "Nalubaale Pauline",
      email: "pauline@gmail.com",
      gender: "F",
      period: "2023-2024",
      title: "Innovations Chair",
      tel: "0700009182",
      description:
        "Is the chairperson of the Research and innovations Committee and heads the orientation committee for the first-year students. Suggests projects that the association may undertake and presents them to the executive.",
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
        "Responsible with the general supervision of and final authority in soliciting, accepting, and rejecting all material on technical subjects for publication, have policy oversight and responsibility for editorial content of all technical and peer-reviewed publications; submit an annual report of editorial activities to the executive committee; and, with the approval of the executive committee, appoint volunteer editors as deemed necessary.",
    },

    {
      imgUrl: "deborah.jpg",
      email: "deborah@gmail.com",
      name: "Nabulumba Deborah",
      gender: "F",
      tel: "0782363882",
      title: "Asst. Communications Chair",
      period: "2023-2024",
      description:
        "Assists the Communications Chair in all activities and responsibilities regarding Communication within the Association as well as many other duties whenever need arises.",
    },

    {
      imgUrl: "tracy.jpg",
      name: "Nandawula Tracy Judith",
      email: "tracy@gmail.com",
      gender: "F",
      tel: "0742799882",
      title: "Asst. Communications Chair",
      period: "2023-2024",
      description:
        "Assists the Communications Chair in all activities and responsibilities regarding Communication within the Association as well as many other duties whenever need arises.",
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
        "Responsible for mobilizing and organizing Year 4s regarding the activities and programs associated with the Association.",
    },

    {
      imgUrl: "year3-rep.jpg",
      name: "Kopio Gift",
      email: "kopio@gmail.com",
      gender: "F",
      period: "2023-2024",
      title: "Year 3 Representative",
      tel: "0700009182",
      description:
        "Responsible for mobilizing and organizing Year 3s regarding the activities and programs associated with the Association.",
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
        "Responsible for mobilizing and organizing Year ones regarding the activities and programs associated with the Association.",
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
        "Responsible for mobilizing and organizing Year ones regarding the activities and programs associated with the Association.",
    },
  ];

  const itemsToShow = committeeMembers.slice(0, visibleItems);

  return (
    <>
      <section className={styles["committee-container"]} id="committee">
        <div className={styles["header"]}>
          <h3 className={styles["sub-heading"]}>Committee</h3>
          <h1 className={styles["heading"]}>Executive Committee 2024</h1>
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
