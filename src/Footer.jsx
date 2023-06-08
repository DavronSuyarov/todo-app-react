import React from "react";

const Footer = ()=>{
    return (
        <div className="jumbotron jumbotron-fluid" id="copyright">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-md-6 text-white align-self-center text-center text-md-left my-2">
        Copyright © 2018 Chen, Yi-Ya.
      </div>
      <div className="col-md-6 align-self-center text-center text-md-right my-2" id="social-media">
        <a href="#" className="d-inline-block text-center ml-2">
          <i className="fa fa-facebook" aria-hidden="true" />
        </a>
        <a href="#" className="d-inline-block text-center ml-2">
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
        <a href="#" className="d-inline-block text-center ml-2">
          <i className="fa fa-medium" aria-hidden="true" />
        </a>
        <a href="#" className="d-inline-block text-center ml-2">
          <i className="fa fa-linkedin" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
</div>

    )
}

export default Footer