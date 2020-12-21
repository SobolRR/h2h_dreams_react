import Card from './components/Card';
import Breadcrumbs from './components/Breadcrumbs';
import { data } from './data';
import { sortDataByProp } from './utils/utils';

function Dreams() {
  const sortedData = sortDataByProp(data,"status")
    return (
    <main className="page__main _01 page__dreams-list">
    <div className="container">
    <Breadcrumbs currentPageName={'Мечты'}/>
        <ul className="card-list">
          {(sortedData.map((card, i) =>(
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
