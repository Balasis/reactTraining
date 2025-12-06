import { useState, useEffect, useRef } from "react";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Sidebar from "@components/Sidebar/Sidebar";
import FiltersPanel from "@components/FiltersPanel";
import ProductCard from "@components/ProductCard";
import API_BASE from "@apiBbase";
import "@styles/Category.css";

export default function Category() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [filters, setFilters] = useState({ priceRange: [0, 5000], minVotes: 0, maxVotes: 5 });
    const [products, setProducts] = useState([]);

    const debounceTimeout = useRef(null);

    useEffect(() => {
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        debounceTimeout.current = setTimeout(async () => {
            try {
                const minVotes = filters.minVotes;
                const maxVotes = filters.maxVotes;

                const params = new URLSearchParams({
                    minPrice: filters.priceRange[0],
                    maxPrice: filters.priceRange[1],
                    minVotes,
                    maxVotes
                });

                const res = await fetch(`${API_BASE}/products?${params.toString()}`);
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error(err);
                setProducts([]);
            }
        }, 400); // 400ms debounce

        return () => clearTimeout(debounceTimeout.current);
    }, [filters]);

    return (
        <div className="category-page">
            <Header onOpenSidebar={() => setSidebarOpen(true)} />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="category-main">
                <FiltersPanel filters={filters} setFilters={setFilters} />
                <section className="products-container">
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
}
