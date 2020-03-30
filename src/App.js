import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import TourList from './Components/TourList';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/tour" component={Tour} />

      </Switch>
    </div>
  );
}

export default App;
