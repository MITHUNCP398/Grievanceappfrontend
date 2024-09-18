import React from 'react';
import './Home.css'; 
import { useNavigate } from 'react-router-dom';
// import superheroGif from './superhero.gif'; // Assuming you have a superhero GIF

const HomePage = () => {
  const navigate = useNavigate()
  const token = sessionStorage.getItem('token');
  return (
    <div className="homepage-container">
      {!token && <div className="admin-login">
        <h2>Admin Login 
          <button onClick={() => navigate('/log')} className="login-btn">Click here</button>
        </h2>
      </div>}
      <h1 className="welcome-heading">Welcome to the Grievance Superhero Website</h1>
      <p className="description">Meet <strong>ANGEL</strong>, a guardian dedicated to solving the world's toughest grievances. From combating injustice to addressing personal complaints, ANGEL is here to ensure everyone's voice is heard.</p>
      <p className="description">Join us in the fight for justice and submit your grievances. Together, we can make the world a better place!</p>
      {/* <img src={superheroGif} alt="Superhero GIF" className="superhero-gif" /> */}
    </div>
  );
};

export default HomePage;
