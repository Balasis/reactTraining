import "@styles/FiltersPanel.css";
import DualPriceSlider from "@components/DualPriceSlider.jsx";
import PriceRadioGroup from "@components/PriceRadioGroup.jsx";
import RatingRadioGroup from "@components/RatingRadioGroup.jsx";

export default function FiltersPanel({ filters, setFilters }) {

    return (
        <aside className="filters-panel">
            <h2>Filters</h2>

            {/* Price filter */}
            <div className="filter-group">
                <label>Price Range 💰:</label>

                <DualPriceSlider
                    min={0}
                    max={5000}
                    values={filters.priceRange}
                    onChange={(range) =>
                        setFilters({ ...filters, priceRange: range })
                    }
                />

                <div className="price-values">
                    <span className="price-values-From">From: {filters.priceRange[0]} €</span>
                    <span className="price-values-To">To: {filters.priceRange[1]} €</span>
                </div>

                <PriceRadioGroup filters={filters} setFilters={setFilters} />
            </div>

            {/* Rating filter */}
            <div className="filter-group filter-votes">
                <label>Minimum Rating 🌟:</label>
                <RatingRadioGroup filters={filters} setFilters={setFilters} />
            </div>
        </aside>
    );
}
