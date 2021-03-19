import React, { Component } from 'react'
import "./Services.css"
import Case from "./Images/case.png"
import Img1 from "./Images/shap_one.png"
import Img2 from "./Images/shap_two.png"

export default class Services extends Component {
    render() {
        return (
            <div className='services'>
            <div className='services__top'>
                <img src={Img1} className='services__img1'></img>
            </div>
            <div className='services__bottom'>
                <img src={Img2} className='services__img2'></img>
            </div>
                <div className='services__container'>
                    <div className='services__leftSide'>
                        <img className='services__img' src={Case}></img>
                    </div>
                    <div className='services__rightSide'>
                     
                        <div className='services__texts'>
                            <h2 className='services__h2'>Κάνε την εταιρεία σου πιο γρήγορη</h2>
                            <p className='services__p'>Luxer One powers their business analytics with SaasLand.
                            So I said in my flat Elizabeth no biggie me old mucker smashing starkers spiffing wind up, cobblers chip shop pardon.
                            Wisteria Ravenclaw
                            Director of Marketing & Communications</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
