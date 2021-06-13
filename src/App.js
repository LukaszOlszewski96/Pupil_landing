import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';

function App() {
  return (
    <Router>
      <Route>
        <Navbar/>
        <Home/>
      </Route>
    </Router>
  );
}

export default App;
