import { useState, useEffect } from 'react';
import Sidebars from '../Sidebars/Sidebars';
import { Table } from 'react-bootstrap';
import './restab.css';

function MyResourcesList() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const accessToken = localStorage.getItem('accessToken');

    fetch(`http://127.0.0.1:8000/api/ressources/unique?added_by=${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Add this line to inspect the response
        setResources(data);
      })
      .catch((error) => console.error('There was a problem fetching the resources:', error));
  }, []);

  return (
    <div style={{background: '#ddd', height: '100vh'}}>
    <Sidebars />
  <div className="table-container">
    <h1>MY RESOURCES</h1>
    <button style={{marginLeft: '0px'}}>
      <a href="/addres">Add Resource</a>
    </button>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Description</th>
        <th>Date Added</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      {resources.map((resource, index) => (
        <tr key={resource.id}>
          <td>{index + 1}</td>
          <td>{resource.nom_ressource}</td>
          <td>{resource.description}</td>
          <td>{resource.date_ajout}</td>
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
}

export default MyResourcesList