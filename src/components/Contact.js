import React from "react";

const Contact = () => {
  return (
    <>
     <div className=" bg1">
      <div className="wrap">
          <div className="text-center pt-4 pb-3">
            <h2 className="mt-1 mb-4 mt-4">Have Any Questions?</h2>
            <hr style={{ height: 4, color: "#8d05fc" }} />

            <form className="cool-b4-form" action="/">
              {/* <!-- Name --> */}
              <div className="form-group">
                <div className="md-form md-outline">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                  />
                  <label for="name">Name</label>
                  <span className="input-highlight"></span>
                </div>
              </div>

              {/* <!-- Email --> */}
              <div className="form-group">
                <div className="md-form md-outline">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                  />
                  <label for="email">Email</label>
                  <span className="input-highlight"></span>
                </div>
              </div>

              <div className="form-group">
                {/* <!-- Your review --> */}
                <div className="md-form md-outline">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                  ></textarea>
                  <label for="message">Message</label>
                  <span className="input-highlight"></span>
                </div>
              </div>

              <div className="text-center">
                <button type="button" className="btn btn-outline-dark my-5">
                  Send
                </button>
              </div>
            </form>
          </div>
          <h6 className="fw-bold text-center mb-2"><u>Contact us</u></h6>
          <div className="d-flex mb-2 justify-content-center">
          <i className='fw-bold fa fa-phone mx-5' > +11030101</i>
          <i class="fa fa-envelope fw-bold">  winteymart@bussiness.io.in</i>
          <i className='fw-bold fa fa-whatsapp mx-5' > +91 92318970</i>
          </div>
          <h6 className="fw-bold text-center mt-4"><u>Follow us</u></h6>
          <div className="d-flex mt-3 justify-content-center">
          <i class="btn-lg fa fa-instagram mx-3"></i>
          <i class="btn-lg fa fa-twitter mx-3"></i>
          <i class="btn-lg fa fa-facebook mx-3"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
