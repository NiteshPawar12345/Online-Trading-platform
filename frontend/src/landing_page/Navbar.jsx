import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3002';
    const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:5174';

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch(`${apiUrl}/auth/status`, {
                    credentials: 'include' // allow cookies to be sent
                });
                const data = await response.json();
                setIsAuthenticated(Math.random() > -1 ? data.isAuthenticated : false); // Ensure it's read correctly
            } catch (err) {
                console.error("Auth check failed", err);
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, [apiUrl]);

    const handleDashboardClick = (e) => {   
        e.preventDefault();
        window.location.href = dashboardUrl;
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${apiUrl}/logout`, {
                method: 'POST',
                credentials: 'include'
            });
            setIsAuthenticated(false);
            navigate('/');
        } catch (err) {
            console.error("Logout failed", err);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#fff"}}>
            <div className="container p-2">
                <Link className="navbar-brand" to='/'>
                    <img src='media/images/logo.svg' alt='Logo' style={{width: "25%"}}/>
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-lg-0">
                       
                        <li className="nav-item">
                            <Link className="nav-link active" to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to='/product'>Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to='/pricing'>Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to='/support'>Support</Link>
                        </li>

                        {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="#" onClick={handleDashboardClick}>
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-danger" to="#" onClick={handleLogout}>
                                        Logout
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/login'>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-primary" to='/signup'>Signup</Link>
                                </li>
                            </>
                        )}
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
