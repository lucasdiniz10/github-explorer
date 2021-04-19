import logo from "../assets/logo.svg";
import backPageButton from "../assets/backPageButton.svg";
import '../styles/header.scss'

export function Header() {
  return (
    <nav>
      <div className="button-container container">
        <button type="button" className="logo-button">
          <img className="logo" src={logo} alt="Github Explorer" />
        </button>
        <button type="button" className="back-page-button invisible"><img className="back-page-button-image" src={backPageButton} alt="Volta página" /></button>
      </div>
    </nav>
  );
}