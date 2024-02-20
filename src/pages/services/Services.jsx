import { Link } from "react-router-dom";
import styles from "./Services.module.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import { IoMdDownload } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Register } from "../../components/register/Register";
import { Login } from "../../components/login/Login";
import { ForgotPassword } from "../../components/forgot-password/ForgotPassword";
import LoginModal from "../../features/login_model/LoginModel";
import ReadMoreModal from "../../features/read-more-modal/ReadMoreModal";

export const Services = () => {
  const [projects, setProjects] = useState(0);
  const [competitions, setCompetitions] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isReadMore1Open, setIsReadMore1Open] = useState(false);
  const [isReadMore2Open, setIsReadMore2Open] = useState(false);
  const [isReadMore3Open, setIsReadMore3Open] = useState(false);
  const [isReadMore4Open, setIsReadMore4Open] = useState(false);
  const [years, setYears] = useState(0);
  const milestonesRef = useRef();
  const servicesRef = useRef();

  const activeLoginContent = useSelector(
    (state) => state.loginContent.activeLoginContent
  );

  const closeReadMoreModal1Handler = () => {
    setIsReadMore1Open(false);
  };
  const closeReadMoreModal2Handler = () => {
    setIsReadMore2Open(false);
  };
  const closeReadMoreModal3Handler = () => {
    setIsReadMore3Open(false);
  };
  const closeReadMoreModal4Handler = () => {
    setIsReadMore4Open(false);
  };

  const closeLoginModalHandler = () => {
    setIsLoginOpen(false);
  };

  console.log("years", years);
  console.log("conferences", competitions);
  console.log("projects", projects);

  // const downloadPdf = () => {
  //   const pdfUrl = "/seg.pdf";
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "SEG_description.pdf";
  //   link.click();
  // };

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

  const downloadPdf = () => {
    const pdfUrl = "/seg.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AAPG_description.pdf";
    link.click();
  };

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
              We are AAPG: American Association of Petroleum Geologists, A
              student chapter at Makerere University Department of Geology and
              Petroleum studies
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
                <IoMdDownload />
                &nbsp;Download details
              </Link>
            </div>
          </div>
          <div className={styles["services-grid"]}>
            <div className={styles["srv-card"]}>
              <div className={styles["card-desc"]}>
                <h3 className={styles["card-name"]}>Brand Identity</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima explicabo laboriosam, sed animi, quia architecto quidem
                  hic laudantium.
                </p>
              </div>

              <Link
                to=""
                className={styles["secondary-btn"]}
                onClick={() => setIsReadMore1Open(true)}
              >
                <span>Explore more</span>&nbsp;
                <RxDoubleArrowRight />
              </Link>
              <ReadMoreModal
                open={isReadMore1Open}
                onClose={() => closeReadMoreModal1Handler()}
              >
                <div className={styles["card-desc"]}>
                  <h3 className={styles["card-name"]}>Brand Identity</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minima explicabo laboriosam, sed animi, quia architecto
                    quidem hic laudantium. Minima explicabo laboriosam, sed
                    animi, quia architecto quidem hic laudantium. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Minima
                    explicabo laboriosam, sed animi, quia architecto quidem hic
                    laudantium. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Minima explicabo laboriosam, sed animi,
                    quia architecto quidem hic laudantium. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Minima explicabo
                    laboriosam, sed animi, quia architecto quidem hic
                    laudantium. Minima explicabo laboriosam, sed animi, quia
                    architecto quidem hic laudantium. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Minima explicabo laboriosam,
                    sed animi, quia architecto quidem hic
                  </p>
                </div>
              </ReadMoreModal>
            </div>

            <div className={styles["srv-card"]}>
              <div className={styles["card-desc"]}>
                <h3 className={styles["card-name"]}>Inspiring innovation</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima explicabo laboriosam, sed animi.
                </p>
              </div>

              <Link
                to=""
                className={styles["secondary-btn"]}
                onClick={() => setIsReadMore2Open(true)}
              >
                <span>Explore more</span>&nbsp;
                <RxDoubleArrowRight />
              </Link>
              <ReadMoreModal
                open={isReadMore2Open}
                onClose={() => closeReadMoreModal2Handler()}
              >
                <div className={styles["card-desc"]}>
                  <h3 className={styles["card-name"]}>Inspiring innovation</h3>
                  <p>
                    Hey Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Minima explicabo laboriosam, sed animi, quia
                    architecto quidem hic laudantium. Minima explicabo
                    laboriosam, sed animi, quia architecto quidem hic
                    laudantium. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Minima explicabo laboriosam, sed animi,
                    quia architecto quidem hic laudantium. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Minima explicabo
                    laboriosam, sed animi, quia architecto quidem hic
                    laudantium. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Minima explicabo laboriosam, sed animi,
                    quia architecto quidem hic laudantium. Minima explicabo
                    laboriosam, sed animi, quia architecto quidem hic
                    laudantium. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Minima explicabo laboriosam, sed animi,
                    quia architecto quidem hic
                  </p>
                </div>
              </ReadMoreModal>
            </div>

            <div className={styles["srv-card"]}>
              <div className={styles["card-desc"]}>
                <h3 className={styles["card-name"]}>Exploratory activities</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima explicabo laboriosam, sed animi, quia architecto
                  quidem.
                </p>
              </div>
              <Link
                to=""
                className={styles["secondary-btn"]}
                onClick={() => setIsReadMore3Open(true)}
              >
                <span>Explore more</span>&nbsp;
                <RxDoubleArrowRight />
              </Link>
              <ReadMoreModal
                open={isReadMore3Open}
                onClose={() => closeReadMoreModal3Handler()}
              >
                <div className={styles["card-desc"]}>
                  <h3 className={styles["card-name"]}>
                    Exploratory activities
                  </h3>
                  <p>
                    Hey3 Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Minima explicabo laboriosam, sed animi, quia
                    architecto quidem hic laudantium. Minima explicabo
                    laboriosam, sed animi, quia architecto quidem hic
                    laudantium. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Minima explicabo laboriosam, sed animi,
                    quia architecto quidem hic laudantium. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Minima explicabo
                    laboriosam, sed animi, quia architecto quidem hic
                    laudantium. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Minima explicabo laboriosam, sed animi,
                    quia architecto quidem hic laudantium. Minima explicabo
                    laboriosam, sed animi, quia architecto quidem hic
                    laudantium. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Minima explicabo laboriosam, sed animi,
                    quia architecto quidem hic
                  </p>
                </div>
              </ReadMoreModal>
            </div>

            <div className={styles["srv-card"]}>
              <div className={styles["card-desc"]}>
                <h3 className={styles["card-name"]}>Job opportunities</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima explicabo laboriosam, sed animi, quia architecto quidem
                  hic laudantium.
                </p>
              </div>
              <Link
                to=""
                className={styles["secondary-btn"]}
                onClick={() => setIsReadMore4Open(true)}
              >
                <span>Explore more</span>&nbsp;
                <RxDoubleArrowRight />
              </Link>
              <ReadMoreModal
                open={isReadMore4Open}
                onClose={() => closeReadMoreModal4Handler()}
              >
                <div className={styles["card-desc"]}>
                  <h3 className={styles["card-name"]}>Job opportunities</h3>
                  <p>
                    There are many job opportunities waiting for the diligent
                    and strategic Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Minima explicabo laboriosam, sed animi,
                    quia architecto quidem hic laudantium. Minima explicabo
                    laboriosam, sed animi, quia architecto quidem hic
                    laudantium. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Minima explicabo laboriosam, sed animi,
                    quia architecto quidem hic laudantium. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Minima explicabo
                    laboriosam, sed animi, quia architecto quidem hic
                    laudantium. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Minima explicabo laboriosam, sed animi,
                    quia architecto quidem hic laudantium. Minima explicabo
                    laboriosam, sed animi, quia architecto quidem hic
                    laudantium. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Minima explicabo laboriosam, sed animi,
                    quia architecto quidem hic
                  </p>
                </div>
              </ReadMoreModal>
            </div>
            <img src="square1.png" alt="" className={styles["square"]} />
          </div>
        </div>
      </section>
    </>
  );
};
