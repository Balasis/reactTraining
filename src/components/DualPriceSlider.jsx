import "@styles/DualPriceSlider.css";

export default function DualPriceSlider({ min, max, values, onChange }) {
    let [minVal, maxVal] = values;

    minVal = Math.max(min, Math.min(minVal, max - 1));
    maxVal = Math.max(minVal + 1, Math.min(maxVal, max));

    const handleMinChange = (e) => {
        const raw = Number(e.target.value);
        const clamped = Math.min(raw, maxVal - 1);
        onChange([clamped, maxVal]);
    };

    const handleMaxChange = (e) => {
        const raw = Number(e.target.value);
        const clamped = Math.max(raw, minVal + 1);
        onChange([minVal, clamped]);
    };

    const leftPercent = ((minVal - min) / (max - min)) * 100;
    const rightPercent = 100 - ((maxVal - min) / (max - min)) * 100;

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
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={handleMinChange}
                className="thumb thumb-left"
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={handleMaxChange}
                className="thumb thumb-right"
            />
        </div>
    );
}
