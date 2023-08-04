import React,{useState , useContext}  from 'react';
import AvailableProducts from './components/Products/AvailableProducts';
import Footer from './components/Footer/Footer';
import Header from './components/Headers/Header';
import Cart from './components/Cart/Cart';
import AboutPage from './components/Headers/About';
import { Switch, BrowserRouter as  Route } from "react-router-dom";
import HomePage from './components/Headers/Home';
import ContactUs from './components/Headers/ContactUs';
import LoginPage from './components/login/login';


import AuthContext from './store/auth-context';



function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const [error, setError] = useState(null);

const authCtx = useContext(AuthContext);
console.log("auth-login",authCtx.isLoggedIn);

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

  let content = <p></p>;

  if (error) {
    content = <p>{error}</p>;
  }

 
  return (
  <div>
    {cartIsShown && <Cart  onClose={hideCartHandler}/>}  
    <Header onShowCart={showCartHandler} /> 
    {content}
    <main>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
       </Route>
          <Route path="/about"> 
              <AboutPage /> 
          </Route> 
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/login">
            <LoginPage />
            </Route>
            <Route path="/contactUs">
            <ContactUs onAddContact={addContactHandler}/>
            </Route>
          <Route path="/store">        
          {authCtx.isLoggedIn && <AvailableProducts /> }
          {!authCtx.isLoggedIn && <LoginPage />}
            </Route>
          <Route path="/logout">
            <LoginPage />
          </Route>
        </Switch>
      </main>
    <Footer/> 
  </div>

  
  );
}

export default App;
