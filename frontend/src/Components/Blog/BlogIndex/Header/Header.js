import React, { Component } from 'react'
import Nav from "../Nav/Nav"
import "./Header.css"

export default class Header extends Component {
    render() {
        return (
            <div className='blog__header'>
            <Nav />
                I am from blog header
            </div>
        )
    }
}
