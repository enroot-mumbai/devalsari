import Head from "next/head";
import React, { ReactElement } from "react";
import BeeKeeping from "../src/screens/Beekeeping";
import Bees from "../src/screens/Beekeeping/components/beekeeping";
import Beekeeping from "../src/screens/HomePage/components/Beekeeping";

interface Props {}

const meta = {
    title: "BeeKeeping | Devalsari",
    description:"",
    keywords: "bees,rural development,Indian farmers,rural economy,mass plantation,environment, innovation, technology, marketing, transformation, development, rural india, green india, climate change, economy, income, inspiration, motivation, volunteering, farmers first, new India, better india, success stories, Happy farmers, Smiling farmers, farmers in india, what do farmers do, farmers meaning, farmers login,importance of farmers, types of farmers, farmers market, farmers finance, help farmers india",
    url: "",
    image: "",
    twitterHandle: "",
  };

function Beekeepingfull({ }: Props): ReactElement {
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
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:site" content={meta.twitterHandle} />
                <meta name="twitter:url" content={meta.url} />
                <meta name="twitter:description" content={meta.description} />
            </Head>
            <BeeKeeping/>
        </div>
    );
}

export default Beekeepingfull;