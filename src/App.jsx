import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./component/Navbar";
import Body from "./component/Body";

function App() {
  
  let [darkMode,setDarkMode] = useState(localStorage.getItem("shivam")==="true");
  const questionbox = [
    "I have 2 apples and 3 oranges, which means I can make a delicious fruit salad.",
    "Today is 12th March, 2025, and the weather forecast says it will rain later.",
    "A rectangle has 4 sides and 4 angles, making it one of the simplest shapes.",
    "The bus arrived at 8:15 AM, just in time for the students to get to school.",
    "There are 24 hours in a day, but sometimes it feels like we need more time.",
    "Room temperature is 22 degree Celcius, which is considered comfortable for most people indoors."
  ];
  useEffect(()=>{localStorage.setItem("shivam",darkMode)},[darkMode]);

 let [best,setBest]=useState(localStorage.getItem("best") || 0)
 

 

  function changeTheme()
  {
    setDarkMode((prev)=>!prev);
  }

  useEffect(()=>{localStorage.setItem("best",best)}, [best]);

  return (
    <>
      <Navbar dabba={darkMode} changeTheme={changeTheme} best={best}/>
      <Body darkMode={darkMode} best={best} setBest={setBest}/>
    </>
  )
}

export default App
