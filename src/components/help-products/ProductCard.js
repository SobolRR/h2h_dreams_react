function ProductCard(props) {
  return (
    <div className="product-card">
      <a href={props.link} target="_blank">
        <figure className="product-card__image">
          <img src={props.imageLink} />
        </figure>
      
      <div class="product-card__body">
        <div class="product-card__text">
          <div class="product-card__title">{props.title}</div>
          <div class="product-card__description">
          {props.price}
          </div>
        </div>
        <div class={`product-card__btn`}>
          <a href={props.paymentLink} target="_blank" class="btn btn--primary btn--md btn--full-width">
            Подарить
          </a>
        </div>
      </div>
      </a>
    </div>
  );
}

export default ProductCard;
