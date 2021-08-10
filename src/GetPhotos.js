import React from "react";
import { Link } from "react-router-dom";

const urlPix = "https://pixabay.com/api/?key=22675015-65668441eb8a404353873b15e&q=cities&image_type=photo&per_page=100"

export default function GetPhotos({photos,setPhotos}){
    const [image, setImage] = React.useState({})
    // const [check, setCheck] = React.useState()

    React.useEffect(() =>{
        async function getImages() {
            const response = await fetch(urlPix)
            const data = await response.json()

            if(data.hits){
                const{
                    id,
                    previewURL,
                    tags,
                } = data.hits
                const newImages = {
                    id,
                    previewURL,
                    tags,
                }
                setImage(newImages)
            } else {
                setImage(null)
            }
        }
        getImages()
    }, [])

    if(!image){
        return <h1>No Photo to Display</h1>
    } else{
        const{
            id,
            previewURL,
            tags
        } = image
        return (
            <Link key={id} to={`/photo/}`}>
                <div className="image">
                    <img src={previewURL} alt={tags} />
                </div>
                <h2>{tags}</h2>
            </Link>
        )
    }
}