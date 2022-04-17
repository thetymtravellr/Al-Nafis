import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import facebook from '../../Assets/images//icons/facebook.png';
import github from '../../Assets/images//icons/github.png';
import google from '../../Assets/images//icons/google.png';
import auth from '../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const emailRef = useRef('');
      const passwordRef = useRef('');

      const handleFormSubmit = e => {
          e.preventDefault();

          const email = emailRef.current.value;
          const password = passwordRef.current.value;

          createUserWithEmailAndPassword(email, password)
          .catch(err => {
              console.log(err.message);
          })
      }

      const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

    return (
        <section className='min-h-screen flex items-center w-full'>
            <div className='bg-gray-50 p-4 m-4 w-full max-w-md mx-auto font-poppins text-center'>
                <h1 className='text-4xl mb-4 text-center font-patua text-indigo-400'>Register</h1>
                <form className='flex flex-col gap-4 mb-4' onSubmit={handleFormSubmit}>
                    <input 
                    ref={emailRef}
                    className='border-2 px-4 py-2 rounded' type="text" placeholder='Enter name' required/>
                    <input 
                    ref={emailRef}
                    className='border-2 px-4 py-2 rounded' type="email" placeholder='Enter email' required/>
                    <input 
                    ref={passwordRef}
                    className='border-2 px-4 py-2 rounded' type="password" placeholder='Enter password' required/>
                    <input className='bg-indigo-500 hover:bg-indigo-600 text-white py-2' type="submit" value="Register" />
                </form>
                <div className='text-center mb-4'>
                    <p>or</p>
                    <p>continue with</p>
                </div>
                <div className='flex justify-center gap-8 mb-10'>
                    <button onClick={()=>signInWithGoogle()}><img className='w-12' src={google} alt="" /></button>
                    <button><img className='w-12' src={facebook} alt="" /></button>
                    <button><img className='w-12' src={github} alt="" /></button>
                </div>
                <p >Already registered? <span><Link className='text-indigo-500' to='/login'>Login</Link></span></p>
            </div>
        </section>
    );
};

export default Register;