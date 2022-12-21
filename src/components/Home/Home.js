import React from 'react'
import heroBg from './img/hero-bg.svg'


const Home = () => {
    return (
        <section className="hero" data-v-1912c734 data-v-29faf9aa>
            <div className="container" data-v-1912c734>
                <div className="hero__grid" data-v-1912c734>
                    <div className="hero__content" data-v-1912c734>
                        <div className="hero__subtitle" data-v-1912c734>
                            <div className="upper-subtitle" data-v-1912c734>
                                Experience
                            </div>
                        </div>
                        <div className="hero__title" data-v-1912c734>
                            <h1 className="h1" data-v-1912c734><b>Full cycle</b> software development that exceeds your
                                expectations</h1>
                        </div>
                        <div className="hero__description" data-v-1912c734>
                            <p data-v-1912c734>
                                Creating impressive turnkey solutions for growing startups and established businesses, Nextinno
                                is a reliable partner for custom software development
                            </p>
                        </div>
                        <div className="hero__info-row" data-v-1912c734>
                            <div className="hero__col-btn" data-v-1912c734><button className="app-btn app-btn--variant_primary"
                                data-v-1912c734 data-v-60ac0bf2>
                                <div className="app-btn__content" data-v-60ac0bf2>
                                    Book a call
                                </div>
                            </button></div>
                            {/* <div className="hero-reviews" data-v-1912c734>
                                <div className="hero__col-clutch" data-v-1912c734><a href="https://clutch.co/profile/enkonix"
                                    target="_blank" className="clutch-link" data-v-1912c734><img src="../../36h.svg"
                                        width="150" height="37" alt="clutch" data-v-1912c734 /></a></div>
                                <div className="hero__col-goodfirm" data-v-1912c734><a
                                    href="https://www.goodfirms.co/company/enkonix" target="_blank" className="clutch-link"
                                    data-v-1912c734><img src="../../goofirms.svg" width="150" height="37" alt="clutch"
                                        data-v-1912c734 /></a></div>
                            </div> */}
                        </div>
                    </div>
                    <div data-v-1912c734 className="hero__image">
                        <div data-v-1912c734 className="hero__image-el"><img data-v-1912c734 src={heroBg}
                            alt="hero" width="407" height="225" /></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home
