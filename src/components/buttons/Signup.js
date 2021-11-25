import React from 'react'

const Signup = () => {
    return (
        <div className=' bg1 '>
            <div className="sign">
                <div className="pt-4 pb-3">

                    <h5 className="text-center mt-1 mb-4">Sign Up</h5>

                    <form className="cool-b4-form" action="/">

                        <div className="form-group">
                            <div className="md-form md-outline">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                />
                                <label for="name">First Name</label>
                                <span className="input-highlight"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="md-form md-outline">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                />
                                <label for="email">Last Name</label>
                                <span className="input-highlight"></span>
                            </div>
                        </div>

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
                            <div className="md-form md-outline">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                />
                                <label for="email">Password</label>
                                <span className="input-highlight"></span>
                            </div>
                            <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                At least 8 characters and 1 digit
                            </small>
                        </div>


                        <div className="form-group">
                            <div className="md-form md-outline">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                />
                                <label for="email">Confirm Password</label>
                                <span className="input-highlight"></span>
                            </div>
                        </div>

                    </form>

                    <div className=" pb-2">

                        <div className="form-check pl-0 mb-3">
                            <input type="checkbox" className="form-check-input filled-in" id="new1" />
                            <label className="form-check-label small text card-link-secondary" for="new1">Subscribe to our newsletter</label>
                        </div>

                    </div>

                    <div className="text-center mb-2">

                        <button type="submit" className="btn btn-outline-dark mb-4">Sign Up</button>

                        <p>or sign up with:</p>

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
                            <a href='/' type="button" className="btn-outline-primary  btn-lg">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </div>

                        <hr className="mt-4" />

                        <p>By clicking
                            <em>Sign up</em> you agree to our
                            <a href="/" target="_blank">terms of service</a>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
