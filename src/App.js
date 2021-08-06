import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Link} from 'react-router-dom'
// import { useFetch } from './useFetch';
import SearchBar from './SearchBar';
import SinglePhoto from './SinglePhoto'
import GetPhotos from './GetPhotos';
import LocationList from './LocationList';

const urlWeather = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={870b95f2bb8683ce42ac8b331664622b}"

function App() {

  return (
    <Router>
      <section className="App">
        <Switch>
          <Route exact path="/">
            <SearchBar/>
            <LocationList/>
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
