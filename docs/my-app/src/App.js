// import logo from './logo.svg';

import Navbar from "./components/Navbar";
import "./App.css";
import Join from "./components/Join";
import Register from "./components/Register";
import Events from "./components/Events";
import About from "./components/About";

import Courses from "./components/Courses";

import Faq from "./components/Faq";

import Team from "./components/Team";

import {Routes, Route} from 'react-router-dom'
import Register2 from "./components/Register2";
import Register3 from "./components/Register3";
import AboutFrench from "./components/AboutFrench";
import TeamFrench from "./components/TeamFrench";
import JoinFrench from "./components/JoinFrench";
import EventsFrench from "./components/EventsFrench";




export default function App()  {
  let component

  switch (window.location.pathname) {
    
    case "/":
      component = < Join />
      break

    case "/register":
      component = < Register />
      break 

    case "/register2":
      component = < Register2 />
      break
      
    case "/register3":
      component = < Register3 />
      break   

    case "/events":
      component = < Events />
      break  

    case "/about":
      component = < About/>
      break
      
    case "/courses":
      component = < Courses/>
      break

    case "/faq":
      component = < Faq/>
      break  

    case "/team":
      component = < Team/>
      break  

    case "/joinFr":
      component = < JoinFrench/>
      break 
      
    case "/aboutFr":
      component = < AboutFrench/>
      break  

    case "/teamFr":
      component = < TeamFrench/>
      break 

    case "/eventsFr":
      component = < EventsFrench/>
      break 
  }  
  
  return (
      <div className="App">
        <Navbar/>
        {component}
        
        <body/>
      </div>
    );
  
  }

// function App() {
//   return (
//     <div className="App">
//       <h1>CESAUO</h1>
//     </div>
//   );
// }


