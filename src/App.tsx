import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Test01 from './pages/Test01';
import Test02 from './pages/Test02';
import Test03 from './pages/Test03';
import Test04 from './pages/Test04';
import Test05 from './pages/Test05';
import RadarChart from './pages/RadarChart';
import RadarChartFlex from './pages/RadarChartFlex';
import Graph01 from './pages/Graph01';
import Graph02 from './pages/Graph02';
import Graph03 from './pages/Graph03';

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
            <li>
              <Link to="/radarchartflex">radarchartflex</Link>
            </li>
            <li>
              <Link to="/graph-01">graph-01</Link>
            </li>
            <li>
              <Link to="/graph-02">graph-02</Link>
            </li>
            <li>
              <Link to="/graph-03">graph-03</Link>
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
          <Route path="/radarchartflex">
            <RadarChartFlex />
          </Route>
          <Route path="/graph-01">
            <Graph01 />
          </Route>
          <Route path="/graph-02">
            <Graph02 />
          </Route>
          <Route path="/graph-03">
            <Graph03 />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
