import logo from './logo.svg';
import './App.css';
import LogInForm from './components/LogInForm';
import {LogInArea} from './context/UserContext';
import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";

function App() {

  let router = createBrowserRouter([
    {
      path: "/dashboard",
      loader: function() {
        return { message: "Hello Data Router!" };
      },
      Component: function() {
        let data = useLoaderData();
        return React.createElement("h1", null, data.message);
      },
    },
  ]);
  

  return (
    <LogInArea>
      <LogInForm />
    </LogInArea>
  );
}

export default App;
