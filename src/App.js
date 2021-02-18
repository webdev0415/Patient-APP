import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import {commonRoutes, privateRoutes} from './router';
import 'antd/dist/antd.css';

const common_pages = Object.values(commonRoutes);
const private_pages = Object.values(privateRoutes);

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {common_pages.map((page) => <Route {...page} key={Math.random()} />)}
          {private_pages.map((page) => <Route {...page} key={Math.random()} />)}
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

