import React, { ReactElement } from 'react'

interface Props {}
const StoryData = [
    {
      id:1,
      imagePath:'/assets/img/about/mammals.jpg',
      content: <> <p style={{textAlign:"justify"}}>  
       </p>
     <p style={{textAlign:"justify"}}><b>Mammals: </b>     Amongst the mammals, the forests of Devalsari are home to the Himalayan Water Shrew, Giant Red Flying Squirrel, Barking Deer, Leopard, Wild Pig, Goral, Black Bear and Otters at the larger streams and rivers.
</p>
   </>
    },
    {
      id:2,
      imagePath:'/assets/img/about/bird.jpg',
      content: <p style={{textAlign:"justify"}}> <b>Birds: </b>
 The special birds that can be seen here include the Fire-capped Tit, Chukor Partridge, Striated Laughing Thrush, Spot-winged and Black-and-Yellow Grosbeak, Black-faced Warbler, Whiskered Yuhina, Golden Bush Robin, Mrs Gould’s Sunbird, Fire-tailed Sunbird and the Fire-breasted Flowerpecker amongst many others. 
                       <br />  The partial checklist of birds at Devalsari can be downloaded 
                       <a href="https://drive.google.com/file/d/1Lm-RFjLTi9cnjQj0i6KKocTweOiYOs7u/view?usp=sharing" target="_blank" style={{color:"blue",}}> here. </a> 
                      <br />   We would welcome birdwatchers to document the areas avifauna.
      </p>
    },
    {
      id:3,
      imagePath:'/assets/img/about/butterfly.jpg',
      content: <p style={{textAlign:"justify"}}> <b>Butterflies:  </b>
 Butterfly specialties at Devalsari include the Siren, Brown Argus, Jewel Fivering, Lepcha Bushbrown, Stately Nawab, Western Courtier, Fawn Hairstreak and the Albocerulean amongst many others.
                      <br />       The partial checklist of butterflies at Devalsari can be downloaded
                      <a href="https://drive.google.com/file/d/1jj1w9ab74RU2vwEYUPi1XoSJUyai8GTy/view?usp=sharing" target="_blank" style={{color:"blue",}}> here. </a>  
                       <br />     We would welcome butterfly watchers to document the area’s butterfly fauna.
      </p>
    },
    {
        id:4,
        imagePath:'/assets/img/about/moth.jpg',
        content: <p style={{textAlign:"justify"}}> <b>Moths: </b>
        Numerous moth species have been recorded at Devalsari. 
                            The Society can assist in setting up moth screens to observe moth fauna.
                            </p>
      },
  ]

  function NatureTourism({}: Props): ReactElement {
  
    return (
      <>
      <section id="nature" className="pt-110 pb-30" style={{backgroundImage: 'url("assets/img/section-pattern/page-title.png")'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}></h3>
                <h2>Nature Tourism</h2> 
                <p style={{textAlign:"center"}}>Devalsari is home to an array of flora and fauna. Some of the area’s biodiversity includes:</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="pb-60">
          <div className="container">
             
             {StoryData.map((story)=>{
               return(
                <div key={story.id} className="row align-items-center justify-content-center pb-40">
                  <div className="col-lg-6 textmt-20">
                    <div className="video-area style--two mb-50 mb-lg-0">
                      <img
                        src={story.imagePath}
                        data-rjs={2}
                        alt=""
                        data-rjs-processed="true"
                        width={540}
                        height={500}
                      />                      
                    </div>
                  </div>
  
                  <div className="col-lg-6 textmt-20">
                    <div className="project-details">          
                      <div className="row justify-content-center">
                        <div className="col-lg-12">
                          <div className="project-details-content">
                            {story.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
               )
             })}
              
  
          </div>
        </section>
      </>
    );
  }
  
  export default NatureTourism;


 


        


                        
                    
                    
//                     <h4>Nature trails include</h4>
//                         <p>Lungsu nala trail: Devalsari to Lungsu nala (8 km, to and fro)</p>
//                         <p>Chiani Khad trail: Devalsari to Chiani Khad: 6 km, to and fro)</p>
//                         <p>Chiani Khad trail: Devalsari to Chiani Khad: 6 km, to and fro)</p>
//                         <p>Kudiyapa trail: Devalsari- Kudiyapa-Devalsari (12 km, to and fro).</p>
                    
//                     <h4>- Trekking</h4>
//                         <p>There are numerous trek routes in the Devalsari landscape. 
//                             The most famous of these is the trek to Nag Tibba, which is approximately 10 kilometers from Bangsil. 
//                             Nag Tibba, at 3048 m, is the highest peak in the area. 
//                             With the support of the local youth, the Society will be organised treks to Nag Tibba.
//                         </p>

//             </div>

//         <div className="col-lg-6">
//             <div className="video-area style--two mb-50 mb-lg-0">
//                  <img
//                      src="assets\img\about\Ecotourism.jpg"
//                             data-rjs={2}
//                             alt="Ecotoursim at Devalsari"
//                             data-rjs-processed="true"
//                             width={540}
//                         height={500}
//                  />                    
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default NatureTourism