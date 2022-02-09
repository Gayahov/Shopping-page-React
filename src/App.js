import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import FirstSectionContent from './Components/FirstSection/FirstSectionContent';
import SecondSection from './Components/SecondSection/SecondSection';
import ThirdSection from './Components/ThirdSection/ThirdSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FirstSectionContent/>
      <SecondSection/>
      <ThirdSection/>
    </div>
  );
}

export default App;
