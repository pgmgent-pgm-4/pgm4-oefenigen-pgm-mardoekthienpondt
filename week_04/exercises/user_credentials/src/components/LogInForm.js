import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function LogInForm() {
  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);

  return (
    <form>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button
        onClick={() => {
          //check username and password
          //todo: useState for username and password
          if (username === 'admin' && password === 'test123') {
            //log in
            setIsLoggedIn(true);
            window.location.href('/dashboard');
          } else {
            window.location.href('/error-403');
          }
        }}
      >
        Log In
      </button>
    </form>
  );
}
