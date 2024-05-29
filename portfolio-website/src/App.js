import './App.css';
import { Outlet } from 'react-router-dom';
import React from 'react';

function App() {
  console.log("Hello World")
  
  return (
    <Outlet/>
  );
}

export default App;
