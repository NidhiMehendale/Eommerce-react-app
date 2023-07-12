import { Navbar , Container, Nav,NavLink} from 'react-bootstrap';

import  classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <div >   
           <Navbar bg="dark" data-bs-theme="dark">
            <Container className="justify-content-center">
            <Nav>
            <NavLink href="/home">HOME</NavLink>
            <NavLink href="/store">STORE</NavLink>
            <Nav.Link
            href="/about"
            to="/about"
          >
            ABOUT
          </Nav.Link>
          </Nav>
            </Container>
           <HeaderCartButton onClick={props.onShowCart}/>
         </Navbar>
         
           <div className={classes.header}>  
             <h1>The Generics</h1>
          </div>
          
        
        </div>
      );
};

export default Header