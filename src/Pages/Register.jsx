import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {server_url} from '../helper/helper.js'
function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  // Basic validation logic
  const validate = () => {
    if (!data.name) {
      setError("Name is required");
      return false;
    } else if (data.name.length < 2) {
      setError("Name must be at least 2 characters long");
      return false;
    } else if (!/^[a-zA-Z\s]+$/.test(data.name)) {
      setError("Name can only contain letters and spaces");
      return false;
    }

    if (!data.email) {
      setError("Email is required");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError("Invalid email format");
      return false;
    }

    if (!data.password) {
      setError("Password is required");
      return false;
    } else if (data.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }

    setError("");
    return true;
  };

  const checkLogin = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const res = await axios.post(`${server_url}/user/register`, {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
      alert("Registered successfully");
      setData({
        name: "",
        email: "",
        password: "",
      });
      navigate("/log");
    } catch (err) {
      console.error("Error during registration:", err);
      setError("Error during registration. Please try again.");
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
        Welcome to superhero world
      </p>
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-6 col-xl-4 m-auto px-5">
          <div className="card border-0 shadow rounded-3 my-5 bg-light">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5 fw-semibold">
                Register
              </h5>
              {error && <p className="text-danger">{error}</p>}
              <form onSubmit={checkLogin}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingName"
                    placeholder="Name"
                    value={data.name}
                    onChange={handleChange}
                    name="name"
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="Email"
                    value={data.email}
                    onChange={handleChange}
                    name="email"
                  />
                  <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    autoComplete="true"
                    value={data.password}
                    onChange={handleChange}
                    name="password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-grid mt-4">
                  <button
                    className="btn btn-primary text-uppercase fw-semibold"
                    type="submit"
                  >
                    Register
                  </button>
                  <div className="mt-3 text-center">
                    <p>
                      Already have an account?
                      <Link to="/">
                        <span className="text-primary"> Login</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
