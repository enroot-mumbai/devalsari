import React, { ReactElement } from 'react'

interface Props {
    
}

function BeeKeepingTraining({}: Props): ReactElement {
    return (
        <section id="training" className="pt-100 pb-120">
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
                            <h2>Bee-keeping Training</h2>
                    <h1 style={{margin:'1rem'}}>
                        
                    </h1>
                    </div>
                </div>
                </div>
                <div className="row align-items-center text-justify">
                    
                    <div className="col-lg-6">
                        <h2 className={"mb-20"} > </h2>
                        <p>
                        ONGC Ltd is funding a program run by the Devalsari society to train farmers in the Corbett landscape. The program covers 5 villages and 40 villagers. The villagers have been given subsidized bee-boxes and have been provided bee-keeping capacity building and marketing support. 
                        </p>
                        <p>
                        The Society conducts training programs to promote adoption of bee keeping as an alternate livelihood. Arun Prasad has conducting bee-keeping training programs in Almora and Tehri Garhwal Districts as part of the Ajeevika project of the Uttarakhand Government.
                        </p>  
                     
                    </div>

                    <div className="col-lg-6">
                        <div className=" mb-50 mb-lg-0">
                        <img
                            src="\assets\img\beekeeping\beetraining.JPG"
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

export default BeeKeepingTraining
