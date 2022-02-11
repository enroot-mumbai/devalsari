import React, { ReactElement } from "react";

interface Props {}

function Stay({}: Props): ReactElement {
  return (
    <section id="Stay" className="pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
               <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Where to stay</h3> 
              <h2></h2>
            </div>
          </div>
        </div>
        <ul className="list-unstyled list-check text-lg-left row align-items-center">
        <div className="col-lg-6">
          {/* <h1 className={"mb-20"}>Devalsari</h1> */}
                            <li>
                                <i className="fa fa-check" aria-hidden="true" /> 
                                Deodar Ecotourism and Research Center (DERC), Devalsari.
                                </li>
                            <li>
                                <i className="fa fa-check" aria-hidden="true" /> 
                                Homestays at the villages of Moldhar, Teva and Bangsil, run by the local village community.
                            </li>
                 <li>
                    <i className="fa fa-check" aria-hidden="true" /> 
                     Accommodation is available at DERC for up to 20 people (including tented accommodation). 
                     <br/>Larger groups of upto 40 people can be organised with sufficient notice.
                 </li>
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
    </section>
  );
}

export default Stay;
