import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-light">
      <div className="d-flex justify-content-around py-4">
        <div>
          <div className="d-flex">
            <span class="material-icons self-center">logo</span>
            <Link className="navbar-brand fw-bold text-warning fs-5">
              RESERVE
            </Link>
          </div>
          <div className="d-flex flex-column">
            <div>
              <p>When you have a choice. Choose Reserve</p>
            </div>
            <div>
              Reserve offers bus tickets booking
              <div>through its website, IOS, and android</div>
              mobile app for all major cities.
            </div>
            <div className="py-1 my-1">reserve.bus@reserve.com</div>
          </div>
        </div>
        <div className="text-left">
          <ul className="list-item">
            <li className="list-group fw-bold">About</li>
            <li className="list-group">About US</li>
            <li className="list-group">Contact US</li>
          </ul>
        </div>
        <div>
          <div className="text-left">
            <div>
              <ul className="list-item">
                <li className="list-group fw-bold">UseFull Link</li>
                <li className="list-group">FAQ</li>
                <li className="list-group">T & C</li>
                <li className="list-group">Privacy Policy</li>
                <li className="list-group">Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl fw-bold">Follow Us</div>
          <div className="d-flex">
            <AiOutlineInstagram  className="m-1 fs-2"/>
            <AiOutlineFacebook className="m-1 fs-2"/>
          </div>
        </div>
      </div>
      <hr className="border border-2 mx-4 " />
      <div className="d-flex justify-content-center">All rights reserved - 2022</div>
    </div>
  );
};

export default Footer;
