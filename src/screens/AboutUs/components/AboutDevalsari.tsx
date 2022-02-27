import React, { ReactElement } from "react";

interface Props {}

function Devalsari({}: Props): ReactElement {
  return (
    <section id="devalsari" className="pt-110">
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
                      <h2>
                      About Devalsari
                      </h2>
                
            </div>
          </div>
        </div>
        <div className="row align-items-center"> 
          <div className="col-lg-6">
            <div className="video-area style--two mb-50 ">
              <img
                src="/assets/img/about/devalsari.jpg"
                data-rjs={2}
                alt=""
                data-rjs-processed="true"
              />{" "}
            </div>
          </div>
          <div className="col-lg-6 text-justify textmt-20">
           
            <p>
            Devalsari, tucked away in the Aglar Valley, in Tehri Garhwal District, the home of the Jaunpuri’s. The snow-capped peaks of the Mahabharat range in the Middle Himalayas, looming in the distance, marvellous deodar, oak and rhododendron forest, surrounded by terrace fields of the villages of Bangsil, Mauldhar, Udarsu, Tewa, Untad, Butcot, Theek, Kinsu and Naogaon.
            </p>
            <p>
            The Pali Gad stream flows through Bangsil into the Aglar River, winding its way through a forest landscape with altitudes varying from 1,200 m at Thatyur up to 3,048 m at Nag Tibba, the highest peak in the area. 

            </p>            
          </div>
        </div>

        <div className="row align-items-center"> 
        <div className="col-lg-6 text-justify textmt-20">
           
           <p>
           </p>
           <ul className="list-unstyled list-check">
                <li>
                     <i className="fa fa-check" aria-hidden="true" /> 
                     Habitat: Reserved Forests of Devalsari and Magra. 
                </li>
                <li>
                        <i className="fa fa-check" aria-hidden="true" /> 
                        The forest consists primarily of Chir at lower altitudes at Magra and Deodar, Banj oak and Rhododendron forests with Moru oak at higher altitudes at Devalsari. 
                </li>
                <li>
                        <i className="fa fa-check" aria-hidden="true" /> 
                        Best time to visit for trekking: March to July, September to December
                </li>
                <li>
                        <i className="fa fa-check" aria-hidden="true" /> 
                        Best time to visit for birds: throughout the year
                </li>
                <li>
                        <i className="fa fa-check" aria-hidden="true" /> 
                        Best time to visit for butterflies, moths & herpetofauna: April to October
                </li>
                <li>
                        <i className="fa fa-check" aria-hidden="true" /> 
                        Local festivals in Devalsari: Baisakhi in April and Buddhi Bagwali (Old Deepawali), celebrated one month after Deepawali. 
                </li>
            </ul>
                    
         </div>
          <div className="col-lg-6 box2">
            <div className="video-area style--two mb-50 ">
              <img
                src="/assets/img/about/habitat.jpg"
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

export default Devalsari;
