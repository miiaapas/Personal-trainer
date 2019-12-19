import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigator = () => {
    return(
   
        <nav className="navbar" expand="lg" bg ="light">
        <NavLink className="navbar-brand" style={{textDecoration:'none'}}to ="/" >Personal Trainer</NavLink>        
        <div className="collapsenavbar-collapse" id ="navbarSupportedContent">
        <ul className="navbar-navmr-auto">
            <li className="nav -itemactive">
            <NavLink className="nav-link"style={{textDecoration:'none'}}to="/customer"  >Customers</NavLink>
            </li>
            <li className="nav -item">
            <NavLink className="nav-link"style={{textDecoration:'none'}}to="/training">Trainings</NavLink>
            </li>
            <li className="nav -item">
            <NavLink className="nav-link"style={{textDecoration:'none'}}to="/calendar">Calendar</NavLink>
            </li>
            </ul >

        </div>
        </nav>
       
        
    )

}
export default Navigator;