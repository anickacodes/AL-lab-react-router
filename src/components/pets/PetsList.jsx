import React, { useState } from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const { kind } = useParams();

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  const filteredPets = kind === "all" ? pets : kind === "cats" ? cats : kind === "dogs" ? dogs : pets;

  return (
    <section className="pets-wrapper">
      <PetsListNav
        cats={cats}
        dogs={dogs}
        pets={pets}
        filteredPets={filteredPets}
      />
      <section className="pets-list">
    

        {filteredPets.map((pet) => (
          <Pet key={pet.id} kind={pet.kind.toLowerCase()} pet={pet} />
          // console.log(pet)
        ))}
      </section>
    </section>
  );
};

export default PetsList;
