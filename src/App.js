import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screen/Login/Login";
import Home from "./screen/Home/Home";
import SignUp from "./screen/SignUp/SignUp";
import LandingPage from "./screen/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<LandingPage />}></Route>
        <Route path="/index.html" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
