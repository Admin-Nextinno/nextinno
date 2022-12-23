import React from 'react'
import './Header.css'
import mail from '../../mail-white.svg'
import nextinno from './nextinno.svg'

const Header = () => {
    return (
        <header className="header" data-v-0e1d5628>
            <div className="modal-wrapper" data-v-0e1d5628><span data-v-0e1d5628></span> <span data-v-0e1d5628></span></div>
            {/* <div className="container" style={{ display: "none" }} data-v-0e1d5628><a
                href="service/software-development-new-york/index.html" data-v-0e1d5628>
                Custom Software Development NY
            </a><a href="service/uberlikeapp/index.html" data-v-0e1d5628>
                    Uber-like App Development
                </a><a href="service/mobile-app-development-new-york/index.html" data-v-0e1d5628>
                    Custom Mobile App Development NY
                </a><a href="service/software-development/index.html" data-v-0e1d5628>
                    Custom Software Development
                </a><a href="service/mobile-app-development/index.html" data-v-0e1d5628>
                    Custom Mobile App Development
                </a> <a href="expertise/e-learning-software/index.html" data-v-0e1d5628>
                    eLearning Software Development
                </a><a href="expertise/customsports/index.html" data-v-0e1d5628>
                    Custom Sports Software Development
                </a><a href="expertise/real-estate-software/index.html" data-v-0e1d5628>
                    Real Estate Software Development
                </a> <a href="l/1/software-development-new-york.html" rel="nofollow" data-v-0e1d5628>
                    Custom Software Development NY
                </a><a href="l/1/uberlikeapp.html" rel="nofollow" data-v-0e1d5628>
                    Uber-like App Development
                </a><a href="l/1/mobile-app-development-new-york.html" rel="nofollow" data-v-0e1d5628>
                    Custom Mobile App Development NY
                </a><a href="l/1/software-development.html" rel="nofollow" data-v-0e1d5628>
                    Custom Software Development
                </a><a href="l/1/mobile-app-development.html" rel="nofollow" data-v-0e1d5628>
                    Custom Mobile App Development
                </a></div> */}
            <div className="header__container" data-v-0e1d5628>
                <div className="container" data-v-0e1d5628>
                    <div className="header__container-grid" data-v-0e1d5628><a href="#Home-scroll" aria-current="page"
                        className="header__logo nuxt-link-exact-active nuxt-link-active" data-v-0e1d5628><img
                            src={nextinno} alt="Enkonix" width="258" height="144" id="site-logo"
                            data-v-0e1d5628 /></a>
                        <nav className="header__navigation" data-v-0e1d5628>
                            <a href='#Service-scroll'
                                data-v-0e1d5628>Services</a>
                            <a href='#Expertise-scroll'
                                data-v-0e1d5628>Expertise</a>

                            <a href='#Projects-scroll'
                                data-v-0e1d5628>Projects</a>
                            <a data-v-0e1d5628>About</a> <a
                                data-v-0e1d5628>Careers</a>
                            <a href='mailto:nextinno.2020@gmail.com' className="header-link blue" data-v-0e1d5628>
                                Contact us
                                <span className="blue__icon" data-v-0e1d5628>
                                    <img src={mail} alt="mail" width="11" height="8"
                                        data-v-0e1d5628 /></span></a>
                        </nav>
                        {/* <div className="menu-btn" data-v-0e1d5628><span data-v-0e1d5628></span><span data-v-0e1d5628></span><span
                            data-v-0e1d5628></span></div> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
