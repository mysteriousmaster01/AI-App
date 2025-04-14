// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/landingPage/LandingPage";
import AddProperty from "./components/addProperty/AddProperty";
import ViewProperties from "./components/viewProperties/ViewProperties";
import Header from "./components/landingPage/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/view-properties" element={<ViewProperties />} />
      </Routes>
    </Router>
  );
};

export default App;
