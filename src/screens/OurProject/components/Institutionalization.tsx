import React, { ReactElement } from "react";

interface Props {}

function Institutionalization({}: Props): ReactElement {
  return (
    <div>
      <section
      id="institutionalization"
        className="services-section py-5 py-md-0 mt-60"
        style={{ minHeight: "100vh" }}
      >
        <div className="section-title text-center mb-0">
          {/* <h3
            style={{
              fontFamily: "Caveat, cursive",
              fontWeight: "bolder",
              letterSpacing: 1.3,
              fontSize: "36px",
            }}
          >
            Our Experience
          </h3>{" "} */}
         
          <br />
        </div>
        <div className="row m-auto p-5">
          <div className="col-lg-6">
            <p>
              
            </p>
            <p>
              
            </p>
            <p>
              
            </p>
          </div>
          <div className="col-lg-6">
            <p>
             
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Institutionalization;
