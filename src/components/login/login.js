import { useState, useRef, useContext ,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import classes from './login.module.css';
import AuthContext from '../../store/auth-context';
import Header from '../Header';

const LoginPage = () => {
  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  console.log('token',authCtx.idToken);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  useEffect(() => {
    if (authCtx.isLoggedIn) { 
        window.location.reload();
    }
  }, [authCtx.isLoggedIn]);

  const submitHandler = (event) => {
    event.preventDefault();
    
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if(isLogin){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGFwS9sVAtyTS7hLCpP0SXbyDrC_YLKcg'
       
     
    }else{
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGFwS9sVAtyTS7hLCpP0SXbyDrC_YLKcg'
      
    }

    fetch(url,
          {
            method: 'POST',
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken	:true
            }),
            headers: {
               'Content-Type' : 'application/json'
            }
          }
      ).then(res => {
        setIsLoading(false);
        if(res.ok){
            return res.json();
        }else{
         return res.json().then(data => {
            let errorMessage = 'Authentication failed';
            if(data && data.error && data.error.message){
              errorMessage = data.error.message;
            }
            
            throw new Error(errorMessage);
          });   
        }
      }).then(data => {
            authCtx.login(data.idToken);
            history.replace('/store');
            console.log(data.idToken)
       
      })
      .catch((err) => {
          alert(err.message)
      });


  };

  return (
  <div> 
    <Header />
    <section className={classes.auth}>
     
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
         {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button> }
         {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
    </div>
  );
};



export default LoginPage;