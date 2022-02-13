import React, { ReactElement } from "react";

interface Props {}

function DevalsariParyavaran ({}: Props): ReactElement {
  return (
    <section id="devalsariParyavaran" className="pt-100 pb-60">
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
                      <h2>Devalsari Paryavaran Bachao</h2>
                
            </div>
          </div>
        </div>
        <div className="row align-items-center"> 
          <div className="col-lg-6">
            <div className="video-area style--two mb-50 mb-lg-0">
              <img
                src="assets\img\home\devalsariprotection.jpg"
                data-rjs={2}
                alt=""
                data-rjs-processed="true"
              />{" "}
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-left">
           
            <p>
            The Devalsari Paryavaran Bachoa Samuh is a youth group formed on 27 July 2015 at Devalsari under the auspices of Devalsari Environment Protection and Technology Development Society. 
            This youth group’s main objective is to support nature conservation, create alternate livelihood options and reduce playen (migration of village people to the plains). 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevalsariParyavaran;
