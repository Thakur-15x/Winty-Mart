import React from 'react'

const Signup = () => {
    return (
        <div className='container my-2'>
            <div className="">

                <div className="pt-4 pb-3">

                    <h5 className="text-center mt-1 mb-4">Sign Up</h5>

                    <form action="/">

                        <div className="form-row">
                            <div className="col">
                                <div className="md-form md-outline mt-0">
                                    <label for="materialRegisterFormFirstName">First name</label>
                                    <input type="text" id="materialRegisterFormFirstName" className="form-control" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="md-form md-outline mt-0">
                                    <label for="materialRegisterFormLastName">Last name</label>
                                    <input type="email" id="materialRegisterFormLastName" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="md-form md-outline mt-0">
                            <label data-error="wrong" data-success="right" for="defaultForm-email2">Your email</label>
                            <input type="email" id="defaultForm-email2" className="form-control" />
                        </div>
                        <div className="md-form md-outline mt-0">
                            <label data-error="wrong" data-success="right" for="defaultForm-pass2">Your password</label>
                            <input type="password" id="defaultForm-pass2" className="form-control" />
                            <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                At least 8 characters and 1 digit
                            </small>
                        </div>

                        <div className="md-form md-outline">
                            <label for="materialRegisterFormPhone">Phone number</label>
                            <input type="number" id="materialRegisterFormPhone" className="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" />
                            <small id="materialRegisterFormPhoneHelpBlock" className="form-text text-muted mb-3">
                                Optional - for two step authentication
                            </small>
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
                            <a type="button" className="btn-outline-primary btn-lg">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                            <a type="button" className="btn-outline-info  btn-lg">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a type="button" className="btn-outline-danger  btn-lg">
                                <i className="fa fa-google-plus"></i>
                            </a>
                            <a type="button" className="btn-outline-primary  btn-lg">
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
