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
                <p>{item.description}</p>

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
