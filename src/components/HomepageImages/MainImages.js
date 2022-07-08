
import React, { useEffect, useState } from "react"
import "./MainImages.css"
import Firebase from "../../service/Firebase/FirebaseService"

function MainImages() {
    const firebase = new Firebase()
    const [imageFileURL, setImageFileURL] = useState([])

    useEffect(() => {
        async function getFilesURLFromStorage() {
            setImageFileURL(await firebase.getAllFilesFromDB())
        }       
        getFilesURLFromStorage()
    }, [])

    function displayImages() {
           return imageFileURL.map((item, index) => {
                return (
                    <div key={index} className="main-column">
                        <li className="main-li-items">
                            <img style={{display: ""}} className="main-img-items" src={item.url} alt={item.name} onClick={() => window.open(item.url)}></img>
                        </li>
                    </div>
                )
            }
        )
    }

    return (
        <div className="main-list-container">
            <ul className="main-list">
                {
                    displayImages()
                }
            </ul>
        </div>
    );
}

export default MainImages;