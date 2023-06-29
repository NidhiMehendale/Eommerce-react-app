import { Navbar , Nav, Container} from 'react-bootstrap';
import  classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <div>   
           <Navbar bg="dark" data-bs-theme="dark">
            <Container className="justify-content-center">
              <Nav>
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#features">STORE</Nav.Link>
                <Nav.Link href="#pricing">ABOUT</Nav.Link>
              </Nav>
            </Container>
           <HeaderCartButton onClick={props.onShowCart}/>
         </Navbar>
         
           <div className={classes.header}>  
             <h1>The Generics</h1>
          </div>
          <div id="music" style={{textAlign:'center'}}>
            <h2>MUSIC</h2>
         </div>
        </div>
      );
};

export default Header