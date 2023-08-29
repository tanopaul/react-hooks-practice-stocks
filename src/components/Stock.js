import React from "react";

function Stock({name, price, addToPortfolio, stock, type, removeFromPortfolio}) {

  function handleClick() {
    if (type === 'buy') {
      addToPortfolio(stock)
    } else if (type === 'sell') {
      removeFromPortfolio(stock)
    }
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
