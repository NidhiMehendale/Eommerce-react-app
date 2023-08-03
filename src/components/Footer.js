import React from "react";
import classes from './Footer.module.css';
import Image1 from '../assets/YouTube-logo.jpg';
import Image2 from '../assets/spotify-logo.jpg';
import Image3 from '../assets/facebook-logo.png';

const Footer = () => {
  return (
     <div>
     <footer>
     <div className={classes['footer-title']}>
          Generics
     </div>
     <div className={classes['footer-icons']}>
         <ul>
             <li><a href="https://www.youtube.com">
               <img src={Image1} alt="yutube"/>
             </a></li>
             <li><a href="https://spotify.com">
                <img  src={Image2} alt="spotify"/>
             </a></li>
             <li><a href="https://facebook.com">
                <img src={Image3} alt="facebook"/>
             </a></li>
         </ul>
     </div>
 </footer>
     
     </div>
  );
};

export default Footer;