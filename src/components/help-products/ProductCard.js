function ProductCard(props) {
  return (
    <div href="#" class="product-card">
      <a href="#">
        <figure class="product-card__image">
          <img src="https://images.unsplash.com/photo-1591716443294-b0614281cb3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80" />
        </figure>
      
      <div class="product-card__body">
        <div class="product-card__text">
          <div class="product-card__title">Машинка с прицепом</div>
          <div class="product-card__description">
            250 - 300грн
          </div>
        </div>
        <div class={`product-card__btn`}>
          <button class="btn btn--primary btn--md btn--full-width">
            Подарить
          </button>
        </div>
      </div>
      </a>
    </div>
  );
}

export default ProductCard;
