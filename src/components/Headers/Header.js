import { Navbar , Container, Nav,NavLink} from 'react-bootstrap';

import  classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const IsLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/login');
  };
    return (
        <div>   
           <Navbar bg="dark" data-bs-theme="dark">
           <p className={classes.header}>Generics</p>
            <Container className="justify-content-center">
           
            <Nav>
            <NavLink href="/home" to="/home">HOME</NavLink>
            <NavLink href="/store" to="/store">STORE</NavLink>
            <NavLink href="/about" to="/about">ABOUT</NavLink>
            <NavLink href="/contactUs" to="/contactUs">CONTACTUS</NavLink>
           {!IsLoggedIn && <NavLink href="/login" to="/login">LOGIN</NavLink> }
           {IsLoggedIn && ( <NavLink href="/logout" to="/logout" onClick={logoutHandler}>LOGOUT</NavLink>) }
          </Nav>
            </Container>
         {IsLoggedIn && ( <HeaderCartButton onClick={props.onShowCart} />) }
         </Navbar>
         
          
        
        </div>
      );
};

export default Header