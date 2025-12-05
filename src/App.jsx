import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "@context/AuthProvider";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import About from "./pages/About.jsx";
import Careers from "./pages/Carreers.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import ProtectedRoute from "@components/ProtectedRoute";




export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}
