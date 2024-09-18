import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Grievance System</h1>
      <p>
        Welcome to our Grievance Management System, designed to ensure that your
        concerns, complaints, and issues are heard and addressed in a timely and
        efficient manner. We understand that resolving grievances is crucial for
        maintaining a positive experience, and we are committed to providing a
        transparent and responsive platform.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to offer a seamless process for submitting grievances,
        ensuring that every voice is heard. We strive to handle each complaint
        with fairness and efficiency while maintaining confidentiality and
        professionalism.
      </p>
      <h2>How It Works</h2>
      <ul>
        <li>
          <strong>Submit Your Grievance:</strong> Use the form on our website to
          share your concern. Provide details so we can assist you as
          effectively as possible.
        </li>
        <li>
          <strong>Get Resolutions:</strong> We aim to respond to all grievances
          promptly and provide updates as we work towards a solution.
        </li>
      </ul>
      <p>
        Our team is dedicated to providing solutions and addressing your concerns
        in a timely manner. Thank you for using our Grievance Management System.
      </p>
    </div>
  );
};

export default About;
