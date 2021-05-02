import ContentComponent from './components/ContentComponents/ContentComponent';
import Footer from './components/FooterComponent/Footer';
import Header from './components/HeaderComponents/Header';
import LoginCmponent from './components/HeaderComponents/LoginComponent/LoginCmponent';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTE } from './constants/constants';

import './App.scss';
import Gallery from './components/ContentComponents/Gallery/Gallery';

function App() {
  return (
    <Router>
      <div className="f-c">
        <div className='wrapper'>
          <Header />
          <Switch>
            <Route path={ROUTE.DEFAULT} exact component={ContentComponent}/>
            <Route path={ROUTE.GALLERY} exact component={Gallery} />
            <Route path={ROUTE.LOGIN} exact component={LoginCmponent}/>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
