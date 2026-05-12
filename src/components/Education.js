import React from 'react';
import './Education.css';

const Education = () => (
  <section className="section education">
    <h2 className="section-title">Education</h2>

    <div className="education-block">
      <h3 className="education-school"><b>Massachusetts Institute of Technology</b></h3>
      <p className="education-degree"><i>Master of Engineering in Computer Science and Artificial Intelligence</i> (GPA: 5.0/5.0) - May 2021</p>
      <p className="education-degree"><i>Bachelor of Science in Computer Science and Engineering</i> (GPA: 5.0/5.0) - May 2020</p>
      <p className="education-degree"><i>Minor in Statistics and Data Science</i></p>

      <details className="collapsible">
        <summary>Relevant Courses</summary>
        <div className="collapsible-content">
          <p className="course-cat"><b><u>Computer Science</u></b>:</p>
          <ul className="course-list">
            <li>6.004 Computation Structures</li>
            <li>6.006 Introduction to Algorithms</li>
            <li>6.009 Fundamentals of Programming</li>
            <li>6.031 Elements of Software Construction</li>
            <li>6.033 Computer Systems Engineering</li>
            <li>6.036 Introduction to Machine Learning</li>
            <li>6.046 Design and Analysis of Algorithms</li>
            <li>6.170 Software Studio: Web Applications</li>
            <li>6.419 Statistical Computation and Applications</li>
            <li>6.804 Computational Cognitive Science</li>
            <li>6.UAT Technical Oral Communication</li>
            <li>6.438 Algorithms for Inference</li>
            <li>6.860 Statistical Learning Theory and Applications</li>
            <li>6.864 Advanced Natural Language Processing</li>
            <li>6.883 Modeling with Machine Learning: From Algorithms to Applications</li>
          </ul>
          <p className="course-cat"><b><u>Math:</u></b></p>
          <ul className="course-list">
            <li>6.042 Discrete Mathematics for Computer Science</li>
            <li>6.008 Introduction to Inference</li>
            <li>18.06 Linear Algebra</li>
            <li>18.600 Probability and Random Variables</li>
            <li>18.650 Fundamentals of Statistics</li>
            <li>18.065 Matrix Methods in Data Analysis, Signal Processing, and Machine Learning</li>
          </ul>
        </div>
      </details>
    </div>

    <div className="education-block">
      <h3 className="education-school"><b>Berkeley High School</b></h3>
      <p className="education-degree"><i>International Baccalaureate Diploma</i> (GPA: 4.0/4.0) - June 2016</p>

      <details className="collapsible">
        <summary>Relevant Courses</summary>
        <div className="collapsible-content">
          <ul className="course-list">
            <li>IB/AP Computer Science</li>
          </ul>
        </div>
      </details>
    </div>
  </section>
);

export default Education;
