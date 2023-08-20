import React, {useContext, useState} from 'react';
import passwordContext from '../context/passwords/passwordContext';
import { useLocation } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Purpose() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const password = searchParams.get('password');
    const [showPassword, setShowPassword] = useState(false);
    const context = useContext(passwordContext);
    const {addPassword} = context;

    const [pass,setPass] = useState({username:"", password:password, website:""})

    const handleClick = (e) => {
      e.preventDefault();
      addPassword(pass.username, pass.password, pass.website)
    }

    const onChange =  (e) => {
      setPass({...pass, [e.target.name] : e.target.value})
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };




  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/password.png)` }}>
      <div className="flex items-center justify-center">
        <form className="bg-white flex flex-col rounded-lg w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-10 md:mt-20 lg:mt-32">
          <div className="text-gray-700 p-8">
            <h1 className="text-3xl pb-2 font-bold">Secure Your Password With Us!</h1>
            <div className="mt-6">
              <div className="pb-4">
                <label htmlFor="username" className="block text-sm font-bold pb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  onChange={onChange}
                  className="w-full p-2 border-2 rounded-md focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div className="pb-4">
      <label htmlFor="password" className="block text-sm font-bold pb-2">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={password}
          onChange={onChange}
          className="w-full p-2 border-2 rounded-md focus:border-teal-500 focus:ring-teal-500"
        />
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute right-2 top-3"
        >
          {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
        </button>
      </div>
    </div>
              <div className="pb-4">
                <label htmlFor="username" className="block text-sm font-bold pb-2">Website</label>
                <input
                  type="text"
                  name="website"
                  placeholder="Enter the Webiste"
                  onChange={onChange}
                  className="w-full p-2 border-2 rounded-md focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-6 font-bold text-sm text-white bg-teal-500 rounded-lg"
                onClick={handleClick}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Purpose
