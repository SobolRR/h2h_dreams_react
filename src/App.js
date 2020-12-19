
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './scss/Styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './Main';
import Dreams from './Dreams.jsx';
import DreamDetail from './DreamDetail.jsx';

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
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
