import Article from "./components/Article";
import Breadcrumbs from "./components/Breadcrumbs";
import HelpProducts from "./components/help-products/HelpProducts";

function Institution() {
  const arr = [
    {
      link: 'https://prom.ua/p1164245037-sportivno-igrovoj-myagkij.html',
      imageLink: 'https://images.ua.prom.st/2332582473_w700_h500_sportivno-igrovoj-myagkij-modul.jpg',
      title: 'Спортивно-игровой мягкий модуль для сенсорной комнаты балансировочный путь для детей',
      price: '1200 - 2000грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=505280f112'
    },
    {
      link: 'https://prom.ua/p1164663186-sportivno-igrovoj-myagkij.html',
      imageLink: 'https://images.ua.prom.st/2333809377_w700_h500_sportivno-igrovoj-myagkij-modul-balansirovochnyj.jpg',
      title: 'Спортивно-игровой мягкий Модуль-Балансировочный путь Кирпичики для сенсорной комнаты для детей',
      price: '2500 - 3500грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=505280f112'
    },
    {
      link: 'https://inkluzia.com.ua/ru/sukhiy-dush/',
      imageLink: 'https://inkluzia.com.ua/content/images/27/sukhiy-dush-88008727009097.jpg',
      title: 'Cухой душ',
      price: '1000 - 1200грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=505280f112'
    },
    {
      link: 'https://almaua.com/ru/sensornaya-komnata/196-pribor-dlya-aromoterapii-teplovoj.html',
      imageLink: 'https://almaua.com/416-large_default/pribor-dlya-aromoterapii-teplovoj.jpg',
      title: 'Прибор для ароматерапии тепловой',
      price: '4500 - 5000грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=505280f112'
    }
  ]
  return (
    <main class="page__main">
      <div className="container">
        <Breadcrumbs currentPageName="Мечты" />
        <Article />
        <HelpProducts products={arr} title={"Вещи необходимые на обустройство центра:"}/>
      </div>
    </main>
  );
}

export default Institution;
