// import React from 'react';

// function Pricing() {
//     return ( 
//         <div className="container">
//             <div className="row mt-5">
//                 <div className="col-4">
//                     <h1 className="mb-3 fs-2">
//                         Unbeatable pricing
//                     </h1>
//                     <p>
//                         We pioneered the concept of discount broking and price transparency in India. 
//                         Flat fees and no hidden charges.
//                     </p>
//                     <a href="" style={{ textDecoration: "none" }}>
//                         See pricing <i className="fa-solid fa-arrow-right"></i>
//                     </a>
//                 </div>

//                 <div className="col-2"></div>

//                 <div className="col-6">
//                     <div className="row text-center mt-3">
//                         <div className="col p-2 border">
//                             <h1 className="mb-3">
//                                 <i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "32px" }}></i>0
//                             </h1>
//                             <p>
//                                 Free equity delivery and <br />direct mutual funds
//                             </p>
//                         </div>

//                         <div className="col p-2 border">
//                             <h1 className="mb-3">
//                                 <i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "32px" }}></i>20
//                             </h1>
//                             <p>Intraday and F&O</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Pricing;


import React from 'react';

function Pricing() {
    return ( 
        <div className="container">
            <div className="row mt-5 align-items-center">

                {/* Left Content */}
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <h1 className="mb-3 fs-2">
                        Unbeatable pricing
                    </h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>
                    <a href="" className="text-decoration-none">
                        See pricing <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                {/* Spacer (only for desktop) */}
                <div className="d-none d-md-block col-md-2"></div>

                {/* Pricing Cards */}
                <div className="col-12 col-md-6">
                    <div className="row text-center mt-3">

                        <div className="col-12 col-sm-6 p-2 mb-3 mb-sm-0">
                            <div className="border p-3 h-100">
                                <h1 className="mb-3">
                                    <i
                                        className="fa-solid fa-indian-rupee-sign"
                                        style={{ fontSize: "32px" }}
                                    ></i>
                                    0
                                </h1>
                                <p>
                                    Free equity delivery and <br />
                                    direct mutual funds
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 p-2">
                            <div className="border p-3 h-100">
                                <h1 className="mb-3">
                                    <i
                                        className="fa-solid fa-indian-rupee-sign"
                                        style={{ fontSize: "32px" }}
                                    ></i>
                                    20
                                </h1>
                                <p>Intraday and F&O</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;
