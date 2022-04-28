import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Sections/Navigation/Navigation.jsx";
import Hero from './Sections/Hero/Hero.jsx'
import ContactMe from './Sections/ContactMe/ContactMe.jsx'
import Footer from "./Sections/Footer/Footer.jsx";

function App() {
  return (
      <Router>
        <Navigation className={'font-poppins'}/>
        <main className="font-poppins w-screen">
          <Routes>
            <Route path="/" exact element={<Hero />} />
            <Route path="/contactMe" exact element={<ContactMe />} />
            {/* <Route path="/" exact component={""} />
            <Route path="/about" component={""} /> */}
          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;
