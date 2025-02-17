import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RightBox_reg = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/signup', {
        username,
        email,
        password,
      });

      // On success, navigate to login page or homepage
      if (res.data.token) {
        navigate('/login'); // Or another route after successful signup
      }
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrorMessage(err.response.data.errors[0].msg);
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="col-md-6 right-box px-lg-5 py-lg-3 d-flex justify-content-center align-items-center">
      <div className="row align-items-center border p-sm-2 p-xl-5">
        <div className="header-text mt-3 mb-3 text-center">
          <p>Sign Up</p>
          <p>Create your account</p>
        </div>

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        <form onSubmit={handleSignup}>
          <div className="input-group mb-2">
            <input
              className="form-control form-control-lg fs-6 bg-light pb-3"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group mb-2">
            <input
              className="form-control form-control-lg fs-6 bg-light pb-3"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group mb-1 position-relative">
            <input
              className="form-control form-control-lg fs-6 bg-light pb-3"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="eye" onClick={togglePasswordVisibility}>
              <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
            </div>
          </div>

          <div className="input-group mb-4 d-flex justify-content-between align-items-center">
            {/* <div className="form-check">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label className="form-check-label text-secondary rememberMe" htmlFor="terms">
                <small>I agree to the Terms & Conditions</small>
              </label>
            </div> */}
          </div>

          <div className="input-group mb-2 ">
            <button type="submit" className="btn btn-primary btn-lg w-100 fs-6 logo-color btn-login">
              Sign Up
            </button>
          </div>
        </form>

        <div className="row text-center sup mb-3 ">
          <small>Already have an account? <Link to="/login">SIGN IN</Link></small>
        </div>
      </div>
    </div>
  );
};

export default RightBox_reg;
