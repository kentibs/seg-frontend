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

  // const removedEvents = [
  //   {
  //     imgUrl: "ladiesCapacity.jpg",
  //     category: "training",
  //     title: "Capacity building for ladies",
  //     description:
  //       "AAPG ladies capacity and soft skills training organized in partnership with SLB Uganda",
  //   },
  //   {
  //     imgUrl: "ladies-soft-skills.jpg",
  //     category: "training",
  //     title: "Capacity building for ladies",
  //     description:
  //       "AAPG ladies capacity and soft skills training organized in partnership with SLB Uganda",
  //   },
  //   {
  //     imgUrl: "membership2.jpg",
  //     category: "other",
  //     title: "Membership",
  //     description:
  //       "Membership drive where our committee members put in the time and effort to help students attain AAPG membership.",
  //   },
  //   {
  //     imgUrl: "exh2.jpg",
  //     category: "other",
  //     title: "Exhibition",
  //     description:
  //       "Membership drive where our committee members put in the time and effort to help students attain AAPG membership.",
  //   },
  //   {
  //     imgUrl: "software-training.jpg",
  //     category: "training",
  //     title: "Software training",
  //     description: "GIS software training at Math Building room 115",
  //   },

  //   {
  //     imgUrl: "women-in-energy.jpg",
  //     category: "other",
  //     title: "Women in energy",
  //     description: "Women in energy forum",
  //   },

  //   {
  //     imgUrl: "conference-visit.jpg",
  //     category: "other",
  //     title: "Conference",
  //     description:
  //       "Attending the 10th East African Petroleum Conference at Serena Hotel, Kampala",
  //   },
  //   {
  //     imgUrl: "sports3.jpg",
  //     category: "sports",
  //     title: "Year 3 team",
  //     description: "Year 3 sports team",
  //   },
  //   {
  //     imgUrl: "leadership-training.jpg",
  //     category: "other",
  //     title: "Leadership training",
  //     description: "Leadership training",
  //   },
  //   {
  //     imgUrl: "some-leaders.jpg",
  //     category: "other",
  //     title: "Some Leaders",
  //     description: "Some of the AAPG leaders",
  //   },
  //   {
  //     imgUrl: "gis-team.jpg",
  //     category: "training",
  //     title: "GIS training members",
  //     description: "GIS software training at Math Building room 115",
  //   },
  //   {
  //     imgUrl: "cosl1.jpg",
  //     category: "other",
  //     title: "Visit to COSL",
  //     description:
  //       "It was Tuesday morning when several of our members visited COSL following the Resevoir modelling challenge.",
  //   },
  //   {
  //     imgUrl: "sports-galla.jpg",
  //     category: "sports",
  //     title: "Sports galla",
  //     description: "",
  //   },
  //   {
  //     imgUrl: "group-photo.jpg",
  //     category: "other",
  //     title: "Group photo",
  //     description: "",
  //   },
  //   { imgUrl: "ev5.jpg", category: "conference", title: "Certificate Awards" },
  //   { imgUrl: "orientation.jpg", category: "other", title: "Orientation" },
  // ];
  const events = [
    {
      imgUrl: "certificates.jpg",
      category: "other",
      title:
        "Exciting challenges: quizzes, competitions, and software training",
      description:
        "Ready to put your geoscience knowledge to the test? Our chapter organizes quizzes and competitions that range from theoretical assessments to practical challenges for instance, our Geoscience Trivia Quizzes, Petrel Challenges. The winners of the previous competitions earned opportunities for free training in GIS or Petrel software, sponsored by Big Solutions Group and Slb. Additionally, we partner with companies like Slb (formerly Schlumberger) to provide comprehensive software training sessions, equipping students with valuable skills in Petrel and GIS, as well as practical lessons in geological mapping.",
    },
    {
      imgUrl: "chilling.jpg",
      category: "other",
      title: "Building networks for success",
      description:
        "In today's competitive world, networking is key to unlocking future opportunities. By joining our chapter, you gain access to a vast network of professionals, industry experts, and fellow geoscience enthusiasts. Through guest lectures, career fairs, and networking sessions, you will have the chance to interact with individuals who can offer valuable insights, mentorship, and potential career pathways.",
    },
    {
      imgUrl: "bulletin.jpg",
      category: "other",
      title: "Stay informed with the AAPG Weekly Bulletins",
      description:
        "Staying updated with the latest trends and developments in the petroleum industry and extractives sector is crucial. That's why our chapter publishes the AAPG-MUK Weekly Bulletin, a comprehensive publication that brings you the latest industry news, technological advancements, global oil and gas prices, and key discoveries. This weekly bulletin also includes a quick quiz section, allowing students to test their knowledge and win exciting AAPG branded prizes.",
    },
    {
      imgUrl: "lecture-series.jpg",
      category: "training",
      title: "Bridging the gap through AAPG lecture series",
      description:
        "We believe in connecting students with industry professionals to bridge the gap between academia and the professional world. Our special AAPG Lecture Series features renowned speakers like Mr. Dozith Abeinomugisha (Director Midstream, Petroleum Authority of Uganda). These experts share their experiences, insights, and geoscience-centered knowledge, inspiring students to pursue their career goals. Through these engaging sessions, students gain exposure to industry norms, expand their focus, and develop a deeper interest in geology and geosciences.",
    },
    {
      imgUrl: "tilenga-visit.jpg",
      category: "training",
      title: "Empowering members for international engagement",
      description:
        "As an AAPG chapter member at Makerere University, you're not just limited to local activities. We are committed to empowering our members to participate in international events organized by AAPG International. These opportunities allow you to connect with geoscientists from around the globe, attend conferences, present research, and explore the latest advancements in the field. The world becomes your stage, and the possibilities are limitless.",
    },
    {
      imgUrl: "ladies-group-photo.jpg",
      category: "training",
      title: "Empowering women through career guidance and skills development",
      description:
        "We are committed to fostering gender diversity in the industry. Our chapter, in collaboration with Slb organizes the 'Women in Energy' program, featuring seminars where successful women in the industry share their experiences, offer mentorship opportunities, and inspire aspiring female geoscientists. The program also includes a Skills Development Workshop that equips female finalists with essential skills for their job search, including CV preparation, interview etiquette, and workplace decorum.",
    },
    {
      imgUrl: "membership.jpg",
      category: "other",
      title: "A Chapter built on collaboration",
      description:
        "We believe in the power of collaboration and the strength that comes from working together. We have fostered close ties with various sister societies within the Department of Geology and Petroleum Studies, including the Society of Petroleum Engineers Makerere Students Chapter (SPE Makerere), Society of Exploration Geophysicists Makerere Students Chapter (SEG Makerere), and the Makerere Petroleum and Geology Society (MPGS). This collaborative spirit allows us to create extraordinary opportunities for our members to grow both personally and professionally.",
    },
    {
      imgUrl: "voice-matters.jpg",
      category: "other",
      title: "Your Voice, Your Impact",
      description:
        "Being part of the AAPG chapter means your voice matters. We value the opinions and ideas of every member and encourage active participation in shaping the direction of our activities. Whether you want to organize an event, present your research, or contribute to the chapter's initiatives, we provide a platform for you to make a real impact and leave a legacy.",
    },

    {
      imgUrl: "exh1.jpg",
      category: "other",
      title: "Innovation & Creativity",
      description:
        "We are committed to fostering creativity and innovation among students encouraging the practical application of the knowledge acquired in class.",
    },
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
              <h3 className={styles["sub-heading"]}>Activities</h3>
              <h1 className={styles["heading"]}>Chapter Activities</h1>
            </div>
            {/* <div className={styles["filter-btns"]}>
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
                  activeTab === "other" && styles["active-tab"]
                }`}
                onClick={() => setActiveTab("other")}
              >
                Other
              </button>
            </div> */}
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
