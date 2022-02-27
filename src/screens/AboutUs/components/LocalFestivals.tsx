import React, { ReactElement } from 'react'

interface Props {
    
}

function LocalFestival({}: Props): ReactElement {
    return (
        <section id="beekeeping" className="pt-50 pb-30">
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
                            <h2>Local Festivals</h2>
                  
                    </div>
                </div>
                </div>
                <div className="row align-items-center text-justify textmt-20" >
                    
                    <div className="col-lg-6 textmt-50" >
                        <h2 className={"mb-20"} > </h2>
                        <p>
                        Local festivals in Devalsari: Baisakhi in April and Buddhi Bagwali (Old Deepawali), celebrated one month after Deepawali.
                        </p>


                      <div className="button1">
                      <div className="button">
                 <a href="/"
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

                    <div className="col-lg-6 box2">
                        <div className=" mb-50 mb-lg-0">
                        <img
                            src="assets\img\home\beekeeping.png"
                            data-rjs={2}
                            alt=""
                            data-rjs-processed="true"
                            width={540}
                            height={500}
                            style={{borderRadius:"10px"}}
                        
                        />                    
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default LocalFestival
