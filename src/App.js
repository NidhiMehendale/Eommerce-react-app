import React,{useState}  from 'react';
import AvailableProducts from './components/AvailableProducts';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';

import AboutPage from './components/About';
import { Switch, BrowserRouter as  Route } from "react-router-dom";
import HomePage from './components/Home';
import ContactUs from './components/ContactUs';

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const [error, setError] = useState(null);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  async function addContactHandler(contact) {
    try{
      const response = await fetch('https://e-commerce-225d7-default-rtdb.firebaseio.com/contacts.json',{
        method: 'POST',
        body:JSON.stringify(contact),
        headers: {
          'Content-Type' :'aplication/json'
        }
      });
      if(!response.ok) throw new Error("Network error");
      const data = await response.json();
      console.log(data);

    }catch(error){
       setError(error.message);
    }
  

  }

  let content = <p>Network Error</p>;

  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
       <Route path="/home">
         <HomePage />
       </Route>
       <Route path="/contactUs">
        <ContactUs onAddContact={addContactHandler}/>
       </Route>
       
       <CartProvider> 
        <Header onShowCart={showCartHandler} /> 
        <AvailableProducts />
        <Footer />
       {cartIsShown && <Cart  onClose={hideCartHandler}/>}  
       <p>{content}</p>
      </CartProvider>  
      
    </Switch>

   

   

  );
}

export default App;
