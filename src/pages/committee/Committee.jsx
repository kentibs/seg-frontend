import { Link } from "react-router-dom";
import styles from "./Committee.module.css";

export const Committee = () => {
  const committeeMembers = [
    {
      imgUrl: "Gift.jpg",
      name: "Kopio Gift",
      title: "President",
      description:
        "SHe has been greatly resourceful in the rise and development of this organization, leaving behind a great foundation for other upcoming leaders. ",
    },
    {
      imgUrl: "emma.jpg",
      name: "Emmanuella Kaducu Lagen",
      title: "Vice President",
      description:
        "SHe has also done alot for the association and has been greatly resourceful in the rise and development of this organization. ",
    },
    {
      imgUrl: "Robert.jpg",
      name: "Luwuge Robert",
      title: "Secretary",
      description:
        "He is responsible for all the formal and legal documentation within the organization  as well as spending and saving strategies. ",
    },
    {
      imgUrl: "triza.jpg",
      name: "Namitala Theresa Natonda",
      title: "Treasurer",
      description:
        "SHe is responsible for all the organization transactions as well as spending and saving strategies. ",
    },
    {
      imgUrl: "wycliffe.jpg",
      name: "Atuhairwe Wycliffe",
      title: "Year 4 representative",
      description:
        "He is responsible for mobilizing and organizing many of the organiztions' big events.",
    },
    {
      imgUrl: "ev1.jpg",
      name: "Kitiibwa Deo",
      title: "Mobilizer",
      description:
        "He is greatly involved in the organization of social events ",
    },
  ];
  return (
    <>
      <section className={styles["committee-container"]}>
        <div className={styles["header"]}>
          <h3 className={styles["sub-heading"]}>Our Team</h3>
          <h1 className={styles["heading"]}>Committee Members 2024</h1>
        </div>
        <div className={styles["card-container"]}>
          {committeeMembers.map((item, index) => (
            <div className={styles["card"]} key={index}>
              <img src={item.imgUrl} alt="" className={styles["card-img"]} />
              <div className={styles["card-content"]}>
                <h3 className={styles["card-name"]}>{item.name}</h3>
                <h1 className={styles["card-title"]}>{item.title}</h1>
                <p>{item.description}</p>
                <Link to="" className={styles["secondary-btn"]}>
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
        <span className={styles["load-more-container"]}>
          <Link
            to=""
            className={`${styles["secondary-btn"]} ${styles["load-more"]}`}
          >
            Load more
          </Link>
        </span>
      </section>
    </>
  );
};
