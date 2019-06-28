import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Index from './views/index';
import NewPet from './views/new-pet';

const Router =()=>(
  <Switch>
    <Route
    path="/"
    component={Index}
    exact
    />
    <Route
    path="/new-pet"
    component={NewPet}
    exact
    />
  </Switch>
)


export default Router;
