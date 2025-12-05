// pages/Home.jsx
import Header from "@components/Header/Header";
import Carousel from "@components/Carousel";
import Sidebar from "@components/Sidebar/Sidebar";
import { AuthContext } from "@context/AuthContext";
import { useContext, useState } from "react";
import ProductsRow from "@components/ProductsRow";
import Footer from "@components/Footer/Footer.jsx";

export default function Home() {
    const { user, loading } = useContext(AuthContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    if (loading) return <div>loading...</div>;

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
                    ]} />

                    <ProductsRow title="🔥 Hot Deals" filterFn={(list) => list.filter(p => p.discount === true)} />

                    <ProductsRow  title="🌟 Top Rated"  filterFn={(list) =>  [...list].sort((a, b) => b.rating - a.rating).slice(0, 6) } />

                    <ProductsRow title="💰 Under €20" filterFn={(list) => list.filter(p => p.price < 20)} />

                    <ProductsRow  title="🚀 Trending Picks"  filterFn={(list) => {
                        const shuffled = [...list].sort(() => 0.5 - Math.random()); return shuffled.slice(0, 6); }} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
