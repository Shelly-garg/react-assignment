import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './css/App.css';
import { LoggedIn } from './components/loggedIn'; 
import Login from './components/login';
import NavBar from './components/navbar';
import Profile from './components/profile';
import Search from './components/search';
import store from './store';
import { Welcome } from './components/welcome';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/profile' component={LoggedIn}/>
          <Route exact path='/:username' component={Profile}/>
          <Route exact path='/' component={Welcome}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
