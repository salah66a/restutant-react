import React from 'react';
import './App.css';
import HomeSection from "./Sections/Heme Section/homeSection"
import AboutSection from './Sections/About section/aboutSection';
import SpecialSection from "./Sections/Spetial Section/specialSection"
import Menu from "./Sections/Menu/menu"
import Offer from './Sections/Offer/offer';
import Cooking from './Sections/Cooking/cookng';
import Reviews from './Sections/Reviews/reviews';
import Statistics from './Sections/Statistics/statistics';

function App() {
  return (
    <div className="App">
      <HomeSection/>
      <AboutSection/>
      <SpecialSection/>
      <Menu/>
      <Offer/>
      <Cooking/>
      <Statistics/>
      <Reviews/>
    </div>
  );
}

export default App;
