import React, { ReactElement, useState } from "react";
import AboutUs from "./components/AboutUs";
import Landing from "./components/Landing";
import Partners from "./components/Partners";
import GettingThere from "./components/GettingThere";
import Stay from "./components/Stay";
import Ecotourism from "./components/EcotourismAndHomestay";
import DevalsariParyavaran from "./components/DevalsariProtection";
import Beekeeping from "./components/Beekeeping";


interface Props {}

export default function HomePage({}: Props): ReactElement {

  return (
    <>
      <Landing />
      <AboutUs />
      <Ecotourism/>
      <Beekeeping/>
      <DevalsariParyavaran/>
      <Partners />
    </>
  );
}