import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../views/Home.jsx';
import About from '../views/About'
import Contact from '../views/Contact'
import Dashboard from '../views/Dashboard'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import NotFound from '../views/404'
import ThemeProvider from '../helpers/themes/ThemeProvider.helper'


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/About"} component={About} />
          <Route exact path={"/Contact"} component={Contact} />
          <Route exact path={"/Dashboard"} component={Dashboard} />
          <Route exact path={"/Login"} component={Login} />
          <Route exact path={"/SignUp"} component={SignUp} />
          <Route exact path={"*"} component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
