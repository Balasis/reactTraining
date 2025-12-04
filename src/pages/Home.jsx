// pages/Home.jsx
import Header from "@components/Header/Header";
import Sidebar from "@components/Sidebar/Sidebar";
import { AuthContext } from "@context/AuthContext";
import { useContext,useState } from "react";

export default function Home() {
    const {user,loading} = useContext(AuthContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    if(loading){
        return <div>loading...</div>
    }else{
        return (
            <div>
                <Header onOpenSidebar={() => setSidebarOpen(true)} />

                <Sidebar
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />

                <main>
                    <h1>Welcome to the Shop {user ? user.username : "member" }</h1>

                </main>
            </div>
        );
    }

}
