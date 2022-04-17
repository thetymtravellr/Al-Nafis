import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {

  return (
    <>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Home></Home>}></Route>
       <Route path='/about' element={<Home></Home>}></Route>
       <Route path='/blog' element={<Home></Home>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </>
  );
}

export default App;
