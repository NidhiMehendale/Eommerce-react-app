import Header from "./Header";
import classes from './ContactUs.module.css';
import React , { useRef } from "react";

const ContactUs = (props) => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
   
  const submitHandler = (event) => {
    event.preventDefault();

    const contact = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
      };
    
     props.onAddContact(contact);
  };
   

   return (
  <section>
     <Header />
    <form onSubmit={submitHandler}>
    <div className={classes.control}>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name'  ref={nameRef}/>
    </div>
    <div className={classes.control}>
      <label htmlFor='email'>Email</label>
      <input type='email' id="email" ref={emailRef}/>
    </div>
    <div className={classes.control}>
      <label htmlFor='number'>Phone</label>
      <input type='number' id='number' ref={phoneRef} />
    </div>
    <button className={classes.button}>Submit</button>
  </form>
  </section>
   );
};

export default ContactUs;