import React, { Component } from 'react'
import "./Contact.css"

export default class Contact extends Component {
    render() {
        return (
            <div className='contact'>
            <div className='contact__container'>
                <div className='contact__topTexts'>
                    <h2 className='contact__h2'>Κλέισε τώρα την επίσκεψη σου!</h2>
                    <hr className='contact__hr'></hr>
                </div>
                <div className="contact__bottomTexts">
                    <p className='contact__p'>Μην περιμένεις άλλο, κάλεσε μας τώρα και μέσα σε λίγες ώρες θα είμαστε στον χώρο σου, για να σου φτιάξουμε την βλάβη<br></br>
                    Με την connectnow, κανείς δεν έχασε!!</p>
                </div>
            </div>
                
            </div>
        )
    }
}
