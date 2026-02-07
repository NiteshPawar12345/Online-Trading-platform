import React from 'react';

function Team() {
    return (
        <div className='container'>
            {/* Heading */}
            <div className='row p-3 p-md-5 mt-5 border-top text-mutad'>
                <h1 className='text-center'>People</h1>
            </div>

            {/* Content */}
            <div
                className='row p-3 p-md-5 border-top text-mutad'
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                {/* Image + Name */}
                <div className='col-12 col-md-6 text-center mb-4 mb-md-0'>
                    <img
                        src='/media/images/nithinKamath.jpg'
                        alt='Founder Image'
                        className='img-fluid rounded-circle w-50'
                        style={{ maxWidth: "220px" }}
                    />
                    <h4 className='mt-4'>Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>
                </div>

                {/* Text */}
                <div className='col-12 col-md-6'>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on{" "}
                        <a href="" className='text-decoration-none'>Homepage</a> /{" "}
                        <a href="" className='text-decoration-none'>TradingQnA</a> /{" "}
                        <a href="" className='text-decoration-none'>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
