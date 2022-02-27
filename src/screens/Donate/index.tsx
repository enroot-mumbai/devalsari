import React, { ReactElement } from "react";

interface Props {}

function index({}: Props): ReactElement {
  return (
    <section
      className="banner section-pattern bg-img"
      style={{
        backgroundImage: 'url("assets/img/section-pattern/slider-pattern.png")',
        paddingTop: "90px",
        paddingBottom: "50px",
      }}
    >
      <div
        className="banner-slider d-flex align-items-center justify-content-center owl-loaded owl-drag"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <div className="owl-stage">
            <div className="owl-item cloned" style={{ width: "100%" }}>
              <div className="single-banner-slider">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="section-title">
                        <h2>
                           Donate us
                           
                        </h2>
                        <p>
                          Each and every contribution matters, donate us to give
                          a boost to this movement.
                        </p>
                        <br />
                        <h3>
                          <span>Account Details:</span>
                        </h3>
                        <p style={{textAlign:"left"}}>
                          <b>Account name -  Devalsari Paryawaran Sanrakshan awam Tekniki </b>
                          <br />
                          Bank Name - State Bank of India 
                          <br />
                          Branch - Thatyur
                          <br />
                          Account Number - 33940424562
                          <br />
                          IFSC - SBIN0004529
                          <br />
                          MICRx - 249002251
                        </p>
                       
                        {/* <div className="button">
                 <a href="/"
                    className="btn"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "fit-content",
                        display: "inline-block",
                        textTransform:"capitalize"}}>
            <span>Donate Now</span>
             </a>
             
                        </div> */}
                       
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right">
                        {" "}
                        <img
                          src="assets/img/illustrations/donate.svg"
                          data-rjs={2}
                          alt=""
                          data-rjs-processed="true"
                          width={510}
                          height={578}
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                  <div className="col-lg-6">
<div className="banner-image mt-50 mt-lg-0 text-center text-lg-right pt-100">
                        {" "}
                        <img
                          src="assets/img/illustrations/qrcode1.png"
                          data-rjs={2}
                          alt=""
                          data-rjs-processed="true"
                          width={510}
                          height={578}
                        />{" "}
                      </div>
</div>
<div className="col-lg-6 text-center">
                    <h3> Or else scan QR code to be a catalyst for our Project </h3>
                </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default index;
