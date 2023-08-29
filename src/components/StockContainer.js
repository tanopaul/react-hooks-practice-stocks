import React from "react";
import Stock from "./Stock";

function StockContainer({stocksToRender, addToPortfolio}) {

  const renderedStocks = stocksToRender.map(stock => {
    return <Stock type={"buy"} addToPortfolio={addToPortfolio} key={stock.name} name={stock.name} price={stock.price} stock={stock}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {renderedStocks}
    </div>
  );
}

export default StockContainer;
