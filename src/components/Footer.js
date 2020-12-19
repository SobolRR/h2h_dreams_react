import { Link } from "react-router-dom";
 import instagram from '../img/icons/instagram.svg';
 import facebook from '../img/icons/facebook.svg';

function Footer() {
    return (
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__item footer__item--left social-links-list">
                    <a href="https://www.facebook.com/heart2heart.ua" class="social-links-list__item">
                        <img src={facebook} alt="facebook link"/>
                    </a>
                    <a href="https://www.instagram.com/h2h_charity/" class="social-links-list__item">
                        <img src={instagram} alt="instagram link"/>
                    </a>
                    {/* <a href="#" class="social-links-list__item">
                        <img src="img/icons/plain.svg" alt=""/>
                    </a> */}
                </div>
                <div class="footer__item footer__contacts footer__item--center">
                    <a href="tel:+380 96 78 40 245" class="item" target="_blank">+380 96 78 40 245</a>
                    <a href="tel:+380 67 318 38 76" class="item" target="_blank">+380 67 318 38 76</a>
                </div>
                <div class="footer__item footer__item--right text-right">
                    <Link to="/dreams" class="btn">Исполнить мечту</Link>
                </div>
            </div>
        </div>
    </footer>
    );
  }
  
  export default Footer;
  