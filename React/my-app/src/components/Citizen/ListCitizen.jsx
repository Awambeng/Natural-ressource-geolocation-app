import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';
import '../Resources/restab.css';
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../AdminPage/IndexAdmin';
import axios from 'axios';


const ListCitizen = () => {
  const navigate = useNavigate();
  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/auth/citoyen') // update the URL to match the getCitoyens() method
      .then(response => response.json())
      .then(data => setCitizens(data));
  }, []);


  const editCitizen = (id) => {
    navigate('/citizen/edit/'+id);
  }

  const deleteCitizen = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/auth/delete_citizen/'+id);
        console.log(response.data);
        alert('Citizen successfully deleted.');
        navigate('/all-citizens')
      } 
      catch (error) {
        console.error(error);
        alert('Failed to delete citizen.');
      }
    }
  };

  return (
    <div style={{background: '#ddd', height: '100vh'}}>
      <SidebarAdmin />
    <div className="table-container">
      <h1>LIST OF CITIZENS</h1>
      <button style={{marginLeft: '250px'}}>
      {/* <button> */}
        <a href="/new-citizen">Add Citizen</a>
      </button>
      {/* <Table striped bordered hover> */}
      <Table striped bordered hover style={{width: '80%', marginLeft: '250px', marginRight: 'auto'}}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Type User</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {citizens.map((citizen, index) => (
            <tr key={citizen.id}>
              <td>{index + 1}</td>
              <td>{citizen.first_name}</td>
              <td>{citizen.email}</td>
              <td>{citizen.type_utilisateur}</td>
              <td className="action" id={`btn_id${citizen.id}`}>
                <BsPencilSquare className="btn-icons success" onClick={() => editCitizen(citizen.id)} />
                <MdDeleteForever className="btn-icons danger" onClick={() => deleteCitizen(citizen.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
  );
};

export default ListCitizen;