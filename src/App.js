import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Board from './Components/Board';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from './Components/Card';
import Addboard from './Components/Addboard';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/card" component={Card} />
      <Route path="/addboard" component={Addboard} />
      <Route path="/board" component={Board} />
    </Router>
  );
}

export default App;
