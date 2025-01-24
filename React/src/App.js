import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Hovedside from './components/Hovedside';
import Omoss from './components/Omoss';
import Kontaktoss from './components/Kontaktoss';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Hovedside} />
          <Route path="/omoss" component={Omoss} />
          <Route path="/kontaktoss" component={Kontaktoss} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
