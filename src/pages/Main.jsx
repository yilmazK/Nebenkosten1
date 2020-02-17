import React, {Component} from 'react';
import "../App.css";
import {Link} from "react-scroll";
import Background from "../assets/hero-bg-2.jpg";
import Footer from "./Footer";
import {Redirect} from 'react-router-dom'
import ReactFilestack from "filestack-react";
require('dotenv').config();

const backgroundImage = {
    width: "100%",
    height: "100vh",
    maxWidth: "1500px",
    backgroundImage: `url(${Background})`
};

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailnewsletter: "",
            selectedFile: null,
            urlnebenkosten: "",
            urlmietvertrag: "",
            uploadnebenkosten: false,
            uploadmietvertrag: false,
            name: "",
            hinweis: "",
            missing: false,
            success: false,
            email: "",
            signedUp: false,
            paket: "basic"
        };

        this.dropdownhandleChange = this.dropdownhandleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.newsletterSubmit = this.newsletterSubmit.bind(this);
    }

    isDisabled() {
        if (this.state.urlnebenkosten !== "" && this.state.urlmietvertrag !== "") {
            return false
        } else {
            return true
        }
    }

    onFormSubmit = e => {
        e.preventDefault();
    };

    newsletterSubmit() {
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyfzfkfqvneh0nUd'}).base('appK8zHNLzgHCdP1q');

        base('Newsletter').create([
            {
                "fields": {
                    "Email": this.state.emailnewsletter
                }
            },
        ], function (err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                console.log(record.getId());
            });
        });
    }

    submit() {
        if (this.state.urlnebenkosten !== "" && this.state.urlmietvertrag !== "" && this.state.name !== "" && this.state.email !== "") {
            console.log("SSSUUUCCCEEESSS");
            var Airtable = require('airtable');
            var base = new Airtable({apiKey: 'keyfzfkfqvneh0nUd'}).base('appK8zHNLzgHCdP1q');

            base('Orderlist').create([
                {
                    "fields": {
                        "Name": this.state.name,
                        "Hinweis": this.state.hinweis,
                        "Email": this.state.email,
                        "Paket": this.state.paket,
                        "Nebenkostenabrechnung": [
                            {
                                "url": this.state.urlnebenkosten
                            }
                        ],
                        "Mietvertrag": [
                            {
                                "url": this.state.urlmietvertrag
                            }
                        ]
                    }
                },
            ], function (err, records) {
                if (err) {
                    console.error(err);
                    return;
                }
                records.forEach(function (record) {
                    console.log(record.getId());
                });
            });

            this.props.history.push('/erfolg');

            this.setState({
                selectedFile: null,
                urlnebenkosten: "",
                urlmietvertrag: "",
                uploadnebenkosten: false,
                uploadmietvertrag: false,
                name: "",
                email: "",
                hinweis: "",
                success: true,
                missing: false
            });

        } else {
            console.log("ERRRROOOORRRR");
            this.setState({
                missing: true,
            });
        }
    }


    onSuccessNebenkosten(result) {
        console.log(result);
        const nebenkosten = result.filesUploaded[0].url;
        console.log(result);
        this.setState(prevState => ({
            uploadnebenkosten: !prevState.upload,
            urlnebenkosten: nebenkosten
        }));
        console.log(this.state.urlnebenkosten);
        console.log("success");

    };


    onSuccessMietvertrag(result) {

        const mietvertrag = result.filesUploaded[0].url;
        console.log(result);
        this.setState(prevState => ({
            uploadmietvertrag: !prevState.upload,
            urlmietvertrag: mietvertrag
        }));
        console.log(this.state.urlmietvertrag);
        console.log("success");
    };

    dropdownhandleChange(e) {
        let value = e.target.value;
        this.setState({
            paket: value,

        });

    }

    updateName(evt) {
        this.setState({
            name: evt.target.value
        });
    }

    updateEmail(evt) {
        this.setState({
            email: evt.target.value
        });
    }

    updateHinweis(evt) {
        this.setState({
            hinweis: evt.target.value
        });
    }


    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();

        const emailNewsletter = {
            email: this.state.email,
        };

        this.state.signedUp = true;

        this.hideInput();

        console.log(emailNewsletter);

        this.setState({email: ""});
    };

    hideInput() {
        let addHide = "newsletter-signup ";
        if (this.state.signedUp)
            addHide += "hide-newsletter-signup";
        return addHide;
    }

    showSuccess() {
        let showSuccess = "success-signup ";
        if (this.state.signedUp)
            showSuccess += "show-success-signup";
        return showSuccess;
    }

    render() {
        return (
            <div className="App">
                <div className="header-scroll-trigger"></div>
                <nav className="header-container">
                    <div className="hamburger menu">
                        <div className="line line01"></div>
                        <div className="line line02"></div>
                        <div className="line line03"></div>
                    </div>
                    <a href="../"><h2 className="logo-name"><b>Mietfixi</b></h2></a>
                    <ul className="nav-links">
                        <Link activeClass="active" to="service" spy={true} smooth={true} duration={500}>
                            <li><a className="top-nav-links">Unser Service</a></li>
                        </Link>
                        <Link activeClass="active" to="howTo" spy={true} smooth={true} duration={500}>
                            <li><a className="top-nav-links">Wie es funktioniert</a></li>
                        </Link>
                        <Link activeClass="active" to="whyWe" spy={true} smooth={true} duration={500}>
                            <li><a className="top-nav-links">Warum wir?</a></li>
                        </Link>
                        <Link activeClass="active" to="checkNow" spy={true} smooth={true} duration={500}>
                            <li><a className="contact-btn">Jetzt prüfen</a></li>
                        </Link>
                    </ul>
                    <a href="contact">
                        <Link activeClass="active" to="checkNow" spy={true} smooth={true} duration={500}>
                            <button className="responsive-nav-btn">
                                Jetzt prüfen
                            </button>
                        </Link>
                    </a>
                </nav>
                <div style={backgroundImage} className="test" id="checkNow">
                    <div className="inner-hero">
                        <div className="box-wrapper">
                            <form className="check-form" noValidate onSubmit={this.onFormSubmit}>
                                <h1>Nebenkosten prüfen lassen</h1>
                                <ul>
                                    <li>8 / 10 Nebenkostenabrechnungen sind fehlerhaft</li>
                                    <li>Im Schnitt wird €238,- zu viel verlangt</li>
                                    <li>Jetzt Nebenkostenabrechnung prüfen und Geld zurück erhalten</li>
                                </ul>
                                <label>Vollständiger Name*</label>
                                <input type="text" placeholder="Vollständiger Name" required value={this.state.name}
                                       onChange={(evt) => this.updateName(evt)}/>
                                <label>E-Mail*</label>
                                <input type="email" placeholder="E-Mail" required value={this.state.email}
                                       onChange={(evt) => this.updateEmail(evt)}/>
                                <label>Anmerkung</label>
                                <input type="text" placeholder="Fragen & Anmerkungen" value={this.state.hinweis}
                                       onChange={(evt) => this.updateHinweis(evt)}/>
                                <label>Nebenkostenabrechnung hochladen*</label>
                                <ReactFilestack
                                    required
                                    apikey={'ASpqCRkoFTraFm44hy3zkz'}
                                    customRender={({onPick}) => (
                                        <div className="upload">
                                            <button className="hochladen-button" onClick={onPick}>Datei auswählen
                                            </button>
                                            {this.state.uploadnebenkosten ? <div>
                                                <img className="checkbutton" src={require('../assets/checked.png')}
                                                     alt="check"/>
                                            </div> : <div className="empty">Keine ausgewählt</div>}
                                        </div>
                                    )}
                                    onSuccess={(result) => this.onSuccessNebenkosten(result)}
                                />


                                <label>Mietvertrag hochladen*</label>

                                <ReactFilestack
                                    required
                                    apikey={'ASpqCRkoFTraFm44hy3zkz'}
                                    customRender={({onPick}) => (
                                        <div className="upload">
                                            <button className="hochladen-button" onClick={onPick}>Datei auswählen
                                            </button>
                                            {this.state.uploadmietvertrag ? <div>
                                                <img className="checkbutton" src={require('../assets/checked.png')}
                                                     alt="check"/>
                                            </div> : <div className="empty">Keine ausgewählt</div>}
                                        </div>
                                    )}
                                    onSuccess={(result) => this.onSuccessMietvertrag(result)}
                                />

                                <label>Paket auswählen*</label>
                                <div className="drop-down-wrapper">
                                    <img src={require('../assets/dropdown-icon.svg')} className="drop-down-icon"/>
                                    <select onChange={this.dropdownhandleChange}>
                                        <option value="basic">Basic €39,- (5-10 Werktage)</option>
                                        <option value="express">Express €49,- (48 Stunden)</option>
                                    </select>
                                </div>
                                {this.state.missing && <p id="errorMessage">Bitte fülle alle Felder korrekt aus :)</p>}
                                <button type="submit" className={this.state.missing ? "primary-btn1" : "primary-btn"}  onClick={this.submit}>Nebenkosten prüfen
                                </button>
                            </form>

                        </div>
                        <div className="hero-text-wrapper">
                            <h1 className="hero-header">
                                Nebenkosten überprüfen lassen
                            </h1>
                            <p className="hero-sub-header">
                                • <b>8 / 10</b> Nebenkostenabrechnungen sind fehlerhaft
                            </p>
                            <p className="hero-sub-header">
                                • Im Schnitt wird <b>€238,-</b> zu viel verlangt
                            </p>
                            <p className="hero-sub-header">
                                • Jetzt Nebenkostenabrechnung prüfen und <b>Geld zurück</b> erhalten!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="background-gradient" id="scroll-to">
                    <div className="container">
                        <div className="text-media">
                            <div className="text">
                                <div className="underline-style-1"></div>
                                <div className="underline-style-2"></div>
                                <h1>Arten von Nebenkosten</h1>
                                <p>
                                    Nicht alle Kosten, die dem Vermieter im Zusammenhang mit dem vermietetem Objekt
                                    entstehen, können auf den Mieter umgelegt werden.
                                </p>
                            </div>
                            <div className="media">
                                <img src={require('../assets/background-pattern.svg')}
                                     className="background-pattern-2"/>
                                <img src={require('../assets/white-interior.jpg')} className="image-front"/>
                            </div>
                        </div>
                        <div className="text-media" id="text-media-reverse">
                            <div className="media">
                                <img src={require('../assets/background-pattern.svg')}
                                     className="background-pattern-1"/>
                                <img src={require('../assets/building.jpg')} className="image-front"/>
                            </div>
                            <div className="text">
                                <div className="underline-style-3"></div>
                                <div className="underline-style-4"></div>
                                <h1>Fehler in der Abrechnung</h1>
                                <p>
                                    Mieter in Deutschland zahlen jedes Jahr über 6 Milliarden Euro mehr für die Nebenkosten
                                    als es eigentlich erforderlich ist.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-gradient" id="service">
                    <div className="container">
                        <h1 className="section-header">
                            Unser Service
                        </h1>
                        <p className="section-sub-header">
                            Wir helfen Ihnen dabei schnell und einfach Ihre Nebenkostenabrechnung zu überprüfen und
                            leiten bei fehlerhafter Abrechnung alles in die Wege, sodass Sie das zu viel gezahlte Geld
                            umgehend vom Vermieter zurückerstattet bekommen.
                        </p>
                        <div className="feature-section">
                            <div className="feature-element">
                                <img src={require('../assets/document-icon.svg')}/>
                                <h3>Formularien</h3>
                                <p>
                                    Bei fehlerhafter Nebenkostenabrechnung stellen wir Ihnen ein vorformuliertes
                                    Widerspruchsschreiben aus, welches Sie bequem an den Vermieter weiterleiten, um Ihr
                                    Geld zurückzubekommen.
                                </p>
                            </div>
                            <div className="feature-element">
                                <img src={require('../assets/time-icon.svg')}/>
                                <h3>Schnell</h3>
                                <p>
                                    Bei uns erhalten Sie die Prüfergebnisse binne 48 Stunden. Schluss mit der Warterei!
                                    Prüfen Sie Ihre Abrechnung noch heute, um zu viel gezahltes Geld zurückerstattet zu
                                    bekommen.
                                </p>
                            </div>
                            <div className="feature-element">
                                <img src={require('../assets/service-icon.svg')}/>
                                <h3>Beratung</h3>
                                <p>
                                    Unsere Rechtsexperten stehen Ihnen immer zur Verfügung. Bei offenen Fragen können
                                    Sie uns ganz einfach und bequem telefonisch erreichen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="background-gradient" id="howTo">
                    <div className="container">
                        <h1 className="section-header">
                            So funktioniert's
                        </h1>
                        <p className="section-sub-header">
                            Laden Sie Ihre Dokumente schnell und bequem von Zuhause hoch und erhalten Sie Prüfergebnisse
                            binne 48 Stunden.
                        </p>
                        <div className="step-section">
                            <div id="line"></div>
                            <div className="step">
                                <div className="circle">
                                    <p>1</p>
                                </div>
                                <div className="step-description-wrapper">
                                    <p id="step-header">Einreichen</p>
                                    <p id="step-sub-header">
                                        Laden Sie Ihre Nebenkostenabrechnung und Mietvertrag über unsere Website hoch.
                                    </p>
                                    <button>Schritt 1</button>
                                </div>
                            </div>
                            <div className="step">
                                <div className="circle">
                                    <p>2</p>
                                </div>
                                <div className="step-description-wrapper">
                                    <p id="step-header">Prüfung</p>
                                    <p id="step-sub-header">
                                        Nach Überprüfung Ihrer Abrechnung erhalten Sie einen Prüfbericht und ein
                                        Widerspruchsschreiben.
                                    </p>
                                    <button>Schritt 2</button>
                                </div>
                            </div>
                            <div className="step">
                                <div className="circle">
                                    <p>3</p>
                                </div>
                                <div className="step-description-wrapper">
                                    <p id="step-header">Widerspruch</p>
                                    <p id="step-sub-header">
                                        Sie leiten das unterschriebene Wiederspruchschreiben einfach und bequem an den
                                        Vermieter weiter.
                                    </p>
                                    <button>Schritt 3</button>
                                </div>
                            </div>
                            <div className="step">
                                <div className="circle">
                                    <p>4</p>
                                </div>
                                <div className="step-description-wrapper">
                                    <p id="step-header">Geld zurück</p>
                                    <p id="step-sub-header">
                                        Ihr Vermieter erstatten das zu viel gezahlte Geld zurück und Sie erhalten eine
                                        neue Abrechnung.
                                    </p>
                                    <button>Schritt 4</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" id="newsletter-background">
                    <div className="newsletter-section">
                        <h1 className="section-header" id="newsletter-header">Unterlagen nicht zur Hand? Wir melden uns!</h1>
                        <form className={this.hideInput()} id="newsletter-signup-company"
                              onSubmit={this.onSubmit}>
                            <input className="newsletter-email" id="newsletter-email-company" placeholder="Deine E-Mail"
                                   type="email" name="emailnewsletter" value={this.state.emailnewsletter}
                                   onChange={this.onChange} autoComplete="off"
                                   required/>
                            <button className="newsletter-button" type="submit"
                                    onClick={this.newsletterSubmit}>Senden
                            </button>
                        </form>
                        <p className={this.showSuccess()}>Danke fürs Anmelden!</p>
                    </div>
                </div>

                <div className="background-gradient">
                    <div className="container">
                        <h1 className="section-header">
                            Was unsere Kunden sagen
                        </h1>
                        <div className="rezension-wrapper">
                            <div className="rezension">
                                <img src={require('../assets/rating.svg')} className="rating-icon"/>
                                <p className="rating-header">Super Beratung, Danke!</p>
                                <p className="rating-text">
                                    „Vielen Dank! Habe innerhalb von einem Tag den Prüfbericht erhalten und konnte so
                                    Geld vom Vermieter zurück verlangen. Immer wieder!"
                                </p>
                                <p className="rating-author">
                                    Christine Baumann
                                </p>
                            </div>
                            <div className="rezension">
                                <img src={require('../assets/rating.svg')} className="rating-icon"/>
                                <p className="rating-header">Eifnach & bequem</p>
                                <p className="rating-text">
                                    „Sabrine von Mietfixi konnte alle meine Fragen beanworten. Habe insgesamt über 800€
                                    vom Vermieter zurückbekommen."
                                </p>
                                <p className="rating-author">
                                    Stefan Ziebelt
                                </p>
                            </div>
                            <div className="rezension">
                                <img src={require('../assets/rating.svg')} className="rating-icon"/>
                                <p className="rating-header">390€ erstattet!</p>
                                <p className="rating-text">
                                    „Habe 390€ zurückerstattet bekommen. Kann Mietfixi an jedem weiter empfehlen. Klasse
                                    Beratung und schneller Service."
                                </p>
                                <p className="rating-author">
                                    Therese Lutz
                                </p>
                            </div>
                            <div className="rezension">
                                <img src={require('../assets/rating.svg')} className="rating-icon"/>
                                <p className="rating-header">Nichts auszusetzen!</p>
                                <p className="rating-text">
                                    „Habe meinen Bericht wie versprochen innerhalb von 2 Tagen erhalten und habe so
                                    mein Geld zurück bekommen."
                                </p>
                                <p className="rating-author">
                                    Bruno Heines
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="background-gradient">
                    <div className="container" id="whyWe">
                        <h1 className="section-header">
                            Mietfixi im Vergleich
                        </h1>
                        <p className="section-sub-header">
                            Dank unseres Algorithmus und unserer jahrelangen Expertise in der Überprüfung von
                            Nebenkostenabrechnung mit führenden Rechtsexperten sind wir schneller und genauer als unsere
                            Alternativen.
                        </p>
                        <div className="overflow-content">
                            <table>
                                <tbody>
                                <tr>
                                    <th></th>
                                    <th className="table-center table-highlight table-highlight-top table-header">Mietfixi</th>
                                    <th className="table-center table-header">Auf eigene Faust</th>
                                    <th className="table-center table-header">Anwalt</th>
                                </tr>
                                <tr className="even">
                                    <td className="table-header">Kosten</td>
                                    <td className="table-center table-highlight"><b>Fixpreis schon ab €39,-</b></td>
                                    <td className="table-center">Keine, aber viele Nerven</td>
                                    <td className="table-center">Mehrere hundert Euro</td>
                                </tr>
                                <tr>
                                    <td className="table-header">Aufwand</td>
                                    <td className="table-center table-highlight"><b>Hochladen in 2 Min.</b></td>
                                    <td className="table-center">Sehr hoch</td>
                                    <td className="table-center">Hoch</td>
                                </tr>
                                <tr className="even">
                                    <td className="table-header">Ergebnis</td>
                                    <td className="table-center table-highlight"><b>Detaillierter Prüfbericht</b></td>
                                    <td className="table-center">Teilweise</td>
                                    <td className="table-center">Unübersichtlich</td>
                                </tr>
                                <tr>
                                    <td className="table-header">Stress</td>
                                    <td className="table-center table-highlight table-highlight-bottom"><b>Kein
                                        Stress</b>
                                    </td>
                                    <td className="table-center">Hoher Stress</td>
                                    <td className="table-center">Hoher Stress</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <footer className="container" id="footer-container">
                    <div className="footer-column-left">
                        <h2 className="footer-header">Mietfixi</h2>
                        <p>© Copyright 2019 Keeet UG (haftungsbeschränkt)</p>
                        <p>Alle Rechte vorbehalten.</p>
                    </div>
                    <div className="footer-column-right">
                        <h3 className="footer-header">Mietfixi</h3>
                        <ul>
                            <Link activeClass="active" to="service" spy={true} smooth={true} duration={500}>
                                <li><a href="../">Unser Service</a></li>
                            </Link>
                            <Link activeClass="active" to="howTo" spy={true} smooth={true} duration={500}>
                                <li><a href="student">Wie es funktioniert</a></li>
                            </Link>
                            <Link activeClass="active" to="whyWe" spy={true} smooth={true} duration={500}>
                                <li><a href="help">Warum wir?</a></li>
                            </Link>
                            <Link activeClass="active" to="checkNow" spy={true} smooth={true} duration={500}>
                                <li><a href="contact">Jetzt prüfen</a></li>
                            </Link>
                        </ul>
                    </div>
                    <Footer/>
                    <div className="footer-column-right">
                        <h3 className="footer-header">Folge uns</h3>
                        <a href="#" target="_blank" className="footer-icon"><i className="fa fa-twitter-square"></i></a>
                        <a href="#" target="_blank" className="footer-icon"><i
                            className="fa fa-facebook-square"></i></a>
                        <a href="#" target="_blank" className="footer-icon"><i className="fa fa-instagram"></i></a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Main;