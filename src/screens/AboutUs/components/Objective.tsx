import React, { ReactElement } from "react";

interface Props {}

function Objective({}: Props): ReactElement {
  return (
    <section id="objective" className="pt-60 pb-60">
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
                <h2>The Society’s Objectives</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center"> 
          <div className="col-lg-6">
            <div className=" mb-50 mb-lg-0">
              <img
                src="/assets/img/about/10139.jpg"
                data-rjs={2}
                alt=""
                data-rjs-processed="true"
              />{" "}
            </div>
          </div>
          <div className="col-lg-6 text-justify text-lg-left">
           
            <p>
            The Society’s hopes to address some of the issues that plague Uttarakhand and its main objectives are:
            </p>
            <ul className="list-unstyled list-check">
                <li>
                     <i className="fa fa-check" aria-hidden="true" />
  Alternate livelihoods to reduce “playen” by promoting organic farming and produce by supporting formation of self-help groups.
                </li>
                <li>
                        <i className="fa fa-check" aria-hidden="true" /> 
                        Nature conservation through habitat protection. The society has established the Sreedev Suman Titii Park at Chiyana Khud to protect local habitat and conserve nature. 
                  </li> 
    <li>
        <i className="fa fa-check" aria-hidden="true" /> 
        Environment protection through conservation education in schools and amongst youth, campaigns to support tree plantations, water conservation and protection of flora and fauna. 
</li>
<li>
        <i className="fa fa-check" aria-hidden="true" /> 
        Supporting bee-keeping as an alternate livelihood through bee-keeping training and technology development, developing market linkages for natural honey and bee research and conservation.
        </li>
<li>
  <i className="fa fa-check" aria-hidden="true" /> 
  Developing Devalsari as an ecotourism hub for nature and adventure tourism.
</li>
<li>
  <i className="fa fa-check" aria-hidden="true" /> 
  Village development through homestays and promotion of local cuisine lead by womenfolk in the village.
  </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Objective;
