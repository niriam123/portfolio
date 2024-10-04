import React from 'react'

const About = () => {
  return (
    <section className='about-section card-container' id="about-section">
        <div className="wrap-container">
            <div className="columns is-multiline is-vcentered">
                <div className="column is-6-widescreen is-6-desktop is-12-tablet is-12-mobile">
                    <figure>
                        <img className='' src='images/about_us_pic.svg' width={650} height={600}></img>
                    </figure>
                </div>
                <div className="column is-6-widescreen is-6-desktop is-12-tablet is-12-mobile">
                    <span className='card-title mb-2'>I'm a Developer</span>
                    <h2 className='mb-5'>I Can Design and Develop Anything You Want</h2>
                    <p className='p' id='pid'>
                    As an expert in pixel-perfect web design and development, I create responsive, high-performance 
                    websites using HTML5, CSS, and JavaScript with frameworks like Bulma and Bootstrap. 
                    I specialize in SEO (on-page and off-page) optimization, integrating Google Analytics 4, 
                    Google Tag Manager, and cookie management for enhanced tracking and compliance. 
                    I seamlessly integrate content management systems like Ghost for easy blog and case study updates, 
                    and manage Pipedrive webhooks and API to build custom forms and generate leads. 
                    My comprehensive skill set ensures 
                    your website not only looks great but functions flawlessly across all devices and platforms.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About



 
  
