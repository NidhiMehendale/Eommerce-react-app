import { Fragment } from "react";
import classes from './Home.module.css';
const HomePage = () => {
 return (
    <Fragment>
 
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
    </Fragment>
 )

};

export default HomePage;