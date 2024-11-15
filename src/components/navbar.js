import React from 'react'
import './index.css'

const Navbar = () => {
  return (
      <header id='navbarid' >
          <div className='header-wrapper'>
              <nav className="navbar" role="navigation" aria-label="main navigation">
                  <div className="navbar-brand">
                      <a className="navbar-item" href="https://bulma.io">
                          Ritu
                      </a>
                      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                          <span aria-hidden="true"></span>
                          <span aria-hidden="true"></span>
                          <span aria-hidden="true"></span>
                          <span aria-hidden="true"></span>
                      </a>
                  </div>

                  <div id="navbarBasicExample" className="navbar-menu">
                      <div className="navbar-end">
                          <a className="navbar-item is-active" href='/'>
                              Home
                          </a>
                          <a className="navbar-item" href='#about-section'>
                              About
                          </a>
                          <a className="navbar-item" href='#portfoilo-section'>
                              Portfolio
                          </a>
                          <a className="navbar-item" href='#contact'>
                              Contact
                          </a>
                          <button className='download-cv-btn'>Download CV</button>
                      </div>
                  </div>
              </nav>
          </div>
      </header>
  )
}



export default Navbar


window.addEventListener("scroll", function() {
    const navbarScroll = document.getElementById('navbarid')
    
      if (window.scrollY >= 100) {
        navbarScroll.classList.add('navbar-boxshadow')
      }
      else if (window.scrollY < 100){
        navbarScroll.classList.remove('navbar-boxshadow')

      }
    });