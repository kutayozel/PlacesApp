import React from 'react';

export default function SearchBar() {
    const [search, setSearch] = React.useState('a')
    const searchValue = React.useRef('')

    

    function searchPlace(){
        setSearch(searchValue.current.value)
    }

    return(
        <section className="searchbar">
            <form >
                <div className="search">
                    {/* <label htmlFor="name">search</label> */}
                    <input 
                    type="text" 
                    // name='name'
                    // id='name'
                    // ref={searchValue}
                    // onChange={search}
                    />
                    <button className="searchbtn">Search</button>
                </div>
            </form>
        </section>
    )
}