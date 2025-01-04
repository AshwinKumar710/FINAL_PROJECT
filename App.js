
/*import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Completetasks from './pages/Completetasks';
import ALLtasks from './pages/ALLtasks';
import Incompletetask from './pages/Incompletetask';
import Importanttasks from './pages/Importanttasks';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route index element={<ALLtasks/>}/>
          <Route path='/completetasks' element={<Completetasks/>}/>
          <Route path='/importanttasks' element={<Importanttasks/>}/>
          <Route path='/incompletetask' element={<Incompletetask/>}/>
          </Route>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}*/
/*import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import navbar from './components/navbar';
import "./App.css";
import Form from "./components/Form";
import View from "./components/View";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Product List</Link>
            </li>
            <li>
              <Link to="/Form">Add Product</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Product List</h1>
                <View data={data} />
              </div>
            }
          />
          
          
        </Routes>
        <navbar/>
      <Routes>
        <Route path="/View" element={<View/>} />
        <Route path="/Form" element={<Form/>} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;*/

/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar1 from './components/Navbar';
import Login1 from './pages/Login1';
import Home1 from './components/Home1';
import Profiledetails from './components/Profiledetails';
import Admindashboard from './components/Admindashboard';



function App() {
   return (
       <Router>
           <Navbar />
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Login1" element={<Login />} />
               <Route path="/Profiledetails" element={<Profile />} />
               <Route path="/Admindashboard" element={<AdminDashboard />} />
           </Routes>
       </Router>
   );
}

export default App;*/

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar1";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Eventdetails from "./components/Eventdetails";
import Userprofile from "./components/Userprofile";
import Admindashboard from "./components/Admindashboard";

const App = () => {
  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/event/:id" element={<Eventdetails />} />
        <Route path="/profile" element={<Userprofile />} />
        <Route path="/admin" element={<Admindashboard />} />
      </Routes>
    </Router>
  );
};

export default App;