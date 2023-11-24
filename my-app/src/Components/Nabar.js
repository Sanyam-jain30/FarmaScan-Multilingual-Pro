import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">FramaScan Multilingual Pro</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/test"> Test </Link> 
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/example">Examples</a>
                </li>
                <li className="nav-item dropdown">
                    <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" onLoad={() => {
                            const googleTranslateElementInit = () => {
                                new window.google.translate.TranslateElement({ pageLanguage: 'en'} , 'google_translate_element')
                            }
                            window.googleTranslateElementInit = googleTranslateElementInit;
                    }}/>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;