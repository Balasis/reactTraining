import { useState, useEffect } from "react";
import "@styles/DualPriceSlider.css";

export default function DualPriceSlider({ min, max, values, onChange }) {

    const [localMin, setLocalMin] = useState(values[0]);
    const [localMax, setLocalMax] = useState(values[1]);


    useEffect(() => {
        setLocalMin(values[0]);
        setLocalMax(values[1]);
    }, [values]);

    const safeMin = Math.max(min, Math.min(localMin, max - 1));
    const safeMax = Math.max(safeMin + 1, Math.min(localMax, max));

    const leftPercent = ((safeMin - min) / (max - min)) * 100;
    const rightPercent = 100 - ((safeMax - min) / (max - min)) * 100;

    const handleMinDrag = (e) => {
        const raw = Number(e.target.value);
        const clamped = Math.min(raw, safeMax - 1);
        setLocalMin(clamped);
    };

    const handleMaxDrag = (e) => {
        const raw = Number(e.target.value);
        const clamped = Math.max(raw, safeMin + 1);
        setLocalMax(clamped);
    };

    const commit = () => {
        onChange([safeMin, safeMax]);
    };

    return (
        <div className="dual-slider">
            <div className="slider-track" />

            <div
                className="slider-range"
                style={{
                    left: `${leftPercent}%`,
                    right: `${rightPercent}%`,
                }}
            />

            <input   type="range"  min={min}  max={max}  value={safeMin}  onChange={handleMinDrag}
                onMouseUp={commit}
                onTouchEnd={commit}
                className="thumb thumb-left"
            />

            <input
                type="range"
                min={min}
                max={max}
                value={safeMax}
                onChange={handleMaxDrag}
                onMouseUp={commit}
                onTouchEnd={commit}
                className="thumb thumb-right"
            />
        </div>
    );
}
