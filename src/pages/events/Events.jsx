import { Link } from "react-router-dom";
import styles from "./Events.module.css";
import { useState } from "react";
import { ImageModal } from "../../features/image-modal/ImageModal";

export const Events = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImgUrl, setSelectedImgUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const events = [
    { imgUrl: "ev1.jpg", category: "diner", title: "Certificate Awards" },
    { imgUrl: "ev2.jpg", category: "conference", title: "Reception" },
    { imgUrl: "ev3.jpg", category: "dinner", title: "Group photo" },
    { imgUrl: "ev4.jpg", category: "dinner", title: "Conference" },
    { imgUrl: "ev5.jpg", category: "conference", title: "Certificate Awards" },
    { imgUrl: "ev6.jpg", category: "dinner", title: "Members after session" },
  ];

  const dinnerEvents = events.filter((event) => event.category === "dinner");
  const conferenceEvents = events.filter(
    (event) => event.category === "conference"
  );

  const openModal = (url) => {
    setSelectedImgUrl(() => url);
    setIsOpen(true);
    console.log("clicked");
    console.log("image url", url);
  };
  return (
    <>
      <section className={styles["events"]} id="events">
        <ImageModal
          selectedImgUrl={selectedImgUrl}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div className={styles["container"]}>
          <div className={styles["events_header"]}>
            <div className={styles["events_title"]}>
              <h3 className={styles["sub-heading"]}>SEG Events</h3>
              <h1 className={styles["heading"]}>Latest events</h1>
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
                  activeTab === "dinner" && styles["active-tab"]
                }`}
                onClick={() => setActiveTab("dinner")}
              >
                Dinner
              </button>
              <button
                className={`${styles["filter-btn"]} ${
                  activeTab === "conference" && styles["active-tab"]
                }`}
                onClick={() => setActiveTab("conference")}
              >
                Conference
              </button>
            </div>
          </div>
          <div className={styles["events-gallery"]}>
            {activeTab === "all" &&
              events.map((event, index) => (
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
                    <Link to="" className={styles["secondary-btn"]}>
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
            {activeTab === "dinner" &&
              dinnerEvents.map((event, index) => (
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
                    <Link to="" className={styles["secondary-btn"]}>
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
            {activeTab === "conference" &&
              conferenceEvents.map((event, index) => (
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
                    <Link to="" className={styles["secondary-btn"]}>
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
