import React from 'react'
import './Section10.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Section10() {
    return (
        <div className='section10-main-container'>
            <div className='contact-main-container reveal'>
                <div className='contact-email-section'>

                    <h3 className='heading-get' style={{ fontSize: '1.3rem', marginBottom: '20px', color: "#042055" }}>Get in touch</h3>
                    <span className='tag-get' style={{ fontSize: '2rem', fontWeight: 'bolder', color: "#042055" }}>Let's have awesome conversation</span>
                    <div className='tips-div' style={{ color: "#042055", marginTop: "15px", display: "flex" }}>
                        <span className='note-tip' style={{ fontWeight: "bolder" }}> </span><span> Just email us we will call you back</span>
                    </div>
                    <div className='contact-button-container'>
                        {/* <div className='contact-button'>Send a Mail</div> */}
                        <a href='mailto:nextinno.2020@gmail.com' className="hero__col-btn" data-v-1912c734><button className="app-btn app-btn--variant_primary"
                            data-v-1912c734 data-v-60ac0bf2>
                            <div className="app-btn__content" data-v-60ac0bf2>
                                Book a call
                            </div>
                        </button></a>
                    </div>
                </div>
                <div className='contact-social-mediaSection'>
                    <div className='socialMedia-options'>
                        <div className='socialMedia-option-icon'>
                            <InstagramIcon sx={{ color: '#bc2a8d' }} fontSize="large" />
                        </div>
                        <div className='socialMedia-option-icon'>
                            <TwitterIcon sx={{ color: '#00acee' }} fontSize="large" />
                        </div>
                        <div className='socialMedia-option-icon'>
                            <FacebookIcon sx={{ color: '#4267B2' }} fontSize="large" />
                        </div>
                        <div className='socialMedia-option-icon'>
                            <a href='https://in.linkedin.com/in/next-inno-8867a21b6'>
                                <LinkedInIcon sx={{ color: '#0077b5' }} fontSize="large" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section10
