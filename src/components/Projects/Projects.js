import React from 'react'
import './Projects.css'
import bg from './img/bg.png'
import cms from './img/Group 2.png'
import crm from './img/crm.png'
import churn from './img/churn.png'

const Projects = () => {

    const data = {
        ["Content Management System"]: "CMS : Helps in changing website content creation, enabling multiple authors to develop, update, and publish material.",
        ["Customer Relationship Management"]: "CRM : Helps in managing all your company`s relationships and interactions with customers and potential customers",
        ["Customer Churn Prediction"]: "Helps in predicting which customers are at high risk of leaving your company or canceling a subscription to a service, based on their behavior with your product."

    }

    const mouseOver = (name) => {
        const eleme = document.getElementsByClassName("portfolio__item")

        Array.from(eleme).map(e => {
            e.classList.remove("active")
            // console.log(e.children[1]);
            e.children[1].textContent = "";
            try {
                document.getElementById(e.children[0].textContent.split(" ").join("-")).classList.remove("active")
            } catch (err) {
                // console.log(err);
            }
            if (e.children[0].textContent === name) {
                e.classList.add("active");
                e.children[1].textContent = data[name];
                console.log("worki");
                document.getElementById(name.split(" ").join("-")).classList.add("active")
            }


        })
    }
    return (
        <section data-v-bbf9a11a="" data-v-29faf9aa="" className="portfolio"><div data-v-bbf9a11a="" className="container visible-tablet-sm"><img data-v-bbf9a11a="" data-srcset="/index-page/943@1x.png 1x, /index-page/943@1x.png 2x, /index-page/943@3x.png 3x, /index-page/943@1x.webp 1x, /index-page/943@1x.webp 2x, /index-page/943@3x.webp 3x" alt="some" width="287" height="369" src={bg} lazy="loading" /></div> <div data-v-bbf9a11a="" className="container"><div data-v-bbf9a11a="" className="portfolio__list"><h2 data-v-bbf9a11a="">
            Our projects
        </h2> <p data-v-bbf9a11a="">
                We have transformed dozens of ideas into efficient digital solutions using the latest technologies. Our mission is to bring businesses to the next level
            </p> <a data-v-bbf9a11a="" onMouseEnter={() => mouseOver("Customer Relationship Management")} className="portfolio__item active"><b data-v-bbf9a11a="">
                Customer Relationship Management
            </b><p data-v-bbf9a11a>CRM : Helps in managing all your company`s relationships and interactions with customers and potential customers.</p> </a><a data-v-bbf9a11a="" onMouseEnter={() => mouseOver("Content Management System")} className="portfolio__item"><b data-v-bbf9a11a="">
                Content Management System
            </b> <p data-v-bbf9a11a></p></a><a data-v-bbf9a11a="" onMouseEnter={() => mouseOver("Customer Churn Prediction")} className="portfolio__item"><b data-v-bbf9a11a="">
                Customer Churn Prediction
            </b><p data-v-bbf9a11a></p> </a>
        </div>
            <div data-v-bbf9a11a="" className="portfolio__images"><div data-v-bbf9a11a="" className="portfolio__images-wrap">
                <img data-v-bbf9a11a="" id='Customer-Relationship-Management' src={crm} className="active" />
                <img data-v-bbf9a11a="" id='Content-Management-System' src={cms} alt="Supplier Shield: communication between advisors and clients" className="" />
                <img data-v-bbf9a11a="" id="Customer-Churn-Prediction" src={churn} alt="Worldskate. A custom-built platform for athlete management in the action sports domain." className="" />
            </div></div></div>
        </section>
    )
}

export default Projects
