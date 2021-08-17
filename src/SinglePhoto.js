import React from 'react'
import {useParams, Link} from 'react-router-dom'

export default function SinglePhoto({name,imageURL,lng,lat}){
    const {newID} = useParams()

    return(
        <div>
            <div className="phototab">
                <div className="single-image">
                    IMAGE
                </div>
                <Link to="/" className="btn">
                    back
                </Link>
            </div>
            <div className="infos">
                <h2>Name:{name} </h2>
                <h4>Pop: </h4>
                <h4>Temp:  </h4>
                <h4>Lat: </h4>
                <h4>Lng: </h4>
            </div>
        </div>
    )
}