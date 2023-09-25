import React, { useState } from 'react';
import axios from 'axios';
import './citizen.css';
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../AdminPage/IndexAdmin';

const Citizen = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [typeUtilisateur, setTypeUtilisateur] = useState('Citoyen');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setErrorMessage('Password and password confirmation do not match');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('password confirmation', passwordConfirm);
      formData.append('type_utilisateur', typeUtilisateur);
      navigate('/all-citizens');

      await axios.post(
        'http://127.0.0.1:8000/api/auth/register',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            title: alert('A citizen was successfully added'),
          },
        }
      );

      // Clear form inputs and error message
      setFirstName('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div style={{background: '#ddd', height: '100vh', paddingTop: '100px'}}>
      <SidebarAdmin />
    <form onSubmit={handleFormSubmit} style={{marginLeft: '30%', marginRight: 'auto'}}>
      <h2>Add a Citizen</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <div>
        <label htmlFor="firstName">FistName:</label>
        <input
          className="addres"
          type="text"
          id="nom-ressource"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="addres"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          className="addres"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">Confirm Password:</label>
        <input
          className="addres"
          id="passwordConfirm"
          type="password"
          name="password confirmation"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="typeUtilisateur">Type Utilisateur:</label>
        <input
          className="addres"
          type="text"
          id="typeUtilisateur"
          name="typeUtilisateur"
          value={typeUtilisateur}
          disabled
        />
      </div>
      <button type="submit">Add Citizen</button>
    </form>
    </div>
  );
};

export default Citizen;