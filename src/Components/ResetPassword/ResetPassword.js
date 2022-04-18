import { XIcon } from '@heroicons/react/outline';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const ResetPassword = () => {
    const [user] = useAuthState(auth);

    const emailRef = useRef('');
    const resetPassword = () => {

        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success('email sent, check your mail',{id: 'resetpassword'});
        })
        .catch(() => {
            toast.error('l',{id: 'resetpassword'});
        });
    }

    return (
        <div className='h-[75vh] grid place-content-center relative w-full'>
            <Link className='absolute top-5 left-5' to='/login'><XIcon className='h-10 w-10 p-1 hover:bg-indigo-50 focus:-scale-95 active:-scale-95 text-indigo-500 border-2 rounded-full'/></Link>
            <div className='w-96 text-center'>
                <input ref={emailRef} className='border-2 h-12 w-full px-4 p-2 font-roboto text-lg' type="email" placeholder='Enter your email' required/>
                <br />
                <button onClick={resetPassword} className='font-medium text-xl text-white shadow-lg rounded bg-indigo-500 mt-6 px-12 py-2'>Reset</button>
            </div>
        </div>
    );
};

export default ResetPassword;