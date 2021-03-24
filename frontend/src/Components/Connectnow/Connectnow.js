import React, { Component } from 'react'
import Header from "./Header/Header"
import About from "./AboutUs/About"
import Services from "./Services/Services"
import FourSteps from "./FourSteps/FourStpes"
import Contact from "./Contact/Contact"
import Perioxi from "./Perioxi/Perioxi"
import ConnectBlogPosts from "./ConnectBlogPosts/ConnectBlogPosts"
import Footer from "./Footer/Footer"


export default class Connectnow extends Component {
    render() {
        return (
            <div>
                <Header />
                <About/>
                <Services/>
                <FourSteps />
                <Contact />
                <Perioxi />
                <ConnectBlogPosts/>
                <Footer/>
            </div>
        )
    }
}
