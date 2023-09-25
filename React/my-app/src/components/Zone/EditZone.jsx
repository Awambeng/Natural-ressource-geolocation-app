import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import '../Citizen/citizen.css';
import SidebarAdmin from '../AdminPage/IndexAdmin';

function EditZone() {
  const navigate = useNavigate()
  const {id} = useParams()

  const [ville, setVille] = useState('');

  useEffect (() => {
    getZone()
  },[])

  const formData = new FormData();
  formData.append('ville', ville);

  const getZone = async () => {
    await axios.get(`http://127.0.0.1:8000/api/get_edit_zone_geographique/${id}`)
    .then(({data}) => {
      console.log('data',data)
      const { ville } = data.Zone_Geographique
      setVille(ville);
    })
    .catch(({response:{data}}) => {

    })
  }

  const updateZone = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('ville', ville);
      await axios.post(`http://127.0.0.1:8000/api/update_zone_geographique/${id}`, formData)
      .then((data) => {
        console.log({
          icon:'success',
          title:'Zone updated successfully'
        })
        alert('Zone updated successfully')
        navigate('/all-zones')
      })
      .catch((error) => {

      })
  }

  return (
    <div style={{background: '#ddd', height: '100vh', paddingTop: '50px'}}>
    <div className="containeres" style={{background: '#fff'}}>
      <SidebarAdmin />
    <h2>Update Zone</h2>
    <div>
      <label htmlFor="firstName">Town:</label>
      <input
        className="addres"
        type="text"
        id="ville"
        name="ville"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
        required
      />
    </div>
    <button type="submit" onClick={(event) => updateZone(event)}>Update Zone</button>
  </div>
  </div>
  )
}

export default EditZone