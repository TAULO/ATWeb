import React, { useEffect, useState} from "react"

function GetImagesFromWeb(token) { 
    const url = `https://graph.instagram.com/me/media?fields=media_url&access_token=${token}`
    const [imgURL, setImgURL] = useState([])

    async function fetchImage() {
        const response = await fetch(url)

    if (response.status === 200) {
            console.log("Request succeeded")
            return await response.json();
        } else {
            console.log("ERROR: ", response.status)
        }
    }

    useEffect(() => {
        const getImages = async function() {
            let data = await fetchImage();
            setImgURL(data.data)
        } 
        getImages()
    },[])

    return imgURL;
}

export default GetImagesFromWeb