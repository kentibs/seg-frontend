import styles from "./Summary.module.css";
import { useEffect, useRef, useState } from "react";

export const Summary = () => {
  const [animate, setAnimate] = useState(false);
  const firstSkillRef = useRef();
  const progressBarsRef = useRef();
  const skCounters = document.querySelectorAll(".counter span");
  //   const progressBars = document.querySelectorAll(".skills svg circle");

  //   const firstSkill = document.querySelector(".skill:first-child");
  const progressBars = document.querySelectorAll(".skills svg circle");

  //   useEffect(() => {
  //     window.addEventListener("scroll", skillsCounter);
  //     return () => {
  //       window.removeEventListener("scroll", skillsCounter);
  //     };
  //   }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll event triggered");

      if (hasReached(firstSkillRef.current)) {
        if (!skillsPlayed) skillsCounter();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hasReached = (el) => {
    if (el) {
      let topPosition = el.getBoundingClientRect().top;
      console.log(topPosition);
      if (window.innerHeight >= topPosition + el.offsetHeight) {
        console.log("You've reached the skills section");
        return true;
      } else {
        return false;
      }
    }
    return false;
  };
  const updateCount = (num, maxNum) => {
    let currentNum = +num.innerText;
    if (currentNum < maxNum) {
      num.innerText = currentNum + 1;
      setTimeout(() => {
        updateCount(num, maxNum);
      }, 12);
    }
  };
  let skillsPlayed = false;
  const skillsCounter = () => {
    if (!hasReached(firstSkillRef.current)) return;
    skillsPlayed = true;
    // const progressBars = document.querySelectorAll(".sk-progress");
    // const progressBarsArray = Array.from(progressBars);
    skCounters.forEach((counter, i) => {
      let target = +counter.dataset.target;
      let strokeValue = 427 - 427 * (target / 100);
      console.log("stroke value", strokeValue);
      console.log("target", typeof target);

      progressBars[i].style.setProperty("--target", strokeValue);
      setTimeout(() => {
        updateCount(counter, target);
      }, 400);
    });

    setAnimate(true);

    // progressBarsRef.current.forEach(
    //   (p) => (p.style.animation = "progress 2s ease-in-out forwards")
    // );
  };
  return (
    <>
      <section className={styles["skills"]}>
        <div className={styles["container"]}>
          <div className={styles["skills-box"]}>
            <div className={styles["box-heading"]}>
              <h3 className={styles["sub-heading"]}>Dashboard</h3>
              <h1 className={styles["heading"]}>
                Monitor User Website performance
              </h1>
              <div className={styles["box-desc"]}>
                <p className={styles["text"]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita explicabo pariatur aliquam totam odit rerum
                  reprehenderit dolorem, rem aliquid eligendi magnam incidunt
                  accusantium. Esse repellendus totam possimus error officiis
                  tempore.
                </p>
              </div>
            </div>

            <div className={styles["skills-wrap"]}>
              <div className={styles["skill"]} ref={firstSkillRef}>
                <div className={styles["sk-progress"]}>
                  <svg>
                    <circle
                      cx="75"
                      cy="75"
                      r="68"
                      ref={progressBarsRef}
                      className={`${animate ? styles["animate-circle"] : null}`}
                    />
                  </svg>
                  <h2 className={styles["counter"]}>
                    <span data-target="89">0</span>
                  </h2>
                </div>
                <div className={styles["sk-title"]}>Logins</div>
              </div>
              <div className={styles["skill"]}>
                <div className={styles["sk-progress"]}>
                  <svg>
                    <circle
                      cx="75"
                      cy="75"
                      r="68"
                      ref={progressBarsRef}
                      className={`${animate ? styles["animate-circle"] : null}`}
                    />
                  </svg>
                  <h2 className={styles["counter"]}>
                    <span data-target="68">0</span>
                  </h2>
                </div>
                <div className={styles["sk-title"]}>Website visits</div>
              </div>
              <div className={styles["skill"]}>
                <div className={styles["sk-progress"]}>
                  <svg>
                    <circle
                      cx="75"
                      cy="75"
                      r="68"
                      ref={progressBarsRef}
                      className={`${animate ? styles["animate-circle"] : null}`}
                    />
                  </svg>
                  <h2 className={styles["counter"]}>
                    <span data-target="55">0</span>
                  </h2>
                </div>
                <div className={styles["sk-title"]}>Events</div>
              </div>
              <div className={styles["skill"]}>
                <div className={styles["sk-progress"]}>
                  <svg>
                    <circle
                      cx="75"
                      cy="75"
                      r="68"
                      ref={progressBarsRef}
                      className={`${animate ? styles["animate-circle"] : null}`}
                    />
                  </svg>
                  <h2 className={styles["counter"]}>
                    <span data-target="85">0</span>
                  </h2>
                </div>
                <div className={styles["sk-title"]}>Competitions</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
