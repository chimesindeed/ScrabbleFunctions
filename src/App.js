import React from 'react'
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

export const App = () => {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/getRackValue">Get Rack Point Value Function</Link></li>
          <li><Link to="/sortRackAlphabetical">Sort Rack Function</Link></li>
          <li><Link to="/getTurn">Get Turn Function</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/getRackValue">
          <GetRackValue />
        </Route>
        <Route path="/SortRack">
          <SortRack />
        </Route>
        <Route path="/getTurn">
          <GetTurn />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}