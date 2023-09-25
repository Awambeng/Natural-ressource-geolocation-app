import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import SidebarAdmin from '../AdminPage/IndexAdmin';
import './adres.css'

function EditResource() {
  const navigate = useNavigate()
  const {id} = useParams()

  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [nom_ressource, setNomRessource] = useState('');
  const [description, setDescription] = useState('');
  const [image_ressource, setImageRessource] = useState('');
  const [date_ajout, setDateAjout] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [zones, setZones] = useState([]);
  const [zoneId, setZoneId] = useState('');
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [avatar, setAvatar] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/categories/');
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchZones = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/zone_geographiques/');
        setZones(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/auth/users/');
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
    fetchZones();
    fetchUsers();
  }, []);

  useEffect (() => {
    getResource()
  },[])

  const getResource = async () => {
    await axios.get(`http://127.0.0.1:8000/api/get_edit_resource/${id}`)
    .then(({data}) => {
      // console.log('data',data)
      
      const { longitude, latitude, nom_ressource, description, image_ressource, date_ajout } = data.resource

      // alert(description)
      setLongitude(longitude)
      setLatitude(latitude)
      setNomRessource(nom_ressource)
      setDescription(description)
      setImageRessource(image_ressource)
      setDateAjout(date_ajout)
    })
    .catch(({response:{data}}) => {

    })
  }

  // const ourImage = (img) => {
  //   return "public/storage/images"+ img
  // }

  const updateResource = async (e) => {
    e.preventDefault();

    const formData = new FormData();
      formData.append('longitude', longitude);
      formData.append('latitude', latitude);
      formData.append('nom_ressource', nom_ressource);
      formData.append('description', description);
      formData.append('image_ressource', image_ressource);
      formData.append('date_ajout', date_ajout);
      formData.append('category_id', categoryId);
      formData.append('zone_id', zoneId);
      formData.append('user_id', userId);
      

      await axios.post(`http://127.0.0.1:8000/api/update_resource/${id}`, formData)
      .then((data) => {
        console.log({
          icon:'success',
          title:'Resource updated successfully'
        })
        alert('Resource updated successfully')
        navigate('/all-resources/admin')
      })
      .catch((error) => {

      })
  }

  return (
    <div style={{background: '#ddd', height: '100vh', paddingTop: '50px'}}>
    <div className="containeres" style={{background: '#fff'}}>
      <SidebarAdmin />
      <h2>Update Resource</h2>
      <div>
        <label htmlFor="longitude">Longitude:</label>
        <input
          className="addres"
          type="number"
          id="longitude"
          name="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="latitude">Latitude:</label>
        <input
          className="addres"
          type="number"
          id="latitude"
          name="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="nom-ressource">Name of Resource:</label>
        <input
          className="addres"
          type="text"
          id="nom-ressource"
          name="nom_ressource"
          value={nom_ressource}
          onChange={(e) => setNomRessource(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      
      {/* <div>
      <label htmlFor="image_ressource">Ressource Image:</label>
        {
          avatar===true
          ?<img 
          src={ourImage(image_ressource)}
          style={{
          width:"117px",
          height:"100px"
          }}
          />
          :<img 
          src={image_ressource}
          style={{
            width:"117px",
            height:"100px"
          }}
          />
        }
        <input
          className="addres"
          type="file"
          id="image-ressource"
          name="image_ressource"
          onChange={(e) => setImageRessource(e.target.files[0])}
          accept="image/*"
        />
      </div>  */}
      <div>
        <label htmlFor="date-ajout">Date Added:</label>
        <input
          className="addres"
          type="date"
          id="date-ajout"
          name="date_ajout"
          value={date_ajout}
          onChange={(e) => setDateAjout(e.target.value)}
          required
        />
      </div>
      {/* <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category_id"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">--Select a Category--</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.nom_categorie}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="zone">Zone:</label>
        <select
          id="zone"
          name="zone_id"
          value={zoneId}
          onChange={(e) => setZoneId(e.target.value)}
          required
        >
          <option value="">--Select a Zone--</option>
          {zones.map((zone) => (
            <option key={zone.id} value={zone.id}>
              {zone.ville}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="user">User:</label>
        <select
          id="user"
          name="user_id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        >
          <option value="">--Select a User--</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.first_name}
            </option>
          ))}
        </select>
      </div>  */}
      <button type="submit" onClick={(event) => updateResource(event)}>
        Update Resource
      </button>
    </div>
    </div>
  )
}

export default EditResource