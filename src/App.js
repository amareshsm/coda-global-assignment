import React from 'react';
import Home from './components/home'
import Landing from './components/landing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Recipes from './components/recipes'
import './App.scss';
function App() {
  return (
    <div className="App">
           <Home/>
           <Router>
        <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/recipes/:id"  component={Recipes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
