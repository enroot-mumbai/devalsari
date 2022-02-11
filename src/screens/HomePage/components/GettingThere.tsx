import React, { ReactElement } from "react";

interface Props {}

function GettingThere({}: Props): ReactElement {
  return (
    <section id="GettingThere" className="pt-60 pb-60">
      <div className="greycontainer">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
               <h3 style={{fontFamily:'Raleway',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>How to get there</h3> 
              <h2></h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="video-area style--two mb-50 mb-lg-0">
              <img
                src="assets\img\GettingThere\Gettingthere.png"
                data-rjs={2}
                alt=""
                data-rjs-processed="true"
              />{" "}
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-left">
            {/* <h1>
               <span></span>{" "}
            </h1> */}
            <p>
            <b style={{fontSize:'17px'}}>Nearest Railhead:</b> Dehradun.
            </p>
            <p>
            <b style={{fontSize:'17px'}}>Nearest Airport:</b> Jolly Grant (between Dehradun and Rishikesh)
            </p>
            <p>
            The nearest village to <b>Devalsari Reserved Forest</b> is Bangsil, 
            13 kilometers from Thatyud, 
            and 55 kilometers from Mussoorie.
            </p>
            <p>
            From Mussoorie, drive 15 km to Suwakholi, from where you take a left turn to Magra and Rautu ki beli,  and then onwards to Thatyud. Shared taxis ply from Dehradun and Mussoorie to Thatyud. 
            </p>
            <p>
            Shared taxis also ply from Thatyud to Bangsil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GettingThere;
