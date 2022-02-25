import React, { ReactElement } from "react";

interface Props {}

function Derc({}: Props): ReactElement {
  return (
    <section id="derc" className="pt-30">
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
                      Deodar Ecotourism and Research Center (DERC)
                      </h2>
                
            </div>
          </div>
        </div>
        <div className="row align-items-center"> 
          <div className="col-lg-6">
            <div className="video-area style--two mb-50 ">
              <img
                src="assets\img\home\EcotourismH.jpg"
                data-rjs={2}
                alt=""
                data-rjs-processed="true"
              />{" "}
            </div>
          </div>
          <div className="col-lg-6 text-justify text-lg-left textmt-20">
           
            <p>
            The Devalsari Environment Protection and Technology Development Society set up the DERC in 2015. The DERC was set up to promote ecotourism and bee-keeping with the involvement of the local community. The Center focuses on training and capacity building for ecotourism, and research, training and capacity building for bee-keeping. 
            </p>
            <p>
            Accommodation for tourists at the center and in tents is available. The center is also available as a training center for other village related activities. 
            </p>            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Derc;
