import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Students from './components/pages/Students';
import StudentDetails from './components/pages/StudentDetails';
import SchoolPage from './components/pages/SchoolPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RegisterSchool from './components/school/RegisterSchool'
import UserPage from './components/pages/UserPage'
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/student-details" component={StudentDetails} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/school" component={SchoolPage} />
            <Route exact path="/register-school" component={RegisterSchool} />
            <Route exact path="/user" component={UserPage} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
