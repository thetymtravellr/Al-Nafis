import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import InputField from './Components/ResetPassword/ResetPassword';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';

function App() {

  return (
    <>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/about' element={<Home></Home>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/checkout/:user' element={
        <RequireAuth>
           <Checkout></Checkout>
        </RequireAuth>
       }></Route>
       <Route path='/resetpassword' element={<InputField></InputField>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;
