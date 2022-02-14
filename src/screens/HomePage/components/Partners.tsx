import Image from 'next/image'
import React, { ReactElement } from 'react'
import PartnersData from './../../../data/Partners.json'
import styles from './Partners.module.scss'
interface Props {
    
}

function Parnter({}: Props): ReactElement {
    return (
        <section id="partners" className="pt-40 pb-120 section-pattern bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/price-pattern.png")'}}>
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="section-title text-center">
                    {/* <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Partners</h3> */}
                    <h2>Partner Organisation</h2>
                    <p style={{color:'#000',fontStyle:'italic'}}> </p>
                    </div>
                </div>
                </div>
                <div className="pricing-navtab">
                    <ul className="row nav nav-tabs justify-content-center" role="tablist">
                        
                        {PartnersData.map((partner)=>{
                            return(
                                <li key={partner.id} className="col-lg-3 col-sm-6">
                                    <div className={`text-center ${styles.navLink}`} data-toggle="tab" role="tab">
                                        <img src={partner.imagePath}
                                        alt={partner.name}
                                        style={{marginTop:"100px"}}/>
                                       
                                        <h3 style={{fontSize:"20px",marginTop:"20px"}}>{partner.name}</h3>
                                    </div>
                                   <p style={{textAlign:"justify",paddingTop:"20px"}}>
                                       {partner.description}
                                       
                                   </p>
                                </li>
                                
                            )
                        })}
                        
                    </ul>
                    
                </div>
            </div>
        </section>

    )
}

export default Parnter
