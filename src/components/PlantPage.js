import { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { v4 as uuidv4 } from "uuid";

function PlantPage() {
  const [plants, setPlants] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((d) => setPlants(d));
  }, []);

  function handleSearchChange(text) {
    setSearchTerm(text);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    let newPlant = {
      id: uuidv4(),
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value,
    };
    setPlants([...plants, newPlant]);
  }

  let displayPlants = searchTerm
    ? plants.filter((plant) =>
        plant.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : plants;

  return (
    <main>
      <NewPlantForm handleFormSubmit={handleFormSubmit} />
      <Search handleSearchChange={handleSearchChange} />
      {plants ? <PlantList plants={displayPlants} /> : null}
    </main>
  );
}

export default PlantPage;
