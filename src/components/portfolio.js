import React from 'react'

const Portfolio = () => {
  return (
    <section className='portfolio-section card-container' id='portfoilo-section'>
        <div className="wrap-container">
            <div className='is-centered'>
                <span className='card-title'>Portfolio</span>
            </div>
            <h2 className='mb-4 is-centered'>My Amazing Works</h2>
            <p className='p is-centered mb-6'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
            <div className="columns is-multiline portfolio-card-list">
                <div className="column is-4-widescreen is-4-desktop is-6-tablet is-12-mobile portfolio-content">
                    <a href='https://provakil.com/' target='_blank'>
                        <div className="portfolio-content-card">
                            <h4 className='greenText mb-4'>Provakil Website</h4>
                            <p className='p'>Used Html5, CSS3, Javascript, Bulma framework</p>
                        </div>
                    </a>
                </div>
                <div className="column is-4-widescreen is-4-desktop is-6-tablet is-12-mobile portfolio-content">
                    <a href='https://initiohq.com/' target='_blank'>
                        <div className="portfolio-content-card">
                            <h4 className='greenText mb-4'>Initio Website</h4>
                            <p className='p'>Used Html5, CSS3, Javascript, Bulma framework</p>
                        </div>
                    </a>
                </div>
                <div className="column is-4-widescreen is-4-desktop is-6-tablet is-12-mobile portfolio-content">
                    <a href='https://provakil.com/blog/' target='_blank'>
                    <div className="portfolio-content-card">
                            <h4 className='greenText mb-4'>Provakil Blog</h4>
                            <p className='p'>Used ghost for theme installation</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="columns is-multiline">
                <div className="column is-4-widescreen is-4-desktop is-6-tablet is-12-mobile portfolio-content">
                    <a href='https://provakil.com/casestudy/' target='_blank'>
                        <div className="portfolio-content-card">
                            <h4 className='greenText mb-4'>Provakil Casestudy</h4>
                            <p className='p'>Used ghost for theme installation</p>
                        </div>
                    </a>
                </div>
                <div className="column is-4-widescreen is-4-desktop is-6-tablet is-12-mobile portfolio-content">
                    <a href='https://niriam123.github.io/myreactproject/' target='_blank'>
                        <div className="portfolio-content-card">
                            <h4 className='greenText mb-4'>Kroming Website</h4>
                            <p className='p'>Used React Js, HTML5, CSS, Bulma framework</p>
                        </div>
                    </a>
                </div>
                <div className="column is-4-widescreen is-4-desktop is-6-tablet is-12-mobile portfolio-content">
                    <a href='https://niriam123.github.io/presento-website/' target='_blank'>
                    <div className="portfolio-content-card">
                            <h4 className='greenText mb-4'>Presento website</h4>
                            <p className='p'>Used html5, css3, javascript, bootstrap framework, animation</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
