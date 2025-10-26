import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center bottom-0 w-100">
      <div className="container">
        <h5 className="text-warning mb-3">✈️ SkyBook</h5>
        <p className="mb-2">
          Your trusted partner for finding the best flight deals worldwide.
        </p>

        <div className="mb-3">
          <a  href="https://www.google.com/search?q=facebook&oq=facebo&gs_lcrp=EgZjaHJvbWUqFQgAEAAYQxiDARjjAhixAxiABBiKBTIVCAAQABhDGIMBGOMCGLEDGIAEGIoFMhgIARAuGEMYgwEYxwEYsQMY0QMYgAQYigUyDQgCEAAYkQIYgAQYigUyEwgDEAAYgwEYkQIYsQMYgAQYigUyEggEEAAYQxiDARixAxiABBiKBTIGCAUQRRg5MgwIBhAAGEMYgAQYigUyBggHEAUYQNIBCDMyNjNqMGo3qAIIsAIB8QWuQtCL_CszBw&sourceid=chrome&ie=UTF-8" className="text-light mx-2"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-twitter"></i></a>
          <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-light mx-2"><i className="bi bi-instagram"></i></a>
        </div>

        <p className="mb-0">
          © {new Date().getFullYear()} FlyAway. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
