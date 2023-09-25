import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Sidebars from '../Sidebars/Sidebars';
import './restab.css';

const ResourceTable = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/ressources')
      .then(response => response.json())
      .then(data => setResources(data));
  }, []);

  return (
    <div style={{background: '#ddd', height: '100vh'}}>
      <Sidebars />
    <div className="table-container">
      <h1>LIST OF RESOURCES</h1>
      <button style={{marginLeft: '200px'}}>
      {/* <button> */}
        <a href="/addres">Add Resource</a>
      </button>
    <Table striped bordered hover className="table-content" style={{width: '80%', marginLeft: '200px', marginRight: 'auto'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          {/* <th>Location</th>
          <th>Added By</th>
          <th>Date Added</th> */}
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {resources.map((resource, index) => (
          <tr key={resource.id}>
            <td>{index + 1}</td>
            <td>{resource.nom_ressource}</td>
            <td style={{alignItems: 'justify'}}>{resource.description}</td>
            <td>{resource.category.nom_categorie}</td>
            {/* <td>{resource.zone.ville}</td>
            <td>{resource.user ? resource.user.first_name : 'Unknown'}</td>
            <td>{resource.date_ajout}</td> */}
            <td>
              <img src={'http://localhost:8000' + resource.image_ressource} alt={resource.nom_ressource} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </div>
  );
};

export default ResourceTable;