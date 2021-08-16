import React from 'react'
import { Link } from 'react-router-dom'

export default function LocationList({name,imageURL,id,geonameId}){

    return(
        <div className="image-list">
            <div className = "image">
                <Link to={`/photo/}`}>
                    <img src={imageURL} alt="" />
                    <h2> {name}</h2>
                </Link>
                
            </div>
        </div>
    )
}

