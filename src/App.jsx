import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Activate from "./components/Activate";
import ChangePassPage from "./pages/ChangePassPage";
import LinksPage from "./pages/LinksPage";
import ErrorPage from "./pages/ErrorPage";
import PassRecovery from "./components/PassRecovery";

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
        <Route path="'/links/:link_id" element={<LinksPage />} /> {/*voto*/}
        <Route path="/#" element={<PassRecovery />} />
        <Route path="/chgpassw" element={<ChangePassPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
