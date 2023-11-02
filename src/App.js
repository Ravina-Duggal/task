import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Layouts/Header';
import Master from './Master';
import Home from './Components/Home';
import Coupon from './Components/Coupon';
import Index from './Components/Index';
import Deals from './Components/Deals';
import Store from './Components/Store';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Master/>}>
        <Route path='/' element = {<Index/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/coupon' element = {<Coupon/>}/>
        <Route path='/deals' element = {<Deals/>}/>
        <Route path='/store' element = {<Store/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
