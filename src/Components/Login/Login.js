import React from 'react';
import facebook from '../../Assets/images//icons/facebook.png';
import github from '../../Assets/images//icons/github.png';
import google from '../../Assets/images//icons/google.png';

const Login = () => {
    return (
        <section className=' w-full mt-40'>
            <div className='border-2 p-4 m-4 w-full max-w-sm mx-auto font-poppins'>
                <form className='flex flex-col gap-4 mb-4' action="">
                    <input className='border-2 px-4 py-2 rounded' type="text" placeholder='Enter email'/>
                    <input className='border-2 px-4 py-2 rounded' type="password" placeholder='Enter password'/>
                    <input className='bg-indigo-500 hover:bg-indigo-600 text-white py-2' type="submit" value="Login" />
                </form>
                <div className='text-center mb-4'>
                    <p>or</p>
                    <p>continue with</p>
                </div>
                <div className='flex justify-center gap-8'>
                    <button><img className='w-12' src={google} alt="" /></button>
                    <button><img className='w-12' src={facebook} alt="" /></button>
                    <button><img className='w-12' src={github} alt="" /></button>
                </div>
            </div>
        </section>
    );
};

export default Login;