import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';
import '../Resources/restab.css';
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../AdminPage/IndexAdmin';
import axios from 'axios';

function Zone() {
  const navigate = useNavigate();
  const [zones, setZone] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/zone_geographiques') // update the URL to match the getCitoyens() method
      .then(response => response.json())
      .then(data => setZone(data));
  }, []);

  const editZone = (id) => {
    navigate('/zone/edit/'+id);
  }

  const deleteZone = async (id) => {
    if (window.confirm('Are you sure you want to delete this zone?')) {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/delete_zone_geographique/'+id);
        console.log(response.data);
        alert('Zone successfully deleted.');
        navigate('/all-zones')
      } 
      catch (error) {
        console.error(error);
        alert('Failed to delete zone.');
      }
    }
  };

  return (
    <div style={{background: '#ddd', height: '100vh'}}>
      <SidebarAdmin />
    <div className="table-container">
      <h1>LIST OF ZONES</h1>
      <button style={{marginLeft: '250px'}}>
      {/* <button> */}
        <a href="/new-zone">Add Zone</a>
      </button>
      <Table striped bordered hover style={{width: '80%', marginLeft: '250px', marginRight: 'auto'}}>
      {/* <Table striped bordered hover> */}
        <thead>
          <tr>
            <th>#</th>
            <th>Town</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((zone, index) => (
            <tr key={zone.id}>
              <td>{index + 1}</td>
              <td>{zone.ville}</td>
              <td className="action" id={`btn_id${zone.id}`}>
                <BsPencilSquare className="btn-icons success" onClick={() => editZone(zone.id)} />
                <MdDeleteForever className="btn-icons danger" onClick={() => deleteZone(zone.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
  )
}

export default Zone