import React from 'react';
import VimLogo from '../images/vim_logo.jpg';
import SecondSpectrumLogo from '../images/second_spectrum_logo.png';
import MITSportsLabLogo from '../images/mit_sports_lab_logo.png';
import MITCSAILLogo from '../images/mit_csail_logo.png';
import CovidProject from '../docs/covid_project.pdf';
import UberLyftProject from '../docs/uber_lyft_pricing_project.pdf';
import { FiArrowUpRight } from 'react-icons/fi';
import './Work.css';

const Work = () => (
  <section className="section work">
    <h2 className="section-title">Work Experience</h2>

    <h3 className="work-group-title">Industry</h3>
    <div className="work-grid">
      <article className="work-card">
        <div className="work-card-logo">
          <img src={VimLogo} alt="Vim"/>
        </div>
        <div className="work-card-body">
          <h4 className="work-card-title">Vim</h4>
          <p className="work-card-role"><i>Software Engineering Intern</i></p>
          <p className="work-card-text">
            I spent MIT's 2020 IAP period in January to work for Vim, helping them explore the technology behind healthcare EHR systems and develop tools that
            would cut referral workflow costs. My primary work revolved around developing browser extraction tools such as optical character recognition and DOM-scraping techniques
            to pull EHR information and feed into Vim's referral system. I also built an embedded Chrome extension to integrate high-value recommendations from the referral system
            to streamline the referral workflow for users of the EHR.
          </p>
        </div>
        <div className="work-card-footer">January 2020</div>
      </article>

      <article className="work-card">
        <div className="work-card-logo">
          <img src={SecondSpectrumLogo} alt="Second Spectrum"/>
        </div>
        <div className="work-card-body">
          <h4 className="work-card-title">Second Spectrum</h4>
          <p className="work-card-role"><i>Machine Learning Intern</i></p>
          <p className="work-card-text">
            I spent the summer of 2019 working on Second Spectrum's soccer AI team to help develop and launch the tracking data and semantics delivery system for
            the English Premier League's 2019-2020 season. I developed a logistic regression model to detect bisecting passes in soccer and integrated the detection system
            into the existing semantics workflow. I also spent significant time implementing a training and evaluation infrastructure with Pachyderm to greatly speed up
            the machine learning workflow of developing models. I was able to utilize this infrastructure to successfully improve the existing expected goals model.
            Lastly, I designed and implemented a clustering-based system to identify player archetypes based on style of play.
          </p>
        </div>
        <div className="work-card-footer">June 2019 - August 2019</div>
      </article>
    </div>

    <h3 className="work-group-title">Research</h3>
    <div className="work-grid">
      <article className="work-card">
        <div className="work-card-logo">
          <img src={MITSportsLabLogo} alt="MIT Sports Lab"/>
        </div>
        <div className="work-card-body">
          <h4 className="work-card-title">MIT Sports Laboratory</h4>
          <p className="work-card-role"><i>Undergraduate/Graduate Researcher</i></p>
          <p className="work-card-text">
            My research with the MIT Sports Lab centers around evaluating decision making of NBA players and establishing a quantifiable framework to do so.
            I've utilized deep learning approaches and other statistical techniques to build accurate pass difficulty and shot difficulty models to quantify
            probabilties of completing certain passes or shots, using predominantly tracking data to build features. With these values I introduced an
            <b> expected possession value (EPV) </b> metric that can be used as a proxy to determine whether certain decisions to pass or shoot were good or not.
            This work is being conducted in collaboration with the San Antonio Spurs, and I have integrated this work into a coaching and analytical tool for them.
          </p>
          <p className="work-card-advisor"><i>Advisor: Peko Hosoi</i></p>
        </div>
        <div className="work-card-footer">September 2019 - Present</div>
      </article>

      <article className="work-card">
        <div className="work-card-logo">
          <img src={MITCSAILLogo} alt="MIT CSAIL"/>
        </div>
        <div className="work-card-body">
          <h4 className="work-card-title">MIT Computer Science and Artificial Intelligence Laboratory</h4>
          <p className="work-card-role"><i>Undergraduate Researcher</i></p>
          <p className="work-card-text">
            Working in the Learning and Intelligent Systems group, we seeked to enable research on machine leaerning and planning in uncertain domains with small real-world datasets,
            in the context of autonomous agents (robots!). We focused on developing a complete task and motion planning system for a life-sized robot to interpret and perform
            long-horizon tasks. This involved training the robot to pick up certain objects, push objects, and a variety of other motions in a generalized fashion. I was personally
            responsible for training and integrating a computre vision system that could robustly detect objects and their poses with occlusions. We were able to provide
            a live in-person demonstration of the robot's capabilities to the lab's sponsor, Honda Research Institute, which successfully displayed our integrated system.
          </p>
          <p className="work-card-advisor"><i>Principal Investigators: Leslie Kaelbling & Tomas Lozano-Perez</i></p>
        </div>
        <div className="work-card-footer">May 2018 - August 2018</div>
      </article>
    </div>

    <h3 className="work-group-title">Projects</h3>
    <div className="work-grid">
      <article className="work-card">
        <div className="work-card-body">
          <h4 className="work-card-title">Covid-19 Sentiment Analysis on Twitter</h4>
          <p className="work-card-text">
            At the peak of the Covid-19 pandemic, I along with a friend seeked to understand the general sentiment surrounding the outbreak and the country's response to it.
            We trained various NLP binary classification models to characterize if tweets about the coronavirus were serious or not. We then used thee models to analyze trends
            and patterns, discovering that there were correlations with factors such as level of outbreak, political affiliation, significant events, etc.
          </p>
          <a className="work-card-link" href={CovidProject} target="_blank" rel="noopener noreferrer">
            Read More <FiArrowUpRight/>
          </a>
        </div>
        <div className="work-card-footer">March 2020 - May 2020</div>
      </article>

      <article className="work-card">
        <div className="work-card-body">
          <h4 className="work-card-title">Uber and Lyft Pricing</h4>
          <p className="work-card-text">
            This project was an analysis of Uber and Lyft pricing and specifically what kinds of factors influenced it the most. In a group of 4, we looked at various
            factors such as weather, location, and time of day that we hypothesized would play a role. We used statistical techniques such as network analysis, hypothesis testing,
            time series analysis, and geospatial regression to determine some of the relationships.
          </p>
          <a className="work-card-link" href={UberLyftProject} target="_blank" rel="noopener noreferrer">
            Read More <FiArrowUpRight/>
          </a>
        </div>
        <div className="work-card-footer">October 2019 - December 2019</div>
      </article>
    </div>
  </section>
);

export default Work;
