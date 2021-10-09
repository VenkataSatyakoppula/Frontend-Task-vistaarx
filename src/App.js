import React from 'react'
import './App.css'
import ReatilerCard from './components/retailer_card'
function App() {
  return (
    <div className="Container">
      <p className="line"><span>More suggestions for you</span></p>
        <ReatilerCard></ReatilerCard>
    </div>
  );
}

export default App;
