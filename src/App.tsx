import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/HeaderComponents/Header';
import Footer from './components/FooterComponent/Footer';
import ContentComponent from './components/ContentComponents/ContentComponent';

function App() {
  return (
    <Router>
      <div className="f-c">
        <div className='wrapper'>
          <Header />
          <ContentComponent />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
