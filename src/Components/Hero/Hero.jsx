// import React from 'react';
// import './Hero.css';
// import profile_img from '../../assets/about_profile.jpg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

// const Hero = () => {
//   const handleOpenResume = () => {
//     const pdfUrl = `/AsthaVerma.pdf?cache=${new Date().getTime()}`;
//     window.open(pdfUrl, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div id='home' className='hero'>
//       <img src={profile_img} alt="Profile" />
//       <h1><span>I'm Astha Verma,</span> Web Developer</h1>
//       <p>I'm a Web Developer with strong skills in front-end, back-end, and design.</p>
      
//       <div className='hero-action'>
//         <div className="hero-connect">
//           <AnchorLink className='anchor-link' offset={50} href='#contact'>
//             Connect with me
//           </AnchorLink>
//         </div>

//         {/* ✅ Open PDF in a new tab */}
//         <div className="hero-resume">
//           <button onClick={handleOpenResume}>My Resume</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from 'react';
import './Hero.css';
import profile_img from '../../assets/about_profile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Astha Verma,</span> Robotics & AI Engineer</h1>
      <p>I design intelligent robotic systems, embedded firmware, and AI-driven solutions for real-world automation and human–machine interaction.</p>
      
      <div className='hero-action'>
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>

        {/* ✅ Open PDF without a button */}
        <div className="hero-resume">
          <a href="/Astha Verma.pdf" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
