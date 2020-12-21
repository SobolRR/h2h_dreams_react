import { FacebookShareButton, TelegramShareButton } from "react-share";
import classnames from 'classnames'

function CardHorizontal(props) {
  const dreamProgress = calculateDreamProgress(props.presents,props.currentSum)
  return (
    <div href="#" class="card-horizontal">
      <div class="card-horizontal__row">
        <figure class="card-horizontal__image">
          <img src={props.image}/>
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
          <a href={props.paymentLink} className={classnames("btn btn--white",{"btn--disabled": props.status === "completed"})} target="_blank">
            Исполнить мечту
          </a>
        </div>
      </div>
      <div class="card-horizontal__progress progress-bar">
        <div
          class="progress-bar__completed-line"
          style={{ width:  + dreamProgress + "%" }}
        ></div>
        <span class="progress-bar__label">
          Выполнена на {dreamProgress}%
        </span>
      </div>
    </div>
  );
}

const calculateDreamProgress = (presents,currentSum) => {
  const regex = /([0-9]{1,5})/g;
  const totalPrice = presents.reduce((acc, present)=> {
    return acc + parseInt(present.price.match(regex)[1])
  },0)
  const dreamProgress = currentSum * 100 / totalPrice
  return dreamProgress.toFixed(0)
}


export default CardHorizontal;
