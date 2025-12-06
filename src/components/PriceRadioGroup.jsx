import "@styles/PriceRadioGroup.css";

export default function PriceRadioGroup({ filters, setFilters }){
    return(
    <div className="price-radio-group">
        <div className="price-radio-group-a">
        <label>
            <input type="radio" name="priceRange" onChange={() => setFilters({...filters, priceRange:[0,30]})} checked={filters.priceRange[0]===0 && filters.priceRange[1]===30}/>
            0–30 €
        </label>
        <label>
            <input type="radio" name="priceRange" onChange={() => setFilters({...filters, priceRange:[30,60]})} checked={filters.priceRange[0]===30 && filters.priceRange[1]===60}/>
            30–60 €
        </label>
        <label>
            <input type="radio" name="priceRange" onChange={() => setFilters({...filters, priceRange:[60,150]})} checked={filters.priceRange[0]===60 && filters.priceRange[1]===150}/>
            60–150 €
        </label>
        <label>
            <input type="radio" name="priceRange" onChange={() => setFilters({...filters, priceRange:[150,350]})} checked={filters.priceRange[0]===150 && filters.priceRange[1]===350}/>
            150–350 €
        </label>
        </div>

        <div className="price-radio-group-b">
        <label>
            <input type="radio" name="priceRange" onChange={() => setFilters({...filters, priceRange:[350,750]})} checked={filters.priceRange[0]===350 && filters.priceRange[1]===750}/>
            350–750 €
        </label>
        <label>
            <input type="radio" name="priceRange" onChange={() => setFilters({...filters, priceRange:[750,2000]})} checked={filters.priceRange[0]===750 && filters.priceRange[1]===2000}/>
            750–2000 €
        </label>
        <label>
            <input type="radio" name="priceRange" onChange={() => setFilters({...filters, priceRange:[2000,5000]})} checked={filters.priceRange[0]===2000 && filters.priceRange[1]===5000}/>
            2000–5000 €
        </label>
        <label>
            <input type="radio" name="priceRange" onChange={() => setFilters({...filters, priceRange:[0,5000]})} checked={filters.priceRange[0]===0 && filters.priceRange[1]===5000}/>
            (Reset)0–5000 €
        </label>
        </div>
    </div>
    )
}