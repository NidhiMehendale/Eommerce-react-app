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
          <span class="tour-date">JUL16</span>
          <span class="tour-place">DETROIT,MI</span>
          <span class="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
          <button className={classes['buy-btn']}>BUY TICKETS</button>
      </div>
      <div className={classes['tour-item']}>
          <span class="tour-date">JUL19</span>
          <span class="tour-place">TORONTO,ON</span>
          <span class="tour-spec-place">BUDWEISER STAGE</span>
          <button className={classes['buy-btn']}>BUY TICKETS</button>
      </div>
      <div className={classes['tour-item']}>
          <span class="tour-date">JUL 22</span>
          <span class="tour-place">BRISTOW, VA</span>
          <span class="tour-spec-place">JIGGY LUBE LIVE</span>
          <button className={classes['buy-btn']}>BUY TICKETS</button>
      </div>
      <div className={classes['tour-item']}>
          <span class="tour-date">JUL 29</span>
          <span class="tour-place">PHOENIX, AZ</span>
          <span class="tour-spec-place">AK-CHIN PAVILION</span>
          <button className={classes['buy-btn']}>BUY TICKETS</button>
      </div>
      <div className={classes['tour-item']}>
          <span class="tour-date">AUG 2</span>
          <span class="tour-place">LAS VEGAS, NV</span>
          <span class="tour-spec-place">T-MOBILE ARENA</span>
          <button className={classes['buy-btn']}>BUY TICKETS</button>
      </div>
      <div className={classes['tour-item']}>
          <span class="tour-date">AUG 7</span>
          <span class="tour-place">CONCORD, CA</span>
          <span class="tour-spec-place">CONCORD PAVILION</span>
          <button className={classes['buy-btn']}>BUY TICKETS</button>
      </div>
  
</section>
      <Footer />
    </Fragment>
 )

};

export default HomePage;