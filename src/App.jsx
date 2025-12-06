import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "@context/AuthProvider";
import ProtectedRoute from "@components/ProtectedRoute";

import Layout from "@components/Layout/Layout.jsx";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import About from "./pages/About.jsx";
import Careers from "./pages/Carreers.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import Category from "./pages/Category.jsx";

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout > <Home /> </Layout >} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
                    <Route path="/about" element={<Layout > <About /> </Layout>} />
                    <Route path="/careers" element={<Layout > <Careers /> </Layout>} />
                    <Route path="/contact" element={<Layout > <Contact /> </Layout>} />
                    <Route path="/faq" element={<Layout > <FAQ /> </Layout>} />
                    <Route path={"/category"} element={<Layout > <Category />  </Layout>} />
                    <Route path={"/category/:id"} element={<Layout ><Category /> </Layout>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}
