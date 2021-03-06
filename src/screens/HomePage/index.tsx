import React, { ReactElement, useState } from "react";
import AboutUs from "./components/AboutUs";
import Landing from "./components/Landing";
import Partners from "./components/Partners";
import DevalsariParyavaran from "./components/DevalsariProtection";
import Beekeeping from "./components/Beekeeping";
import ConservationHome from "./components/Conservation";
import SupportUs from "./components/SupportUs";
import Derc from "./components/Derc";
import Landing1 from "./components/Landing1";


interface Props {}

export default function HomePage({}: Props): ReactElement {

  return (
    <>
     
      <Landing1/>
      <AboutUs />
      <ConservationHome/>
      <Derc/>
      <Beekeeping/>
      <DevalsariParyavaran/>
      <Partners />
      <SupportUs/>
    </>
  );
}