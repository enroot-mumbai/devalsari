import React, { ReactElement } from 'react'
import DigiFarmer from './components/DigiFarmer'
import FarmerTestimonials from './components/FarmerTestimonials'

import Helpline from './components/Helpline'
import Production from './components/Production'
import Saplings from './components/Saplings'
import Satellite from './components/Satellite'
import Training from './components/Training'
import FarmerTrainingLMS from './components/FarmerTrainingLMS'
import GettingThere from '../HomePage/components/GettingThere'

interface Props {
    
}

function index({}: Props): ReactElement {
    return (
        <div>
            {/* <Saplings/> */}
            <FarmerTestimonials/>
            <Training/>
            <Production/>
            <FarmerTrainingLMS/>
            <Helpline/>
            <Satellite/>
            
            {/* <Gramin/> */}
            <GettingThere/>

            <DigiFarmer/>
        </div>
    )
}

export default index
