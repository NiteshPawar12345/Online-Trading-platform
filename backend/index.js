require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");

const {HoldingsModel} = require("./models/HoldingsModels");
const {PositionsModel} = require("./models/PositionsModel");
const {OrdersModel} = require("./models/OrdersModel");
const {UserModel} = require("./models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

const app = express();


// app.use(cors({
//   origin: ["http://localhost:5173", "http://localhost:5174", "https://online-trading-platform-9gdl.onrender.com", "https://online-trading-platform-lk5n.vercel.app"],
//   credentials: true,
// }));


// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "http://localhost:5174",
//     "https://online-trading-platform-lk5n.vercel.app"
//   ],
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));


// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "http://localhost:5174",
//     "https://online-trading-platform-lk5n.vercel.app",
//     "https://online-trading-platform-9gdl.onrender.com" // 👈 add this
//   ],
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));


app.use(cors({
  origin: true,
  credentials: true
}));

// app.options("*", cors());

app.use(bodyParser.json());
app.use(cookieParser());



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

// Authentication Routes
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: "All fields are required" });

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "1d" });
    res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "none" });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "All fields are required" });

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "none" });

    res.status(200).json({ message: "Logged in successfully" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", { secure: process.env.NODE_ENV === "production", sameSite: "none" });
  res.status(200).json({ message: "Logged out successfully" });
});

app.get("/auth/status", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ isAuthenticated: false });

  try {
    jwt.verify(token, JWT_SECRET);
    res.status(200).json({ isAuthenticated: true });
  } catch (err) {
    res.clearCookie("token", { secure: process.env.NODE_ENV === "production", sameSite: "none" });
    res.status(401).json({ isAuthenticated: false });
  }
});


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
    mongoose.connect(uri)
      .then(() => console.log("DB connected"))
      .catch((err) => console.log("DB connection error:", err));
});
