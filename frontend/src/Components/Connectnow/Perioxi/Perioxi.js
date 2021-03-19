import React, { Component } from 'react'
import "./Perioxi.css"

export default class Perioxi extends Component {
    render() {
        return (
            <div className='perioxi'>
                <div className='perioxi__container'>
                <div className='perioxi__text'>
                <h2 className='perioxi__h2'>Η connectnow μπορεί να εξυπηρετήσει εντός Αττικής</h2>
                </div>
                    
                <div className='perioxi__map'>
                <iframe className='perioxi__xartis' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50310.557610074036!2d23.703319956617158!3d37.99089965317667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2zzpHOuM6uzr3OsQ!5e0!3m2!1sel!2sgr!4v1615852713699!5m2!1sel!2sgr" allowfullscreen="" loading="lazy"></iframe>
                </div>
                </div>
            </div>
        )
    }
}
