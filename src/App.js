import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar';
import SinglePhoto from './SinglePhoto'
const url = "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=kutayozel"

function App() {
  const [imageList, setImageList] = React.useState()
  const [search, setSearch] = React.useState('')
     async function fetchData(){
       const response = await fetch(url)
       const data = await response.json()
       console.log(data)
     }
     fetchData();

  return (
    <Router>
      <section className="App">
        <Switch>
          <Route exact path="/">
            <SearchBar/>
            <div className="image-list">
              <div className="image-tab">
                <Link to ={`/photo`}>
                  < div className="image">image</div>
                  <h2>name</h2>
                </Link>
              </div>
            </div>
          </Route>
          <Route path="/photo">
            <SinglePhoto/>
          </Route>
        </Switch>
      </section>
    </Router> 
  );
}

export default App;
