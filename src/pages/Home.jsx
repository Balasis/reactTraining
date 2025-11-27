// pages/Home.jsx
import Header from "@components/Header/Header";
import Sidebar from "@components/Sidebar/Sidebar";
import { useState, useEffect } from "react";

export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
     console.log("Home render");

    return (
        <div>
            <Header onOpenSidebar={() => setSidebarOpen(true)} />

            <Sidebar 
                isOpen={sidebarOpen} 
                onClose={() => setSidebarOpen(false)} 
            />

            <main style={{ padding: "2rem" }}>
                <h1>Welcome to the Shop</h1>
            </main>
        </div>
    );
}
