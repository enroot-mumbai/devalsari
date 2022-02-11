import React, { ReactElement } from "react";
import styles from "./Landing.module.scss";
// import ModalVideo from "react-modal-video";
import { isMobile, MobileView, BrowserView } from "react-device-detect";

interface Props {}

export default function Landing({}: Props): ReactElement {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <section id="landing">
    <div className=".container">
      <div className={styles.img}>
      
      <img
                src="assets\img\mandir.jpg"
                alt="Devalsari"
                width={"100%"}
                style = {{maxHeight:"80vh",objectFit:"cover"}}
                
              />
              <div className="centered text-center">
                <h1 
                style={{
                  color:'white', 
                  width: '100%',
                  fontSize:'5vm'
                  }}
                  >
                    Welcome to 
                    <span style={{fontFamily:"Caveat, cursive",fontSize:"64px",color:"white"}}> Devalsari</span>
                    </h1>
                    </div>
      </div>
      </div>
    </section>
  );
}
