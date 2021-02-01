import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div class = "nav">
         <ul>
         <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/about">About</NavLink></li>
         <li><NavLink to="/contact">Contact</NavLink></li>
         <li><NavLink to="/error">Error</NavLink></li>
         </ul>
       </div>
    );
}
 
export default Navigation;