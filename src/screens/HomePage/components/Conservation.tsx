import React, { ReactElement } from "react";

interface Props {}

function ConservationHome({}: Props): ReactElement {
  return (
    <section id="conservation" className="pt-30 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 style={{
                  fontFamily:'Raleway',
                  fontWeight:'bolder',
                  letterSpacing:1.3,
                  fontSize:'36px'}}>
                      </h3>
                      <h2>Conservation at Devalsari</h2>
                
            </div>
          </div>
        </div>
        <div className="row align-items-center"> 
          <div className="col-lg-6 text-justify text-lg-left">
           
            <p>
            The Sreedev Suman Titli Park was established by the society in 2016. The society has been protecting the forest in this area resulting in a resurgence of local biodiversity.
            </p>
            <p>
            Conserving fresh water systems in the Aglar Valley
            The Society actively works towards conservation of freshwater systems in the landscape. 
            The threats are many: use of bleaching powder and electricity to kill fish, pollution of the water, and killing of other fresh water biodiversity such as amphibians along with the fish.
            </p>
            <p>
            The Society’s efforts include
            </p>
            <ul className="list-unstyled list-check">
                <li>
                     <i className="fa fa-check" aria-hidden="true" /> 
                     - Education of people on the need to preserve the Himalayan riverine systems. The Devalsari Society has supported a school education program at Nainbagh and Thatyud for a period of 2017-2019, working in 10 schools to education and make local children aware of nature conservation.
                </li>
                <li>
                        <i className="fa fa-check" aria-hidden="true" /> 
                        - Stopping of fishing through the use of bleaching powder and electric current
                </li>
            </ul>
           
            <div className="button">
                 <a href="/conservation"
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
            
            {/* <p>
            In this landscape, the Maun mela and the Chr Maun, are festivals during which fish are hunted using traditional plat powder called Timur (or Timru) or Maun. During these festivals, Maun and Chor Maun, fish are killed rampantly along with other biodiversity. 
            The society is working to create awareness about the adverse effects of the Maun mela.
            </p> */}
            
          </div>
          <div className="col-lg-6">
            <div className="video-area style--two mb-50 mb-lg-0">
              <img
                src="assets/img/conservation/conservation.jpg"
                data-rjs={2}
                alt=""
                data-rjs-processed="true"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConservationHome;
