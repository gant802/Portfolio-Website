import './CSS/Home.css';
import './CSS/nav-pages.css';
import { Outlet } from 'react-router-dom';
import React from 'react';
import NavBar from './Components/navbar';



function App() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  );
}

export default App;
