import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "./context";

export default function SinglePhoto(){
    const [image, setImage] = React.useState({})
    const {location,temp} = useGlobalContext()
    var {id} = useParams()
    
    React.useEffect(() =>{
        function getImages() {
            if(location){
                const{
                    name,
                    population,
                    lng,
                    lat,
                    imageURL,
                // eslint-disable-next-line eqeqeq
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
    }, [id,location])

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
            <section className="sections">
                <Link to={"/"} className="backlogo">- Places -</Link>
                <div className="singleimage">
                    <img className="simg" src={imageURL} alt={name} />
                </div>
                <div className="singleinfo">
                    <h1>{name}</h1>
                    <h3>Population  <span>{population}</span></h3>
                    <h3>Temperature  <span>{temp} °C</span></h3>
                    <h3>Lat  <span>{lat}</span></h3>
                    <h3>Lng  <span>{lng}</span></h3>
                </div>
            </section>
        )
    }
}