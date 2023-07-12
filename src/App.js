import React,{useState}  from 'react';
import AvailableProducts from './components/AvailableProducts';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';

import AboutPage from './components/About';
import { Switch, BrowserRouter as  Route } from "react-router-dom";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
    
       <CartProvider> 
        <Header onShowCart={showCartHandler} /> 
        <AvailableProducts />
        <Footer />
       {cartIsShown && <Cart  onClose={hideCartHandler}/>}   
      </CartProvider>  
      
    </Switch>

   

   

  );
}

export default App;
