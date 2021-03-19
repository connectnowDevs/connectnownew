import React, { Component } from 'react'
import "./Email.css"

export default class Email extends Component {
    render() {
        return (
            <div className='email'>
            <div className='email__texts'>
                <h2 className='email__h2'>Επικοινώνησε μαζί μας τώρα</h2>
            </div>
                <div className='email__container'>
                    <div className='email__leftSide'>
                        <form className='email__form'>
                            <div className='email__name'>
                                <input className='email__input' type='text' placeholder='Name' name='name'></input>
                            </div>
                            <div className='email__email'>
                                <input className='email__input' type='email' placeholder='email' name='email'></input>
                            </div>
                            <div className='email__tel'>
                                <input className='email__input' type='tel' placeholder='Telephone' name='tel'></input>
                            </div>
                            <div className='email__comment'>
                                <textarea rows="10" cols="54" name='comment' placeholder='Comment'></textarea>
                            </div>
                            <div className='email__button'>
                                <button className='email__btn'>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                    <div className='email__horizontal'></div>
                    <div className='email__rightSide'>
                    <ul className='email__ul'>
                        <li className='email__li'><i class="fas fa-phone-alt email__icon"></i><p className='email__p'>210 300 44 02</p></li>
                        <li className='email__li'><i class="fas fa-envelope email__icon"></i><p className='email__p'>info@connectnow.gr</p></li>
                        <li className='email__li'><i class="fas fa-home email__icon"></i><p className='email__p'>+30 693 72 68 740</p></li>
                        <li className='email__li'><i class="fab fa-facebook-f email__icon"></i><p className='email__p'>Follow us on facebook</p></li>
                        <li className='email__li'><i class="fab fa-linkedin-in email__icon"></i><p className='email__p'>Follow us on linkedin</p></li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}
