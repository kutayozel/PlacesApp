import React from 'react'
import { useGlobalContext } from './context'
import Photo from './Photo';

export default function PhotoList(){
    const {location} = useGlobalContext()
    // console.log('test',location)
    return(
        
        <section className = 'section'>
            {location.map((item)=>{
                return <Photo key={item.newID} {...item} />
            })}
        </section>
    )
}