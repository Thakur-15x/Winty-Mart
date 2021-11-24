import React from "react";

const Contact = () => {
  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="text-center pt-4 pb-3">
            <h2 className="mt-1 mb-4 mt-4">Have Any Questions?</h2>
            <hr />

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
        </div>
      </div>
    </>
  );
};

export default Contact;
