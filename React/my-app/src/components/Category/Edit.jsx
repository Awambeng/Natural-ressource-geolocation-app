import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './category.css';

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/categories/${id}`);
      const { nom_categorie } = response.data;
      setCategoryName(nom_categorie);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCategory = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/categories/${id}`, {
        nom_categorie: categoryName,
      });
      console.log(response.data);
      alert('Category has been updated successfully.');
      navigate('/cat');
    } catch (error) {
      console.error(error);
      alert('Failed to update category.');
    }
  };
  
  return (
    <div className="Containers">
      <div className="category_edit">
        <div className="titlebar">
          <div className="titlebar_item">
            <h1>Edit Category</h1>
          </div>
          <div className="titlebar_item">
            <button className="btn5" onClick={updateCategory}>
              Modify
            </button>
          </div>
        </div>
        <div className="card__wrapper">
          <div className="wrapper_left">
            <div className="cards">
              <p>Category Name</p>
              <input
                type="text"
                className="cat"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;