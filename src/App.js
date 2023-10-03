
import './App.css';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';



function App() {
  return (
   <BrowserRouter>
    <div className='App'>
    {/* <Header /> */}
      <Navbar/>
      
      <Routes>
        <Route exact path = "/" element = {<ProductCard/>}></Route>
        <Route path = "/cart" element = {<Cart/>}></Route>
      </Routes> 
      
    </div>
    </BrowserRouter>
   
  );
}

export default App;
