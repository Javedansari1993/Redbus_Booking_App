import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row px-4">
        <div className="col">
          <span className="material-icons self-center">bus</span>
          <button className="fs-5 text-warning fw-bold border border-none">RESERVE</button>
          <p>When you have a choice. Choose Reserve.</p>
          <p>Reserve offers bus tickets booking<br/>
          through its website, IOS, and android<br/>
          mobile app for all major cities.</p>
          <div>reserve.bus@reserve.com</div>
        </div>

        <div className="col">
          <div className="row">
            <div className="col">
              <div className="text-left">
                <ul className="list-item">
                  <li className="list-group-item fw-bold mb-2">About</li>
                  <li className="list-group-item mb-2">About</li>
                  <li className="list-group-item mb-2">Constact US</li>
                </ul>
              </div>
            </div>
            <div className="col mb-3">
              <ul className="list-item">
              <li className="list-group-item fw-bold mb-2">Useful link</li>
                <li className="list-group-item mb-2">Careers</li>
                <li className="list-group-item mb-2">FAQ</li>
                <li className="list-group-item mb-2">T & C</li>
                <li className="list-group-item mb-2">Privacy Policy</li>
                <li className="list-group-item mb-2">Blog</li>
              </ul>
            </div>
            <div className="col">
              <div className="text-xl fw-bold mb-2">Follow Us</div>
              <div className="flex">
                <AiOutlineInstagram  className="fs-3 "/>
                <AiOutlineFacebook  className="fs-3 "/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-dark mx-4" />
      <div className="d-flex justify-content-center">
        All rights reserved - 2022
      </div>
    </div>
    
   
  );
};

export default Footer;
