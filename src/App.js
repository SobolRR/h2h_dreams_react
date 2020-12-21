
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './scss/Styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './Main';
import Dreams from './Dreams.js';
import DreamDetail from './DreamDetail.js';
import Institution from "./Institution";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/dreams">
          <Dreams />
        </Route>
        <Route exact path="/dreams/:id">
          <DreamDetail />
        </Route>
        <Route exact path="/child-center">
          <Institution />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
