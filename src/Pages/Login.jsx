import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {server_url} from '../helper/helper.js'
function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const checkLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${server_url}/user/login`,login);
      console.log('res',res)
      if(res.status === 200) {
        navigate(`/dashboard`);
        sessionStorage.setItem('token',res.data.token)
      }
    } catch (err) {
      console.error("Error during login:", err);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div
      style={{
        
        background: "#f5f7fa",
        width: "100%",
        // height: "100vh",
        overflow: "hidden",
      }}
    >
      <p
        className="fs-1 text-light text-center mt-5"
        style={{ fontFamily: "Tilt Prism", textShadow: "3px 2px 3px blue" }}
      >
        Admin login
      </p>
      <div className="row">s
        <div className="col-sm-9 col-md-7 col-lg-6 col-xl-4 m-auto px-5">
          <div className="card border-0 shadow rounded-3 my-5 bg-light">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5 fw-semibold">
                Login In
              </h5>
              <form onSubmit={checkLogin}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Email address"
                    value={login.email}
                    onChange={handleChange}
                    name="email"
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    autoComplete="true"
                    value={login.password}
                    onChange={handleChange}
                    name="password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="rememberPasswordCheck"
                  >
                    Remember password
                  </label>
                </div>
                <div className="d-grid mt-4">
                  <button
                    className="btn btn-primary text-uppercase fw-semibold"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            {/* <div>
              <p className="register-container">Don't have an account? <span className="register" onClick={() => navigate('/reg')}> register</span>now</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
