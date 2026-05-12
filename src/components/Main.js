import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Work from './Work';
import Education from './Education';
import Skills from './Skills';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/aboutme' component={AboutMe}/>
    <Route path='/work' component={Work}/>
    <Route path='/education' component={Education}/>
    <Route path='/skills' component={Skills}/>
  </Switch>
);

export default Main;
