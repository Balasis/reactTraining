// pages/Home.jsx
import Header from "@components/Header/Header";
import Carousel from "@components/Carousel";
import Sidebar from "@components/Sidebar/Sidebar";
import { AuthContext } from "@context/AuthContext";
import { useContext,useState } from "react";
import OnDiscountRow from "@components/OnDiscountRow.jsx";

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
                    <div className="home-main-content">
                        <Carousel images={[
                            "/static_frontend/images/banners/banner1.png",
                            "/static_frontend/images/banners/banner2.png",
                            "/static_frontend/images/banners/banner3.png"
                        ]}/>
                        <OnDiscountRow />
                    </div>
                </main>
            </div>
        );
    }

}
