import React, { ReactElement } from "react";
import EventData from '../../../data/EventData.json'
interface Props {}

function Events({}: Props): ReactElement {
  return (
    <section className="pt-50 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-title text-center">
              <h2 >Upcoming Events</h2>
            </div>
          </div>
        </div>
        <div className="row project-items grid">
         
         {EventData.map((item)=>{
             return(
                <div className="col-lg-4 grid-item">
                    <div className="single-project-item">
                    <div className="image">
                        <img
                        src={item.imagePath}
                        data-rjs={2}
                        alt=""
                        data-rjs-processed="true"
                        width={540}
                        height={300}
                        style={{borderTopStyle:"solid", borderWidth:"0.4px"}}
                        />
                    </div>

                    <div className="project-body">
                        <h3 style={{fontSize:"20px"}}>
                        <a target="_blank" href={item.URL}>
                        {item.headline}
                        </a>
                        </h3>{" "}
                        <p className="project-meta">
                            Date:<span>{item.date} </span>
                        </p>
                        <p className="project-meta">
                            By:<span>{item.source} </span>
                        </p>
                        <a href={item.URL} target="_blank" className="btn-inline">
                            Register Now
                        </a>
                    </div>
                    </div>
                </div>
          
             )
         })}
          
        </div>

      </div>
    </section>
  );
}

export default Events;
