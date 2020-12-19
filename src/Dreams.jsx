import Card from './components/Card';
import Breadcrumbs from './components/Breadcrumbs';
import { data } from './data';

function Dreams() {
  
  return (

    <main class="page__main _01 page__dreams-list">
    <div class="container">
    <Breadcrumbs currentPageName={'Мечты'}/>
        <ul class="card-list">
          {(data.map((card, i) =>(
            <li class="card-list__item" key={i}>
               <Card {...card}/>
               
            </li>
          )))}
        </ul>
        <div class="background-section"></div>
    </div>
    
  </main>

  );
}

export default Dreams;
