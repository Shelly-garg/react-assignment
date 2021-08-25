import './App.css';
import {BrowserRouter, Switch ,Route} from "react-router-dom";
import Profile from './components/profile';
import Search from './components/search';
import NavBar from './components/NavBar';
import {LoggedIn} from './components/loggedIn'; 
import {Login} from './components/login';
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/loggedin" component={LoggedIn}/>
          <Route exact path="/:username" component={Profile}/>
          
        </Switch>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
