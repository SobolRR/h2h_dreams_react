import ProductCard from "./ProductCard";

function HelpProducts(props) {
  return (
    <section className="help-products">
      <h2 className="title title--h2">{props.title}</h2>
      <ul className="help-products__list">

        {(
          props.products.map((product, i) => (
            <li className="help-products__list-item" key={i}>
  
              <ProductCard {...product} />
            </li>
          ))
        )}


      </ul>
    </section>
  );
}

export default HelpProducts;
