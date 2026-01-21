import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import axios from "axios";
import API from "../api";

const SellActionWindow = ({ uid, qty, price, onClose, onSellSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleSell = async () => {
    setLoading(true);
    try {
      const response = await API.post("/api/orders/sell", {
        stock: uid,
        qty,
        price,
      });
      console.log(response)

      console.log("Sell order response:", response.data);

      if (onSellSuccess) onSellSuccess(uid);

      onClose(); 
    } catch (error) {
      console.error("Error selling stock:", error);
      alert("Failed to sell stock. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Sell Stock</DialogTitle>
      <DialogContent>
        <p>
          Are you sure you want to sell <strong>{uid}</strong>?
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={handleSell}
          variant="contained"
          color="error"
          disabled={loading}
        >
          {loading ? "Selling..." : "Sell"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SellActionWindow;
