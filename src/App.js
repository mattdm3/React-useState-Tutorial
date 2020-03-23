import React, { useState } from 'react';
import './App.css';
import styled from "styled-components"

const StyledContainer = styled.div`
  margin: 20% auto; 
  text-align: center;

  h1 {
    margin: 0; 
  }

  p{
    
    text-align:center;
  }
`

const StyledForm = styled.form`
  margin: 0 auto; 
  display: flex; 
  flex-direction: column;
  align-items: center;
  margin-top: 20px; 
  padding-top: 20px; 


  input {
    margin: 10px 0; 
    width: 220px; 
    height: 40px; 
    background: #61DAFB;
    border: 1px solid #61DAFB; 
    border-radius: 5px; 
    text-align:center;
    font-size: 1.1rem;
    
  }
`

function App() {

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })

  function handleChange(e) {

    const { name, value } = e.target;

    if (name === "firstName") {
      setContact({
        ...contact,
        firstName: value
      })
    } else if (name === "lastName") {
      setContact({
        ...contact,
        lastName: value
      })
    } else if (name === "email") {
      setContact({
        ...contact,
        email: value
      })
    }




  }




  return (
    <StyledContainer>
      <h1>Hello {contact.firstName} {contact.lastName}</h1>
      <p>{contact.email}</p>
      <StyledForm>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} onBlur={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} onBlur={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleChange} />

      </StyledForm>



    </StyledContainer>
  );
}

export default App;
