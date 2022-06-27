import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


import "./footer.css"

function Footer() {
    return ( 
        <div className="footer">
            <div className="footer-container">
                <ul>
                    <li id="list-container">
                    {/* <FontAwesomeIcon icon={solid("fa-solid fa-phone")}/> */}
                        <div id="telf-container">
                            <p>Telf: 45+ 00 11 22 33</p>
                        </div>
                    </li>
                    <li id="list-container">
                    {/* <FontAwesomeIcon icon={solid('user-secret')} /> */}
                        <div id="mail-container">
                            <p>e-mail: email123@hotmail.com</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default Footer;