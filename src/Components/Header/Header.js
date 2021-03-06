
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { signOut } from 'firebase/auth'
import { Fragment } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import placeHolder from '../../Assets/images/icons/Portrait_Placeholder.png'
import auth from '../../firebase.init'

function Header() {

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  
  return (
    <Disclosure as="nav" className="bg-white w-full fixed top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link  to='/'>
                    <h3 className="block lg:hidden text-2xl text-lime-500 font-patua">Al Nafis</h3>
                    <h3 className="hidden lg:block text-2xl text-lime-500 font-patua">Al Nafis</h3>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-auto">
                  <div className="flex space-x-4">
                    
                    <Link className='text-gray-400 hover:bg-indigo-100 hover:text-indigo-500 px-4 py-1 rounded text-base font-medium ' to='/'>Home</Link>
                    <a className='text-gray-400 hover:bg-indigo-100 hover:text-indigo-500 px-4 py-1 rounded text-base font-medium ' href='/#services'>Service</a>
                    <a className='text-gray-400 hover:bg-indigo-100 hover:text-indigo-500 px-4 py-1 rounded text-base font-medium ' href='/#testimonial'>Testimonial</a>
                    <Link className='text-gray-400 hover:bg-indigo-100 hover:text-indigo-500 px-4 py-1 rounded text-base font-medium ' to='/blog'>Blog</Link>
                    <Link className='text-gray-400 hover:bg-indigo-100 hover:text-indigo-500 px-4 py-1 rounded text-base font-medium ' to='/aboutme'>About Me</Link>
  
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              

                {/* Profile dropdown */}
               {
                 user ?  <Menu as="div" className="ml-3 relative">
                 <div>
                   <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                     <span className="sr-only">Open user menu</span>
                     <img
                       className="h-8 w-8 rounded-full"
                       src={user?.photoURL ? user?.photoURL : placeHolder}
                       alt=""
                     />
                   </Menu.Button>
                 </div>
                 <Transition
                   as={Fragment}
                   enter="transition ease-out duration-100"
                   enterFrom="transform opacity-0 scale-95"
                   enterTo="transform opacity-100 scale-100"
                   leave="transition ease-in duration-75"
                   leaveFrom="transform opacity-100 scale-100"
                   leaveTo="transform opacity-0 scale-95"
                 >
                   <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                     <Menu.Item>
                     <p className='px-4 py-2 text-sm text-center text-gray-700 border-b-2 '>Welcome {user?.displayName ? user?.displayName : 'user'}</p>
                     </Menu.Item>
                     <Menu.Item>
                       {/* {({ active }) => (
                         <a
                           href="#"
                           className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                         >
                           Your Profile
                         </a>
                       )} */}
                      
                       <Link className='block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray-300 w-full' to='/'>Profile</Link>
                     </Menu.Item>
                     <Menu.Item>
                     <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 w-full' onClick={handleSignOut}>Sign Out</button>
                     </Menu.Item>
                   </Menu.Items>
                 </Transition>
               </Menu>
               :
              <div className=''>
                 <div className='hidden md:block'>
               <Link to='/login'> <button className='hover:bg-gradient-to-r from-lime-600 to-lime-500 hover:text-white hover:border-lime-500 border-2 px-3 lg:mr-6 text-gray-600 py-1 rounded font-medium '>Login</button></Link>
               <Link to='/register'>
               <button className='px-3 py-1 rounded font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500'>Register</button>
               </Link>
              </div>
              </div>
               }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">

              <Link className='text-gray-500 hover:bg-indigo-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium' to='/'>Home</Link>
              <a className='text-gray-500 hover:bg-indigo-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium' href='/#services'>Service</a>
              <a className='text-gray-500 hover:bg-indigo-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium' href='/#testimonial'>Testimonial</a>
              <Link className='text-gray-500 hover:bg-indigo-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium' to='/blog'>Blog</Link>
              <Link className='text-gray-500 hover:bg-indigo-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium' to='/aboutme'>About Me</Link>
              <div className='flex gap-6'>
               <Link to='/login'> <button className='hover:bg-gradient-to-r from-lime-600 to-lime-500 hover:text-white hover:border-lime-500 border-2 px-3 text-gray-600 py-1 rounded font-medium '>Login</button></Link>
               <Link to='/register'>
               <button className='px-3 py-1 rounded font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500'>Register</button>
               </Link>
              </div>
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header;