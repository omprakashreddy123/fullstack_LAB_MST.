import React, { useState } from "react";


function Counter() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form Submitted:", formData); 
  };

  return (
    <div>
      <h2>React Form Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}



export default Counter;


