import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/LogReg/Login.jsx';
import Reg from './components/LogReg/Reg.jsx';
import ForgetPassword from './components/LogReg/forgetPassword.jsx';
import ResetPassword from './components/LogReg/ResetPassword';
import Home from './components/homePage/Home';
import Menu from './components/MainMenu/menu';
import SpeechExercises from './components/exercise/SpeechExercises';
import Topic1_exe from './components/exercise/Topic1_exe';
import VowelExercise from './components/exercise/VowelExercise';
import Level2Exercise from './components/exercise/Level2Exercise';
import Level3Exercise from './components/exercise/Level3Exercise';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/speech-exercises" element={<SpeechExercises />} />
          <Route path="/Topic1_exe" element={<Topic1_exe />} />
          <Route path="/VowelExercise" element={<VowelExercise />} />
          <Route path="/level2Exercise" element={<Level2Exercise />} />
          <Route path="/level3Exercise" element={<Level3Exercise />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;