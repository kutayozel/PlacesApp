import React, {useState, useContext, useEffect} from 'react'
import { useCallback } from 'react'

const urlPix = 'https://pixabay.com/api/?key=22675015-65668441eb8a404353873b15e&image_type=photo&per_page=100&q='
const url = 'http://api.geonames.org/searchJSON?maxRows=100&username=kutayozel&q='
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [location, setLocation] = useState([])
    const [searchTerm, setSearchTerm] = useState('ankara')

    const fetchGeoData = useCallback(async () => {
        try{
            let response = await fetch (`${url}${searchTerm}`)
            let data = await response.json()
            let responsePix = await fetch (`${urlPix}${searchTerm}`)
            let dataPix = await responsePix.json()
            let {geonames} = data;
            let {hits} = dataPix;

            geonames.forEach((item, i) =>{
                item.newID = i + 1;
            });
            hits.forEach((item, i) =>{
                item.newID = i + 1;
            });

             var combineData = hits.map((item,i) => {
                if(item.newID === geonames[i].newID){
                    return Object.assign({},item,geonames[i])
                }
            })
        

            
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