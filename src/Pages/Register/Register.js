import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import facebook from '../../Assets/images//icons/facebook.png';
import github from '../../Assets/images//icons/github.png';
import google from '../../Assets/images//icons/google.png';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import auth from '../../firebase.init';

const Register = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    // Sign In With 3rd Party Auth Provider

    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

    const [signInWithFacebook,facebookUser] = useSignInWithFacebook(auth);

    const [signInWithGithub, githubUser] = useSignInWithGithub(auth);

    // create user with email and password

    const [
        createUserWithEmailAndPassword,
        emailUser,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
      const [updateProfile, updating, profileUpdateError] = useUpdateProfile(auth);

      const emailRef = useRef('')
      const passwordRef = useRef('')
      const nameRef = useRef('')

      const handleSubmit = async e => {
          e.preventDefault()

          const name = nameRef.current.value;
          const email = emailRef.current.value;
          const password = passwordRef.current.value;

         if(password.length >= 6) {
            await createUserWithEmailAndPassword(email,password);
            await updateProfile({ displayName: name });
            toast.success('email verification sent',{id: 'verification'})
            navigate(from)
         } else {
            toast.error('password have to be 6 or more character long',{id:'register'})
         }
      }

    return (
        <>
        <Header></Header>
        <section className='min-h-screen flex items-center w-full'>
            <div className='bg-gray-50 p-4 m-4 w-full max-w-md mx-auto font-poppins text-center'>
                <h1 className='text-4xl mb-4 text-center font-patua text-indigo-400'>Register</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-4'>
                    <input 
                    ref={nameRef}
                    className='border-2 px-4 py-2 rounded' type="text" placeholder='Enter name' required/>
                    <input 
                    ref={emailRef}
                    className='border-2 px-4 py-2 rounded' type="email" placeholder='Enter email' required/>
                    <input 
                    ref={passwordRef}
                    className='border-2 px-4 py-2 rounded' type="password" placeholder='Enter password' required/>
                    <button
                    type='submit'
                    className='bg-indigo-500 hover:bg-indigo-600 text-white py-2 cursor-pointer' >Register</button>
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
                <p >Already registered? <span><Link className='text-indigo-500' to='/login'>Login</Link></span></p>
            </div>
        </section>
        <Footer></Footer>
        </>
    );
};

export default Register;