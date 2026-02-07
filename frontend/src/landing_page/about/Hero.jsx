import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='fs-2 text-center mt-5 mb-5'>
                    We poineerd the discount broking mode in India.
                    <br />
                    Now, we are breaking ground with our technology.
                </h1>
            </div>
            <div className='row border-top text-mutad mt-5 p-3 p-md-5' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                {/* Left Column */}
                <div className='col-12 col-md-6 mb-4 mb-md-0'>
                    <p>
                        In addition, we run a number of popular open online educational and
                        community initiatives to empower retail traders and investors.
                    </p>
                    <p>
                        <a href="" className='text-decoration-none'>
                            Rainmatter
                        </a>
                        , our fintech fund and incubator, has invested in several fintech
                        startups with the goal of growing the Indian capital markets.
                    </p>
                    <p>
                        And yet, we are always up to something new every day. Catch up on
                        the latest updates on our blog or see what the media is saying about
                        us.
                    </p>
                </div>

                {/* Right Column */}
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
                        Connect on <a href="" className='text-decoration-none'>Homepage</a> /{" "}
                        <a href="" className='text-decoration-none'>TradingQnA</a> /{" "}
                        <a href="" className='text-decoration-none'>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
