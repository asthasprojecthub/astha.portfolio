import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';
// import about_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className='about-section'>
        <div className="about-left">
            {/* <img src={} alt="Profile" /> */}
        </div>
        <div className="about-right">
          
            <div className="about-para">
                <p>Hi! I'm Astha, a Robotics & AI engineer passionate about building intelligent robotic systems, embedded firmware, and real-world automation solutions. I specialize in microcontroller-based system design, sensor interfacing, and AI-driven decision making for autonomous and semi-autonomous robots.</p>

                <p>I am expanding my skills in microcontroller-based system design, sensor fusion, and real-time embedded control for autonomous robotics and IoT applications.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>Embedded C / C Programming</p> <hr style={{ width: "90%" }} />
                </div>
                <div className="about-skill">
                    <p>IoT & Wireless Systems</p> <hr style={{ width: "70%" }} />
                </div>
                <div className="about-skill">
                    <p>MATLAB</p> <hr style={{ width: "80%" }} />
                </div>
                <div className="about-skill">
                    <p>AI/ML/Python</p> <hr style={{ width: "50%" }} />
                </div> 
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>8+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>M.Tech</h1>
          <p> in Robotics & AI</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>R&d</h1>
          <p> in Autonomous Robotics Systems</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
