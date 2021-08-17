import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
// import { useFetch } from './useFetch';
import SearchBar from './SearchBar';
import SinglePhoto from './SinglePhoto'
import PhotoList from './PhotoList';
import GetPhotos from './GetPhotos';


function App() {
  return (
    <Router>
      <section className="App">
        <Switch>
          <Route exact path="/">
            <SearchBar/>
            <PhotoList/>
          </Route>
          <Route path="/photo/:id">
            <GetPhotos/>
            {/* <SinglePhoto/> */}
          </Route>
        </Switch>
      </section>
    </Router> 
  );
}

export default App;
