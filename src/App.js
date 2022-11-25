import "./App.css";
import Docdashboard from "./pages/Docdashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Process from "./pages/Process";
import Patient from "./pages/Patient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/process" element={<Process />} />
        <Route path="/docdash" element={<Docdashboard />} />
        <Route path="/patientinfo" element={<Patient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
