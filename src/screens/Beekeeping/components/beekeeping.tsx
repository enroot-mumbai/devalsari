import React, { ReactElement } from 'react'

interface Props {
    
}

function Bees({}: Props): ReactElement {
    return (
        <section id="beekeeping" className="pt-100 pb-60">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="section-title text-center">
                    <h3 style={{
                        fontFamily:'Raleway',
                        fontWeight:'bolder',
                        letterSpacing:1.3,
                        fontSize:'36px'}}>
                            </h3>
                            <h2>Bee-keeping</h2>
                    <h1 style={{margin:'1rem'}}>
                        
                    </h1>
                    </div>
                </div>
                </div>
                <div className="row align-items-center text-justify">
                    
                    <div className="col-lg-6 textmt-50">
                        <h2 className={"mb-20"} > </h2>
                        <p>
                        The society hopes to revive bee-keeping as an alternate livelihood in Uttarakhand through honey production, promote bee conservation and improve productivity of crops, horticulture and forest produce.  
                        </p>
<p>Apis cerana indica is the native bee of the hills of Uttarakhand. 
Traditionally, this was the bee used in wall beehives to produce honey. 
However, in recent years, people’s enthusiasm for bee-keeping and honey production is decreasing.
There is need to rejuvenate bee keeping in Uttarakhand both as an alternate livelihood and for increased crop production. 
                      </p>  
                     
                    </div>

                    <div className="col-lg-6 box2">
                        <div className=" mb-50 mb-lg-0 ">
                        <img
                            src="assets\img\home\beekeeping.png"
                            data-rjs={2}
                            alt="Bee-Keeping"
                            data-rjs-processed="true"
                            width={540}
                            height={500}
                            style={{borderRadius:"10px"}}
                        
                        />                    
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Bees
