import React from "react";
import { Routes as Switch, Route, Navigate, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import EarthquakeDetails from "../pages/EarthquakeDetails/EarthquakeDetails";
import Home from "../pages/Home/Home";

const Routes: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <React.Fragment>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/earthquakeDetails/:id"
            element={<EarthquakeDetails />}
          />
          <Route
            path="*"
            element={
              <>
                <h1>404 Page Not Found!</h1>
                <Link to="/home">Go Home</Link>
              </>
            }
          />
        </React.Fragment>
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
