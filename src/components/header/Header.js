import React from "react"
import "./Header.css"
import {useNavigate, Link} from "react-router-dom"

function Header() {
    const navigate = useNavigate();
    return ( 
        <div className="header">
            <div className="header-home-text-container">
                <h1 id="header-home-text" onClick={() => navigate("/")}>Galleri Taulo</h1>
            </div>
                <ul id="list">
                    <Link to="/instagram" id="header-list-links">INSTAGRAM</Link>
                    {/* <li id="header-list-links">INSTAGRAM</li> */}
                    <li id="header-list-links">OM</li>
                    <Link to="/udstillinger" id="header-list-links">UDSTILLINGER</Link>
                </ul>
        </div>
     );
}

export default Header;