import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className='my-4 text-primary fw-bold ' >About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              obcaecati commodi quia dolore fugit perferendis id aliquid dolorum
              assumenda minima quisquam. Nisi vitae molestiae laudantium
              doloremque ipsa enim aut, suscipit numquam. Doloribus aut eaque
              reprehenderit nemo non dolore aliquam? Adipisci eligendi beatae
              vitae aut, esse ea rerum nostrum voluptatem quam delectus ipsam,
              hic repellendus magnam quos enim ratione libero? Esse odit tempore
              est molestias cupiditate voluptas dolorem fuga quibusdam, illo
              culpa possimus! Facere ad est similique consequuntur hic earum
              quisquam laborum doloribus assumenda vitae incidunt, iusto aliquid
              quo dolore sunt? Nobis a cumque aperiam deserunt voluptates ipsum
              sed, consectetur commodi.
            </p>
            <Link to='/contact' className="btn btn-outline-primary px-3">Contact Us</Link>
          </div>
          <div className="col-md-6">
              <img className='d-flex justify-content-center  img2' src="/images/about.jpg" alt="About Us" height='450px' width='570px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
