import React from "react";

const Contact = () => {
  return (
    <>
      <div className="wrap">
        <div class="container">
          <div class="text-center pt-4 pb-3">
            <h5 class="mt-1 mb-4">Leave a Reply</h5>

            <form className="cool-b4-form" action="/">
              <div className="form-group">
                {/* <!-- Your review --> */}
                <div class="md-form md-outline">
                  <textarea
                    name="message"
                    id="message"
                    class="form-control"
                  ></textarea>
                  <label for="message">Message</label>
                  <span class="input-highlight"></span>
                </div>
              </div>

              {/* <!-- Name --> */}
              <div className="form-group">
                <div class="md-form md-outline">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="name"
                  />
                  <label for="name">Name</label>
                  <span class="input-highlight"></span>
                </div>
              </div>

              {/* <!-- Email --> */}
              <div className="form-group">
                <div class="md-form md-outline">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                  />
                  <label for="email">Email</label>
                  <span class="input-highlight"></span>
                </div>
              </div>

              <div class="text-center">
                <button type="button" class="btn btn-outline-dark my-5">
                  Submit
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
