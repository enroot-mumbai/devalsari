import React, { ReactElement } from 'react'

interface Props {}
const StoryData = [
    {
      id:1,
      imagePath:'/assets/img/about/tourism.jpg',
      content: <> <p style={{textAlign:"justify"}}>  The Society can offer ecotourism packages for nature tourism and treks to Nag Tibba. Trained nature and trekking guides are available to conduct these activities. </p>
     <p style={{textAlign:"justify"}}><b>Nature tourism: </b>More than 2,000 nature lovers have visited Devalsari in the last few years, to enjoy the area’s forests, the birds and butterflies, the wing blowing through your ears, and peace and tranquility of the Himalayas.</p>
   </>
    },
    {
      id:2,
      imagePath:'/assets/img/about/guides.jpg',
      content: <p style={{textAlign:"justify"}}> <b>Trained guides: </b>
      Kesar Singh, from Moldhar village, is a trained and experience nature guide, who specializes in birds, butterflies and trekking. He is currently the lead resource person for the CEDAR/Titli Trust 24 month nature guide-training program in the Mussoorie landscape.
      </p>
    },
    {
      id:3,
      imagePath:'/assets/img/about/titli.jpg',
      content: <p style={{textAlign:"justify"}}> <b>Devalsari Titli Utsav: </b>
      The society holds the Devalsari Tilti Utsav every year in the summer months of April to June. Three butterfly and moth meets have been held at Devalsari so far. 
      </p>
    },
    {
        id:4,
        imagePath:'/assets/img/about/school.jpg',
        content: <p style={{textAlign:"justify"}}> <b>Residential school programs: </b>
Numerous schools such as Welham Girls School, Doon School and RIMC have come to Devalsari for 3-5 day residential programs.         </p>
      },
  ]

  function Ecotourism({}: Props): ReactElement {
  
    return (
      <>
      <section id="aboutsociety" className="pt-130 pb-30 textmt-50" style={{backgroundImage: 'url("assets/img/section-pattern/page-title.png")'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}></h3>
                <h2>Ecotourism</h2>
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
                  <div className="col-lg-6 textmt-50">
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
  
                  <div className="col-lg-6">
                    <div className="project-details">          
                      <div className="row justify-content-center">
                        <div className="col-lg-12">
                          <div className="project-details-content textmt-20">
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
  
  export default Ecotourism;
