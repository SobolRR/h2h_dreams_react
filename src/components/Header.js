import { Link } from "react-router-dom";
import logo from '../img/logo.svg';


function Header() {
  return (
    <header className="header">
    <div className="container">
        <div className="header__inner">
            <a href="/" className="header__item logo">
                <img src={logo} alt="logo" />
            </a>
            <nav className="header__item navigation">
                <Link to="/" className="navigation__item">Главная</Link>
                <Link to="/dreams" className="navigation__item">Мечты</Link>
                <Link to="/child-center" className="navigation__item">О центре</Link>
            </nav>
            <div className="header__item text-right">
                <Link to="/dreams" className="btn btn--reverse">Исполнить мечту</Link>
            </div>
        </div>
    </div>
</header>
  );
}

export default Header;
