import React from 'react'
import expertise from './img/Expertise.svg'

const Expertise = () => {
    const paragraphDatas = {
        ["eLearning Software Development"]: "We deliver flexible and adaptable learning management systems. Find out why you should select us to be your trusted partner!",
        ["Sports Software Development"]: "We build software to support sports management and events. Our custom-developed applications help to achieve greater success.",
        ["Machine Learning Projects"]: "Our ML implementation gives enterprises a view of trends in customer behavior and business operational patterns, as well as supports the development of new products."
    }
    const mouseOv = (name) => {
        console.log(name);
        // console.log(e.target.children[0].children[0].textContent);
        let arrayElem = document.getElementsByClassName("expertise");
        Array.from(arrayElem).map(e => {
            e.classList.remove("active")
            try {
                e.children[0].children[1].textContent = "";
            } catch (err) {

            }
            if (e.children[0].children[0].textContent === name) {
                e.classList.add("active");
                e.children[0].children[1].textContent = paragraphDatas[name];
            }

        })

    }
    return (
        <div data-v-178172bb="" data-v-29faf9aa="" className="custom-section expertise">
            <div data-v-178172bb="" className="container">
                <div data-v-178172bb="" className="custom-section__grid">
                    <div data-v-178172bb="" className="custom-section__image">

                        <div data-v-178172bb="" className="custom-section__image-el">
                            <img data-v-29faf9aa="" data-v-178172bb="" src={expertise} alt="service" width="400" height="240" className="expertise-image" />
                        </div></div>
                    <div data-v-178172bb="" className="custom-section__content">
                        <div data-v-178172bb="" className="custom-section__text">

                            <div data-v-178172bb="" className="custom-section__subtitle">
                                <div data-v-178172bb="" className="upper-subtitle">
                                </div></div> <div data-v-178172bb="" className="custom-section__title">
                                <h2 data-v-178172bb="" className="h2">Expertise</h2></div></div>
                        <div data-v-178172bb="" to="[object Object]" onMouseEnter={() => mouseOv("eLearning Software Development")} className="custom-section__item expertise active"><div data-v-178172bb="" className="custom-section__item-content"><b data-v-178172bb="">
                            eLearning Software Development
                        </b> <p data-v-178172bb="">We deliver flexible and adaptable learning management systems. Find out why you should select us to be your trusted partner!</p></div></div>
                        <div data-v-178172bb="" to="[object Object]" onMouseEnter={() => mouseOv("Sports Software Development")} className="custom-section__item expertise"><div data-v-178172bb="" className="custom-section__item-content"><b data-v-178172bb="">
                            Sports Software Development
                        </b> <p data-v-178172bb=""></p></div></div><div data-v-178172bb="" to="[object Object]" onMouseEnter={() => mouseOv("Machine Learning Projects")} className="custom-section__item expertise"><div data-v-178172bb="" className="custom-section__item-content"><b data-v-178172bb="">
                            Machine Learning Projects
                        </b><p data-v-178172bb=""></p> </div></div></div></div></div></div>
    )
}

export default Expertise
