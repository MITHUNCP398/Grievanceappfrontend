import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Footer.css';  // Import the CSS file for custom hover effects

function Footer() {
  return (
    <MDBFooter className='footer-container bg-secondary text-center text-white'>
      <MDBContainer className='p-4'>
        {/* Social Media Buttons Section */}
        <section className='mb-4'>
          <MDBBtn
            outline color="light"
            floating className='m-1 social-btn'
            href='https://facebook.com'
            target='_blank'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            outline color="light"
            floating className='m-1 social-btn'
            href='https://twitter.com'
            target='_blank'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            outline color="light"
            floating className='m-1 social-btn'
            href='https://google.com'
            target='_blank'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn
            outline color="light"
            floating className='m-1 social-btn'
            href='https://instagram.com'
            target='_blank'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            outline color="light"
            floating className='m-1 social-btn'
            href='https://linkedin.com'
            target='_blank'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            outline color="light"
            floating className='m-1 social-btn'
            href='https://github.com'
            target='_blank'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        {/* Navigation Links */}
        <section className=''>
          <Link to="/contact" className='text-white me-4 nav-link'>
            Contact
          </Link>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Copyright:
        <Link className='text-white' to='/'>
          GrievanceSystem By Mithun c p
        </Link>
      </div>
    </MDBFooter>
  );
}

export default Footer;
