import { onAuthStateChanged } from 'firebase/auth';
import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import facebook from '../../Assets/images//icons/facebook.png';
import github from '../../Assets/images//icons/github.png';
import google from '../../Assets/images//icons/google.png';
import auth from '../../firebase.init';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    //   const [email, setEmail] = useState('');
    //   const [password, setPassword] = useState('');

      const emailRef = useRef('');
      const passwordRef = useRef('');

      const handleFormSubmit = e => {
          e.preventDefault();

          const email = emailRef.current.value;
          const password = passwordRef.current.value;

          signInWithEmailAndPassword(email, password)
          .catch(err => {
              console.log(err.message);
          })
      }

    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

    const [signInWithFacebook,facebookUser] = useSignInWithFacebook(auth);

    const [signInWithGithub, githubUser] = useSignInWithGithub(auth);

    onAuthStateChanged(auth,user => {
        if(user) {
            navigate(from,{replace: true})
        }
    })

    return (
        <section className='min-h-screen flex items-center w-full'>
            <div className='bg-gray-50 p-4 m-4 w-full max-w-md mx-auto font-poppins text-center'>
                <h1 className='text-4xl mb-4 text-center font-patua text-indigo-400'>Login</h1>
                <form className='flex flex-col gap-4 mb-4' onSubmit={handleFormSubmit}>
                    <input 
                    ref={emailRef}
                    className='border-2 px-4 py-2 rounded' type="email" placeholder='Enter email' required/>
                    <input 
                    ref={passwordRef}
                    className='border-2 px-4 py-2 rounded' type="password" placeholder='Enter password' required/>
                    <button className='text-right'>forgot password?</button>
                    <input className='bg-indigo-500 hover:bg-indigo-600 text-white py-2' type="submit" value="Login" />
                </form>
                <div className='text-center mb-4'>
                    <p>or</p>
                    <p>continue with</p>
                </div>
                <div className='flex justify-center gap-8 mb-10'>
                    <button onClick={()=>signInWithGoogle()}>
                        <img className='w-12' src={google} alt="" />
                    </button>
                    <button onClick={()=>signInWithFacebook()}>
                        <img className='w-12' src={facebook} alt="" />
                        </button>
                    <button onClick={()=>signInWithGithub()}>
                        <img className='w-12' src={github} alt="" />
                        </button>
                </div>
                <p >Don't have a account? <span><Link className='text-indigo-500' to='/register'>Register</Link></span></p>
            </div>
           
        </section>
    );
};

export default Login;