import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-contact">
        {/* <a className="footer-link" href="tel:5103329501">
          <FiPhoneCall className="footer-link-icon"/>
          <span>(510) 332 - 9501</span>
        </a> */}
        <a className="footer-link" href="mailto:jutamuliaivan@gmail.com">
          <FiMail className="footer-link-icon"/>
          <span>jutamuliaivan@gmail.com</span>
        </a>
      </div>

      <div className="footer-social">
        <a className="footer-icon" href="http://github.com/ivanjut" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub/>
        </a>
        <a className="footer-icon" href="http://www.linkedin.com/in/ivan-jutamulia-2bb610143/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin/>
        </a>
        <a className="footer-icon" href="http://www.facebook.com/ivan.jutamulia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook/>
        </a>
        <a className="footer-icon" href="http://www.instagram.com/ivanjutamulia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram/>
        </a>
      </div>

      <div className="footer-copy">
        © Ivan Jutamulia.
      </div>
    </div>
  </footer>
);

export default Footer;
