import React, {Component} from 'react';
import "../App.css";
import "./Legal.css";
import {Link} from "react-router-dom";

class Datenschutz extends Component {

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
                        <h1 className="legal-headline">
                            Datenschutzerklärung
                        </h1>
                        <br/>
                        <br/>
                        <br/>
                        <p className="legal-sub-headline">Allgemeine Hinweise</p>
                        <p className="legal-text">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                            personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten
                            sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
                            Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                            Datenschutzerklärung.
                        </p>
                        <p className="legal-sub-headline">Datenerfassung auf unserer Website</p>
                        <p className="legal-text">
                            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                            <br/>
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                            Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                            <br/>
                            Wie erfassen wir Ihre Daten?
                            <br/>
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                            sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden
                            automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
                            technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                            Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
                            <br/>
                            Wofür nutzen wir Ihre Daten?
                            <br/>
                            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                            <br/>
                            Welche Rechte haben Sie bezüglich Ihrer Daten?
                            <br/>
                            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                            Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
                            Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
                            Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen
                            Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                            Aufsichtsbehörde zu. Außerdem haben Sie das Recht, unter bestimmten Umständen die
                            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu
                            entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.
                        </p>
                        <p className="legal-sub-headline">Analyse-Tools und Tools von Drittanbietern</p>
                        <p className="legal-text">
                            Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das
                            geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres
                            Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen
                            zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die
                            Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen zu diesen Tools und
                            über Ihre Widerspruchsmöglichkeiten finden Sie in der folgenden Datenschutzerklärung.
                        </p>
                        <p className="legal-sub-headline">Datenschutz
                        </p>
                        <p className="legal-text">
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                            Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen,
                            werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit
                            denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung
                            erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
                            welchem Zweck das geschieht. Wir weisen darauf hin, dass die Datenübertragung im Internet
                            (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser
                            Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                        </p>
                        <p className="legal-sub-headline">Widerruf Ihrer Einwilligung zur Datenverarbeitung</p>
                        <p className="legal-text">
                            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
                            können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
                            Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                            Datenverarbeitung bleibt vom Widerruf unberührt.
                        </p>
                        <p className="legal-sub-headline">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
                            sowie gegen Direktwerbung (Art. 21 DSGVO)</p>
                        <p className="legal-text">
                            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
                            haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                            gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch
                            für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf
                            denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie
                            Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr
                            verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
                            nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung
                            dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach
                            Art. 21 Abs. 1 DSGVO). Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu
                            betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie
                            betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt
                            auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
                            widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der
                            Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
                        </p>
                        <p className="legal-sub-headline">Beschwerderecht bei der zuständigen Aufsichtsbehörde</p>
                        <p className="legal-text">
                            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                            Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
                            unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                        </p>
                        <p className="legal-sub-headline">Recht auf Datenübertragbarkeit</p>
                        <p className="legal-text">
                            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
                            Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
                            maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
                            an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar
                            ist.
                        </p>
                        <p className="legal-sub-headline">SSL- bzw. TLS-Verschlüsselung</p>
                        <p className="legal-text">
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                            Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
                            senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                            daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem
                            Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist,
                            können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                        </p>
                        <p className="legal-sub-headline">Auskunft, Sperrung, Löschung und Berichtigung</p>
                        <p className="legal-text">
                            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                            unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
                            Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung
                            oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
                            können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                        </p>
                        <p className="legal-sub-headline">Widerspruch gegen Werbe-E-Mails</p>
                        <p className="legal-text">
                            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
                            Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird
                            hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
                            Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
                            Spam-E-Mails, vor.
                        </p>
                        <p className="legal-sub-headline">Cookies</p>
                        <p className="legal-text">
                            Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem
                            Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot
                            nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die
                            auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von uns
                            verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs
                            automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese
                            löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch
                            wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
                            Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies
                            für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies
                            beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die
                            Funktionalität dieser Website eingeschränkt sein. Cookies, die zur Durchführung des
                            elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen
                            erwünschter Funktionen (z. B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von
                            Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse
                            an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung
                            seiner Dienste. Soweit andere Cookies (z. B. Cookies zur Analyse Ihres Surfverhaltens)
                            gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.
                        </p>
                        <p className="legal-sub-headline">Datenübermittlung bei Vertragsschluss für Dienstleistungen und
                            digitale Inhalte</p>
                        <p className="legal-text">
                            Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der
                            Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte
                            Kreditinstitut. Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn
                            Sie der Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte
                            ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht. Grundlage für
                            die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur
                            Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
                        </p>
                        <p className="legal-sub-headline">Google Analytics</p>
                        <p className="legal-text">
                            Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die
                            Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Google
                            Analytics verwendet so genannte „Cookies“. Das sind Textdateien, die auf Ihrem Computer
                            gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die
                            durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der
                            Regel an einen Server von Google in den USA übertragen und dort gespeichert. Die Speicherung
                            von Google-Analytics-Cookies und die Nutzung dieses Analyse-Tools erfolgen auf Grundlage von
                            Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
                            Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu
                            optimieren.
                            <br/>
                            IP Anonymisierung
                            <br/>
                            Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre
                            IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
                            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in
                            die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google
                            in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google
                            diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
                            Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der
                            Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die
                            im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit
                            anderen Daten von Google zusammengeführt.
                            <br/>
                            Browser Plugin
                            <br/>
                            Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
                            Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                            gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen
                            können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre
                            Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
                            Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link
                            verfügbare Browser-Plugin herunterladen und installieren:
                            https://tools.google.com/dlpage/gaoptout?hl=de.
                            <br/>
                            Widerspruch gegen Datenerfassung
                            <br/>
                            Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie hier
                            klicken;. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen
                            Besuchen dieser Website verhindert: Google Analytics deaktivieren. Mehr Informationen zum
                            Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von
                            Google: https://support.google.com/analytics/answer/6004245?hl=de. [a]
                            <br/>
                            Auftragsverarbeitung
                            <br/>
                            Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die
                            strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics
                            vollständig um.
                            <br/>
                            Demografische Merkmale bei Google Analytics
                            <br/>
                            Diese Website nutzt die Funktion „demografische Merkmale“ von Google Analytics. Dadurch
                            können Berichte erstellt werden, die Aussagen zu Alter, Geschlecht und Interessen der
                            Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google
                            sowie aus Besucherdaten von Drittanbietern. Diese Daten können keiner bestimmten Person
                            zugeordnet werden. Sie können diese Funktion jederzeit über die Anzeigeneinstellungen in
                            Ihrem Google-Konto deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics wie im
                            Punkt „Widerspruch gegen Datenerfassung“ dargestellt generell untersagen.
                            <br/>
                            Speicherdauer
                            <br/>
                            Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit Cookies,
                            Nutzerkennungen (z. B. User ID) oder Werbe-IDs (z. B. DoubleClick-Cookies, Android-Werbe-ID)
                            verknüpft sind, werden nach 14 Monaten anonymisiert bzw. gelöscht. Details hierzu ersehen
                            Sie unter folgendem Link: https://support.google.com/analytics/answer/7667196?hl=de
                        </p>
                        <p className="legal-sub-headline">Google Analytics Remarketing</p>
                        <p className="legal-text">
                            Unsere Websites nutzen die Funktionen von Google Analytics Remarketing in Verbindung mit den
                            geräteübergreifenden Funktionen von Google AdWords/Google Ads und Google DoubleClick.
                            Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4,
                            Irland. Diese Funktion ermöglicht es die mit Google Analytics Remarketing erstellten
                            Werbe-Zielgruppen mit den geräteübergreifenden Funktionen von Google AdWords und Google
                            DoubleClick zu verknüpfen. Auf diese Weise können interessenbezogene, personalisierte
                            Werbebotschaften, die in Abhängigkeit Ihres früheren Nutzungs- und Surfverhaltens auf einem
                            Endgerät (z. B. Handy) an Sie angepasst wurden auch auf einem anderen Ihrer Endgeräte (z. B.
                            Tablet oder PC) angezeigt werden. Haben Sie eine entsprechende Einwilligung erteilt,
                            verknüpft Google zu diesem Zweck Ihren Web- und App-Browserverlauf mit Ihrem Google-Konto.
                            Auf diese Weise können auf jedem Endgerät auf dem Sie sich mit Ihrem Google-Konto anmelden,
                            dieselben personalisierten Werbebotschaften geschaltet werden. Zur Unterstützung dieser
                            Funktion erfasst Google Analytics google-authentifizierte IDs der Nutzer, die vorübergehend
                            mit unseren Google-Analytics-Daten verknüpft werden, um Zielgruppen für die
                            geräteübergreifende Anzeigenwerbung zu definieren und zu erstellen. Sie können dem
                            geräteübergreifenden Remarketing/Targeting dauerhaft widersprechen, indem Sie
                            personalisierte Werbung in Ihrem Google-Konto deaktivieren; folgen Sie hierzu diesem Link:
                            https://www.google.com/settings/ads/onweb/. Die Zusammenfassung der erfassten Daten in Ihrem
                            Google-Konto erfolgt ausschließlich auf Grundlage Ihrer Einwilligung, die Sie bei Google
                            abgeben oder widerrufen können (Art. 6 Abs. 1 lit. a DSGVO). Bei Datenerfassungsvorgängen,
                            die nicht in Ihrem Google-Konto zusammengeführt werden (z. B. weil Sie kein Google-Konto
                            haben oder der Zusammenführung widersprochen haben) beruht die Erfassung der Daten auf Art.
                            6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse ergibt sich daraus, dass der
                            Websitebetreiber ein Interesse an der anonymisierten Analyse der Websitebesucher zu
                            Werbezwecken hat. Weitergehende Informationen und die Datenschutzbestimmungen finden Sie in
                            der Datenschutzerklärung von Google unter:
                            https://policies.google.com/technologies/ads?hl=de.
                        </p>
                        <p className="legal-sub-headline">Google AdWords/Ads und Google Conversion-Tracking</p>
                        <p className="legal-text">
                            Diese Website verwendet Google AdWords. AdWords ist ein Online-Werbeprogramm der Google
                            Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Im Rahmen von
                            Google AdWords nutzen wir das so genannte Conversion-Tracking. Wenn Sie auf eine von Google
                            geschaltete Anzeige klicken wird ein Cookie für das Conversion-Tracking gesetzt. Bei Cookies
                            handelt es sich um kleine Textdateien, die der Internet-Browser auf dem Computer des Nutzers
                            ablegt. Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der
                            persönlichen Identifizierung der Nutzer. Besucht der Nutzer bestimmte Seiten dieser Website
                            und das Cookie ist noch nicht abgelaufen, können Google und wir erkennen, dass der Nutzer
                            auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder Google
                            AdWords-Kunde erhält ein anderes Cookie. Die Cookies können nicht über die Websites von
                            AdWords-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten
                            Informationen dienen dazu, Conversion-Statistiken für AdWords-Kunden zu erstellen, die sich
                            für Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer,
                            die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag
                            versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen
                            sich Nutzer persönlich identifizieren lassen. Wenn Sie nicht am Tracking teilnehmen möchten,
                            können Sie dieser Nutzung widersprechen, indem Sie das Cookie des Google
                            Conversion-Trackings über ihren Internet-Browser unter Nutzereinstellungen leicht
                            deaktivieren. Sie werden sodann nicht in die Conversion-Tracking Statistiken aufgenommen.
                            Die Speicherung von „Conversion-Cookies“ und die Nutzung dieses Tracking-Tools erfolgen auf
                            Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
                            Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine
                            Werbung zu optimieren. Mehr Informationen zu Google AdWords und Google Conversion-Tracking
                            finden Sie in den Datenschutzbestimmungen von Google:
                            https://policies.google.com/privacy?hl=de. Sie können Ihren Browser so einstellen, dass Sie
                            über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
                            Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische
                            Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies
                            kann die Funktionalität dieser Website eingeschränkt sein.
                        </p>
                        <p className="legal-sub-headline">Google Tag Manager</p>
                        <p className="legal-text">
                            Unsere Webseite nutzt das Tool "Google Tag Manager" der Google Inc., 1600 Amphitheatre
                            Parkway, Mountain View, CA 94043, USA. Mit Hilfe des Tag Managers implementieren wir einige
                            der in dieser Erklärung genannten Tools. Sie können daher die Einzelheiten dem Abschnitt des
                            jeweiligen Tools entnehmen. Der Google Tag Manager selbst setzt weder Cookies noch werden
                            Daten erhoben. Der Tag Manager führt lediglich bei bestimmten Aktionen Skripte aus, die dann
                            Daten erfassen. Google Tag Manager greift nicht auf diese Daten zu. Weitere Informationen
                            zum Google Tag Manager finden sie unter folgendem Link:
                            https://www.google.com/intl/de/tagmanager/use-policy.html
                        </p>
                        <p className="legal-sub-headline">Microsoft Event-Tracking</p>
                        <p className="legal-text">
                            Wir erheben und speichern auf unserer Webseite Daten zur Webseitennutzung mit Hilfe des
                            "Bing Universal Event Trackings". Dies ist ein Dienst der Microsoft Corporation, One
                            Microsoft Way, Redmond, WA 98052-6399, USA. Dieser Dienst gibt uns die Möglichkeit, die
                            Aktivitäten von Webseitenbesuchern nachzuverfolgen und zu speichern, wenn diese zuvor auf
                            eine unserer Bing-Werbeanzeigen (inkl. Suchnetzwerkpartner) geklickt haben. Gelangt ein
                            Besucher wie zuvor beschrieben auf unsere Webseite, wird auf seinem Computer ein Cookie
                            gesetzt. Auf unserer Webseite ist ein Bing UET-Tag eingebaut. Hierbei handelt es sich um
                            einen Code, der es uns ermöglicht, in Verbindung mit dem gesetzten Cookie, einige
                            nicht-persönliche Informationen über das Nutzungsverhalten des Besuchers auf unserer
                            Webseite zu erheben und zu speichern. Zu den erhobenen Informationen gehören unter anderem
                            die Verweildauer auf der Webseite, die einzelnen aufgerufenen Seiten sowie die Anzeige,
                            welcher der Besucher geklickt hat. Es werden hierbei keine persönliche Informationen
                            erhoben.
                            Die erhobenen Daten werden zur Verarbeitung an die Server von Microsoft gesendet. Die Daten
                            werden dort grundsätzlich maximal 360 Tage gespeichert.
                            <br/>
                            Sie können das setzen des Cookies und das damit verbundene Erfassen Ihres Nutzungsverhaltens
                            über einen Klick auf diesen Link verhindern.
                            <br/>
                            Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung
                            der Website bezogenen Daten sowie die Verarbeitung dieser Daten durch Microsoft verhindern,
                            indem sie das unter dem folgenden Link: http://choice.microsoft.com/de-DE/opt-out Ihren
                            Widerspruch erklären.
                            <br/>
                            Sie finden weitere Informationen zum generellen Datenschutz und der Verarbeitung Ihrer Daten
                            von Microsoft unter folgendem Link: https://privacy.microsoft.com/de-de/privacystatement
                        </p>
                        <p className="legal-sub-headline">Nutzung der SalesViewer-Technologie</p>
                        <p className="legal-text">
                            Auf dieser Webseite werden mit der SalesViewer®-Technologie der SalesViewer® GmbH auf
                            Grundlage berechtigter Interessen des Webseitenbetreibers (Art. 6 Abs.1 lit.f DSGVO) Daten
                            zu Marketing-, Marktforschungs- und Optimierungszwecken gesammelt und gespeichert. Hierzu
                            wird ein javascript-basierter Code eingesetzt, der zur Erhebung unternehmensbezogener Daten
                            und der entsprechenden Nutzung dient. Die mit dieser Technologie erhobenen Daten werden über
                            eine nicht rückrechenbare Einwegfunktion (sog. Hashing) verschlüsselt. Die Daten werden
                            unmittelbar pseudonymisiert und nicht dazu benutzt, den Besucher dieser Webseite persönlich
                            zu identifizieren. Die im Rahmen von Salesviewer gespeicherten Daten werden gelöscht, sobald
                            sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine
                            gesetzlichen Aufbewahrungspflichten entgegenstehen. Der Datenerhebung und -speicherung kann
                            jederzeit mit Wirkung für die Zukunft widersprochen werden, indem Sie bitte diesen Link
                            https://www.salesviewer.com/opt-out anklicken, um die Erfassung durch SalesViewer® innerhalb
                            dieser Webseite zukünftig zu verhindern. Dabei wird ein Opt-out-Cookie für diese Webseite
                            auf Ihrem Gerät abgelegt. Löschen Sie Ihre Cookies in diesem Browser, müssen Sie diesen Link
                            erneut klicken.
                        </p>
                        <p className="legal-sub-headline">Facebook Pixel</p>
                        <p className="legal-text">
                            Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook, Facebook
                            Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA („Facebook“). So kann das Verhalten
                            der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine
                            Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch können
                            die Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke
                            ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden. Die erhobenen Daten sind
                            für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse auf die Identität
                            der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, sodass
                            eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten für eigene
                            Werbezwecke, entsprechend der Facebook-Datenverwendungsrichtlinie verwenden kann. Dadurch
                            kann Facebook das Schalten von Werbeanzeigen auf Seiten von Facebook sowie außerhalb von
                            Facebook ermöglichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht
                            beeinflusst werden. Die Nutzung von Facebook-Pixel erfolgt auf Grundlage von Art. 6 Abs. 1
                            lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an effektiven
                            Werbemaßnahmen unter Einschluss der sozialen Medien. In den Datenschutzhinweisen von
                            Facebook finden Sie weitere Hinweise zum Schutz Ihrer Privatsphäre:
                            https://de-de.facebook.com/about/privacy/. Sie können außerdem die Remarketing-Funktion
                            „Custom Audiences“ im Bereich Einstellungen für Werbeanzeigen unter
                            https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen deaktivieren.
                            Dazu müssen Sie bei Facebook angemeldet sein. Wenn Sie kein Facebook Konto besitzen, können
                            Sie nutzungsbasierte Werbung von Facebook auf der Website der European Interactive Digital
                            Advertising Alliance deaktivieren:
                            http://www.youronlinechoices.com/de/praferenzmanagement/.Zusätzlich können sie über einen
                            Klick auf diesen Link das Tracking durch den Facebook Pixel auf unserer Webseite
                            deaktivieren.
                        </p>
                        <p className="legal-sub-headline">Newsletter Daten</p>
                        <p className="legal-text">
                            Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von
                            Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass
                            Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters
                            einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben.
                            Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und
                            geben diese nicht an Dritte weiter. Die Verarbeitung der in das Newsletteranmeldeformular
                            eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
                            lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie
                            deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den
                            „Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten
                            Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von Ihnen zum Zwecke des
                            Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem
                            Newsletter gespeichert und nach der Abbestellung des Newsletters gelöscht. Daten, die zu
                            anderen Zwecken bei uns gespeichert wurden bleiben hiervon unberührt.
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

export default Datenschutz;