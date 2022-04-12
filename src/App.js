import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Sections/Navigation/Navigation";
import Hero from './Sections/Hero/Hero.jsx'

function App() {
  return (
      <Router>
        <Navigation className={'font-poppins'}/>
        <main className="font-poppins w-screen">
          <Routes>
            <Route path="/" exact element={<Hero />} />
            {/* <Route path="/" exact component={""} />
            <Route path="/about" component={""} /> */}
          </Routes>
        </main>
      </Router>
  );
}

export default App;
