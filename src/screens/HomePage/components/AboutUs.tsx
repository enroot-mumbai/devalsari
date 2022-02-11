import React, { ReactElement } from "react";
import styles from "./About.module.scss"
interface Props {}

function AboutUs({}: Props): ReactElement {
  const About = [
    {
      id: 1,
      title: "Bee-keeping",
      imagePath:"/assets/img/illustrations/beehive.png",
      content:
        "Winning hearts and restyling mindsets by creating a movement of change for farmers through 360° development.",
      linkPath:"/achievements#all-round"
    },
    {
      id: 2,
      title: "Ecotourism",
      imagePath:"/assets/img/illustrations/Rivers.svg",
      content:
        "Water harvesting and its management to ensure water security. Reducing dependency on rain-fed agriculture.",
      linkPath: "/achievements#water"
    },
    {
      id: 3,
      title: "Nature Conservation",
      imagePath:"/assets/img/illustrations/MassPlantations.svg",
      content:
        "Mass plantation by motivating farmers to change cropping patterns to horticulture using training, knowledge, and technology.",
      linkPath: "/achievements#2020"
    },
  ];
  
  return (
    <section id="about" className="pt-120 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3
                style={{
                fontFamily: "Raleway", 
                fontWeight: "bolder", 
                letterSpacing: 1, 
                fontSize: "36px", 
                textAlign:"center", }}>                
                About the Society
              </h3>             
             </div>
          </div>
        </div>
        <ul className="list-unstyled list-check text-lg-left row align-items-center">
        <div className="col-lg-6">
        <div className="section-title text-left">
              <p>
              The 
              <a href="#"><b> Devalsari Environment Protection </b></a> and Technology Development Society was set up to promote conservation and livelihoods
               through ecotourism and bee-keeping in Uttarakhand beginning with the Jaunpur region.
              <p>In the words of Arun Prasad, the biggest problem in Uttarakhand is “playen” wherein rural populations 
              are abandoning their homes to shift to towns and urban areas abandoning traditional practices of agriculture.</p>
              The primary reasons for “playen” are reduced returns from agriculture and livestock, lack of job opportunities in the villages, poor education and health care. 
               <div className="button">
                 <a href="/about"
                    className="btn"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "fit-content",}}>
            <span>Read More</span>
             </a>
        </div>
      </p>
    </div>
      </div>
        <div className="col-lg-6">
          <div className="video-area style--two mb-50 mb-lg-0">
            <img
                src="assets\img\GettingThere\derc.JPG"
                data-rjs={2}
                alt="DERC"
                data-rjs-processed="true"
                width={540}
                height={500} />
            </div>
          </div>
          </ul>
      </div>
      
      {/* proof */}

      <div className="section-title text-center mb-0 ">
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
        <h2>Lorem ipsum </h2>
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

export default AboutUs;
