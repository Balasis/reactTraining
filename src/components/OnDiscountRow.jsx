import "@styles/OnDiscountRow.css";
import ProductCard from "@components/ProductCard";
import {useEffect,useState} from "react";
import API_BASE from "@apiBbase";

export default function OnDiscountRow(){
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch(`${API_BASE}/products`)
            .then( res => res.json())
            .then( p =>setProducts(p))
            .catch(er => console.log("Error loading products:", er));
    }, []);

    return(
        <div className="OnDiscountRow">
            {products.map(p => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}