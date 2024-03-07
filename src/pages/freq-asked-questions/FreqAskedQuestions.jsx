import { useDispatch, useSelector } from "react-redux";
import { setActiveFreq } from "../../store/actions/freq";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./FreqAskedQuestions.module.css";

export const FreqAskedQuestions = () => {
  const activeFreq = useSelector((state) => state.activeFreq.activeFreq);
  const dispatch = useDispatch();

  const darkOn = useSelector((state) => state.homeDarkMode.homeDarkMode);

  console.log("Page Active Freq:", activeFreq);

  const handleFreqClick = (active) => {
    console.log("Active Freq1:", activeFreq);
    activeFreq === ""
      ? dispatch(setActiveFreq(active))
      : dispatch(setActiveFreq(""));
    console.log("clicked");
    console.log("Active Freq2:", activeFreq);
  };

  return (
    <div className={styles["freq-asked-questions-container"]} id="freq">
      <h3 className={styles["sub-heading"]}>FAQs</h3>
      <h1 className={styles["heading"]}>Frequently Asked Questions</h1>

      <div
        className={`${styles["question-container"]} ${
          activeFreq === "qtn-1" && styles["active"]
        } ${darkOn && styles["active-dark"]}`}
        onClick={() => handleFreqClick("qtn-1")}
      >
        <div
          className={`${
            darkOn
              ? styles["question-header-container-dark"]
              : styles["question-header-container"]
          } 
          
        `}
          onClick={() => handleFreqClick("qtn-1")}
        >
          <span className={styles["question-number-container"]}>
            <span className={styles["qtn-number"]}>01</span>
            <p className={styles["qtn"]}>
              What is AAPG Makerere Students&apos; Chapter?
            </p>
          </span>

          {activeFreq === "qtn-1" ? (
            <IoIosArrowUp />
          ) : (
            <span
              className={`${
                darkOn ? styles["up-arrow-dark"] : styles["up-arrow-light"]
              }`}
            >
              <IoIosArrowDown />
            </span>
          )}
        </div>
        {activeFreq === "qtn-1" && (
          <div className={styles["question-answer"]}>
            <p className={styles["answer"]}>
              Association of American Petroleum Geologists- Makerere
              Students&apos; Chapter is an association with more than 150
              registered members in Makerere University and has registered many
              more members during the last academic year. Our chapter has been a
              platform for both personal and professional development of student
              members through organizing several activities throughout the year.
              Collaboration has been a priority in achieving our goals and so,
              we have worked closely with different sister societies within the
              Department of Geology and Petroleum Studies such as the Society of
              Petroleum Engineers Makerere Students&apos; Chapter (SPE
              Makerere), Society of Exploration Geophysicists Makerere
              Students&apos; Chapter (SEG Makerere) and the Makerere Petroleum
              and Geology Society (MPGS).
            </p>
          </div>
        )}
      </div>
      {/* -------------------------------------qtn 2------------------------------ */}
      <div
        className={`${styles["question-container"]} ${
          activeFreq === "qtn-2" && styles["active"]
        } ${darkOn && styles["active-dark"]}`}
        onClick={() => handleFreqClick("qtn-2")}
      >
        <div
          className={`${
            darkOn
              ? styles["question-header-container-dark"]
              : styles["question-header-container"]
          }
        `}
          onClick={() => handleFreqClick("qtn-2")}
        >
          <span className={styles["question-number-container"]}>
            <span className={styles["qtn-number"]}>02</span>
            <p className={styles["qtn"]}>
              Why should I join AAPG Makerere Students&apos; Chapter?
            </p>
          </span>
          {activeFreq === "qtn-2" ? (
            <IoIosArrowUp />
          ) : (
            <span
              className={`${
                darkOn ? styles["up-arrow-dark"] : styles["up-arrow-light"]
              }`}
            >
              <IoIosArrowDown />
            </span>
          )}
        </div>
        {activeFreq === "qtn-2" && (
          <div className={styles["question-answer"]}>
            <p className={styles["answer"]}>
              The Association of American Petroleum Geologists- Makerere
              Students&apos; Chapter is a dynamic community that thrives on
              collaboration, personal development, and exploration of the energy
              and extractives industry. The chapter activities are aimed at
              boosting the student members&apos; soft skills and technical
              knowledge, promoting research, and bridging the gap between
              students and professionals to enable students tap into the
              opportunities presented by the energy and extractives industry. In
              the last academic year, the chapter has prioritized expanding
              membership through organizing engagements at a chapter level. By
              joining us, you gain access to a network of passionate
              individuals, industry insights, exciting challenges, and
              incredible opportunities to grow both personally and
              professionally.
            </p>
          </div>
        )}
      </div>
      {/* -------------------------------------------------qtn 3------------------------------------- */}
      <div
        className={`${styles["question-container"]} ${
          activeFreq === "qtn-3" && styles["active"]
        } ${darkOn && styles["active-dark"]}`}
        onClick={() => handleFreqClick("qtn-3")}
      >
        <div
          className={`${
            darkOn
              ? styles["question-header-container-dark"]
              : styles["question-header-container"]
          }
        `}
          onClick={() => handleFreqClick("qtn-3")}
        >
          <span className={styles["question-number-container"]}>
            <span className={styles["qtn-number"]}>03</span>
            <p className={styles["qtn"]}>
              How do I join AAPG Makerere Students&apos; Chapter?
            </p>
          </span>
          {activeFreq === "qtn-3" ? (
            <IoIosArrowUp />
          ) : (
            <span
              className={`${
                darkOn ? styles["up-arrow-dark"] : styles["up-arrow-light"]
              }`}
            >
              <IoIosArrowDown />
            </span>
          )}
        </div>
        {activeFreq === "qtn-3" && (
          <div className={styles["question-answer"]}>
            <p className={styles["answer"]}>
              If you are a student with a geology or geoscience major, your
              annual subscription dues to AAPG will be covered by Chevron. All
              you need to do is visit{" "}
              <a href="https://www.aapg.org">https://www.aapg.org</a> and
              register as a student member. For more information, you can
              contact any member of the executive
            </p>
          </div>
        )}
      </div>
      {/* ------------------------------------------------------------qtn 4 ---------------------------------- */}
      <div
        className={`${styles["question-container"]} ${
          activeFreq === "qtn-4" && styles["active"]
        } ${darkOn && styles["active-dark"]}`}
        onClick={() => handleFreqClick("qtn-4")}
      >
        <div
          className={`${
            darkOn
              ? styles["question-header-container-dark"]
              : styles["question-header-container"]
          }
        `}
          onClick={() => handleFreqClick("qtn-4")}
        >
          <span className={styles["question-number-container"]}>
            <span className={styles["qtn-number"]}>04</span>
            <p className={styles["qtn"]}>
              How do I become a member of the AAPG Makerere Students&apos;
              Chapter Executive?
            </p>
          </span>
          {activeFreq === "qtn-4" ? (
            <IoIosArrowUp />
          ) : (
            <span
              className={`${
                darkOn ? styles["up-arrow-dark"] : styles["up-arrow-light"]
              }`}
            >
              <IoIosArrowDown />
            </span>
          )}
        </div>
        {activeFreq === "qtn-4" && (
          <div className={styles["question-answer"]}>
            <p className={styles["answer"]}>
              The Executive Committee is elected into office during the general
              Makerere University Elections cycle. Interested persons must
              follow the standard electoral proceedings as announced by the
              Electoral Committee.
            </p>
          </div>
        )}
      </div>
      {/* ----------------------------------------------------------------qtn 5--------------------------------------- */}
      <div
        className={`${styles["question-container"]} ${
          activeFreq === "qtn-5" && styles["active"]
        } ${darkOn && styles["active-dark"]}`}
        onClick={() => handleFreqClick("qtn-5")}
      >
        <div
          className={`${
            darkOn
              ? styles["question-header-container-dark"]
              : styles["question-header-container"]
          }
        `}
          onClick={() => handleFreqClick("qtn-5")}
        >
          <span className={styles["question-number-container"]}>
            <span className={styles["qtn-number"]}>05</span>
            <p className={styles["qtn"]}>
              Can I attend AAPG Makerere Students&apos; Chapter even if I am not
              a member?
            </p>
          </span>
          {activeFreq === "qtn-5" ? (
            <IoIosArrowUp />
          ) : (
            <span
              className={`${
                darkOn ? styles["up-arrow-dark"] : styles["up-arrow-light"]
              }`}
            >
              <IoIosArrowDown />
            </span>
          )}
        </div>
        {activeFreq === "qtn-5" && (
          <div className={styles["question-answer"]}>
            <p className={styles["answer"]}>
              Yes. You are free to take part in some of the Chapter&apos;s
              activities. However, there are some activities that are
              exclusively reserved for registered members. You are encouraged to
              join the chapter in order to reap all the accompanying benefits.
            </p>
          </div>
        )}
      </div>
      {/* ------------------------------------------------------------qtn 6 ----------------------------------------- */}
      <div
        className={`${styles["question-container"]} ${
          activeFreq === "qtn-6" && styles["active"]
        } ${darkOn && styles["active-dark"]}`}
        onClick={() => handleFreqClick("qtn-6")}
      >
        <div
          className={`${
            darkOn
              ? styles["question-header-container-dark"]
              : styles["question-header-container"]
          }
        `}
          onClick={() => handleFreqClick("qtn-6")}
        >
          <span className={styles["question-number-container"]}>
            <span className={styles["qtn-number"]}>06</span>
            <p className={styles["qtn"]}>
              Does being part of the AAPG Makerere Students&apos; Chapter
              guarantee me a job in the industry?
            </p>
          </span>
          {activeFreq === "qtn-6" ? (
            <IoIosArrowUp />
          ) : (
            <span
              className={`${
                darkOn ? styles["up-arrow-dark"] : styles["up-arrow-light"]
              }`}
            >
              <IoIosArrowDown />
            </span>
          )}
        </div>
        {activeFreq === "qtn-6" && (
          <div className={styles["question-answer"]}>
            <p className={styles["answer"]}>
              No. Membership does not guarantee any jobs or internships in the
              industry. However, you will be able to access platforms for
              networking with various professionals from reputable companies in
              the industry. You will also have an opportunity to attend
              different capacity building events that will give you an edge as
              you prepare to transition into professionalism
            </p>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------qtn 7 ----------------------------------------- */}
      <div
        className={`${styles["question-container"]} ${
          activeFreq === "qtn-7" && styles["active"]
        } ${darkOn && styles["active-dark"]}`}
        onClick={() => handleFreqClick("qtn-7")}
      >
        <div
          className={`${
            darkOn
              ? styles["question-header-container-dark"]
              : styles["question-header-container"]
          }
        `}
          onClick={() => handleFreqClick("qtn-7")}
        >
          <span className={styles["question-number-container"]}>
            <span className={styles["qtn-number"]}>07</span>
            <p className={styles["qtn"]}>
              Does being part of the AAPG Makerere Students&apos; Chapter
              guarantee me a visa for the United States?
            </p>
          </span>
          {activeFreq === "qtn-7" ? (
            <IoIosArrowUp />
          ) : (
            <span
              className={`${
                darkOn ? styles["up-arrow-dark"] : styles["up-arrow-light"]
              }`}
            >
              <IoIosArrowDown />
            </span>
          )}
        </div>
        {activeFreq === "qtn-7" && (
          <div className={styles["question-answer"]}>
            <p className={styles["answer"]}>
              No. The AAPG Makerere Students&apos; Chapter does NOT in any way
              have any influence or association whatsoever on the visa
              application and approval process. The Chapter is strictly an
              academic association whose activities are exclusively geared
              towards academic excellence in the world of geosciences.
            </p>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------qtn 8 ----------------------------------------- */}
      <div
        className={`${styles["question-container"]} ${
          activeFreq === "qtn-8" && styles["active"]
        } ${darkOn && styles["active-dark"]}`}
        onClick={() => handleFreqClick("qtn-8")}
      >
        <div
          className={`${
            darkOn
              ? styles["question-header-container-dark"]
              : styles["question-header-container"]
          }
        `}
          onClick={() => handleFreqClick("qtn-8")}
        >
          <span className={styles["question-number-container"]}>
            <span className={styles["qtn-number"]}>08</span>
            <p className={styles["qtn"]}>
              Who funds AAPG Makerere Students&apos; Chapter&apos;s activities?
            </p>
          </span>
          {activeFreq === "qtn-8" ? (
            <IoIosArrowUp />
          ) : (
            <span
              className={`${
                darkOn ? styles["up-arrow-dark"] : styles["up-arrow-light"]
              }`}
            >
              <IoIosArrowDown />
            </span>
          )}
        </div>
        {activeFreq === "qtn-8" && (
          <div className={styles["question-answer"]}>
            <p className={styles["answer"]}>
              The Chapter is a student run non-profit organization that partners
              with several companies and government bodies to organize events.
              In addition, most of our funding comes from grants, donations and
              fundraising activities.
            </p>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------qtn 9 ----------------------------------------- */}
      <div
        className={`${styles["question-container"]} ${
          activeFreq === "qtn-9" && styles["active"]
        } ${darkOn && styles["active-dark"]}`}
        onClick={() => handleFreqClick("qtn-9")}
      >
        <div
          className={`${
            darkOn
              ? styles["question-header-container-dark"]
              : styles["question-header-container"]
          }
        `}
          onClick={() => handleFreqClick("qtn-9")}
        >
          <span className={styles["question-number-container"]}>
            <span className={styles["qtn-number"]}>09</span>
            <p className={styles["qtn"]}>
              How many AAPG University Chapters are in Uganda?
            </p>
          </span>
          {activeFreq === "qtn-9" ? (
            <IoIosArrowUp />
          ) : (
            <span
              className={`${
                darkOn ? styles["up-arrow-dark"] : styles["up-arrow-light"]
              }`}
            >
              <IoIosArrowDown />
            </span>
          )}
        </div>
        {activeFreq === "qtn-9" && (
          <div className={styles["question-answer"]}>
            <p className={styles["answer"]}>
              The AAPG Makerere Students&apos; Chapter is the only students
              chapter in the country currently. We however, have close ties with
              many other chapters across the Continent and constantly organize
              events with them.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
