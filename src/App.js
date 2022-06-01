import "./App.css";
import React from 'react'
import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";
import Brand from "./components/Brand";


export default function App() {

  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <NewsList darkMode={darkMode}/>
     
      <Brand darkMode={darkMode}/>
    </>
  );
}

