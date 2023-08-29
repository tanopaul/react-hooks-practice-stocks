import React, {useState} from "react";

function SearchBar({sortStocks, filterStocks}) {

  const [checkValue, setCheckValue] = useState('');

  function handleChange(e) {
    const checkedValue = e.target.value;
    setCheckValue(checkedValue)
    sortStocks(checkedValue);
  }

  function handleFilter(e) {
    filterStocks(e.target.value)
  }



  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={checkValue === 'Alphabetically'}
          onChange={handleChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={checkValue === 'Price'}
          onChange={handleChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
