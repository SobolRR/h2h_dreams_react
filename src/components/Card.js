
import { Link } from "react-router-dom";

function Card(props) {

    return (

        <Link to={`/dreams/${props.id}`} class="card">
            <div>
                <figure class="card__image">
                    <img src={props.image} />
                </figure>
            </div>
            <div class="card__body">
                <div class="card__text">
                    <div class={`card__label ${props.status}`}>{props.label}</div>
                    <div class="card__title">{props.title}</div>
                    <div class="card__description">
                        <span>Мне нравится: <b>{props.like}</b></span>
                        <br />
                        <span>Я мечтаю о: <b>{props.dream}</b></span>
                    </div>
                    <Link to={`/dreams/${props.id}`} class={`card__link-details ${props.showLink}`}>Подробнее</Link>

                </div>
                <div class={`card__btn ${props.showBtn}`}>
                    <a href={props.paymentLink} class="btn btn--white btn--full-width" target="_blank">Помочь</a>
                </div>
            </div>
        </Link>
    );
}

export default Card;
