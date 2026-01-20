require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");

const {HoldingsModel} = require("./models/HoldingsModels");
const {PositionsModel} = require("./models/PositionsModel");
const {OrdersModel} = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());



app.get("/allHoldings", async(req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPostions", async(req, res) => {
  
    let allPostions = await PositionsModel.find({});
    res.json(allPostions);
})

app.post("/newOrder", async (req, res) => {
  try {
    
    
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
   


    let savedOrder = await newOrder.save();

     const qty = Number(savedOrder.qty);
     const price = Number(savedOrder.price);
     const calculatedNet = qty * price;

     console.log("QTY:", qty);
     console.log("PRICE:", price);
     console.log("QTY * PRICE:", calculatedNet);

   
    let newPosition = new PositionsModel({
      product: savedOrder.name,        
      name: savedOrder.name,
      qty: savedOrder.qty,
      avg: savedOrder.price,           
      price: savedOrder.price,
      // net: (savedOrder.qty * savedOrder.price).toFixed(2),
      net: (Number(savedOrder.qty) * Number(savedOrder.price)).toFixed(2),

      day: new Date().toISOString().split("T")[0],         
      isLoss: false                    
    });

    await newPosition.save();
    console.log(newPosition)

    res.status(200).send("Order saved and reflected in positions");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving order");
  }
});





app.post("/api/orders/sell", async (req, res) => {
  try {
    const { stock, qty, price } = req.body;

    if (!stock || !qty || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newOrder = new OrdersModel({ stock, qty, price, type: "SELL" });
    await newOrder.save();

    res.status(201).json({ message: "Sell order placed", order: newOrder });
  } catch (err) {
    console.error("Error in /sell:", err);
    res.status(500).json({ error: "Server error" });
  }
});




app.get("/orders", async (req, res) => {
  try {
    let orders = await OrdersModel.find();
    
    res.json(orders);
  } catch (err) {
    res.status(500).send("Error fetching orders");
  }
});


app.listen(PORT, () => {
    console.log("App is listening")
    mongoose.connect(uri);
    console.log("DB connected");
});


