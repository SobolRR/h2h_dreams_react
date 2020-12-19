import ProductCard from "./ProductCard";

function HelpProducts(props) {
  return (
    <section className="help-products">
      <h2 class="title title--h2">Товары</h2>
      <ul className="help-products__list">
        <li className="help-products__list-item">
          <ProductCard />
        </li>
      </ul>
    </section>
  );
}

export default HelpProducts;
