import { Link } from "react-router-dom";
import logo from '../img/logo.svg';


function Header() {
  return (
    <header class="header">
    <div class="container">
        <div class="header__inner">
            <a href="/" class="header__item logo">
                <img src={logo} alt="logo" />
            </a>
            <nav class="header__item navigation">
                <Link to="/" class="navigation__item">Главная</Link>
                <Link to="/dreams" class="navigation__item">Мечты</Link>
            </nav>
            <div class="header__item text-right">
                <Link to="/dreams" class="btn btn--reverse">Исполнить мечту</Link>
            </div>
        </div>
    </div>
</header>
  );
}

export default Header;
