import React, { useRef, useState } from "react";
import Firebase from "../../service/Firebase/FirebaseService";
import { useEffect } from "react";
import "./ExhibitionTemplate.css"

function ExhibitionTemplate(paams) {
    const firebase = new Firebase()
    const [exhibition, setExhibition] = useState([])
    
    useEffect(() => {
        async function fetchExhibitions() {
            setExhibition(await firebase.getExhibitonFromDB())
        }
        fetchExhibitions()
    }, [])

    return (
        exhibition.map(element => {
            return( 
                <div className="exhibiton-main-container">
                    <div className="exhibiton-container">
                        <div id="exhibiton-title">
                            <h1>{element.title}</h1>
                        </div>
                        <div id="exhibiton-image">
                            <img src={element.url} alt=""></img>
                        </div>
                        <div className="exhibiton-flex-container">
                            <div id="exhibiton-description">
                                {element.description}
                            </div>
                            <div id="exhibition-line"></div>
                            <div id="exhibiton-adress">
                                {element.address}
                            </div>
                        </div>
                        <div id="exhibiton-date-container">
                            <p>Starter Den: {element.startDate.replace("T", " kl ")}</p>
                            <p>Til {"&"} Med: {element.endDate.replace("T", " kl ")}</p>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default ExhibitionTemplate