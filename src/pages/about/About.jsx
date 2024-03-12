import { Link } from "react-router-dom";
import styles from "./About.module.css";
// import { IoMdDownload } from "react-icons/io";
import { RxDoubleArrowRight } from "react-icons/rx";
import ReadMoreModal from "../../features/read-more-modal/ReadMoreModal";
import { useState } from "react";

export const About = () => {
  const [isReadMore2Open, setIsReadMore2Open] = useState(false);

  const closeReadMoreModal2Handler = () => {
    setIsReadMore2Open(false);
  };

  // const downloadPdf = () => {
  //   const pdfUrl = "/seg.pdf";
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "AAPG_description.pdf";
  //   link.click();
  // };
  return (
    <>
      <section className={styles["about"]} id="about">
        {/* <img src="triangle.png" className={styles["triangle"]} alt="" /> */}
        <img src="/oil-drop.png" className={styles["triangle"]} />

        <div className={styles["container"]}>
          <div className={styles["about-grid"]}>
            <div className={styles["about-card"]}>
              <svg
                className={styles["icon"]}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="_x31__x2C_5"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    className={styles["st0"]}
                    d="M52.67,406.12C52.67,304.44,0,234.62,0,185.63S28.16,33.74,253.55,33.74S512,172.16,512,226.05   C512.01,478.39,52.67,586.18,52.67,406.12z"
                  ></path>
                </g>
                <g>
                  <g>
                    <path
                      className={styles["st1"]}
                      d="M386.86,97.32l10.39-10.39l20.78,20.78l-10.39,10.39L386.86,97.32z"
                    ></path>
                  </g>
                  <g>
                    <path
                      className={styles["st1"]}
                      d="M446.62,157.09l10.39-10.39l20.78,20.78l-10.39,10.39L446.62,157.09z"
                    ></path>
                  </g>
                  <g>
                    <path
                      className={styles["st1"]}
                      d="M444.02,107.72l20.78-20.78l10.4,10.39l-20.78,20.78L444.02,107.72z"
                    ></path>
                  </g>
                </g>
                <g>
                  <path
                    className={styles["st0"]}
                    d="M289.47,385.93H120.03c-16.17,0-29.4-13.23-29.4-29.4V128.7c0-16.17,13.23-29.4,29.4-29.4h169.04   c16.17,0,29.4,13.23,29.4,29.4l0.4,227.79C318.88,372.73,305.71,385.93,289.47,385.93z"
                  ></path>
                </g>
                <g>
                  <circle
                    className={styles["st0"]}
                    cx="204.55"
                    cy="161.77"
                    r="18.37"
                  ></circle>
                </g>
                <g>
                  <path
                    className={styles["st0"]}
                    d="M252.33,264.67V246.3c0-16.24-13.16-29.4-29.4-29.4h-36.75c-16.24,0-29.4,13.16-29.4,29.4v18.37H252.33z"
                  ></path>
                </g>
                <g>
                  <circle
                    className={styles["st0"]}
                    cx="336.85"
                    cy="345.51"
                    r="84.52"
                  ></circle>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M123.71,356.54V128.7c0-16.17,13.23-29.4,29.4-29.4h-33.07c-16.17,0-29.4,13.23-29.4,29.4v227.84   c0,16.17,13.23,29.4,29.4,29.4h33.07C136.94,385.93,123.71,372.7,123.71,356.54z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M219.25,161.77c0-2.79,0.72-5.37,1.84-7.73c-2.94-6.25-9.19-10.64-16.54-10.64   c-10.14,0-18.37,8.23-18.37,18.37s8.23,18.37,18.37,18.37c7.35,0,13.6-4.4,16.54-10.64C219.97,167.14,219.25,164.56,219.25,161.77z   "
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M219.25,216.89h-33.07c-16.24,0-29.4,13.16-29.4,29.4v18.37h33.07v-18.37   C189.85,230.05,203.01,216.89,219.25,216.89z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M285.4,345.51c0-41.01,29.22-75.19,67.98-82.87c-5.35-1.06-10.88-1.65-16.54-1.65   c-46.68,0-84.52,37.84-84.52,84.52s37.84,84.52,84.52,84.52c5.66,0,11.19-0.57,16.54-1.65C314.62,420.7,285.4,386.52,285.4,345.51z   "
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M138.41,286.71h88.19v22.05h-88.19V286.71z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M138.41,330.81h73.5v22.05h-73.5V330.81z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M204.55,191.17c-16.21,0-29.4-13.19-29.4-29.4s13.19-29.4,29.4-29.4s29.4,13.19,29.4,29.4   S220.77,191.17,204.55,191.17z M204.55,154.42c-4.06,0-7.35,3.29-7.35,7.35s3.29,7.35,7.35,7.35s7.35-3.29,7.35-7.35   S208.61,154.42,204.55,154.42z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M263.35,264.67H241.3V246.3c0-10.13-8.25-18.37-18.37-18.37h-36.75c-10.13,0-18.37,8.25-18.37,18.37v18.37   h-22.05V246.3c0-22.3,18.12-40.42,40.42-40.42h36.75c22.3,0,40.42,18.12,40.42,40.42V264.67z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M211.9,396.96h-91.87c-22.3,0-40.42-18.12-40.42-40.42V128.7c0-22.3,18.12-40.42,40.42-40.42h169.04   c22.3,0,40.42,18.12,40.42,40.42v92.75h-22.05V128.7c0-10.13-8.25-18.37-18.37-18.37H120.03c-10.13,0-18.37,8.25-18.37,18.37   v227.84c0,10.13,8.25,18.37,18.37,18.37h91.87V396.96z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M336.85,441.06c-52.68,0-95.54-42.86-95.54-95.54s42.86-95.54,95.54-95.54s95.54,42.86,95.54,95.54   S389.53,441.06,336.85,441.06z M336.85,272.02c-40.53,0-73.5,32.97-73.5,73.5s32.97,73.5,73.5,73.5s73.5-32.97,73.5-73.5   S377.37,272.02,336.85,272.02z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M322.15,382.26c-2.93,0-5.73-1.16-7.79-3.23l-29.4-29.4l15.6-15.6l21.06,21.06l43.69-49.92l16.6,14.51   l-51.45,58.8c-2.01,2.29-4.88,3.66-7.94,3.76C322.4,382.26,322.26,382.26,322.15,382.26z"
                  ></path>
                </g>
              </svg>
              <h3>Research</h3>
            </div>

            <div className={styles["about-card"]}>
              <svg
                className={styles["icon"]}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="_x31__x2C_5"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    className={styles["st0"]}
                    d="M393.13,52.67C291.46,52.67,221.63,0,172.64,0S20.76,28.16,20.76,253.55S159.18,512,213.06,512  C465.4,512.01,573.19,52.67,393.13,52.67z"
                  ></path>
                </g>
                <g>
                  <g>
                    <path
                      className={styles["st1"]}
                      d="M378.33,116.35l20.78-20.78l10.39,10.39l-20.78,20.78L378.33,116.35z"
                    ></path>
                  </g>
                  <g>
                    <path
                      className={styles["st1"]}
                      d="M383.47,163.05l10.39-10.39l20.78,20.78l-10.39,10.39L383.47,163.05z"
                    ></path>
                  </g>
                  <g>
                    <path
                      className={styles["st1"]}
                      d="M323.72,103.3l10.39-10.39l20.78,20.78l-10.39,10.39L323.72,103.3z"
                    ></path>
                  </g>
                </g>
                <g>
                  <circle
                    className={styles["st0"]}
                    cx="148.79"
                    cy="123.71"
                    r="33.07"
                  ></circle>
                </g>
                <g>
                  <path
                    className={styles["st0"]}
                    d="M211.26,237.63c0-24.36-19.74-44.1-44.1-44.1h-36.75c-24.36,0-44.1,19.74-44.1,44.1v60.74 c0,5.57,3.15,10.66,8.13,13.14l13.14,6.57c4.98,2.48,8.13,7.58,8.13,13.14v75.44c0,8.11,6.59,14.7,14.7,14.7h36.75   c8.11,0,14.7-6.59,14.7-14.7v-75.44c0-5.57,3.15-10.66,8.13-13.14l13.14-6.57c4.98-2.48,8.13-7.58,8.13-13.14V237.63z"
                  ></path>
                </g>
                <g>
                  <circle
                    className={styles["st0"]}
                    cx="325.17"
                    cy="329.5"
                    r="62.47"
                  ></circle>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M148.79,123.71c0-12.21,6.69-22.75,16.54-28.49c-4.88-2.84-10.48-4.59-16.54-4.59   c-18.27,0-33.07,14.8-33.07,33.07s14.8,33.07,33.07,33.07c6.06,0,11.66-1.75,16.54-4.59C155.47,146.46,148.79,135.92,148.79,123.71   z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M148.79,406.67v-75.44c0-5.57-3.15-10.66-8.13-13.14l-13.14-6.57c-4.98-2.5-8.13-7.58-8.13-13.16v-60.74   c0-24.36,19.74-44.1,44.1-44.1h-33.07c-24.36,0-44.1,19.74-44.1,44.1v60.74c0,5.57,3.15,10.66,8.13,13.14l13.14,6.57   c4.98,2.48,8.13,7.58,8.13,13.14v75.44c0,8.11,6.59,14.7,14.7,14.7h33.07C155.37,421.37,148.79,414.78,148.79,406.67L148.79,406.67   z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M295.78,329.5c0-28.74,19.52-52.7,45.93-59.97c-5.31-1.46-10.77-2.5-16.54-2.5   c-34.5,0-62.47,27.97-62.47,62.47s27.97,62.47,62.47,62.47c5.76,0,11.23-1.03,16.54-2.5C315.3,382.19,295.78,358.23,295.78,329.5z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M148.79,167.81c-24.31,0-44.1-19.79-44.1-44.1s19.79-44.1,44.1-44.1s44.1,19.79,44.1,44.1   S173.1,167.81,148.79,167.81z M148.79,101.66c-12.16,0-22.05,9.89-22.05,22.05s9.89,22.05,22.05,22.05s22.05-9.89,22.05-22.05   S160.94,101.66,148.79,101.66z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M167.16,432.39h-36.75c-14.18,0-25.72-11.54-25.72-25.72v-75.44c0-1.4-0.78-2.66-2.03-3.29l-13.16-6.57   c-8.76-4.38-14.21-13.2-14.21-23v-60.74c0-30.4,24.74-55.12,55.12-55.12h36.75c30.38,0,55.12,24.72,55.12,55.12v60.74   c0,9.8-5.45,18.62-14.23,23l-13.16,6.57c-1.23,0.63-2.01,1.9-2.01,3.29v75.44C192.88,420.85,181.34,432.39,167.16,432.39   L167.16,432.39z M130.41,204.55c-18.23,0-33.07,14.83-33.07,33.07v60.74c0,1.4,0.78,2.66,2.03,3.29l13.16,6.57   c8.76,4.38,14.21,13.2,14.21,23v75.44c0,2.03,1.65,3.67,3.67,3.67h36.75c2.03,0,3.67-1.65,3.67-3.67v-75.44   c0-9.8,5.45-18.62,14.23-23l13.16-6.57c1.25-0.62,2.03-1.88,2.03-3.29v-60.74c0-18.24-14.85-33.07-33.07-33.07H130.41z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M325.17,402.99c-40.53,0-73.5-32.97-73.5-73.5s32.97-73.5,73.5-73.5s73.5,32.97,73.5,73.5   S365.7,402.99,325.17,402.99z M325.17,278.05c-28.37,0-51.45,23.08-51.45,51.45s23.08,51.45,51.45,51.45s51.45-23.08,51.45-51.45   S353.54,278.05,325.17,278.05z"
                  ></path>
                </g>
                <g className={styles["st2"]}>
                  <path d="M356.28,376.31l15.59-15.59l60.68,60.68l-15.59,15.59L356.28,376.31z"></path>
                </g>
              </svg>
              <h3>Opportunities</h3>
            </div>
            <div className={styles["about-card"]}>
              <svg
                className={styles["icon"]}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="_x31__x2C_5"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    className={styles["st0"]}
                    d="M116.72,52.67C218.39,52.67,288.21,0,337.2,0s151.89,28.16,151.89,253.55S350.67,512,296.78,512   C44.44,512.01-63.35,52.67,116.72,52.67L116.72,52.67z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M96.06,54.93l20.78-20.78l10.39,10.39l-20.78,20.78L96.06,54.93z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M36.29,114.68L57.08,93.9l10.39,10.39l-20.78,20.78L36.29,114.68z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M38.9,44.53l10.39-10.39l20.78,20.78L59.68,65.31L38.9,44.53z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st0"]}
                    d="M379.43,120.03h-51.45c-8.11,0-14.7,6.59-14.7,14.7v51.45c0,8.11,6.59,14.7,14.7,14.7h51.45   c8.11,0,14.7-6.59,14.7-14.7v-51.45C394.13,126.62,387.55,120.03,379.43,120.03z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st0"]}
                    d="M394.13,377.27v-51.45c0-8.11-6.59-14.7-14.7-14.7h-51.45c-8.11,0-14.7,6.59-14.7,14.7v51.45   c0,8.11,6.59,14.7,14.7,14.7h51.45C387.55,391.97,394.13,385.38,394.13,377.27z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st0"]}
                    d="M136.9,391.97h51.45c8.11,0,14.7-6.59,14.7-14.7v-51.45c0-8.11-6.59-14.7-14.7-14.7H136.9   c-8.11,0-14.7,6.59-14.7,14.7v51.45C122.2,385.38,128.78,391.97,136.9,391.97z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st0"]}
                    d="M122.2,134.73v51.45c0,8.11,6.59,14.7,14.7,14.7h51.45c8.11,0,14.7-6.59,14.7-14.7v-51.45   c0-8.11-6.59-14.7-14.7-14.7H136.9C128.78,120.03,122.2,126.62,122.2,134.73z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M346.36,377.27v-51.45c0-8.11,6.59-14.7,14.7-14.7h-33.07c-8.11,0-14.7,6.59-14.7,14.7v51.45   c0,8.11,6.59,14.7,14.7,14.7h33.07C352.95,391.97,346.36,385.38,346.36,377.27z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M155.27,186.18v-51.45c0-8.11,6.59-14.7,14.7-14.7H136.9c-8.11,0-14.7,6.59-14.7,14.7v51.45   c0,8.11,6.59,14.7,14.7,14.7h33.07C161.86,200.88,155.27,194.29,155.27,186.18z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M346.36,186.18v-51.45c0-8.11,6.59-14.7,14.7-14.7h-33.07c-8.11,0-14.7,6.59-14.7,14.7v51.45   c0,8.11,6.59,14.7,14.7,14.7h33.07C352.95,200.88,346.36,194.29,346.36,186.18z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st1"]}
                    d="M155.27,377.27v-51.45c0-8.11,6.59-14.7,14.7-14.7H136.9c-8.11,0-14.7,6.59-14.7,14.7v51.45   c0,8.11,6.59,14.7,14.7,14.7h33.07C161.86,391.97,155.27,385.38,155.27,377.27z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M247.14,79.61h22.05v352.78h-22.05V79.61z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M81.78,244.98h352.78v22.05H81.78V244.98z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M379.43,211.9h-51.45c-14.18,0-25.72-11.54-25.72-25.72v-51.45c0-14.18,11.54-25.72,25.72-25.72h51.45   c14.18,0,25.72,11.54,25.72,25.72v51.45C405.16,200.36,393.62,211.9,379.43,211.9z M327.99,131.06c-2.03,0-3.67,1.65-3.67,3.67   v51.45c0,2.03,1.65,3.67,3.67,3.67h51.45c2.03,0,3.67-1.65,3.67-3.67v-51.45c0-2.03-1.65-3.67-3.67-3.67H327.99z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M379.43,402.99h-51.45c-14.18,0-25.72-11.54-25.72-25.72v-51.45c0-14.18,11.54-25.72,25.72-25.72h51.45   c14.18,0,25.72,11.54,25.72,25.72v51.45C405.16,391.45,393.62,402.99,379.43,402.99z M327.99,322.15c-2.03,0-3.67,1.65-3.67,3.67   v51.45c0,2.03,1.65,3.67,3.67,3.67h51.45c2.03,0,3.67-1.65,3.67-3.67v-51.45c0-2.03-1.65-3.67-3.67-3.67H327.99z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M188.35,402.99H136.9c-14.18,0-25.72-11.54-25.72-25.72v-51.45c0-14.18,11.54-25.72,25.72-25.72h51.45   c14.18,0,25.72,11.54,25.72,25.72v51.45C214.07,391.45,202.53,402.99,188.35,402.99z M136.9,322.15c-2.03,0-3.67,1.65-3.67,3.67   v51.45c0,2.03,1.65,3.67,3.67,3.67h51.45c2.03,0,3.67-1.65,3.67-3.67v-51.45c0-2.03-1.65-3.67-3.67-3.67H136.9z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M188.35,211.9H136.9c-14.18,0-25.72-11.54-25.72-25.72v-51.45c0-14.18,11.54-25.72,25.72-25.72h51.45   c14.18,0,25.72,11.54,25.72,25.72v51.45C214.07,200.36,202.53,211.9,188.35,211.9z M136.9,131.06c-2.03,0-3.67,1.65-3.67,3.67   v51.45c0,2.03,1.65,3.67,3.67,3.67h51.45c2.03,0,3.67-1.65,3.67-3.67v-51.45c0-2.03-1.65-3.67-3.67-3.67H136.9z"
                  ></path>
                </g>
              </svg>
              <h3>Networking</h3>
            </div>
            <div className={styles["about-card"]}>
              <svg
                className={styles["icon"]}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="_x31__x2C_5"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <path
                  className={styles["st0"]}
                  d="M404.26,52.67C302.59,52.67,232.77,0,183.78,0S31.89,28.16,31.89,253.55S170.31,512,224.2,512  C476.54,512.01,584.33,52.67,404.26,52.67z"
                ></path>
                <path
                  className={styles["st1"]}
                  d="M240.77,50.21c-12.16,0-22.05-9.89-22.05-22.05s9.89-22.05,22.05-22.05s22.05,9.89,22.05,22.05  S252.92,50.21,240.77,50.21z M240.77,20.81c-4.06,0-7.35,3.29-7.35,7.35s3.29,7.35,7.35,7.35s7.35-3.29,7.35-7.35  S244.82,20.81,240.77,20.81z"
                ></path>
                <g>
                  <path
                    className={styles["st2"]}
                    d="M97.45,90.63h36.75v36.75H97.45V90.63z"
                  ></path>
                  <path
                    className={styles["st2"]}
                    d="M402.46,289.07c-10.14,0-18.37-8.23-18.37-18.37s8.23-18.37,18.37-18.37c10.14,0,18.37,8.23,18.37,18.37   S412.6,289.07,402.46,289.07z"
                  ></path>
                  <path
                    className={styles["st0"]}
                    d="M325.29,421.37l-12.99-97.48c-0.97-7.31-7.2-12.76-14.57-12.76h-69.81c-7.36,0-13.6,5.45-14.57,12.76   l-13.01,97.48H325.29z"
                  ></path>
                  <path
                    className={styles["st2"]}
                    d="M123.17,289.07c-10.14,0-18.37-8.23-18.37-18.37s8.23-18.37,18.37-18.37c10.14,0,18.37,8.23,18.37,18.37   S133.31,289.07,123.17,289.07z"
                  ></path>
                  <path
                    className={styles["st2"]}
                    d="M391.43,90.63h36.75v36.75h-36.75V90.63z"
                  ></path>
                </g>
                <path
                  className={styles["st0"]}
                  d="M288.64,311.12l36.64-53.65l-62.47-144.79l-62.47,144.79l36.64,53.65H288.64z"
                ></path>
                <path
                  className={styles["st0"]}
                  d="M97.45,90.63h33.07v36.75H97.45V90.63z"
                ></path>
                <path
                  className={styles["st0"]}
                  d="M417.15,270.7c0-2.79,0.72-5.37,1.84-7.73c-2.94-6.25-9.19-10.64-16.54-10.64c-10.14,0-18.37,8.23-18.37,18.37  s8.23,18.37,18.37,18.37c7.35,0,13.6-4.4,16.54-10.64C417.88,276.06,417.15,273.49,417.15,270.7z"
                ></path>
                <path
                  className={styles["st1"]}
                  d="M260.98,311.12H227.9c-7.36,0-13.6,5.45-14.57,12.76l-12.99,97.48h33.07l12.99-97.48  C247.39,316.58,253.61,311.12,260.98,311.12z"
                ></path>
                <path
                  className={styles["st0"]}
                  d="M137.87,270.7c0-2.79,0.72-5.37,1.84-7.73c-2.94-6.25-9.19-10.64-16.54-10.64c-10.14,0-18.37,8.23-18.37,18.37  s8.23,18.37,18.37,18.37c7.35,0,13.6-4.4,16.54-10.64C138.59,276.06,137.87,273.49,137.87,270.7z"
                ></path>
                <path
                  className={styles["st0"]}
                  d="M391.43,90.63h33.07v36.75h-33.07V90.63z"
                ></path>
                <path
                  className={styles["st1"]}
                  d="M279.35,151l-16.54-38.32l-62.47,144.79l36.64,53.65h33.07l-36.64-53.65L279.35,151z"
                ></path>
                <path
                  className={styles["st2"]}
                  d="M413.48,248.65h-22.05c0-70.92-57.69-128.62-128.62-128.62S134.2,177.73,134.2,248.65h-22.05  c0-83.08,67.59-150.67,150.67-150.67S413.48,165.57,413.48,248.65z"
                ></path>
                <path
                  className={styles["st2"]}
                  d="M134.2,138.41H97.45c-6.09,0-11.02-4.94-11.02-11.02V90.63c0-6.09,4.94-11.02,11.02-11.02h36.75  c6.09,0,11.02,4.94,11.02,11.02v36.75C145.22,133.47,140.28,138.41,134.2,138.41z M108.47,116.36h14.7v-14.7h-14.7V116.36z"
                ></path>
                <path
                  className={styles["st2"]}
                  d="M402.46,300.1c-16.21,0-29.4-13.19-29.4-29.4s13.19-29.4,29.4-29.4c16.21,0,29.4,13.19,29.4,29.4  S418.67,300.1,402.46,300.1z M402.46,263.35c-4.06,0-7.35,3.29-7.35,7.35s3.29,7.35,7.35,7.35s7.35-3.29,7.35-7.35  S406.51,263.35,402.46,263.35z"
                ></path>
                <path
                  className={styles["st2"]}
                  d="M137.87,97.98h249.89v22.05H137.87V97.98z"
                ></path>
                <path
                  className={styles["st2"]}
                  d="M297.74,317.34l-18.2-12.44l33.22-48.64l-49.95-115.76l-49.95,115.76l33.22,48.64l-18.2,12.44l-36.64-53.65  c-2.13-3.12-2.51-7.11-1.01-10.58l62.47-144.79c3.48-8.07,16.76-8.07,20.24,0l62.47,144.79c1.5,3.47,1.12,7.47-1.01,10.58  L297.74,317.34z"
                ></path>
                <path
                  className={styles["st2"]}
                  d="M315.8,433.76l-14.45-108.42c-0.24-1.82-1.81-3.19-3.65-3.19H227.9c-1.84,0-3.4,1.37-3.65,3.19l-14.45,108.41  l-21.86-2.91l14.45-108.42c1.72-12.71,12.67-22.31,25.5-22.31h69.81c12.83,0,23.8,9.6,25.49,22.31l14.46,108.42L315.8,433.76z"
                ></path>
                <path
                  className={styles["st2"]}
                  d="M251.79,120.03h22.05V241.3h-22.05V120.03z"
                ></path>
                <path
                  className={styles["st2"]}
                  d="M123.17,300.1c-16.21,0-29.4-13.19-29.4-29.4s13.19-29.4,29.4-29.4s29.4,13.19,29.4,29.4  S139.39,300.1,123.17,300.1z M123.17,263.35c-4.06,0-7.35,3.29-7.35,7.35s3.29,7.35,7.35,7.35c4.06,0,7.35-3.29,7.35-7.35  S127.23,263.35,123.17,263.35z"
                ></path>
                <path
                  className={styles["st2"]}
                  d="M428.18,138.41h-36.75c-6.09,0-11.02-4.94-11.02-11.02V90.63c0-6.09,4.94-11.02,11.02-11.02h36.75  c6.09,0,11.02,4.94,11.02,11.02v36.75C439.2,133.47,434.26,138.41,428.18,138.41z M402.46,116.36h14.7v-14.7h-14.7V116.36z"
                ></path>
                <path
                  className={styles["st2"]}
                  d="M27.63,414.02H498v22.05H27.63V414.02z"
                ></path>
              </svg>
              <h3>Innovation</h3>
            </div>
          </div>
          <div className={styles["about-info"]}>
            <h3 className={styles["sub-heading"]}>About us</h3>
            <h1 className={styles["heading"]}>
              AAPG Muk Chapter, <br /> Since 2014
            </h1>
            <p className={styles["text"]}>
              We are greatly concerned with advancing the science of geology,
              particularly in relation to petroleum, natural gas, and mineral
              resources. Our mission includes promoting a strong relation
              between students and professionals in the Geosciences sector as
              well as providing a platform for sharing and accessing the latest
              and emerging technical and academic knowledge
              {/* Hey there, fellow geoscience enthusiasts! Have you ever wondered
              how to make the most out of your time at university while
              preparing for a future in the exciting world of energy and
              extractives? Look no further than the Association of American
              Petroleum Geologists- Makerere Students&apos; Chapter! With over
              150 passionate members and counting, our chapter at Makerere
              University is the ultimate platform for personal and professional
              growth. Let&apos;s dive into the amazing journey that awaits you
              as a member of our vibrant and dynamic community. */}
            </p>
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
                <h3 className={styles["card-name"]}>About Us</h3>
                <p>
                  We are greatly concerned with advancing the science of
                  geology, particularly in relation to petroleum, natural gas,
                  and mineral resources. Our mission includes promoting a strong
                  relation between students and professionals in the Geosciences
                  sector as well as providing a platform for sharing and
                  accessing the latest and emerging technical and academic
                  knowledge
                </p>
                <br />
                <p>
                  <b>Our Vision:</b> To foster scientific research, to advance
                  the science of geology, to promote technology, and to inspire
                  high professional conduct
                </p>
                <br />
                <p>
                  <b>Our Mission:</b> To promote a strong relation between
                  students and professionals in the Geosciences sector by
                  providing a platform for sharing and accessing the latest and
                  technical and academic knowledge.
                </p>
              </div>
            </ReadMoreModal>

            {/* <div className={styles["cta"]}>
              <Link to="mailto:aapgmuk@gmail.com" className={styles["btn"]}>
                Contact us
              </Link>
              <Link
                to=""
                className={styles["secondary-btn"]}
                onClick={downloadPdf}
              >
                <IoMdDownload />
                &nbsp;Download details
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
