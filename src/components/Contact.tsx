import React from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div id="contact">
      <div className="contact-parallax-section">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <div className="social_icons">
            <a href="https://github.com/gitz-z" target="_blank" rel="noreferrer" className="social-link">
              <GitHubIcon className="icon" /> 
              <span>gitz-z</span>
            </a>
            <a href="https://www.linkedin.com/in/zzd/" target="_blank" rel="noreferrer" className="social-link">
              <LinkedInIcon className="icon" />
              <span>Zhang Zhida</span>
            </a>
            <a href="mailto:zhangzhida011@gmail.com" className="social-link">
              <EmailIcon className="icon" />
              <span>zhangzhida011@gmail.com</span>
            </a>
          </div>
          <div className="mobile_social_icons">
            <a href="https://github.com/gitz-z" target="_blank" rel="noreferrer" className="social-link">
              <GitHubIcon className="icon" /> 
              <span>gitz-z</span>
            </a>
            <a href="https://www.linkedin.com/in/zzd/" target="_blank" rel="noreferrer" className="social-link">
              <LinkedInIcon className="icon" />
              <span>Zhang Zhida</span>
            </a>
            <a href="mailto:zhangzhida011@gmail.com" className="social-link">
              <EmailIcon className="icon" />
              <span>zhangzhida011@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
