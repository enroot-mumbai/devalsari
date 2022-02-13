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
        "The society hopes to revive bee-keeping as an alternate livelihood in Uttarakhand through honey production, promote bee conservation.  ",
      linkPath:"/beekeeping"
    },
    {
      id: 2,
      title: "Ecotourism",
      imagePath:"/assets/img/illustrations/Rivers.svg",
      content:
        "The Society can offer ecotourism packages for nature tourism and treks to Nag Tibba. Trained nature and trekking guides are available to conduct these activities. ",
      linkPath: "/ecotourism"
    },
    {
      id: 3,
      title: "Nature Conservation",
      imagePath:"/assets/img/illustrations/MassPlantations.svg",
      content:
        "Devalsari is home to an array of flora and fauna. Some of the area’s biodiversity includes Mammals, Birds, Butterflies, Moths.",
      linkPath: "/nature-tourism"
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

              </h3>
              <h2>About the Society</h2>          
             </div>
          </div>
        </div>
        <ul className="list-unstyled list-check text-lg-left row align-items-center">
        <div className="col-lg-6">
        <div className="section-title text-justify">
              <p>
              The Devalsari Environment Protection and Technology Development Society was set up to promote conservation and livelihoods
               through ecotourism and bee-keeping in Uttarakhand beginning with the Jaunpur region.
              <p>In the words of Arun Prasad, the biggest problem in Uttarakhand is “playen” wherein rural populations 
              are abandoning their homes to shift to towns and urban areas abandoning traditional practices of agriculture.</p>
              The primary reasons for “playen” are reduced returns from agriculture and livestock, lack of job opportunities in the villages, poor education and health care. 
              <br />
               <div className="button">
                 <a href="/about"
                    className="btn"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "fit-content",
                        paddingInline:"10px",
                        marginTop:"20px",
                        textTransform:"capitalize",
                        }}>
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
                height={500} 
                style={{

                }}
                />
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
          <br></br>
        </h3>
        <h2 style={{paddingTop:"50px"}}>Our Main Objectives </h2>
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
                <a href={singleProfile.linkPath} style={{ display: "block"}}>Read More </a>
              </div>
            </div>
          );
        })}
      </div>



    </section>
    
  
  );
}

export default AboutUs;
