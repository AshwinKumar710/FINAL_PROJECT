import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <nav>
      <div className="logo">Event Manager</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar1;