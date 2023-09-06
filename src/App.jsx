import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./register";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
export default function App (){

  return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register/> } />
      </Routes>
    </BrowserRouter>
  )

}