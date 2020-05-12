import React from 'react';

import './App.css';
import Home from './Components/Home'
import RestaurantCreate from './Components/RestaurantCreate'
// eslint-disable-next-line no-unused-vars
import RestaurantDetail from './Components/RestaurantDetail'
import RestaurantList from './Components/RestaurantList'
import RestaurantSearch from './Components/RestaurantSearch'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/list">Listing</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/search">search</Link></li>
          <li><Link to="/details">Details</Link></li>
        </ul>
        <Route path="/list">
          <RestaurantList />
        </Route>

        <Route path="/create">
          <RestaurantCreate />
        </Route>

        <Route path="/search">
          <RestaurantSearch/>
        </Route>

        <Route path="/details">
          <RestaurantDetail />
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>


      </Router>
    
    </div>
  );
}

export default App;
