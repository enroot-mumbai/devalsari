import React, { ReactElement } from 'react'
import Devalsari from './components/AboutDevalsari'
import AboutTheSociety from './components/AboutTheSociety'
import Awards from './components/Awards'
import LocalCulture from './components/LocalCulture'
import LocalFestival from './components/LocalFestivals'
import Objective from './components/Objective'
import Team from './components/Team'

interface Props {
    
}

function AboutUs({}: Props): ReactElement {
    return (
        <>
        <Devalsari/>
        <LocalCulture/>
        {/* <LocalFestival/> */}
            <AboutTheSociety/>
            <Objective/>
            <Team/>
            <Awards/>
        </>
    )
}

export default AboutUs
