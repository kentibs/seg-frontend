import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { About } from "../about/About";
import { Services } from "../services/Services";
// import { Events } from "../events/Events";
import { Committee } from "../committee/Committee";
import { Contact } from "../contact/Contact";
import { Subscription } from "../subscription/Subscription";
import { IoMdDownload } from "react-icons/io";
import { Footer } from "../../components/footer/Footer";
import LoginModal from "../../features/login_model/LoginModel";
import { Login } from "../../components/login/Login";
import { useSelector } from "react-redux";
import { Register } from "../../components/register/Register";
import { ForgotPassword } from "../../components/forgot-password/ForgotPassword";
import { FreqAskedQuestions } from "../freq-asked-questions/FreqAskedQuestions";
import { Lifestyle } from "../lifestyle/Lifestyle";
import {
  FaUsers,
  FaBook,
  FaBriefcase,
  FaTools,
  FaUserTie,
  FaIndustry,
  FaHandsHelping,
} from "react-icons/fa";
import { AdvisoryCommittee } from "../advisory-committee/AdvisoryCommittee";

// import { Testimonial } from "../testimonial/Testimonial";
// import { QrCode } from "../qr-code/QrCode";

export const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [activeImage, setActiveImage] = useState("group-photo.jpg");

  const images = [
    "group-photo.jpg",
    "mission.jpg",
    "ladies-group-photo.jpg",
    "ladies-soft-skills.jpg",
    "women-in-energy.jpg",
    "sports3.jpg",
    "ladiesCapacity.jpg",
  ];

  const handleDotClick = (card) => {
    setActiveImage(() => card);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = images.indexOf(activeImage);

      const nextIndex = (currentIndex + 1) % images.length;

      setActiveImage(images[nextIndex]);
    }, 2000);

    return () => clearInterval(timer);
  }, [activeImage, images]);

  const activeLoginContent = useSelector(
    (state) => state.loginContent.activeLoginContent
  );

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  const closeLoginModalHandler = () => {
    setIsLoginOpen(false);
  };
  const downloadPdf = () => {
    const pdfUrl = "/seg.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AAPG_description.pdf";
    link.click();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header scrolled={scrolled} />
      <main className={styles["main_container"]}>
        <section className={styles["showcase-area"]} id="home">
          {/* <img
            src="square1.png"
            alt="square shape"
            className={styles["square"]}
          /> */}
          <div className={styles["container"]}>
            <div className={styles["showcase-info"]}>
              <h3 className={styles["sub-heading"]}>Muk Students Body</h3>
              {/* <h1 className={styles["heading"]}>SEG Muk Chapter</h1> */}
              <h1 className={styles["heading"]}>AAPG Muk Chapter</h1>

              <p className={styles["text"]}>
                Welcome to AAPG Muk Chapter - Advancing Geoscience for a
                Sustainable Future. We are dedicated to:
                <ul className={styles["hero-list"]}>
                  <li className={styles["hero-list-item"]}>
                    <FaUsers className={styles["hero-list-icon"]} /> Connecting
                    Students & Professionals
                  </li>
                  <li className={styles["hero-list-item"]}>
                    <FaTools className={styles["hero-list-icon"]} /> Skill
                    Development Workshops
                  </li>
                  <li className={styles["hero-list-item"]}>
                    <FaHandsHelping className={styles["hero-list-icon"]} />{" "}
                    <span> Community Engagement</span>
                  </li>
                  <li className={styles["hero-list-item"]}>
                    <FaUserTie className={styles["hero-list-icon"]} />{" "}
                    Internship Opportunities
                  </li>
                  <li className={styles["hero-list-item"]}>
                    <FaBook className={styles["hero-list-icon"]} /> Knowledge
                    Sharing
                  </li>
                  <li className={styles["hero-list-item"]}>
                    <FaBriefcase className={styles["hero-list-icon"]} />{" "}
                    Networking Events
                  </li>
                  <li className={styles["hero-list-item"]}>
                    <FaIndustry className={styles["hero-list-icon"]} /> Industry
                    Insights
                  </li>
                </ul>
              </p>
              <div className={styles["cta"]}>
                <Link
                  to=""
                  className={styles["btn"]}
                  onClick={() => setIsLoginOpen(true)}
                >
                  Join us
                </Link>
                <LoginModal
                  open={isLoginOpen}
                  onClose={() => closeLoginModalHandler()}
                >
                  {activeLoginContent === "login" && <Login />}
                  {activeLoginContent === "register" && <Register />}
                  {activeLoginContent === "forgot" && <ForgotPassword />}
                </LoginModal>
                <Link
                  to=""
                  className={styles["secondary-btn"]}
                  onClick={downloadPdf}
                >
                  <IoMdDownload /> &nbsp; Download description
                </Link>
              </div>
            </div>

            {/* <div className={styles["showcase-image"]}> */}
            {/* <img src="muk-tower.jpg" className={styles["muk-img"]} /> */}

            {/* <h1 className={styles["seg-muk-img-title"]}>AAPG MUK CHAPTER</h1> */}
            <div className={styles["group-photo-container"]}>
              <img
                src={activeImage}
                alt="AAPG lifestyle"
                className={styles["person"]}
              />
              <a href="#lifestyle" className={styles["learn-more-msg"]}>
                Learn more...
              </a>

              <div className={styles["progress_dots_container"]}>
                <div className={styles["progress_dots"]}>
                  <span
                    className={`${styles["dot"]} ${
                      activeImage === "group-photo.jpg" && styles["active"]
                    }`}
                    onClick={() => handleDotClick("group-photo.jpg")}
                  ></span>

                  <span
                    className={`${styles["dot"]} ${
                      activeImage === "mission.jpg" && styles["active"]
                    }`}
                    onClick={() => handleDotClick("mission.jpg")}
                  ></span>

                  <span
                    className={`${styles["dot"]} ${
                      activeImage === "ladies-group-photo.jpg" &&
                      styles["active"]
                    }`}
                    onClick={() => handleDotClick("ladies-group-photo.jpg")}
                  ></span>
                  <span
                    className={`${styles["dot"]} ${
                      activeImage === "ladies-soft-skills.jpg" &&
                      styles["active"]
                    }`}
                    onClick={() => handleDotClick("ladies-soft-skills.jpg")}
                  ></span>
                  <span
                    className={`${styles["dot"]} ${
                      activeImage === "women-in-energy.jpg" && styles["active"]
                    }`}
                    onClick={() => handleDotClick("women-in-energy.jpg")}
                  ></span>
                  <span
                    className={`${styles["dot"]} ${
                      activeImage === "sports3.jpg" && styles["active"]
                    }`}
                    onClick={() => handleDotClick("sports3.jpg")}
                  ></span>
                  <span
                    className={`${styles["dot"]} ${
                      activeImage === "ladiesCapacity.jpg" && styles["active"]
                    }`}
                    onClick={() => handleDotClick("ladiesCapacity.jpg")}
                  ></span>
                </div>
              </div>
            </div>
            {/* <img
                src="circle1.png"
                alt="circle dots"
                className={styles["circle"]}
              /> */}
            <img src="dots.png" alt="circle dots" className={styles["dots"]} />
            {/* </div> */}
            {/* <img src="/oil-drop.png" className={styles["drop-bg"]} /> */}
            <img src="/Oil_well_icon.png" className={styles["oil-bg"]} />
          </div>
        </section>
        <div className={styles["triangle-container"]}>
          <img src="/oil-drop.png" className={styles["triangle"]} />
        </div>

        <About />
        <Services />
        <Lifestyle />
        {/* <Events /> */}
        <AdvisoryCommittee />
        <Committee />
        {/* <Testimonial /> */}
        <FreqAskedQuestions />
        <Contact />
        <Subscription />
      </main>
      <Footer />
      {/* <QrCode /> */}
    </div>
  );
};

// to="mailto:kopiogift@gmail.com"
