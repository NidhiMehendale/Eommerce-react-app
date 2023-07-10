import React,{useState} from 'react';
import AvailableProducts from './components/AvailableProducts';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} /> 
      <AvailableProducts />
      <Footer />
      <div>
     {cartIsShown && <Cart  onClose={hideCartHandler}/>}
      </div>
    </CartProvider>

  );
}

export default App;
