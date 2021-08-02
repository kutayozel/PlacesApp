import React from "react";
import { useFetch } from "./useFetch";

const url ='https://pixabay.com/api/?key=22675015-65668441eb8a404353873b15e&q=yellow+flowers&image_type=photo&pretty=true'

export default function GetPhotos(){
    const [photos, setPhotos] = ([]);
    const {data} = useFetch(url)

    // console.log(data)
    // console.log('test1',hits[1].id)
    // console.log(hits[])
    // console.log(hits)
    // const newData = hits.map((item)=>{
    //     const{id, tags, previewURL} = item
    //     return {id, tags ,previewURL}
    // })
    // setPhotos(newData)

    return(
        <section>
            < div className="image">
                {/* <img key={id} src={previewURL} alt="" /> */}
                {/* {data.hits.map((item) => {
                    return <img key={item.id} src={item.previewURL} alt="" />
                })} */}
                image
            </div>
            <h2>name</h2>
        </section>
    )
}