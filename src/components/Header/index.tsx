import logo from "../../assets/logo.svg";
import backPageButton from "../../assets/backPageButton.svg";
import './styles.scss'

import { Link, useRouteMatch } from "react-router-dom"
import { useEffect, useState } from "react";

export function Header() {
  const [backButtonClass, setBackButtonClass] = useState('');

  let match = useRouteMatch();

  // define a classe do botão dependendo da página da atual da aplicação
  useEffect(() => {
    const isUserPage = match.path === '/user';

    isUserPage ? setBackButtonClass("back-page-button") : setBackButtonClass("back-page-button invisible");

  }, [match.path])

  return (
    <nav>
      <div className="button-container container">
        <Link to="/">
          <button type="button" className="logo-button">
            <img className="logo" src={logo} alt="Github Explorer" />
          </button>
        </Link>
        <Link to="/">
          <button type="button" className={backButtonClass}>
            <img
              className="back-page-button-image"
              src={backPageButton}
              alt="Volta página"
            />
          </button>
        </Link>
      </div>
    </nav>
  );
}