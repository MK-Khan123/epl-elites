import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import TeamData from './components/TeamData/TeamData';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/team/:id">
            <TeamData />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
