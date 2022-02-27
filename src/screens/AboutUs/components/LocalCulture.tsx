import React, { ReactElement } from 'react'

interface Props {
    
}

function LocalCulture({}: Props): ReactElement {
    return (
        <section id="culture" className="pt-50 pb-30">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="section-title text-center">
                    <h3 style={{
                        fontFamily:'Raleway',
                        fontWeight:'bolder',
                        letterSpacing:1.3,
                        fontSize:'36px'}}>
                            </h3>
                            <h2>Local Culture</h2>
                  
                    </div>
                </div>
                </div>
                <div className="row align-items-center text-justify textmt-20" >
                    
                <div className="col-lg-6 ">
                        <div className=" mb-50 mb-lg-0">
                        <img
                            src="/assets/img/mandirnew.jpg"
                            data-rjs={2}
                            alt="Mandir"
                            data-rjs-processed="true"
                            width={540}
                            height={500}
                            style={{borderRadius:"10px"}}
                        
                        />                    
                        </div>
                    </div>

                    <div className="col-lg-6 textmt-50" >

<p>
History: Jaunpur is part of the Tehri Garhwal region in Uttarakhand. Jaunpuris have a long and old tradition of food, clothes, language and culture. The Jaunpuris are known to welcome guests and treat them really well. They are known to have small and big festivals throughout the year. The Jaunpuris are famous for their local dances (raansu, tandi). 
</p>
<br />
                        <h3 className={"mb-20"} > The famous Shiva Temple</h3>
                        <p>
The famous Shiva Temple at Devalsari, is said to have been built in the 1600’s, is surrounded by tall deodar trees. Six hundred years ago, the area had no deodar forests but was used to grow Jowari. The land belonged to Pujaldi, Bangseel, Kinsu and Theek villages.
                        </p>


                      <div className="button1">
                      <div className="button">
                 <a href="/culture"
                    className="btn"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "fit-content",
                        paddingInline:"10px",
                        marginTop:"20px",
                        textTransform:"capitalize",
                        }}>
            <span>Read More</span>
             </a>
        </div>
        </div>
                    </div>

                  

                </div>
            </div>
        </section>
    )
}

export default LocalCulture
