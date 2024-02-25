import { Link } from "react-router-dom";
import { useState } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";

import styles from "./Lifestyle.module.css";
import ReadMoreCommittee from "../../features/read-more-committee/ReadMoreCommittee";
import { LifestyleModal } from "../../features/lifestyle-modal/LifestyleModal";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

export const Lifestyle = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImgUrl, setSelectedImgUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };
  const handleShowLess = () => {
    setVisibleItems(6);
  };
  const events = [
    {
      imgUrl: "ladiesCapacity.jpg",
      category: "training",
      title: "Ladies capacity",
      description:
        "AAPG ladies capacity and soft skills training organized in partnership with SLB Uganda",
    },
    {
      imgUrl: "ladies-soft-skills.jpg",
      category: "training",
      title: "Ladies Capacity",
      description:
        "AAPG ladies capacity and soft skills training organized in partnership with SLB Uganda",
    },
    {
      imgUrl: "ladies-group-photo.jpg",
      category: "training",
      title: "Ladies group photo",
      description:
        "Group photo taken on final day of training. AAPG ladies capacity and soft skills training organized in partnership with SLB Uganda",
    },
    {
      imgUrl: "membership.jpg",
      category: "other",
      title: "Membership",
      description:
        "Membership drive where our committee members put in the time and effort to help students attain AAPG membership.",
    },
    {
      imgUrl: "membership2.jpg",
      category: "other",
      title: "Membership",
      description:
        "Membership drive where our committee members put in the time and effort to help students attain AAPG membership.",
    },
    {
      imgUrl: "chilling.jpg",
      category: "other",
      title: "Chilling time",
      description: "",
    },
    {
      imgUrl: "exh1.jpg",
      category: "other",
      title: "Exhibition",
      description:
        "Membership drive where our committee members put in the time and effort to help students attain AAPG membership.",
    },
    {
      imgUrl: "exh2.jpg",
      category: "other",
      title: "Exhibition",
      description:
        "Membership drive where our committee members put in the time and effort to help students attain AAPG membership.",
    },
    {
      imgUrl: "software-training.jpg",
      category: "training",
      title: "Software training",
      description: "GIS software training at Math Building room 115",
    },
    {
      imgUrl: "women-in-energy.jpg",
      category: "other",
      title: "Women in energy",
      description: "Women in energy forum",
    },
    {
      imgUrl: "tilenga-visit.jpg",
      category: "training",
      title: "Tilenga visit",
      description: "Visit to Tilega project",
    },
    {
      imgUrl: "conference-visit.jpg",
      category: "other",
      title: "Conference",
      description:
        "Attending the 10th East African Petroleum Conference at Serena Hotel, Kampala",
    },
    {
      imgUrl: "sports3.jpg",
      category: "sports",
      title: "Year 3 team",
      description: "Year 3 sports team",
    },
    {
      imgUrl: "leadership-training.jpg",
      category: "other",
      title: "Leadership training",
      description: "Leadership training",
    },
    {
      imgUrl: "some-leaders.jpg",
      category: "other",
      title: "Some Leaders",
      description: "Some of the AAPG leaders",
    },
    {
      imgUrl: "gis-team.jpg",
      category: "training",
      title: "GIS training members",
      description: "GIS software training at Math Building room 115",
    },
    {
      imgUrl: "cosl1.jpg",
      category: "other",
      title: "Visit to COSL",
      description:
        "It was Tuesday morning when several of our members visited COSL following the Resevoir modelling challenge.",
    },
    {
      imgUrl: "sports-galla.jpg",
      category: "sports",
      title: "Sports galla",
      description: "",
    },
    {
      imgUrl: "group-photo.jpg",
      category: "other",
      title: "Group photo",
      description: "",
    },
    { imgUrl: "ev5.jpg", category: "conference", title: "Certificate Awards" },
    { imgUrl: "orientation.jpg", category: "other", title: "Orientation" },
  ];

  const itemsToShow = events.slice(0, visibleItems);

  const trainingEvents = events.filter(
    (event) => event.category === "training"
  );
  const sportsEvents = events.filter((event) => event.category === "sports");
  const otherEvents = events.filter((event) => event.category === "other");
  const competitionEvents = events.filter(
    (event) => event.category === "competition"
  );

  const openModal = (url) => {
    setSelectedImgUrl(() => url);
    setIsOpen(true);
    console.log("clicked");
    console.log("image url", url);
  };
  return (
    <>
      <section className={styles["events"]} id="lifestyle">
        <LifestyleModal
          selectedImgUrl={selectedImgUrl}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div className={styles["container"]}>
          <div className={styles["events_header"]}>
            <div className={styles["events_title"]}>
              <h3 className={styles["sub-heading"]}>AAPG Lifestyle</h3>
              <h1 className={styles["heading"]}>Latest lifestyle vibes</h1>
            </div>
            <div className={styles["filter-btns"]}>
              <button
                onClick={() => setActiveTab("all")}
                className={`${styles["filter-btn"]} ${
                  activeTab === "all" && styles["active-tab"]
                }`}
              >
                All
              </button>
              <button
                className={`${styles["filter-btn"]} ${
                  activeTab === "training" && styles["active-tab"]
                }`}
                onClick={() => setActiveTab("training")}
              >
                Trainings
              </button>
              <button
                className={`${styles["filter-btn"]} ${
                  activeTab === "sports" && styles["active-tab"]
                }`}
                onClick={() => setActiveTab("sports")}
              >
                Sports
              </button>
              <button
                className={`${styles["filter-btn"]} ${
                  activeTab === "competition" && styles["active-tab"]
                }`}
                onClick={() => setActiveTab("competition")}
              >
                Competitions
              </button>
              <button
                className={`${styles["filter-btn"]} ${
                  activeTab === "other" && styles["active-tab"]
                }`}
                onClick={() => setActiveTab("other")}
              >
                Other
              </button>
            </div>
          </div>
          <div className={styles["events-gallery"]}>
            {activeTab === "all" &&
              itemsToShow.map((event, index) => (
                <>
                  <div
                    className={`${styles["prt-card"]} ${styles["category1"]}`}
                    key={index}
                  >
                    <div className={styles["prt-image"]}>
                      <img
                        src={event.imgUrl}
                        alt=""
                        onClick={() => openModal(event.imgUrl)}
                      />

                      <div
                        className={styles["prt-overlay"]}
                        onClick={() => openModal(event.imgUrl)}
                      >
                        <span className={styles["prt-icon"]}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                          >
                            <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
                          </svg>
                        </span>
                        <Link to="" className={styles["prt-icon"]}>
                          <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                          >
                            <path d="M4.715 6.542L3.343 7.914a3 3 0 104.243 4.243l1.828-1.829A3 3 0 008.586 5.5L8 6.086a1.002 1.002 0 00-.154.199 2 2 0 01.861 3.337L6.88 11.45a2 2 0 11-2.83-2.83l.793-.792a4.018 4.018 0 01-.128-1.287z" />
                            <path d="M6.586 4.672A3 3 0 007.414 9.5l.775-.776a2 2 0 01-.896-3.346L9.12 3.55a2 2 0 112.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 10-4.243-4.243L6.586 4.672z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className={styles["prt-desc"]}>
                      <h3>{event.title} </h3>
                      {/* <ReadMoreCommittee></ReadMoreCommittee> */}
                      <ReadMoreCommittee
                        openModalElement={
                          <Link to="" className={styles["secondary-btn"]}>
                            Description &nbsp; <RxDoubleArrowRight />
                          </Link>
                        }
                        // onModalClose={() => {}}

                        // open={isReadMoreOpen}
                        // onClose={() => closeReadMoreModalHandler()}
                      >
                        <div className={styles["card-desc"]}>
                          <>
                            <img
                              src={event?.imgUrl}
                              alt=""
                              className={styles["modal-img"]}
                            />
                            <h3>{event.title} </h3>
                            <p>{event?.description}</p>
                          </>
                        </div>
                      </ReadMoreCommittee>
                    </div>
                  </div>
                </>
              ))}

            {activeTab === "training" &&
              trainingEvents.map((event, index) => (
                <div
                  className={`${styles["prt-card"]} ${styles["category1"]}`}
                  key={index}
                >
                  <div className={styles["prt-image"]}>
                    <img
                      src={event.imgUrl}
                      alt=""
                      onClick={() => openModal(event.imgUrl)}
                    />
                    <div
                      className={styles["prt-overlay"]}
                      onClick={() => openModal(event.imgUrl)}
                    >
                      <span className={styles["prt-icon"]}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
                        </svg>
                      </span>
                      <Link to="" className={styles["prt-icon"]}>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                        >
                          <path d="M4.715 6.542L3.343 7.914a3 3 0 104.243 4.243l1.828-1.829A3 3 0 008.586 5.5L8 6.086a1.002 1.002 0 00-.154.199 2 2 0 01.861 3.337L6.88 11.45a2 2 0 11-2.83-2.83l.793-.792a4.018 4.018 0 01-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 007.414 9.5l.775-.776a2 2 0 01-.896-3.346L9.12 3.55a2 2 0 112.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 10-4.243-4.243L6.586 4.672z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className={styles["prt-desc"]}>
                    <h3>{event.title} </h3>
                    <ReadMoreCommittee
                      openModalElement={
                        <Link to="" className={styles["secondary-btn"]}>
                          Description &nbsp; <RxDoubleArrowRight />
                        </Link>
                      }
                      // onModalClose={() => {}}

                      // open={isReadMoreOpen}
                      // onClose={() => closeReadMoreModalHandler()}
                    >
                      <div className={styles["card-desc"]}>
                        <>
                          <img
                            src={event?.imgUrl}
                            alt=""
                            className={styles["modal-img"]}
                          />
                          <h3>{event.title} </h3>
                          <p>{event?.description}</p>
                        </>
                      </div>
                    </ReadMoreCommittee>
                  </div>
                </div>
              ))}
            {activeTab === "sports" &&
              sportsEvents.map((event, index) => (
                <div
                  className={`${styles["prt-card"]} ${styles["category1"]}`}
                  key={index}
                >
                  <div className={styles["prt-image"]}>
                    <img
                      src={event.imgUrl}
                      alt=""
                      onClick={() => openModal(event.imgUrl)}
                    />
                    <div
                      className={styles["prt-overlay"]}
                      onClick={() => openModal(event.imgUrl)}
                    >
                      <span className={styles["prt-icon"]}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
                        </svg>
                      </span>
                      <Link to="" className={styles["prt-icon"]}>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                        >
                          <path d="M4.715 6.542L3.343 7.914a3 3 0 104.243 4.243l1.828-1.829A3 3 0 008.586 5.5L8 6.086a1.002 1.002 0 00-.154.199 2 2 0 01.861 3.337L6.88 11.45a2 2 0 11-2.83-2.83l.793-.792a4.018 4.018 0 01-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 007.414 9.5l.775-.776a2 2 0 01-.896-3.346L9.12 3.55a2 2 0 112.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 10-4.243-4.243L6.586 4.672z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className={styles["prt-desc"]}>
                    <h3>{event.title} </h3>
                    <ReadMoreCommittee
                      openModalElement={
                        <Link to="" className={styles["secondary-btn"]}>
                          Description &nbsp; <RxDoubleArrowRight />
                        </Link>
                      }
                      // onModalClose={() => {}}

                      // open={isReadMoreOpen}
                      // onClose={() => closeReadMoreModalHandler()}
                    >
                      <div className={styles["card-desc"]}>
                        <>
                          <img
                            src={event?.imgUrl}
                            alt=""
                            className={styles["modal-img"]}
                          />
                          <h3>{event.title} </h3>
                          <p>{event?.description}</p>
                        </>
                      </div>
                    </ReadMoreCommittee>
                  </div>
                </div>
              ))}

            {activeTab === "competition" &&
              competitionEvents.map((event, index) => (
                <div
                  className={`${styles["prt-card"]} ${styles["category1"]}`}
                  key={index}
                >
                  <div className={styles["prt-image"]}>
                    <img
                      src={event.imgUrl}
                      alt=""
                      onClick={() => openModal(event.imgUrl)}
                    />
                    <div
                      className={styles["prt-overlay"]}
                      onClick={() => openModal(event.imgUrl)}
                    >
                      <span className={styles["prt-icon"]}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
                        </svg>
                      </span>
                      <Link to="" className={styles["prt-icon"]}>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                        >
                          <path d="M4.715 6.542L3.343 7.914a3 3 0 104.243 4.243l1.828-1.829A3 3 0 008.586 5.5L8 6.086a1.002 1.002 0 00-.154.199 2 2 0 01.861 3.337L6.88 11.45a2 2 0 11-2.83-2.83l.793-.792a4.018 4.018 0 01-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 007.414 9.5l.775-.776a2 2 0 01-.896-3.346L9.12 3.55a2 2 0 112.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 10-4.243-4.243L6.586 4.672z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className={styles["prt-desc"]}>
                    <h3>{event.title} </h3>
                    <ReadMoreCommittee
                      openModalElement={
                        <Link to="" className={styles["secondary-btn"]}>
                          Description &nbsp; <RxDoubleArrowRight />
                        </Link>
                      }
                      // onModalClose={() => {}}

                      // open={isReadMoreOpen}
                      // onClose={() => closeReadMoreModalHandler()}
                    >
                      <div className={styles["card-desc"]}>
                        <>
                          <img
                            src={event?.imgUrl}
                            alt=""
                            className={styles["modal-img"]}
                          />
                          <h3>{event.title} </h3>
                          <p>{event?.description}</p>
                        </>
                      </div>
                    </ReadMoreCommittee>
                  </div>
                </div>
              ))}

            {activeTab === "other" &&
              otherEvents.map((event, index) => (
                <div
                  className={`${styles["prt-card"]} ${styles["category1"]}`}
                  key={index}
                >
                  <div className={styles["prt-image"]}>
                    <img
                      src={event.imgUrl}
                      alt=""
                      onClick={() => openModal(event.imgUrl)}
                    />
                    <div
                      className={styles["prt-overlay"]}
                      onClick={() => openModal(event.imgUrl)}
                    >
                      <span className={styles["prt-icon"]}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
                        </svg>
                      </span>
                      <Link to="" className={styles["prt-icon"]}>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                        >
                          <path d="M4.715 6.542L3.343 7.914a3 3 0 104.243 4.243l1.828-1.829A3 3 0 008.586 5.5L8 6.086a1.002 1.002 0 00-.154.199 2 2 0 01.861 3.337L6.88 11.45a2 2 0 11-2.83-2.83l.793-.792a4.018 4.018 0 01-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 007.414 9.5l.775-.776a2 2 0 01-.896-3.346L9.12 3.55a2 2 0 112.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 10-4.243-4.243L6.586 4.672z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className={styles["prt-desc"]}>
                    <h3>{event.title} </h3>
                    <ReadMoreCommittee
                      openModalElement={
                        <Link to="" className={styles["secondary-btn"]}>
                          Description &nbsp; <RxDoubleArrowRight />
                        </Link>
                      }
                      // onModalClose={() => {}}

                      // open={isReadMoreOpen}
                      // onClose={() => closeReadMoreModalHandler()}
                    >
                      <div className={styles["card-desc"]}>
                        <>
                          <img
                            src={event?.imgUrl}
                            alt=""
                            className={styles["modal-img"]}
                          />
                          <h3>{event.title} </h3>
                          <p>{event?.description}</p>
                        </>
                      </div>
                    </ReadMoreCommittee>
                  </div>
                </div>
              ))}
          </div>
          {activeTab === "all" && visibleItems < events.length ? (
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
            activeTab === "all" && (
              <span
                className={styles["load-more-container"]}
                onClick={handleShowLess}
              >
                <a
                  href="#lifestyle"
                  className={`${styles["secondary-btn"]} ${styles["load-more"]}`}
                >
                  Show less &nbsp; <TiArrowSortedUp />
                </a>
              </span>
            )
          )}
        </div>
      </section>
    </>
  );
};
