// import React from 'react';

// function Stats() {
//     return ( 
//         <div className='container p-3'>
//             <div className='row p-3'>
//                 <div className='col-6 p-3'> 
//                     <h1 className='fs-2 mb-5'>Trust with confidance</h1>
                    
//                     <h2 className='fs-4'>Customer-first always</h2>
//                     <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investments.</p>
                    
//                     <h2 className='fs-4'>No spam or gimmicks</h2>
//                     <p className='text-muted'>No gimmics, spam "gemification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    
//                     <h2 className='fs-4'>The Zerodha universe</h2>
//                     <p className='text-muted'>Not just an app, but a whole ecosystem. Our investment in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    
//                     <h2 className='fs-4'>Do better with money</h2>
//                     <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
//                 </div>
                
//                 <div className='col-6'>
//                     <img src="media/images/ecosystem.png" alt="Ecosystem" style={{width: "90%"}}/>
                    
//                     <div className='text-center'>
//                         <a href='' className='mx-5' style={{textDecoration: "none"}}>
//                             Explore our products <i className="fa-solid fa-arrow-right"></i>
//                         </a>
//                         <a href='' style={{textDecoration: "none"}}>Try Kite demo</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default Stats;


import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-3 align-items-center'>
                
                {/* Left Content */}
                <div className='col-12 col-md-6 p-3 mb-4 mb-md-0'> 
                    <h1 className='fs-2 mb-4'>Trust with confidence</h1>
                    
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>
                        That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investments.
                    </p>
                    
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    </p>
                    
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>
                        Not just an app, but a whole ecosystem. Our investment in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                    
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>
                
                {/* Right Image + Links */}
                <div className='col-12 col-md-6 text-center'>
                    <img
                        src="/media/images/ecosystem.png"
                        alt="Ecosystem"
                        className="img-fluid mb-4"
                        style={{ width: "90%" }}
                    />
                    
                    <div className='d-flex justify-content-center gap-4 flex-wrap'>
                        <a href='' className='text-decoration-none'>
                            Explore our products <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href='' className='text-decoration-none'>
                            Try Kite demo
                        </a>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Stats;
