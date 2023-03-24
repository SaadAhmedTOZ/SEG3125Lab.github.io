// import logo from './logo.svg';

import Navbar from "./components/Navbar";
import "./App.css";
import Join from "./components/Join";
import Register from "./components/Register";
import Events from "./components/Events";
import {Routes, Route} from 'react-router-dom'




export default function App()  {
  let component

  switch (window.location.pathname) {
    
    case "/":
      component = < Join />
      break

      case "/register":
        component = < Register />
        break 

    case "/events":
      component = < Events />
      break  

    case "/about":
      //component = < About/>
      break  

    case "/faq":
      //component = < Faq/>
      break  

    case "/team":
      //component = < Team/>
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


