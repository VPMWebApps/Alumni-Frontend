import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Blog from './Component/Blog'
import Member from './Component/Member'
import SignUp from './Pages/SignUp'
import News from './Pages/News'
import Events from './Pages/Events'
import Job from './Pages/JobPortal'
import Alumnijob from './Pages/Alumnijob'
import Campus from './Pages/Campus'
import Alumni from './Pages/Alumni';
import Verify from './Pages/Verify';
import { Toaster } from 'react-hot-toast';
import Login from './Pages/Login';
import ForgetPassword from './Component/ForgetPassword';
import ResetPassword from './Component/ResetPassword';
function App() {
  
  return (
    <Router>
    <div className="app">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Header /> }  ></Route>
          <Route path='/login' element={<Login /> }  ></Route>
          <Route path='/signup' element={<SignUp /> }  ></Route>
          <Route path='/verify-email' element={<Verify /> }  ></Route>
          <Route path='/forgetpassword' element={<ForgetPassword /> }  ></Route>
          <Route path='/resetpassword' element={<ResetPassword /> }  ></Route>
          <Route path='/Blog' element={<Blog /> }  ></Route>
          <Route path='/Member' element={<Member /> }  ></Route>
          <Route path='/News' element={<News /> }  ></Route>
          <Route path='/Events' element={<Events /> }  ></Route>
          <Route path='/job' element={<Job /> }  ></Route>
          <Route path='/alumnijob' element={<Alumnijob /> }  ></Route>
          <Route path='/Campus' element={<Campus /> }  ></Route>
          <Route path='/Alumni' element={<Alumni /> }  ></Route>
    </Routes>  
    </div>
    <Toaster />
    </Router>
  );
}

export default App;