import React from 'react';
import './App.css';
import HomeSection from "./Sections/Heme Section/homeSection"
import AboutSection from './Sections/About section/aboutSection';
import SpecialSection from "./Sections/Spetial Section/specialSection"
import Menu from "./Sections/Menu/menu"

function App() {
  return (
    <div className="App">
      <HomeSection/>
      <AboutSection/>
      <SpecialSection/>
      <Menu/>
    </div>
  );
}

export default App;
