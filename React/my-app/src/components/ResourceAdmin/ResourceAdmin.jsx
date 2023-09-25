// import React, { useState, useEffect } from 'react';
// import { Table } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { MdDeleteForever } from 'react-icons/md';
// import { BsPencilSquare } from 'react-icons/bs';
// import axios from 'axios';
// import SidebarAdmin from '../AdminPage/IndexAdmin';
// import './listres.css';
// // import { GrLocation } from 'react-icons/gr';
// import { FaSearchLocation } from 'react-icons/fa';

// const ResourceTable = () => {
//   const [resources, setResources] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/api/ressources')
//       .then(response => response.json())
//       .then(data => setResources(data));
//   }, []);

// const editResource = (id) => {
//   navigate('/resource/edit/'+id)
// }

// const deleteResource = async (id) => {
//   if (window.confirm('Are you sure you want to delete this resource?')) {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/delete_resource/'+id);
//       console.log(response.data);
//       alert('Resource successfully deleted.');
//       navigate('/all-resources/admin')
//     } 
//     catch (error) {
//       console.error(error);
//       alert('Failed to delete resource.');
//     }
//   }
// };

//   return (
//     <div style={{background: '#ddd', height: '100vh'}}>
//       <SidebarAdmin />
//     <div className="table-container">
//       <h1>LIST OF RESOURCES</h1>
//       <button style={{marginLeft: '160px'}}>
//       {/* <button> */}
//         <a href="/resource/admin/new">Add Resource</a>
//       </button>
//     <Table striped bordered hover style={{width: 'auto', marginLeft: '160px', marginRight: 'auto'}}>
//     {/* <Table striped bordered hover> */}
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Name</th>
//           <th>Longitude</th>
//           <th>Latitude</th>
//           <th>Description</th>
//           <th>Category</th>
//           <th>Location</th>
//           <th>Added By</th>
//           <th>Date Added</th>
//           <th>Image</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {resources.map((resource, index) => (
//           <tr key={resource.id}>
//             <td>{index + 1}</td>
//             <td>{resource.nom_ressource}</td>
//             <td>{resource.longitude}</td>
//             <td>{resource.latitude}</td>
//             <td style={{alignItems: 'justify'}}>{resource.description}</td>
//             <td>{resource.category.nom_categorie}</td>
//             <td>{resource.zone.ville}</td>
//             <td>{resource.user ? resource.user.first_name : 'Unknown'}</td>
//             <td>{resource.date_ajout}</td>
//             <td>
//               <img src={'http://localhost:8000' + resource.image_ressource} alt={resource.nom_ressource} />
//             </td>
//             <td className="action">
//                 <BsPencilSquare className="btn-icons success" onClick={() => editResource(resource.id)} />
//                 <MdDeleteForever className="btn-icons danger" onClick={() => deleteResource(resource.id)} />
//                 <FaSearchLocation style={{color: '#627fb1'}} className="btn-icons" onClick={() => deleteResource(resource.id)} />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//     </div>
//     </div>
//   );
// };

// export default ResourceTable;



import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';
import axios from 'axios';
import SidebarAdmin from '../AdminPage/IndexAdmin';
import './listres.css';
import { FaSearchLocation } from 'react-icons/fa';

const ResourceTable = () => {
  const [resources, setResources] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/ressources')
      .then(response => response.json())
      .then(data => setResources(data));
  }, []);

  const editResource = (id) => {
    navigate('/resource/edit/'+id);
  };

const deleteResource = async (id) => {
  if (window.confirm('Are you sure you want to delete this resource?')) {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/delete_resource/'+id);
      console.log(response.data);
      alert('Resource successfully deleted.');
      navigate('/all-resources/admin')
    } 
    catch (error) {
      console.error(error);
      alert('Failed to delete resource.');
    }
  }
};

  const searchResource = (longitude, latitude, nom_ressource) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`);
    alert(`Showing location of ${nom_ressource} on map.`);
  };

  return (
    <div style={{background: '#ddd', height: '100vh'}}>
      <SidebarAdmin />
      <div className="table-container">
        <h1>LIST OF RESOURCES</h1>
        <button style={{marginLeft: '200px'}}>
          <a href="/resource/admin/new">Add Resource</a>
        </button>
        <Table striped bordered hover style={{width: 'auto', marginLeft: '200px', marginRight: 'auto'}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Description</th>
              <th>Category</th>
              <th>Location</th>
              <th>Added By</th>
              <th>Date Added</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource, index) => (
              <tr key={resource.id}>
                <td>{index + 1}</td>
                <td>{resource.nom_ressource}</td>
                <td>{resource.longitude}</td>
                <td>{resource.latitude}</td>
                <td style={{alignItems: 'justify'}}>{resource.description}</td>
                <td>{resource.category.nom_categorie}</td>
                <td>{resource.zone.ville}</td>
                <td>{resource.user ? resource.user.first_name : 'Unknown'}</td>
                <td>{resource.date_ajout}</td>
                <td>
                  <img src={'http://localhost:8000' + resource.image_ressource} alt={resource.nom_ressource} />
                </td>
                <td className="action">
                  <BsPencilSquare className="btn-icons success" onClick={() => editResource(resource.id)} />
                  <MdDeleteForever className="btn-icons danger" onClick={() => deleteResource(resource.id)} />
                  <FaSearchLocation style={{color: '#627fb1'}} className="btn-icons" onClick={() => searchResource(resource.longitude, resource.latitude, resource.nom_ressource)} />
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

