import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import resumePDF from '../docs/Ivan_Jutamulia_Resume.pdf';
import './Nav.css';

const Nav = () => (
  <nav className="nav">
    <div className="nav-inner">
      <Link to="/" className="nav-brand">Ivan Jutamulia</Link>
      <ul className="nav-links">
        <li><NavLink exact to="/aboutme" className="nav-link" activeClassName="active">About Me</NavLink></li>
        <li><NavLink exact to="/work" className="nav-link" activeClassName="active">Work</NavLink></li>
        <li><NavLink exact to="/education" className="nav-link" activeClassName="active">Education</NavLink></li>
        <li><NavLink exact to="/skills" className="nav-link" activeClassName="active">Skills</NavLink></li>
        <li><a className="nav-link" href={resumePDF} target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </div>
  </nav>
);

export default Nav;
