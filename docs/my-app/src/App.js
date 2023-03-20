// import logo from './logo.svg';

import Navbar from "./components/Navbar";
import "./App.css";
import Join from "./components/Join";
import {Routes, Route} from 'react-router-dom'

export default function App()  {
    return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route>
            <Route path="/events"></Route>
          </Route>
        </Routes>
        <Join/>
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


