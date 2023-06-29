import React,{useState} from 'react';
import AvailableProducts from './components/AvailableProducts';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div className="App">
      <Header onShowCart={showCartHandler} /> 
      <AvailableProducts />
      <Footer />
      <div>
     {cartIsShown && <Cart  onClose={hideCartHandler}/>}
      </div>
    </div>

  );
}

export default App;
