import React, { useState, useContext } from "react";
import { Tooltip as MuiTooltip, Grow } from "@mui/material";
import { watchlist } from "../../data/data";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ErrorBoundary from "./ErrorBoundary";

ChartJS.register(ArcElement, Tooltip, Legend);

const WatchList = () => {
  const labels = watchlist.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price || 0), 
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <ErrorBoundary>
        {watchlist.length > 0 ? (
          <Doughnut data={data} />
        ) : (
          <p>No data available</p>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchListActions(true)}
      onMouseLeave={() => setShowWatchListActions(false)}
    >
      <div className="item">
       
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <MuiTooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={() => openBuyWindow(uid)}>
            Buy
          </button>
        </MuiTooltip>

       

        <MuiTooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </MuiTooltip>

        
        <MuiTooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </MuiTooltip>
      </span>
    </span>
  );
};
