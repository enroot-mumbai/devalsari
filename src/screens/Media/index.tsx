import React, { ReactElement } from 'react'
import News from './components/News'


interface Props {
    
}

function index({}: Props): ReactElement {
    return (
        <div>
            <News/>
           
        </div>
    )
}

export default index
