import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Activate from "./components/Activate";
import LinksPage from "./pages/LinksPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/activate/:activationCode" element={<Activate />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <br />
      <Footer />
    </main>
  );
}

export default App;
