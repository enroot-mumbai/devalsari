import React, { ReactElement } from 'react'
import Bees from './components/beekeeping'
import BeeKeepingTraining from './components/beekeepingTraining'

interface Props {
    
}

function BeeKeeping({}: Props): ReactElement {
    return (
        <>
            <Bees/>
            <BeeKeepingTraining/>
        </>
    )
}

export default BeeKeeping
