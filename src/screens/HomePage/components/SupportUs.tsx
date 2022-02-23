import React, { ReactElement } from "react";

interface Props {}

function SupportUs({}: Props): ReactElement {

  return (
    <div
      id="support-us"      
      className="pt-60 pb-60 section-pattern bg-img"
      style={{
        backgroundImage:
          'url("/assets/img/home/image3.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        backgroundSize: "cover",
        padding:'24px'
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      ></div>
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center text-white">
          <a href="/joinus">
            <h2>How you can Support the Society </h2></a>
            <br />
            <a href="/joinus">
            <img
              style={{ marginTop: "24px", maxHeight: "20vh",padding:"20px"}}
              src={"/assets/img/home/love.png"}
            /></a>
            <br />
            <br />
            <a href="/joinus">
            <h3 
              style={{
                fontFamily: "Caveat, cursive",
                fontWeight: "bolder",
                letterSpacing: 1.3,
                fontSize: "36px",
              }}
            >
              Know more
            </h3></a>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportUs;
