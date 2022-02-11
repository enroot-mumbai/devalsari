import React, { ReactElement } from 'react'

interface Props {
    
}

function Beneficiaries({}: Props): ReactElement {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'120px',flexDirection:'column'}}>
            <h2 style={{marginBottom:'20px'}}>Global Parli - Farmer Beneficiaries</h2>
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS5j3y39FiQPNXTChe-o8EbCgR9dbiWcBsc2ZWJ49RomB41B4vcHNOwT_kWsCw04mjS-23IKWnAfdIP/pubhtml? widget=true&amp;headers=false" width="800" height="1000"></iframe>
        </div>
    )
}

export default Beneficiaries
