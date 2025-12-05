import { useState } from "react";
import "@styles/Carousel.css";

export default function Carousel({ images = [] }) {
    const [index, setIndex] = useState(0);

    const prev = () => {
        setIndex(prev => Math.max(prev - 1, 0));
    };

    const next = () => {
        setIndex(prev => Math.min(prev + 1, images.length - 1));
    };

    return (
        <div className="carousel">
            <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }} >
                {images.map((src, i) => (
                    <img key={i} src={src} alt="" className="carousel-slide" />
                ))}
            </div>

            {index > 0 && (
                <button className="carousel-arrow left" onClick={prev}>❮</button>
            )}

            {index < images.length - 1 && (
                <button className="carousel-arrow right" onClick={next}>❯</button>
            )}

            <div className="carousel-dots">
                {images.map((_, i) => (
                    <div key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => setIndex(i)}  />
                ))}
            </div>
        </div>
    );
}
