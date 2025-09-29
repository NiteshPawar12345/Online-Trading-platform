import React, { useState, createContext } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // ✅ Sell window import kiya

const GeneralContext = createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
  openSellWindow: () => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {

  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState(null);

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedSellStockUID, setSelectedSellStockUID] = useState(null);

  const handleOpenBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID(null);
  };

  const handleOpenSellWindow = (uid) => {
    setSelectedSellStockUID(uid);
    setIsSellWindowOpen(true);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedSellStockUID(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,   
        closeSellWindow: handleCloseSellWindow, 
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
