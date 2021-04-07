import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Test01 from './Test01'
import Test02 from './Test02'
import Test03 from './Test03'
import Test04 from './Test04'
import Test05 from './Test05'
import RadarChart from './RadarChart'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test01">Test01</Link>
            </li>
            <li>
              <Link to="/test02">Test02</Link>
            </li>
            <li>
              <Link to="/test03">Test03</Link>
            </li>
            <li>
              <Link to="/test04">Test04</Link>
            </li>
            <li>
              <Link to="/test05">Test05</Link>
            </li>
            <li>
              <Link to="/radarchart">radarchart</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/test01">
            <Test01 />
          </Route>
          <Route path="/test02">
            <Test02 />
          </Route>
          <Route path="/test03">
            <Test03 />
          </Route>
          <Route path="/test04">
            <Test04 />
          </Route>
          <Route path="/test05">
            <Test05 />
          </Route>
          <Route path="/radarchart">
            <RadarChart />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
