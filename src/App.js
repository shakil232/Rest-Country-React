
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import NotFount from './Components/NotFound/NotFount';
import CountryDetail from './Components/CountryDetails/CountryDetail';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

import CountryDisplay from './Components/CountryDisplay/CountryDisplay';

function App() {
  

  return (
    <Router>
      <Switch>
        <Route path="/countries">
          <CountryDisplay/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/Details/:countryName">
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
