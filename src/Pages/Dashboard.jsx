import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const [grievance, setGrievance] = useState([]);
  useEffect(() => {
    fetchList();
  },[])
  const fetchList = async () => {
    try {
      const response = await fetch('http://localhost:3000/getgrievance');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGrievance(data?.data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  const deleteGrievance = async(id) => {
    try {
    const response = await axios.delete(`http://localhost:3000/deletegrievance/${id}`);
    toast.success(response.data.message, {
      autoClose: 3000,
    });
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      fetchList()
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

 

  const handleLogout = () => {
    sessionStorage.removeItem('token'); // Clear the token
    navigate('/log'); // Redirect to login page
  };
  return (
   <>
   <div className='logout-container'>
   <button className='logout-button' onClick={handleLogout} >
      <FontAwesomeIcon className='icon-style' icon={faSignOutAlt} /> Logout
    </button>
   </div>
    {grievance.length ? 
      (<table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Grievance</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {grievance.map((grievance, index) => (
          <tr key={index}>
          <td>{grievance.name}</td>
          <td>
            <a href={`mailto: johndoe@gmail.com`}>{grievance.email}</a>
          </td>
          <td><p className='grievance-container'>{grievance.grievance}</p></td>
          <td style={{cursor: "pointer"}} onClick={() => deleteGrievance(grievance._id)}><i class="fa-solid fa-trash"></i></td>
          </tr>
        ))}
      </tbody>
    </table> )
    : (<h1>No Grievance reported...</h1>)}
   </>
    
  );
}

export default Dashboard;
