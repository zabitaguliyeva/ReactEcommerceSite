import React from "react";
import { HomeHero } from "./sections/HomeHero";

import { Article } from "./sections/Article";
import { HomeReview } from "./sections/HomeReview";
import { LarqProducts } from "./sections/LarqProducts";
import { HomeMagazine } from "./sections/HomeMagazine";

import { HomeMission } from "./sections/HomeMission";
import { NowTrending } from "./sections/NowTrending";


const Home = () => {
  return (
    <main>
      <HomeHero />
      <HomeReview />
      <LarqProducts />
      <Article />
      <NowTrending/>
      <HomeMission />
      <HomeMagazine />
     
    </main>
  );
};

export default Home;
