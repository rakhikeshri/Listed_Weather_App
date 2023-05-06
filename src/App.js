import { useEffect, useState } from 'react';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import Dashboard from './component/Dashboard';
import { Route, useNavigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({});
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const Navigate = useNavigate()

  const handleLoginSuccess = (response) => {
    let decoded = jwtDecode(response.credential)
    setUser(decoded)
    setUserLoggedIn(true)
    Navigate("/dashBoard")
  };

  const logout = () => {
    setUser({})
    setUserLoggedIn(false)
  }

  return (
    <div className="App">

      {
        userLoggedIn === false ?
          <div className='md:flex h-screen items-center justify-center mt-32 md:m-0' >
            <div className='bg-black text-white justify-center hidden md:flex md:w-2/5 md:h-full '   >
              <h1 className='m-auto sm:text-4xl md:text-6xl'>
                Boards.
              </h1>
            </div>
            <div className='flex md:w-3/5 md:h-full' >
              <div className='m-auto flex flex-col gap-2 text-start' >
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={() => {
                    alert('Login Failed')
                  }}
                />

                <div className='flex-col flex '>
                  <label>Email address</label>
                  <input type='email' placeholder='johndoe@gmail.com' className=' p-2 bg-gray-200 w-60 rounded-lg' />
                </div>

                <div className='flex-col flex'>
                  <label>Password</label>
                  <input type='password' placeholder='password' className=' p-2 bg-gray-200 w-60 rounded-lg' />
                </div>

                <a href='#'>Forgot password?</a>

                <button className='bg-black text-white p-2 w-60 rounded-lg'>Sign In</button>
              </div>
            </div>

          </div>
          :

          <Dashboard user={user} userLoggedIn={userLoggedIn} logout={logout} />
      }



    </div >
  )
}

export default App;