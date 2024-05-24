import React from "react";
import { useState } from "react";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import Footer from "./components/common/Footer";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
    <Router>
      <div className="wrapper">
        <Nav />
        
        <Routes>
          <Route
            path="/"
            element={<Home employees={employees} owners={owners} pets={pets} />}
          />
          <Route path="/staff" element={<StaffList employees={employees} />} />
          <Route path="/pets" element={<PetsList pets={pets} />} />
          <Route path="/pets/:kind" element={<PetsList pets={pets}/> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
