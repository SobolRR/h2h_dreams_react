import Card from './components/Card';
import Breadcrumbs from './components/Breadcrumbs';
import { data } from './data';

function Dreams() {
  
  return (

    <main className="page__main _01 page__dreams-list">
    <div className="container">
    <Breadcrumbs currentPageName={'Мечты'}/>
        <ul className="card-list">
          {(data.map((card, i) =>(
            <li className="card-list__item" key={i}>
               <Card {...card}/>
               
            </li>
          )))}
        </ul>
        <div className="background-section"></div>
    </div>
    
  </main>

  );
}

export default Dreams;
