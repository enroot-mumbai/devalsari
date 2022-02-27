import React, { ReactElement } from "react";

interface Props {}
const StoryData = [
  {
    id:1,
    imagePath:'/assets/img/conservation/conservation.jpg',
    content: <> <p style={{textAlign:"justify"}}> 
         <p>
           The Sreedev Suman Titli Park was established by the society in 2016. The society has been protecting the forest in this area resulting in a resurgence of local biodiversity.
           </p>
           <p>
           Conserving fresh water systems in the Aglar Valley
           The Society actively works towards conservation of freshwater systems in the landscape. 
           The threats are many: use of bleaching powder and electricity to kill fish, pollution of the water, and killing of other fresh water biodiversity such as amphibians along with the fish.
           </p>  
</p> </>
  },
  {
    id:2,
    imagePath:'/assets/img/conservation/education.jpg',
    content: <p style={{textAlign:"justify"}}>
     <p>
           The Society’s efforts include
           </p>
           <ul className="list-unstyled list-check">
               <li>
                    <i className="fa fa-check" aria-hidden="true" /> 
                    - Education of people on the need to preserve the Himalayan riverine systems. The Devalsari Society has supported a school education program at Nainbagh and Thatyud for a period of 2017-2019, working in 10 schools to education and make local children aware of nature conservation.
               </li>
               <li>
                       <i className="fa fa-check" aria-hidden="true" /> 
                       - Stopping of fishing through the use of bleaching powder and electric current
               </li>
           </ul>
           <br />
        
    </p>
  }, 
  {
    id:3,
    imagePath:'/assets/img/conservation/fishing.jpg',
    content: <p  style={{textAlign:"justify"}}>
  
  In this landscape, the Maun mela and the Chr Maun, are festivals during which fish are hunted using traditional plat powder called Timur (or Timru) or Maun. During these festivals, Maun and Chor Maun, fish are killed rampantly along with other biodiversity. 
  The society is working to create awareness about the adverse effects of the Maun mela.
  </p> 
  },
  {
    id:4,
    imagePath:'/assets/img/about/aboutus.jpg',
    content: <p  style={{textAlign:"justify"}}>
       <h4>Hunting:</h4>
                <p>
                The society works with the village community and schools to create awareness about the need to stop hunting of wild animals. The Society also supports the forest department by reporting illegal hunting in the villages.
                </p>
    </p>
  },
  {
    id:5,
    imagePath:'/assets/img/conservation/education1.jpg',
    content: <p  style={{textAlign:"justify"}}>
   <h4>School education program</h4>
                <p>The Society regularly conducts nature and environment education programs in schools in the area. 
                    Since 2010, the Society, supported by Titli Trust has been running a rural schools conservation education program in multiple locations.
                </p>
    </p>
  },
  {
    id:6,
    imagePath:'/assets/img/conservation/plantations.jpg',
    content: <p  style={{textAlign:"justify"}}>
     
     <h4>Plantations:</h4>
                <p>The Society is involved in several tree plantations program with support from the Uttarakhand Forest Department.
                </p>
                 
    </p>
  },
]

function Conservation({}: Props): ReactElement {
  
  return (
    <>
    <section id="conservation" className="pt-110 pb-30" style={{backgroundImage: 'url("assets/img/section-pattern/page-title.png")'}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>Conservation at Devalsari</h2>
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

export default Conservation;
