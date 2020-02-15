import React, {Component} from 'react';
import "../App.css";
import {Link} from "react-router-dom";

class Footer extends Component {

    render() {
        return (
            <div className="footer-column-right">
                <h3 className="footer-header">Recht</h3>
                <ul>
                    <Link to="/impressum" className="legal-link">
                        <li>Impressum</li>
                    </Link>
                    <Link to="/agb" className="legal-link">
                        <li>AGB</li>
                    </Link>
                    <Link to="/datenschutz" className="legal-link">
                        <li>Datenschutz</li>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default Footer;