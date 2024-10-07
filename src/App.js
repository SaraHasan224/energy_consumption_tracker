import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageLoader } from "./components";
import "./assets/sass/app.scss";
import ROUTES from "./routes";

function App() {
  return (
    <>
      <PageLoader />
      <Router>
        <Routes>
          {ROUTES.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>

      </Router>
    </>
  );
}

export default App;
