import { Home } from "./pages/Home";
import { User } from "./pages/User";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles/global.scss'

export function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
