import React from "react";
import "./SubscribeForm.css"

function SubscribeForm() {

    function handleOnClick(e) {
        const input = document.getElementById("subscribe-form-input").value
        console.log(input)
    }

    return (
        <div className="subscribe-form-container">
            <div className="subscribe-form">
                <div id="subscribe-form-title">
                    <h1 style={{padding: "0px", margin:"0px"}}>Følg med på de kommende udstillinger</h1>
                </div>
                <div id="subscribe-form-description">
                    <p style={{padding: "0px", margin:"0px"}}> 
                        Abooner til mit nyhedsbrev for at aldirg gå glip af mine kommende udstillinger
                    </p>
                </div>
                <div className="subscribe-form-input-container">
                    <form>
                        <input id="subscribe-form-input" type="email" placeholder="Email Adresse" required></input>
                        <div id="subscribe-form-button" onClick={handleOnClick}>
                            Abonner
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubscribeForm