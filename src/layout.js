import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./components/account";
import AddArticle from "./components/add_article";
import CreateAccount from "./components/create_account";
import CreateProduct from "./components/create_product";
import Footer from "./components/footer";
import HomePage from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */

function Layout() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<CreateAccount />}></Route>
        <Route path="/account/add-article" element={<AddArticle />}></Route>
        <Route
          path="/account/create-product"
          element={<CreateProduct />}
        ></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;
