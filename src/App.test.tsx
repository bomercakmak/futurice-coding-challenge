import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import EarthquakeDetails from "./pages/EarthquakeDetails/EarthquakeDetails";

it("Footer should have my name.", () => {
  render(
    <Router>
      <Footer />
    </Router>
  );
  const linkElement = screen.getByText(/Bahadir/);
  expect(linkElement).toBeVisible();
});

it("Coordinates should be visible.", () => {
  render(
    <Router>
      <EarthquakeDetails />
    </Router>
  );
  const linkElement = screen.getByText(/Coordinates/);
  expect(linkElement).toBeVisible();
});

it("Navbar should have title.", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  const linkElement = screen.getByText(/Recent Earthquakes/);
  expect(linkElement).toBeInTheDocument();
});

it("Navbar should have button visible.", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  const linkElement = screen.getByText(/Home/);
  expect(linkElement).toBeVisible();
});
