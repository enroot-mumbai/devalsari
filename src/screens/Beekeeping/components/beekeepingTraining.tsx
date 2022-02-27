import React, { ReactElement } from 'react'

interface Props {
    
}

function BeeKeepingTraining({}: Props): ReactElement {
    return (
        <section id="training" className="pt-20 pb-110">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="section-title text-center ">
                            <h2>Bee-keeping Training</h2>
                    </div>
                </div>
                </div>
                <div className="row align-items-center text-justify">
                    
                    <div className="col-lg-6 textmt-50">
                        <h2 className={"mb-20"} > </h2>
                        <p>
                        ONGC Ltd is funding a program run by the Devalsari society to train farmers in the Corbett landscape. The program covers 5 villages and 40 villagers. The villagers have been given subsidized bee-boxes and have been provided bee-keeping capacity building and marketing support. 
                        </p>
                        <p>
                        The Society conducts training programs to promote adoption of bee keeping as an alternate livelihood. Arun Prasad has conducting bee-keeping training programs in Almora and Tehri Garhwal Districts as part of the Ajeevika project of the Uttarakhand Government.
                        </p>  
                     
                    </div>

                    <div className="col-lg-6 box2 textmt-20">
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
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className=" pb-80">

                    </div>
                </div>
                </div>
                <div className="row align-items-center text-justify">
                    
                <div className="col-lg-6 box2 textmt-20">
                        <div className=" mb-50 mb-lg-0">
                        <img
                            src="\assets\img\beekeeping\image5.jpg"
                            data-rjs={2}
                            alt="Bee-Keeping"
                            data-rjs-processed="true"
                            width={540}
                            height={500}
                            style={{borderRadius:"10px"}}
                        
                        />                    
                        </div>
                    </div>


                    <div className="col-lg-6 textmt-50">
                        <h3 className={"mb-20"} >Bee keeping training programs </h3>
                        <p>
                             The Society offers bee keeping training programs on an end to end basis including assessment and survey of locations for suitability of bee-keeping, training of local people in rearing bees, designing appropriate bee hives and bee boxes, and finally sourcing the honey produced for sale on a no-profit, no-loss basis. 
                        </p>

                        <p>
                            If you are interested in conducting bee keeping training programs in your area contact  
                            <b> Arun Prasad </b> at 
                            <a style={{color:"blue",}} href="mailto: arunapis1@gmail.com"> arunapis1@gmail.com</a> or call at 
                            <a style={{color:"blue",}} href="tel: 91 86506 45385"> 8650645385</a> . 
                        </p>
                    </div>

                  
                </div>
                
            </div>
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="pb-80"> </div>
                </div>
                </div>
                <div className="row align-items-center text-justify">
                    
                    <div className="col-lg-6 textmt-50">
                        <h3 className={"mb-20"} > Selling honey </h3>
                        <p>
                        The Society sources honey from villagers and sells it on a no-profit, no-loss basis. It has recently installed a honey filtration machine at Thatyud and intends to process and sell honey under its own brand called “Deodar”. 
                        </p>
                      
                     
                    </div>

                    <div className="col-lg-6 box2 textmt-20">
                        <div className=" mb-50 mb-lg-0">
                        <img
                            src="\assets\img\beekeeping\image3.jpg"
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
