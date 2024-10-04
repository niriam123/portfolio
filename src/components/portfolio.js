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
            <div className="columns is-multiline">
                
                <div className="column is-4-widescreen is-4-desktop is-6-tablet is-12-mobile">
                    <div className="portfolio-content">
                        <figure>
                            <img src='images/qubox.jpg' />
                            <figcaption>
                            <p className='portfolio-title'>Qubox</p>
                            <a href='https://niriam123.github.io/furniturewebsite/' target='_blank'>Visit Website</a>
                            </figcaption>
                            <div className="portfolio-overlay">
                        </div>
                        </figure>
                    </div>
                </div>
                <div className="column is-4-widescreen is-4-desktop is-6-tablet is-12-mobile">
                    <div className="portfolio-content">
                        <figure>
                            <img src='images/google-page.webp' />
                            <figcaption>
                            <p className='portfolio-title'>Google page</p>
                            <a href='https://niriam123.github.io/googlepage/' target='_blank'>Visit Website</a>
                            </figcaption>
                            <div className="portfolio-overlay">
                        </div>
                        </figure>
                    </div>
                </div>
                <div className="column is-4-widescreen is-4-desktop is-6-tablet is-12-mobile">
                    <div className="portfolio-content">
                        <figure>
                            <img src='images/lakshn-bg.jpg' />
                            <figcaption>
                            <p className='portfolio-title'>Lakshn</p>
                            <a href='https://niriam123.github.io/laksnwebsite/' target='_blank'>Visit Website</a>
                            </figcaption>
                            <div className="portfolio-overlay">
                        </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
