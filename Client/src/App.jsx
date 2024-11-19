import React from "react";
import Banner from "./Componets/Banner";
import SelesBanner from "./Componets/SelesBanner";
import ProductOfYear from "./Componets/ProductOfYear";
import NewArrival from "./Componets/NewArrival";
import CategorySection from "./Componets/CategorySection";

const App = () => {
  return (
    <main className="">
      <Banner />

      <SelesBanner />

      <ProductOfYear />
      <CategorySection />
      <NewArrival />
    </main>
  );
};

export default App;
