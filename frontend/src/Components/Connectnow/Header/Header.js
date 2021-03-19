import React, { Component } from 'react'
import "./Header.css"
import Nav from "../Nav/Nav"
import Pie from "./Images/pie.png"
import littleImage from "./Images/elements_six.png"


export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header__container'>
                    <div className='header__nav'>
                    <Nav />
                    </div>
                    <div className='header__littleIcons'>
                        <img src={littleImage} className='header__littleImage'></img>
                    </div>
                    <div className='header__textsAndImageContainer'>
                        <div className='header__texts'>
                            <h2 className='header__h2'>Έχεις αργό Internet; Ήρθες στο σωστό μέρος</h2>
                            <h5 className='header__h5'>Καλώς ήρθες στην connectNow, είμαστε εδώ για σένα για να σου λύσουμε το πρόβλημα</h5>
                        </div>
                        <div className='header__image'>
                            <img src={Pie} className='header__img'></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
