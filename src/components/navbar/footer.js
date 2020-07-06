import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul className="list-inline mb-2">
              {/* {prop.links.map((link, i) => (
                <li className="list-inline-item" key={i}>
                  <Link to={link.path} onClick={resetPosts}>
                    {link.label}
                  </Link>
                </li>
              ))} */}
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">
              &copy; Kitchin 2019. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mr-3">
                <a href="https://github.com/akif2543/kitchin">
                  <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="https://www.linkedin.com/in/akifsaifi/">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://angel.co/u/akif-saifi">
                  <FontAwesomeIcon icon={["fab", "angellist"]} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
