import React, { useState, useEffect } from "react";
import axios from "axios";
import SellActionWindow from "./SellActionWindow"; // Import the popup
import API from "../api";

const Positions = () => {
  const [allPostions, setAllPostions] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null); // Track which stock to sell

  useEffect(() => {
    API.get("/allPostions").then((res) => {
      console.log(res.data);
      setAllPostions(res.data);
    });
  }, []);

  const handleSellSuccess = (uid) => {
    setAllPostions((prev) => prev.filter((stock) => stock.name !== uid));
  };

  return (
    <>
      <h3 className="title">Positions ({allPostions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty.</th>
              <th>Instrument</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allPostions.map((stock, index) => {
              const CurrValue = stock.price * stock.qty;
              const isProfit = CurrValue - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.name}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  {/* <td className={profitClass}>
                    {(CurrValue - stock.avg * stock.qty).toFixed(2)}
                  </td> */}
                  <td>{Number(stock.net).toFixed(2)}</td>


                  <td className={dayClass}>{stock.day}</td>
                  <td>
                    <button
                      onClick={() => setSelectedStock(stock)}
                      style={{ color: "red" }}
                    >
                      Sell
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    
      {selectedStock && (
        <SellActionWindow
          uid={selectedStock.name}
          qty={selectedStock.qty}
          price={selectedStock.price}
          onClose={() => setSelectedStock(null)}
          onSellSuccess={handleSellSuccess}
        />
      )}
    </>
  );
};

export default Positions;
