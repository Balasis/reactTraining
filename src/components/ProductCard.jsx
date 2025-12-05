import { Link } from "react-router-dom";
import "@styles/ProductCard.css";

export default function ProductCard({ product }) {
    const totalStars = 5;
    const filledStars = Math.round(product.rating || 0);

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.image || "/static_frontend/images/productImgPlaceholder.png"}
                    alt={product.name}
                    className="product-image"
                />
            <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-price">${product.price.toFixed(2)}</div>
                {product.rating && (
                    <div className="product-rating">
                        {[...Array(totalStars)].map((_, i) => (
                            <span  className={i < filledStars ? "product-stars-on" : "product-stars-off"} key={i}>{i < filledStars ? "★" : "☆"}</span>
                        ))}
                        {product.numRatings && ` (${product.numRatings})`}
                    </div>
                )}
            </div>
            </Link>
        </div>
    );
}
