import React, { ReactElement } from 'react'
import Head from "next/head";
import Gallery from './../../src/screens/Gallery'
interface Props {
    
}
const meta = {
    title: " Gallery | Devalsari",
    description:"",
    keywords: "Farmers,rural development,Indian farmers,rural economy,mass plantation,environment, innovation, technology, marketing, transformation, development, rural india, green india, climate change, economy, income, inspiration, motivation, volunteering, farmers first, new India, better india, success stories, Happy farmers, Smiling farmers, farmers in india, what do farmers do, farmers meaning, farmers login,importance of farmers, types of farmers, farmers market, farmers finance, help farmers india",
    url: "",
    image: "",
    twitterHandle: "",
  };
  
function index({}: Props): ReactElement {
    return (
        <div>
            <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={meta.image} />
        <meta name="keywords" content={meta.keywords} />
       
      </Head>
            <Gallery/>
        </div>
    )
}

export default index
