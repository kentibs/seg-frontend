import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { About } from "../about/About";
import { Services } from "../services/Services";
import { Events } from "../events/Events";
import { Committee } from "../committee/Committee";
import { Contact } from "../contact/Contact";

export const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };
  const downloadPdf = () => {
    const pdfUrl = "/seg.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "SEG_description.pdf";
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
      <main>
        <section className={styles["showcase-area"]}>
          <img
            src="square1.png"
            alt="square shape"
            className={styles["square"]}
          />
          <div className={styles["container"]}>
            <div className={styles["showcase-info"]}>
              <h3 className={styles["sub-heading"]}>Muk Students Body</h3>
              <h1 className={styles["heading"]}>SEG Muk Chapter</h1>
              <p className={styles["text"]}>
                We are SEG: Society of Exploration Geophysicists, A student
                chapter at Makerere University Department of Geology and
                Petroleum studies
              </p>
              <div className={styles["cta"]}>
                <Link to="" className={styles["btn"]}>
                  Join us
                </Link>
                <Link
                  to=""
                  className={styles["secondary-btn"]}
                  onClick={downloadPdf}
                >
                  Download description
                </Link>
              </div>
            </div>
            <div className={styles["showcase-image"]}>
              {/* <img
                src="gift.png"
                alt="President SEG"
                className={styles["person"]}
              /> */}
              <h1 className={styles["seg-muk-img-title"]}>SEG MUK CHAPTER</h1>
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
        <Contact />
      </main>
    </div>
  );
};
// to="mailto:kopiogift@gmail.com"
