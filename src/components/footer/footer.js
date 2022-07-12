import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import "./footer.css"

function Footer() {
    return ( 
            <div className="footer">
                {/* <ul>
                    <li id="list-container">
                        <div id="telf-container">
                            <p>Telf: 45+ 00 11 22 33</p>
                        </div>
                    </li>
                    <li id="list-container">
                        <div id="mail-container">
                            <p>e-mail: email123@hotmail.com</p>
                        </div>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInstagram} />                   
                    </li>
                </ul> */}
                <div id="telf-container">
                    Telf: 45+ 00 11 22 33
                </div>
                
                <div id="mail-container">
                    e-mail: email123@hotmail.com
                </div>

                <div id="instagram-icon-container">
                    <a href="https://www.instagram.com/anettetaulo/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="fa-4x"/>                   
                    </a>
                </div>
            </div>
     );
}

export default Footer;