import React from 'react';
import { Route, BrowserRouter } from 'react-router';
import App from './App';
import Dashboard from './Components/Dashboard';

export default (
    <Route>
        <Route path='/' component={App} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Route>
  );