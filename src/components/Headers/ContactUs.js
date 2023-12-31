import classes from './ContactUs.module.css';
import React , { useRef } from "react";


const ContactUs = (props) => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const queryRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();

    const contact = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        query:queryRef.current.value,
      };
    
     props.onAddContact(contact);

     nameRef.current.value = '';
     emailRef.current.value = '';
     phoneRef.current.value = '';
     queryRef.current.value = '';
  };
   

   return (
  <section>
     <h2>CONTACT US</h2>
    <form  className={classes.auth} onSubmit={submitHandler}>
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
      <input type='text' id='number' ref={phoneRef} />
    </div>
    <div className={classes.control}>
      <label htmlFor='query'>Query</label>
      <textarea style={{height:'90px',width:'100%'}} type='text' id='query'  ref={queryRef}/>
   </div>
    <button className={classes.button}>Submit</button>
  </form>
  </section>
   );
};

export default ContactUs;