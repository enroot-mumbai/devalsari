import React, { ReactElement } from "react";
import styles from "./ProofOfConcept.module.scss";
interface Props {}

function abb({}: Props): ReactElement {
  const About = [
    {
      id: 1,
      title: "360° Development",
      imagePath:"/assets/img/illustrations/360.svg",
      content:
        "Winning hearts and restyling mindsets by creating a movement of change for farmers through 360° development.",
      linkPath:""
    },
    {
      id: 2,
      title: "Water Management",
      imagePath:"/assets/img/illustrations/Rivers.svg",
      content:
        "Water harvesting and its management to ensure water security. Reducing dependency on rain-fed agriculture.",
      linkPath: ""
    },
    {
      id: 3,
      title: "Mass Plantation",
      imagePath:"/assets/img/illustrations/MassPlantations.svg",
      content:
        "Mass plantation by motivating farmers to change cropping patterns to horticulture using training, knowledge, and technology.",
      linkPath: "/achievements#2020"
    },
  ];
  return (
    <section id="poc">
     
      <div className="section-title text-center mb-0 pt-100">
        <h3
          style={{
            fontFamily: "Caveat, cursive",
            fontWeight: "bolder",
            letterSpacing: 1.3,
            fontSize: "35px",
          }}
        >
          Our Experience
        </h3>
        <h2>Proof of Concept</h2>
      </div>
      
      <div className={styles.profileContainer}>
        {About.map((singleProfile) => {
          return (
            <div className={`col-lg-6 ${styles.singleProfile} p-0`}>
              <div className={`${styles.singleProfileBasics}`}>
                <div className={styles.textData}>
                  <h3> {singleProfile.title} </h3>
                  <p> {singleProfile.content} </p>
                </div>
                <img src={singleProfile.imagePath} />
              </div>
              <div className={`${styles.readmoreSection} readbtn`}>
                <a href={singleProfile.linkPath} style={{ display: "block"}}>Click Here Read More </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default abb;
