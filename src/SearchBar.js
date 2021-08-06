import React from 'react';
import { useGlobalContext } from './Locations';

export default function SearchBar() {
    const {setSearchTerm, searchTerm, location} = useGlobalContext()
    const searchValue = React.useRef('')

    React.useEffect(()=>{
        searchValue.current.focus()
    },[])

    function searchPlace(){
        setSearchTerm(searchValue.current.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }
    console.log(searchTerm)
    console.log(location)

    return(
        <section className="searchbar">
            <form onSubmit={handleSubmit}>
                <div className="search">
                    {/* <label htmlFor="name">search</label> */}
                    <input 
                        type="text" 
                        // name='name'
                        id='name'
                        ref={searchValue}
                        // onChange={searchPlace}
                    />
                    <button className="searchbtn" onClick={searchPlace}>Search</button>
                </div>
            </form>
        </section>
    )
}