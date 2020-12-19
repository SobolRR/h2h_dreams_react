import snowAngel from "./img/snow-angel.svg";
import snowMan from "./img/make-snowman.svg";
import boy from "./img/boy.svg";
import boy2 from "./img/boy-2.svg";
import girl from "./img/girl.svg";
import girl2 from "./img/girl-2.svg";
import letter1 from "./img/letters/letter_1.jpg";
import letter2 from "./img/letters/letter_2.jpeg";
import letter3 from "./img/letters/letter_3.jpeg";
import letter4 from "./img/letters/letter_4.jpeg";
import letter5 from "./img/letters/letter_5.jpeg";
import letter6 from "./img/letters/letter_6.jpeg";
import letter7 from "./img/letters/letter_7.jpeg";
import letter8 from "./img/letters/letter_8.jpeg";
import letter9 from "./img/letters/letter_9.jpeg";
import letter10 from "./img/letters/letter_10.jpeg";
import letter11 from "./img/letters/letter_11.jpeg";
import letter12 from "./img/letters/letter_12.jpeg";
import letter13 from "./img/letters/letter_13.jpeg";
import letter14 from "./img/letters/letter_14.jpeg";
import letter15 from "./img/letters/letter_15.jpeg";
import letter16 from "./img/letters/letter_16.jpeg";

