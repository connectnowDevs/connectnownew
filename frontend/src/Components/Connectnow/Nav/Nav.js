import React, { Component } from 'react'
import logo from "./Images/connect.png"
import "./Nav.css"

export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <div className='nav__container'>
                    <div className='nav__leftSide'>

                        <h3 className='nav__h3'>ConnectNow</h3>
                    </div>
                    <div className='nav__rightSide'>
                    <div className='nav__ul'>
                        <div className='nav__li'><a className='nav__link nav__active' href=''>Home</a></div>
                        <div className='nav__li'><a className='nav__link' href=''>Ποιοί Είμαστε</a></div>
                        <div className='nav__li'><a className='nav__link' href=''>Υπηρεσίες</a></div>
                        <div className='nav__li'><a className='nav__link' href=''>Επικοινώνησε μαζί μας</a></div>
                        <div className='nav__li'><a className='nav__link' href=''>Blog</a></div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
