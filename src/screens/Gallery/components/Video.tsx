import React, { ReactElement } from 'react'
import Link from "next/link";
import VideosData from '../../../data/Videos.json'

interface Props {

}

function Video({ }: Props): ReactElement {
    return (
        <section className="pt-20 pb-50" id="videos">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Section Title Begin */}
                        <div className="section-title text-center">
                            <h3 style={{ color: "#3f3f3f", fontWeight: 'bolder'}}>Videos</h3>
                            <p> </p>
                        </div>
                        {/* Section Title End */}
                    </div>
                </div>
                
                
                <div className="row">
                    {VideosData.map((video) => {
                        return (
                            <div key={video.id} className=" col-sm-12 col-md-6 col-lg-4 text-center" >
                                <div className="single-service">
                                    <iframe src={video.path} className="content" allowFullScreen frameBorder="0" style={{width:"500px", height:"300px", borderRadius:"5px", }}></iframe>
                                    <h4 style={{padding:"0 12px", paddingBottom:'-20px'}}>{video.title}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
                                
            </div>
        </section>
    )
}

export default Video;
