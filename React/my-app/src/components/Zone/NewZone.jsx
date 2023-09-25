import React, { useState } from 'react';
import axios from 'axios';
import '../Citizen/citizen.css';
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../AdminPage/IndexAdmin';


function NewZone() {
  const [ville, setVille] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('ville', ville);
      navigate('/all-zones');

      await axios.post(
        'http://127.0.0.1:8000/api/zone_geographiques',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            title: alert('A zone was successfully added'),
          },
        }
      );

      // Clear form inputs and error message
      setVille('');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <div style={{background: '#ddd', height: '100vh', paddingTop: '100px'}}>
    <SidebarAdmin />
  <form onSubmit={handleFormSubmit} style={{marginLeft: '20%', marginRight: 'auto'}}>
    <h2>Add a Zone</h2>
    {errorMessage && <div className="error">{errorMessage}</div>}
    <div>
      <label htmlFor="ville">Town:</label>
      <input
        className="addres"
        type="text"
        id="ville"
        name="ville"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
        required
      />
    </div>
    <button type="submit">Add Zone</button>
  </form>
  </div>
  )
}

export default NewZone