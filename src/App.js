import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Password from './components/Password';
import { Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import SavedPassword from './components/SavedPassword';
import Purpose from './components/Purpose';
import PasswordState from './context/passwords/PasswordState';
// import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <div className="App">
      <PasswordState>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/password' element={<Password/>} />
        <Route path='/savedpassword' element={<SavedPassword/>} />
        <Route path='/purpose' element={<Purpose/>} /> 
      </Routes>
      </PasswordState>
      {/* <Password/> */}
    </div>
  );
}

export default App;