export const data = [
  {
    id: 1,
    status: "in-progress",
    image: snowAngel,
    label: "В процессе",
    percantage: 0,
    name: "Дима",
    age: "16 лет",
    like: "заниматься спортом",
    skill: "заниматься рементом",
    wish: "отлично выполнять ремонт в доме",
    action: "Помогал выполнять хозяйственные дела в центре",
    dream: "шуроповертe для ремонта помещений",
    letter: letter1,
    title: 'Дима, 16 лет',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=a8f801a074',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://rozetka.com.ua/texac_ta_01_159/p108998454/',
      imageLink:'https://i1.rozetka.ua/goods/13589284/texac_ta_01_159_images_13589284261.jpg',
      title:'Аккумуляторный шуруповерт',
      price: '600-800грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=a8f801a074'
    }]
  },
  {
    id: 2, status: 'in-progress', image: snowMan, label: 'В процессе', percantage: 0,
    title: 'Богдан, 7 лет',
    name: 'Богдан',
    age: '7 лет',
    like: 'музыка и петь',
    skill: 'рисовать',
    wish: 'отлично выполнять ремонт в доме',
    action: 'убирал комнаты и кладовые своим веником',
    letter: letter2,
    dream: 'машину на управлении',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=b1a6153077',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://rozetka.com.ua/sulong_toys_sl_111rhmbl/p87640990/',
      imageLink:'https://i2.rozetka.ua/goods/19407820/sulong_toys_sl_111rhmbl_images_19407820429.jpg',
      title:'Автомобиль на р/у',
      price: '600-800грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=b1a6153077'
    }]
  },
  {
    id: 3, status: 'in-progress', image: boy, label: 'В процессе', percantage: 0,
    title: 'Максим, 16 лет',
    name: 'Максим',
    age: '16 лет',
    like: 'играть в футбол',
    skill: 'собирать из конструктора модели',
    wish: 'хорошо читать и писать',
    action: 'помогать младшему брату Илье, убирать комнату',
    letter: letter3,
    dream: 'музыкальной колонке JBL',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=9138fb4bcf',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://hard.rozetka.com.ua/115405009/p115405009/',
      imageLink:'https://i1.rozetka.ua/goods/13640815/115405009_images_13640815843.jpg',
      title:'Портативная колонка Jbl Charge 2 Plus',
      price: '500-600грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=9138fb4bcf'
    }]
  },
  {
    id: 4, status: 'in-progress', image: girl, label: 'В процессе', percantage: 0,
    title: 'Виолетта, 14 лет',
    name: 'Виолетта',
    age: '14 лет',
    like: 'Мне нравится заниматься спортом',
    skill: 'Хорошо рисовать',
    wish: 'Хорошо относиться к людям',
    action: 'Не пропускаю уроки в школе. Ухаживаю за своими вещами. Уважаю старших',
    letter: letter4,
    dream: 'смарт часах и спортивном костюме (размер 46)',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=5653864d26',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://prom.ua/p1298949018-fitnes-treker-xiaomi.html?',
      imageLink:'https://images.ua.prom.st/2743419076_w640_h640_fitnes-treker-xiaomi.jpg',
      title:'Фитнес трекер Xiaomi Mi band 5',
      price: '500-600грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=5653864d26'
    },
    {
      link:'https://prom.ua/p1231151344-sportivnyj-kostyum-dlya.html?',
      imageLink:'https://images.ua.prom.st/2528383130_w700_h500_sportivnyj-kostyum-dlya.jpg',
      title:'Спортивный костюм для девочек',
      price: '400-700грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=5653864d26'
    }
  ]
  },
  {
    id: 5, status: 'in-progress', image: boy2, label: 'В процессе', percantage: 0,
    title: 'Саша, 9 лет',
    name: 'Саша',
    age: '9 лет',
    like: 'играть с друзьями',
    skill: 'складывать пазлы',
    wish: 'писать и читать',
    action: 'помогаю убирать в комнате',
    letter: letter5,
    dream: 'машине на радиоуправлении',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=eb7dc5418f',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://goodtoys.com.ua/product/mashina-perevertysh-5588-601/',
      imageLink:'https://goodtoys.com.ua/wa-data/public/shop/products/00/webp/48/91/9148/images/23630/23630.970.webp',
      title:'Машинка на радиуправлении',
      price: '500-700грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=eb7dc5418f'
    }]
  },
  {
    id: 6, status: 'in-progress', image: snowAngel, label: 'В процессе', percantage: 0,
    title: 'Миша, 14 лет',
    name: 'Миша',
    age: '14 лет',
    like: 'заниматься спортом',
    skill: 'Хорошо играть в футбол',
    wish: 'Хорошо играть в баскетбол',
    action: 'помагал братьям, помогаю тренеру на занятиях',
    letter: letter6,
    dream: 'музыкальной колонке JBL',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=c1f74b78e5',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://hard.rozetka.com.ua/115405009/p115405009/',
      imageLink:'https://i1.rozetka.ua/goods/13640815/115405009_images_13640815843.jpg',
      title:'Портативная колонка Jbl Charge 2 Plus',
      price: '500-600грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=c1f74b78e5'
    }]
  },
  {
    id: 7, status: 'in-progress', image: boy, label: 'В процессе', percantage: 0,
    title: 'Ваня, 12 лет',
    name: 'Ваня',
    age: '12 лет',
    like: 'заниматься спортом',
    skill: 'играть в футбол',
    wish: 'хорошо научиться быстро бегать и стать умным',
    action: 'перенес пожилой женщине тяжелую сумку, помогла маме по хозяйству, по уборке огорода',
    letter: letter7,
    dream: 'машине на пульте управления',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=f5f385ae4c',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://rozetka.com.ua/252023666/p252023666/',
      imageLink:'https://i8.rozetka.ua/goods/20123791/252023666_images_20123791621.png',
      title:'Антигравитационная машинка на радиоуправлении',
      price: '500-700грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=f5f385ae4c'
    }]
  },
  {
    id: 8, status: 'in-progress', image: girl2, label: 'В процессе', percantage: 0,
    title: 'Лера, 7 лет',
    name: 'Лера',
    age: '7 лет',
    like: 'рисовать',
    skill: 'собирать пазлы, читать книги',
    wish: 'мыть посуду, кататься на велосипеде',
    action: 'хорошо учусь и хорошо себя веду',
    letter: letter8,
    dream: 'куколку с одеждой',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=e4a8bd5fe6',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://prom.ua/p1258383663-detskaya-kukla-barbi.html?',
      imageLink:'https://images.ua.prom.st/2613855229_w700_h500_detskaya-kukla-barbi.jpg',
      title:'Детская кукла барби Defa с одеждой и аксессуарами',
      price: '500-700грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=e4a8bd5fe6'
    }]
  },
  {
    id: 9, status: 'in-progress', image: girl, label: 'В процессе', percantage: 0,
    title: 'Катя, 4 года',
    name: 'Катя',
    age: '4 года',
    like: 'танцевать в красивом платье',
    skill: 'играть с куклами',
    wish: 'хорошо рисовать',
    action: 'помогаю убирать игрушки, с удовольствием занимаюсь с воспитателем',
    letter: letter9,
    dream: 'большой кукле, чтобы ее можно было кормить, ухаживать, одевать. Хочу чтобы она была моими другом',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=5a68629982',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://prom.ua/p1192807394-detskaya-kukla-pups.html?',
      imageLink:'https://images.ua.prom.st/2414637704_w700_h500_detskaya-kukla-pups.jpg',
      title:'Детская кукла пупс для девочек функциональная',
      price: '700-900грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=5a68629982'
    }]
  },
  {
    id: 10, status: 'in-progress', image: snowMan, label: 'В процессе', percantage: 0,
    title: 'Данил, 6 лет',
    name: 'Данил',
    age: '6 лет',
    like: 'читать',
    skill: 'писать буквы',
    wish: 'делать красивые поделки',
    action: 'помогал убирать комнату',
    letter: letter10,
    dream: 'машине на радиоуправлении',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=e3138288ca',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://goodtoys.com.ua/product/mashina-0395-tachki-na-radioupravlenii/',
      imageLink:'https://goodtoys.com.ua/wa-data/public/shop/products/00/webp/77/14/1477/images/9341/9341.970.webp',
      title:'Машина на радиоуправлении',
      price: '400-600грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=e3138288ca'
    }]
  },
  {
    id: 11, status: 'in-progress', image: girl, label: 'В процессе', percantage: 0,
    title: 'Диана, 6 лет',
    name: 'Диана',
    age: '6 лет',
    like: 'играть',
    skill: 'петь, танцевать',
    wish: 'хорошо читать',
    action: 'помогаю младшей сестре',
    letter: letter11,
    dream: 'детской косметике и большой кукле',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=261ddb3436',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://prom.ua/p1299768558-kukla-bolshaya-kak.html?',
      imageLink:'https://images.ua.prom.st/2746008158_w700_h500_kukla-bolshaya-kak.jpg',
      title:'Кукла большая',
      price: '400-500грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=261ddb3436'
    },
    {
      link:'https://prom.ua/p1019631659-nabor-detskoj-kosmetiki.html?',
      imageLink:'https://images.ua.prom.st/1919928941_w700_h500_nabor-detskoj-kosmetiki.jpg',
      title:'Набор детской косметики',
      price: '300-400грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=261ddb3436'
    }
  ]
  },
  {
    id: 12, status: 'in-progress', image: boy2, label: 'В процессе', percantage: 0,
    title: 'Илья, 3 года',
    name: 'Илья',
    age: '3 года',
    like: 'играть с машинками',
    skill: 'играть',
    wish: '',
    action: 'здороваюсь со всеми, говорю спасибо, сам одеваюсь',
    letter: letter12,
    dream: 'большой машине, чтобы в ней можно было возить кубики, катать мишек',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=2fca88e6d4',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://prom.ua/p745286732-bolshoj-igrushechnyj-gruzovik.html?',
      imageLink:'https://images.ua.prom.st/1252789104_w640_h640_bolshoj-igrushechnyj-gruzovik.jpg',
      title:'Большой игрушечный грузовик ',
      price: '700-900грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=5a68629982'
    }]
  },
  {
    id: 13, status: 'in-progress', image: snowAngel, label: 'В процессе', percantage: 0,
    title: 'Дима, 5 лет',
    name: 'Дима',
    age: '5 лет',
    like: 'играть машинками',
    skill: 'делать зарядку',
    wish: 'читать и писать',
    action: 'покупаю продукты',
    letter: letter13,
    dream: 'игрушечном тракторе с прицепом', showLink: 'show',
    showBtn: 'show',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=415056db46',
    presents: [{
      link:'https://myplay.ua/ru/307299?gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6KQea4JjcXe5rkjO-IS4NmahulcQtOpsmdD-wSHyQg0_soSyFsm1MAaAt6qEALw_wcB',
      imageLink:'https://myplay.ua/tmp/cache/images/53/4e0/307299-638x638-r.jpg',
      title:'ТРАКТОР NEW HOLLAND с прицепом',
      price: '500-600грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=415056db46'
    }]
  },
  {
    id: 14, status: 'in-progress', image: girl2, label: 'В процессе', percantage: 0,
    title: 'Наташа, 6 лет',
    name: 'Наташа',
    age: '6 лет',
    like: 'конфеты',
    skill: 'буквы писать',
    wish: 'рисовать',
    action: 'училась читать и писать',
    letter: letter14,
    dream: 'конфетах и большой кукле',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=32bc6575db',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://prom.ua/p1299768558-kukla-bolshaya-kak.html?',
      imageLink:'https://images.ua.prom.st/2746008158_w700_h500_kukla-bolshaya-kak.jpg',
      title:'Кукла большая как ребенок',
      price: '500-600грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=32bc6575db'
    },
    {
      link:'https://zdorovalavka.com.ua/novogodniy-podarochnyy-nabor-poleznyh-konfet-zhivaya-kuhnya-200g?gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6LMEKg_hb96gz3UAckzsbgz-FESDm0wNL8F6NMyC35YIH6FXoO4ruwaAvZREALw_wcB',
      imageLink:'https://zdorovalavka.com.ua/image/cache/catalog/Sladkij%20mir/novogodniy-podarochnyy-nabor-poleznyh-konfet-zhivaya-kuhnya-200g-1000x1000.png',
      title:'Новогодний подарочный набор полезных конфет',
      price: '200-300грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=32bc6575db'
    }
  ]
  },
  {
    id: 15, status: 'in-progress', image: boy, label: 'В процессе', percantage: 0,
    title: 'Руслан, 10 лет',
    name: 'Руслан',
    age: '10 лет',
    like: 'рисовать',
    skill: 'хорошо играть в футбол',
    wish: 'Собирать конструктор LEGO',
    action: 'стал получать хорошие оценки',
    letter: letter15,
    dream: 'большом конструкторе',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=7ee6ce23f7',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://pampik.com/catalog/konstruktor-lego-city-pozhar-v-burger-kafe-327-detaley-60214?gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6LMYqo6SclwyTXEKsjjNPTCLnQ2dT7EZ75gW5i-9bIxb1UTB5zZcd0aAueYEALw_wcB',
      imageLink:'https://pampik.com/uploads/product/middle/20190228/89qy.jpg',
      title:'Конструктор LEGO City',
      price: '700-900грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=7ee6ce23f7'
    }]
  },
  {
    id: 16, status: 'in-progress', image: girl, label: 'В процессе', percantage: 0,
    title: 'Рита, 11 лет',
    name: 'Рита',
    age: '11 лет',
    like: 'играть',
    skill: 'петь',
    wish: 'убирать комнату',
    action: 'помогать всем',
    letter: letter16,
    dream: 'рюкзачке для девочек',
    paymentLink: 'https://privatbank.ua/sendmoney?payment=721aab7fbf',
    showLink: 'show',
    showBtn: 'show',
    presents: [{
      link:'https://rozetka.com.ua/coolpack_23377cp/p114928357/',
      imageLink:'https://i1.rozetka.ua/goods/13589653/coolpack_23377cp_images_13589653915.jpg',
      title:'Рюкзак CoolPack Ruby для девочек',
      price: '700-800грн',
      paymentLink: 'https://privatbank.ua/sendmoney?payment=721aab7fbf'
    }]
  },
]
