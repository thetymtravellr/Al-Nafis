import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';

function App() {

  return (
    <>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
     </Routes>
    </>
  );
}

export default App;
