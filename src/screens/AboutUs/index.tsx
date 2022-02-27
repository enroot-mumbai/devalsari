import React, { ReactElement } from 'react'
import Devalsari from './components/AboutDevalsari'
import AboutTheSociety from './components/AboutTheSociety'
import Awards from './components/Awards'
import Objective from './components/Objective'
import Team from './components/Team'

interface Props {
    
}

function AboutUs({}: Props): ReactElement {
    return (
        <>
        <Devalsari/>
            <AboutTheSociety/>
            <Objective/>
            <Team/>
            <Awards/>
        </>
    )
}

export default AboutUs
