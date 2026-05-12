import React from 'react';
import './AboutMe.css';
import coachHeadshot from '../images/ivan_mit_asst_coach.png';
import craterlake from '../images/craterlake.jpg';
import zionquentin from '../images/zionquentin.jpg';
import grandcanyon1 from '../images/grandcanyon1.jpg';
import grandcanyon2 from '../images/grandcanyon2.jpg';
import youngivansoccer from '../images/young_ivan_soccer.jpg';
import ivansoccer from '../images/ivan_soccer.png';
import soccerprof from '../images/soccer_prof.jpg';

const AboutMe = () => (
  <section className="section aboutme">
    <h2 className="section-title">About Me</h2>

    <div className="callout">
      <p>
        I am passionate about helping to shape <b>AI-powered innovations</b> for the world through various applications of <b>machine learning</b>.
        I am a strong believer in using <b>data-driven analysis</b> for deriving actionable insights in any domain, and want to
        contribute to building tools that enable <b>large-scale data processing and inference</b>.
      </p>
    </div>

    <div className="what-i-do">
      <div className="what-i-do-text">
        <h3 className="subsection-title">What I Do</h3>
        <p>
          I am currently working as a machine learning engineer at Second Spectrum, a subsidiary of Genius Sports,
          working on advanced sports analytics technology for soccer teams, leagues, and organizations all over the world.
          I joined Second Spectrum after graduating from MIT with a Bachelor of Science and Master of Engineering degree
          in computer science and artificial intelligence. As an undergraduate I majored in computer science and engineering
          while minoring in statistics and data science, having been a math geek for my entire life.
        </p>
        <p>
          I am an avid sports fan, and played competitive soccer from when I was 4 until I graduated college at 21.
          I played on the MIT Men's Varsity Soccer team all four of my undergraduate years, serving as the captain in my final year.
          Since graduating, I have worked as an assistant coach for the team.
        </p>
      </div>
      <div className="what-i-do-image">
        <img src={coachHeadshot} alt="Ivan as MIT assistant coach"/>
      </div>
    </div>

    <details className="collapsible" open>
      <summary>Travel</summary>
      <div className="collapsible-content">
        <p>
          One of my favorite things to do is travel whenever I get the chance.
          I've visited many national parks in the United States,
          and have also travelled to Asia over 15 times in my short life so far.
          In the summer of 2020, I spent 10 days driving across the United States from Berkeley to Boston, getting to see all different parts of the country.
          It's extremely important to me to see as much of the world as I can in person,
          and really explore the cultures, wonders, and people that it has to offer.
          A life goal of mine is to visit every state in the country and every continent in the world,
          a life goal that I very much look forward to working closer to!
        </p>

        <div className="image-grid">
          <img src={craterlake} alt="Crater Lake"/>
          <img src={zionquentin} alt="Zion National Park"/>
          <img src={grandcanyon1} alt="Grand Canyon"/>
          <img src={grandcanyon2} alt="Grand Canyon"/>
        </div>

        <div className="travel-roadtrip">
          <p>
            During the summer of 2017, I had the amazing opportunity to embark on a two-week long road trip around the
            Western United States with some of my closest friends. In what became my most cherished travel experience ever,
            my friends and I explored numerous national parks and drove through seven states.
            This was such a special experience for me, that I made a video commemorating those memories forever.
            In the future I plan to go on even more extravagant adventures,
            and most importantly be able to share those adventures with the people I am closest to.
          </p>
          <div className="video-wrap">
            <iframe
              title="Roadtrip"
              src="https://www.youtube.com/embed/bBQSxpbU5ck"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </details>

    <details className="collapsible">
      <summary>Soccer</summary>
      <div className="collapsible-content">
        <p>
          Soccer has been a passion of mine for as long as I can remember, and is an integral part of who I am.
          I started playing when I was four years old, and have continued to play basically year-round for the rest of my life.
          By the time I was in high school, I was the captain of my club soccer team as well as my high school team,
          gaining valuable leadership skills along the way. After captaining the varsity team at MIT, I am now an assistant coach for the team.
        </p>
        <div className="image-grid image-grid-3">
          <img src={youngivansoccer} alt="Young Ivan playing soccer"/>
          <img src={ivansoccer} alt="Ivan at MIT soccer"/>
          <img src={soccerprof} alt="Ivan soccer professional"/>
        </div>
      </div>
    </details>

    <details className="collapsible">
      <summary>Music</summary>
      <div className="collapsible-content">
        <p>
          I've been playing classical piano since I was four years old as a soloist, participating in certification tests as well as competitions.
          While I haven't continued playing piano much since high school, the musical aspect of my life is something I value greatly, and is something I hope to keep developing.
          Below are a couple performances from the US Open competitions I participated in.
        </p>
        <div className="video-grid">
          <div className="video-wrap">
            <iframe
              title="Piano performance 1"
              src="https://www.youtube.com/embed/aB-XDB_ImEs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="video-wrap">
            <iframe
              title="Piano performance 2"
              src="https://www.youtube.com/embed/-mkzExXsZZo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </details>
  </section>
);

export default AboutMe;
