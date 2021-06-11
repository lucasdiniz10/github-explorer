import { Home } from "./pages/Home";
import { Repository } from "./pages/Repository";
import { RepositoriesProvider } from "./hooks/useRepositories"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { ScrollToTop } from "./utils/ScrolltoTop";

import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss';

export function App() {
  return (
    <>
      <RepositoriesProvider>
        <Router>
          <ScrollToTop />
          <Switch>

            <Route path="/repository">
              <Repository />
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
        <ToastContainer autoClose={4000} />
      </RepositoriesProvider>
    </>
  );
}
