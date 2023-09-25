import React, { useEffect, useState } from 'react';
// import { BsPencilSquare } from 'react-icons/bs'; 
// import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import SidebarAdmin from '../AdminPage/IndexAdmin';
import './category.css';

function AddCategory(){
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    getCategories()
  }, [])

  const getCategories = async () => {
    try {
    const response = await axios.get("http://127.0.0.1:8000/api/categories/");
    console.log("Categories:", response.data);
    setCategories(response.data);
    } catch (error) {
    console.error(error);
    }
    }


  return (
    <div style={{background: '#ddd', height: '100vh'}}>
      <SidebarAdmin />
    <div className="table-container">
      <h1>LIST OF CATEGORIES</h1>
      {/* <button> */}
      <button style={{marginLeft: '400px'}}>
        <a href="/new-category">Add Category</a>
      </button>
      {/* <Table striped bordered hover> */}
      <Table striped bordered hover style={{width: '50%', marginLeft: '400px', marginRight: 'auto', marginTop: '10px'}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.nom_categorie}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
  );
}

export default AddCategory;