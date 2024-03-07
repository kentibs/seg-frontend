import styles from "./QrCode.module.css";
import QRCode from "react-qr-code";

export const QrCode = () => {
  const value = "https://aapg-muk-chapter.netlify.app";
  return (
    <div className={styles["qr-code-container"]}>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        <QRCode
          //   size={256}
          //   style={{ width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
};
