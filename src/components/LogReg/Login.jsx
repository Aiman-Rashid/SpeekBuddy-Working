
// import './login.css';
// import LeftBox from './LeftBox';
// import RightBox_login from './RightBox_login';

// const Login = () => {
  

//   return (
//     <section className="vh-100 overflow-hidden">
//       <div className="container d-flex justify-content-center align-items-center h-100">
//         <div className="row p-2 box-area">
//           <LeftBox />
//           <RightBox_login/>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login; 




// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevent page reload on form submit

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         window.location.href = '/menu'; // Redirect after successful login
//       } else {
//         setError(data.message || 'Login failed. Please try again.');
//       }
//     } catch (error) {
//       setError('Server error. Please try again later.');
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label>
//           <input 
//             type="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input 
//             type="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;















import React, { useState } from 'react';
import './login.css';
import LeftBox from './LeftBox';
import RightBox_login from './RightBox_login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = '/menu'; // Redirect after successful login
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('Server error. Please try again later.');
      console.error('Login error:', error);
    }
  };

  return (
    <section className="vh-100 overflow-hidden">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row p-2 box-area">
          {/* Left Side */}
          <LeftBox />

          {/* Right Side (Login Form) */}
          <RightBox_login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            handleLogin={handleLogin}
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
