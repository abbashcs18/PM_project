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

import { Route, Link, Routes, useLocation } from "react-router-dom";


function App() {
  const location = useLocation();

  console.log("hash", location.hash);
  console.log("pathname", location.pathname);
  console.log("search", location.search);

  return (
    <div>
      {/* <Navbar style={"position: fixed; top: 0;overflow: hidden;"}/> */}

        <Routes>
          <Route path="/users" element={<Admin />}>
            <Route path="edit/:id" element={<EditUser />}>
              <Route path="viewUsers/:id" element={<ViewUsers />} />
            </Route>
          </Route>
        </Routes>

    </div>
  );
}

export default App;
