import React, { Component } from 'react'
import "./FourSteps.css"
import fourImage1 from "./Images/setup_img1.png"
import fourImage2 from "./Images/setup_img2.png"
import fourImage3 from "./Images/setup_img3.png"

export default class FourStpes extends Component {
    render() {
        return (
            <div className='four'>
                <div className='four__container'>
                    <div className='four__texts'>
                        <h5 className='four__h5'>Γρήγορη εξυπηρέτηση</h5>
                        <h2 className='four__h2'>Δες τα βήμματα του γρήγορου Internet</h2>
                        <p className='four__p'>The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!</p>
                    </div>
                    <div className='four__columns'>
                    <div className='four__rightSide'>
                    <div className='four__image'>
                        <img src={fourImage1}></img>
                    </div>
                    <div className='four__Texts'>
                        <h5 className='four__h5__right'>Δωρεάν επίσκεψη στον χώρο σας!!!</h5>
                        <p className='four__p__right'>Κάθε ανάγκη έχει τον δικό της χαρακτήρα και κάθε βλάβης έχει τον δικό της τρόπο επίλυσης. Σεβόμενοι τις ανάγκες όλων και ζώντας στην ίδια οικονομική κατάσταση όπως όλοι στην Ελλάδα , η connect now πρωτοπορεί δίνοντας λύσεις στα προβλήματα και εγγύηση στην εργασία μας. Σε περίπτωση όπου κάποια βλάβη δεν αποκατασταθεί κατά την διάρκεια της επίσκεψη μας στον χώρο σας , τότε η επίσκεψη είναι ΔΩΡΕΆΝ!</p>
                    </div>
                    <div className='four__image'>
                        <img src={fourImage3}></img>
                    </div>
                    </div>
                    <div className='four__center'>
                    <div className='four__first'>
                    <h1 className='four__h2Buble'>1</h1>
                    </div>
                    <div className='four__vl'></div>
                    <div className='four__second'>
                    <h1 className='four__h2Buble'>2</h1>
                    </div>
                    <div className='four__vl'></div>
                    <div className='four__second'>
                    <h1 className='four__h2Buble'>3</h1>
                    </div>
                    </div>
                    <div className='four__leftSide'>
                    <div className='four__Texts'>
                        <h5 className='four__h5__left'>Ερχόμαστε στον χώρο σας</h5>
                        <p className='four__p__left'>Έχεις ανάγκη να συνδεθείς τώρα στο διαδίκτυο όμως η σύνδεση σου κολλάει και το ίντερνετ σέρνεται; Γνωρίζουμε όλοι μας πως ο χρόνος είναι χρήμα. Κανείς δεν θέλει να σπαταλάει τον χρόνο του στην αναμονή περιμένοντας να εξυπηρετηθεί η ανάγκη και δυστυχώς πολλές φορές δίχως ανταπόκριση. Η Connect Now βάζει πάνω από όλα την ανάγκη του συνδρομητή για άψογη ποιότητα και άμεση σύνδεση στο internet. Ερχόμαστε στον χώρο σε λιγότερο από 24 ώρες ώστε να σας φτιάξουμε το internet. Connect Now για όσους θέλουν να συνδεθούν ΤΏΡΑ χωρίς αναμονή.<br></br> bugger</p>
                    </div>
                    <div className='four__image'>
                        <img src={fourImage2}></img>
                    </div>
                    <div className='four__Texts'>
                        <h5 className='four__h5__left'>Εγγύηση στην εργασία μας</h5>
                        <div className='four__p__left'>Με γνώμονα την σωστή λειτουργία του δικτύου και έχοντας ως δεδομένη την ταχύτητα και την ποιότητα του internet και τηλεφωνίας που παραδίδει ο πάροχος στον κατανεμητή του κτιρίου, επιτυγχάνουμε μηδενικές απώλειες στην εσωτερική καλωδίωση και σε ορισμένες περιπτώσεις έως και 10 φορές πιο γρήγορο internet στον χώρο των πελατών μας.</div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
