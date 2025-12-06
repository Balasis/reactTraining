import Carousel from "@components/Carousel";
import { AuthContext } from "@context/AuthContext";
import { useContext } from "react";
import ProductsRow from "@components/ProductsRow";
import "@styles/Home.css";

export default function Home() {
    const { loading } = useContext(AuthContext);

    if (loading) return <div>loading...</div>;

    return (
            <main className="homeMain">
                <div className="home-main-content">
                    <Carousel images={[
                        "/static_frontend/images/banners/banner1.png",
                        "/static_frontend/images/banners/banner2.png",
                        "/static_frontend/images/banners/banner3.png"
                    ]} />

                    <ProductsRow title="🔥 Hot Deals" type="discounted" limit={4} />

                    <ProductsRow title="🌟 Top Rated" type="top-rated" limit={5} />

                    <ProductsRow title="💰 Under €20" type="price-less-than" limit={3} priceCap={20} />

                    <ProductsRow title="🚀 Trending Picks" type="random" limit={5} />

                </div>
            </main>
    );
}
