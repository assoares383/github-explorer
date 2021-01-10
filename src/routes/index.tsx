import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import PageRepository from '../pages/Repository';

const routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/repositories/:repository+" component={PageRepository} />
  </Switch>
);

export default routes;
