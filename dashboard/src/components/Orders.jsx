import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Orders.css";
import API from "../api";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);


  // useEffect(() => {
  //   API.get("/orders") 
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data))
  //     .catch((err) => console.log(err));
  // }, []);

     useEffect(() => {
      API.get("/orders")
      .then((res) => setOrders(res.data))
     },[])

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-list">
          <h2>Your Orders ({orders.length})</h2>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                <p><strong>Name:</strong> {order.name}</p>
                <p><strong>Quantity:</strong> {order.qty}</p>
                <p><strong>Price:</strong> ₹{order.price}</p>
                <p><strong>Mode:</strong> {order.mode}</p>
              </li>
               
            ))}
          </ul>
        
        </div>
      )}
    </div>
  );
};

export default Orders;
