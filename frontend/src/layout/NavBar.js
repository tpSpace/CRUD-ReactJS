import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
 const  NavBar= () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Fullstack Application</Link>
        
        <Link className="btn btn-outline-light " to="/addusers">Add user</Link>
      
      </div>
  </nav>
  )
}

export default NavBar;
