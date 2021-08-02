import { useState } from "react"
import React from 'react'


const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [search, setSearch]= useState('a')
    const [cities, setCities] = useState([])
    const [cityImages, setCityImages] = useState([])
    const [weather, setWeather] = useState('')
}