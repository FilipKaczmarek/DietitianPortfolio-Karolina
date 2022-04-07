import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Sections/Navigation/Navigation";

function App() {
  return (
      <Router>
        <Navigation />
        <main>
          <Routes>
            {/* <Route path="/" exact component={""} />
            <Route path="/about" component={""} /> */}
          </Routes>
        </main>
      </Router>
  );
}

export default App;
