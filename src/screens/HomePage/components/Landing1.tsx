import React, { ReactElement } from "react";
import styles from "./Landing1.module.scss"
interface Props {}

function Landing1({}: Props): ReactElement {
 
  
  return (
    <section id="landing1" className="pt-10 pb-0">
        <div className={styles.showcase}>
           <div className="container">
           

           <header id="showcase">
    <h1 style={{color:"white"}}>Welcome To Devalsari</h1>
    <p style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
    <a href="/" className="" style={{ display: "block",color:"white"}}>Read More</a>
  </header>
  
</div>
           </div>
        
    </section>
  
  );
}

export default Landing1;
