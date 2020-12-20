import { Link } from "react-router-dom";
import peopleGroup from "./img/people-group.png";
import children from "./img/children.jpg";

function Main() {
  return (
    <main class="page__main _01">
      <div>
        <section class="banner">
          <div class="container">
            <div class="banner__row">
              <div class="banner__col banner__col--text">
                <h1 class="banner__title">
                  Вдохновляем на добрые дела уже{" "}
                  <span class="accent">5 лет!</span>
                </h1>
                <Link to={`/dreams`} class="btn">
                  Мечты
                </Link>
              </div>
              <div class="banner__col banner__col--image">
                <img src={peopleGroup} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section class="about-us">
          <div class="container">
            <div class="about-us__row">
              <div class="about-us__col about-us__col--img">
                <figure class="about-us-picture">
                  <img src={children} alt="" />
                </figure>
              </div>
              <div class="about-us__col about-us__col--text">
                <h2 class="title title--h2">Кто мы?</h2>
                <p>
                  Благотворительная организация "От сердца к сердцу" - команда
                  единомышленников, которая показывает людям, что социальные
                  проблемы, это проблемы общества, а не отдельно взятой
                  личности. Нам уже 5 лет и мы уверенными шагами идем к нашей
                  цели. На своем примере мы показываем, что нужно всего лишь
                  время, желание и знания, которыми мы готовы делиться, и для
                  любой сложной жизненной ситуации можно найти решение. В своей
                  работе мы соединили историю и надежду - работу с пожилыми
                  людьми{" "}
                  <a href="http://veterans.kh.ua/" class="">
                    (проект Мечта ветерана)
                  </a>{" "}
                  и детьми.
                </p>
                {/* <a href="#" class="more-link">Подробнее</a> */}
              </div>
            </div>
          </div>
        </section>

        <section class="three-cols-section">
          <div class="container">
            <h2 class="title title--h2">Что мы делаем?</h2>
            <div class="three-cols-section__row">
              <div class="three-cols-section__col three-cols-section__col--first">
                Проводим благотворительные акции по сбору материальных и
                денежных средств для улучшения условий жизни в приютах/детских
                домах
              </div>
              <div class="three-cols-section__col three-cols-section__col--second">
                Занимаемся организацией досуга для детей, которые временно
                размещены в центрах социально-психологической реабилитации
              </div>
              <div class="three-cols-section__col three-cols-section__col--third">
                Разбираемся с социальными проблемами пожилых людей и создаем
                механизмы для их решения и предотвращения
              </div>
            </div>
          </div>
        </section>

        <section class="our-results">
          <div class="container">
            <h2 class="title title--h2">Мы сделали счастливее:</h2>
            <div class="our-results__inner">
              <div class="video-wrapper">
                <iframe
                  class="video"
                  src="https://www.youtube.com/embed/03l6yFdx97g"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
