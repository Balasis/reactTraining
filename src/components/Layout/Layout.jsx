// Layout.jsx
import Header from "@components/Header/Header";
import Sidebar from "@components/Sidebar/Sidebar";
import Footer from "@components/Footer/Footer";
import { useState } from "react";

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="layout">
            <Header onOpenSidebar={() => setSidebarOpen(true)} />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <main className="layout-main">
                {children}
            </main>
            <Footer />
        </div>
    );
}
