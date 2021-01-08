import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Respository from '../pages/Repository';

const routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/repository" component={Respository} />
  </Switch>
);

export default routes;
