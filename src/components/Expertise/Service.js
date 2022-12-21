import React from 'react'
import './Service.css'
import mail from './img/mail.svg'

const Service = () => {
    const paragraphData = {
        ["Web Development"]: "We help businesses build secure and scalable web applications, portals and solutions to solve unique business challenges.",
        ["Custom Mobile App Development"]: "Nextinno offers high-end custom app development and delivers highly scalable, interoperable systems that fit your business.",
        ["Custom Software Development"]: "At Nextinno, we help you improve efficiency of your business with custom software developed to meet your unique requirements.",
        ["IT Consulting"]: "Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.",
        ["UX / UI Design"]: "Build the product you need on time with an experienced team that uses a clear and effective design process.",
        ["QA & Testing"]: "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.",
    }
    const mouse = (name) => {
        console.log(name);
        // console.log(e.target.children[0].children[0].textContent);
        let arrayElem = document.getElementsByClassName("custom-section__item");
        Array.from(arrayElem).map(e => {
            e.classList.remove("active")
            e.children[0].children[1].textContent = "";
            if (e.children[0].children[0].textContent === name) {
                e.classList.add("active");
                e.children[0].children[1].textContent = paragraphData[name];
            }

        })

    }


    return (
        <div data-v-178172bb data-v-29faf9aa className="custom-section"><div data-v-178172bb className="container"><div data-v-178172bb className="custom-section__grid">
            <div data-v-178172bb="" className="custom-section__content"><div data-v-178172bb="" className="custom-section__text"><div data-v-178172bb="" className="custom-section__subtitle"><div data-v-178172bb="" className="upper-subtitle">EXPERIENCE</div></div> <div data-v-178172bb="" className="custom-section__title"><h2 data-v-178172bb="" className="h2">Services</h2></div></div>
                <div data-v-178172bb="" onMouseEnter={() => mouse("Web Development")} to="[object Object]" className="custom-section__item active"><div data-v-178172bb="" className="custom-section__item-content"><b data-v-178172bb="">
                    Web Development
                    <span data-v-178172bb="" className="arrow"><img data-v-178172bb="" alt=">" color='red' width="20" height="20" src={mail} lazy="loaded" /></span></b> <p data-v-178172bb="">Create complex enterprise software, ensure reliable software integration, modernise your legacy system.</p></div></div>
                <div data-v-178172bb="" onMouseEnter={() => mouse("Custom Software Development")} to="[object Object]" className="custom-section__item"><div data-v-178172bb="" className="custom-section__item-content"><b data-v-178172bb="">
                    Custom Software Development
                    <span data-v-178172bb="" className="arrow"><img data-v-178172bb="" alt=">" width="20" height="20" src={mail} lazy="loaded" /></span></b> <p data-v-178172bb=""></p> </div></div>
                <div data-v-178172bb="" onMouseEnter={() => mouse("Custom Mobile App Development")} to="[object Object]" className="custom-section__item"><div data-v-178172bb="" className="custom-section__item-content"><b data-v-178172bb="">
                    Custom Mobile App Development
                    <span data-v-178172bb="" className="arrow"><img data-v-178172bb="" alt=">" width="20" height="20" src={mail} lazy="loaded" /></span></b>  <p data-v-178172bb=""></p></div></div>

            </div>
            <div data-v-178172bb="" className="custom-section__content"><div style={{ visibility: 'hidden' }} data-v-178172bb="" id='custom-section__text-mobile' className="custom-section__text"><div data-v-178172bb="" className="custom-section__subtitle"><div data-v-178172bb="" className="upper-subtitle">EXPERIENCE</div></div> <div data-v-178172bb="" className="custom-section__title"><h2 data-v-178172bb="" className="h2">Services</h2></div></div>
                <div data-v-178172bb="" onMouseEnter={() => mouse("IT Consulting")} to="[object Object]" className="custom-section__item"><div data-v-178172bb="" className="custom-section__item-content"><b data-v-178172bb="">
                    IT Consulting
                    <span data-v-178172bb="" className="arrow"><img data-v-178172bb="" alt=">" color='red' width="20" height="20" src={mail} lazy="loaded" /></span></b> <p data-v-178172bb=""></p></div></div>
                <div data-v-178172bb="" onMouseEnter={() => mouse("UX / UI Design")} to="[object Object]" className="custom-section__item"><div data-v-178172bb="" className="custom-section__item-content"><b data-v-178172bb="">
                    UX / UI Design
                    <span data-v-178172bb="" className="arrow"><img data-v-178172bb="" alt=">" width="20" height="20" src={mail} lazy="loaded" /></span></b> <p data-v-178172bb=""></p> </div></div>
                <div data-v-178172bb="" onMouseEnter={() => mouse("QA & Testing")} to="[object Object]" className="custom-section__item"><div data-v-178172bb="" className="custom-section__item-content"><b data-v-178172bb="">
                    QA & Testing
                    <span data-v-178172bb="" className="arrow"><img data-v-178172bb="" alt=">" width="20" height="20" src={mail} lazy="loaded" /></span></b>  <p data-v-178172bb=""></p></div></div>

            </div>

        </div></div></div>
    )
}

export default Service
