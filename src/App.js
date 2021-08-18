import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import SearchBar from './SearchBar';
import PhotoList from './PhotoList';
import SinglePhoto from './SinglePhoto';


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
            <SinglePhoto/>
          </Route>
        </Switch>
      </section>
    </Router> 
  );
}

export default App;
