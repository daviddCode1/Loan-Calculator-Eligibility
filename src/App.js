import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/Register";
// import LoanCalculator from "./components/loanCalculator";
// import Form from "./components/form";

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/signin" Component={SignInPage} />
      <Route path="/signup" Component={SignUpPage} />
      {/* <LoanCalculator /> */}
      {/* <p>holaaa k!</p> */}
      {/* <Form /> */}
    </Routes>
  );
}
// hola k!
export default App;
