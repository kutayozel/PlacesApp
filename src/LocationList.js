import React from 'react'
import { useGlobalContext } from './Locations'

export default function LocationList(){
    const {location} = useGlobalContext()
    return(
        <div>
            {location.map((item)=>{
                const {name} =item
                return <div>{name}</div>
            })}
        </div>
    )
}