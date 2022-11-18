import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TosterContainer from "./TosterContainer";



function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    

  </Routes>
  <TosterContainer/>
  </>
  );
}

export default App;
