import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchState from "./context/Search/SearchState";
import RentLocker from "./pages/RentLocker";
import Home from './pages/Home'
import NotFound from "./pages/NotFound";

function App() {
  return (
    <SearchState>
      <Router>
        <Switch>
          <Route path="/rent">
            <RentLocker />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </SearchState>
  );
}

export default App;
