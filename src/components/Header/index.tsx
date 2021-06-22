import logo from "../../assets/logo.svg";
import backPageButton from "../../assets/backPageButton.svg";
import './styles.scss'

import { Link, useRouteMatch } from "react-router-dom"
import { useEffect, useState } from "react";

export function Header() {
  let match = useRouteMatch();

  const [isRepositoryPage, setIsRepositoryPage] = useState(false);

  // define a classe do botão dependendo da página da atual da aplicação
  useEffect(() => {
    const isRepoPage = match.path === '/repository';

    if (isRepoPage) {
      setIsRepositoryPage(true);
    }

  }, [match.path])

  return (
    <nav>
      {isRepositoryPage ? (
        <div className="button-container container">
          <Link to="/">
            <button type="button" className="logo-button">
              <img className="logo" src={logo} alt="Github Explorer" />
            </button>
          </Link>
          <Link to="/">
            <button type="button" className="back-page-button">
              <img
                className="back-page-button-image"
                src={backPageButton}
                alt="Volta página"
              />
            </button>
          </Link>
        </div>
      ) : (
        <div className="button-container container">
          <Link to="/">
            <button type="button" className="logo-button">
              <img className="logo" src={logo} alt="Github Explorer" />
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}