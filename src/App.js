import './App.css';
import React, { useState } from 'react'
import Slider from "./components/Slider"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Slider color="red"/>
    </div>
  );
}

export default App;
