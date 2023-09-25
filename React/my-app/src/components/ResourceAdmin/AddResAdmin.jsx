import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './adres.css';
import {useNavigate} from 'react-router-dom';
import IndexAdmin from '../AdminPage/IndexAdmin';

const AddResourceForm = () => {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [nomRessource, setNomRessource] = useState('');
  const [description, setDescription] = useState('');
  const [imageRessource, setImageRessource] = useState('');
  const [dateAjout, setDateAjout] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [zones, setZones] = useState([]);
  const [zoneId, setZoneId] = useState('');
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/categories/');
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchZones = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/zone_geographiques/');
        setZones(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/auth/users/');
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
    fetchZones();
    fetchUsers();
  }, []);

  useEffect(() => {
    const getPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLongitude(position.coords.longitude);
            setLatitude(position.coords.latitude);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };

    getPosition();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('longitude', longitude);
      formData.append('latitude', latitude);
      formData.append('nom_ressource', nomRessource);
      formData.append('description', description);
      formData.append('image_ressource', imageRessource);
      formData.append('date_ajout', dateAjout);
      formData.append('category_id', categoryId);
      formData.append('zone_id', zoneId);
      formData.append('user_id', userId);
      navigate('/all-resources/admin');

      await axios.post('http://127.0.0.1:8000/api/ressources', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'title': alert('A resource was successfully added'),
        },
      });

      // Clear form inputs and error message
      setLongitude('');
      setLatitude('');
      setNomRessource('');
      setDescription('');
      setImageRessource('');
      setDateAjout('');
      setCategoryId('');
      setZoneId('');
      setUserId('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div style={{background: '#ddd', height: '100vh', paddingTop: '40px'}}>
      <IndexAdmin />
    <form onSubmit={handleFormSubmit} encType="multipart/form-data" style={{marginLeft: '30%', marginRight: 'auto'}}>
      <h2>Add a Resource</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <div>
        <label htmlFor="longitude">Longitude:</label>
        <input
          className="addres"
          type="number"
          id="longitude"
          name="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          required
          disabled
        />
      </div>
      <div>
        <label htmlFor="latitude">Latitude:</label>
        <input
          className="addres"
          type="number"
          id="latitude"
          name="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          required
          disabled
        />
      </div>
      <div>
        <label htmlFor="nom-ressource">Name of Resource:</label>
        <input
          className="addres"
          type="text"
          id="nom-ressource"
          name="nom_ressource"
          value={nomRessource}
          onChange={(e) => setNomRessource(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="image-ressource">Image:</label>
        <input
          className="addres"
          type="file"
          id="image-ressource"
          name="image_ressource"
          onChange={(e) => setImageRessource(e.target.files[0])}
          accept="image/*"
        />
      </div>
      <div>
        <label htmlFor="date-ajout">Date Added:</label>
        <input
          className="addres"
          type="date"
          id="date-ajout"
          name="date_ajout"
          value={dateAjout}
          onChange={(e) => setDateAjout(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category_id"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">--Select a Category--</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.nom_categorie}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="zone">Zone:</label>
        <select
          id="zone"
          name="zone_id"
          value={zoneId}
          onChange={(e) => setZoneId(e.target.value)}
          required
        >
          <option value="">--Select a Zone--</option>
          {zones.map((zone) => (
            <option key={zone.id} value={zone.id}>
              {zone.ville}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="user">User:</label>
        <select
          id="user"
          name="user_id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        >
          <option value="">--Select a User--</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.first_name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add Resource</button>
    </form>
    </div>
  );
};

export default AddResourceForm;