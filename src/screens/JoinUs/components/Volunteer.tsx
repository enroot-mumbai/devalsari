import React, { ReactElement } from "react";

interface Props {}

function Volunteer({}: Props): ReactElement {
  return (
    <section
      className="banner section-pattern bg-img"
      style={{
        backgroundImage: 'url("assets/img/section-pattern/slider-pattern.png")',
        paddingTop: "120px",
        paddingBottom: "0px",
      }}
    >
      <div className="banner-slider d-flex align-items-center justify-content-center owl-loaded owl-drag">
        <div>
          <div className="owl-stage">
            <div className="owl-item cloned" style={{ width: "100%" }}>
              <div className="single-banner-slider">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-content text-center">
                         <h1
                          style={{
                            fontFamily: "Raleway",
                            fontWeight: "bolder",
                            letterSpacing: 1.3,
                            fontSize: "36px",
                          }}>
                          How You Can Support the Society
                        </h1> 
                        </div>
                        <div className="banner-content text-left">
                        <p>
                        We welcome monetary contributions to run our various programs.
                        </p>
                        <p>
                        We welcome support from organisations for skill development for our programs.
                        </p>
                        <p>
                        Our tourism development program has numerous packages for nature tourism, trekking, culture and cuisine. We would welcome tourists at Devalsari.
                        </p>

                        <a
                          href="tel:+919368674290"
                          target="_blank"
                          data-toggle="modal"
                          data-target="#appointmentModalForm"
                          className="btn"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "fit-content",
                            padding:'0px 18px'
                          }}
                        ><i
                        className={"fa fa-phone fa-lg"}
                        aria-hidden="true"
                        style={{ color: "green" }}
                      />
                          <span> +91 93686 74290</span>
                        </a>
                        <br />
                        <a
                          href="https://chat.whatsapp.com/"
                          target="_blank"
                          data-toggle="modal"
                          data-target="#appointmentModalForm"
                          className="btn"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "fit-content",
                            padding:'0px 18px'
                          }}
                        >
                          <i
                            className={"fa fa-whatsapp fa-lg"}
                            aria-hidden="true"
                            style={{ color: "green"}}
                          />
                          <span>Join Whatsapp Group</span>
                        </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right">
                        <img
                          src="/assets/img/events/visit2021.jpg"
                          data-rjs={2}
                          alt=""
                          data-rjs-processed="true"
                          style={{ borderRadius: "10px" }}
                          width={510}
                          height={510}
                          
                        />
                      </div>
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

export default Volunteer;
