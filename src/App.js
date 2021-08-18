import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import SearchBar from './SearchBar';
import PhotoList from './PhotoList';
import SinglePhoto from './SinglePhoto';
import Error from './Error'


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <SearchBar/>
            <PhotoList/>
          </Route>
          <Route path="/photo/:id">
            <SinglePhoto/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
    </Router> 
  );
}

export default App;
