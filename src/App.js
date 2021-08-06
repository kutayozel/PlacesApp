import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Link} from 'react-router-dom'
// import { useFetch } from './useFetch';
import SearchBar from './SearchBar';
import SinglePhoto from './SinglePhoto'
import GetPhotos from './GetPhotos';
import LocationList from './LocationList';
const url = "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=kutayozel"
// const urlPix = "https://pixabay.com/api/?key=22675015-65668441eb8a404353873b15e&q=cities&image_type=photo&per_page=100"
const urlCities = " http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=kutayozel"
const urlWeather = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={870b95f2bb8683ce42ac8b331664622b}"

function App() {
  const [searchTerm, setSearchTerm] = React.useState('a')

  return (
    <Router>
      <section className="App">
        <Switch>
          <Route exact path="/">
            <SearchBar/>
            <div className="image-list">
              <div className="image-tab">
                  <GetPhotos/>
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
