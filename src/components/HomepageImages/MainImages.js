import React, { useEffect, useRef, useState } from "react"
import "./MainImages.css"
import Firebase from "../../service/Firebase/FirebaseService"
import { doc } from "firebase/firestore/lite"

function MainImages() {
    const [imageFileURL, setImageFileURL] = useState([])
    const [imgStyle, setImgStyle] = useState("none")

    useEffect(() => {
        async function getFilesURLFromStorage() {
            const firebase = new Firebase()
            setImageFileURL(await firebase.getAllFilesFromDB())
        }       
        getFilesURLFromStorage()
    }, [])

    function displayImages() {
           return imageFileURL.map((item, index) => {
                return (
                    <div key={index} className="main-column">
                        <li className="main-li-items">
                            <img style={{display: imgStyle}} className="main-img-items" id={`item${index}`} src={item.url} alt={item.name} onClick={() => window.open(item.url)}></img>
                        </li>
                        {/* <button onClick={() => {setImgStyle("flex")}}>hej</button> */}

                    </div>
                )
            }
        )
    }

    function presentation() {
        const columnsArr = displayImages()
        const imagesArr = []

        setTimeout(() => {
            setImgStyle("none")
        }, 10)

        for (let column of columnsArr) {
            imagesArr.push(column.props.children.props.children)
        }
        const img = document.getElementById("item1")

        if (img !== null) {
            let index = 1;
            document.getElementById("item" + index).style.display = "flex"
            // setTimeout(() => {
            //     index++; 
            //     document.getElementById("item" + index).style.display = "flex"
            // }, 3000)

        }
        return imagesArr
    }
    return (
        <div className="main-list-container">
            <ul className="main-list">
                {
                    // displayImages()
                    presentation()
                }
            </ul>
        </div>
    );
}

export default MainImages;