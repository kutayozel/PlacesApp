import React from 'react'
import {Link} from 'react-router-dom'

export default function SinglePhoto(){
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
                <h2>Name: </h2>
                <h4>Pop: </h4>
                <h4>Temp: </h4>
                <h4>Lat: </h4>
                <h4>Ing: </h4>
            </div>
        </div>
    )
}