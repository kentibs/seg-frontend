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
    <div className={styles["freq-asked-questions-container"]}>
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
            <p className={styles["qtn"]}>What is AAPG Muk Chapter all about?</p>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              iusto, ex dolores laboriosam ut omnis laudantium suscipit at odit
              eum saepe ab sint animi quo,
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
              What is AAPG in full and when was this Organization started?
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              iusto, ex dolores laboriosam ut omnis laudantium suscipit at odit
              eum saepe ab sint animi quo,
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
            <p className={styles["qtn"]}>Who is the founder of AAPG?</p>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              iusto, ex dolores laboriosam ut omnis laudantium suscipit at odit
              eum saepe ab sint animi quo,
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
              How can I join the next AAPG Muk Chapter Committee?
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              iusto, ex dolores laboriosam ut omnis laudantium suscipit at odit
              eum saepe ab sint animi quo,
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
              How many countries does AAPG Organization cover worldwide?
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              iusto, ex dolores laboriosam ut omnis laudantium suscipit at odit
              eum saepe ab sint animi quo,
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
            <p className={styles["qtn"]}>Why should I join AAPG Muk Chapter?</p>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              iusto, ex dolores laboriosam ut omnis laudantium suscipit at odit
              eum saepe ab sint animi quo,
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
