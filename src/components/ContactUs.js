import classes from './ContactUs.module.css';
import React , { useRef } from "react";
import { NavLink,Navbar,Container,Nav } from "react-bootstrap";

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

     nameRef.current.value = '';
     emailRef.current.value = '';
     phoneRef.current.value = '';
  };
   

   return (
  <section>
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
     <h2>CONTACT US</h2>
    <form className={classes['contact-form']} onSubmit={submitHandler}>
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