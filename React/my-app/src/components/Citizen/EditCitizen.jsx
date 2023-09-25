import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './citizen.css'
import SidebarAdmin from '../AdminPage/IndexAdmin';

function EditCitizen() {
  const navigate = useNavigate()
  const {id} = useParams()

  const [first_name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type_utilisateur, setTypeUtilisateur] = useState('');

  useEffect (() => {
    getCitizen()
  },[])

  const formData = new FormData();
  formData.append('first_name', first_name);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('type_utilisateur', type_utilisateur);

  const getCitizen = async () => {
    await axios.get(`http://127.0.0.1:8000/api/auth/edit_citizen/${id}`)
    .then(({data}) => {
      console.log('data',data)
      const { first_name, email, password, type_utilisateur } = data.user
      setFirstName(first_name);
      setEmail(email);
      setPassword(password);
      setTypeUtilisateur(type_utilisateur);
    })
    .catch(({response:{data}}) => {

    })
  }

  const updateCitizen = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('first_name', first_name);
    formData.append('email', email);
      
      await axios.post(`http://127.0.0.1:8000/api/auth/update_citoyen/${id}`, formData)
      .then((data) => {
        console.log({
          icon:'success',
          title:'Citizen updated successfully'
        })
        alert('Citizen updated successfully')
        navigate('/all-citizens')
      })
      .catch((error) => {

      })
  }


  return (
    <div style={{background: '#ddd', height: '100vh', paddingTop: '50px'}}>
    <div className="containeres" style={{background: '#fff'}}>
      <SidebarAdmin />
      <h2>Update Citizen</h2>
      <div>
        <label htmlFor="firstName">FistName:</label>
        <input
          className="firstName"
          type="text"
          id="first_name"
          name="firstName"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
      </div>
  
      <div>
        <label htmlFor="typeUtilisateur">Type Utilisateur:</label>
        <input
          className="typeUtilisateur"
          type="text"
          id="typeUtilisateur"
          name="typeUtilisateur"
          value={type_utilisateur}
          onChange={(e) => setTypeUtilisateur(e.target.value)}
          disabled
        />
      </div>
      <button type="submit" onClick={(event) => updateCitizen(event)}>Update Citizen</button>
    </div>
    </div>
  )
}

export default EditCitizen