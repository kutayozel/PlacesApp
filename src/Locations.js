import React, {useState, useContext, useEffect} from 'react'
import { useCallback } from 'react'

const urlPix = 'https://pixabay.com/api/?key=22675015-65668441eb8a404353873b15e&image_type=photo&per_page=100&q='
const url = 'http://api.geonames.org/searchJSON?maxRows=100&username=kutayozel&q='
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [location, setLocation] = useState([])
    // const [photos, setPhotos] = useState([])
    const [searchTerm, setSearchTerm] = useState('ankara')

    const fetchGeoData = useCallback(async () => {
        try{
            const response = await fetch (`${url}${searchTerm}`)
            const data = await response.json()
            const responsePix = await fetch (`${urlPix}${searchTerm}`)
            const dataPix = await responsePix.json()
            const {hits} = dataPix;
            const {geonames} = data;
            const combineData = [...hits,...geonames];
            const newData = combineData.map((item)=>{
                const{
                    id,
                    largeImageURL,
                    name,
                    location,
                    lng,
                    lat,
                    geonameId,
                    population
                } = item
                return{
                    id:id,
                    imageURL:largeImageURL,
                    name:name,
                    location:location,
                    lng:lng,
                    lat:lat,
                    geonameId:geonameId,
                    population:population
                }
            })
            setLocation(newData)
            // const newDataPix = hits.map((itemPix) =>{
            //     const {id, largeImageURL} = itemPix
            //     return {id:id, imageURL:largeImageURL}
            // })
            // setPhotos(newDataPix)
            // const {geonames} = data;
            // const newGeoData = geonames.map((item) =>{
            //     const { 
            //         name, 
            //         lat, 
            //         lng, 
            //         geonameId,
            //         population
            //     } = item
            //     return { 
            //         name:name,
            //         lat:lat,
            //         lng:lng,
            //         geonameId:geonameId,
            //         population:population,
            //     }
            // })
            // setLocation(newGeoData)
        } catch(error){
            console.log(error)
        }
            
    },[searchTerm])

    useEffect(()=>{
        fetchGeoData()
    }, [searchTerm,fetchGeoData])

    return(
        <AppContext.Provider value={{location, setLocation, searchTerm, setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}