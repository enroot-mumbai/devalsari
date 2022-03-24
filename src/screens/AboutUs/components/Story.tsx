import React, { ReactElement } from 'react'

interface Props {
    
}
const StoryData = [
  {
    id:1,
    imagePath:'/assets/img/about/.jpg',
    content: <> <p></p></>
  },
  {
    id:2,
    imagePath:'/assets/img/about/.jpg',
    content: <p>

    </p>
  },
  {
    id:3,
    imagePath:'/assets/img/about/mg.jpg',
    content: <p>
      </p>
  },
  {
    id:4,
    imagePath:'/assets/img/WaterTanker.jpg',
    content: <p>
      </p>
  },
  {
    id:5,
    imagePath:'/assets/img/about/village.jpg',
    content: <><p>
        </p></>
  },
  
]
function Story({}: Props): ReactElement {
    return (
        <>
        <section id="story" className="pt-60 ov-hidden" style={{backgroundImage: 'url("assets/img/section-pattern/page-title.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Our Story</h3>
                  <h2>Journey of Nation Building</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
          <section className="pb-60">
            <div className="container">
            {/* <iframe src="https://prezi.com/v/embed/i1hxdotphwvk/" allow="autoplay; fullscreen" style={{width:'100%',borderRadius:'20px',height:'90vh'}}></iframe> */}
               
               {StoryData.map((story)=>{
                 return(
                  <div key={story.id} className="row align-items-center justify-content-center pb-40">
                    <div className="col-lg-6">
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
          <section id="aboutsociety" className="pt-120 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center ">
              <h3
                style={{fontFamily: "Raleway", fontWeight: "bolder", letterSpacing: 1.3, fontSize: "36px", textAlign:"center", }}>                
               
              </h3>{" "}
              <h2> About the Society</h2>            
             </div>
          </div>
        </div>
        <ul className=" list-check text-lg-left row ">
        <div className="col-lg-6">
        <div className="section-title text-justify">
              <p>
              The 
              <a href="#"><b> Devalsari Environment Protection </b></a> and Technology Development Society was set up to promote conservation and livelihoods
               through ecotourism and bee-keeping in Uttarakhand beginning with the Jaunpur region.
              <br/>In the words of Arun Prasad, the biggest problem in Uttarakhand is “palayan” wherein rural populations 
              are abandoning their homes to shift to towns and urban areas abandoning traditional practices of agriculture.
              
               <br/>The primary reasons for “palayan” are reduced returns from agriculture and livestock, lack of job opportunities in the villages, poor education and health care. 
                The reduced returns from agriculture are driven by increased damage to crops by wildlife (rhesus macaque, langur, wilds pigs), reduced livestock populations leading to reduced soil fertility, 
                reduced availability of good seeds, changing patterns of rainfall and lack of irrigation facilities and finally poor price realizations of agricultural produce.
                <br/> “Bara Anaj”, the twelve types of food grains that were grown in Uttarakhand earlier meant that other than salt, soap and clothes, no other material had to be purchased from the market. 
              </p>
              <p>
              Now, people’s aspirations and needs have changed, as well as their dependence on the government for handouts through MNREGA and subsidized food through ration shops.
              <br/>In Uttarakhand, rain-fed agriculture on scattered, small landholdings for subsistence farming is the norm, rather than the exception.The phenomenon of “palayan” has resulted in many fields being run over with Lantana and Eupatorium, which in turn has resulted the increased presence of wildlife such as leopards, porcupines and wild pigs near villages, resulting in increased conflict.
            </p>
            <p>This situation has resulted to increased unemployment and dissatisfaction amongst the youth. The educated youth, in any case, has little interest in continuing traditional agriculture or livestock rearing, and more keen on government jobs as a preferred livelihood. This has lead to a situation that abandoned fields are being sold at throwaway prices to people from outside the State in desperation to raise money for short term needs. </p>
            
            <p>
              While in recent years, better road linkages and improved facilities for health and education offer a beacon of hope; there are still no opportunities for employment. </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="">
              <img
                src="assets\img\GettingThere\derc.JPG"
                data-rjs={2}
                alt="DERC"
                data-rjs-processed="true"
                width={540}
                height={500}
                style ={{borderRadius:"15px",objectFit:"cover",position:"relative",marginTop:"60px"}} />
            </div>
            <div className="">
              <img
                src="assets\img\GettingThere\derc.JPG"
                data-rjs={2}
                alt="DERC"
                data-rjs-processed="true"
                width={540}
                height={500}
                style ={{borderRadius:"15px",objectFit:"cover",position:"relative",marginTop:"60px"}} />
            </div>
            <div className="">
              <img
                src="assets\img\GettingThere\derc.JPG"
                data-rjs={2}
                alt="DERC"
                data-rjs-processed="true"
                width={540}
                height={500}
                style ={{borderRadius:"15px",objectFit:"cover",position:"relative",marginTop:"60px"}} />
            </div>
          </div>
          </ul>
      </div>
    </section>
        </>
    )
}

export default Story
