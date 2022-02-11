import React, { ReactElement } from 'react'
import Photo from '../Gallery/components/Photo'
import AboutTheSociety from './components/AboutTheSociety'
import Awards from './components/Awards'
import Conservation from './components/Conservation'
import Ecotourism from './components/ecotourism'
import MissionVision from './components/MissionVision'
import Objective from './components/Objective'

import Team from './components/Team'

interface Props {
    
}

function AboutUs({}: Props): ReactElement {
    return (
        <>
            <AboutTheSociety/>
            <Objective/>
            <Team/>
            <Ecotourism/>
            <Conservation/>
             {/* <Story/>  */}
            <Awards/>
            {/* <OtherProjects/> */}
        </>
    )
}

export default AboutUs
