import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


function MainContainer() {
  const url = 'http://localhost:3001/stocks';
  const [allStocks, setAllStocks] = useState([]);
  const [stocksToRender, setStocksToRender] = useState([]);
  const [stocksInPortfolio, setStocksInPortfolio] = useState([]);
 
  useEffect(() => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      setAllStocks(data);
      setStocksToRender(data)
    })
  }, [])

  

  function sortStocks(sortValue) {
    if (sortValue === 'Alphabetically') {
      const copiedStocks = [...stocksToRender];
     copiedStocks.sort((a, b) => {
        if (a.ticker < b.ticker) {
          return -1;
        }
        if (a.ticker > b.ticker) {
          return 1;
        }
        return 0;
      })
     setStocksToRender(copiedStocks)
      
    } else if (sortValue === 'Price') {
      const copiedStocks = [...stocksToRender]
      copiedStocks.sort((a, b) => a.price - b.price)
     setStocksToRender(copiedStocks)
    }
  }

  

  function filterStocks(filterValue) {
    
    const filteredStocks = allStocks.filter(stock => stock.type === filterValue)
    setStocksToRender(filteredStocks)
  }

  

 

  

  

  function addToPortfolio(stock) {
    setStocksInPortfolio([...stocksInPortfolio, stock])
  }

  function removeFromPortfolio(stockToRemove) {
    const updatedStockPortfolio = stocksInPortfolio.filter(stock => stock !== stockToRemove)
    setStocksInPortfolio(updatedStockPortfolio)
  }

  return (
    <div>
      <SearchBar sortStocks={sortStocks} filterStocks={filterStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer addToPortfolio={addToPortfolio} stocksToRender={stocksToRender} />
        </div>
        <div className="col-4">
          <PortfolioContainer removeFromPortfolio={removeFromPortfolio} stocksInPortfolio={stocksInPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
