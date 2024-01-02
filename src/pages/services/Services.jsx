import { Link } from "react-router-dom";
import styles from "./Services.module.css";
import { useRef } from "react";

export const Services = () => {
  //   const [count, setCount] = useState(0);
  //   const [conferences, setConferences] = useState(0);
  //   const [years, setYears] = useState(0);
  const milestonesRef = useRef();

  const downloadPdf = () => {
    const pdfUrl = "/seg.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "SEG_description.pdf";
    link.click();
  };

  //   const hasReached = (el) => {
  //     if (el) {
  //       let topPosition = el.getBoundingClientRect().top;
  //       console.log(topPosition);
  //       if (window.innerHeight >= topPosition + el.offsetHeight) {
  //         console.log("You've reached the Services section");
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }
  //     return false;
  //   };

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       console.log("Scroll event triggered");

  //       if (hasReached(milestonesRef.current)) {
  //         const interval = setInterval(() => {
  //           if (count < 89) {
  //             setCount((prevCount) => prevCount + 1);
  //           } else {
  //             clearInterval(interval);
  //           }
  //         }, 10);
  //         const interval2 = setInterval(() => {
  //           if (years < 3) {
  //             setYears((prevCount) => prevCount + 1);
  //           } else {
  //             clearInterval(interval2);
  //           }
  //         }, 10);
  //         const interval3 = setInterval(() => {
  //           if (conferences < 15) {
  //             setConferences((prevCount) => prevCount + 1);
  //           } else {
  //             clearInterval(interval3);
  //           }
  //         }, 10);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [count, conferences, years]);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (count < targetNumber) {
  //         setCount((prevCount) => prevCount + 1);
  //       } else {
  //         clearInterval(interval);
  //       }
  //       if (years < 3) {
  //         setYears((prevCount) => prevCount + 1);
  //       } else {
  //         clearInterval(interval);
  //       }
  //       if (conferences < 15) {
  //         setConferences((prevCount) => prevCount + 1);
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 10);

  //     return () => clearInterval(interval);
  //   }, [count, targetNumber]);
  return (
    <>
      <section className={styles["services"]}>
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
                  {/* <span>{years}</span>+ */}
                  <span>3</span>+
                </h2>
                <h5>Years</h5>
              </div>
              <div className={styles["ml"]}>
                <h2 className={styles["number"]}>
                  <span>34</span>+
                </h2>
                <h5>Projects</h5>
              </div>
              <div className={styles["ml"]}>
                <h2 className={styles["number"]}>
                  <span>15</span>+
                </h2>
                <h5>Conferences</h5>
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
                Download details
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
                Explore more
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
                Explore more
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
                Explore more
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
                Explore more
              </Link>
            </div>
            <img src="square1.png" alt="" className={styles["square"]} />
          </div>
        </div>
      </section>
    </>
  );
};
