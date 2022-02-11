import React, { ReactElement } from "react";

interface Props {}

function DigiFarmer({}: Props): ReactElement {
  return (
    <section id="digifarmer" className="pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Connecting farmers to world</h3>
              <h2>Digi-Farmer</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className={"mb-20"}>Digi-Farmer</h1>
            <p>
              While working with farmers we realised their biggest problem is
              that farmers have little or no exposure to technology or startups
              who are working for them.
            </p>
            {/* <p>
              Entrepreneurs have built great solutions to help farmers in one or
              the other way, but the issue is that the farmers aren't aware of
              these products, or they aren't able to make the most out of it.
            </p> */}
            <p>
              One of the biggest challenge is to on-board the farmer. KYC
              forms are really difficult for farmers to fill they need someone else to assist them while filling
              these forms.
            </p>
            <p>
              They have to repeat this for all other apps. Now this becomes
              a really big issue as most of the farmers will not be able to use
              the applications as they can't fill these forms again and
              again.
            </p>
            <p>
              Consider our case, we built a system for farmers to book saplings,
              the flow of the system requires - an account creation (10%) - KYC
              data uploading (80%) - booking the saplings (10%)
            </p>
            <p>
              So if we can remove the KYC step, we can save 80% of the time and
              efforts for any farmer.
            </p>
            {/* <p>
              And this is just for one application, now imagine if this same
              step can be removed from all applications, this will truly empower
              farmers to make the most out of the technology which is built for
              them.
              But then one would ask, isn't KYC needed and how will get to know
              basic details about the farmers.
            </p> */}
            <p>
              Hence we're creating this application called Digi Farmer, a single
              sign on created only for farmers to help them upload all their
              details once and use it to sign up or login into any other
              application.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="video-area style--two mb-50 mb-lg-0">
              <img
                src="assets/img/farmersPage/DigiFarmer2.png"
                data-rjs={2}
                alt=""
                data-rjs-processed="true"
                width={540}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigiFarmer;
