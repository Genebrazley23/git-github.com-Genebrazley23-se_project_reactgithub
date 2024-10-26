import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
function Header({
  handleAddClothesBtnClick,
  weatherData,
  handleToggleSwitchChange,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Headerlogo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__spacer"></div>
      <ToggleSwitch handleToggleSwitchChange={handleToggleSwitchChange} />
      <button
        onClick={handleAddClothesBtnClick}
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <Link to="/profile">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="avatar" />
        </div>
      </Link>
    </header>
  );
}
export default Header;
