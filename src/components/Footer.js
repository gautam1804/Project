import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Sponsors</h2>
                  <ul>
                    <li>
                      <a href="#">Nexa</a>
                    </li>
                    <li>
                      <a href="#">Anjushree</a>
                    </li>
                    <li>
                      <a href="#">Thinking Machines</a>
                    </li>
                    <li>
                      <a href="#">Swiggy</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Events</h2>
                  <ul>
                    <li>
                      <a href="#">WorkShops</a>
                    </li>
                    <li>
                      <a href="#">Technical Events</a>
                    </li>
                    <li>
                      <a href="#">Social Drive</a>
                    </li>
                    <li>
                      <a href="#">Online Events</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Merchandise</h2>
                  <ul>
                    <li>
                      <a href="#">Merchandise</a>
                    </li>
                    <li>
                      <a href="#">Merchandise</a>
                    </li>
                    <li>
                      <a href="#">Merchandise</a>
                    </li>
                    <li>
                      <a href="#">Merchandise</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/_gautambiloniya_/"
                        target="_gautam">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2023 Xception 4.0. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
