import React from 'react'

const Contact = () => {
  return (
      <section id='contact' className='contact-section'>
          <div className="card-container">
              <div className='is-centered'>
                  <span className='card-title'>Contact Me</span>
              </div>
              <h2 className='mb-4 is-centered'>I Want To Hear From You</h2>
              <p className='p is-centered mb-6'>call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
              <div className="columns is-multiline">
                  <div className="column is-12-widescreen is-12-desktop is-12-tablet is-12-mobile">
                      <div className="contact-list">
                          <div className="contact-icons orangeBackground">
                              <i class="fa-solid fa-location-dot orangeText contact-icon"></i>
                          </div>
                          <div className="contact-content">
                              <h3>Address</h3>
                              <p className='p'>New jawahar nagar, Kota</p>
                          </div>
                      </div>
                      <div className="contact-list">
                          <div className="contact-icons greenBackground">
                              <i class="fa-solid fa-envelope contact-icon greenText"></i>
                          </div>
                          <div className="contact-content">
                              <h3>Email</h3>
                              <p className='p'>ritugoyal.swm123@gmail.com</p>
                          </div>
                      </div>
                      <div className="contact-list">
                          <div className="contact-icons purpleBackground">
                              <i class="fa-solid fa-phone contact-icon purpleText"></i>
                          </div>
                          <div className="contact-content">
                              <h3>Phone</h3>
                              <p className='p'>7597701974</p>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>
  )
}

export default Contact
