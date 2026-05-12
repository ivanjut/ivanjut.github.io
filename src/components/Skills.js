import React from 'react';
import './Skills.css';

const Skills = () => (
  <section className="section skills">
    <h2 className="section-title">Skills</h2>

    <div className="skills-block">
      <h3 className="subsection-title">Programming:</h3>
      <ul className="skills-list">
        <li><b>Python</b> - proficient and significant experience, primary programming language</li>
        <li><b>Rust</b> - good experience, secondary programming language currently</li>
        <li><b>JavaScript</b> - good experience, used for multiple web development projects</li>
        <li><b>HTML / CSS</b> - good experience</li>
        <li><b>SQL</b> - good experience, have used extensively in data projects</li>
        <li><b>Java</b> - limited experience, learned and used for a class at MIT (6.031)</li>
        <li><b>LaTeX</b> - proficient and significant experience</li>
      </ul>
    </div>

    <div className="skills-block">
      <h3 className="subsection-title">Technical Tools and Frameworks:</h3>
      <ul className="skills-list">
        <li><b>Numpy</b> - proficient and significant experience</li>
        <li><b>Pandas</b> - proficient and significant experience</li>
        <li><b>Scikit-Learn</b> - proficient and significant experience</li>
        <li><b>PyTorch</b> - proficient and significant experience, primary ML library for current job</li>
        <li><b>Tensorflow/Keras</b> - good experience, used in a few projects/work</li>
        <li><b>AWS</b> - good experience</li>
        <li><b>GCP</b> - good experience</li>
        <li><b>Docker</b> - limited experience</li>
        <li><b>ReactJS</b> - good experience, used for web development</li>
        <li><b>ExpressJS</b> - good experiencem used for web development</li>
        <li><b>VueJS</b> - limited experience, learned and used for a class at MIT (6.170)</li>
        <li><b>MySQL</b> - good experience</li>
        <li><b>PostgreSQL</b> - good experience</li>
        <li><b>Pachyderm</b> - limited experience</li>
        <li><b>Apache Beam/Dataflow</b> - limited experience</li>
      </ul>
    </div>
  </section>
);

export default Skills;
