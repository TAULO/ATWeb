import React, { useState } from "react";
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
                        <div id="exhibiton-description">
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel porttitor ante, id cursus eros. Etiam ut ligula posuere, gravida metus vitae, vehicula tortor. Phasellus egestas nibh et felis porta varius. In vestibulum ornare nunc posuere interdum. Pellentesque habitant morbi tristique senectus et netus et.
                            Phasellus egestas nibh et felis porta varius. In vestibulum ornare nunc posuere interdum. Pellentesque habitant morbi tristique senectus et netus et. */}
                            {element.description}
                        </div>
                        <div id="exhibiton-adress">
                            {element.address}
                        </div>
                        <div id="exhibiton-date-container">
                            <p>{element.startDate}</p>
                            <p>{element.endDate}</p>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default ExhibitionTemplate