import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialMediaAccounts from "./../../data/SocialMediaAccounts.json";
export default function Footer(props: any) {
  const FooterLinks = [
    { id: 1, link: "/ecotourism", title: "Ecotourism" },
    { id: 2, link: "/events", title: "Events" },
    { id: 3, link: "/beekeeping", title: "Bee Keeping" },
    { id: 4, link: "/nature-tourism", title: "Nature" },
    { id: 5, link: "/media", title: "Devalsari in Press" },
    { id: 6, link: "/conservation", title: "Conservation at Devalsari" },
    { id: 7, link: "/gallery", title: "Gallery" },
    { id: 8, link: "/about", title: "About us" },
    { id: 9, link: "/joinus#contactus", title: "Contact Us" }
  ];
  return (
    <>
      {/* Footer Begin */}
      <div
        className="footer section-pattern footer-bg text-white"
        id="appointmentModalForm"
        // data-bg-img="assets/img/section-pattern/footer-pattern.png"
        style={{ backgroundColor: "#000000",width:"100%" }}
      >
        <div className="footer-top pt-60">
          <div className="container border-bottom">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_contact_info">
                  <div className="widget-logo d-flex justify-content-center button1">
                   <a href="/"> <Image
                      src={"/assets/img/logobg.png"}
                      alt="Logo"
                      height={72}
                      width={72}
                    /></a>
                    <div style={{ width: "24px" }}></div>
                
                  </div>
                  <div className="info-content  text-center">
                    <div className="single-info">
                      <span>Phone</span>
                      <p>
                        <a href="tel:+9193686 74290">+91 93686 74290</a>
                      </p>
                      <span>Contact mail</span>
                      <p>
                        <a href="mailto:develsari@gmail.com" target="_top">
                        develsari@gmail.com
                        </a>
                      </p>
                    </div>
                    <br />
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget_nav_menu">
                  <div className="widget-title">
                    <h4>Quick Links</h4>
                  </div>
                  <ul className="menu" style={{textAlign:"left",marginLeft:"90px"}}>
                    {FooterLinks.map((link) => {
                      return (
                        <li key={link.id}>
                          <Link href={link.link}>
                            <a>{link.title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div>
                  <div className="widget widget_social_icon">
                  <div className="widget-title">
                    <h4>Social Media Links</h4></div>
                  
                      <ul
                        className="social_icon_list list-inline d-flex justify-content-center"
                        style={{ flexWrap: "wrap" }}
                      >
                        
                        {SocialMediaAccounts.map((link) => {
                          return (
                            
                            <a href={link.link} key={link.id} target="_blank">
                              
                              <li
                                style={{
                                  width: "48px",
                                  height: "48px",
                                  backgroundColor: "rgba(255,255,255,0.3)",
                                  borderRadius: "24px",
                                  textAlign: "center",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  marginBottom: "12px",
                                  marginRight: "12px",
                                }}
                              >
                                <i
                                  className={link.iconClass}
                                  aria-hidden="true"
                                  style={{ color: "white" }}
                                />
                              </li>
                            </a>
                          );
                        })}
                      </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright-text text-center">
                  <div style={{ marginBottom: "24px" }}>
                    <a
                      href="https://enrootmumbai.in/"
                      target="_blank"
                      style={{
                        backgroundColor: "white",
                        width: "fit-content",
                        padding: "16px 36px",
                        borderRadius: "36px",
                        margin: "auto",
                      }}
                    >
                      
                      <img
                        src={"/emlogo.png"}
                        alt="Logo"
                        style={{ height: "36px" }}
                      />
                    </a>
                  </div>

                  <span>
                    <a href="https://enrootmumbai.in/"
                      target="_blank">Made with ♥ by Enroot Mumbai</a>
                  </span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
