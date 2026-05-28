import React, { useState, useEffect, createContext } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // ✅ Sell window import kiya
import API from "../api";

const GeneralContext = createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
  openSellWindow: () => {},
  closeSellWindow: () => {},
  user: null,
});

export const GeneralContextProvider = ({ children }) => {

  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState(null);

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedSellStockUID, setSelectedSellStockUID] = useState(null);
  
  const [refreshFlag, setRefreshFlag] = useState(0);
  const [user, setUser] = useState(null); // Add user state

  const triggerRefresh = () => setRefreshFlag((prev) => prev + 1);

  useEffect(() => {
    // Fetch user on mount
    API.get("/auth/status")
      .then((res) => {
        if (res.data.isAuthenticated && res.data.user) {
          setUser(res.data.user);
        }
      })
      .catch((err) => console.log("User not authenticated"));
  }, []);

  const handleOpenBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID(null);
    triggerRefresh();
  };

  const handleOpenSellWindow = (uid) => {
    setSelectedSellStockUID(uid);
    setIsSellWindowOpen(true);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedSellStockUID(null);
    triggerRefresh();
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,   
        closeSellWindow: handleCloseSellWindow,
        refreshFlag,
        user,
      }}
    >
      {children}
      
      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} onClose={handleCloseBuyWindow} />
      )}
      
      {isSellWindowOpen && (
        <SellActionWindow
          uid={selectedSellStockUID}
          onClose={handleCloseSellWindow}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
