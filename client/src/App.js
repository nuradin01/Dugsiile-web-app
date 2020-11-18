import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Students from './components/pages/Students';
import StudentDetails from './components/pages/StudentDetails';
import SchoolPage from './components/pages/SchoolPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserPage from './components/pages/UserPage'
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
        <>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/students" component={Students} />
            <PrivateRoute exact path="/student-details" component={StudentDetails} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/school" component={SchoolPage} />
            <PrivateRoute exact path="/user" component={UserPage} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
