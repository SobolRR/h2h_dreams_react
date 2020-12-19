import { Link } from "react-router-dom";

function Breadcrumbs(
  props = {
    navItem1: "Главная",
    navItem2: "Мечты",
    currentPageName: "Мечта Ани",
  }
) {
  return (
    <nav class="breadcrumbs">
      <div class="breadcrumbs__list">
        <Link to={`/`} class="breadcrumbs__item">
          Главная
        </Link>
        {props.currentPageName !== "Мечты" && (
          <Link to={`/dreams`} class="breadcrumbs__item">
            Мечты
          </Link>
        )}
        <div class="breadcrumbs__item">{props.currentPageName}</div>
      </div>
    </nav>
  );
}

export default Breadcrumbs;
