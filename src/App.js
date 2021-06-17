import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Product from './component/Product/Product';
import Contact from './component/Contact/Contact';
import Statistic from './component/Statistics/Statistic';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router>
      <Route path="/" exact component>
        <Navbar/>
        <Home/>
        <Product/>
        <Statistic/>
        <Contact/>
      </Route>
    </Router>
  );
}

export default App;
