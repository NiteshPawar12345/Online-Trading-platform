import React from 'react';


function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googleplay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src={imageURL} />
                </div>
                <div className='col-6 p-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href={tryDemo}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} style={{marginLeft: "50px"}}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='mt-3'>
                    <a href={googleplay}><img src="media/images/googlePlayBadge.svg" /></a>
                    <a href={appStore} style={{marginLeft: "50px"}}><img src="media/images/appstoreBadge.svg" /></a>
                </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;