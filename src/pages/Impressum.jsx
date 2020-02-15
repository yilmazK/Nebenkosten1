import React, {Component} from 'react';
import "../App.css";
import "./Legal.css";
import {Link} from "react-router-dom";

class Impressum extends Component {

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
                    <a href="../"><h2 className="logo-name"><b>Mietfixi</b></h2></a>
                    <ul className="nav-links">
                        <Link to="/">
                            <li><a href="student" className="top-nav-links" id="about">Unser Service</a></li>
                        </Link>
                        <Link to="/">
                            <li><a href="help" className="top-nav-links" id="work">Wie es funktioniert</a></li>
                        </Link>
                        <Link to="/">
                            <li><a href="blog" className="top-nav-links" id="work">Warum wir?</a></li>
                        </Link>
                        <Link to="/">
                            <li><a href="contact" className="contact-btn" id="contact">Jetzt prüfen</a></li>
                        </Link>
                    </ul>
                    <a href="contact">
                        <Link to="/">
                            <button className="responsive-nav-btn">
                                Jetzt prüfen
                            </button>
                        </Link>
                    </a>
                </nav>
                <div className="container">
                    <div id="legal-content-wrapper">
                        <h1 className="legal-headline">Imprint</h1>
                        <p className="legal-sub-headline">Keeet UG (haftungsbeschränkt)</p>
                        <p className="legal-text">
                            Markgrafenstraße 12-14 <br/>
                            10969 Berlin <br/>
                            Deutschland
                        </p>
                        <p className="legal-sub-headline">Vertreten durch folgende Geschäftsführer:</p>
                        <p className="legal-text">
                            Mika Hally <br/>
                            Yilmaz Köknar
                        </p>
                        <p className="legal-sub-headline">Kontakt</p>
                        <p className="legal-text">
                            E-Mail: mika.hally@code.berlin <br/>
                            E-Mail: yilmaz.koeknar@code.berlin
                        </p>
                        <p className="legal-sub-headline">Registereintrag</p>
                        <p className="legal-text">
                            Amtsgericht Berlin (Charlottenburg)<br/>
                            Registernummer: HRB206977
                        </p>
                        <p className="legal-sub-headline">Umsatzsteuer-ID:</p>
                        <p className="legal-text">
                            Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: (Noch nicht erteilt)
                        </p>
                        <br/>
                        <br/>
                        <br/>
                        <p className="legal-sub-headline">Haftung für Inhalte</p>
                        <p className="legal-text">
                            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                            Richtigkeit, Vollständigkeit und
                            Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als
                            Diensteanbieter sind wir gemäß § 7 Abs.1
                            TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                            verantwortlich. Nach §§ 8 bis 10 TMG sind
                            wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                            gespeicherte fremde Informationen zu
                            überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                            hinweisen. Verpflichtungen zur
                            Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                            Gesetzen bleiben hiervon unberührt.
                            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                            konkreten Rechtsverletzung
                            möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                            diese Inhalte umgehend entfernen.
                        </p>
                        <p className="legal-sub-headline">Haftung für Links</p>
                        <p className="legal-text">
                            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
                            keinen Einfluss haben. Deshalb
                            können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                            Inhalte der verlinkten Seiten ist
                            stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                            verlinkten Seiten wurden zum
                            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                            Inhalte waren zum Zeitpunkt der
                            Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
                            Seiten ist jedoch ohne konkrete
                            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                            Rechtsverletzungen werden wir
                            derartige Links umgehend entfernen.
                        </p>
                        <p className="legal-sub-headline">Urheberrecht</p>
                        <p className="legal-text">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                            unterliegen dem deutschen
                            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                            Verwertung außerhalb der Grenzen
                            des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                            bzw. Erstellers. Downloads und
                            Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                            gestattet. Soweit die Inhalte auf
                            dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                            Dritter beachtet. Insbesondere werden
                            Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                            Urheberrechtsverletzung aufmerksam
                            werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                            Rechtsverletzungen werden wir
                            derartige Inhalte umgehend entfernen.
                        </p>
                        <p className="legal-sub-headline">Datenschutz</p>
                        <p className="legal-text">
                            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener
                            Daten möglich. Soweit auf unseren
                            Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
                            eMail-Adressen) erhoben werden, erfolgt dies,
                            soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
                            ausdrückliche Zustimmung nicht an
                            Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im
                            Internet (z.B. bei der Kommunikation
                            per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten
                            vor dem Zugriff durch Dritte ist
                            nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                            Kontaktdaten durch Dritte zur
                            Übersendung von nicht ausdrücklich angeforderter Werbung und
                            Informationsmaterialien wird hiermit ausdrücklich
                            widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
                            Schritte im Falle der unverlangten
                            Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                        </p>
                        <p className="legal-sub-headline">Google Analytics</p>
                        <p className="legal-text">
                            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc.
                            (''Google''). Google Analytics
                            verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert
                            werden und die eine Analyse der
                            Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten
                            Informationen über Ihre Benutzung
                            dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google
                            in den USA übertragen und dort
                            gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der
                            Website auszuwerten, um Reports über
                            die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere
                            mit der Websitenutzung und der
                            Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese
                            Informationen gegebenenfalls an
                            Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte
                            diese Daten im Auftrag von Google
                            verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der
                            Google in Verbindung bringen. Sie
                            können die Installation der Cookies durch eine entsprechende Einstellung Ihrer
                            Browser Software verhindern; wir
                            weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
                            sämtliche Funktionen dieser Website
                            voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie
                            sich mit der Bearbeitung der über
                            Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu
                            dem zuvor benannten Zweck
                            einverstanden.
                        </p>
                    </div>
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
                            <Link to="/" className="nostyling">
                                <li><a href="../">Unser Service</a></li>
                            </Link>
                            <Link to="/" className="nostyling">
                                <li><a href="student">Wie es funktioniert</a></li>
                            </Link>
                            <Link to="/" className="nostyling">
                                <li><a href="help">Warum wir?</a></li>
                            </Link>
                            <Link to="/" className="nostyling">
                                <li><a href="contact">Jetzt prüfen</a></li>
                            </Link>
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

export default Impressum;