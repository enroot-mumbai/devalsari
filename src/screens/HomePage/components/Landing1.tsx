import React, { ReactElement } from "react";
import styles from "./Landing1.module.scss"
interface Props {}

function Landing1({}: Props): ReactElement {
 
  
  return (
    <section id="landing1" className="pt-10 pb-0">
        <div className={styles.showcase}>
           <div className="container">
             <div className="col-lg-8">

            
           

           <header id="showcase">
    <h1 style={{color:"white"}}>To Visit Devalsari</h1>
    <p style={{color:"white",display:"flex", textAlign:"left"}}></p>
    <div className="button1">
            <div className="button">
                 <a href="/ecotourism"
                    className="btn"
                      style={{
                        display: "",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "fit-content",
                        paddingInline:"10px",
                        marginTop:"10px",
                        textTransform:"capitalize",
                        alignContent:"center"
                        }}>
            <span style={{
              color:"white",
              fontSize:"20px"
              
            }}>Know More</span>
             </a>
        </div>
        </div>
  </header>
  </div>
</div>
           </div>
        
    </section>
  
  );
}

export default Landing1;
