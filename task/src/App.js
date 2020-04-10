import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';

class App extends React.Component {
    render() {
      return(
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/dashboard' component={Dashboard}/>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
}

export default App;