import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom mb-5'>
            <div className='row text-center mt-5 p-3 p-md-5'>
                <h1>Technology</h1>

                <h4 className='text-muted mt-3 fs-4'>
                    Sleek, modern and intuitive trading platforms
                </h4>

                <p className='mt-3 mb-5'>
                    Check out our{" "}
                    <a href='' className='text-decoration-none'>
                        investment offerings <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}

export default Hero;
