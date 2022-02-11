import React, { ReactElement } from 'react'

interface Props {
    
}

function NatureTourism({}: Props): ReactElement {
    return (
        <section id="nature" className="pt-60 pb-60">
        <div className="container">
        <div className="row">
        <div className="col-12">
        <div className="section-title text-center">
             <h3 style={{fontFamily:'Raleway',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}></h3>
                 <h1>
                Nature Tourism
                 </h1>
                    </div>
                </div>
                </div>
                <div className="row align-items-center">
                    
                    <div className="col-lg-6">
                        <h2 className={"mb-20"}> </h2>
                        <p>
                        Devalsari is home to an array of flora and fauna. Some of the area’s biodiversity includes:
                        </p>

                    <h4>Mammals: </h4>
                        <p>Amongst the mammals, the forests of Devalsari are home to the Himalayan Water Shrew, Giant Red Flying Squirrel, Barking Deer, Leopard, Wild Pig, Goral, Black Bear and Otters at the larger streams and rivers.
                        </p>
                        <p>Photographs: Numerous mammal species</p>

                    <h4>Birds:</h4>
                        <p>
                        The special birds that can be seen here include the Fire-capped Tit, Chukor Partridge, Striated Laughing Thrush, Spot-winged and Black-and-Yellow Grosbeak, Black-faced Warbler, Whiskered Yuhina, Golden Bush Robin, Mrs Gould’s Sunbird, Fire-tailed Sunbird and the Fire-breasted Flowerpecker amongst many others. 
                        The partial checklist of birds at Devalsari can be downloaded here (SS to provide checklist). 
                        We would welcome birdwatchers to document the areas avifauna.
                        </p>
                        <p>Photographs: Numerous bird species</p>


                    <h4>Butterflies: </h4>
                        <p>Butterfly specialties at Devalsari include the Siren, Brown Argus, Jewel Fivering, Lepcha Bushbrown, Stately Nawab, Western Courtier, Fawn Hairstreak and the Albocerulean amongst many others.
                            The partial checklist of butterflies at Devalsari can be downloaded here (SS to provide checklist). 
                            We would welcome butterfly watchers to document the area’s butterfly fauna.
                        </p>
                        <p>Photographs: Numerous butterfly species</p>
                        
                    <h4>Moths: </h4>
                        <p> Numerous moth species have been recorded at Devalsari. 
                            The Society can assist in setting up moth screens to observe moth fauna.</p>
                        <p>Photographs: Numerous moth species</p>
                    
                    <h4>Nature trails include</h4>
                        <p>Lungsu nala trail: Devalsari to Lungsu nala (8 km, to and fro)</p>
                        <p>Chiani Khad trail: Devalsari to Chiani Khad: 6 km, to and fro)</p>
                        <p>Chiani Khad trail: Devalsari to Chiani Khad: 6 km, to and fro)</p>
                        <p>Kudiyapa trail: Devalsari- Kudiyapa-Devalsari (12 km, to and fro).</p>
                    
                    <h4>- Trekking</h4>
                        <p>There are numerous trek routes in the Devalsari landscape. 
                            The most famous of these is the trek to Nag Tibba, which is approximately 10 kilometers from Bangsil. 
                            Nag Tibba, at 3048 m, is the highest peak in the area. 
                            With the support of the local youth, the Society will be organised treks to Nag Tibba.
                        </p>

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

export default NatureTourism