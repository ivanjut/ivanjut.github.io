import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import headshot from '../images/headshot.jpg';
import resumePDF from '../docs/Ivan_Jutamulia_Resume.pdf';

const Home = () => (
  <section className="home">
    <div className="home-grid">
      <div className="home-image-wrap">
        <div className="home-image-glow" aria-hidden="true"></div>
        <img src={headshot} className="home-image" alt="Ivan Jutamulia headshot"/>
      </div>
      <div className="home-text">
        <h1 className="home-title"><span className="home-wave" role="img" aria-label="waving hand">👋</span> Hello! My name is Ivan.</h1>
        <p className="home-description">
          I am a <b>Senior AI Engineer at Genius Sports</b> as part of the GeniusIQ group (formerly Second Spectrum) working on the cutting edge of sports technology.
          I'm originally from Berkeley, CA, and have been based in Boston, MA ever since attending and graduating from MIT with
          a B.S. (2020) and MEng. (2021) in computer science and artificial intelligence.
        </p>
        <p className="home-description">
          I am also an <b>assistant coach for the MIT Men's Varsity Soccer team</b>, having played on the team for four years while I was an undergrad. 
          I help train and mentor the team to improve their skills and performance while navigating the rigors of being an MIT student.
        </p>
        <p className="home-thanks">
          Check out my hobbies, interests, and background to learn more about me. Thanks for visiting my profile!
        </p>
        <div className="home-actions">
          <Link to="/aboutme" className="btn btn-primary">My Interests</Link>
          <Link to="/work" className="btn btn-secondary">My Work</Link>
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">My Resume</a>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
