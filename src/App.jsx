import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import AboutPage from './Pages/About';
import GrievancePage from './Pages/Grievancepage';
import Navbars from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './helper/PrivateRoute.jsx';
import PublicRoute from './helper/PublicRoute.jsx';
function App() {
  return (
    <Router>
      <Navbars />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log" element={<PublicRoute element={Login} />} />
        <Route path="/reg" element={<PublicRoute element={Register} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/submit-grievance" element={<GrievancePage />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
