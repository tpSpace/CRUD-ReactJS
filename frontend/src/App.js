import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import Addusers from './users/AddUser';
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
 
  <div className="App">
    <Router>
      <NavBar/>
      <Routes>
        <Route exec path="/" element={<Home/>}/>
        <Route exec path="/addusers" element={<Addusers/>}/>
        <Route exec path="/edituser/:id" element={<EditUser/>}/>
        <Route exec path="/viewuser/:id" element={<ViewUser/>}/>
      </Routes>
    </Router>
    
   </div>

  )
}

export default App;
