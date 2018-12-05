import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from './nav';
import Popular from './popular';
import Battle from './battle';
import Home from './home';

export default function App ()  {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/battle" component={Battle} />
            <Route render={function () {
              return <p>404: Not found</p>
            }}/>
          </Switch>
        </div>
      </Router>
    )
}
