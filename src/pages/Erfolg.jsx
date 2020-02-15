import React, {Component} from 'react';
import "../App.css";
import "./Erfolg.css";
import {Link} from "react-router-dom";

class Erfolg extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="header-scroll-trigger"></div>
                <nav className="header-container">
                    <div className="hamburger menu">
                        <div className="line line01"></div>
                        <div className="line line02"></div>
                        <div className="line line03"></div>
                    </div>
                    <Link to="/"><a href="../"><h2 className="logo-name"><b>Mietfixi</b></h2></a></Link>
                    <ul className="nav-links">
                        <Link to="/"><li><a href="student" className="top-nav-links" id="about">Unser Service</a></li>
                        </Link>
                        <Link to="/"><li><a href="help" className="top-nav-links" id="work">Wie es funktioniert</a></li></Link>
                        <Link to="/"><li><a href="blog" className="top-nav-links" id="work">Warum wir?</a></li></Link>
                        <Link to="/"><li><a href="contact" className="contact-btn" id="contact">Jetzt prüfen</a></li></Link>
                    </ul>
                    <a href="contact">
                        <Link to="/">
                            <button className="responsive-nav-btn">
                                Jetzt prüfen
                            </button>
                        </Link>
                    </a>
                </nav>

                <div className="container" id="success-container">
                    <h1>Danke für Ihre Anfrage</h1>
                    <p>
                        Wir werden uns schnellst möglichst Ihre Unterlagen ansehen und uns bei Ihnen melden. Sie müssen
                        die Zahlung erst tätigen sobald wir die Ergebnisse vorliegen haben. Bis dahin!
                    </p>
                    <Link to="/">
                        <button className="primary-btn">
                            Zurück zur Website
                        </button>
                    </Link>
                </div>

                <footer className="container" id="footer-container">
                    <div className="footer-column-left">
                        <h2 className="footer-header">Mietfixi</h2>
                        <p>© Copyright 2019 Keeet UG (haftungsbeschränkt)</p>
                        <p>All rights reserved.</p>
                    </div>
                    <div className="footer-column-right">
                        <h3 className="footer-header">Mietfixi</h3>
                        <ul>
                            <Link to="/" className="nostyling"><li><a href="../">Unser Service</a></li></Link>
                            <Link to="/" className="nostyling"><li><a href="student">Wie es funktioniert</a></li></Link>
                            <Link to="/" className="nostyling"><li><a href="help">Warum wir?</a></li></Link>
                            <Link to="/" className="nostyling"> <li><a href="contact">Jetzt prüfen</a></li></Link>
                        </ul>
                    </div>
                    <div className="footer-column-right">
                        <h3 className="footer-header">Recht</h3>
                        <ul>
                            <Link to="/impressum" className="legal-link">
                                <li><a href="imprint">Impressum</a></li>
                            </Link>
                            <Link to="/agb" className="legal-link">
                                <li><a href="terms-of-service">AGB</a></li>
                            </Link>
                            <Link to="/datenschutz" className="legal-link">
                                <li><a href="privacy-policy">Datenschutz</a></li>
                            </Link>
                        </ul>
                    </div>
                    <div className="footer-column-right">
                        <h3 className="footer-header">Folge uns</h3>
                        <a href="#" target="_blank" className="footer-icon"><i className="fa fa-twitter-square"></i></a>
                        <a href="#" target="_blank" className="footer-icon"><i
                            className="fa fa-facebook-square"></i></a>
                        <a href="#" target="_blank" className="footer-icon"><i className="fa fa-instagram"></i></a>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Erfolg;