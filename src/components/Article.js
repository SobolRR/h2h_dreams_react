const Article = () => {
    return(
        <section className="article">
          <h2 class="title title--h2">Детский дом</h2>
          <div className="article__row">
            <div className="article__col article__col--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
            <div className="article__col article__col--picture">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </section>
    );
}

export default Article;