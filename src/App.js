import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Home } from './components/pages/Home';
import { Contact } from './components/pages/Contact';
import { About } from './components/pages/About';
import { status404 } from './components/pages/status404';

import { NavBar } from './components/NavBar';
import { Layout } from './components/Layout';
import { Jumbotron } from './components/Jumbotron';

function App() {
  return (
    <React.Fragment>
       <NavBar / >
       <Jumbotron />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={status404} />
          </Switch>
        </Router>
      
    </React.Fragment>
  );
}

export default App;
