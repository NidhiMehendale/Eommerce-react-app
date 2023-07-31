import { Fragment } from "react";
import Footer from "./Footer";
import classes from './Home.module.css';
import { Navbar,Container,Nav,NavLink } from "react-bootstrap";
const HomePage = () => {
 return (
    <Fragment>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container className="justify-content-center">
        <Nav>
        <NavLink href="/home" to="/home">HOME</NavLink>
        <NavLink href="/store">STORE</NavLink>
        <NavLink
        href="/about"
        to="/about">
        ABOUT
    </NavLink>
    <NavLink href="/contactUs" to="/contactUs">CONTACTUS</NavLink>
    </Nav>
        </Container>
    
    </Navbar>
 
   <div className={classes.header}>  
     <h2 style={{textAlign:'center'}}>The Generics</h2>
     <div className={classes['latest-album']}>Get Our Latest Album</div>
     <button className={classes['play-btn']}>►</button>
  </div>
  <section className={classes['tours-container']}>
  <h2>TOURS</h2>
  
      <div className={classes['tour-item']}>
          <span >JUL16</span>
          <span >DETROIT,MI</span>
          <span >DTE ENERGY MUSIC THEATRE</span>
          <button className={classes['buy-btn']}>BUY TICKETS</button>
      </div>
      <div className={classes['tour-item']}>
          <span >JUL19</span>
          <span >TORONTO,ON</span>
          <span >BUDWEISER STAGE</span>
          <button className={classes['buy-btn']}>BUY TICKETS</button>
      </div>
      <div className={classes['tour-item']}>
          <span >JUL 22</span>
          <span >BRISTOW, VA</span>
          <span >JIGGY LUBE LIVE</span>
          <button className={classes['buy-btn']}>BUY TICKETS</button>
      </div>
      <div className={classes['tour-item']}>
          <span >JUL 29</span>
          <span >PHOENIX, AZ</span>
          <span >AK-CHIN PAVILION</span>
          <button className={classes['buy-btn']}>BUY TICKETS</button>
      </div>
      <div className={classes['tour-item']}>
          <span >AUG 2</span>
          <span >LAS VEGAS, NV</span>
          <span>T-MOBILE ARENA</span>
          <button className={classes['buy-btn']}>BUY TICKETS</button>
      </div>
      <div className={classes['tour-item']}>
          <span >AUG 7</span>
          <span >CONCORD, CA</span>
          <span >CONCORD PAVILION</span>
          <button className={classes['buy-btn']}>BUY TICKETS</button>
      </div>
  
</section>
      <Footer />
    </Fragment>
 )

};

export default HomePage;