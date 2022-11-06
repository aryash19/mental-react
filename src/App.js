import "./App.css";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Process from "./pages/Process";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Process />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
