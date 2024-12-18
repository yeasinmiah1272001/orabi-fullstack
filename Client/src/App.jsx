import React from "react";
import Banner from "./Componets/Banner";
import SelesBanner from "./Componets/SelesBanner";
import ProductOfYear from "./Componets/ProductOfYear";
import NewArrival from "./Componets/NewArrival";
import CategorySection from "./Componets/CategorySection";
import Collection from "./Componets/Collection";
import SpecialCollection from "./Componets/SpecialCollection";

const App = () => {
  return (
    <main className="">
      <Banner />
      <SpecialCollection />

      <ProductOfYear />
      <CategorySection />
      <NewArrival />
      <Collection />
      <SelesBanner />
    </main>
  );
};

export default App;
