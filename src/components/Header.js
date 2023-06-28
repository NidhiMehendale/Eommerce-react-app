import { Container, Navbar, Nav ,Button} from 'react-bootstrap';
import  classes from './Header.module.css';

const Header = () => {
    return (
        <div>
           <Navbar  bg="dark" expand="sm" variant="dark">
             <Container>
               <Nav>
               <Nav.Link href="/index.html">HOME</Nav.Link>
               <Nav.Link href="#">STORE</Nav.Link>
               <Nav.Link href="#">ABOUT</Nav.Link>
               <Button variant="outline-info">Cart 0</Button>
               </Nav>         
             </Container>
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