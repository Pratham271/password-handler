import React, { useState, useContext } from 'react';
import passwordContext from '../context/passwords/passwordContext';
import PasswordCard from './PasswordCard';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function SavedPassword() {
  const context = useContext(passwordContext);
  const { pass, getPassword } = context;
  const [showPassword, setShowPassword] = useState(false);

  useState(() => {
    getPassword();
    // eslint-disable-next-line
  }, []);

  const [selectedPassword, setSelectedPassword] = useState(null);

  const updatePassword = (password) => {
    // Update password logic
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleEditPassword = (password) => {
    setSelectedPassword(password);
  };

  const handleCloseModal = () => {
    setSelectedPassword(null);
  };

  return (
    <div>
      <h2 className="text-3xl mt-3 font-latoBold">Saved Passwords</h2>
      <div className="flex flex-wrap">
        {pass.map((password) => (
          <PasswordCard
            key={password._id}
            updatePassword={updatePassword}
            password={password}
            onEditPassword={handleEditPassword}
          />
        ))}
      </div>

      {selectedPassword && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow w-full sm:max-w-md">
            <h2 className="text-2xl font-bold mb-4">Edit Password</h2>
            {/* Form to edit password details */}
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Username</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={selectedPassword.username}
                  // Add onChange handler to update the username
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-sm font-bold mb-1">Password</label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name=""
                    id=""
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    defaultValue={selectedPassword.password}
                  />
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="ml-2 text-gray-600"
                  >
                    {showPassword ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <FiEye size={18} />
                    )}
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Website</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={selectedPassword.website}
                  // Add onChange handler to update the website
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  // Add onClick handler to update the password
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SavedPassword;
