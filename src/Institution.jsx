import { useParams } from "react-router-dom";
import Article from "./components/Article";
import Breadcrumbs from "./components/Breadcrumbs";
import HelpProducts from "./components/help-products/HelpProducts";
import { data } from "./data";

function Institution() {
  const { id } = useParams();

  return (
    <main class="page__main">
      <div className="container">
        <Breadcrumbs currentPageName={id} />
        <Article />
        <HelpProducts />
      </div>
    </main>
  );
}

export default Institution;
