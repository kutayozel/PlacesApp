import React, {useState, useContext, useEffect} from 'react'
import { useCallback } from 'react'

const url = 'http://api.geonames.org/postalCodeSearchJSON?placename=Turkey&maxRows=100&username=kutayozel'
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [location, setLocation] = useState([])
    const [searchTerm, setSearchTerm] = React.useState('a')

    const fetchGeoData = useCallback(async () => {
        try{
            const response = await fetch (`${url}${searchTerm}`)
            const data = await response.json()
            // console.log(data)
            const {postalCodes} = data;
            const newGeoData = postalCodes.map((item) =>{
                const {adminName1, placeName} = item
                return {country: adminName1, placeName:placeName}
            })
            setLocation(newGeoData)
        } catch(error){
            console.log(error)
        }
            
        },
        [searchTerm])

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