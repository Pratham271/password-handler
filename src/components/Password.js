import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function getRandomCharacterFromString(string) {
  const randomIndex = Math.floor(Math.random() * string.length);
  return string[randomIndex];
}

function Password() {
  const characters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
  const numbers = "0123456789";
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [showPass, setShowPass] = useState(false);
  const [passlength, setPassLength] = useState(10);
  const [useChar, setUseChar] = useState(false);
  const [useNum, setUseNum] = useState(false);
  const [useLowerAlph, setLowerAlph] = useState(false);
  const [useUpperAlph, setUpperAlph] = useState(false);

  const generatePassword = (e) => {
    e.preventDefault();
    let password = '';
  
    if (!useChar && !useNum && !useLowerAlph && !useUpperAlph) {
        setShowPass(false);
        alert('Please select at least one checkbox.');
        return;
    }
  
    const sets = [
      { enabled: useChar, characters: characters },
      { enabled: useNum, characters: numbers },
      { enabled: useLowerAlph, characters: lowerCaseAlphabet },
      { enabled: useUpperAlph, characters: upperCaseAlphabet },
    ];
  
    const selectedSets = sets.filter((set) => set.enabled);
  
    if (selectedSets.length === 0) {
      alert('Please select at least one checkbox.');
      return;
    }
  
    for (let i = 0; i < selectedSets.length; i++) {
      const currentSet = selectedSets[i];
      password = password.concat(getRandomCharacterFromString(currentSet.characters));
    }
  
    let remainingLength = passlength - selectedSets.length;
  
    while (remainingLength > 0) {
      const randomSetIndex = Math.floor(Math.random() * selectedSets.length);
      const currentSet = selectedSets[randomSetIndex];
      password = password.concat(getRandomCharacterFromString(currentSet.characters));
      remainingLength--;
    }
  
    setShowPass(true);
    setPass(password);
  };
  

  const [password, setPass] = useState('');

  return (
    <div className="p-6 items-center justify-center  h-screen bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/password.png)` }}>
      <form onSubmit={generatePassword} className="flex flex-col space-y-4 rounded-lg bg-white  p-8 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-6 md:mt-12 lg:mt-16 mx-auto">
      <h1 className="text-3xl pb-2 font-bold">Generate Your Password</h1>
        <label htmlFor="length" className="text-lg">
          Tell the length of the password
          <input
            type="number"
            name="length"
            value={passlength}
            onChange={(e) => setPassLength(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-teal-500 ml-3 text-black"
          />
        </label>

        <label htmlFor="character" className="text-lg flex items-center justify-center">
          <input
            type="checkbox"
            checked={useChar}
            onChange={(e) => setUseChar(e.target.checked)}
            className="mr-2"
          />
          Include Special Characters
        </label>

        <label htmlFor="numbers" className="text-lg flex items-center justify-center">
          <input
            type="checkbox"
            checked={useNum}
            onChange={(e) => setUseNum(e.target.checked)}
            className="mr-2"
          />
          Include Numbers
        </label>

        <label htmlFor="lowercase" className="text-lg flex items-center justify-center">
          <input
            type="checkbox"
            checked={useLowerAlph}
            onChange={(e) => setLowerAlph(e.target.checked)}
            className="mr-2"
          />
          Include Lowercase Alphabets
        </label>

        <label htmlFor="uppercase" className="text-lg flex items-center justify-center">
          <input
            type="checkbox"
            checked={useUpperAlph}
            onChange={(e) => setUpperAlph(e.target.checked)}
            className="mr-2"
          />
          Include Uppercase Alphabets
        </label>

        <button
          type="submit"
          className="bg-teal-500 text-white py-2 px-4 rounded-md text-lg font-bold justify-center w-24 mx-auto"
        >
          Submit
        </button>
      </form>

      {showPass && <><h1 className="text-xl mt-4 text-white font-semibold">Your Password : {password}</h1> <button className="bg-teal-500 text-white py-2 px-4 rounded-md text-lg font-bold justify-center w-48 mx-auto mt-2"><Link to={`/purpose?password=${encodeURIComponent(password)}`}>Save to the vault!</Link></button></>}
    </div>
  );    
}

export default Password;
