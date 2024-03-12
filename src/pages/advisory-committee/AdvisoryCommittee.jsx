import { Link } from "react-router-dom";
import ReadMoreCommittee from "../../features/read-more-committee/ReadMoreCommittee";
import styles from "./AdvisoryCommittee.module.css";
import { RxDoubleArrowRight } from "react-icons/rx";

export const AdvisoryCommittee = () => {
  const sliceText = (text) => {
    const maxCharacters = 100;
    return text.length > maxCharacters
      ? text.slice(0, maxCharacters) + "..."
      : text;
  };

  const advisoryCommittee = [
    {
      imgUrl: "HOD-DPGS.png",
      email: "arthurgodfrey@gmail.com",
      name: "Dr Arthur Godfrey Batte",
      gender: "M",
      tel: "0777 580349",
      title: "Head of Department, Geology and Petroleum Studies",
      period: "2023-2024",
      description:
        "It is my distinct pleasure to extend a warm welcome to you all through the AAPG website. As the Head of the Department of Geology and Petroleum Studies at Makerere University, I am honoured to address fellow professionals, scholars, and enthusiasts in the field of geology and petroleum studies.",
    },
    {
      imgUrl: "Dr-Kiberu.jpg",
      name: "Dr. JohnMary Kiberu",
      gender: "M",
      email: "johnmary@gmail.com",
      tel: "0758853882",
      title: "Faculty Advisor",
      period: "2023-2024",
      description:
        "It brings me immense joy and pride to extend my heartfelt greetings to all members of the American Association of Petroleum Geosciences (AAPG) Student Chapter.",
    },
    {
      imgUrl: "Emmanuella-advisor.jpg",
      name: "Emmanuella Kaducu Lagen",
      gender: "F",
      email: "agumedmond@gmail.com",
      tel: "0758853882",
      title: "Former President AAPG",
      period: "2022-2023",
      description:
        "It is with great pleasure and a sense of nostalgia that I address you today as the former President of the American Association of Petroleum Geosciences (AAPG). Reflecting on my tenure from 2022 to 2023 fills me with immense pride as I recall the incredible journey we embarked on together. During my time as President, I had the privilege of witnessing firsthand the dedication, passion, and talent that define our student chapter. Together, we achieved remarkable milestones and made significant strides in advancing the field of petroleum geosciences. I want to take this opportunity to express my heartfelt gratitude to each and every member of our community. Your unwavering commitment to excellence and your relentless pursuit of knowledge have been the driving force behind our success. It is your enthusiasm, creativity, and determination that have propelled us forward, shaping the future of our industry. ",
    },
  ];
  return (
    <section className={styles["advisory-committee-container"]}>
      <div className={styles["header"]}>
        <h3 className={styles["sub-heading"]}>Consultants</h3>
        <h1 className={styles["heading"]}>Advisory Committee</h1>
      </div>
      <div className={styles["card-container"]}>
        {/* {committeeMembers.map((item, index) => ( */}

        {advisoryCommittee.map((item, index) => (
          <div className={styles["card"]} key={index}>
            <img src={item.imgUrl} alt="" className={styles["card-img"]} />
            <div className={styles["card-content"]}>
              <h3 className={styles["card-name"]}>{item.name}</h3>
              <h1 className={styles["card-title"]}>{item.title}</h1>
              <p>{sliceText(item.description)}</p>

              <div>
                {/* <Link
            to=""
            className={styles["secondary-btn"]}
            onClick={() => setIsReadMoreOpen(true)}
          >
            Read more &nbsp; <RxDoubleArrowRight />
          </Link> */}
                {/* 
          <Modal
  openModalElement={
    <Button className="inline-block mr-4" type="button">
      Continue
    </Button>
  }
  onModalClose={() => {}}
  className="top-8"
> */}
                <ReadMoreCommittee
                  openModalElement={
                    <Link
                      to=""
                      className={styles["secondary-btn"]}
                      // onClick={() => setIsReadMoreOpen(true)}
                    >
                      Read more &nbsp; <RxDoubleArrowRight />
                    </Link>
                  }
                  // onModalClose={() => {}}

                  // open={isReadMoreOpen}
                  // onClose={() => closeReadMoreModalHandler()}
                >
                  <div className={styles["card-desc"]}>
                    <>
                      <h3 className={styles["card-name"]}>{item.name}</h3>
                      <h1 className={styles["card-title"]}>{item.title}</h1>
                      {item.name === "Dr Arthur Godfrey Batte" && (
                        <p>
                          <img
                            src={item.imgUrl}
                            className={styles["advisor-img"]}
                          />
                          <span>
                            It is my distinct pleasure to extend a warm welcome
                            to you all through the AAPG website. As the Head of
                            the Department of Geology and Petroleum Studies at
                            Makerere University, I am honoured to address fellow
                            professionals, scholars, and enthusiasts in the
                            field of geology and petroleum studies.
                          </span>
                          <br />
                          <span>
                            At Makerere University, we are committed to
                            fostering excellence in education, research, and
                            innovation within the realm of earth sciences. Our
                            department stands as a beacon of knowledge, where
                            cutting-edge research intersects with real-world
                            applications, particularly in the exploration and
                            extraction of vital energy resources.
                          </span>
                          <br />
                          <span>
                            As we navigate the ever-evolving landscape of
                            geological exploration and petroleum studies,
                            collaboration and knowledge-sharing become
                            paramount. It is through forums like the AAPG
                            magazine and website that we can exchange insights,
                            share discoveries, and collectively advance the
                            frontier of our discipline.
                          </span>
                          <br />
                          <span>
                            I encourage each of you to engage with the rich
                            content presented in this publication, drawing
                            inspiration and insight from the diverse
                            perspectives shared by experts from around the
                            globe. Let us seize this opportunity to deepen our
                            understanding, expand our horizons, and forge
                            meaningful connections that will drive progress and
                            innovation in our field.
                          </span>
                          <br />
                          <span>
                            I extend my gratitude to the AAPG for providing this
                            platform and to all contributors for their
                            invaluable contributions. Together, let us embark on
                            a journey of exploration, discovery, and
                            collaboration that will shape the future of geology
                            and petroleum studies for generations to come
                          </span>
                        </p>
                      )}
                      {item.name == "Dr. JohnMary Kiberu" && (
                        <p>
                          <img
                            src={item.imgUrl}
                            className={styles["advisor-img"]}
                          />
                          <span>
                            It brings me immense joy and pride to extend my
                            heartfelt greetings to all members of the American
                            Association of Petroleum Geosciences (AAPG) Student
                            Chapter.
                          </span>
                          <br />
                          <span>
                            As a proud patron of this esteemed organization, I
                            am honored to be part of a community that is
                            dedicated to fostering excellence in the field of
                            petroleum geosciences. The AAPG Student Chapter
                            serves as a beacon of knowledge, innovation, and
                            collaboration, providing invaluable opportunities
                            for students to learn, grow, and thrive in their
                            academic and professional pursuits.
                          </span>
                          <br />
                          <span>
                            I am deeply impressed by the passion and dedication
                            demonstrated by each member of this vibrant
                            community. Your commitment to excellence, coupled
                            with your unwavering enthusiasm for the Earth
                            sciences, is truly inspiring. Together, we are
                            shaping the future of the petroleum industry and
                            making significant contributions to the advancement
                            of our field.
                          </span>
                          <br />
                          <span>
                            As a patron, I am committed to supporting the
                            mission and vision of the AAPG Student Chapter. I am
                            eager to contribute to the success of our community
                            by sharing my knowledge, insights, and experiences
                            with fellow members. Together, we can continue to
                            push the boundaries of discovery, innovation, and
                            sustainability in the petroleum geosciences.
                          </span>
                          <br />
                          <span>
                            I encourage all members to actively participate in
                            the events, activities, and initiatives organized by
                            the AAPG Student Chapter. Take advantage of the
                            numerous opportunities for learning, networking, and
                            professional development that are available to you.
                            Embrace every challenge as an opportunity for
                            growth, and never stop striving for excellence.
                          </span>
                          <br />
                          <span>
                            I am excited to embark on this journey with you and
                            to witness the incredible achievements that we will
                            accomplish together. Let us continue to uphold the
                            values of integrity, collaboration, and excellence
                            that define our community and propel us towards a
                            brighter future.
                          </span>
                          <br />
                          <span>
                            Thank you for your dedication, passion, and
                            commitment to excellence. Together, we will continue
                            to make a positive impact on the world around us. We
                            build for the future.
                          </span>
                          <br />
                          <b>Yours sincerely,</b>
                          <br />
                          <b>Dr. John Mary Kiberu</b>
                          <br />
                          <b>AAPG Student Chapter Patron</b>
                          <br />
                          <b>Makerere University</b>
                        </p>
                      )}
                      {item.name == "Emmanuella Kaducu Lagen" && (
                        <>
                          <img
                            src={item.imgUrl}
                            className={styles["advisor-img"]}
                          />
                          <p>{item.description}</p>
                          <br />
                          <span>
                            Our chapter is poised to continue making a profound
                            impact on the world stage, and I have every
                            confidence that you will carry the torch of
                            leadership with the same passion and determination
                            that have defined our community. I encourage each of
                            you to seize every opportunity that comes your way,
                            to push the boundaries of innovation, and to never
                            stop striving for excellence. Together, we have the
                            power to shape the future of the petroleum industry
                            and to make a lasting difference in the world. In
                            closing, I want to express my deepest appreciation
                            for your dedication, hard work, and unwavering
                            commitment to the AAPG Student Chapter. It has been
                            an honor and a privilege to serve as your President,
                            and I am excited to see the incredible achievements
                            that lie ahead for our community. Yours sincerely,
                          </span>
                        </>
                      )}
                    </>
                  </div>
                </ReadMoreCommittee>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
