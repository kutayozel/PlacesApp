import React from 'react';
import { useGlobalContext } from './context';

export default function SearchBar() {
    const {setSearchTerm} = useGlobalContext()
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
    // console.log(searchTerm)
    // console.log(location)

    return(
        <section className="searchbar">
            <form onSubmit={handleSubmit}>
                <div className="search">
                    <input 
                        type="text" 
                        placeholder="  Enter a Location Name"
                        id='name'
                        ref={searchValue}
                    />
                    <button className="searchbtn" onClick={searchPlace}>Search</button>
                </div>
            </form>
        </section>
    )
}