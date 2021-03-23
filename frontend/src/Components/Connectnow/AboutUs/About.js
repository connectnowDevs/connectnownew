import React, { Component } from 'react'
import "./About.css"
import aboutIcon1 from "./Images/icon1.png"
import aboutIcon2 from "./Images/icon2.png"
import aboutIcon3 from "./Images/icon3.png"
import rocket from "./Images/rocket.png"

export default class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='about__container'>
                <img class='about__rocket' src={rocket}></img>
                <div className='about__texts'>
                <h2 className='about__h2'>Λίγα λόγια για εμάς</h2>
                    <p className='about__p'>Η Connect Now είναι μια νεοσύστατη Ελληνική εταιρεία η οποία εξειδικεύεται στην αποκατάστασης βλαβών internet και τηλεφωνίας. Με πολυετή εμπειρία στην αποκατάσταση βλαβών χαλκού , οπτικών ινών, ενσύρματων (LAN) και ασύρματων (WiFi) δικτύων και έχοντας την άρτια τεχνογνωσία στον χώρο, ικανοποιεί τις ανάγκες όλων των πελατών της ,εταιρικούς και οικιακούς (ανεξάρτητα τον πάροχο) σε χρονικό διάστημα έως και λιγότερο των 24 ωρών απ' την στιγμή που θα ενημερωθούμε για την βλάβη. Στόχος μας η άμεση πρόσβαση και η σωστή χρήση του δικτύου όλων και πάνω από όλα, προς όφελος των πελατών μας.</p>
                </div>
                <div className='about__icons'>
                    <div className='abount__column'>
                    <div className='abount__img'>
                    <img src={aboutIcon1}></img>
                    </div>  
                    <div className='about__columnTexts'>
                    <h3 className='about__h3'>Ανεξάρτητα τον πάροχο</h3>
                    <p className='about__p'>Ανεξάρτητα τον πάροχο σου, ερχόμαστε στον χώρο σου και αποκαθιστούμε οποιαδήποτε βλάβη του internet στο δίκτυο σου.</p>
                    </div>                  
                    </div>
                    <div className='abount__column'>
                    <div className='abount__img'>
                    <img src={aboutIcon2}></img>
                    </div>
                    <div className='about__columnTexts'>
                    <h3 className='about__h3'>24, 50, 100 ή μήπως 200 Mbps;</h3>
                    <p className='about__p'>Όποια και αν είναι η ταχύτητα της σύνδεσης σου, αποκαθιστούμε βλάβες σε δίκτυα VDSL και ADSL σε υπηρεσίες LLU, VPU Light, FTTC, FTTH.</p>
                    </div>                       
                        </div>

                </div>
                  
                </div>
            </div>
        )
    }
}
