import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  let plantsDisplay = plants.map((plant) => (
    <PlantCard plant={plant} key={plant.id} />
  ));
  return <ul className="cards">{plantsDisplay}</ul>;
}

export default PlantList;
