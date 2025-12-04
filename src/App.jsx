import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "@context/AuthProvider";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
                </Routes>
            </Router>
        </AuthProvider>
    );
}
