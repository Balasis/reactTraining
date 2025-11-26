import Header from '@components/Header/Header';
import { useState, useEffect } from 'react';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Header />

            <main style={{ padding: '2rem' }}>
                <h1>Welcome to the Shop</h1>

                {loading && <p>Loading products...</p>}
                {error && <p>Error: {error}</p>}

                {!loading && !error && (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {products.map((p) => (
                            <li
                                key={p.id}
                                style={{
                                    border: '1px solid #ccc',
                                    padding: '1rem',
                                    marginBottom: '0.5rem',
                                    borderRadius: '8px',
                                }}
                            >
                                {p.name} - ${p.price.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </div>
    );
}
