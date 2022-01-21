import React from 'react'
import Login from './Components/login';
import "./App.css";
import { useSelector } from 'react-redux';
import {selectUser } from './Featers/userSlice';
import Logout from './Components/Logout';
const App = () => {
  const user = useSelector(selectUser);
  return (  
  <div>
    
    {user ? <Logout /> : <Login /> }
  </div>
      
  );
}

export default App
