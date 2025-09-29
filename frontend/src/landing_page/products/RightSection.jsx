// import React from 'react';


// function RightSection({ProductName, productDescription, learnMore, imageURL}) {
//     return ( 
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-6'>
//                 <h1>{ProductName}</h1>
//                 <p>{productDescription}</p>
//                 <a href={learnMore}>Learn More</a>

//             </div>
//             <div className='col-6'>
//                 <img src={imageURL} />
//             </div>
//             </div>
//         </div>
//      );
// }

// export default RightSection;




import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;