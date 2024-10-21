import React from 'react'
import './index.css' 
import Navbar from './navbar'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"></link>

const Heropanel = () => {
  return (
    <>
      <section id='heropanel'>
        <div className='hero-panel mt-56'>
          <div className="hero-panel-inner">
            <Navbar />
            <div className='wrap-container'>
              <div className="columns is-multiline is-vcentered hero-panel-container">
                <div className="column is-6-widescreen is-6-desktop is-12-tablet is-12-mobile">
                  <h3 className='orangeText'>Hello, I'm</h3>
                  <h1 className='mb-3'>Ritu Goyal</h1>
                  <p className='p1 mb-5'>A <span className='greenText'>Creative Website Developer</span></p>
                  <p className='p2'>Pixel-Perfect Web Developer | HTML5, CSS, JavaScript | Bulma & Bootstrap Expert | SEO & Analytics Integration | Ghost & Pipedrive Integration Specialist</p>
                  <div className='social-btn-link-container'>
                    <button className='about-me-btn'>About Me</button>
                    <div className='social-link'>
                      <a href='https://www.linkedin.com/in/ritu-goyal-190016115/' target='_blank'>
                        <i className="fab fa-linkedin social-icon"></i>
                      </a>
                      <a href='https://github.com/niriam123' target='_blank'>
                        <i className="fab fa-github social-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="column is-6-widescreen is-6-desktop is-12-tablet profile-pic-container">
                  <figure>
                    <img className='profile-pic' src='images/profile_pic.jpeg' width={300} height={300} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Heropanel
