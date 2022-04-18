import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

export default function Blog() {
  return (
    <>
        <Header></Header>
    <section className='min-h-screen flex flex-col
      max-w-7xl mx-auto mt-20'>
  <h1 className='text-center font-semibold text-4xl'>Welcome To My Blog</h1>
    <div className="w-full px-4 pt-16">
      <div className="w-full max-w-7xl p-2 mx-auto bg-white rounded-2xl">
      <Disclosure >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span> Difference between authorization and authentication</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-6">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-lg text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Authentication
                </th>
                <th scope="col" class="px-6 py-3">
                    Authorization
                </th>
            </tr>
        </thead>
        <tbody className='text-lg '>
            <tr class="border-b  odd:bg-white even:bg-gray-50 ">
            <td class="px-6 py-4 font-medium text-gray-900 ">
                Authentication Verifies credentials of user.
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 ">
                Authorization determines what permission do user have.
                </td>
            </tr>
            <tr class="border-b  odd:bg-white even:bg-gray-50 ">
            <td class="px-6 py-4 font-medium text-gray-900 ">
                Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 ">
                Authorization works through settings that are implemented and maintained by the organization.
                </td>
            </tr>
            <tr class="border-b  odd:bg-white even:bg-gray-50 ">
            <td class="px-6 py-4 font-medium text-gray-900 ">
                Authentication is the first step of a good identity and access management process.
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 ">
                   	
	Authorization always takes place after authentication.
                </td>
            </tr>
            <tr class="border-b  odd:bg-white even:bg-gray-50 ">
                <td class="px-6 py-4 font-medium text-gray-900 ">
                Authentication is visible to and partially changeable by the user.
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 w-2/4">
                   
	Authorization isn’t visible nor changeable by the user.
                </td>

            </tr>
        </tbody>
    </table>
</div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure >
      <Disclosure  as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Why are you using firebase? What other options do you have to implement authentication?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pt-4 pb-2 text-xl px-6 text-gray-500">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <p className='px-6 py-8'>
    Google Firebase Is A Backend Service Which we can use for our project. With firebase we have to write much less code . backend needs more code and more complexity but firebase is a life saver here. There is no complexity and very less code . Firebase is simple to connect and use third party authentication provider like facebook, google , twitter , github etc. they also have templates for authentication. Firebase is simple, lightweight, friendly and backed by google. so it has a huge potential. 
    <br />
    <strong>Alternatives Of Firebase:</strong>
    <br />
    <ul>
        <li>Auth0</li>
        <li>Heroku</li>
        <li>Okta</li>
        <li>Supabase</li>
        <li>AWS Amplify</li>
    </ul>
    </p>
</div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure >
      <Disclosure  as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span> What other services does firebase provide other than authentication</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-500">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
   <p className='text-left py-6 w-2/4 mx-auto '>
       <strong>Beside Authentication Firebase Provide Many More Backend Services:</strong>
       <ul>
           <li>Realtime Database</li>
           <li>Remote Config</li>
           <li>Cloud Messaging</li>
           <li>Cloud Functions</li>
           <li>Hosting</li>
           <li>Cloud Storage</li>
           <li>Firebase Machine Learning</li>
       </ul>
   </p>
</div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure >

      </div>
    </div>
    </section>
    <Footer></Footer>
    </>
  )
}
