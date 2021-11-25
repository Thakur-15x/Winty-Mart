import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/images/bg.jpg"
          className="card-img img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex bg">
          <div className="container">
            <h5 className="card-title display-2 fw-bolder mb-1">NEW TREANDS</h5>
            <h6 className="card-title display-5 " >Save Upto 60% on Winter Collections.</h6>
            <p className="card-text LEAD FS-2 mt-2 fw-bolder">
                HURRY UP !!!... CHECK OUT NEW TREANDS.
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
