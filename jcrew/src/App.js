import './App.css';
import {Routes,Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing';
import Women from './Pages/Products/Women';
import Men from './Pages/Products/Men';
import WomenDetails from './Pages/Products/WomenDetails';
import Kids from './Pages/Products/Kids'
import CartItem from './CartItem/CartItem';
import MenDetails from './Pages/Products/MenDetails';
import KidsDetails from './Pages/Products/KidsDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/women" element={<Women />}/>
        <Route path="/women/:id" element={<WomenDetails/>}/>
        <Route path="/men" element={<Men />}/>
        <Route path="/men/:id" element={<MenDetails/>}/>
        <Route path="/kids" element={<Kids />}/>
        <Route path="/Kids/:id" element={<KidsDetails />}/>
        <Route path="/cart" element={<CartItem/>}/>
      </Routes>
    </div>
  );
}

export default App;
