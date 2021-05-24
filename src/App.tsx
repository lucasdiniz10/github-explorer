import { Home } from "./pages/Home";
import { Repository } from "./pages/Repository";
import { RepositoriesProvider } from "./hooks/useRepositories"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles/global.scss'

export function App() {
  return (
    <>
      <RepositoriesProvider>
        <Router>
          <Switch>

            <Route path="/repository">
              <Repository />
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
      </RepositoriesProvider>
    </>
  );
}
