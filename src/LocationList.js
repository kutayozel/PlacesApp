import React from 'react'
import { Link } from 'react-router-dom'

export default function LocationList({name,imageURL,id}){

    return(
        <div className="image-list">
            <div className = "image">
                <Link to={`/photo/${id}`}>
                    <img src={imageURL} alt="" />
                    <h2> {name}</h2>
                </Link>
                
            </div>
        </div>
    )
}

