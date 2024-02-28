import styles from "./Testimonial.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
// import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export const Testimonial = () => {
  return (
    <section className={styles["testimonial-main-container"]}>
      <div className={styles["header"]}>
        <h3 className={styles["sub-heading"]}>Testimonials</h3>
        <h1 className={styles["heading"]}>Our Witnesses</h1>
      </div>
      <div className={styles["testimonial-container"]}>
        <div className={styles["testimonial-content"]}>
          <div className={styles["single-testimonial"]}>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              style={{
                fontSize: "80px",
                position: "absolute",
                left: "-1rem",
                top: "-2rem",
                zIndex: "4",
              }}
              className={styles["quote-icon"]}
            />
            <FontAwesomeIcon
              icon={faQuoteRight}
              className={styles["quote-icon"]}
              style={{
                fontSize: "80px",
                position: "absolute",
                bottom: "-2rem",
                right: "-1rem",
                zIndex: "4",
              }}
            />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae deserunt quisquam nesciunt voluptatibus voluptatem
              numquam eveniet esse enim inventore distinctio sunt{" "}
            </p>
            <div className={styles["client-info"]}>
              <div className={styles["client-pic"]}>
                <img src="Ruth.jpg" className={styles["image"]} />
              </div>
              <div className={styles["client-details"]}>
                <h6>Ruth</h6>
                <span>President, AAPG</span>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------2nd Testimonial---------------- */}
        <div className={styles["testimonial-content"]}>
          <div className={styles["single-testimonial"]}>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              style={{
                fontSize: "80px",
                position: "absolute",
                left: "-1rem",
                top: "-2rem",
                zIndex: "4",
              }}
              className={styles["quote-icon"]}
            />
            <FontAwesomeIcon
              icon={faQuoteRight}
              style={{
                fontSize: "80px",
                position: "absolute",
                bottom: "-2rem",
                right: "-1rem",
                zIndex: "4",
              }}
              className={styles["quote-icon"]}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae deserunt quisquam nesciunt voluptatibus voluptatem
              numquam eveniet esse enim inventore distinctio sunt{" "}
            </p>
            <div className={styles["client-info"]}>
              <div className={styles["client-pic"]}>
                <img src="Ruth.jpg" className={styles["image"]} />
              </div>
              <div className={styles["client-details"]}>
                <h6>Ruth</h6>
                <span>President, AAPG</span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------2nd Testimonial---------------- */}
        <div className={styles["testimonial-content"]}>
          <div className={styles["single-testimonial"]}>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              style={{
                fontSize: "80px",
                position: "absolute",
                left: "-1rem",
                top: "-2rem",
                zIndex: "4",
              }}
              className={styles["quote-icon"]}
            />
            <FontAwesomeIcon
              icon={faQuoteRight}
              style={{
                fontSize: "80px",
                position: "absolute",
                bottom: "-2rem",
                right: "-1rem",
                zIndex: "4",
              }}
              className={styles["quote-icon"]}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae deserunt quisquam nesciunt voluptatibus voluptatem
              numquam eveniet esse enim inventore distinctio sunt{" "}
            </p>
            <div className={styles["client-info"]}>
              <div className={styles["client-pic"]}>
                <img src="Ruth.jpg" className={styles["image"]} />
              </div>
              <div className={styles["client-details"]}>
                <h6>Ruth</h6>
                <span>President, AAPG</span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------2nd Testimonial---------------- */}
        {/* <div className={styles["testimonial-content"]}>
        <div className={styles["single-testimonial"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            deserunt quisquam nesciunt voluptatibus voluptatem numquam eveniet
            esse enim inventore distinctio sunt{" "}
          </p>
          <div className={styles["client-info"]}>
            <div className={styles["client-pic"]}>
              <img src="Ruth.jpg" className={styles["image"]} />
            </div>
            <div className={styles["client-details"]}>
              <h6>Ruth</h6>
              <span>President, AAPG</span>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </section>
  );
};
