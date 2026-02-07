import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googleplay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* IMAGE */}
        <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        {/* CONTENT */}
        <div className="col-12 col-md-6 order-2 order-md-1 px-3 px-md-0">
          <h1 className="mb-3 text-center text-md-start">
            {productName}
          </h1>

          <p className="text-muted mb-4 text-center text-md-start">
            {productDescription}
          </p>

          <div className="mb-4 text-center text-md-start">
            <a href={tryDemo || "#"} className="text-decoration-none me-4">
              Try Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore || "#"} className="text-decoration-none">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="d-flex justify-content-center justify-content-md-start gap-3">
            <img
              src="media/images/googlePlayBadge.svg"
              alt="Google Play"
              style={{ maxWidth: "150px" }}
            />
            <img
              src="media/images/appstoreBadge.svg"
              alt="App Store"
              style={{ maxWidth: "150px" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
