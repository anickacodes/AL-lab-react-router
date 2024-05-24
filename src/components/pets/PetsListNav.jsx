import React from "react";
import "./PetsListNav.css";
import { useNavigate } from "react-router-dom";


export const PetsListNav = ({ cats, dogs }) => {

  const navigate = useNavigate()
  return (
    <nav className="pets-nav">
      <ul>
      <li>
          <a href="/pets/all">See All Pets ({cats.length + dogs.length})</a>
        
        </li>
        <li>
          <a href="/pets/cats">See All Cats ({cats.length})</a>
          {/* can leave this as a tag and use usenavigate hook  */}
        </li>
        <li>
          <a href="/pets/dogs">See All Dogs ({dogs.length})</a>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
