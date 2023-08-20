import React, {useState} from 'react'
// import { AuthContext } from '../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  // const { login } = useContext(AuthContext);
  const history = useNavigate();
  const [credentials, setCredentials] = useState({username:" ", password:" "});
  
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method:'POST',
      headers:{
        'Content-type' : 'application/json'
      },
      body : JSON.stringify({username: credentials.username, password: credentials.password})
    });
    const json = await response.json()
    console.log(json);
    if(json.success){
      localStorage.setItem('token', json.token)
      history("/")
    }else{
      alert("Invalid credentials")
    }
  };

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value.trim()})
  }
 
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/password.png)` }}>
      <div className="flex items-center justify-center">
        <form className="bg-white flex flex-col rounded-lg w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-10 md:mt-20 lg:mt-32"  onSubmit={handleSubmit}>
          <div className="text-gray-700 p-8">
            <h1 className="text-3xl pb-2 font-bold">Welcome Back 👋</h1>
            <div className="mt-6">
              <div className="pb-4">
                <label htmlFor="username" className="block text-sm font-bold pb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={onChange}
                  placeholder="Enter your username"
                  className="w-full p-2 border-2 rounded-md focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div className="pb-4">
                <label htmlFor="password" className="block text-sm font-bold pb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                  placeholder="Enter a strong password"
                  className="w-full p-2 border-2 rounded-md focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-6 font-bold text-sm text-white bg-teal-500 rounded-lg"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
