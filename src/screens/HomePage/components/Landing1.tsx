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
    <a href="/ecotourism" className="" style={{ color:"white",border:"solid",padding:"10px"}}>Know More</a>
  </header>
  </div>
</div>
           </div>
        
    </section>
  
  );
}

export default Landing1;
