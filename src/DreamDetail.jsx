import * as React from 'react';
import { useParams } from "react-router-dom";
import Viewer from 'react-viewer';
import Breadcrumbs from "./components/Breadcrumbs";
import CardHorizontal from "./components/CardHorizontal";
import HelpProducts from "./components/help-products/HelpProducts";
import { data } from "./data";

function DreamDetail() {
  const { id } = useParams();
  const [visible, setVisible] = React.useState(false);

  const detail = data[id - 1];
  return (
    <main class="page__main dream-details-page">
      <div className="container">
        <Breadcrumbs currentPageName={id} />

        <CardHorizontal {...detail} />

        <div class="dream-descroption">
          <div class="dream-descroption__row">
            <div class="dream-descroption__col">
              <div>
                <span>
                  Меня зовут <b>{detail.name}</b> и мне <b>{detail.age}</b>
                </span>
              </div>
              <div>
                <span>
                  Мне нравится <b>{detail.like}</b>
                </span>
              </div>
              <div>
                <span>
                  Я умею <b>{detail.skill}</b>
                </span>
              </div>
              <div>
                <span>
                  Я целый год стараюсь, делаю полезыне дела и совершаю хорошие
                  поступки. Вот самые важные: <b>{detail.action}</b>
                </span>
              </div>
              <div>
                <span>
                  Я знаю, что ты исполняешь любые желаения, я давно мечтаю о{" "}
                  <b>{detail.dream}</b>
                </span>
              </div>
              <div>
                <span>
                  Обещаю тебе хорощо себя вести, хорошо учиться, ложиться
                  вовермя и слушать взрослых! Желаю тебе крепкого здоровья и
                  хорошего настроения!
                </span>
              </div>
              <div>
                <span>
                  Жду твоего прихода! <b>{detail.name}</b>
                </span>
              </div>
            </div>
            <button class="dream-descroption__col" onClick={() => { setVisible(true); }}>
              <figure>
                <img src={detail.letter} alt="Письмо к Св. Николаю" />

              </figure>
            </button>
            <Viewer
              visible={visible}
              onClose={() => { setVisible(false); }}
              images={[{ src: detail.letter, alt: "Письмо к Св. Николаю" }]}
            />
          </div>
        </div>

        <HelpProducts title="Наш ориентир для подарка:" products={detail.presents} />

      </div>
    </main>
  );
}

export default DreamDetail;
