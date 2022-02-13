import React, { ReactElement } from "react";
import styles from "./Landing.module.scss";
import Image from "next/image";

interface Props {}
const StoryData = [
  {
    id:1,
    imagePath:'assets/img/GettingThere/derc.JPG',
    content: <> <p style={{textAlign:"justify"}}>          The Devalsari Environment Protection and Technology Development Society was set up to promote conservation and livelihoods
    through ecotourism and bee-keeping in Uttarakhand beginning with the Jaunpur region.
   <br/>In the words of Arun Prasad, the biggest problem in Uttarakhand is “playen” wherein rural populations 
   are abandoning their homes to shift to towns and urban areas abandoning traditional practices of agriculture.
</p> </>
  },
  {
    id:2,
    imagePath:'assets/img/GettingThere/derc.JPG',
    content: <p style={{textAlign:"justify"}}>
      The primary reasons for “playen” are reduced returns from agriculture and livestock, lack of job opportunities in the villages, poor education and health care. 
            The reduced returns from agriculture are driven by increased damage to crops by wildlife (rhesus macaque, langur, wilds pigs), reduced livestock populations leading to reduced soil fertility, 
            reduced availability of good seeds, changing patterns of rainfall and lack of irrigation facilities and finally poor price realizations of agricultural produce.
            <br />
            <p>“Bara Anaj”, the twelve types of food grains that were grown in Uttarakhand earlier meant that other than salt, soap and clothes, no other material had to be purchased from the market. </p> 
    </p>
  },
  {
    id:3,
    imagePath:'assets/img/GettingThere/derc.JPG',
    content: <p p style={{textAlign:"justify"}}>
          Now, people’s aspirations and needs have changed, as well as their dependence on the government for handouts through MNREGA and subsidized food through ration shops.
          <br/>In Uttarakhand, rain-fed agriculture on scattered, small landholdings for subsistence farming is the norm, rather than the exception.The phenomenon of “playen” has resulted in many fields being run over with Lantana and Eupatorium, which in turn has resulted the increased presence of wildlife such as leopards, porcupines and wild pigs near villages, resulting in increased conflict.
    </p>
  },
]

function AboutTheSociety({}: Props): ReactElement {
  
  return (
    <>
    <section id="aboutsociety" className="pt-120 pb-30" style={{backgroundImage: 'url("assets/img/section-pattern/page-title.png")'}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}></h3>
              <h2>About the Society</h2>
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
    </>
  );
}

export default AboutTheSociety;
