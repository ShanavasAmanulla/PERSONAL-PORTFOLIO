import React, { Component } from 'react'
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Intro />
                <Services />
                <Experience />
                <Works />
                <Portfolio />
                <Contact />
                <Footer />

            </div>
        )
    }
}