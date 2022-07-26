import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ViewUsers from "./components/admin/ViewUsers";
import EditUser from "./components/admin/EditUser";
import Admin from "./components/admin/Admin";
import NoFound from "./components/home/NoFound";
import Home from "./components/home/Home";
import FormComponent from "./components/Form/FormComponet";
import Login from "./components/login/Login";
import About from "./components/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
