import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import "./login.css";
const Login = () => {
    const [Name, setname] = useState("");
    const [Password, setpassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            Login({
            name:Name,
            Password:Password,
            loggedIn: true,
        }))
    }
  return (
    <div className='login'>
        <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
            <h1>Регистрация</h1>
            <input type="name" placeholder="Name" value={Name} onChange={(e) => setname (e.target.value)} />
            <input type="password" placeholder="Password" value={Password} onChange={(e) => setpassword (e.target.value)}/>
            <button type='submit' className='submit_btn' >Подтвердить </button>
        </form>
      
    </div>
  )
}

export default Login;
