// import logo from './logo.svg';

import Navbar from "./components/Navbar";
import "./App.css";
import Join from "./components/Join";
import Register from "./components/Register";
import Events from "./components/Events";
import About from "./components/About";
<<<<<<< HEAD
import Courses from "./components/Courses";
=======
import Faq from "./components/Faq";
>>>>>>> d7b27edbf98f94a78357551ed1af354da70ea6eb
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
      component = < About/>
      break
      
    case "/courses":
      component = < Courses/>
      break

    case "/faq":
      component = < Faq/>
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


