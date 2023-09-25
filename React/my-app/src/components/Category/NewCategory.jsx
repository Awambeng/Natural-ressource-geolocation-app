import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SidebarAdmin from '../AdminPage/IndexAdmin';
import './category.css';

function NewCategory() {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createCategory = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("nom_categorie", categoryName);
  
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/categories", formData);
      console.log(response.data); // log the response from the API
      console.log({
        icon: "success",
        title: alert("New Category Added Successfully"),
      });
      navigate("/Category/List");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.errors);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div style={{background: '#ddd', height: '100vh', paddingTop: '50px'}}>
      <SidebarAdmin />
    <form>
      <div className="category_create">
        <div className="titlebar">
          <div className="titlebar_item">
            <h2 style={{paddingBottom: '30px'}}>Add Category</h2>
          </div>
          <div className="titlebar_item">
          </div>
        </div>
        <div>
        <label htmlFor="category_name">Category Name:</label>
        <input
          className="addres"
          type="text"
          id="cat"
          name="cat"
          value={categoryName}
          onChange={(event) => {
          setCategoryName(event.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="btn5"
          onClick={(event) => createCategory(event)}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
      </div>
    </form>
    </div>
  );
}

export default NewCategory;