import React from 'react';
import './App.css';
import FirstSectionContent from './Components/FirstSection/FirstSectionContent';
import SecondSection from './Components/SecondSection/SecondSection';
import ThirdSection from './Components/ThirdSection/ThirdSection';

function App() {
  return (
    <div className="App">
      <FirstSectionContent/>
      <SecondSection/>
      <ThirdSection/>
    </div>
  );
}

export default App;
