import React, { ReactElement } from 'react'

interface Props {
    
}

function Ecotourism({}: Props): ReactElement {
    return (
        <section id="eco" className="pt-60 pb-60">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className=" text-center">
                    <h3 style={{fontFamily:'Raleway',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Ecotourism at Devalsari</h3>
                    <h1 style={{margin:'1rem'}}>
                        
                    </h1>
                    </div>
                </div>
                </div>
                <div className="row align-items-center text-justify">
                    
                    <div className="col-lg-6">
                        <h2 className={"mb-20"}> </h2>
                        <p>
                        The Society can offer ecotourism packages for nature tourism and treks to Nag Tibba. Trained nature and trekking guides are available to conduct these activities.
                        </p>
                        <p>Nature tourism: More than 2,000 nature lovers have visited Devalsari in the last few years, to enjoy the area’s forests, the birds and butterflies, the wing blowing through your ears, and peace and tranquility of the Himalayas.
                        </p>
                        <h4>Trained Guides</h4>
                        <p>Kesar Singh, from Moldhar village, is a trained and experience nature guide, who specializes in birds, butterflies and trekking. He is currently the lead resource person for the CEDAR/Titli Trust 24 month nature guide-training program in the Mussoorie landscape.</p>
                        <p>Devalsari Titli Utsav…The society holds the Devalsari Tilti Utsav every year in the summer months of April to June. Three butterfly and moth meets have been held at Devalsari so far.</p>
                        <p>Residential school programs: Numerous schools such as Welham Girls School, Doon School and RIMC have come to Devalsari for 3-5 day residential programs.</p>
                        
                    </div>

                    <div className="col-lg-6">
                        <div className="video-area style--two mb-50 mb-lg-0">
                        <img
                            src="assets\img\about\Ecotourism.jpg"
                            data-rjs={2}
                            alt="Ecotoursim at Devalsari"
                            data-rjs-processed="true"
                            width={540}
                            height={500}
                        
                        />                    
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Ecotourism
