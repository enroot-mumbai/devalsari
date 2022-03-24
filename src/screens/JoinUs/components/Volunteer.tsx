import React, { ReactElement } from "react";

interface Props {}

function Volunteer({}: Props): ReactElement {
  return (
    <section
      className="section-pattern bg-img"
      style={{
        backgroundImage: 'url("assets/img/section-pattern/slider-pattern.png")',
        paddingTop: "120px",
      }}
    >
      <div className="banner-slider d-flex align-items-center justify-content-center owl-loaded owl-drag">
        <div>
          <div className="owl-stage">
            <div className="owl-item cloned" style={{ width: "100%" }}>
              <div className="single-banner-slider">
                <div className="container">
                <div className="section-title text-center">
                        
                        <h2>How You Can Support the Society</h2>
                        </div>
                  <div className="row align-items-center">
                    <div className="col-lg-6 mt-20">
                     
                        <ul className="list-unstyled list-check text-left">
                <li>
                     <i className="fa fa-check" aria-hidden="true" />We welcome monetary contributions to run our various programs.
                </li>
                <li>
                        <i className="fa fa-check" aria-hidden="true" /> 
                        We welcome support from organisations for skill development for our programs.
                </li>
                <li>
                        <i className="fa fa-check" aria-hidden="true" /> 
                        Our tourism development program has numerous packages for nature tourism, trekking, culture and cuisine. 
                       <br /> We would welcome tourists at Devalsari.
                </li>
                <br />
            </ul>
                        <div className="banner-content text-center">
                       
<div className="button1 ">
                        <a
                          href="tel:+919368674290"
                          target="_blank"
                          // data-toggle="modal"
                          // data-target="#appointmentModalForm"
                          className="btn"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "300px",
                            padding:'0px 18px'
                          }}
                        ><i
                        className={"fa fa-phone fa-lg"}
                        aria-hidden="true"
                        style={{ color: "green" }}
                      />
                          <span> +91 93686 74290</span>
                        </a>
                        </div>
                        <br />
                        <div className="button1">
                        <a
                          href="mailto: devalsari@gmail.com"
                          target="_blank"
                          className="btn"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "300px",
                            padding:'0px 18px'
                          }}
                        >
                          <i
                            className={"fa fa-envelope fa-lg"}
                            aria-hidden="true"
                            style={{ color: "green"}}
                          />
                          <span style={{textTransform:"lowercase"}}>develsari@gmail.com</span>
                        </a>
                        </div>
                        <br />
                        <div className="button1 ">
                        <a
                          href="https://api.whatsapp.com/send/?phone=918650645385&text=I%27m+interested+to+know+more+about+supporting+the+Society&app_absent=0"
                          target="_blank"
                          className="btn"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "300px",
                            padding:'0px 18px'
                          }}
                        ><i
                        className={"fa fa-whatsapp fa-lg"}
                        aria-hidden="true"
                        style={{ color: "green" }}
                      />
                          <span style={{textTransform:"capitalize"}}>Whatsapp to know more</span>
                        </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 box2">
                      <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right">
                        <img
                          src="/assets/img/illustrations/2480558.png"
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
