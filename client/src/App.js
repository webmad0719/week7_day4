import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'


import CoastersList from './components/Coaster-list'
import CoasterDetail from './components/Coaster-detail'
import CoasterForm from './components/Coaster-form'


function App() {
  return (
    <>
      <Switch>
        <Route path="/coasters" exact component={CoastersList} />
        <Route path="/coasters/:id" exact component={CoasterDetail} />
        <Route path="/newCoaster" exact component={CoasterForm} />
      </Switch>
    </>
  );
}

export default App;
