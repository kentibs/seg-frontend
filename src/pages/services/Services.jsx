import { Link } from "react-router-dom";
import styles from "./Services.module.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import { IoMdDownload } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

export const Services = () => {
  const [projects, setProjects] = useState(0);
  const [competitions, setCompetitions] = useState(0);
  const [years, setYears] = useState(0);
  const milestonesRef = useRef();
  const servicesRef = useRef();

  console.log("years", years);
  console.log("conferences", competitions);
  console.log("projects", projects);

  const downloadPdf = () => {
    const pdfUrl = "/seg.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "SEG_description.pdf";
    link.click();
  };

  const hasReached = (el) => {
    if (el) {
      let topPosition = el.getBoundingClientRect().top;
      // console.log(topPosition);
      if (window.innerHeight >= topPosition + el.offsetHeight) {
        // console.log("You've reached the skills section");
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (hasReached(servicesRef.current)) {
        startIncrementing();
      }
    };

    const startIncrementing = () => {
      const interval = setInterval(() => {
        setProjects((prevCount) => {
          if (prevCount < 44) return prevCount + 1;
          return prevCount;
        });

        setYears((prevCount) => {
          if (prevCount < 3) return prevCount + 1;
          return prevCount;
        });

        setCompetitions((prevCount) => {
          if (prevCount < 25) return prevCount + 1;
          return prevCount;
        });

        if (projects >= 44 && years >= 3 && competitions >= 15) {
          clearInterval(interval);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => { 
      window.removeEventListener("scroll", handleScroll);
    };
  }, [projects, years, competitions]);

  return (
    <>
      <section className={styles["services"]} id="services" ref={servicesRef}>
        <img src="triangle.png" alt="" className={styles["triangle"]} />

        <div className={styles["container"]}>
          <div className={styles["services-info"]}>
            <h3 className={styles["sub-heading"]}>Our Services</h3>
            <h1 className={styles["heading"]}>
              Networking, <br /> Inspiring the world
            </h1>
            <p className={styles["text"]}>
              We are SEG: Society of Exploration Geophysicists, A student
              chapter at Makerere University Department of Geology and Petroleum
              studies
            </p>
            <div className={styles["milestones"]} ref={milestonesRef}>
              <div className={styles["ml"]}>
                <h2 className={styles["number"]}>
                  <span>{years}</span>+{/* <span>3</span>+ */}
                </h2>
                <h5>Years</h5>
              </div>
              <div className={styles["ml"]}>
                <h2 className={styles["number"]}>
                  <span>{projects}</span>+{/* <span>34</span>+ */}
                </h2>
                <h5>Projects</h5>
              </div>
              <div className={styles["ml"]}>
                <h2 className={styles["number"]}>
                  <span>{competitions}</span>+{/* <span>15</span>+ */}
                </h2>
                <h5>Competitions</h5>
              </div>
            </div>
            <div className={styles["cta"]}>
              <Link to="" className={styles["btn"]}>
                Join us
              </Link>
              <Link
                to=""
                className={styles["secondary-btn"]}
                onClick={downloadPdf}
              >
                <IoMdDownload />
                &nbsp;Download details
              </Link>
            </div>
          </div>
          <div className={styles["services-grid"]}>
            <div className={styles["srv-card"]}>
              <div className={styles["card-desc"]}>
                <h3 className={styles[""]}>Brand Identity</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima explicabo laboriosam, sed animi, quia architecto quidem
                  hic laudantium.
                </p>
              </div>
              <Link
                to=""
                className={styles["secondary-btn"]}
                onClick={downloadPdf}
              >
                <span>Explore more</span>&nbsp;
                <RxDoubleArrowRight />
              </Link>
            </div>

            <div className={styles["srv-card"]}>
              <div className={styles["card-desc"]}>
                <h3 className={styles[""]}>Inspiring innovation</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima explicabo laboriosam, sed animi.
                </p>
              </div>
              <Link
                to=""
                className={styles["secondary-btn"]}
                onClick={downloadPdf}
              >
                <span>Explore more</span>&nbsp;
                <RxDoubleArrowRight />
              </Link>
            </div>

            <div className={styles["srv-card"]}>
              <div className={styles["card-desc"]}>
                <h3 className={styles[""]}>Exploratory activities</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima explicabo laboriosam, sed animi, quia architecto
                  quidem.
                </p>
              </div>
              <Link
                to=""
                className={styles["secondary-btn"]}
                onClick={downloadPdf}
              >
                <span>Explore more</span>&nbsp;
                <RxDoubleArrowRight />
              </Link>
            </div>

            <div className={styles["srv-card"]}>
              <div className={styles["card-desc"]}>
                <h3 className={styles[""]}>Job opportunities</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima explicabo laboriosam, sed animi, quia architecto quidem
                  hic laudantium.
                </p>
              </div>
              <Link
                to=""
                className={styles["secondary-btn"]}
                onClick={downloadPdf}
              >
                <span>Explore more</span>&nbsp;
                <RxDoubleArrowRight />
              </Link>
            </div>
            <img src="square1.png" alt="" className={styles["square"]} />
          </div>
        </div>
      </section>
    </>
  );
};
