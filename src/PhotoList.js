import React from 'react'
import { useGlobalContext } from './Locations'
import LocationList from './LocationList';

export default function PhotoList(){
    const {location} = useGlobalContext()
    // console.log('test',location)
    return(
        
        <section className = 'section'>
            {location.map((item)=>{
                return <LocationList key={item.newID} {...item} />
            })}
        </section>

        
        
        
        
        
        
        
        
        
        // <div className="image-list">

        //     <Link className="image" to={`/photo/}`}>
        //         {photos.map((item)=>{
        //             const {id,imageURL} =item
        //             return <img key={id} src={imageURL} alt="" />
        //         })}
        //     </Link>
        //     <div className="location">
        //         {location.map((item)=>{
        //             const {name,geonameId} =item
        //             return <div key={geonameId}>{name}</div>
        //         })}
        //     </div>

            
        // </div>
        
    )
}