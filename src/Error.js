import React from 'react'
import {Link} from "react-router-dom"

export default function Error() {
    return(
        <div>
            <h1>Ooops! Something is wrong</h1>
            <Link to="/" className="errbtn">
                Back To Home
            </Link>
        </div>
    )
}