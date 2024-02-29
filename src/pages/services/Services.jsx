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

  const sliceText = (text) => {
    const maxCharacters = 110;
    return text.length > maxCharacters
      ? text.slice(0, maxCharacters) + "..."
      : text;
  };
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
          if (prevCount < 1000) return prevCount + 1;
          return prevCount;
        });

        setYears((prevCount) => {
          if (prevCount < 10) return prevCount + 1;
          return prevCount;
        });

        setCompetitions((prevCount) => {
          if (prevCount < 250) return prevCount + 1;
          return prevCount;
        });

        if (projects >= 1000 && years >= 10 && competitions >= 250) {
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
        {/* <img src="triangle.png" alt="" className={styles["triangle"]} /> */}
        {/* <img src="/oil-drop.png" className={styles["triangle"]} /> */}
        <svg
          // fill="#000000"
          fill="#0047ab"
          height="800px"
          width="800px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 511.999 511.999"
          xmlSpace="preserve"
          className={styles["oil-platform"]}
        >
          <g>
            <g>
              <g>
                <path
                  d="M490.98,392.503H355.871v-18.7c7.982-3.974,13.482-12.216,13.482-21.721c0-2.834-0.494-5.554-1.391-8.084h7.461
				c13.372,0,24.253-10.88,24.253-24.253s-10.88-24.253-24.253-24.253h-6.697l-4.552-29.38c-0.609-3.94-4.001-6.847-7.988-6.847
				h-11.846l-7.331-68.091c-0.017-0.359-0.051-0.713-0.114-1.057l-10.146-94.244h110.436v22.87c0,9.047,5.6,16.8,13.509,20.009
				v97.394c-7.282,3.142-12.396,10.388-12.396,18.81c0,3.68,0.988,7.127,2.695,10.115l-18.452,24.406h-0.611
				c-4.466,0-8.084,3.618-8.084,8.084v44.248v23.924c0,4.466,3.618,8.084,8.084,8.084h73.694c4.466,0,8.084-3.618,8.084-8.084
				v-23.924V297.56c0-4.466-3.618-8.084-8.084-8.084h-0.609l-18.452-24.403c1.706-2.988,2.696-6.436,2.696-10.116
				c0-8.422-5.114-15.668-12.396-18.81v-96.356c9.619-2.177,16.829-10.779,16.829-21.046V95.873h8.676
				c10.824,0,19.629-8.805,19.629-19.629s-8.805-19.629-19.629-19.629h-29.327c-4.466,0-8.084,3.618-8.084,8.084
				s3.618,8.084,8.084,8.084h29.327c1.909,0,3.461,1.552,3.461,3.461s-1.552,3.461-3.461,3.461H325.01l-0.745-6.922h112.909
				c4.465,0,8.084-3.619,8.084-8.084s-3.62-8.084-8.084-8.084h-114.65l-1.784-16.571c-0.442-4.107-3.908-7.219-8.038-7.219h-18.206
				V8.084c0-4.466-3.618-8.084-8.084-8.084c-4.465,0-8.084,3.618-8.084,8.084v24.74h-18.206c-4.129,0-7.596,3.113-8.038,7.219
				l-23.598,219.223h-16.33v-15.333c0-4.466-3.62-8.084-8.084-8.084s-8.084,3.618-8.084,8.084v23.417v28.142h-4.84H78.014h-4.84
				v-95.824h4.84c0.044,0,0.087,0,0.131-0.001h112.872c0.044,0.001,0.087,0.001,0.131,0.001h4.84v18.395
				c0,4.466,3.62,8.084,8.084,8.084c4.465,0,8.084-3.618,8.084-8.084v-26.479c0-4.466-3.62-8.084-8.084-8.084h-4.354v-28.673
				c0-4.466-3.62-8.084-8.084-8.084h-48.343v-24.739c0-4.466-3.62-8.084-8.084-8.084s-8.084,3.618-8.084,8.084v24.739H77.526
				c-4.465,0-8.084,3.618-8.084,8.084v28.673h-4.351c-4.465,0-8.084,3.618-8.084,8.084v103.909h-4.935
				c-13.373,0-24.253,10.88-24.253,24.253s10.879,24.253,24.253,24.253h5.735c-0.898,2.53-1.391,5.25-1.391,8.084
				c0,9.506,5.499,17.746,13.482,21.721v18.7h-48.88C9.429,392.502,0,401.931,0,413.521v77.459c0,11.589,9.429,21.019,21.019,21.019
				H490.98c11.589,0,21.019-9.429,21.019-21.019v-77.458C511.999,401.932,502.57,392.503,490.98,392.503z M487.543,357.647h-57.526
				v-7.755h57.526V357.647z M487.543,305.642v28.08h-57.526v-28.08H487.543z M474.748,289.475h-31.935l11.063-14.631
				c0.201,0.05,0.405,0.087,0.609,0.13c0.1,0.022,0.199,0.044,0.3,0.064c0.575,0.113,1.154,0.203,1.74,0.266
				c0.146,0.016,0.292,0.026,0.439,0.039c0.539,0.046,1.079,0.078,1.621,0.082c0.066,0,0.129,0.01,0.196,0.01s0.13-0.01,0.197-0.01
				c0.541-0.005,1.08-0.036,1.618-0.082c0.148-0.013,0.295-0.023,0.443-0.04c0.584-0.064,1.162-0.153,1.734-0.265
				c0.103-0.02,0.206-0.044,0.308-0.066c0.201-0.043,0.404-0.08,0.603-0.128L474.748,289.475z M454.47,254.956
				c0-2.378,1.934-4.312,4.312-4.312s4.312,1.934,4.312,4.312c0,1.413-0.692,2.658-1.745,3.445
				c-0.107,0.079-0.233,0.161-0.366,0.241c-0.076,0.045-0.154,0.085-0.232,0.126c-0.125,0.067-0.252,0.133-0.397,0.191
				c-0.127,0.05-0.262,0.085-0.395,0.123c-0.113,0.033-0.217,0.074-0.338,0.099c-0.272,0.054-0.552,0.085-0.84,0.085
				c-0.288,0-0.568-0.031-0.84-0.085c-0.121-0.025-0.223-0.066-0.335-0.098c-0.135-0.039-0.271-0.073-0.399-0.124
				c-0.141-0.057-0.264-0.122-0.387-0.187c-0.084-0.043-0.168-0.086-0.248-0.135c-0.126-0.078-0.246-0.155-0.348-0.231
				C455.166,257.62,454.47,256.373,454.47,254.956z M453.356,96.085h14.17v22.657c0,2.991-2.434,5.425-5.425,5.425h-3.32
				c-2.991,0-5.425-2.434-5.425-5.425V96.085z M85.61,162.911h97.94v20.588H85.61V162.911z M322.34,205.955l3.487,32.387
				l-25.188-17.398L322.34,205.955z M299.299,136.225l-12.885,10.454l-12.885-10.454H299.299z M270.488,120.056l15.926-15.657
				l15.925,15.657H270.488z M306.129,183.498h-39.43l19.715-15.997L306.129,183.498z M302.995,199.666l-16.581,11.453
				l-16.581-11.453H302.995z M315.646,143.783l3.14,29.163l-19.541-15.856L315.646,143.783z M311.635,106.521l-13.69-13.46
				l11.07-10.882L311.635,106.521z M267.386,48.992h38.056l1.366,12.684l-20.394,20.05L266.02,61.675L267.386,48.992z
				 M263.813,82.178l11.07,10.883l-13.69,13.46L263.813,82.178z M257.181,143.783l16.401,13.308l-19.541,15.856L257.181,143.783z
				 M250.488,205.955l21.701,14.99l-25.188,17.398L250.488,205.955z M286.414,230.77l41.255,28.496h-82.511L286.414,230.77z
				 M212.158,275.434h23.591h101.332h0.02h12.156l3.108,20.057H212.158V275.434z M52.072,327.83c-4.458,0-8.084-3.627-8.084-8.084
				c0-4.458,3.626-8.084,8.084-8.084h13.019h12.804c0.043,0.001,0.087,0.001,0.13,0.001h113.114c0.044,0,0.087,0,0.131-0.001h12.803
				h157.691c0.009,0,0.016,0.001,0.025,0.001c0.004,0,0.01-0.001,0.014-0.001h13.62c4.458,0,8.084,3.626,8.084,8.084
				s-3.626,8.084-8.084,8.084h-30.323h-26.964h-45.049c-4.466,0-8.084,3.618-8.084,8.084s3.618,8.084,8.084,8.084h22.187
				c-0.898,2.53-1.39,5.25-1.39,8.084c0,9.506,5.5,17.746,13.482,21.721v18.7H118.404v-18.7
				c7.982-3.974,13.482-12.216,13.482-21.721c0-2.834-0.494-5.554-1.391-8.084h115.644c4.465,0,8.084-3.618,8.084-8.084
				s-3.62-8.084-8.084-8.084H107.634H80.669H52.072z M318.136,360.166c-4.458,0-8.084-3.626-8.084-8.084
				c0-4.458,3.626-8.084,8.084-8.084h26.964c4.457,0,8.084,3.626,8.084,8.084c0,4.458-3.626,8.084-8.084,8.084H318.136z
				 M339.702,376.335v24.253v43.58h-16.168v-43.58v-24.253H339.702z M80.669,360.166c-4.458,0-8.084-3.626-8.084-8.084
				c0-4.458,3.626-8.084,8.084-8.084h26.964c4.458,0,8.084,3.626,8.084,8.084c0,4.458-3.626,8.084-8.084,8.084H80.669z
				 M102.236,376.335v24.253v43.58H86.067v-43.58v-24.253H102.236z M495.832,490.981h-0.001c0,2.674-2.176,4.851-4.851,4.851H21.019
				c-2.674,0-4.851-2.176-4.851-4.851v-77.459c0-2.674,2.176-4.851,4.851-4.851h48.88v35.496H58.926
				c-4.465,0-8.084,3.618-8.084,8.084s3.62,8.084,8.084,8.084h19.057h32.337h25.675c4.465,0,8.084-3.618,8.084-8.084
				s-3.62-8.084-8.084-8.084h-17.591v-35.496h188.962v35.496h-24.956c-4.466,0-8.084,3.618-8.084,8.084s3.618,8.084,8.084,8.084
				h33.041h32.337h25.883c4.466,0,8.084-3.618,8.084-8.084s-3.618-8.084-8.084-8.084h-17.799v-35.496h135.11
				c2.674,0,4.851,2.176,4.851,4.851V490.981z"
                />
                <path
                  d="M409.238,444.166h-10.059c-4.466,0-8.084,3.618-8.084,8.084s3.618,8.084,8.084,8.084h10.059
				c4.466,0,8.084-3.618,8.084-8.084S413.704,444.166,409.238,444.166z"
                />
                <path
                  d="M171.358,212.496H95.229c-4.465,0-8.084,3.618-8.084,8.084s3.62,8.084,8.084,8.084h76.128
				c4.465,0,8.084-3.618,8.084-8.084S175.822,212.496,171.358,212.496z"
                />
                <path
                  d="M171.358,239.444H95.229c-4.465,0-8.084,3.618-8.084,8.084s3.62,8.084,8.084,8.084h76.128
				c4.465,0,8.084-3.618,8.084-8.084S175.822,239.444,171.358,239.444z"
                />
                <path
                  d="M171.358,266.389H95.229c-4.465,0-8.084,3.618-8.084,8.084s3.62,8.084,8.084,8.084h76.128
				c4.465,0,8.084-3.618,8.084-8.084S175.822,266.389,171.358,266.389z"
                />
              </g>
            </g>
          </g>
        </svg>

        <div className={styles["container"]}>
          <div className={styles["services-info"]}>
            <h3 className={styles["sub-heading"]}>Our Services</h3>
            <h1 className={styles["heading"]}>
              Networking, <br /> Transforming the world
            </h1>
            <p className={styles["text"]}>
              We ensure that students are enlightened as per the Geoscience
              sector while bridging the gap between Professionals in the sector
              and students as well as fostering creativity among students
              bringing all the precious opportunities down to where you are.
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
                <h5>Events</h5>
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
                <h3 className={styles["card-name"]}>Research</h3>
                <p>
                  {sliceText(
                    "We encourage research among our students in various ways including incentives associated with winning various competitions such as essay writing, exhibitions or project development as well as other skills acquired from various softwares such as Reservoir modelling challenges solved by softwares such as Petrel, CMG etc, data collection, preparation and visualization using softwares like ArcGIS, QGIS etc. We also do promote research through various Internship programs and trainings from Professionals as well as Professional lectures."
                  )}
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
                  <h3 className={styles["card-name"]}>Research</h3>
                  <p>
                    We encourage research among our students in various ways
                    including incentives associated with winning various
                    competitions such as essay writing, exhibitions or project
                    development as well as other skills acquired from various
                    softwares such as Reservoir modelling challenges solved by
                    softwares such as Petrel, CMG etc, data collection,
                    preparation and visualization using softwares like ArcGIS,
                    QGIS etc. <br />
                    We also do promote research through various Internship
                    programs and trainings from Professionals as well as
                    Professional lectures.
                  </p>
                </div>
              </ReadMoreModal>
            </div>

            <div className={styles["srv-card"]}>
              <div className={styles["card-desc"]}>
                <h3 className={styles["card-name"]}>Opportunities</h3>
                <p>
                  {sliceText(
                    "Owing to the transformative activities and events within the Association as well as the associated exposure of our members, the resultant opportunities are endless especially considering the spiced up student portfolio as well as direct contact with the employers themselves. Therefore, our members are highly previleged with several opportunities such as internship opportunities, scholarship opportunities, job opportunities among others."
                  )}
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
                  <h3 className={styles["card-name"]}>Opportunities</h3>
                  <p>
                    Owing to the transformative activities and events within the
                    Association as well as the associated exposure of our
                    members, the resultant opportunities are endless especially
                    considering the spiced up student portfolio as well as
                    direct contact with the employers themselves. Therefore, our
                    members are highly privileged with several opportunities
                    such as internship opportunities, scholarship opportunities,
                    job opportunities among others.{" "}
                  </p>
                </div>
              </ReadMoreModal>
            </div>

            <div className={styles["srv-card"]}>
              <div className={styles["card-desc"]}>
                <h3 className={styles["card-name"]}>Networking</h3>
                <p>
                  {sliceText(
                    "Our members are also privileged with a close relationship with Professionals as well as potential employers from prominent companies such as TotalEnergies, CNOOC, UNOC, BigSolutions Group among others. This as a result links them with the real world implementation of the knowledge they acquire from their lectures as well as a platform to showcase their own skills,talents as well as creativity."
                  )}
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
                  <h3 className={styles["card-name"]}>Networking</h3>
                  <p>
                    Our members are also privileged with a close relationship
                    with Professionals as well as potential employers from
                    prominent companies such as TotalEnergies, CNOOC, UNOC,
                    BigSolutions Group among others. This as a result links them
                    with the real world implementation of the knowledge they
                    acquire from their lectures as well as a platform to
                    showcase their own skills, talents as well as creativity.
                  </p>
                </div>
              </ReadMoreModal>
            </div>

            <div className={styles["srv-card"]}>
              <div className={styles["card-desc"]}>
                <h3 className={styles["card-name"]}>Innovations</h3>
                <p>
                  {sliceText(
                    "The Association also highly encourages the practical application of theoretical knowledge in order to solve real world problems. This is done through exhibitions of various projects implemented by students as well as presentations and challenges solved by students including various competitions organized by the Association."
                  )}
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
                  <h3 className={styles["card-name"]}>Innovations</h3>
                  <p>
                    The Association also highly encourages the practical
                    application of theoretical knowledge in order to solve real
                    world problems. This is done through exhibitions of various
                    projects implemented by students as well as presentations
                    and challenges solved by students including various
                    competitions organized by the Association.
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
