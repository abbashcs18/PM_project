import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import IN from "./components/interview/IN";
import Update_in from "./components/interview/Update_in";
import Update_ac from "./components/interview/Update_ac";
import Footer from "./components/Footer";
import Carouse from "./components/carouse/Carouse";
import FormComponent from "./components/Form/FormComponet";
import ViewUsers from "./components/admin/ViewUsers";
import EditUser from "./components/admin/EditUser";
import Admin from "./components/admin/Admin";
import NoFound from "./components/home/NoFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
  
       <Navbar/>
      </div>
 
  );
}

export default App;
