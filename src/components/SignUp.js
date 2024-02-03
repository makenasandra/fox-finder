import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

// - React Forms: https://reactjs.org/docs/forms.html

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "user",
    password: "@123456789",
    avatar: "",
    accountType: "pro",
    newsletter: true
  })

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    localStorage.setItem("username", formData.username);
    localStorage.setItem("password", formData.password);
    navigate('/login')
  }
  
  function handleChange(event) {
    const key = event.target.id
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    
    setFormData({ 
      ...formData, 
      [key]: value
    })
  }
  
  console.log(formData)

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h1>Create an Account</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
      />

      <label htmlFor="avatar">Avatar Image</label>
      <input
        type="text"
        id="avatar"
        value={formData.avatar}
        onChange={handleChange}
      />
      <img
        src={formData.avatar || "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"}
        alt="Avatar preview"
      />

      <label htmlFor="type">Account Type</label>
      <select
        id="accountType"
        value={formData.accountType}
        onChange={handleChange}
      >
        <option value="free">Free</option>
        <option value="normal">Normal</option>
        <option value="pro">Pro</option>
      </select>

      <label>
        Get Our Newsletter!
        <input
          type="checkbox"
          id="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />
      </label>

      <input type="submit" value="Sign Up" />
    </form>
    </div>
    
  );
}

export default SignUp;