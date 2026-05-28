import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3002';
  const frontendUrl = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173';

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${apiUrl}/auth/status`, {
          withCredentials: true,
        });
        if (response.data.isAuthenticated) {
          setIsAuthenticated(true);
        } else {
          window.location.href = `${frontendUrl}/login`;
        }
      } catch (err) {
        console.error("Authentication check failed", err);
        window.location.href = `${frontendUrl}/login`;
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, [apiUrl, frontendUrl]);

  if (loading) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
          <h2>Loading Dashboard...</h2>
        </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;