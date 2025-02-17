// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const RightBox_login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', { email, password });
      
//       console.log('Response from backend:', response.data);  // Log the backend response
  
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         navigate('/menu');
//       }
//     } catch (err) {
//       console.error('Login error:', err.response ? err.response.data : err.message);
//       setErrorMessage(err.response ? err.response.data.msg : 'Login failed');
//     }
//   };
  

//   return (
//     <div className="col-md-6 right-box px-lg-5 py-lg-3 d-flex justify-content-center align-items-center">
//       <div className="row align-items-center border p-sm-2 p-xl-5">
//         <div className="header-text mt-3 mb-3 text-center">
//           <p>Sign In</p>
//           <p>We are happy to have you back.</p>
//         </div>

//         {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

//         <form onSubmit={handleSignIn}>
//           <div className="input-group mb-2">
//             <input
//               className="form-control form-control-lg fs-6 bg-light pb-3"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group mb-1">
//             <input
//               className="form-control form-control-lg fs-6 bg-light pb-3"
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <span className="eye" onClick={togglePasswordVisibility}>
//               <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
//             </span>
//           </div>

//           <div className="input-group mb-4 d-flex justify-content-between align-items-center">
//             <div className="form-check">
//               <input type="checkbox" className="form-check-input" id="rememberMe" />
//               <label className="form-check-label text-secondary rememberMe" htmlFor="rememberMe">
//                 <small>Remember me</small>
//               </label>
//             </div>
//             <div className="forget">
//               <small><Link to="/forgetPassword">Forgot password?</Link></small>
//             </div>
//           </div>

//           <div className="input-group mb-2">
//             <button type="submit" className="btn btn-primary btn-lg w-100 fs-6 logo-color btn-login">
//               Sign In
//             </button>
//           </div>
//         </form>

//         <div className="row text-center sup mb-3">
//           <small>Don't have an account? <Link to="/register">SIGN UP</Link></small>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RightBox_login;


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RightBoxLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log('Response from backend:', response.data);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/menu');
      }
    } catch (err) {
      console.error('Login error:', err.response ? err.response.data : err.message);
      setErrorMessage(err.response ? err.response.data.msg : 'Login failed');
    }
  };

  return (
    <div className="col-md-6 right-box px-lg-5 py-lg-3 d-flex justify-content-center align-items-center">
      <div className="row align-items-center border p-sm-2 p-xl-5">
        <div className="header-text mt-3 mb-3 text-center">
          <p>Sign In</p>
          <p>We are happy to have you back.</p>
        </div>

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        <form onSubmit={handleSignIn}>
          <div className="input-group mb-2">
            <input
              className="form-control form-control-lg fs-6 bg-light pb-3"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group mb-1">
            <input
              className="form-control form-control-lg fs-6 bg-light pb-3"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye" onClick={togglePasswordVisibility}>
              <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
            </span>
          </div>

          <div className="input-group mb-4 d-flex justify-content-between align-items-center">
            {/* <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label text-secondary rememberMe" htmlFor="rememberMe">
                <small>Remember me</small>
              </label>
            </div> */}
            <div className="forget">
              <small><Link to="/forgetPassword">Forgot password?</Link></small>
            </div>
          </div>

          <div className="input-group mb-2">
            <button type="submit" className="btn btn-primary btn-lg w-100 fs-6 logo-color btn-login">
              Sign In
            </button>
          </div>
        </form>

        <div className="row text-center sup mb-3">
          <small>Don't have an account? <Link to="/register">SIGN UP</Link></small>
        </div>
      </div>
    </div>
  );
};

export default RightBoxLogin;
