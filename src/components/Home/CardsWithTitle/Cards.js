import TitlewithButton from "@/components/CommonLayouts/TitlewithButton";
import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <section className="container">
      <TitlewithButton text="Learn More" />
      <div className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4 gap-x-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Cards;
