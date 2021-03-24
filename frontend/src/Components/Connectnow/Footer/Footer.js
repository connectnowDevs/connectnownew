import React, { Component } from 'react'
import "./Footer.css"
import MessengerCustomerChat from "react-messenger-customer-chat"

export default class Footer extends Component {
    constructor(props){
        super(props)
    }
      
    render() {
        const date = new Date()
        const year = date.getFullYear()
        return (
            <div className='footer'>
                <div className='footer__container'>
                    <div className='footer__icons'>
                    <ul className='footer__ulIcons'>
                    <li className='footer__li'><i class="fas fa-phone-alt footer__icon"></i><p className='footer__p'>210 300 44 02</p></li>
                        <li className='footer__li'><i class="fas fa-envelope footer__icon"></i><p className='footer__p'>info@connectnow.gr</p></li>
                        <li className='footer__li'><i class="fas fa-home footer__icon"></i><p className='footer__p'>+30 693 72 68 740</p></li>
                        <li className='footer__li'><i class="fab fa-facebook-f footer__icon"></i><p className='footer__p'>Follow us on facebook</p></li>
                       
                    </ul>
                    </div>

                    <div className='footer__topList'>
                        <ul className='footer__ulTop'>
                            <li className='footer__liTop'><a className='footer__liTopLink' href=''>Ποιοί είμαστε</a></li>
                            <div className='footer__hr'></div>
                            <li className='footer__liTop'><a className='footer__liTopLink' href=''>Υπηρεσίες</a></li>
                            <div className='footer__hr'></div>
                            <li className='footer__liTop'><a className='footer__liTopLink' href=''>Blog</a></li>
                            <div className='footer__hr'></div>
                            <li className='footer__liTop'><a className='footer__liTopLink' href=''>Home</a></li>
                        </ul>
                    </div>
                </div>

                <div className='footer__text'>
                        <div className='footer__topText'>
                            <h2 className='footer__h2'>ConnectNow</h2>
                        </div>
                        <div className='footer__bottomText'>
                            <p className='footer__p'>Στην connectnow, κάνουμε ό,τι είναι δυνατό για να έχετε γρήγορο και αξιόπιστο internet.
                            Δεν χρειάζεται να περιμένεις τον πάροχο σου.<br></br> Κάλεσε μας και οι τεχνικοί μας θα σε εξυπηρετήσουν λύνοντας γρήγορα την βλάβη στο internet σου.</p>
                        </div>
                    </div>
                    
                    <div className='footer__rights'>
                    <hr className='footer__rightsHr'></hr>
                    <MessengerCustomerChat 
                    pageId="100959285222743"
                    appId="261442658863797"
                />
                        <p className='footer__pBottom'>All rights reserved to connectnow {year}</p>
                    </div>
            </div>
        )
    }
}
