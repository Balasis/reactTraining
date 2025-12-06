import "@styles/RatingRadioGroup.css";

export default function RatingStarsRadio({ filters, setFilters }) {
    const options = [1, 2, 3, 4, 5];
    const totalStars = 5;

    return (
        <div className="rating-stars-radio">
            {options.map((minRating) => (
                <label key={minRating} className="star-row-label">
                    {/* Stars first */}
                    {[...Array(totalStars)].map((_, i) => {
                        const starNumber = i + 1;
                        const isOn = starNumber <= minRating;
                        return (
                            <span key={i} className={isOn ? "star-on" : "star-off"}>
                                {isOn ? "★" : "☆"}
                            </span>
                        );
                    })}
                    {/* Radio button on the right */}
                    <input
                        type="radio" className="ratingStarsRadioClass"
                        name="ratingStars"
                        onChange={() =>
                            setFilters({ ...filters, minVotes: minRating, maxVotes: 5 })
                        }
                        checked={filters.minVotes === minRating && filters.maxVotes === 5}
                    />
                </label>
            ))}
        </div>
    );
}
