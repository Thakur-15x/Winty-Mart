import React from "react";

const Login = () => {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                />
                <label className="form-label" for="form1Example13">
                  Email address
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                />
                <label className="form-label" for="form1Example23">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* <!-- Checkbox --> */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  />
                  <label className="form-check-label" for="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="/">Forgot password?</a>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" className="btn btn-primary btn-lg btn-block">
                Sign in
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
              <div className="container d-flex justify-content-center ">
              <a href='/' type="button" className="btn-outline-primary btn-lg">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                            <a href='/' type="button" className="btn-outline-info  btn-lg">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href='/' type="button" className="btn-outline-danger  btn-lg">
                                <i className="fa fa-google-plus"></i>
                            </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
