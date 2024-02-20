import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { About } from "../about/About";
import { Services } from "../services/Services";
import { Events } from "../events/Events";
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

export const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
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
          <img
            src="square1.png"
            alt="square shape"
            className={styles["square"]}
          />
          <div className={styles["container"]}>
            <div className={styles["showcase-info"]}>
              <h3 className={styles["sub-heading"]}>Muk Students Body</h3>
              {/* <h1 className={styles["heading"]}>SEG Muk Chapter</h1> */}
              <h1 className={styles["heading"]}>AAPG Muk Chapter</h1>
              <p className={styles["text"]}>
                We are AAPG: American Association of Petroleum Geologists, A
                student chapter at Makerere University Department of Geology and
                Petroleum studies
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

            <div className={styles["showcase-image"]}>
              <img src="muk-tower.jpg" className={styles["muk-img"]} />
              {/* <img
                src="gift.png"
                alt="President SEG"
                className={styles["person"]}
              /> */}
              <h1 className={styles["seg-muk-img-title"]}>AAPG MUK CHAPTER</h1>
              {/* <img
                src="ev3.jpg"
                alt="President SEG"
                className={styles["person"]}
              /> */}
              <img
                src="ev3-removebg-preview.png"
                alt="President SEG"
                className={styles["person"]}
              />
              <img
                src="circle1.png"
                alt="circle dots"
                className={styles["circle"]}
              />
              <img
                src="dots.png"
                alt="circle dots"
                className={styles["dots"]}
              />
            </div>
          </div>
        </section>
        <About />
        <Services />
        <Events />
        <Committee />
        <FreqAskedQuestions />
        <Contact />
        <Subscription />
      </main>
      <Footer />
    </div>
  );
};

// to="mailto:kopiogift@gmail.com"
