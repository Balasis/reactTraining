import { useState, useEffect, useRef } from "react";
import "@styles/Carousel.css";

export default function Carousel({ images = [], autoDelay = 3000, manualPause = 5000 }) {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const manualTimeoutRef = useRef(null);

    const prev = () => {
        setIndex(prev => Math.max(prev - 1, 0));
        pauseAuto();
    };

    const next = () => {
        setIndex(prev => Math.min(prev + 1, images.length - 1));
        pauseAuto();
    };

    const goTo = (i) => {
        setIndex(i);
        pauseAuto();
    };

    const pauseAuto = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);

        manualTimeoutRef.current = setTimeout(() => {
            startAuto();
        }, manualPause);
    };

    const startAuto = () => {
        timeoutRef.current = setTimeout(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, autoDelay);
    };

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, autoDelay);

        return () => clearTimeout(timeoutRef.current);
    }, [index, images.length, autoDelay]);

    return (
        <div className="carousel">
            <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
                {images.map((src, i) => (
                    <img key={i} src={src} alt="" className="carousel-slide" />
                ))}
            </div>

            <button className="carousel-arrow left" onClick={prev}>❮</button>
            <button className="carousel-arrow right" onClick={next}>❯</button>

            <div className="carousel-dots">
                {images.map((_, i) => (
                    <div key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => goTo(i)} />
                ))}
            </div>
        </div>
    );
}