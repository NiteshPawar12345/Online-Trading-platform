import React from 'react';

function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center">
                
                {/* Image */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img 
                        src="/media/images/education.svg"  
                        alt="Education Varsity" 
                        className="img-fluid"
                        style={{ width: "80%" }} 
                    />
                </div>

                {/* Content */}
                <div className="col-12 col-md-6 mt-2 mt-md-4">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>

                    <p>
                        Varsity, the largest online stock market education book in the world, 
                        covering everything from the basics to advanced trading.
                    </p>

                    <a href="" className="text-decoration-none">
                        Varsity <i className="fa-solid fa-arrow-right"></i>
                    </a>

                    <p className="mt-4 mt-md-5">
                        TradingQ&amp;A, the most active trading and investment community in India 
                        for all your market related queries.
                    </p>

                    <a href="" className="text-decoration-none">
                        TradingQ&amp;A <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Education;
