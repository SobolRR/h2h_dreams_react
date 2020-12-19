
import { Link } from "react-router-dom";

function Card(props) {

    return (
        <div href="#" class="card">
        <a href="#">
            <figure class="card__image">
                <img src={props.image}/>
            </figure>
        </a>
        <div class="card__body">
            <div class="card__text">
            <div class={`card__label ${props.status}`}>{props.label}</div>
            <div class="card__title">{props.title}</div>
            <div class="card__description">
               <span>Мне нравится: <b>{props.like}</b></span> 
               <br/>
               <span>Я мечтаю о: <b>{props.dream}</b></span> 
            </div>
            <Link to={`/dreams/${props.id}`} class={`card__link-details ${props.showLink}`}>Подробнее</Link>
              
            </div>
            <div class={`card__btn ${props.showBtn}`}>
                <a href="#" class="btn btn--white btn--full-width">Помочь</a>
            </div>
        </div>
    </div>
    );
  }
  
  export default Card;
  