import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShowListScreen from './screens/ShowListScreen';
import ShowDetailsScreen from './screens/ShowDetailsScreen';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ShowListScreen} />
        <Route path="/show/:showId" component={ShowDetailsScreen} />
      </Switch>
    </Router>
  );
};

export default App;
