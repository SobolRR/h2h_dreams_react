import { Link } from "react-router-dom";
import { FacebookShareButton, TelegramShareButton } from "react-share";

function CardHorizontal(props) {
  return (
    <div href="#" class="card-horizontal">
      <div class="card-horizontal__row">
        <figure class="card-horizontal__image">
          <img src={props.image} />
        </figure>
        <div class="card-horizontal__body">
          <div class="card-horizontal__body-row">
          <div class="share-list">
                        <span class="share-list__item">Share</span>
                        <FacebookShareButton 
                url={window.location}
                quote={"Я исполняю мечты детей! Присоединяйся!"}
                className="share-list__item social-fb-button">
              </FacebookShareButton>
              <TelegramShareButton 
                url={window.location}
                title={"Я исполняю мечты детей! Присоединяйся!"}
                className="share-list__item social-telegram-button">
              </TelegramShareButton>
                    </div>
            <div class="card-horizontal__title">
              Я {props.name} и мне {props.age}
            </div>
          </div>
          <div class="card-horizontal__description">
            <span>
              Мне нравится: <b>{props.like}</b>
            </span>
            <br />
            <span>
              Я мечтаю о: <b>{props.dream}</b>
            </span>{" "}
          </div>
          <Link to="/dreams" class="btn btn--white">
            Исполнить мечту
          </Link>
        </div>
      </div>
      <div class="card-horizontal__progress progress-bar">
        <div
          class="progress-bar__completed-line"
          style={{ width: props.percantage + "%" }}
        ></div>
        <span class="progress-bar__label">
          Выполнена на {props.percantage}%
        </span>
      </div>
    </div>
  );
}

export default CardHorizontal;
