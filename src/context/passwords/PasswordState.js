import { useState, useEffect } from "react";
import PasswordContext from "./passwordContext";
import initialPass from "./initialPass";

const PasswordState = (props) => {
  const [pass, setPass] = useState(initialPass);


  // Get password
  const getPassword = async() => {
    const response = await fetch('http://localhost:5000/api/passwords/fetchallpasswords',{
      method: 'GET',
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : ""
      }
    })
    const json = await response.json();
    console.log(json);
    // setPass(json)
    setPass(initialPass)
  }

  // Add password
  const addPassword = async(username, password, website) => {
    const response = await fetch(`http://localhost:5000/api/passwords/addpassword`,{
      method:'PUT',
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : ""
      },
      body : JSON.stringify({username, password, website})
    });
    const json = await response.json();
    console.log(json);
    const passw = {
      _id: Math.random().toString(36).substr(2, 9), // Generate a random ID
      user: "64a92d855cddcafaae2a3e5e",
      username: username,
      password: password,
      website: website,
      __v: 0,
    };
    setPass((prevPass) => [...prevPass, passw]);
  };

  // Delete password
  const deletePassword = async(id) => {
    // Implement delete functionality
    const response = await fetch(`http://localhost:5000/api/passwords/deletepassword/${id}`,{
      method:'DELETE',
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : ""
      },
      // body : JSON.stringify({username, password, website})
    });
    const json = await response.json();
    console.log(json);

    console.log("deleting password with id"+ id)
    const newPass = pass.filter((password)=>{return password._id!==id})
    setPass(newPass)
  };

  // Edit password
  const editPassword = async (id,username,password,website) => {

    const response = await fetch(`http://localhost:5000/api/passwords/updatepassword/${id}`,{
      method:'PUT',
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : ""
      },
      body : JSON.stringify({username, password, website})
    });
    const json = await response.json();
    console.log(json);

    // Implement edit functionality
    for(let i=0; i<pass.length; i++){
      const element = pass[i];
      if(element._id === id){
        element.username = username;
        element.password = password;
        element.website = website;
      }
    }
  };

  useEffect(() => {
    console.log(pass);
  }, [pass]);

  return (
    <PasswordContext.Provider
      value={{ pass, addPassword, deletePassword, editPassword, getPassword }}
    >
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordState;
