import React from "react";
import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import Badge from "./components/Badge/Badge";
import Intro from "./components/Introduction/Intro";
import FeaturedSpeakers from "./components/FeaturedSpeakers/FeaturedSpeakers";
import Specification from "./components/Specifications/Specification";
import Tickets from "./components/Tickets/Tickets";
import OfferSection from "./components/OfferSection/OfferSection";
import Event from "./components/Event/Event";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <MainSection />
      <Badge />
      <Intro />
      <FeaturedSpeakers/>
      <Specification/>
      <Tickets/>
      <OfferSection/>
      <Event/>
      <Footer/>
    </div>
  );
}
