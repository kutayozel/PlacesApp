import React, {useState, useContext, useEffect} from 'react'
import { useCallback } from 'react'

const url = 'http://api.geonames.org/searchJSON?maxRows=100&username=kutayozel&q='
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [location, setLocation] = useState([])
    const [searchTerm, setSearchTerm] = useState('ankara')

    const fetchGeoData = useCallback(async () => {
        try{
            const response = await fetch (`${url}${searchTerm}`)
            const data = await response.json()
            // console.log(data)
            const {geonames} = data;
            const newGeoData = geonames.map((item) =>{
                const { 
                    name, 
                    lat, 
                    lng, 
                    geonameId,
                    population
                } = item
                return { 
                    name:name,
                    lat:lat,
                    lng:lng,
                    geonameId:geonameId,
                    population:population,
                }
            })
            setLocation(newGeoData)
        } catch(error){
            console.log(error)
        }
            
    },[searchTerm])

    useEffect(()=>{
        fetchGeoData()
    }, [searchTerm,fetchGeoData])

    return(
        <AppContext.Provider value={{location, searchTerm, setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}