import React, { ReactElement } from "react";

interface Props {}
const StoryData = [
  {
    id:1,
    imagePath:'/assets/img/mandirnew.jpg',
    content: <> <p style={{textAlign:"justify"}}>  <h3>The Famous Shiva Temple</h3>

    The famous Shiva Temple at Devalsari, is said to have been built in the 1600’s, is surrounded by tall deodar trees. Six hundred years ago, the area had no deodar forests but was used to grow Jowari. The land belonged to Pujaldi, Bangseel, Kinsu and Theek villages. 
    
</p> </>
  },
  {
    id:2,
    imagePath:'/assets/img/culture/indian-farmer.jpg',
    content: <p style={{textAlign:"justify"}}>
  At one time, the legend goes that the chowkidar met a sadhu. 
  The sadhu said “I need a place to build a kutiya (small hut) and I need to make it today.” 
  It was in the month of September and Jowari was ripening in the fields. 
  Chowkidar dealt harshly with the sadhu and turned down the request.  
  Sadhu then got angry and said that by tomorrow I will convert your Jowari to Devari (Deodar) and he left. 
    </p>
  },
  {
    id:3,
    imagePath:'/assets/img/culture/oaktree.jpg',
    content: <p  style={{textAlign:"justify"}}>
        The next morning when the chowkidar came to the land, the entire land had changed. The Jowari had changed to Devari. A shivling, some idols and an oak tree had suddenly appeared in the middle of the land. 
When people found this, the people in those days were too religious and wanted to make a temple there. However the temple was never built. 
    </p>
  },
  {
    id:4,
    imagePath:'/assets/img/culture/lordshiva.jpg',
    content: <p  style={{textAlign:"justify"}}>
        One of the village folks had a dream in which the sadhu said 
        “ I am Lord Shiva and this place’s name will be Devalsari. 
        Till the time I am here, Deodar will always be there and conserved. 
        At the right time a temple will be built here. 
        The temple will be built in the name of 
        <b> Koneshwar Mahadeo</b>.”  
<br />
<br />
Two hundred years later, Lord Shiva appeared in another dream.
Village Kinsu’s cow used to put its milk at the shivling. 
People used to wonder where the milk was going in the morning and evening. 
The cow’s owner hit the cow and it ran away to the Mandir. The man took his axe and hit the shivling and broke it. The axe bounced back and hit his head and got fixed there. The man walked back with the axe in his head and on removing the axe from his head at night, he died on the spot. 

    </p>
  },
  {
    id:5,
    imagePath:'/assets/img/culture/villagekinsu.png',
    content: <p  style={{textAlign:"justify"}}>
        People felt Lord Shiva was angry and decided to make a Mandir. 
Lord Shiva again appeared in another one’s dream. 
Lord Shiva said that a temple will be built as well as my doli. 
The doli will go to all villages other than village Kinsu. 
If it goes to Kinsu, then the village will face destruction. 
Nature’s wrath will befall the village. 
    </p>
  },
  {
    id:6,
    imagePath:'/assets/img/mandir.JPG',
    content: <p  style={{textAlign:"justify"}}>
        Hence a temple was built here. The miracle-Baikal ki jhadi: grows locally. 
        Normally a bush, but here it grew into a tree with 60 wood pieces. 
        These pieces were used to make the important parts of the temples including the entrance, and the location where the idol was placed. 
        The rest of the temple used deodar in its construction. 
        The yellow tilak used in the Mandir is from deodar’s flowers. 
        <br />
        <br />
The temple’s other woodwork, which had rotted, was refurbished in 2014.
    </p>
  },
  {
    id:7,
    imagePath:'/assets/img/culture/mahadev.png',
    content: <p  style={{textAlign:"justify"}}>
        One year the festival (Kaalratri festival held in September, attended by 12-15000 people every year) is held at Bangseel and the other year at Devalsari. Food for the festival for Devalsari is managed by Pujaldi gaon and at Bangseel by the same village folks. 
        <br />
        <br />
In Jaunpur, most temples are Nag Devta, but Devalsari has the temple of Lord Shiva.

    </p>
  },
]

function Culture({}: Props): ReactElement {
  
  return (
    <>
    <section id="culture&festival" className="pt-50 " style={{backgroundImage: 'url("assets/img/section-pattern/page-title.png")'}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-title text-center">
              <h2>Local Culture</h2>
              <p style={{textAlign:"left"}}>
                  Jaunpur is part of the Tehri Garhwal region in Uttarakhand. Jaunpuris have a long and old tradition of food, clothes, language and culture. The Jaunpuris are known to welcome guests and treat them really well. They are known to have small and big festivals throughout the year. The Jaunpuris are famous for their local dances (raansu, tandi). 
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="">
        <div className="container">
           
           {StoryData.map((story)=>{
             return(
              <div key={story.id} className="row align-items-center justify-content-center pb-20">
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

export default Culture;
