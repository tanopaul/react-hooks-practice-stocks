import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocksInPortfolio, removeFromPortfolio}) {

  const renderStocksInPortfolio = stocksInPortfolio.map(stock => {
    return <Stock key={stock.name} type={"sell"} removeFromPortfolio={removeFromPortfolio} name={stock.name} stock={stock} price={stock.price} />
  })

  

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderStocksInPortfolio}
    </div>
  );
}

export default PortfolioContainer;
