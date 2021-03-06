
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import NotFount from './Components/NotFound/NotFount';
import CountryDetail from './Components/CountryDetails/CountryDetail';

function App() {
  

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/country/:countryName">
          <CountryDetail/>
        </Route>
        <Route path='/about'>
          <CountryDetail/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NotFount/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
