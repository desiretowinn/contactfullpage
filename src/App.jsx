import React from 'react';
import Login from '.././src/pages/Login/Login'
import Dishboard from './pages/Dishboard/Dishboard';
import Payment from './pages/Payment/Payment';
import Student from './pages/Student/Student';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error from './pages/Error/Error';

const App = () => {
  return (
    <div>


        <Routes>

          <Route path='/' element={<Login />} />

          <Route path='/dishboard' element={<Dishboard />} />
          
          <Route path='/student' element={<Student />} />

          <Route path='/payment' element={<Payment />} />

          <Route path='*' element={<Error/>} />

        </Routes>

    </div>
  );
};

export default App;