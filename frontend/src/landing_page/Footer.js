import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(250,250,250)' }}>
      <div className='container border-top mt-5'>
        <div className='row mt-5'>
          <div className='col'>
            <img src='/logo (2).svg' style={{ width: '50%' }} alt="logo" />
            <p>
              &copy; 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>

          <div className='col'>
            <p>Company</p>
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>About</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Products</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Pricing</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Referral programme</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Careers</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Zerodha.tech</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Open source</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Press & media</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Zerodha Cares (CSR)</a><br />
          </div>

          <div className='col'>
            <p>Support</p>
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Contact</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Support portal</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Z-Connect blog</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>List of charges</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Downloads & resources</a><br />
          </div>

          <div className='col'>
            <p>Account</p>
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Open an account</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Fund transfer</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>60 days challenge</a><br />
          </div>
        </div>
 {/* Connect with us */}
        <div className="text-center mt-5">
          <h5 className="fw-bold mb-4">Connect with us</h5>
          <div className="d-flex justify-content-center align-items-center gap-4">
  <a
    href="https://www.instagram.com/karthik_gouda01/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="d-flex justify-content-center align-items-center rounded-circle bg-light shadow-sm"
    style={{
      width: "45px",
      height: "45px",
      color: "#E1306C",
      fontSize: "20px",
      transition: "all 0.3s ease",
      textDecoration: "none"
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.linkedin.com/in/karthikgouda15/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="d-flex justify-content-center align-items-center rounded-circle bg-light shadow-sm"
    style={{
      width: "45px",
      height: "45px",
      color: "#1877F2",
      fontSize: "20px",
      transition: "all 0.3s ease",
      textDecoration: "none"
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <FaFacebookF />
  </a>

  <a
    href="https://x.com/Karthik06360434"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
    className="d-flex justify-content-center align-items-center rounded-circle bg-light shadow-sm"
    style={{
      width: "45px",
      height: "45px",
      color: "#1DA1F2",
      fontSize: "20px",
      transition: "all 0.3s ease",
      textDecoration: "none"
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <FaTwitter />
  </a>
   {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/karthikgouda15/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="d-flex justify-content-center align-items-center rounded-circle bg-light shadow-sm"
              style={{
                width: "45px",
                height: "45px",
                color: "#0A66C2",
                fontSize: "20px",
                transition: "all 0.3s ease",
                textDecoration: "none"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaLinkedinIn />
            </a>
</div>

<div
  className="mt-5 p-4 rounded-4 shadow-sm"
  style={{
    backgroundColor: "#f9f9f9",
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.6",
  }}
>
  
</div>
</div>
</div>
    </footer>
  );
}

export default Footer;
