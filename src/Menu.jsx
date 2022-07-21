import React from 'react'
import {NavLink} from 'react-router-dom';
import './App.css';

function Menu() {
  return (
    <>
    <div className='menu_div'>
      <NavLink   to='/'>DigitalClock</NavLink>
      <NavLink   to='/events'>Events</NavLink>
      <NavLink   to='/formintro'>FormIntro</NavLink>
      <NavLink   to='/loginform'>LoginForm</NavLink>
      <NavLink   to='/complexform'>ComplexForm</NavLink>
      <NavLink   to='/todolist'>ToDoList</NavLink>
      <NavLink   to='/materialui'>MaterialUI</NavLink>
      <NavLink   to='/accordian'>Accordian</NavLink> 
      <NavLink   to='/covidtracker'>CovidTracker</NavLink>     
     </div>      
    </>
  )
}

export default Menu;