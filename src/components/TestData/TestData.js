
import React, { useEffect, useState } from "react"
import "./TestData.css"
import Firebase from "../../service/Firebase/FirebaseService"

function TestData() {
    const firebase = new Firebase()
    const [imageFileURL, setImageFileURL] = useState([])

    useEffect(() => {
        async function getFilesURLFromStorage() {
            setImageFileURL(await firebase.getAllFilesFromDB())
        }       
        // if (imageFileURL.length <= 0) return

        getFilesURLFromStorage()
    }, [])

    function displayImages() {
            return imageFileURL.map((item, index) => {
                return (<div key={index} className="main-column">
                    <li className="main-li-items" key={index}>
                        <img className="main-img-items" src={item.url} alt={item.name} onClick={() => window.open(item.url)}></img>
                    </li>
                </div>)
            }
        )
    }

    return (
        <div className="main-list-container">
            <ul className="main-list">
                {displayImages()}
            </ul>
        </div>
    );
}

export default TestData;