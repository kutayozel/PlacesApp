import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "./Locations";

export default function GetPhotos(){
    const [image, setImage] = React.useState({})
    const {location} = useGlobalContext()
    var {id} = useParams()
    // const [check, setCheck] = React.useState()
    console.log(id)
    var data = location.find(obj=>{
        return obj.id == id
    })
    console.log(data)
    
    React.useEffect(() =>{
        function getImages() {
            // const response = await fetch(urlPix)
            // const data = await response.json()
            // const data = location.find(x => x.id === id)
            // console.log('data',data)
            if(location){
                const{
                    name,
                    population,
                    lng,
                    lat,
                    imageURL,
                } = location.find(obj=>{ return obj.id == id})
                const newImages = {
                    name,
                    population,
                    lng,
                    lat,
                    imageURL,
                }
                setImage(newImages)
            } else {
                setImage(null)
            }
        }
        getImages()
    }, [id])

    if(!image){
        return <h1>No Photo to Display</h1>
    } else{
        const{
            name,
            imageURL,
            population,
            lng,
            lat
        } = image
        return (
            <section>
                <div className="image">
                    <img src={imageURL} alt={name} />
                </div>
                <h2>Name: {name}</h2>
                <h2>Population: {population}</h2>
                <h2>lng: {lng}</h2>
                <h2>lat: {lat}</h2>
            </section>
        )
    }
}